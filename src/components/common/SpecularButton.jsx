import React, { useRef, useEffect } from 'react';
import './SpecularButton.css';

const PAD = 20;

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  // Base stroke hugging the edge for thickness
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  // Symmetric specular: the edges facing toward/away from the light both catch a streak
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;

function hexToRgb(hex) {
  let c = (hex || '#000000').replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16) || 0;
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

export default function SpecularButton({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  tint = '#ffffff',
  tintOpacity = 0,
  blur = 0,
  textColor = '#0f172a',
  lineColor = '#e80a0a',
  baseColor = '#e00909',
  intensity = 1,
  shineSize = 10,
  shineFade = 40,
  thickness = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  style = {}
}) {
  const btnRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = btnRef.current;
    if (!canvas || !btn) return;

    const gl = canvas.getContext('webgl2', { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) return;

    // Create program
    const createShader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, VERT);
    const fragShader = createShader(gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('SpecularButton shader error:', gl.getProgramInfoLog(program));
      return;
    }

    // Geometry: full screen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'position');
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uCenterLoc = gl.getUniformLocation(program, 'uCenter');
    const uHalfSizeLoc = gl.getUniformLocation(program, 'uHalfSize');
    const uRadiusLoc = gl.getUniformLocation(program, 'uRadius');
    const uAngleLoc = gl.getUniformLocation(program, 'uAngle');
    const uPxLoc = gl.getUniformLocation(program, 'uPx');
    const uLineColorLoc = gl.getUniformLocation(program, 'uLineColor');
    const uBaseColorLoc = gl.getUniformLocation(program, 'uBaseColor');
    const uIntensityLoc = gl.getUniformLocation(program, 'uIntensity');
    const uShineSizeLoc = gl.getUniformLocation(program, 'uShineSize');
    const uShineFadeLoc = gl.getUniformLocation(program, 'uShineFade');
    const uThicknessLoc = gl.getUniformLocation(program, 'uThickness');
    const uBaseWidthLoc = gl.getUniformLocation(program, 'uBaseWidth');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let angle = 0;
    let targetAngle = 0;
    let animId = null;
    let isMouseNear = false;

    const resize = () => {
      const rect = btn.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round((rect.width + PAD * 2) * dpr);
      const h = Math.round((rect.height + PAD * 2) * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(btn);

    const onMouseMove = (e) => {
      if (!followMouse) return;
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist <= proximity) {
        isMouseNear = true;
        targetAngle = Math.atan2(-dy, dx);
      } else {
        isMouseNear = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const lColor = hexToRgb(lineColor);
    const bColor = hexToRgb(baseColor);
    const sRad = (shineSize * Math.PI) / 180;
    const fRad = (shineFade * Math.PI) / 180;

    const render = () => {
      if (autoAnimate || !isMouseNear) {
        if (autoAnimate) {
          angle += speed * 0.05;
        }
      }
      if (isMouseNear) {
        let diff = targetAngle - angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        angle += diff * Math.min(speed, 1.0);
      }

      const rect = btn.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const btnW = rect.width * dpr;
      const btnH = rect.height * dpr;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.bindVertexArray(vao);

      gl.uniform2f(uCenterLoc, canvas.width / 2, canvas.height / 2);
      gl.uniform2f(uHalfSizeLoc, btnW / 2, btnH / 2);
      gl.uniform1f(uRadiusLoc, radius * dpr);
      gl.uniform1f(uAngleLoc, angle);
      gl.uniform1f(uPxLoc, dpr);
      gl.uniform3f(uLineColorLoc, lColor[0], lColor[1], lColor[2]);
      gl.uniform3f(uBaseColorLoc, bColor[0], bColor[1], bColor[2]);
      gl.uniform1f(uIntensityLoc, intensity);
      gl.uniform1f(uShineSizeLoc, sRad);
      gl.uniform1f(uShineFadeLoc, fRad);
      gl.uniform1f(uThicknessLoc, thickness * dpr);
      gl.uniform1f(uBaseWidthLoc, (thickness + 1.5) * dpr);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      ro.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(positionBuffer);
      gl.deleteVertexArray(vao);
    };
  }, [
    radius,
    lineColor,
    baseColor,
    intensity,
    shineSize,
    shineFade,
    thickness,
    speed,
    followMouse,
    proximity,
    autoAnimate
  ]);

  return (
    <button
      ref={btnRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`specular-button specular-button--${size} ${className}`}
      style={{
        '--sb-radius': `${radius}px`,
        '--sb-tint': tint,
        '--sb-tint-opacity': tintOpacity,
        '--sb-blur': `${blur}px`,
        '--sb-text-color': textColor,
        background: '#ffffff',
        ...style
      }}
    >
      <canvas ref={canvasRef} className="specular-button__canvas" />
      <span className="specular-button__content">{children}</span>
    </button>
  );
}

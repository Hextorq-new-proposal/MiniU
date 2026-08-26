import fs from "fs";

const svgRaw = fs.readFileSync("D:/confidentails projects/new-proposal/miniu-react/public/assets/logo/miniu-logo.svg", "utf-8");

const pathRegex = /<path([^>]+)\/>/g;
let match;
let paths = [];
while ((match = pathRegex.exec(svgRaw)) !== null) {
  const d = match[1].match(/d="([^"]+)"/)?.[1] || "";
  const fill = match[1].match(/fill="([^"]+)"/)?.[1] || "";
  const transform = match[1].match(/transform="([^"]+)"/)?.[1] || "";
  paths.push({ d, fill, transform });
}

console.log("Total paths:", paths.length);

const badgePaths = [];
const wordmarkPaths = [];
const logoMarkPaths = [];

paths.forEach((p) => {
  if (
    p.transform.includes("translate(945") ||
    p.transform.includes("translate(959") ||
    p.transform.includes("translate(938") ||
    p.transform.includes("translate(1000") ||
    p.transform.includes("translate(1037") ||
    p.transform.includes("translate(1070") ||
    p.transform.includes("translate(1115") ||
    p.transform.includes("translate(1164") ||
    p.transform.includes("translate(1169") ||
    p.transform.includes("translate(1193") ||
    p.transform.includes("translate(1211") ||
    p.transform.includes("translate(1217") ||
    p.transform.includes("translate(1240") ||
    p.transform.includes("translate(1273") ||
    p.transform.includes("translate(1274") ||
    p.transform.includes("translate(1291") ||
    p.transform.includes("translate(1292") ||
    p.transform.includes("translate(1316") ||
    p.transform.includes("translate(1319") ||
    p.transform.includes("translate(1337") ||
    p.transform.includes("translate(1101") ||
    p.transform.includes("translate(1102") ||
    p.transform.includes("translate(1003")
  ) {
    badgePaths.push(p);
  } else if (
    p.fill === "#000000" ||
    p.transform.includes("440") ||
    p.transform.includes("461") ||
    p.transform.includes("464") ||
    p.transform.includes("465") ||
    p.transform.includes("513")
  ) {
    wordmarkPaths.push(p);
  } else {
    logoMarkPaths.push(p);
  }
});

console.log(`Group counts -> Logo: ${logoMarkPaths.length}, Wordmark: ${wordmarkPaths.length}, Badge: ${badgePaths.length}`);

// Generate updated component where each path is wrapped in a <g> tag to preserve native transforms
const componentCode = `import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function IntroSplash({ onComplete }) {
  const containerRef = useRef(null)
  const logoWrapperRef = useRef(null)
  const glowRef = useRef(null)
  const logoMarkRef = useRef(null)
  const wordmarkRef = useRef(null)
  const badgeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // 10. Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem("miniu_intro_played")
    
    // 11. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (hasSeenIntro || prefersReducedMotion) {
      setIsVisible(false)
      if (onComplete) onComplete()
      return
    }

    // Mark as played for this session
    sessionStorage.setItem("miniu_intro_played", "true")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false)
          if (onComplete) onComplete()
        }
      })

      // 1. Initial State on Pure White
      gsap.set(containerRef.current, { opacity: 1, backgroundColor: "#ffffff" })
      gsap.set(glowRef.current, { opacity: 0, scale: 0.85 })
      gsap.set(logoMarkRef.current, { opacity: 0 })
      gsap.set(".logo-mark-char", { opacity: 0, y: 5 })
      gsap.set(".wordmark-char", { opacity: 0, y: 5 })
      gsap.set(badgeRef.current, { opacity: 0, scale: 0.96 })
      gsap.set(logoWrapperRef.current, { y: 0, scale: 1 })

      // Timeline sequence (~2.0 seconds total):
      
      // 2. Extremely subtle ambient crimson glow (3-5% opacity) (0.0s - 0.5s)
      tl.to(glowRef.current, {
        opacity: 0.045,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      }, 0.05)

      // 3 & 4. Reveal MiniU Logo Mark smoothly (0.1s - 0.65s)
      tl.to(logoMarkRef.current, {
        opacity: 1,
        duration: 0.2
      }, 0.1)

      // Stagger logo ribbon arches
      tl.to(".logo-mark-char", {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.03,
        ease: "power2.out"
      }, 0.12)

      // 5. Reveal individual wordmark elements (0.4s - 0.85s, small 4-6px movement, NO flying)
      tl.to(".wordmark-char", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out"
      }, 0.4)

      // 6. Reveal "A Unit Of Prajai" badge after main wordmark (0.7s - 1.1s, scale 0.96 -> 1)
      tl.to(badgeRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.7)

      // 7. Very small final settle: scale 1.008 -> 1 (1.1s - 1.45s)
      tl.to(logoWrapperRef.current, {
        scale: 1.006,
        duration: 0.22,
        ease: "sine.out"
      }, 1.1)
      tl.to(logoWrapperRef.current, {
        scale: 1.0,
        duration: 0.22,
        ease: "sine.inOut"
      }, 1.32)

      // 8. Transition upward by ~12px while splash container fades smoothly into homepage (1.6s - 2.0s)
      tl.to(logoWrapperRef.current, {
        y: -14,
        opacity: 0,
        duration: 0.38,
        ease: "power2.inOut"
      }, 1.6)

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.38,
        ease: "power2.inOut"
      }, 1.62)

    }, containerRef)

    return () => ctx.revert()
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      ref={containerRef}
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white"
      style={{ zIndex: 99999, pointerEvents: isVisible ? "all" : "none" }}
    >
      {/* 2. Extremely subtle ambient radial glow (3-5% opacity) */}
      <div
        ref={glowRef}
        className="position-absolute rounded-circle pointer-events-none"
        style={{
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(255, 1, 53, 0.35) 0%, rgba(255, 95, 3, 0.15) 45%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(45px)",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%"
        }}
      />

      {/* Main Logo Container */}
      <div ref={logoWrapperRef} className="position-relative d-flex align-items-center justify-content-center p-3" style={{ maxWidth: "480px", width: "90vw" }}>
        <svg
          viewBox="0 0 1412 560"
          className="w-100 h-auto"
          style={{ overflow: "visible" }}
        >
          {/* Logo Mark Ribbon Paths (each path wrapped in a <g> so transform is preserved) */}
          <g ref={logoMarkRef}>
            ${logoMarkPaths.map(p => `<g className="logo-mark-char"><path d="${p.d}" fill="${p.fill}" transform="${p.transform}" /></g>`).join("\n            ")}
          </g>

          {/* "A Unit Of Prajai" Badge */}
          <g ref={badgeRef} style={{ transformOrigin: "945px 45px" }}>
            ${badgePaths.map(p => `<path d="${p.d}" fill="${p.fill}" transform="${p.transform}" />`).join("\n            ")}
          </g>

          {/* MiniU Wordmark & Subtitle Text Paths (each path wrapped in a <g> so transform is preserved) */}
          <g ref={wordmarkRef}>
            ${wordmarkPaths.map(p => `<g className="wordmark-char"><path d="${p.d}" fill="${p.fill}" transform="${p.transform}" /></g>`).join("\n            ")}
          </g>
        </svg>
      </div>
    </div>
  )
}
`;

fs.writeFileSync("D:/confidentails projects/new-proposal/miniu-react/src/components/common/IntroSplash.jsx", componentCode, "utf-8");
console.log("Updated IntroSplash.jsx written successfully!");

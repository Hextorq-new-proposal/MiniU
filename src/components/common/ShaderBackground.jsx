import React, { Suspense, useState, useEffect } from "react"
import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from "shaders/react"

export default function ShaderBackground({
  primaryColor = "#ff0135",
  secondaryColor = "#ff4d6d",
  baseColor = "#ffffff",
  bgColor = "#f8fafc",
  opacity = 0.65,
  style = {}
}) {
  const [mounted, setMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || hasError) {
    return (
      <div
        className="w-100 h-100 position-absolute top-0 start-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 80% 20%, rgba(255, 1, 53, 0.06) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at 10% 80%, rgba(255, 1, 53, 0.04) 0%, rgba(255, 255, 255, 0) 50%)`,
          ...style,
        }}
      />
    )
  }

  return (
    <div
      className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none overflow-hidden"
      style={{ opacity, zIndex: 0, ...style }}
    >
      <Suspense fallback={null}>
        <Shader
          style={{ width: "100%", height: "100%" }}
          onError={() => setHasError(true)}
        >
          <Swirl colorA={baseColor} colorB={bgColor} detail={1.7} />
          <ChromaFlow
            baseColor={baseColor}
            downColor={primaryColor}
            leftColor={primaryColor}
            rightColor={secondaryColor}
            upColor={primaryColor}
            momentum={12}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.5}
            angle={30}
            frequency={7}
            highlight={0.12}
            highlightSoftness={0.2}
            lightAngle={-90}
            refraction={3.5}
            shape="rounded"
            softness={1}
            speed={0.12}
          />
          <FilmGrain strength={0.03} />
        </Shader>
      </Suspense>
    </div>
  )
}

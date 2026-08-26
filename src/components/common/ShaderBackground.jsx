import React, { Suspense, useState, useEffect } from "react"
import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from "shaders/react"

export function ShaderBackground({
  color = "#ff0135", // MiniU Crimson / Brand tone
  style = {}
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none overflow-hidden"
      style={{ zIndex: 0, ...style }}
    >
      <Suspense fallback={null}>
        <Shader style={{ width: "100%", height: "100%" }}>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor={color}
            leftColor={color}
            rightColor={color}
            upColor={color}
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </Suspense>
    </div>
  )
}

export default ShaderBackground

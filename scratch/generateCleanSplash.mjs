import fs from "fs";

const svg = fs.readFileSync("public/assets/logo/miniu-logo.svg", "utf8");
const paths = svg.match(/<path[^>]+>/g) || [];

const logoMarkIndices = [1, 2, 8, 9, 20];
const wordmarkIndices = [4, 5, 6, 7, 13, 14, 57, 58];
const badgeIndices = [3, 28, 29, 30, 34, 35, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56];
const subtitleIndices = [10, 11, 12, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 31, 32, 33, 36, 42, 51];

const logoMarkPaths = logoMarkIndices.map(i => `            <g className="logo-mark-char">${paths[i - 1]}</g>`).join("\n");
const wordmarkPaths = wordmarkIndices.map(i => `            <g className="wordmark-char">${paths[i - 1]}</g>`).join("\n");
const badgePaths = badgeIndices.map(i => `            ${paths[i - 1]}`).join("\n");
const subtitlePaths = subtitleIndices.map(i => `            ${paths[i - 1]}`).join("\n");

const componentContent = `import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function IntroSplash({ onComplete }) {
  const containerRef = useRef(null)
  const logoWrapperRef = useRef(null)
  const glowRef = useRef(null)
  const logoMarkRef = useRef(null)
  const wordmarkRef = useRef(null)
  const badgeRef = useRef(null)
  const subtitleRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem("miniu_intro_played")
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

      // 1. Initial State on Pure White with GPU acceleration
      gsap.set(containerRef.current, { opacity: 1, backgroundColor: "#ffffff" })
      gsap.set(glowRef.current, { opacity: 0, scale: 0.75 })
      gsap.set(logoMarkRef.current, { opacity: 0 })
      gsap.set(".logo-mark-char", { opacity: 0, y: 10, scale: 0.94, transformOrigin: "center center" })
      gsap.set(".wordmark-char", { opacity: 0, y: 8, scale: 0.96, transformOrigin: "center center" })
      gsap.set(badgeRef.current, { opacity: 0, scale: 0.92, transformOrigin: "945px 45px" })
      gsap.set(subtitleRef.current, { opacity: 0, y: 12 })
      gsap.set(logoWrapperRef.current, { y: 0, scale: 0.985 })

      // Timeline sequence (~4.0 seconds total, buttery smooth transitions):
      
      // 2. Ambient radial crimson glow (0.05s - 1.4s)
      tl.to(glowRef.current, {
        opacity: 0.055,
        scale: 1.06,
        duration: 1.3,
        ease: "power2.out"
      }, 0.05)

      // 3. Reveal MiniU Logo Mark (0.15s - 1.4s)
      tl.to(logoMarkRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power1.out"
      }, 0.15)

      tl.to(".logo-mark-char", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        stagger: {
          each: 0.06,
          ease: "power1.inOut"
        },
        ease: "power2.out"
      }, 0.2)

      // 4. Reveal "iniU" main letters (0.85s - 1.8s)
      tl.to(".wordmark-char", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: {
          each: 0.045,
          ease: "power1.inOut"
        },
        ease: "power2.out"
      }, 0.85)

      // 5. Reveal "A Unit Of Prajai" badge (1.5s - 2.4s)
      tl.to(badgeRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.85,
        ease: "power2.out"
      }, 1.5)

      // 6. Reveal "Small steps, big dreams" subtitle with ultra-smooth unified glide (1.8s - 2.8s)
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out"
      }, 1.8)

      // 7. Cinematic settle: gentle breathing expansion 0.985 -> 1.006 (2.6s - 3.4s)
      tl.to(logoWrapperRef.current, {
        scale: 1.006,
        duration: 0.75,
        ease: "sine.inOut"
      }, 2.6)

      // 8. Seamless upward float & reveal into homepage (3.4s - 4.0s)
      tl.to(logoWrapperRef.current, {
        y: -14,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, 3.4)

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, 3.42)

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
      {/* Ambient radial glow */}
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
          {/* 1. Logo Mark Ribbon Paths */}
          <g ref={logoMarkRef}>
${logoMarkPaths}
          </g>

          {/* 2. "A Unit Of Prajai" Badge */}
          <g ref={badgeRef} style={{ transformOrigin: "945px 45px" }}>
${badgePaths}
          </g>

          {/* 3. "iniU" Main Wordmark */}
          <g ref={wordmarkRef}>
${wordmarkPaths}
          </g>

          {/* 4. "Small steps, big dreams" Subtitle Tagline */}
          <g ref={subtitleRef}>
${subtitlePaths}
          </g>
        </svg>
      </div>
    </div>
  )
}
`;

fs.writeFileSync("src/components/common/IntroSplash.jsx", componentContent);
console.log("Successfully generated clean and perfectly grouped IntroSplash.jsx!");

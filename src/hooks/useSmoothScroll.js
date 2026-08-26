import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useSmoothScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential smooth easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    const tickerCallback = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Handle hash or top scroll on navigation
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          lenis.scrollTo(el, { offset: -80, duration: 1 })
        }
      }, 150)
    } else {
      lenis.scrollTo(0, { immediate: true })
    }

    // 2. Setup GSAP ScrollTrigger Animations for sections & cards
    const ctx = gsap.context(() => {
      // Fade-up section headers
      gsap.utils.toArray(".reveal-fade-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        })
      })

      // Staggered cards reveal (Default fade-up)
      gsap.utils.toArray(".reveal-stagger-group").forEach((group) => {
        const cards = group.querySelectorAll(".reveal-card")
        if (cards.length > 0) {
          gsap.from(cards, {
            opacity: 0,
            y: 25,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
          })
        }
      })

      // Staggered cards sliding in from the left side one by one (Sequential Left-to-Right)
      gsap.utils.toArray(".reveal-stagger-left").forEach((group) => {
        const cards = group.querySelectorAll(".reveal-slide-left")
        if (cards.length > 0) {
          gsap.from(cards, {
            opacity: 0,
            x: -45,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
          })
        }
      })

      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 300)
    })

    return () => {
      ctx.revert()
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [pathname, hash])

  return null
}

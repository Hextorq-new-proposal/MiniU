import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PAGES } from "../data/manifest"

function waitForGlobals(checkFn, timeout = 4000, interval = 50) {
  return new Promise((resolve) => {
    const start = Date.now()
    const tick = () => {
      if (checkFn()) return resolve(true)
      if (Date.now() - start > timeout) return resolve(false)
      setTimeout(tick, interval)
    }
    tick()
  })
}

export default function useInitScripts() {
  const { pathname } = useLocation()

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      // Hide preloader quickly
      const l = document.getElementById("loading")
      if (l) l.style.display = "none"

      if (cancelled) return
      document.querySelectorAll("[data-page-init]").forEach((n) => n.remove())

      // Wait for jQuery & Swiper if present
      await waitForGlobals(() => typeof window !== "undefined" && typeof window.jQuery !== "undefined")
      if (cancelled) return

      const page = PAGES[pathname] || {}
      const injectSrc = (src) =>
        new Promise((res) => {
          try {
            const s = document.createElement("script")
            s.src = src
            s.dataset.pageInit = "1"
            s.onload = res
            s.onerror = res
            document.body.appendChild(s)
          } catch {
            res()
          }
        })

      const injectInline = (code) => {
        try {
          const s = document.createElement("script")
          s.dataset.pageInit = "1"
          s.text = code
          document.body.appendChild(s)
        } catch {
          // ignore inline error
        }
      }

      const jobs = [injectSrc("/assets/js/script.js")]
      for (const x of page.extraScripts || []) jobs.push(injectSrc(x))
      await Promise.all(jobs)

      if (cancelled) return
      for (const code of page.inlineScripts || []) injectInline(code)

      if (l) l.style.display = "none"
    }

    const t = setTimeout(run, 40)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [pathname])
}

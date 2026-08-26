import React, { useState, useEffect, useRef } from "react"

const STATS_DATA = [
  { value: 8, suffix: "+", label: "Years of Dedicated Training" },
  { value: 20, suffix: "+", label: "Industry-Focused Programs" },
  { value: 20, suffix: "+", label: "Expert Corporate Mentors" },
  { value: 1500, suffix: "+", label: "Learners Trained" }
]

function StatCounter({ target, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 900 // ms
          const steps = 30
          const stepTime = duration / steps
          const increment = target / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, stepTime)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div ref={ref} className="text-center p-3">
      <div className="miniu-stat-number mb-1">
        {count.toLocaleString()}
        <span className="miniu-text-red">{suffix}</span>
      </div>
      <p className="miniu-text-muted fs-14 fw-medium mb-0">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-5 miniu-bg-slate border-bottom">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-6">
              <StatCounter
                target={item.value}
                suffix={item.suffix}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

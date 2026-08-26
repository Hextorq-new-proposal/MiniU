import React, { useState, useEffect } from "react"
import { CompanyLogo } from "../common/CompanyLogos"

const TESTIMONIALS_LIST = [
  {
    name: "Kavitha R.",
    course: "SAP FICO Program",
    role: "Associate SAP Consultant at TCS",
    company: "TCS",
    story: "I joined MiniU with no prior SAP experience after completing my B.Com. The trainer broke down every transaction code, company code setup, and GST tax configuration with real-time scenarios. The mock interviews gave me the exact confidence needed to crack the interview.",
    rating: 5
  },
  {
    name: "Vignesh Kumar",
    course: "SAP ABAP Certification",
    role: "SAP ABAP Developer at Infosys",
    company: "Infosys",
    story: "The server access was seamless and allowed me to practice classical/ALV reporting and BAPIs whenever I had time. The faculty's guidance in debugging and performance tuning was invaluable.",
    rating: 5
  },
  {
    name: "Priyanka S.",
    course: "Business Analytics",
    role: "Data Analyst at Bosch",
    company: "Bosch",
    story: "The curriculum is 100% project-based. Rather than just memorizing formulas, we built 3 end-to-end Power BI dashboards using real sales and BFSI datasets.",
    rating: 5
  }
]

export default function StudentStories() {
  const [activeStory, setActiveStory] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll testimonials every 3.5 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % TESTIMONIALS_LIST.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [isPaused])

  const current = TESTIMONIALS_LIST[activeStory]

  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom">
      <div
        className="container py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
          <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Learner Feedback
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Student Stories
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Hear directly from graduates who transformed their careers through MiniU's training.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          {/* Left Column: Big Featured Story Card */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 rounded-4 miniu-bg-slate border h-100 position-relative shadow-sm transition-all">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-1 text-warning fs-14">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <CompanyLogo name={current.company} height={20} />
              </div>

              <blockquote className="fs-17 miniu-text-dark fst-italic line-height-relaxed mb-4" style={{ minHeight: "110px" }}>
                “{current.story}”
              </blockquote>

              <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                <div>
                  <h4 className="fs-16 fw-bold miniu-text-dark mb-0">{current.name}</h4>
                  <span className="fs-13 text-danger fw-bold">{current.role}</span>
                </div>
                <span className="badge bg-white text-secondary border px-3 py-1.5 rounded-pill fs-12 fw-semibold shadow-2xs">
                  {current.course}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Switcher cards with progress indicators */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              {TESTIMONIALS_LIST.map((item, idx) => {
                const isActive = activeStory === idx
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStory(idx)}
                    className={`p-3.5 rounded-3 border transition-all cursor-pointer ${
                      isActive
                        ? "bg-white border-danger shadow-sm border-2"
                        : "bg-light border-light-subtle opacity-75 hover-opacity-100"
                    }`}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-1.5">
                      <div className="d-flex align-items-center gap-2">
                        <h5 className="fs-15 fw-bold miniu-text-dark mb-0">{item.name}</h5>
                        {isActive && (
                          <span className="badge bg-danger text-white rounded-pill px-2 py-0.5 fs-10 fw-bold">
                            Active
                          </span>
                        )}
                      </div>
                      <span className="badge bg-light text-muted border px-2 py-0.5 fs-11">
                        {item.course}
                      </span>
                    </div>
                    <p className="miniu-text-muted fs-13 line-clamp-1 mb-0">
                      {item.role}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

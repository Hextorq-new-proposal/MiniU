import React, { useState } from "react"

const TESTIMONIALS_LIST = [
  {
    name: "Kavitha R.",
    course: "SAP FICO Program",
    role: "Associate SAP Consultant at TCS",
    story: "I joined MiniU with no prior SAP experience after completing my B.Com. The trainer broke down every transaction code, company code setup, and GST tax configuration with real-time scenarios. The mock interviews gave me the exact confidence needed to crack the interview.",
    rating: 5
  },
  {
    name: "Vignesh Kumar",
    course: "SAP ABAP Certification",
    role: "SAP ABAP Developer at Infosys",
    story: "The server access was seamless and allowed me to practice classical/ALV reporting and BAPIs whenever I had time. The faculty's guidance in debugging and performance tuning was invaluable.",
    rating: 5
  },
  {
    name: "Priyanka S.",
    course: "Business Analytics",
    role: "Data Analyst at Bosch",
    story: "The curriculum is 100% project-based. Rather than just memorizing formulas, we built 3 end-to-end Power BI dashboards using real sales and BFSI datasets.",
    rating: 5
  }
]

export default function StudentStories() {
  const [activeStory, setActiveStory] = useState(0)
  const current = TESTIMONIALS_LIST[activeStory]

  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom">
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
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
            <div className="p-4 p-md-5 rounded-4 miniu-bg-slate border h-100 position-relative">
              <div className="d-flex align-items-center gap-1 text-warning mb-3">
                {"★★★★★"}
              </div>

              <blockquote className="fs-18 miniu-text-dark fst-italic line-height-relaxed mb-4">
                “{current.story}”
              </blockquote>

              <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                <div>
                  <h4 className="fs-16 fw-bold miniu-text-dark mb-0">{current.name}</h4>
                  <span className="fs-13 text-danger fw-semibold">{current.role}</span>
                </div>
                <span className="badge bg-white text-secondary border px-3 py-2 rounded-pill fs-12">
                  {current.course}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Switcher cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              {TESTIMONIALS_LIST.map((item, idx) => {
                const isActive = activeStory === idx
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStory(idx)}
                    className={`p-3 rounded-3 border transition-all cursor-pointer ${
                      isActive
                        ? "bg-white border-danger shadow-sm"
                        : "bg-light border-light-subtle opacity-75"
                    }`}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h5 className="fs-15 fw-bold miniu-text-dark mb-0">{item.name}</h5>
                      <span className="badge bg-light text-muted border px-2 py-1 fs-11">
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

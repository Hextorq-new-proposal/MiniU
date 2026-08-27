import React from "react"
import { CompanyLogo } from "../common/CompanyLogos"

const STORIES = [
  {
    name: "Kavitha R.",
    course: "SAP FICO",
    beforeRole: "Fresher (B.Com Graduate)",
    afterRole: "Associate SAP Consultant",
    company: "TCS",
    quote: "MiniU's hands-on SAP server practice and real GST/AP configuration classes helped me clear technical rounds confidently on my very first attempt."
  },
  {
    name: "Vignesh Kumar",
    course: "SAP ABAP",
    beforeRole: "Junior Developer",
    afterRole: "SAP ABAP Developer",
    company: "Infosys",
    quote: "The RICEF reporting and OData modules were explained with real manufacturing scenarios. The mock interviews prepared me thoroughly for corporate hiring."
  },
  {
    name: "Priyanka S.",
    course: "Business Analytics",
    beforeRole: "Operations Associate",
    afterRole: "Data & BI Analyst",
    company: "Bosch",
    quote: "The Power BI and SQL capstone projects directly matched what employers test in technical rounds. The 1-on-1 placement guidance made all the difference."
  }
]

export default function PlacementStories({ onOpenCounselling }) {
  return (
    <section id="placement-proof" className="py-5 py-lg-6 miniu-bg-white border-bottom">
      <div className="container py-3">

        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
          <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Verified Outcomes
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Career Outcomes
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Real career transitions from learners who trained and built projects at MiniU.
          </p>
        </div>

        {/* 3 Transformation Story Cards */}
        <div className="row g-4 align-items-stretch mb-4 reveal-stagger-group">
          {STORIES.map((story, idx) => (
            <div key={idx} className="col-lg-4 d-flex reveal-card">
              <div
                className="border border-light-subtle rounded-4 bg-white w-100 d-flex flex-column justify-content-between p-4 shadow-sm transition-all hover-shadow-lg"
                style={{
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Top subtle gradient accent line */}
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, #ff0135 0%, #ff5f03 100%)"
                  }}
                />

                <div>
                  {/* Top row: Avatar + Name / Course + Company Badge */}
                  <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                    <div className="d-flex align-items-center gap-2.5">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-13 shadow-2xs flex-shrink-0"
                        style={{
                          width: "38px",
                          height: "38px",
                          background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)"
                        }}
                      >
                        {story.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="fw-bold fs-15 text-dark mb-0">{story.name}</h4>
                        <span className="fs-12 text-muted">{story.course}</span>
                      </div>
                    </div>
                    <div className="bg-light border border-light-subtle rounded-pill px-2.5 py-1 d-inline-flex align-items-center gap-1.5 flex-shrink-0">
                      <span className="fs-10 text-muted fw-bold text-uppercase">Placed @</span>
                      <CompanyLogo name={story.company} height={16} />
                    </div>
                  </div>

                  {/* Transformation Pathway Box */}
                  <div className="p-2.5 bg-light bg-opacity-75 rounded-3 mb-3 border border-light-subtle">
                    <div className="d-flex align-items-center gap-2 mb-1 fs-12">
                      <span className="badge bg-secondary-subtle text-secondary px-2 py-0.5 fs-10 fw-bold">Before</span>
                      <span className="text-muted fs-12">{story.beforeRole}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-12">
                      <span className="badge bg-success text-white px-2 py-0.5 fs-10 fw-bold">After</span>
                      <strong className="text-dark fs-12">{story.afterRole}</strong>
                    </div>
                  </div>

                  {/* Student Quote */}
                  <p className="fst-italic fs-13 text-secondary mb-3 line-height-relaxed" style={{ minHeight: "64px" }}>
                    “{story.quote}”
                  </p>
                </div>

                {/* Footer */}
                <div className="border-top pt-3 mt-auto d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-1.5 fs-12 text-success fw-semibold">
                    <i className="fa-solid fa-circle-check text-success fs-13" />
                    <span>Verified Placement</span>
                  </div>
                  <CompanyLogo name={story.company} height={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-4 rounded-4 miniu-bg-slate border text-center max-w-800 mx-auto">
          <h4 className="fs-18 fw-bold miniu-text-dark mb-1">Want personalized guidance on your career transition?</h4>
          <p className="miniu-text-muted fs-14 mb-3">
            Speak with an academic counselor to explore which program matches your degree and background.
          </p>
          <button
            type="button"
            onClick={onOpenCounselling}
            className="btn-miniu-primary py-2 px-4 fs-14 text-white"
          >
            <span className="text-white">Book Free Career Counselling</span>
            <i className="fa-regular fa-arrow-right-long text-white" />
          </button>
        </div>

      </div>
    </section>
  )
}

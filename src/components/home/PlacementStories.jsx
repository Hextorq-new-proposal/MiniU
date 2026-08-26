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

        {/* 3 Compact Story Cards - Expand on Hover */}
        <div className="row g-4 mb-4 reveal-stagger-group">
          {STORIES.map((story, idx) => (
            <div key={idx} className="col-lg-4 reveal-card d-flex">
              <div
                className="miniu-card p-4 w-100 bg-white border border-light-subtle rounded-4 shadow-sm d-flex flex-column"
                style={{
                  minHeight: "185px",
                  maxHeight: "185px",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.maxHeight = "460px"
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(15, 23, 42, 0.1)"
                  e.currentTarget.style.transform = "translateY(-4px)"
                  const quoteEl = e.currentTarget.querySelector(".story-quote-reveal")
                  if (quoteEl) quoteEl.style.opacity = "1"
                  const hintEl = e.currentTarget.querySelector(".hover-hint-badge")
                  if (hintEl) hintEl.style.opacity = "0"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.maxHeight = "185px"
                  e.currentTarget.style.boxShadow = ""
                  e.currentTarget.style.transform = ""
                  const quoteEl = e.currentTarget.querySelector(".story-quote-reveal")
                  if (quoteEl) quoteEl.style.opacity = "0"
                  const hintEl = e.currentTarget.querySelector(".hover-hint-badge")
                  if (hintEl) hintEl.style.opacity = "1"
                }}
              >
                {/* Top Bar: Name & Company Logo Pill */}
                <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                  <div>
                    <h4 className="fs-15 fw-bold miniu-text-dark mb-0">{story.name}</h4>
                    <span className="fs-12 text-muted">{story.course}</span>
                  </div>
                  <div className="bg-light border border-light-subtle rounded-pill px-2.5 py-1 d-inline-flex align-items-center gap-1.5 flex-shrink-0">
                    <span className="fs-10 text-muted fw-bold text-uppercase">Placed @</span>
                    <CompanyLogo name={story.company} height={16} />
                  </div>
                </div>

                {/* Before / After Flow */}
                <div className="p-2.5 bg-light bg-opacity-75 rounded-3 mb-2 border border-light-subtle">
                  <div className="d-flex align-items-center gap-2 mb-1 fs-12">
                    <span className="badge bg-secondary-subtle text-secondary px-2 py-0.5 fs-10 fw-bold">Before</span>
                    <span className="text-muted">{story.beforeRole}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 fs-12">
                    <span className="badge bg-success text-white px-2 py-0.5 fs-10 fw-bold">After</span>
                    <strong className="miniu-text-dark">{story.afterRole}</strong>
                  </div>
                </div>

                {/* Hover Reveal Hint */}
                <div className="hover-hint-badge d-flex align-items-center justify-content-center text-muted fs-11 mt-1 transition-all" style={{ opacity: 1 }}>
                  <span>Hover to read full review ▾</span>
                </div>

                {/* Student Quote - smoothly revealed on hover */}
                <div className="story-quote-reveal pt-2 transition-all" style={{ opacity: 0, transition: "opacity 0.3s ease" }}>
                  <p className="text-secondary fs-13 fst-italic mb-3 line-height-relaxed">
                    “{story.quote}”
                  </p>

                  <div className="pt-2 border-top d-flex align-items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-success fs-12" />
                    <span className="fs-11 text-muted fw-semibold">Verified Placement Outcome</span>
                  </div>
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

import React from "react"

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
        <div className="row g-4 mb-4 reveal-stagger-group">
          {STORIES.map((story, idx) => (
            <div key={idx} className="col-lg-4 reveal-card">
              <div className="miniu-card p-4 justify-content-between">
                <div>
                  {/* Top Bar: Name & Course Pill */}
                  <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                    <div>
                      <h4 className="fs-16 fw-bold miniu-text-dark mb-0">{story.name}</h4>
                      <span className="fs-12 text-muted">{story.course}</span>
                    </div>
                    <span className="badge bg-light text-danger border px-2 py-1 fs-11 fw-semibold">
                      Placed @ {story.company}
                    </span>
                  </div>

                  {/* Before / After Flow */}
                  <div className="p-3 bg-light rounded-3 mb-3 border border-light-subtle">
                    <div className="d-flex align-items-start gap-2 mb-2 fs-13">
                      <span className="badge bg-secondary-subtle text-secondary px-2 py-1 fs-11">Before</span>
                      <span className="text-muted">{story.beforeRole}</span>
                    </div>
                    <div className="d-flex align-items-start gap-2 fs-13">
                      <span className="badge bg-success text-white px-2 py-1 fs-11">After</span>
                      <strong className="miniu-text-dark">{story.afterRole}</strong>
                    </div>
                  </div>

                  {/* Student Quote */}
                  <p className="text-secondary fs-13 fst-italic mb-0 line-height-relaxed">
                    “{story.quote}”
                  </p>
                </div>

                <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between">
                  <span className="fs-12 text-muted">
                    <i className="fa-solid fa-badge-check text-success me-1" />
                    Verified Placement
                  </span>
                  <span className="fs-12 fw-bold text-dark">{story.company}</span>
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
            className="btn-miniu-primary py-2 px-4 fs-14"
          >
            <span>Book Free Career Counselling</span>
            <i className="fa-regular fa-arrow-right-long" />
          </button>
        </div>
      </div>
    </section>
  )
}

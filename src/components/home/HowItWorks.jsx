import React from "react"

const STEPS = [
  {
    step: "01",
    title: "Choose Your Path",
    desc: "Explore high-demand tracks in SAP, Data, Software, or Design that align with your background."
  },
  {
    step: "02",
    title: "Talk to a Mentor",
    desc: "Attend a free 1-on-1 counseling session to review the syllabus, batch timings, and career expectations."
  },
  {
    step: "03",
    title: "Build Real Projects",
    desc: "Gain hands-on experience through 24/7 dedicated server access, real case studies, and capstones."
  },
  {
    step: "04",
    title: "Polish Your Profile",
    desc: "Craft an ATS-compliant resume, optimize your LinkedIn profile, and build a project portfolio."
  },
  {
    step: "05",
    title: "Placement Drives",
    desc: "Complete 5+ mock technical interviews and attend scheduled placement drives with hiring partners."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom">
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            The Journey
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            How MiniU Works
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            A structured, transparent roadmap from your first class to placement readiness.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="row g-4 justify-content-center reveal-stagger-group">
          {STEPS.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 reveal-card">
              <div className="p-4 rounded-4 miniu-bg-slate border h-100 position-relative transition-all hover-translate-y">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="miniu-step-number">
                    {item.step}
                  </div>
                  <span className="fs-12 text-muted fw-semibold">Step {idx + 1} of 5</span>
                </div>
                <h4 className="fs-18 fw-bold miniu-text-dark mb-2">{item.title}</h4>
                <p className="miniu-text-muted fs-14 mb-0 line-height-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react"

const WHY_POINTS = [
  {
    icon: "fa-regular fa-laptop-code",
    title: "Learn by Doing",
    desc: "Work on live enterprise scenarios and capstone projects instead of passive theory lectures alone."
  },
  {
    icon: "fa-regular fa-user-tie",
    title: "Mentor-Led Learning",
    desc: "Learn directly from certified corporate consultants with 8+ years of hands-on industry experience."
  },
  {
    icon: "fa-regular fa-briefcase",
    title: "Dedicated Career Support",
    desc: "Comprehensive resume building, technical mock interview drills, and personalized placement scheduling."
  },
  {
    icon: "fa-regular fa-calendar-clock",
    title: "Flexible Learning Formats",
    desc: "Choose between classroom training at our RS Puram campus in Coimbatore or live interactive online weekend batches."
  }
]

export default function WhyMiniU() {
  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom">
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            The MiniU Advantage
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Why Learners Choose MiniU
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            A practical, student-first learning ecosystem designed to transition you smoothly from learner to hired professional.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="row g-4 reveal-stagger-group">
          {WHY_POINTS.map((point, idx) => (
            <div key={idx} className="col-lg-3 col-sm-6 reveal-card">
              <div className="p-4 rounded-4 miniu-bg-slate border h-100 transition-all hover-translate-y">
                <div
                  className="bg-white text-danger rounded-3 d-flex align-items-center justify-content-center mb-4 border shadow-xs"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className={`${point.icon} fs-22`} />
                </div>
                <h4 className="fs-18 fw-bold miniu-text-dark mb-2">{point.title}</h4>
                <p className="miniu-text-muted fs-14 mb-0 line-height-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react"

export default function FinalCTA({ onOpenCounselling }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello MiniU! I would like to speak with a course advisor about available job-oriented training batches."
    )
    window.open(`https://wa.me/919944055555?text=${text}`, "_blank")
  }

  return (
    <section className="py-5 py-lg-6 miniu-bg-white">
      <div className="container py-4">
        <div className="p-5 rounded-4 miniu-bg-slate border border-danger-subtle text-center max-w-800 mx-auto shadow-sm">
          <span className="badge bg-danger text-white rounded-pill px-3 py-1 fs-12 fw-semibold mb-3">
            Start Your Journey Today
          </span>

          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-3">
            Ready to choose your next career move?
          </h2>

          <p className="fs-16 miniu-text-muted mb-4 max-w-600 mx-auto">
            Talk to a MiniU course advisor, review the detailed syllabus, and find the right path tailored for your degree and career goals.
          </p>

          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mb-3">
            <button
              type="button"
              onClick={onOpenCounselling}
              className="btn-miniu-primary fs-15 py-3 px-4 w-100 w-sm-auto justify-content-center"
            >
              <span>Book Free Counselling</span>
              <i className="fa-regular fa-arrow-right-long" />
            </button>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="btn btn-link text-success fw-bold text-decoration-none fs-14 d-inline-flex align-items-center gap-2 p-0"
            >
              <i className="fa-brands fa-whatsapp fs-18" />
              <span>or chat with us on WhatsApp →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

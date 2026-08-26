import React from "react"

export default function MobileCTA({ onOpenCounselling }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi MiniU! I am looking for job-oriented training guidance. Please connect me with a course advisor."
    )
    window.open(`https://wa.me/919944055555?text=${text}`, "_blank")
  }

  return (
    <div className="miniu-mobile-bar d-lg-none">
      <button
        type="button"
        onClick={handleWhatsApp}
        className="btn btn-success flex-grow-1 rounded-pill py-2 fs-13 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-xs"
      >
        <i className="fa-brands fa-whatsapp fs-16" />
        <span>WhatsApp</span>
      </button>

      <button
        type="button"
        onClick={onOpenCounselling}
        className="btn btn-danger flex-grow-1 rounded-pill py-2 fs-13 fw-semibold shadow-xs"
        style={{ backgroundColor: "var(--miniu-red)", borderColor: "var(--miniu-red)" }}
      >
        🎓 Book Counselling
      </button>
    </div>
  )
}

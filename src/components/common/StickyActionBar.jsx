import React from "react"

export default function StickyActionBar({ onOpenDemoModal, courseTitle = "MiniU Courses" }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello MiniU! I am interested in joining your job-oriented training courses (${courseTitle}). Please provide batch timings & fee details.`
    )
    window.open(`https://wa.me/919944055555?text=${text}`, "_blank")
  }

  return (
    <div
      className="d-md-none position-fixed bottom-0 start-0 w-100 bg-white border-top shadow-lg p-2 px-3 d-flex align-items-center justify-content-between gap-2"
      style={{ zIndex: 1040 }}
    >
      <button
        type="button"
        onClick={handleWhatsApp}
        className="btn btn-success flex-grow-1 rounded-pill py-2 fs-13 fw-bold d-flex align-items-center justify-content-center gap-1 shadow-sm"
      >
        <i className="fa-brands fa-whatsapp fs-16" /> WhatsApp
      </button>

      <button
        type="button"
        onClick={() => onOpenDemoModal && onOpenDemoModal({ shortTitle: courseTitle })}
        className="btn btn-danger flex-grow-1 rounded-pill py-2 fs-13 fw-bold shadow-sm"
      >
        Book Free Demo
      </button>
    </div>
  )
}

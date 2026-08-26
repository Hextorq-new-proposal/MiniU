import React, { useState } from "react"

export default function LeadModal({ isOpen, onClose, course, type = "demo" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mode: "Classroom (Coimbatore)",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const isBrochure = type === "syllabus"
  const title = isBrochure ? "Download Complete Syllabus (PDF)" : "Book a Free 1-on-1 Demo Class"
  const subtitle = isBrochure
    ? `Get detailed module breakdown & project guide for ${course?.shortTitle || "this course"}.`
    : `Experience live teaching, interact with SAP/Tech mentors, and get career roadmap guidance.`

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate instant lead processing
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi MiniU! I am interested in ${course?.shortTitle || "Courses"} (${formData.mode}). Name: ${formData.name || "Student"}, Phone: ${formData.phone || ""}. Please share details.`
    )
    window.open(`https://wa.me/919944055555?text=${text}`, "_blank")
  }

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.65)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        padding: "1rem"
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-4 shadow-lg overflow-hidden w-100"
        style={{ maxWidth: "520px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-light p-4 border-bottom d-flex align-items-start justify-content-between">
          <div>
            <span className="badge bg-danger text-white rounded-pill px-3 py-1 mb-2 fs-12 fw-semibold">
              {course?.category || "Job-Oriented Training"}
            </span>
            <h3 className="fs-20 fw-bold text-dark mb-1">{title}</h3>
            <p className="text-muted fs-13 mb-0">{subtitle}</p>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-light rounded-circle text-muted"
            onClick={onClose}
            style={{ width: "32px", height: "32px" }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {submitted ? (
            <div className="text-center py-4">
              <div
                className="bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "64px", height: "64px", fontSize: "28px" }}
              >
                ✓
              </div>
              <h4 className="fs-20 fw-bold text-dark mb-2">
                {isBrochure ? "Syllabus Download Ready!" : "Demo Class Request Received!"}
              </h4>
              <p className="text-muted fs-14 mb-4">
                Thank you, <strong>{formData.name}</strong>. Our senior academic counselor will reach out to you within 30 minutes at <strong>{formData.phone}</strong>.
              </p>

              <div className="d-flex flex-column gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn btn-success rounded-pill fw-semibold py-2 d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp fs-18" /> Chat with Counselor on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-outline-secondary rounded-pill py-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fs-13 fw-semibold text-dark mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="form-control rounded-3 py-2 fs-14 border-light-subtle"
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-sm-6">
                  <label className="form-label fs-13 fw-semibold text-dark mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="form-control rounded-3 py-2 fs-14 border-light-subtle"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label fs-13 fw-semibold text-dark mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@gmail.com"
                    className="form-control rounded-3 py-2 fs-14 border-light-subtle"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fs-13 fw-semibold text-dark mb-1">Preferred Training Mode</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="form-select rounded-3 py-2 fs-14 border-light-subtle"
                >
                  <option value="Classroom (Coimbatore - RS Puram)">Classroom Training (Coimbatore - RS Puram)</option>
                  <option value="Live Interactive Online (Weekend)">Live Online (Weekend Batch)</option>
                  <option value="Live Interactive Online (Weekday)">Live Online (Weekday Fast-Track)</option>
                </select>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-danger w-100 rounded-pill py-2 fw-semibold shadow-sm fs-15"
                >
                  {loading ? "Processing..." : isBrochure ? "Download Syllabus Now" : "Confirm Free Demo Booking"}
                </button>
              </div>

              <p className="text-muted text-center fs-12 mt-3 mb-0">
                🔒 100% Privacy. No spam. Instant counselor response.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

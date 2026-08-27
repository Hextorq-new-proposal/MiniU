import React, { useEffect, useState } from "react"
import "../../styles/blogRedesign.css"

const FIELD = ({ label, required, children }) => (
  <div>
    <label style={{ fontSize: "12px", fontWeight: 600, color: "#334155", display: "block", marginBottom: "5px" }}>
      {label} {required && <span style={{ color: "#ff0135" }}>*</span>}
    </label>
    {children}
  </div>
)

export default function LeadModal({ isOpen, onClose, course, type = "demo" }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", mode: "Classroom (Coimbatore - RS Puram)" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modeOpen, setModeOpen] = useState(false)
  const modes = [
    ["Classroom (Coimbatore - RS Puram)", "Classroom — Coimbatore (RS Puram)"],
    ["Live Interactive Online (Weekend)", "Live Online — Weekend Batch"],
    ["Live Interactive Online (Weekday)", "Live Online — Weekday Fast-Track"]
  ]

  useEffect(() => {
    if (!isOpen) {
      setModeOpen(false)
      return undefined
    }

    document.documentElement.classList.add("lenis-stopped")
    document.body.classList.add("miniu-modal-open")
    return () => {
      document.documentElement.classList.remove("lenis-stopped")
      document.body.classList.remove("miniu-modal-open")
    }
  }, [isOpen])

  if (!isOpen) return null

  const isBrochure = type === "syllabus"

  const leftBenefits = isBrochure
    ? ["Full module-by-module PDF breakdown", "Capstone project guide & tool stack", "Batch schedule & fee structure"]
    : ["Live session with a senior industry mentor", "Hands-on SAP / Tech server demo", "Personalised placement roadmap"]

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 800)
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi MiniU! I am interested in ${course?.shortTitle || "your courses"} (${formData.mode}). Name: ${formData.name || "Student"}, Phone: ${formData.phone || ""}. Please share details.`
    )
    window.open(`https://wa.me/919944055555?text=${text}`, "_blank")
  }

  return (
    <div
      className="miniu-modal-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(8, 14, 28, 0.72)", backdropFilter: "blur(6px)", zIndex: 9999, padding: "16px" }}
      onClick={onClose}
    >
      <div
        className="miniu-modal-card d-flex w-100"
        style={{ maxWidth: "640px", borderRadius: "20px", background: "#fff", boxShadow: "0 32px 80px rgba(0,0,0,0.28)" }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── LEFT TRUST PANEL ─────────────────────────────────── */}
        <div
          className="d-none d-sm-flex flex-column justify-content-between p-4"
          style={{
            width: "210px",
            minWidth: "210px",
            background: "#f8fafc",
            borderRight: "1px solid #e2e8f0",
            color: "#0f172a",
            flexShrink: 0
          }}
        >
          {/* Logo */}
          <div>
            <img
              src="/assets/logo/miniu-logo.svg"
              alt="MiniU"
              style={{ height: "30px", opacity: 0.95, marginBottom: "18px" }}
              onError={(e) => { e.target.style.display = "none" }}
            />

            <div style={{ borderTop: "1px solid #e2e8f0", marginBottom: "16px" }} />

            <p style={{ fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "12px" }}>
              {isBrochure ? "What's included" : "In your free demo"}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              {leftBenefits.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                  <span style={{
                    width: "18px", height: "18px", borderRadius: "50%",
                    background: "#fff1f3", border: "1px solid #ffd1d8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: "1px"
                  }}>
                    <span style={{ color: "#ff0135", fontSize: "9px", fontWeight: 900 }}>✓</span>
                  </span>
                  <span style={{ fontSize: "12px", color: "#334155", fontWeight: 500, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "14px" }}>
            <div style={{ display: "flex", gap: "2px", marginBottom: "5px" }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: "#f59e0b", fontSize: "13px" }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: "11.5px", color: "#475569", fontWeight: 600, margin: 0, lineHeight: 1.45 }}>
              4.9 / 5 — across 1,200+ reviews
            </p>
            <p style={{ fontSize: "11px", color: "#64748b", marginTop: "6px", marginBottom: 0 }}>
              🔒 100% private. No spam.
            </p>
          </div>
        </div>

        {/* ── RIGHT FORM PANEL ─────────────────────────────────── */}
        <div className="flex-grow-1 position-relative" style={{ padding: "28px 26px 24px" }}>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            style={{
              position: "absolute", top: "14px", right: "14px",
              width: "28px", height: "28px", borderRadius: "50%",
              border: "1.5px solid #e2e8f0", background: "#f8fafc",
              cursor: "pointer", color: "#94a3b8", fontSize: "13px",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#fee2e2"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.color = "#dc2626" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#94a3b8" }}
          >
            ✕
          </button>

          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div style={{ textAlign: "center", paddingTop: "12px" }}>
              <div
                className="miniu-modal-success-icon"
                style={{
                  width: "68px", height: "68px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: "30px", color: "#fff", marginBottom: "16px",
                  boxShadow: "0 10px 30px rgba(16,185,129,0.35)"
                }}
              >
                ✓
              </div>
              <h4 style={{ fontSize: "21px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                {isBrochure ? "Syllabus on its way!" : "Demo Booked! 🎉"}
              </h4>
              <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6, marginBottom: "22px" }}>
                Thank you, <strong style={{ color: "#0f172a" }}>{formData.name}</strong>. Our counselor will call you at{" "}
                <strong style={{ color: "#0f172a" }}>{formData.phone}</strong> within <strong style={{ color: "#ff0135" }}>30 minutes</strong>.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  style={{
                    background: "#25D366", color: "#fff", border: "none",
                    borderRadius: "10px", padding: "11px 16px", fontSize: "14px",
                    fontWeight: 600, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    transition: "background 0.2s"
                  }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: "18px" }} />
                  Chat with Counselor on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: "transparent", color: "#94a3b8",
                    border: "1.5px solid #e2e8f0", borderRadius: "10px",
                    padding: "10px", fontSize: "13px", cursor: "pointer",
                    transition: "all 0.15s"
                  }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* ── FORM STATE ── */
            <>
              {/* Pill label */}
              <span style={{
                fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.08em", color: "#ff0135",
                padding: "2px 10px", border: "1px solid #ffd1d8",
                background: "#fff1f3", borderRadius: "999px",
                display: "inline-block", marginBottom: "10px"
              }}>
                {isBrochure ? "Free Download" : "Free Demo Session"}
              </span>

              <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#0f172a", marginBottom: "3px", lineHeight: 1.3 }}>
                {isBrochure ? "Get the Full Syllabus PDF" : "Book a Free 1-on-1 Demo"}
              </h3>
              <p style={{ fontSize: "12.5px", color: "#64748b", marginBottom: "18px", lineHeight: 1.5 }}>
                {course?.shortTitle && <span style={{ fontWeight: 600, color: "#0f172a" }}>{course.shortTitle} — </span>}
                {isBrochure ? "Full module breakdown, projects & fee guide." : "Live class with a mentor. Zero commitment."}
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

                <FIELD label="Full Name" required>
                  <input
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="miniu-modal-input"
                  />
                </FIELD>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <FIELD label="Mobile" required>
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="miniu-modal-input"
                    />
                  </FIELD>
                  <FIELD label="Email" required>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="name@gmail.com"
                      className="miniu-modal-input"
                    />
                  </FIELD>
                </div>

                <FIELD label="Preferred Training Mode">
                  <div className={`miniu-mode-picker ${modeOpen ? "is-open" : ""}`}>
                    <button type="button" className="miniu-modal-input miniu-mode-trigger" onClick={() => setModeOpen(!modeOpen)} aria-expanded={modeOpen}>
                      {modes.find(([value]) => value === formData.mode)?.[1]}
                      <i className="fa-solid fa-chevron-down" />
                    </button>
                    <div className="miniu-mode-menu">
                      {modes.map(([value, label]) => (
                        <button key={value} type="button" className={formData.mode === value ? "is-selected" : ""} onClick={() => { setFormData({ ...formData, mode: value }); setModeOpen(false) }}>
                          <span>{label}</span>
                          {formData.mode === value && <i className="fa-solid fa-check" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </FIELD>

                <button type="submit" disabled={loading} className="miniu-modal-submit">
                  {loading ? (
                    <>
                      <span
                        className="miniu-modal-spinner"
                        style={{
                          width: "15px", height: "15px", borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.35)",
                          borderTopColor: "#fff", display: "inline-block"
                        }}
                      />
                      Processing...
                    </>
                  ) : isBrochure ? "Download Syllabus PDF →" : "Confirm Free Demo →"}
                </button>

                <p style={{ fontSize: "11px", color: "#94a3b8", textAlign: "center", margin: 0 }}>
                  🔒 100% private · No spam · Response within 30 min
                </p>

              </form>
            </>
          )}
        </div>

      </div>
    </div>
  )
}

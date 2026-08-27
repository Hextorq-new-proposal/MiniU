import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"
import SyllabusAccordion from "../components/courses/SyllabusAccordion"
import LeadModal from "../components/modals/LeadModal"
import StickyActionBar from "../components/common/StickyActionBar"
import { COURSES } from "../data/coursesData"

// ── Reusable mini-button ──────────────────────────────────────
function Btn({ children, onClick, variant = "primary", style: sx = {} }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: "8px", border: "none", borderRadius: "10px",
    padding: "11px 22px", fontSize: "14px", fontWeight: 700,
    cursor: "pointer", transition: "all 0.2s ease", ...sx
  }
  const variants = {
    primary:   { background: "#ff0135", color: "#fff" },
    outlined:  { background: "#fff", color: "#0f172a", border: "1.5px solid #e2e8f0" },
    whatsapp:  { background: "#25D366", color: "#fff" },
  }
  return <button type="button" onClick={onClick} style={{ ...base, ...variants[variant] }}>{children}</button>
}

export default function CourseDetails({ specificSlug = null }) {
  const params = useParams()
  const currentSlug = specificSlug || params.slug || "sap-fico"
  const course = COURSES.find((c) => c.slug === currentSlug) || COURSES[0]

  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("demo")
  const [openFaq, setOpenFaq]     = useState(null)

  const handleOpenModal = (type = "demo") => { setModalType(type); setModalOpen(true) }

  const courseSchema = {
    "@context": "https://schema.org", "@type": "Course",
    "name": course.title, "description": course.shortDesc,
    "provider": { "@type": "EducationalOrganization", "name": "MiniU EdTech Institute", "sameAs": "https://miniu.info" },
    "hasCourseInstance": { "@type": "CourseInstance", "courseMode": ["Onsite", "Online"], "courseWorkload": course.duration },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": course.rating, "reviewCount": course.reviewCount, "bestRating": "5" }
  }

  const safeImage = course.imageLarge?.startsWith("/") ? course.imageLarge : `/${course.imageLarge || "assets/images/miniu/logo.png"}`

  return (
    <>
      <SEOHead
        title={`${course.title} | MiniU EdTech Coimbatore`}
        description={course.shortDesc}
        canonicalUrl={`https://miniu.info/courses/${course.slug}`}
        schema={courseSchema}
      />

      <Header onOpenCounselling={() => handleOpenModal("demo")} />

      <main style={{ background: "#f8fafc" }}>

        {/* ══════════════════════════════════════════════════════════
            HERO BANNER
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#fff", borderBottom: "1px solid #f1f5f9", padding: "32px 0 36px" }}>
          <div className="container">

            {/* Breadcrumbs */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", marginBottom: "20px", flexWrap: "wrap" }}>
              <Link to="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "#cbd5e1" }}>/</span>
              <Link to="/courses" style={{ color: "#64748b", textDecoration: "none" }}>Courses</Link>
              <span style={{ color: "#cbd5e1" }}>/</span>
              <span style={{ color: "#64748b" }}>{course.category}</span>
              <span style={{ color: "#cbd5e1" }}>/</span>
              <span style={{ color: "#ff0135", fontWeight: 600 }}>{course.shortTitle || course.title}</span>
            </div>

            <div className="row g-4 align-items-start">
              {/* Left — title, meta, CTAs */}
              <div className="col-lg-7">
                {/* Badge row */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px", alignItems: "center" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 700, color: "#fff",
                    background: "#ff0135", padding: "3px 12px", borderRadius: "999px"
                  }}>
                    {course.category} Training
                  </span>
                  {course.badge && (
                    <span style={{
                      fontSize: "11px", fontWeight: 700, color: "#ff0135",
                      background: "#fff1f3", border: "1px solid #ffd1d8",
                      padding: "3px 12px", borderRadius: "999px"
                    }}>
                      ⭐ {course.badge}
                    </span>
                  )}
                  <span style={{
                    fontSize: "11px", fontWeight: 600, color: "#475569",
                    background: "#f8fafc", border: "1px solid #e2e8f0",
                    padding: "3px 12px", borderRadius: "999px",
                    display: "inline-flex", alignItems: "center", gap: "4px"
                  }}>
                    <span style={{ color: "#f59e0b" }}>★</span> {course.rating} ({course.reviewCount} Reviews)
                  </span>
                </div>

                <h1 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 800, color: "#0f172a", marginBottom: "12px", lineHeight: 1.25 }}>
                  {course.title}
                </h1>
                <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.65, marginBottom: "22px" }}>
                  {course.shortDesc}
                </p>

                {/* Meta strip */}
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: "24px",
                  paddingBottom: "20px", borderBottom: "1px solid #f1f5f9",
                  marginBottom: "24px"
                }}>
                  {[
                    { icon: "fa-regular fa-clock", label: "Duration", value: course.duration },
                    { icon: "fa-regular fa-location-dot", label: "Training Mode", value: "Coimbatore / Online" },
                    { icon: "fa-regular fa-briefcase", label: "Placement Support", value: "Included", green: true },
                  ].map(({ icon, label, value, green }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <i className={icon} style={{ color: "#ff0135", fontSize: "18px" }} />
                      <div>
                        <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.05em" }}>{label}</span>
                        <strong style={{ fontSize: "13.5px", color: green ? "#16a34a" : "#0f172a" }}>{value}</strong>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <Btn onClick={() => handleOpenModal("demo")} variant="primary" style={{ fontSize: "15px", padding: "13px 28px" }}>
                    🚀 Book Free Demo Session
                  </Btn>
                  <Btn onClick={() => handleOpenModal("syllabus")} variant="outlined" style={{ fontSize: "15px", padding: "13px 28px", border: "1.5px solid #e2e8f0" }}>
                    <i className="fa-regular fa-file-pdf" style={{ color: "#ff0135" }} /> Download Syllabus
                  </Btn>
                </div>
              </div>

              {/* Right — image + highlights card */}
              <div className="col-lg-5">
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,23,42,0.07)", background: "#fff" }}>
                  <img
                    src={safeImage} alt={course.title}
                    style={{ width: "100%", height: "210px", objectFit: "cover", display: "block" }}
                    onError={e => { e.target.src = "/assets/images/miniu/logo.png" }}
                  />
                  <div style={{ padding: "20px 22px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#94a3b8", margin: "0 0 12px" }}>
                      Course Key Highlights
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {course.keyHighlights?.slice(0, 5).map((hl, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#334155", lineHeight: 1.4 }}>
                          <span style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }}>✓</span>
                          {hl}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button" onClick={() => handleOpenModal("demo")}
                      style={{
                        width: "100%", padding: "11px", background: "#ff0135",
                        color: "#fff", border: "none", borderRadius: "10px",
                        fontSize: "14px", fontWeight: 700, cursor: "pointer"
                      }}
                    >
                      Enroll / Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════════════════════ */}
        <div className="container" style={{ padding: "36px 12px 60px" }}>
          <div className="row g-4">

            {/* ── LEFT COLUMN ── */}
            <div className="col-lg-8">

              {/* Overview */}
              <div style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: "14px", padding: "28px 32px", marginBottom: "20px", boxShadow: "0 1px 6px rgba(15,23,42,0.04)" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Course Overview</h2>
                <p style={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7, marginBottom: "24px" }}>{course.longDesc}</p>

                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Target Career Roles</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}>
                  {course.targetRoles?.map((role, i) => (
                    <span key={i} style={{
                      fontSize: "12.5px", fontWeight: 600, color: "#334155",
                      background: "#f1f5f9", border: "1px solid #e2e8f0",
                      padding: "5px 14px", borderRadius: "8px"
                    }}>
                      {role}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", marginBottom: "6px" }}>Prerequisites</h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0 }}>{course.prerequisites}</p>
              </div>

              {/* Syllabus */}
              <div style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: "14px", padding: "28px 32px", marginBottom: "20px", boxShadow: "0 1px 6px rgba(15,23,42,0.04)" }}>
                <SyllabusAccordion
                  syllabus={course.syllabus}
                  onDownloadSyllabus={() => handleOpenModal("syllabus")}
                />
              </div>

              {/* FAQ */}
              {course.faqs && course.faqs.length > 0 && (
                <div style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: "14px", padding: "28px 32px", boxShadow: "0 1px 6px rgba(15,23,42,0.04)" }}>
                  <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "20px" }}>Frequently Asked Questions</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {course.faqs.map((faq, i) => {
                      const isOpen = openFaq === i
                      return (
                        <div key={i} style={{
                          border: "1px solid",
                          borderColor: isOpen ? "#ffd1d8" : "#e8ecf0",
                          borderRadius: "10px",
                          background: isOpen ? "#fff8f8" : "#fff",
                          overflow: "hidden",
                          transition: "all 0.2s ease"
                        }}>
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? null : i)}
                            style={{
                              width: "100%", textAlign: "left", padding: "14px 18px",
                              background: "transparent", border: "none", cursor: "pointer",
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                              gap: "12px"
                            }}
                          >
                            <span style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>
                              {faq.question}
                            </span>
                            <span style={{
                              color: "#ff0135", fontSize: "13px", flexShrink: 0,
                              transform: isOpen ? "rotate(180deg)" : "none",
                              transition: "transform 0.2s ease"
                            }}>▼</span>
                          </button>
                          {isOpen && (
                            <div style={{ padding: "0 18px 16px" }}>
                              <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0, lineHeight: 1.65 }}>
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT STICKY SIDEBAR ── */}
            <div className="col-lg-4">
              <div style={{ position: "sticky", top: "88px", zIndex: 10, display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Demo CTA card */}
                <div style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: "14px", padding: "22px", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}>
                  <div style={{ textAlign: "center", marginBottom: "18px" }}>
                    <span style={{
                      display: "inline-block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
                      letterSpacing: "0.07em", color: "#ff0135", background: "#fff1f3",
                      border: "1px solid #ffd1d8", padding: "3px 12px", borderRadius: "999px", marginBottom: "10px"
                    }}>
                      Free Live Trial
                    </span>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>Attend a Free Demo Class</h3>
                    <p style={{ fontSize: "12.5px", color: "#64748b", margin: 0, lineHeight: 1.55 }}>
                      Experience hands-on teaching, meet mentors, and discuss batch timings.
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <button
                      type="button"
                      onClick={() => handleOpenModal("demo")}
                      style={{
                        width: "100%", padding: "12px", background: "#ff0135",
                        color: "#fff", border: "none", borderRadius: "10px",
                        fontSize: "14px", fontWeight: 700, cursor: "pointer",
                        transition: "background 0.2s"
                      }}
                    >
                      Book 1-on-1 Demo Session
                    </button>
                    <a
                      href="https://wa.me/919944055555"
                      target="_blank" rel="noreferrer"
                      style={{
                        width: "100%", padding: "11px", background: "#25D366",
                        color: "#ffffff", border: "none", borderRadius: "10px",
                        fontSize: "14px", fontWeight: 700, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "8px", textDecoration: "none"
                      }}
                    >
                      <i className="fa-brands fa-whatsapp" style={{ fontSize: "17px", color: "#fff" }} />
                      <span style={{ color: "#fff" }}>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Salary expectation */}
                {course.salaryRange && (
                  <div style={{
                    background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                    border: "1px solid #bbf7d0", borderRadius: "14px", padding: "18px 20px"
                  }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#15803d", margin: "0 0 4px" }}>
                      Avg. Salary After Training
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: 800, color: "#166534", margin: "0 0 4px" }}>
                      {course.salaryRange}
                    </p>
                    <p style={{ fontSize: "11.5px", color: "#16a34a", margin: 0 }}>Based on placed alumni data</p>
                  </div>
                )}

                {/* Location card */}
                <div style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: "14px", padding: "18px 20px", boxShadow: "0 1px 6px rgba(15,23,42,0.04)" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", margin: "0 0 12px" }}>Campus Location</p>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "10px" }}>
                    <i className="fa-solid fa-location-dot" style={{ color: "#ff0135", fontSize: "13px", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.5 }}>
                      Vayaluran Towers, RS Puram, Coimbatore, Tamil Nadu 641002
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <i className="fa-regular fa-clock" style={{ color: "#ff0135", fontSize: "13px", flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "#64748b" }}>
                      Weekday Mornings / Evenings &amp; Weekend Fast-Track
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      <StickyActionBar
        onDemoClick={() => handleOpenModal("demo")}
        onSyllabusClick={() => handleOpenModal("syllabus")}
      />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={course}
        type={modalType}
      />
    </>
  )
}

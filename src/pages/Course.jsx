import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"
import CourseCatalog from "../components/courses/CourseCatalog"
import LeadModal from "../components/modals/LeadModal"
import StickyActionBar from "../components/common/StickyActionBar"

export default function Course({ initialCategory = "all" }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("demo")
  const [activeCourse, setActiveCourse] = useState(null)

  const handleEnquire = (course = null) => {
    setActiveCourse(course)
    setModalType("demo")
    setModalOpen(true)
  }

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Job Oriented Professional Training Courses at MiniU Coimbatore",
    "description": "Comprehensive professional courses in SAP Modules, Business Analytics, Full Stack Development, Data Science, and UI/UX Design.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "SAP ABAP Training in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SAP FICO Training in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Business Analytics Course in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Data Science & Machine Learning Course in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Full Stack Web Development Course in Coimbatore"
      }
    ]
  }

  return (
    <>
      <SEOHead
        title="Job Oriented Courses in Coimbatore with Placement Support | MiniU EdTech"
        description="Explore top SAP modules (ABAP, FICO, MM, SD, HANA), Business Analytics, Data Science, Full Stack Web Development, and DevOps courses in Coimbatore at MiniU."
        canonicalUrl="https://miniu.info/courses"
        schema={catalogSchema}
      />

      <Header onOpenCounselling={() => handleEnquire(null)} />

      <main style={{ background: "#ffffff" }}>

        {/* ── Hero Header ───────────────────────────── */}
        <section style={{ background: "#ffffff", borderBottom: "1px solid #f1f5f9", padding: "52px 0 44px" }}>
          <div className="container">
            <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>

              {/* Pill badge */}
              <span style={{
                display: "inline-block", fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: "#ff0135", background: "#fff1f3",
                border: "1px solid #ffd1d8",
                padding: "4px 14px", borderRadius: "999px", marginBottom: "16px"
              }}>
                Career-Focused Industry Curriculum
              </span>

              <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, margin: "0 0 12px" }}>
                Job-Oriented Training Programs
              </h1>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.6, margin: "0 0 32px" }}>
                Learn from working industry experts, build real projects, and get placement support in top companies.
              </p>

              {/* Stats row */}
              <div style={{ display: "flex", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
                {[
                  { num: "11+",    label: "Programs" },
                  { num: "100%",   label: "Placement Support" },
                  { num: "1,200+", label: "Alumni Placed" },
                ].map((s, i) => (
                  <div key={i} style={{
                    padding: "0 28px",
                    borderRight: i < 2 ? "1px solid #e2e8f0" : "none"
                  }}>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: "#ff0135" }}>{s.num}</div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 600, marginTop: "2px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Course Catalog ─────────────────────────── */}
        <section style={{ padding: "32px 0 48px" }}>
          <CourseCatalog
            initialCategory={initialCategory}
            onEnquire={handleEnquire}
          />
        </section>

      </main>

      <Footer />

      {/* Sticky Mobile Action Bar */}
      <StickyActionBar
        courseTitle="MiniU Programs"
        onOpenDemoModal={() => handleEnquire(null)}
      />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={activeCourse}
        type={modalType}
      />
    </>
  )
}

import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function CareerPreviewSection({ onOpenCounselling }) {
  const [activeTab, setActiveTab] = useState("sap")

  const previewData = {
    sap: {
      domain: "Enterprise ERP",
      title: "SAP FICO Consultant Track",
      subtitle: "Finance / Non-Tech Background → Certified SAP Consultant",
      modulesCount: "5 Core Modules",
      topics: [
        "Financial Accounting (FI)",
        "Controlling Module (CO)",
        "S/4 HANA Finance",
        "GST & TDS Configuration"
      ],
      project: "End-to-End Enterprise Financial & Tax Workflow",
      format: "Classroom (Coimbatore) or Live Online",
      badge: "Highest Hiring Volume",
      slug: "/courses/sap-fico"
    },
    data: {
      domain: "Data & BI Analytics",
      title: "Business Analytics Track",
      subtitle: "Analyst Track → BI / Data Specialist",
      modulesCount: "6 Core Modules",
      topics: [
        "Power BI Dashboards",
        "SQL Database Queries",
        "Advanced Excel & DAX",
        "Python for Analytics"
      ],
      project: "Retail E-Commerce Performance & Sales Analytics Dashboard",
      format: "Classroom (Coimbatore) or Live Online",
      badge: "High Industry Demand",
      slug: "/courses/business-analytics"
    },
    fullstack: {
      domain: "Software Engineering",
      title: "Full Stack Web Developer Track",
      subtitle: "Frontend & Backend → Job-Ready Software Engineer",
      modulesCount: "7 Core Modules",
      topics: [
        "React 19 & Modern JS",
        "Node.js & REST APIs",
        "MongoDB & Databases",
        "CI/CD Cloud Deploy"
      ],
      project: "Full-Featured Web Platform with Auth, Stripe Payments & Admin CMS",
      format: "Classroom (Coimbatore) or Live Online",
      badge: "Fast-Track Placement",
      slug: "/courses/full-stack-web-development"
    }
  }

  const current = previewData[activeTab]

  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom reveal-fade-up">
      <div className="container py-2">
        <div className="row g-4 g-lg-5 align-items-center justify-content-between">
          {/* Left Column: Context & CTA */}
          <div className="col-lg-5">
            <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1 fs-12 fw-bold mb-3 d-inline-block">
              Curriculum Snapshot
            </span>
            <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-3">
              Interactive Career Path Explorer
            </h2>
            <p className="miniu-text-muted fs-16 mb-4 line-height-relaxed">
              Explore what you will actually learn in our industry-standard tracks. Every program includes dedicated mentor labs, enterprise tool configurations, and a production capstone project.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn bg-white border border-danger-subtle fw-bold rounded-pill px-4 py-2.5 shadow-xs d-inline-flex align-items-center gap-2 transition-all hover-translate-y fs-14"
                style={{ color: "#ff0135" }}
              >
                <span style={{ color: "#ff0135" }}>Request Custom Syllabus</span>
                <i className="fa-regular fa-arrow-right-long text-danger" />
              </button>
            </div>
          </div>

          {/* Right Column: Career Preview Card */}
          <div className="col-lg-6">
            <div
              className="bg-white border rounded-4"
              style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.07)", overflow: "hidden" }}
            >

              {/* ── Tab Switcher ─────────────────────── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom: "1px solid #f1f5f9"
                }}
              >
                {[
                  { key: "sap",       label: "SAP Track" },
                  { key: "data",      label: "Data Analytics" },
                  { key: "fullstack", label: "Full Stack" }
                ].map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setActiveTab(t.key)}
                    style={{
                      padding: "13px 8px",
                      fontSize: "13px",
                      fontWeight: 600,
                      border: "none",
                      borderBottom: activeTab === t.key ? "2.5px solid #ff0135" : "2.5px solid transparent",
                      background: "transparent",
                      color: activeTab === t.key ? "#ff0135" : "#64748b",
                      cursor: "pointer",
                      transition: "color 0.15s, border-color 0.15s",
                      textAlign: "center",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* ── Card Body ────────────────────────── */}
              <div style={{ padding: "20px 22px 18px", minHeight: "320px", display: "flex", flexDirection: "column" }}>

                {/* Title row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "4px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>
                    {current.title}
                  </h4>
                  <span
                    style={{
                      fontSize: "10px", fontWeight: 700, whiteSpace: "nowrap",
                      padding: "3px 10px", borderRadius: "999px", flexShrink: 0,
                      color: "#ff0135", background: "#fff1f3", border: "1px solid #ffd1d8"
                    }}
                  >
                    {current.badge}
                  </span>
                </div>

                {/* Subtitle */}
                <p style={{ fontSize: "12.5px", color: "#64748b", margin: "0 0 16px", lineHeight: 1.45 }}>
                  {current.subtitle}
                </p>

                {/* Core Competencies — fixed 2×2 grid */}
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#94a3b8", margin: "0 0 8px" }}>
                  Core Competencies
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    marginBottom: "16px"
                  }}
                >
                  {current.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "9px 12px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px"
                      }}
                    >
                      <span
                        style={{
                          width: "18px", height: "18px", borderRadius: "50%",
                          background: "#dcfce7", display: "flex",
                          alignItems: "center", justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        <i className="fa-solid fa-check" style={{ fontSize: "9px", color: "#16a34a" }} />
                      </span>
                      <span style={{ fontSize: "12.5px", fontWeight: 500, color: "#1e293b", lineHeight: 1.3 }}>
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Capstone Project */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "11px 14px",
                    background: "#fff8f8",
                    border: "1px solid #ffd1d8",
                    borderLeft: "3px solid #ff0135",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    marginTop: "auto"
                  }}
                >
                  <div style={{ flexShrink: 0, paddingTop: "1px" }}>
                    <span style={{ fontSize: "16px" }}>🎯</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#ff0135", display: "block", marginBottom: "3px" }}>
                      Capstone Project
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>
                      {current.project}
                    </span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "14px",
                    borderTop: "1px solid #f1f5f9"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <i className="fa-solid fa-location-dot" style={{ color: "#ff0135", fontSize: "13px" }} />
                    <span style={{ fontSize: "12.5px", color: "#64748b", fontWeight: 500 }}>
                      {current.format}
                    </span>
                  </div>
                  <Link
                    to={current.slug}
                    className="text-decoration-none"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 18px",
                      background: "#ff0135",
                      color: "#fff",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 700,
                      transition: "background 0.2s"
                    }}
                  >
                    Explore Track
                    <i className="fa-regular fa-arrow-right-long" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

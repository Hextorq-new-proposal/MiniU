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

          {/* Right Column: Compact Interactive Card */}
          <div className="col-lg-6">
            <div className="hero-mockup-card bg-white border border-light-subtle rounded-4 p-3 shadow-sm" style={{ fontSize: '0.95em' }}>
              {/* Segmented Track Switcher Tabs */}
              <div className="d-flex gap-1 p-1 bg-light rounded-pill mb-3 border border-light-subtle">
                <button
                  type="button"
                  onClick={() => setActiveTab("sap")}
                  className={`btn btn-sm flex-grow-1 fs-12 fw-bold py-1.5 rounded-pill border-0 transition-all ${
                    activeTab === "sap"
                      ? "bg-white text-dark shadow-xs"
                      : "bg-transparent text-muted hover-text-dark"
                  }`}
                >
                  SAP Track
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("data")}
                  className={`btn btn-sm flex-grow-1 fs-12 fw-bold py-1.5 rounded-pill border-0 transition-all ${
                    activeTab === "data"
                      ? "bg-white text-dark shadow-xs"
                      : "bg-transparent text-muted hover-text-dark"
                  }`}
                >
                  Data Analytics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("fullstack")}
                  className={`btn btn-sm flex-grow-1 fs-12 fw-bold py-1.5 rounded-pill border-0 transition-all ${
                    activeTab === "fullstack"
                      ? "bg-white text-dark shadow-xs"
                      : "bg-transparent text-muted hover-text-dark"
                  }`}
                >
                  Full Stack
                </button>
              </div>

              {/* Course Title & Badge */}
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h5 className="fs-15 fw-bold miniu-text-dark mb-0">{current.title}</h5>
                <span className="badge bg-danger-subtle text-danger rounded-pill px-2 py-0.5 fs-10 fw-bold">
                  {current.badge}
                </span>
              </div>
              <span className="fs-12 text-secondary d-block mb-3">{current.subtitle}</span>

              {/* Core Competencies: 2x2 Grid */}
              <div className="mb-3">
                <span className="fs-11 text-uppercase text-muted fw-bold d-block mb-2">Core Competencies</span>
                <div className="row g-2">
                  {current.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="col-6">
                      <div className="d-flex align-items-center gap-2 p-2 bg-light border border-light-subtle rounded-2 fs-12 text-dark h-100">
                        <i className="fa-solid fa-circle-check text-success fs-11 flex-shrink-0" />
                        <span className="fw-medium">{topic}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone */}
              <div className="p-2.5 bg-light bg-opacity-50 rounded-3 border-start border-3 border-danger border-top border-end border-bottom border-light-subtle mb-3">
                <span className="badge bg-danger-subtle text-danger px-2 py-0.5 rounded fs-10 fw-bold text-uppercase mb-1">
                  Capstone Project
                </span>
                <strong className="fs-13 miniu-text-dark d-block">{current.project}</strong>
              </div>

              {/* Bottom Action */}
              <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                <span className="fs-12 text-muted fw-semibold d-inline-flex align-items-center gap-1.5">
                  <i className="fa-solid fa-location-dot text-danger fs-11" />
                  <span>{current.format}</span>
                </span>
                <Link
                  to={current.slug}
                  className="btn btn-sm btn-danger text-white rounded-pill px-3 py-1.5 fs-12 fw-bold text-decoration-none shadow-xs d-inline-flex align-items-center gap-2"
                >
                  <span className="text-white">Explore Track</span>
                  <i className="fa-regular fa-arrow-right-long text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

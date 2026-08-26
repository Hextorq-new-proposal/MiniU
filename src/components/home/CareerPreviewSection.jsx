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
      topics: ["Financial Accounting (FI)", "Controlling (CO)", "S/4 HANA Finance", "GST & TDS Configuration", "Asset Accounting & BAPI"],
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
      topics: ["Power BI Interactive Dashboards", "SQL & Database Schema Queries", "Advanced Excel & DAX Modeling", "Python for Data Analytics", "Tableau Reporting"],
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
      topics: ["React 19 & Modern JavaScript", "Node.js & Express REST APIs", "MongoDB & Database Indexing", "Authentication & JWT Security", "CI/CD & Full Stack Cloud Deployment"],
      project: "Full-Featured Web Platform with Auth, Stripe Payments & Admin CMS",
      format: "Classroom (Coimbatore) or Live Online",
      badge: "Fast-Track Placement",
      slug: "/courses/full-stack-web-development"
    }
  }

  const current = previewData[activeTab]

  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom reveal-fade-up">
      <div className="container py-3">
        <div className="row g-4 align-items-center justify-content-between">
          <div className="col-lg-5">
            <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
              Curriculum Snapshot
            </span>
            <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-3">
              Interactive Career Path Explorer
            </h2>
            <p className="miniu-text-muted fs-16 mb-4 line-height-relaxed">
              Explore what you will actually learn in our industry-standard tracks. Every program includes dedicated mentor labs, enterprise tool configurations, and a production capstone project.
            </p>
            <div className="d-flex flex-wrap gap-3">
              {/* White Button for Request Custom Syllabus */}
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn bg-white border border-secondary-subtle text-dark fw-bold rounded-pill px-4 py-2.5 shadow-sm d-inline-flex align-items-center gap-2 transition-all hover-translate-y fs-14"
              >
                <span>Request Custom Syllabus</span>
                <i className="fa-regular fa-arrow-right-long text-danger" />
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Redesigned Modern SaaS Mockup Box */}
            <div className="hero-mockup-card bg-white border border-light-subtle rounded-4 p-4 shadow-sm">
              {/* Mockup Header with Live Status */}
              <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
                <div className="d-flex align-items-center gap-2.5">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "36px", height: "36px" }}>
                    <i className="fa-regular fa-compass fs-15" />
                  </div>
                  <div>
                    <h6 className="fs-14 fw-bold miniu-text-dark mb-0">Career Path Live Preview</h6>
                    <span className="fs-11 text-muted">MiniU Enterprise Standard Curriculum</span>
                  </div>
                </div>
                <span className="badge bg-danger bg-opacity-10 text-danger border border-danger-subtle rounded-pill px-2.5 py-1 fs-11 fw-bold">
                  {current.badge}
                </span>
              </div>

              {/* Interactive Segmented Track Switcher */}
              <div className="d-flex gap-1 p-1 bg-light rounded-pill mb-3 border border-light-subtle">
                <button
                  type="button"
                  onClick={() => setActiveTab("sap")}
                  className={`hero-tab-btn flex-grow-1 fs-12 fw-bold py-1.5 ${activeTab === "sap" ? "active bg-white text-dark shadow-xs" : "text-muted"}`}
                >
                  SAP Track
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("data")}
                  className={`hero-tab-btn flex-grow-1 fs-12 fw-bold py-1.5 ${activeTab === "data" ? "active bg-white text-dark shadow-xs" : "text-muted"}`}
                >
                  Data Analytics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("fullstack")}
                  className={`hero-tab-btn flex-grow-1 fs-12 fw-bold py-1.5 ${activeTab === "fullstack" ? "active bg-white text-dark shadow-xs" : "text-muted"}`}
                >
                  Full Stack
                </button>
              </div>

              {/* Course Title & Modules Card */}
              <div className="p-3 bg-light bg-opacity-75 rounded-3 mb-3 border border-light-subtle">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <h5 className="fs-15 fw-bold miniu-text-dark mb-0">{current.title}</h5>
                  <span className="badge bg-danger text-white rounded-pill px-2 py-0.5 fs-10 fw-bold">
                    {current.modulesCount}
                  </span>
                </div>
                <span className="fs-12 text-secondary d-block">{current.subtitle}</span>
              </div>

              {/* Key Skills Chip Grid */}
              <div className="mb-3">
                <span className="fs-11 text-uppercase text-muted fw-bold d-block mb-1.5">Core Competencies:</span>
                <div className="d-flex flex-wrap gap-1.5">
                  {current.topics.map((topic, tIdx) => (
                    <span key={tIdx} className="badge bg-white text-dark border border-light-subtle px-2 py-1 fs-11 fw-medium shadow-2xs">
                      ✓ {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone Project Card */}
              <div className="p-2.5 px-3 bg-white rounded-3 border border-danger-subtle mb-3.5 bg-danger-subtle bg-opacity-25">
                <span className="fs-10 text-uppercase text-danger fw-bold d-block">Production Capstone</span>
                <strong className="fs-12 miniu-text-dark">{current.project}</strong>
              </div>

              {/* Bottom Actions */}
              <div className="d-flex align-items-center justify-content-between pt-2.5 border-top">
                <span className="fs-11 text-muted fw-medium">
                  <i className="fa-regular fa-location-dot text-danger me-1" />
                  {current.format}
                </span>
                <Link
                  to={current.slug}
                  className="btn btn-sm btn-danger text-white rounded-pill px-3 py-1.5 fs-12 fw-bold text-decoration-none shadow-xs"
                >
                  <span>Explore Track →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

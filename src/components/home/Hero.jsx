import React, { useState } from "react"
import { Link } from "react-router-dom"
import ShaderBackground from "../common/ShaderBackground"

export default function Hero({ onOpenCounselling }) {
  const [activeTab, setActiveTab] = useState("sap")

  const previewData = {
    sap: {
      domain: "Enterprise ERP",
      title: "SAP FICO Program",
      subtitle: "Finance / Non-Tech → SAP Consultant",
      modulesCount: "5 Core Modules",
      topics: ["Financial Accounting (FI)", "Controlling (CO)", "S/4 HANA Finance", "GST & TDS Configuration"],
      project: "Enterprise Financial & Tax Workflow",
      format: "Classroom (Coimbatore) or Live Online",
      slug: "/courses/sap-fico"
    },
    data: {
      domain: "Data & BI",
      title: "Business Analytics Program",
      subtitle: "Analyst Track → BI / Data Specialist",
      modulesCount: "6 Core Modules",
      topics: ["Power BI Dashboards", "SQL & Database Queries", "Advanced Excel & DAX", "Python for Analytics"],
      project: "Retail E-Commerce Performance Dashboard",
      format: "Classroom (Coimbatore) or Live Online",
      slug: "/courses/business-analytics"
    },
    fullstack: {
      domain: "Web Engineering",
      title: "Full Stack Web Development",
      subtitle: "Frontend & Backend → Software Engineer",
      modulesCount: "7 Core Modules",
      topics: ["React 19 & JavaScript", "Node.js & Express APIs", "MongoDB Database", "Full Stack Deployment"],
      project: "Full-Featured Web Platform with Auth & Payments",
      format: "Classroom (Coimbatore) or Live Online",
      slug: "/courses/full-stack-web-development"
    }
  }

  const current = previewData[activeTab]

  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom position-relative overflow-hidden">
      {/* Animated WebGL Shader Background */}
      <ShaderBackground opacity={0.45} />

      <div className="container py-3 py-md-4 position-relative" style={{ zIndex: 1 }}>
        <div className="row g-5 align-items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="col-lg-7">
            {/* Interactive Admissions Open Pill */}
            <button
              type="button"
              onClick={onOpenCounselling}
              className="btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-light border border-light-subtle mb-3 text-decoration-none shadow-none"
            >
              <span className="live-pulse-dot" />
              <span className="fs-13 fw-semibold miniu-text-dark">
                Admissions Open: Classroom (Coimbatore) & Live Online
              </span>
              <span className="fs-12 text-danger fw-bold ms-1">View Batches →</span>
            </button>

            {/* Main Headline */}
            <h1 className="display-4 fw-extrabold miniu-text-dark miniu-font-display mb-3 line-height-tight">
              Build the skills. <br className="d-none d-sm-inline" />
              <span className="miniu-text-red">Build the career.</span>
            </h1>

            {/* Domain Specificity Subtitle */}
            <div className="fs-13 fw-bold text-danger mb-3 text-uppercase letter-spacing-1">
              SAP • Business &amp; Data • Development • Finance • Design
            </div>

            {/* Supporting Text */}
            <p className="fs-18 miniu-text-muted mb-4 max-w-600 line-height-relaxed">
              Industry-focused courses, practical projects, expert mentors and placement support to help you become job-ready in high-demand domains.
            </p>

            {/* Actions */}
            <div className="d-flex flex-wrap gap-3 mb-4 pb-2">
              <Link to="/courses" className="btn-miniu-primary fs-15 py-3 px-4">
                <span>Explore Courses</span>
                <i className="fa-regular fa-arrow-right-long" />
              </Link>
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn-miniu-outline fs-15 py-3 px-4"
              >
                Talk to a Course Advisor
              </button>
            </div>

            {/* 3 Core Value checklist */}
            <div className="d-flex flex-wrap gap-x-4 gap-y-2 text-secondary fs-14 fw-medium pt-2">
              <span className="d-flex align-items-center gap-2 me-3">
                <span className="text-success fw-bold">✓</span> Live Mentor Training
              </span>
              <span className="d-flex align-items-center gap-2 me-3">
                <span className="text-success fw-bold">✓</span> Practical Projects
              </span>
              <span className="d-flex align-items-center gap-2">
                <span className="text-success fw-bold">✓</span> Placement Support
              </span>
            </div>
          </div>

          {/* Right Column: Truthful Career Path Preview Card */}
          <div className="col-lg-5">
            <div className="hero-mockup-card">
              {/* Mockup Header */}
              <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                    <i className="fa-regular fa-compass fs-14" />
                  </div>
                  <div>
                    <h6 className="fs-14 fw-bold miniu-text-dark mb-0">Career Path Preview</h6>
                    <span className="fs-11 text-muted">MiniU Curriculum Snapshot</span>
                  </div>
                </div>
                <span className="badge bg-light text-dark border rounded-pill px-2 py-1 fs-11 fw-semibold">
                  {current.domain}
                </span>
              </div>

              {/* Interactive Track Switcher Tabs */}
              <div className="d-flex gap-1 p-1 bg-light rounded-pill mb-3 border border-light-subtle">
                <button
                  type="button"
                  onClick={() => setActiveTab("sap")}
                  className={`hero-tab-btn flex-grow-1 ${activeTab === "sap" ? "active" : ""}`}
                >
                  SAP Track
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("data")}
                  className={`hero-tab-btn flex-grow-1 ${activeTab === "data" ? "active" : ""}`}
                >
                  Data Analytics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("fullstack")}
                  className={`hero-tab-btn flex-grow-1 ${activeTab === "fullstack" ? "active" : ""}`}
                >
                  Full Stack
                </button>
              </div>

              {/* Course Title & Modules summary */}
              <div className="p-3 bg-light rounded-3 mb-3 border border-light-subtle">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <span className="fs-14 fw-bold miniu-text-dark">{current.title}</span>
                  <span className="badge bg-danger bg-opacity-10 text-danger border border-danger-subtle px-2 py-1 fs-11 fw-bold">
                    {current.modulesCount}
                  </span>
                </div>
                <span className="fs-12 text-muted d-block">{current.subtitle}</span>
              </div>

              {/* What you'll learn bullets */}
              <div className="mb-3">
                <span className="fs-12 fw-bold text-dark d-block mb-2">Key Skills Covered:</span>
                <div className="d-flex flex-wrap gap-1">
                  {current.topics.map((topic, tIdx) => (
                    <span key={tIdx} className="badge bg-white text-secondary border px-2 py-1 fs-11">
                      ✓ {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone Project Spec */}
              <div className="p-2 px-3 bg-white rounded-3 border border-light-subtle mb-3">
                <span className="fs-11 text-uppercase text-muted fw-bold d-block">Capstone Project</span>
                <strong className="fs-12 miniu-text-dark">{current.project}</strong>
              </div>

              {/* Bottom Actions */}
              <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                <span className="fs-11 text-muted">
                  <i className="fa-regular fa-location-dot text-danger me-1" />
                  {current.format}
                </span>
                <Link
                  to={current.slug}
                  className="btn btn-sm btn-outline-danger rounded-pill px-3 py-1 fs-12 fw-bold text-decoration-none"
                >
                  Explore Program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Hero({ onOpenCounselling }) {
  const [activeTab, setActiveTab] = useState("sap")

  const previewData = {
    sap: {
      role: "SAP FICO / ABAP Consultant",
      progress: 88,
      project: "Enterprise Financial Workflow & RICEF",
      skills: ["SAP S/4 HANA", "FI/CO Config", "Taxation & GST"],
      status: "Ready for MNC Placement"
    },
    data: {
      role: "Business & Data Analyst",
      progress: 92,
      project: "Retail E-Commerce Power BI Dashboard",
      skills: ["SQL Querying", "Power BI / DAX", "Python Analytics"],
      status: "Interview Scheduled"
    },
    fullstack: {
      role: "Full Stack Web Engineer",
      progress: 85,
      project: "EdTech Learning Platform (MERN)",
      skills: ["React 19", "Node.js & Express", "MongoDB & REST"],
      status: "Portfolio Verified"
    }
  }

  const current = previewData[activeTab]

  return (
    <section className="py-5 py-lg-6 miniu-bg-white border-bottom position-relative overflow-hidden">
      <div className="container py-3 py-md-4">
        <div className="row g-5 align-items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="col-lg-7">
            {/* Live Indicator Pill */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-light border border-light-subtle mb-4">
              <span className="live-pulse-dot" />
              <span className="fs-13 fw-semibold miniu-text-dark">
                Admissions Open: Classroom (Coimbatore) & Live Online
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-4 fw-extrabold miniu-text-dark miniu-font-display mb-3 line-height-tight">
              Build the skills. <br className="d-none d-sm-inline" />
              <span className="miniu-text-red">Build the career.</span>
            </h1>

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
                Book Free Counselling
              </button>
            </div>

            {/* Value checklist */}
            <div className="d-flex flex-wrap gap-x-4 gap-y-2 text-secondary fs-14 fw-medium pt-2">
              <span className="d-flex align-items-center gap-2 me-3">
                <span className="text-success fw-bold">✓</span> Live Mentor Training
              </span>
              <span className="d-flex align-items-center gap-2 me-3">
                <span className="text-success fw-bold">✓</span> Practical Projects
              </span>
              <span className="d-flex align-items-center gap-2 me-3">
                <span className="text-success fw-bold">✓</span> Placement Support
              </span>
              <span className="d-flex align-items-center gap-2">
                <span className="text-success fw-bold">✓</span> Industry Certificate
              </span>
            </div>
          </div>

          {/* Right Column: Clean Light Interactive UI Dashboard Mockup */}
          <div className="col-lg-5">
            <div className="hero-mockup-card">
              {/* Mockup Header */}
              <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                    <i className="fa-regular fa-graduation-cap fs-14" />
                  </div>
                  <div>
                    <h6 className="fs-14 fw-bold miniu-text-dark mb-0">Career Milestone Hub</h6>
                    <span className="fs-11 text-muted">MiniU Learning Dashboard</span>
                  </div>
                </div>
                <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2 py-1 fs-11 fw-semibold">
                  ● {current.status}
                </span>
              </div>

              {/* Interactive Role Switcher Tabs */}
              <div className="d-flex gap-1 p-1 bg-light rounded-pill mb-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("sap")}
                  className={`btn btn-sm flex-grow-1 rounded-pill fs-12 fw-semibold border-0 py-1 transition-all ${
                    activeTab === "sap" ? "bg-white shadow-xs text-dark" : "text-muted"
                  }`}
                >
                  SAP Track
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("data")}
                  className={`btn btn-sm flex-grow-1 rounded-pill fs-12 fw-semibold border-0 py-1 transition-all ${
                    activeTab === "data" ? "bg-white shadow-xs text-dark" : "text-muted"
                  }`}
                >
                  Data Analytics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("fullstack")}
                  className={`btn btn-sm flex-grow-1 rounded-pill fs-12 fw-semibold border-0 py-1 transition-all ${
                    activeTab === "fullstack" ? "bg-white shadow-xs text-dark" : "text-muted"
                  }`}
                >
                  Full Stack
                </button>
              </div>

              {/* Progress Box */}
              <div className="p-3 bg-light rounded-3 mb-3 border border-light-subtle">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="fs-13 fw-semibold miniu-text-dark">{current.role}</span>
                  <span className="fs-13 fw-bold miniu-text-red">{current.progress}% Ready</span>
                </div>
                <div className="hero-progress-bar">
                  <div
                    className="hero-progress-fill"
                    style={{ width: `${current.progress}%` }}
                  />
                </div>
              </div>

              {/* Real Project Verification Item */}
              <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 border border-light-subtle mb-3">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mt-1" style={{ width: "22px", height: "22px", minWidth: "22px", fontSize: "11px" }}>
                  ✓
                </div>
                <div>
                  <span className="d-block fs-11 text-uppercase text-muted fw-semibold">Verified Capstone Project</span>
                  <strong className="fs-13 miniu-text-dark d-block mb-1">{current.project}</strong>
                  <div className="d-flex flex-wrap gap-1">
                    {current.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="badge bg-light text-secondary border px-2 py-1 fs-11">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Trigger */}
              <div className="d-flex align-items-center justify-content-between pt-2">
                <span className="fs-12 text-muted">
                  <i className="fa-regular fa-shield-check text-success me-1" />
                  1-on-1 Mentor Evaluation
                </span>
                <button
                  type="button"
                  onClick={onOpenCounselling}
                  className="btn btn-link text-danger fs-12 fw-bold text-decoration-none p-0"
                >
                  Schedule Demo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

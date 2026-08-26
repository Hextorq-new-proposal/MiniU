import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"

const ShaderBackground = lazy(() => import("../common/ShaderBackground"))

export default function Hero({ onOpenCounselling }) {
  return (
    <section className="position-relative overflow-hidden miniu-hero-section d-flex align-items-center bg-[#EFEFEF]">
      {/* Exact WebGL Hero Shader Stack from D:/bg/ani-bg (Async Lazy Load) */}
      <Suspense fallback={null}>
        <ShaderBackground color="#ff5f03" />
      </Suspense>

      {/* Hero Content Container - Responsive Left Aligned */}
      <div className="container py-4 py-sm-5 py-lg-6 position-relative" style={{ zIndex: 10 }}>
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-9 text-start">
            {/* Interactive Admissions Open Pill */}
            <div className="mb-3 mb-sm-4">
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn btn-sm d-inline-flex flex-wrap align-items-center gap-2 px-3 py-1.5 rounded-pill bg-white border border-light-subtle shadow-xs text-decoration-none transition-all hover-translate-y text-start"
              >
                <span className="live-pulse-dot flex-shrink-0" />
                <span className="fs-12 fs-sm-13 fw-semibold text-dark">
                  Admissions Open: Classroom (Coimbatore) &amp; Live Online
                </span>
                <span className="fs-11 fs-sm-12 text-danger fw-bold ms-sm-1">View Batches →</span>
              </button>
            </div>

            {/* Small Kicker */}
            <span className="d-block fs-12 fs-sm-13 fw-bold text-dark text-uppercase letter-spacing-2 mb-2 mb-sm-3 opacity-75">
              MiniU EdTech Institute • Coimbatore
            </span>

            {/* Main Display Headline */}
            <h1 className="miniu-hero-title mb-3">
              <span className="d-block">Build the skills.</span>
              <span className="highlight-line d-block">Build the career.</span>
            </h1>

            {/* Domain Specificity Subtitle */}
            <div className="fs-12 fs-sm-14 fw-bold text-danger mb-3 mb-sm-4 text-uppercase letter-spacing-1">
              SAP • Business &amp; Data • Development • Finance • Design
            </div>

            {/* Supporting Value Proposition */}
            <p className="fs-16 fs-sm-18 fs-md-19 text-secondary mb-4 mb-sm-5 max-w-650 line-height-relaxed fw-normal">
              Industry-focused courses, practical projects, expert mentors and placement support to help you become job-ready in high-demand enterprise domains.
            </p>

            {/* Action Buttons (Full width on extra small mobile, inline on tablet/desktop) */}
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 mb-4 mb-sm-5">
              <Link to="/courses" className="btn-miniu-primary fs-15 fs-sm-16 py-2.5 py-sm-3 px-4 px-sm-5 shadow-sm justify-content-center">
                <span>Explore Courses</span>
                <i className="fa-regular fa-arrow-right-long" />
              </Link>
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn-miniu-outline fs-15 fs-sm-16 py-2.5 py-sm-3 px-4 bg-white shadow-xs justify-content-center"
              >
                Talk to a Course Advisor
              </button>
            </div>

            {/* 3 Core Trust Checklist */}
            <div className="d-flex flex-wrap align-items-center gap-3 gap-sm-4 text-secondary fs-13 fs-sm-14 fw-semibold pt-1 pt-sm-2">
              <span className="d-flex align-items-center gap-1.5">
                <span className="text-success fw-bold fs-15">✓</span> Live Mentor Training
              </span>
              <span className="d-flex align-items-center gap-1.5">
                <span className="text-success fw-bold fs-15">✓</span> Practical Projects
              </span>
              <span className="d-flex align-items-center gap-1.5">
                <span className="text-success fw-bold fs-15">✓</span> Placement Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

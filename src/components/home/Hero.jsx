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

      {/* Hero Content Container */}
      <div className="container py-5 py-lg-6 position-relative" style={{ zIndex: 10 }}>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-9">
            {/* Interactive Admissions Open Pill */}
            <div className="mb-4">
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn btn-sm d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-white border border-light-subtle shadow-sm text-decoration-none transition-all hover-translate-y"
              >
                <span className="live-pulse-dot" />
                <span className="fs-13 fw-semibold miniu-text-dark">
                  Admissions Open: Classroom (Coimbatore) &amp; Live Online
                </span>
                <span className="fs-12 text-danger fw-bold ms-1">View Batches →</span>
              </button>
            </div>

            {/* Main Display Headline */}
            <h1 className="display-3 fw-extrabold miniu-text-dark miniu-font-display mb-3 line-height-tight tracking-tight">
              Build the skills. <br />
              <span className="miniu-text-red">Build the career.</span>
            </h1>

            {/* Domain Specificity Subtitle */}
            <div className="fs-14 fw-bold text-danger mb-4 text-uppercase letter-spacing-2">
              SAP • Business &amp; Data • Development • Finance • Design
            </div>

            {/* Supporting Value Proposition */}
            <p className="fs-19 miniu-text-muted mb-5 max-w-700 mx-auto line-height-relaxed fw-normal">
              Industry-focused courses, practical projects, expert mentors and placement support to help you become job-ready in high-demand enterprise domains.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 mb-5">
              <Link to="/courses" className="btn-miniu-primary fs-16 py-3 px-5 shadow-sm">
                <span>Explore Courses</span>
                <i className="fa-regular fa-arrow-right-long" />
              </Link>
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn-miniu-outline fs-16 py-3 px-4 bg-white shadow-xs"
              >
                Talk to a Course Advisor
              </button>
            </div>

            {/* 3 Core Trust Checklist */}
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 text-secondary fs-14 fw-semibold pt-2">
              <span className="d-flex align-items-center gap-2">
                <span className="text-success fw-bold fs-16">✓</span> Live Mentor Training
              </span>
              <span className="d-flex align-items-center gap-2">
                <span className="text-success fw-bold fs-16">✓</span> Practical Projects
              </span>
              <span className="d-flex align-items-center gap-2">
                <span className="text-success fw-bold fs-16">✓</span> Placement Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

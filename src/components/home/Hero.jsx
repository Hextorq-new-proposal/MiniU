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
            {/* Small Kicker (Deep Black) */}
            <span className="d-block fs-12 fs-sm-13 hero-dark-kicker text-uppercase mb-2 mb-sm-3">
              MiniU EdTech Institute — Coimbatore
            </span>

            {/* Main Display Headline */}
            <h1 className="miniu-hero-title mb-3">
              <span className="d-block text-dark">
                <span style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800 }}>B</span><span className="droid-logo-text">uild the Skills.</span>
              </span>
              <span className="highlight-line d-block">
                <span style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800 }}>B</span><span className="droid-logo-text">uild the Career.</span>
              </span>
            </h1>

            {/* Domain Specificity Subtitle (Deep High-Contrast Black) */}
            <div className="fs-13 fs-sm-14 hero-dark-domain mb-3 mb-sm-4 text-uppercase">
              SAP <span className="dot-sep">•</span> BUSINESS &amp; DATA <span className="dot-sep">•</span> DEVELOPMENT <span className="dot-sep">•</span> FINANCE <span className="dot-sep">•</span> DESIGN
            </div>

            {/* Supporting Value Proposition (Deep Black) */}
            <p className="fs-16 fs-sm-18 fs-md-19 hero-dark-para mb-3 max-w-650">
              Industry-focused courses, practical projects, expert mentors and placement support to help you become job-ready in high-demand enterprise domains.
            </p>

            {/* Admissions Open - Pure Black Text */}
            <div className="d-flex flex-wrap align-items-center gap-2 mb-4 fs-13 fs-sm-14 fw-bold" style={{ color: "#000000" }}>
              <span style={{ color: "#000000" }}>Admissions Open: Classroom (Coimbatore) &amp; Live Online</span>
              <button
                type="button"
                onClick={onOpenCounselling}
                className="p-0 border-0 bg-transparent fw-bold fs-13 fs-sm-14 ms-1 d-inline-flex align-items-center cursor-pointer text-decoration-none"
                style={{ background: "transparent", border: "none", boxShadow: "none", outline: "none" }}
              >
                <span style={{ color: "#ff0135", fontWeight: "bold" }}>View Batches →</span>
              </button>
            </div>

            {/* Action Buttons with Transparent Background to reflect WebGL animation */}
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 mb-4 mb-sm-5">
              <Link
                to="/courses"
                className="btn-miniu-transparent-red fs-15 fs-sm-16 py-3 px-4 px-sm-5 justify-content-center"
                style={{ color: "#000000", borderColor: "#000000" }}
              >
                <span style={{ color: "#000000" }}>Explore Courses</span>
                <i className="fa-regular fa-arrow-right-long" style={{ color: "#000000" }} />
              </Link>
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn-miniu-glass-outline fs-15 fs-sm-16 py-3 px-4 justify-content-center"
                style={{ background: "transparent", color: "#000000", border: "1.5px solid #000000" }}
              >
                Talk to a Course Advisor
              </button>
            </div>

            {/* 3 Core Highlights (Deep Black, No Ticks) */}
            <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 fs-13 fs-sm-14 pt-1 pt-sm-2 fw-bold text-black" style={{ color: "#000000" }}>
              <span className="text-black fw-bold" style={{ color: "#000000" }}>Live Mentor Training</span>
              <span className="text-muted fw-bold">•</span>
              <span className="text-black fw-bold" style={{ color: "#000000" }}>Practical Projects</span>
              <span className="text-muted fw-bold">•</span>
              <span className="text-black fw-bold" style={{ color: "#000000" }}>Placement Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

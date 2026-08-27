import React, { useState } from "react"
import { Link } from "react-router-dom"

const CATEGORY_DISCOVERY = [
  {
    id: "sap",
    title: "SAP Modules",
    desc: "Enterprise ERP systems & functional consultant roles",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    recommended: [
      { name: "SAP FICO (Finance & Controlling)", path: "/courses/sap-fico", tag: "Most In-Demand" },
      { name: "SAP ABAP (Advanced Programming)", path: "/courses/sap-abap", tag: "High Tech Demand" },
      { name: "SAP MM (Materials Management & SCM)", path: "/courses/sap-mm", tag: "Supply Chain" }
    ]
  },
  {
    id: "data",
    title: "Business & Data",
    desc: "Transform raw numbers into strategic business insights",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    recommended: [
      { name: "Business Analytics (Power BI & SQL)", path: "/courses/business-analytics", tag: "Top Rated" },
      { name: "Data Science & Machine Learning", path: "/courses/data-science", tag: "AI & ML" }
    ]
  },
  {
    id: "dev",
    title: "Software Development",
    desc: "Build modern web platforms, APIs, and scalable apps",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    recommended: [
      { name: "Full Stack Web Development (MERN)", path: "/courses/full-stack-web-development", tag: "Job-Ready Track" }
    ]
  },
  {
    id: "finance",
    title: "Finance & Accounts",
    desc: "Practical corporate accounting, taxation, and financial reporting",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="m16.71 13.88.7.71-2.82 2.82" />
      </svg>
    ),
    recommended: [
      { name: "SAP FICO Financial Accounting", path: "/courses/sap-fico", tag: "Finance Pro" }
    ]
  },
  {
    id: "design",
    title: "UI/UX & Design",
    desc: "User research, wireframing, and Figma product prototyping",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    recommended: [
      { name: "UI/UX Design Masterclass (Figma)", path: "/courses/uiux-design", tag: "Creative Track" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc: "Automate infrastructure, CI/CD pipelines, and cloud containers",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    recommended: [
      { name: "DevOps & Cloud Automation (Docker, K8s)", path: "/courses/devops", tag: "Cloud Essential" }
    ]
  }
]

export const CAREER_QUIZ_MAPPINGS = {
  "Enterprise ERP": { 
    title: "SAP FICO / ABAP Consultant Track", 
    desc: "Enterprise ERP Finance, Supply Chain & Technical Development",
    path: "/courses/sap-fico" 
  },
  "Data & Analytics": { 
    title: "Business Analytics & Power BI Track", 
    desc: "Data-Driven Business Intelligence, SQL & Predictive Analytics",
    path: "/courses/business-analytics" 
  },
  "Coding & Web": { 
    title: "Full Stack Web Developer Track", 
    desc: "MERN Stack, Cloud Architecture & REST API Engineering",
    path: "/courses/full-stack-web-development" 
  },
  "Design & Creativity": { 
    title: "UI/UX Product Design Track", 
    desc: "Figma Prototyping, Wireframing & Design Systems",
    path: "/courses/uiux-design" 
  }
}

export default function CareerFinder({ onOpenCounselling }) {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_DISCOVERY[0])

  // Mini 3-Question Matchmaker State
  const [q1, setQ1] = useState("Graduate")
  const [q2, setQ2] = useState("Enterprise ERP")
  const [q3, setQ3] = useState("Job Placement")

  const recommendation = CAREER_QUIZ_MAPPINGS[q2] || CAREER_QUIZ_MAPPINGS["Enterprise ERP"]

  return (
    <section id="career-discovery" className="py-5 py-lg-6 miniu-bg-white border-bottom">
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Career Discovery
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Not sure which course to choose?
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Tell us what you're interested in. We'll show you the clearest path to start.
          </p>
        </div>

        {/* 6 Category Selection Grid with Pure Black SVG Icons */}
        <div className="row g-3 mb-4 reveal-stagger-group">
          {CATEGORY_DISCOVERY.map((cat) => {
            const isSelected = selectedCategory.id === cat.id
            return (
              <div key={cat.id} className="col-md-4 col-sm-6 reveal-card">
                <div
                  onClick={() => setSelectedCategory(cat)}
                  onMouseEnter={() => setSelectedCategory(cat)}
                  className={`miniu-category-card ${isSelected ? "active" : ""} cursor-pointer`}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center bg-light border shadow-2xs"
                      style={{ width: "42px", height: "42px", minWidth: "42px" }}
                    >
                      {cat.iconSvg}
                    </div>
                    <div>
                      <h6 className="fs-15 fw-bold mb-0 miniu-text-dark">{cat.title}</h6>
                      <span className="fs-12 text-muted line-clamp-1">{cat.desc}</span>
                    </div>
                  </div>
                  <span className="arrow-icon fs-14 fw-bold">→</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dynamic Recommendations Box (Updates on Hover & Click) */}
        <div className="p-4 rounded-4 miniu-bg-slate border mb-5">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
            <div>
              <span className="fs-12 text-uppercase fw-bold text-danger letter-spacing-1">Recommended for you in</span>
              <h4 className="fs-18 fw-bold miniu-text-dark mb-0">{selectedCategory.title}</h4>
            </div>
            <Link to="/courses" className="btn btn-sm btn-outline-dark rounded-pill px-3 py-1.5 fs-13 fw-semibold">
              View all programs in catalog →
            </Link>
          </div>

          <div className="row g-3">
            {selectedCategory.recommended.map((item, idx) => (
              <div key={idx} className={`${selectedCategory.recommended.length === 1 ? "col-md-6 mx-auto" : selectedCategory.recommended.length === 2 ? "col-md-6" : "col-md-4"} col-12`}>
                <div
                  className="bg-white rounded-3 border h-100 d-flex flex-column"
                  style={{ padding: "14px 16px", boxShadow: "0 1px 6px rgba(15,23,42,0.05)" }}
                >
                  <span
                    className="rounded-pill d-inline-block fw-semibold mb-2"
                    style={{ fontSize: "10px", padding: "2px 10px", color: "#e0002e", background: "#fff1f3", border: "1px solid #ffd1d8", alignSelf: "flex-start" }}
                  >
                    {item.tag}
                  </span>
                  <p className="fw-semibold text-dark mb-auto" style={{ fontSize: "13px", lineHeight: 1.4 }}>{item.name}</p>
                  <Link
                    to={item.path}
                    className="text-danger fw-semibold text-decoration-none d-inline-flex align-items-center gap-1 mt-3"
                    style={{ fontSize: "12px" }}
                  >
                    <span>View Program</span>
                    <i className="fa-regular fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            Career Matchmaker — Clean Minimal Layout
            ========================================================================= */}
        <div className="row g-4 align-items-center">

          {/* Left: Heading + trust bullets */}
          <div className="col-lg-4">
            <span
              className="d-inline-block rounded-pill border fw-semibold mb-2"
              style={{ fontSize: "11px", padding: "3px 12px", color: "#e0002e", borderColor: "#ffd1d8", background: "#fff1f3" }}
            >
              Smart Matchmaker
            </span>
            <h3 className="fw-bold miniu-text-dark miniu-font-display mb-2" style={{ fontSize: "20px", lineHeight: 1.3 }}>
              Find Your Ideal Career Track in 30 Seconds
            </h3>
            <p className="text-muted mb-3" style={{ fontSize: "13px", lineHeight: 1.6 }}>
              Pick your background and goals — we'll recommend the right program instantly.
            </p>
            <div className="d-flex flex-column gap-2">
              {["100% Free & Instant", "Works for Freshers & Switchers", "Matched Syllabus + Counselor"].map((t) => (
                <div key={t} className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-circle-check text-success" style={{ fontSize: "12px" }} />
                  <span className="text-dark" style={{ fontSize: "12.5px" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clean Pill-Chip Quiz */}
          <div className="col-lg-8">
            <div className="bg-white border rounded-4" style={{ padding: "24px 28px", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}>

              {/* Step 1 */}
              <div className="mb-3">
                <p className="fs-10 fw-bold text-muted text-uppercase mb-2" style={{ letterSpacing: "0.07em" }}>
                  01 &nbsp;·&nbsp; Your Background
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    { label: "College Student", val: "Student" },
                    { label: "Recent Graduate", val: "Graduate" },
                    { label: "Working Professional", val: "Working Professional" },
                    { label: "Career Switcher", val: "Career Switcher" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setQ1(opt.val)}
                      className="border rounded-pill fw-medium transition-all"
                      style={{
                        fontSize: "12.5px",
                        padding: "5px 14px",
                        background: q1 === opt.val ? "#0f172a" : "#f8fafc",
                        color: q1 === opt.val ? "#ffffff" : "#64748b",
                        borderColor: q1 === opt.val ? "#0f172a" : "#e2e8f0",
                        cursor: "pointer",
                        lineHeight: 1.4
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <hr style={{ margin: "12px 0", borderColor: "#f1f5f9" }} />

              {/* Step 2 */}
              <div className="mb-3">
                <p className="fs-10 fw-bold text-muted text-uppercase mb-2" style={{ letterSpacing: "0.07em" }}>
                  02 &nbsp;·&nbsp; Your Domain
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    { label: "Enterprise (SAP)", val: "Enterprise ERP" },
                    { label: "Data & Analytics", val: "Data & Analytics" },
                    { label: "Full Stack Web", val: "Coding & Web" },
                    { label: "UI/UX Design", val: "Design & Creativity" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setQ2(opt.val)}
                      className="border rounded-pill fw-medium transition-all"
                      style={{
                        fontSize: "12.5px",
                        padding: "5px 14px",
                        background: q2 === opt.val ? "#0f172a" : "#f8fafc",
                        color: q2 === opt.val ? "#ffffff" : "#64748b",
                        borderColor: q2 === opt.val ? "#0f172a" : "#e2e8f0",
                        cursor: "pointer",
                        lineHeight: 1.4
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <hr style={{ margin: "12px 0", borderColor: "#f1f5f9" }} />

              {/* Step 3 */}
              <div className="mb-3">
                <p className="fs-10 fw-bold text-muted text-uppercase mb-2" style={{ letterSpacing: "0.07em" }}>
                  03 &nbsp;·&nbsp; Your Goal
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    { label: "Get a Job", val: "Job Placement" },
                    { label: "Upskill", val: "Upgrade Skills" },
                    { label: "Switch Domain", val: "Switch Career" },
                    { label: "Freelance", val: "Freelance" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setQ3(opt.val)}
                      className="border rounded-pill fw-medium transition-all"
                      style={{
                        fontSize: "12.5px",
                        padding: "5px 14px",
                        background: q3 === opt.val ? "#0f172a" : "#f8fafc",
                        color: q3 === opt.val ? "#ffffff" : "#64748b",
                        borderColor: q3 === opt.val ? "#0f172a" : "#e2e8f0",
                        cursor: "pointer",
                        lineHeight: 1.4
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div
                className="rounded-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "12px 16px", marginTop: "4px" }}
              >
                <div style={{ minWidth: 0 }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span
                      className="text-white rounded-pill fw-bold"
                      style={{ background: "#ff0135", fontSize: "9px", padding: "2px 8px", letterSpacing: "0.05em", textTransform: "uppercase" }}
                    >
                      Best Match
                    </span>
                    <span className="fs-11 text-muted">Based on your answers</span>
                  </div>
                  <p className="fs-14 fw-bold text-dark mb-0" style={{ lineHeight: 1.3 }}>{recommendation.title}</p>
                  <p className="fs-12 text-muted mb-0">{recommendation.desc}</p>
                </div>
                <div className="d-flex gap-2 flex-shrink-0">
                  <Link
                    to={recommendation.path}
                    className="btn btn-danger rounded-pill fw-semibold text-decoration-none"
                    style={{ fontSize: "12px", padding: "6px 16px" }}
                  >
                    Explore →
                  </Link>
                  <button
                    type="button"
                    onClick={onOpenCounselling}
                    className="btn btn-outline-dark rounded-pill fw-semibold"
                    style={{ fontSize: "12px", padding: "6px 16px" }}
                  >
                    Ask Advisor
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

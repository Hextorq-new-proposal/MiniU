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
              <div key={idx} className="col-md-4">
                <div className="p-3.5 bg-white rounded-3 border h-100 d-flex flex-column justify-content-between shadow-2xs">
                  <div>
                    <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-2.5 py-1 fs-11 fw-semibold mb-2.5 d-inline-block">
                      {item.tag}
                    </span>
                    <h5 className="fs-14 fw-bold miniu-text-dark mb-2">{item.name}</h5>
                  </div>
                  <Link
                    to={item.path}
                    className="text-danger fw-semibold fs-13 text-decoration-none d-inline-flex align-items-center gap-1.5 mt-2 hover-text-danger"
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
            30-Second Minimalist Career Matchmaker (2-Column Balanced Layout)
            ========================================================================= */}
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Column: Context & Trust */}
          <div className="col-lg-4">
            <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1 fs-12 fw-bold mb-2.5 d-inline-block">
              Smart Matchmaker
            </span>
            <h3 className="fs-24 fw-bold miniu-text-dark miniu-font-display mb-3">
              Find Your Ideal Career Track in 30 Seconds
            </h3>
            <p className="miniu-text-muted fs-14 mb-4 line-height-relaxed">
              Select your current background and target goals for an instant tailored curriculum and counselor recommendation.
            </p>
            <div className="d-flex flex-column gap-2.5 text-dark fs-13 fw-semibold">
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-circle-check text-success fs-14" />
                <span>100% Free &amp; Instant Recommendation</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-circle-check text-success fs-14" />
                <span>Tailored for Freshers &amp; Switchers</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-circle-check text-success fs-14" />
                <span>Direct Counselor &amp; Syllabus Match</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Questionnaire Box */}
          <div className="col-lg-8">
            <div className="bg-white border border-light-subtle rounded-4 p-4 shadow-sm">
              {/* Interactive Steps Form */}
              <div className="d-flex flex-column gap-3.5 mb-3 pb-1">
                {/* Step 1: Background */}
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-dark text-white rounded-circle p-0 d-inline-flex align-items-center justify-content-center fs-11 fw-bold flex-shrink-0" style={{ width: "20px", height: "20px" }}>
                      1
                    </span>
                    <span className="fs-12 fw-bold text-dark text-uppercase letter-spacing-1">
                      What describes your current background?
                    </span>
                  </div>
                  <div className="row g-2">
                    {[
                      { label: "College Student", val: "Student" },
                      { label: "Recent Graduate", val: "Graduate" },
                      { label: "Working Pro", val: "Working Professional" },
                      { label: "Career Switcher", val: "Career Switcher" }
                    ].map((opt) => (
                      <div key={opt.val} className="col-6 col-sm-3">
                        <button
                          type="button"
                          onClick={() => setQ1(opt.val)}
                          className={`btn btn-sm w-100 rounded-3 py-2 px-1 fs-12 fw-semibold transition-all text-center ${
                            q1 === opt.val
                              ? "bg-dark text-white border-dark shadow-xs"
                              : "bg-light bg-opacity-50 text-secondary border border-light-subtle hover-bg-light"
                          }`}
                        >
                          {opt.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 2: Domain */}
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-dark text-white rounded-circle p-0 d-inline-flex align-items-center justify-content-center fs-11 fw-bold flex-shrink-0" style={{ width: "20px", height: "20px" }}>
                      2
                    </span>
                    <span className="fs-12 fw-bold text-dark text-uppercase letter-spacing-1">
                      Which domain are you passionate about?
                    </span>
                  </div>
                  <div className="row g-2">
                    {[
                      { label: "Enterprise (SAP)", val: "Enterprise ERP" },
                      { label: "Data Analytics", val: "Data & Analytics" },
                      { label: "Full Stack Web", val: "Coding & Web" },
                      { label: "UI/UX Design", val: "Design & Creativity" }
                    ].map((opt) => (
                      <div key={opt.val} className="col-6 col-sm-3">
                        <button
                          type="button"
                          onClick={() => setQ2(opt.val)}
                          className={`btn btn-sm w-100 rounded-3 py-2 px-1 fs-12 fw-semibold transition-all text-center ${
                            q2 === opt.val
                              ? "bg-dark text-white border-dark shadow-xs"
                              : "bg-light bg-opacity-50 text-secondary border border-light-subtle hover-bg-light"
                          }`}
                        >
                          {opt.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3: Objective */}
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-dark text-white rounded-circle p-0 d-inline-flex align-items-center justify-content-center fs-11 fw-bold flex-shrink-0" style={{ width: "20px", height: "20px" }}>
                      3
                    </span>
                    <span className="fs-12 fw-bold text-dark text-uppercase letter-spacing-1">
                      What is your primary objective?
                    </span>
                  </div>
                  <div className="row g-2">
                    {[
                      { label: "Job Placement", val: "Job Placement" },
                      { label: "Upskilling", val: "Upgrade Skills" },
                      { label: "Domain Switch", val: "Switch Career" },
                      { label: "Freelance", val: "Freelance" }
                    ].map((opt) => (
                      <div key={opt.val} className="col-6 col-sm-3">
                        <button
                          type="button"
                          onClick={() => setQ3(opt.val)}
                          className={`btn btn-sm w-100 rounded-3 py-2 px-1 fs-12 fw-semibold transition-all text-center ${
                            q3 === opt.val
                              ? "bg-dark text-white border-dark shadow-xs"
                              : "bg-light bg-opacity-50 text-secondary border border-light-subtle hover-bg-light"
                          }`}
                        >
                          {opt.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Minimalist Output Result Card */}
              <div className="p-3.5 rounded-3 bg-light border border-light-subtle d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 shadow-2xs">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="badge bg-danger text-white rounded-pill px-2.5 py-1 fs-10 fw-bold me-1">
                      BEST MATCH
                    </span>
                    <span className="fs-12 text-muted">Based on your selection</span>
                  </div>
                  <h4 className="fs-15 fw-bold miniu-text-dark mb-0.5">{recommendation.title}</h4>
                  <p className="fs-12 text-secondary mb-0">{recommendation.desc}</p>
                </div>

                <div className="d-flex flex-wrap align-items-center gap-2 flex-shrink-0">
                  <Link
                    to={recommendation.path}
                    className="btn btn-sm btn-danger text-white rounded-pill px-3 py-1.5 fw-bold fs-12 shadow-xs text-decoration-none"
                  >
                    <span>Explore →</span>
                  </Link>
                  <button
                    type="button"
                    onClick={onOpenCounselling}
                    className="btn btn-sm btn-outline-dark text-dark bg-white rounded-pill px-3 py-1.5 fw-bold fs-12 shadow-2xs"
                  >
                    <span>Ask Advisor</span>
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

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
  "Enterprise ERP": { title: "SAP FICO / ABAP Consultant", path: "/courses/sap-fico" },
  "Data & Analytics": { title: "Business & Data Analyst", path: "/courses/business-analytics" },
  "Coding & Web": { title: "Full Stack Web Developer", path: "/courses/full-stack-web-development" },
  "Design & Creativity": { title: "UI/UX Product Designer", path: "/courses/uiux-design" }
}

export default function CareerFinder({ onOpenCounselling }) {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_DISCOVERY[0])

  // Mini 3-Question Career Finder state
  const [q1, setQ1] = useState("Graduate")
  const [q2, setQ2] = useState("Enterprise ERP")
  const [q3, setQ3] = useState("Get a Job")

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
                  className={`miniu-category-card ${isSelected ? "active" : ""}`}
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

        {/* Dynamic Recommendations Box */}
        <div className="p-4 rounded-4 miniu-bg-slate border mb-5">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
            <div>
              <span className="fs-12 text-uppercase fw-bold text-danger">Recommended for you in</span>
              <h4 className="fs-18 fw-bold miniu-text-dark mb-0">{selectedCategory.title}</h4>
            </div>
            <Link to="/courses" className="btn btn-sm btn-outline-dark rounded-pill px-3 py-1 fs-13 fw-semibold">
              View all programs in catalog →
            </Link>
          </div>

          <div className="row g-3">
            {selectedCategory.recommended.map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-3 bg-white rounded-3 border h-100 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-light text-danger border px-2 py-1 fs-11 fw-semibold mb-2">
                      {item.tag}
                    </span>
                    <h5 className="fs-14 fw-bold miniu-text-dark mb-2">{item.name}</h5>
                  </div>
                  <Link
                    to={item.path}
                    className="text-danger fw-semibold fs-13 text-decoration-none d-inline-flex align-items-center gap-1 mt-2"
                  >
                    <span>View Program</span>
                    <i className="fa-regular fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Question Mini Interactive Career Finder - Tightened Spacing & Shorter Width */}
        <div className="p-4 p-md-4 rounded-4 bg-white border shadow-sm mx-auto" style={{ maxWidth: "980px" }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
                30-Second Matchmaker
              </span>
              <h3 className="fs-22 fw-bold miniu-text-dark mb-2">Find Your Ideal Career Track</h3>
              <p className="miniu-text-muted fs-13 mb-3 line-height-relaxed">
                Answer 3 quick questions and get tailored program recommendations curated for your current background.
              </p>

              <div className="d-flex align-items-center gap-2 text-muted fs-12">
                <i className="fa-regular fa-shield-check text-success" />
                <span>No registration required to see recommendation</span>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="p-3.5 p-md-4 miniu-bg-slate rounded-4 border">
                {/* Q1 */}
                <div className="mb-2.5">
                  <label className="form-label fs-12 fw-bold miniu-text-dark mb-1">
                    1. What describes you best?
                  </label>
                  <div className="d-flex flex-wrap gap-1.5">
                    {["Student", "Graduate", "Working Professional", "Career Switcher"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setQ1(opt)}
                        className={`btn btn-sm rounded-pill px-2.5 py-1 fs-11 fw-semibold transition-all ${
                          q1 === opt ? "btn-danger text-white shadow-xs" : "btn-outline-secondary bg-white text-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2 */}
                <div className="mb-2.5">
                  <label className="form-label fs-12 fw-bold miniu-text-dark mb-1">
                    2. What domain do you enjoy?
                  </label>
                  <div className="d-flex flex-wrap gap-1.5">
                    {["Enterprise ERP", "Data & Analytics", "Coding & Web", "Design & Creativity"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setQ2(opt)}
                        className={`btn btn-sm rounded-pill px-2.5 py-1 fs-11 fw-semibold transition-all ${
                          q2 === opt ? "btn-danger text-white shadow-xs" : "btn-outline-secondary bg-white text-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3 */}
                <div className="mb-3">
                  <label className="form-label fs-12 fw-bold miniu-text-dark mb-1">
                    3. What is your immediate goal?
                  </label>
                  <div className="d-flex flex-wrap gap-1.5">
                    {["Get a Job", "Upgrade Skills", "Switch Career", "Freelance"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setQ3(opt)}
                        className={`btn btn-sm rounded-pill px-2.5 py-1 fs-11 fw-semibold transition-all ${
                          q3 === opt ? "btn-danger text-white shadow-xs" : "btn-outline-secondary bg-white text-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result Pill */}
                <div className="p-3 bg-white rounded-3 border border-danger-subtle d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2.5">
                  <div>
                    <span className="fs-11 text-uppercase text-muted fw-bold d-block">Your Recommended Path:</span>
                    <strong className="fs-14 miniu-text-dark">{recommendation.title}</strong>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <Link
                      to={recommendation.path}
                      className="btn btn-sm btn-danger text-white rounded-pill px-3 py-1.5 fw-bold fs-12"
                    >
                      Explore Course →
                    </Link>
                    <button
                      type="button"
                      onClick={onOpenCounselling}
                      className="btn btn-sm btn-outline-secondary rounded-pill px-2.5 py-1.5 fs-12"
                    >
                      Ask Advisor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

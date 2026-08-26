import React, { useState } from "react"
import { Link } from "react-router-dom"

const CATEGORY_DISCOVERY = [
  {
    id: "sap",
    title: "SAP Modules",
    desc: "Enterprise ERP systems & functional consultant roles",
    icon: "fa-regular fa-database",
    recommended: [
      { name: "SAP FICO (Finance & Controlling)", path: "/sap_fico.html", tag: "Most Hired" },
      { name: "SAP ABAP (Advanced Programming)", path: "/sap_abap.html", tag: "High Tech Demand" },
      { name: "SAP MM (Materials Management & SCM)", path: "/sap_mm.html", tag: "Supply Chain" }
    ]
  },
  {
    id: "data",
    title: "Business & Data",
    desc: "Transform raw numbers into strategic business insights",
    icon: "fa-regular fa-chart-mixed",
    recommended: [
      { name: "Business Analytics (Power BI & SQL)", path: "/business_analytics.html", tag: "Fast Track" },
      { name: "Data Science & Machine Learning", path: "/data_science.html", tag: "AI Era" }
    ]
  },
  {
    id: "dev",
    title: "Software Development",
    desc: "Build modern web platforms, APIs, and scalable apps",
    icon: "fa-regular fa-code",
    recommended: [
      { name: "Full Stack Web Development (MERN)", path: "/full_stack.html", tag: "High Demand" }
    ]
  },
  {
    id: "finance",
    title: "Finance & Accounts",
    desc: "Practical corporate accounting, taxation, and financial reporting",
    icon: "fa-regular fa-coins",
    recommended: [
      { name: "SAP FICO Financial Accounting", path: "/sap_fico.html", tag: "Top Choice" }
    ]
  },
  {
    id: "design",
    title: "UI/UX & Design",
    desc: "User research, wireframing, and Figma product prototyping",
    icon: "fa-regular fa-pen-nib",
    recommended: [
      { name: "UI/UX Design Masterclass (Figma)", path: "/uiux.html", tag: "Creative Track" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc: "Automate infrastructure, CI/CD pipelines, and cloud containers",
    icon: "fa-regular fa-cloud",
    recommended: [
      { name: "DevOps & Cloud Automation (Docker, K8s)", path: "/devops.html", tag: "Tech Essential" }
    ]
  }
]

export const CAREER_QUIZ_MAPPINGS = {
  "Enterprise ERP": { title: "SAP FICO / ABAP Consultant", path: "/sap_fico.html" },
  "Data & Analytics": { title: "Business & Data Analyst", path: "/business_analytics.html" },
  "Coding & Web": { title: "Full Stack Web Developer", path: "/full_stack.html" },
  "Design & Creativity": { title: "UI/UX Product Designer", path: "/uiux.html" }
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
        <div className="text-center max-w-700 mx-auto mb-5">
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

        {/* 6 Category Selection Grid */}
        <div className="row g-3 mb-4">
          {CATEGORY_DISCOVERY.map((cat) => {
            const isSelected = selectedCategory.id === cat.id
            return (
              <div key={cat.id} className="col-md-4 col-sm-6">
                <div
                  onClick={() => setSelectedCategory(cat)}
                  className={`miniu-category-card ${isSelected ? "active" : ""}`}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className={`rounded-circle d-flex align-items-center justify-content-center ${
                        isSelected ? "bg-danger text-white" : "bg-light text-secondary"
                      }`}
                      style={{ width: "40px", height: "40px", minWidth: "40px" }}
                    >
                      <i className={cat.icon} />
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
            <Link to="/course.html" className="btn btn-sm btn-outline-dark rounded-pill px-3 py-1 fs-13 fw-semibold">
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

        {/* 3-Question Mini Interactive Career Finder */}
        <div className="p-4 p-md-5 rounded-4 bg-white border shadow-sm">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
                30-Second Matchmaker
              </span>
              <h3 className="fs-24 fw-bold miniu-text-dark mb-2">Find Your Ideal Career Track</h3>
              <p className="miniu-text-muted fs-14 mb-3">
                Answer 3 quick questions and get tailored program recommendations curated for your current background.
              </p>

              <div className="d-flex align-items-center gap-2 text-muted fs-13">
                <i className="fa-regular fa-shield-check text-success" />
                <span>No registration required to see recommendation</span>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="p-4 miniu-bg-slate rounded-4 border">
                {/* Q1 */}
                <div className="mb-3">
                  <label className="form-label fs-13 fw-bold miniu-text-dark mb-1">
                    1. What describes you best?
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {["Student", "Graduate", "Working Professional", "Career Switcher"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setQ1(opt)}
                        className={`btn btn-sm rounded-pill px-3 py-1 fs-12 fw-semibold transition-all ${
                          q1 === opt ? "btn-danger text-white shadow-xs" : "btn-outline-secondary bg-white text-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2 */}
                <div className="mb-3">
                  <label className="form-label fs-13 fw-bold miniu-text-dark mb-1">
                    2. What domain do you enjoy?
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {["Enterprise ERP", "Data & Analytics", "Coding & Web", "Design & Creativity"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setQ2(opt)}
                        className={`btn btn-sm rounded-pill px-3 py-1 fs-12 fw-semibold transition-all ${
                          q2 === opt ? "btn-danger text-white shadow-xs" : "btn-outline-secondary bg-white text-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3 */}
                <div className="mb-4">
                  <label className="form-label fs-13 fw-bold miniu-text-dark mb-1">
                    3. What is your immediate goal?
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {["Get a Job", "Upgrade Skills", "Switch Career", "Freelance"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setQ3(opt)}
                        className={`btn btn-sm rounded-pill px-3 py-1 fs-12 fw-semibold transition-all ${
                          q3 === opt ? "btn-danger text-white shadow-xs" : "btn-outline-secondary bg-white text-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result Pill */}
                <div className="p-3 bg-white rounded-3 border border-danger-subtle d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                  <div>
                    <span className="fs-11 text-uppercase text-muted fw-bold d-block">Your Recommended Path:</span>
                    <strong className="fs-15 miniu-text-dark">{recommendation.title}</strong>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <Link
                      to={recommendation.path}
                      className="btn btn-sm btn-danger rounded-pill px-3 py-2 fw-semibold fs-13"
                    >
                      Explore Course →
                    </Link>
                    <button
                      type="button"
                      onClick={onOpenCounselling}
                      className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-2 fs-13"
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

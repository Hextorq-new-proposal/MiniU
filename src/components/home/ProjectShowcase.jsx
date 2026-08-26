import React from "react"
import { Link } from "react-router-dom"

const PROJECTS = [
  {
    number: "01",
    title: "E-Commerce & Course Platform",
    category: "Full Stack Development",
    skills: ["React 19", "Node.js", "Express", "MongoDB", "REST APIs"],
    duration: "3 Weeks Capstone",
    outcome: "Production-ready web platform with authentication, cart management, and payment gateway integration.",
    path: "/courses/full-stack-web-development"
  },
  {
    number: "02",
    title: "Business Analytics Executive Dashboard",
    category: "Business Analytics",
    skills: ["Power BI", "SQL", "DAX Formulas", "Data Modeling", "Excel"],
    duration: "2.5 Weeks Capstone",
    outcome: "Interactive real-time KPI dashboard analyzing revenue, churn rate, and inventory performance for 50,000+ records.",
    path: "/courses/business-analytics"
  },
  {
    number: "03",
    title: "SAP Enterprise Accounting Workflow",
    category: "SAP Modules",
    skills: ["SAP S/4 HANA", "FI/CO Config", "GST / TDS", "RICEF Reports"],
    duration: "3 Weeks Capstone",
    outcome: "Configured multi-company enterprise structure with automatic account determination (OBYC/VKOA) and balance sheet outputs.",
    path: "/courses/sap-fico"
  }
]

export default function ProjectShowcase() {
  return (
    <section className="py-5 py-lg-6 miniu-bg-slate border-bottom">
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Hands-On Experience
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Don't just learn it. Build it.
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Build production-grade capstone projects that prove your capabilities in technical interviews.
          </p>
        </div>

        {/* 3 Real Projects Cards Grid */}
        <div className="row g-4">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="col-lg-4">
              <div className="miniu-card p-4 justify-content-between">
                <div>
                  {/* Top Bar: Number & Category */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="fs-24 fw-extrabold miniu-text-red font-monospace">
                      {proj.number}
                    </span>
                    <span className="badge bg-light text-dark border px-2 py-1 fs-11 fw-semibold">
                      {proj.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="fs-18 fw-bold miniu-text-dark mb-3">
                    {proj.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {proj.skills.map((s, sIdx) => (
                      <span key={sIdx} className="badge bg-white text-secondary border px-2 py-1 fs-11">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Project Specs */}
                  <div className="p-3 bg-light rounded-3 mb-3 border border-light-subtle">
                    <div className="fs-12 text-muted mb-1">
                      <strong>Duration: </strong> {proj.duration}
                    </div>
                    <p className="fs-13 text-secondary mb-0 line-height-sm">
                      {proj.outcome}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <Link
                  to={proj.path}
                  className="btn btn-sm btn-outline-dark rounded-pill w-100 py-2 fs-13 fw-semibold text-center mt-2 d-flex align-items-center justify-content-center gap-1"
                >
                  <span>Explore Track Curriculum</span>
                  <i className="fa-regular fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

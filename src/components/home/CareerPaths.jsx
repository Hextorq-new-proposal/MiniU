import React from "react"
import { Link } from "react-router-dom"

const FEATURED_PROGRAMS = [
  {
    category: "SAP Module",
    categoryIcon: "fa-regular fa-coins",
    title: "SAP FICO",
    subtitle: "Financial Accounting, Controlling & S/4 HANA Integration",
    duration: "80 Hours",
    level: "Beginner Friendly",
    skills: "SAP FI • CO • GST • Asset Accounting",
    path: "/courses/sap-fico"
  },
  {
    category: "SAP Module",
    categoryIcon: "fa-regular fa-code",
    title: "SAP ABAP",
    subtitle: "Advanced SAP Programming, RICEF & S/4 HANA Migration",
    duration: "80 Hours",
    level: "Beginner to Advanced",
    skills: "RICEF • OOPS ABAP • BAPI • OData",
    path: "/courses/sap-abap"
  },
  {
    category: "Data & BI",
    categoryIcon: "fa-regular fa-chart-mixed",
    title: "Business Analytics",
    subtitle: "Transform raw data into dashboards & strategic insights",
    duration: "70 Hours",
    level: "Beginner Friendly",
    skills: "Power BI • SQL • Advanced Excel • Tableau",
    path: "/courses/business-analytics"
  },
  {
    category: "AI & Tech",
    categoryIcon: "fa-regular fa-brain",
    title: "Data Science & Machine Learning",
    subtitle: "Statistical modeling, predictive algorithms & Python AI",
    duration: "90 Hours",
    level: "Comprehensive",
    skills: "Python • Scikit-Learn • EDA • ML Models",
    path: "/courses/data-science"
  },
  {
    category: "Web Engineering",
    categoryIcon: "fa-regular fa-laptop-code",
    title: "Full Stack Web Development",
    subtitle: "Build modern, responsive full-stack apps with MERN stack",
    duration: "90 Hours",
    level: "Job-Oriented",
    skills: "React 19 • Node.js • Express • MongoDB",
    path: "/courses/full-stack-web-development"
  },
  {
    category: "Design",
    categoryIcon: "fa-regular fa-pen-nib",
    title: "UI/UX Design Masterclass",
    subtitle: "User research, wireframing, and Figma product prototyping",
    duration: "60 Hours",
    level: "Beginner Friendly",
    skills: "Figma • Auto-Layout • Design Systems • Wireframes",
    path: "/courses/uiux-design"
  }
]

export default function CareerPaths() {
  return (
    <section className="py-5 py-lg-6 miniu-bg-slate border-bottom">
      <div className="container py-3">
        {/* Section Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-5">
          <div>
            <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
              Featured Programs
            </span>
            <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-1">
              Explore Career-Focused Programs
            </h2>
            <p className="fs-16 miniu-text-muted mb-0">
              Curated, practical courses designed to build real-world job competence.
            </p>
          </div>

          <Link
            to="/courses"
            className="btn-miniu-outline align-self-start align-self-md-auto"
          >
            <span>View All Courses</span>
            <i className="fa-regular fa-arrow-right-long" />
          </Link>
        </div>

        {/* Minimal Course Cards Grid */}
        <div className="row g-4">
          {FEATURED_PROGRAMS.map((program, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="miniu-card p-4 justify-content-between">
                <div>
                  {/* Category icon & label */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="d-inline-flex align-items-center gap-2 fs-12 text-muted fw-semibold text-uppercase">
                      <i className={`${program.categoryIcon} text-danger`} />
                      {program.category}
                    </span>
                    <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2 py-1 fs-11 fw-semibold">
                      Placement Support
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="fs-20 fw-bold miniu-text-dark mb-2">
                    <Link
                      to={program.path}
                      className="miniu-text-dark text-decoration-none"
                    >
                      {program.title}
                    </Link>
                  </h3>

                  {/* Subtitle */}
                  <p className="miniu-text-muted fs-14 mb-3 line-clamp-2">
                    {program.subtitle}
                  </p>

                  {/* Meta Specs */}
                  <div className="d-flex align-items-center gap-2 fs-13 text-secondary mb-3 pb-3 border-bottom">
                    <span className="d-flex align-items-center gap-1">
                      <i className="fa-regular fa-clock text-danger" /> {program.duration}
                    </span>
                    <span>•</span>
                    <span className="d-flex align-items-center gap-1">
                      <i className="fa-regular fa-graduation-cap text-danger" /> {program.level}
                    </span>
                  </div>

                  {/* Skills preview */}
                  <div className="fs-12 text-muted mb-4">
                    <span className="fw-semibold text-dark">Key Focus: </span>
                    {program.skills}
                  </div>
                </div>

                {/* Footer Link */}
                <div>
                  <Link
                    to={program.path}
                    className="btn btn-sm btn-outline-danger w-100 rounded-pill py-2 fw-semibold fs-13 d-flex align-items-center justify-content-center gap-1"
                  >
                    <span>View Program</span>
                    <i className="fa-regular fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

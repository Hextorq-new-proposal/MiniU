import React, { useState } from "react"

const MENTORS = [
  {
    name: "Arun Prakash",
    role: "Senior SAP Lead Consultant",
    experience: "11+ Yrs Industry Exp",
    avatar: "/assets/images/miniu/arun.jpg",
    initials: "AP",
    rating: "4.9",
    studentsMentored: "650+ Students",
    badge: "Enterprise ERP Specialist",
    expertise: ["SAP FICO", "SAP S/4 HANA", "GST & Taxation", "Controlling (CO)"],
    coursesTaught: "SAP FICO & S/4 HANA Finance",
    bio: "Architected financial workflows for global manufacturing & retail giants. Specializes in end-to-end FICO configuration and real-time server labs."
  },
  {
    name: "Dr. Rajesh K.",
    role: "Lead Data Scientist & BI Mentor",
    experience: "9+ Yrs Industry Exp",
    avatar: null,
    initials: "RK",
    rating: "4.9",
    studentsMentored: "520+ Students",
    badge: "Predictive Analytics Specialist",
    expertise: ["Power BI", "SQL Queries", "Python ML", "Tableau BI"],
    coursesTaught: "Business Analytics & Data Science",
    bio: "Specializes in predictive modeling, executive BI dashboards, and turning raw enterprise databases into actionable decision pipelines."
  },
  {
    name: "Suresh Babu",
    role: "Full Stack Architect & Cloud Engineer",
    experience: "8+ Yrs Industry Exp",
    avatar: null,
    initials: "SB",
    rating: "4.8",
    studentsMentored: "480+ Students",
    badge: "Scalable Systems Specialist",
    expertise: ["React 19", "Node.js REST", "MongoDB", "DevOps & CI/CD"],
    coursesTaught: "Full Stack Web & Cloud Architecture",
    bio: "Ex-tech lead with deep expertise in scalable microservices, full-stack web architecture, and mentoring engineers into high-growth tech companies."
  }
]

export default function Mentors() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="py-5 py-lg-6 miniu-bg-slate border-bottom">
      <div className="container py-3">

        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
          <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Corporate Faculty
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Meet Your Mentors
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Learn directly from working enterprise consultants who bring real company project code into the classroom.
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="row g-4 justify-content-center reveal-stagger-group align-items-stretch">
          {MENTORS.map((m, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 reveal-card d-flex">
              <div
                className="bg-white border rounded-4 overflow-hidden d-flex flex-column w-100"
                style={{
                  boxShadow: hovered === idx
                    ? "0 20px 48px rgba(0,0,0,0.15)"
                    : "0 2px 14px rgba(0,0,0,0.07)",
                  transform: hovered === idx ? "translateY(-6px)" : "none",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Dark Gradient Header */}
                <div
                  style={{
                    height: "80px",
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    flexShrink: 0
                  }}
                />

                {/* Avatar — sits half inside header, half below */}
                <div className="d-flex justify-content-center">
                  <div className="position-relative" style={{ marginTop: "-48px" }}>
                    {m.avatar ? (
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="rounded-circle object-fit-cover shadow"
                        style={{
                          width: "96px",
                          height: "96px",
                          border: "3px solid #ffffff"
                        }}
                      />
                    ) : (
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white shadow"
                        style={{
                          width: "96px",
                          height: "96px",
                          fontSize: "22px",
                          border: "3px solid #ffffff",
                          background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)"
                        }}
                      >
                        {m.initials}
                      </div>
                    )}
                    {/* Active green dot */}
                    <span
                      className="position-absolute bg-success rounded-circle"
                      style={{
                        width: "16px",
                        height: "16px",
                        bottom: "4px",
                        right: "4px",
                        border: "2px solid #ffffff"
                      }}
                      title="Active Faculty Mentor"
                    />
                  </div>
                </div>

                {/* Inner Content */}
                <div className="px-4 pb-4 pt-2 d-flex flex-column flex-grow-1">

                  {/* Name */}
                  <div className="text-center mt-2 mb-1">
                    <span className="fw-bold text-dark" style={{ fontSize: "16px" }}>
                      {m.name}
                    </span>
                  </div>

                  {/* Experience chip */}
                  <div className="text-center mb-1">
                    <span
                      className="bg-light border rounded-pill text-muted px-3 py-1 d-inline-block"
                      style={{ fontSize: "11px" }}
                    >
                      {m.experience}
                    </span>
                  </div>

                  {/* Role */}
                  <span
                    className="text-danger fw-semibold text-center d-block mb-2"
                    style={{ fontSize: "13px" }}
                  >
                    {m.role}
                  </span>

                  {/* Stats row */}
                  <div
                    className="d-flex justify-content-center gap-4 fw-semibold text-dark mb-3"
                    style={{ fontSize: "12px" }}
                  >
                    <span>
                      <i className="fa-solid fa-graduation-cap text-danger me-1" />
                      {m.studentsMentored}
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-warning me-1" />
                      {m.rating} Rating
                    </span>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-muted text-start mb-3"
                    style={{ fontSize: "13px", lineHeight: 1.6 }}
                  >
                    {m.bio}
                  </p>

                  {/* Expertise chips */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {m.expertise.map((exp, eIdx) => (
                      <span
                        key={eIdx}
                        className="bg-light border text-dark rounded-pill px-2 py-1"
                        style={{ fontSize: "11px" }}
                      >
                        <i className="fa-solid fa-check text-success me-1" />
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="border-top pt-3 mt-auto d-flex align-items-center justify-content-between">
                    <div>
                      <span className="text-muted d-block" style={{ fontSize: "11px" }}>
                        Program:
                      </span>
                      <span className="fw-semibold text-dark" style={{ fontSize: "12px" }}>
                        {m.coursesTaught}
                      </span>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger rounded-pill px-3"
                      style={{ fontSize: "11px" }}
                    >
                      Book Session
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

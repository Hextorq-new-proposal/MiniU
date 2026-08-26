import React from "react"
import { Link } from "react-router-dom"

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

        {/* 3 Compact Mentor Cards - Expand on Hover */}
        <div className="row g-4 justify-content-center reveal-stagger-group">
          {MENTORS.map((m, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 reveal-card d-flex">
              <div
                className="miniu-card bg-white border border-light-subtle rounded-4 shadow-sm d-flex flex-column align-items-center text-center w-100 position-relative overflow-hidden"
                style={{
                  minHeight: "260px",
                  maxHeight: "260px",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  padding: "24px 20px 16px"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.maxHeight = "580px"
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(15, 23, 42, 0.1)"
                  e.currentTarget.style.transform = "translateY(-4px)"
                  const expEl = e.currentTarget.querySelector(".mentor-expanded-content")
                  if (expEl) expEl.style.opacity = "1"
                  const hintEl = e.currentTarget.querySelector(".mentor-hover-hint")
                  if (hintEl) hintEl.style.opacity = "0"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.maxHeight = "260px"
                  e.currentTarget.style.boxShadow = ""
                  e.currentTarget.style.transform = ""
                  const expEl = e.currentTarget.querySelector(".mentor-expanded-content")
                  if (expEl) expEl.style.opacity = "0"
                  const hintEl = e.currentTarget.querySelector(".mentor-hover-hint")
                  if (hintEl) hintEl.style.opacity = "1"
                }}
              >
                {/* Top Subtle Red Accent Line */}
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "3.5px",
                    background: "linear-gradient(90deg, #ff0135 0%, #ff527b 100%)"
                  }}
                />

                {/* Centered Large Profile Photo */}
                <div className="position-relative mb-2 mt-1">
                  {m.avatar ? (
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="rounded-circle object-fit-cover shadow-sm border border-3 border-white"
                      style={{ width: "72px", height: "72px" }}
                    />
                  ) : (
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-18 shadow-sm border border-3 border-white"
                      style={{
                        width: "72px",
                        height: "72px",
                        background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)"
                      }}
                    >
                      {m.initials}
                    </div>
                  )}
                  {/* Active Status Dot */}
                  <span
                    className="position-absolute border border-2 border-white rounded-circle bg-success"
                    style={{ width: "13px", height: "13px", bottom: "2px", right: "2px" }}
                    title="Active Faculty Mentor"
                  />
                </div>

                {/* Name & Role */}
                <div className="d-flex align-items-center justify-content-center gap-1.5 mb-0.5">
                  <h4 className="fs-15 fw-bold miniu-text-dark mb-0">{m.name}</h4>
                  <i className="fa-solid fa-circle-check text-primary fs-12" title="Verified Corporate Mentor" />
                </div>
                <span className="fs-12 text-danger fw-bold d-block mb-1">{m.role}</span>
                <span className="badge bg-light text-secondary border border-light-subtle px-2 py-0.5 fs-10 fw-semibold rounded-pill mb-2">
                  <i className="fa-regular fa-briefcase text-muted me-1" />
                  {m.experience}
                </span>

                {/* Highlights Strip */}
                <div className="d-flex align-items-center justify-content-center gap-3 p-1.5 px-2.5 bg-light bg-opacity-75 rounded-3 mb-1 border border-light-subtle w-100">
                  <div className="d-flex align-items-center gap-1.5 fs-11 fw-bold text-dark">
                    <i className="fa-solid fa-graduation-cap text-danger fs-12" />
                    <span>{m.studentsMentored}</span>
                  </div>
                  <div className="d-flex align-items-center gap-1 fs-11 fw-bold text-dark">
                    <i className="fa-solid fa-star text-warning fs-11" />
                    <span>{m.rating} Rating</span>
                  </div>
                </div>

                {/* Hover Hint */}
                <div className="mentor-hover-hint text-muted fs-11 mt-1 transition-all" style={{ opacity: 1 }}>
                  <span>Hover to view profile details ▾</span>
                </div>

                {/* Expanded Details Container */}
                <div className="mentor-expanded-content w-100 pt-2 transition-all" style={{ opacity: 0, transition: "opacity 0.3s ease" }}>
                  {/* Bio */}
                  <p className="miniu-text-muted fs-12 mb-2.5 line-height-relaxed text-start w-100">
                    {m.bio}
                  </p>

                  {/* Key Expertise Chips */}
                  <div className="mb-2.5 w-100 text-start">
                    <span className="d-block fs-10 fw-bold text-uppercase text-muted letter-spacing-1 mb-1.5">
                      Hands-On Tech Stack:
                    </span>
                    <div className="d-flex flex-wrap gap-1">
                      {m.expertise.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="badge bg-white text-dark border border-light-subtle px-2 py-0.5 fs-10 fw-medium rounded-pill shadow-2xs d-inline-flex align-items-center gap-1"
                        >
                          <i className="fa-solid fa-check text-success fs-9" />
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-2 border-top w-100 d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <span className="fs-9 text-uppercase text-muted fw-bold d-block">Program Lead:</span>
                      <span className="fs-11 fw-bold text-dark">{m.coursesTaught}</span>
                    </div>
                    <span className="badge bg-light text-dark border border-light-subtle rounded-pill px-2 py-1 fs-10 fw-semibold d-inline-flex align-items-center gap-1">
                      <i className="fa-regular fa-comments text-danger" />
                      <span>1:1 Mentorship</span>
                    </span>
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

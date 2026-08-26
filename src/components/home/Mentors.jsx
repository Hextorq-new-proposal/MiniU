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

        {/* 3 Modern Professional Mentor Cards */}
        <div className="row g-4 justify-content-center reveal-stagger-group">
          {MENTORS.map((m, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 reveal-card d-flex">
              <div className="miniu-card bg-white border border-light-subtle rounded-4 p-4 p-xl-4.5 shadow-sm hover-shadow-lg transition-all d-flex flex-column justify-content-between w-100 position-relative overflow-hidden">
                {/* Top Subtle Red Accent Line */}
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "3.5px",
                    background: "linear-gradient(90deg, #ff0135 0%, #ff527b 100%)"
                  }}
                />

                <div>
                  {/* Profile Header (Avatar + Name + Role) */}
                  <div className="d-flex align-items-center gap-3 mb-3 pt-1">
                    <div className="position-relative flex-shrink-0">
                      {m.avatar ? (
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="rounded-circle object-fit-cover shadow-xs border border-2 border-white"
                          style={{ width: "54px", height: "54px" }}
                        />
                      ) : (
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-15 shadow-xs border border-2 border-white"
                          style={{
                            width: "54px",
                            height: "54px",
                            background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)"
                          }}
                        >
                          {m.initials}
                        </div>
                      )}
                      {/* Active Status Dot */}
                      <span
                        className="position-absolute bottom-0 end-0 bg-success border border-2 border-white rounded-circle"
                        style={{ width: "12px", height: "12px" }}
                        title="Active Faculty Mentor"
                      />
                    </div>

                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center gap-1.5 mb-0.5">
                        <h4 className="fs-16 fw-bold miniu-text-dark mb-0 line-clamp-1">{m.name}</h4>
                        <i className="fa-solid fa-circle-check text-primary fs-12 flex-shrink-0" title="Verified Corporate Mentor" />
                      </div>
                      <span className="fs-12 text-danger fw-bold d-block line-clamp-1 mb-1">{m.role}</span>
                      <span className="badge bg-light text-secondary border border-light-subtle px-2 py-0.5 fs-10 fw-semibold rounded-pill">
                        <i className="fa-regular fa-briefcase text-muted me-1" />
                        {m.experience}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Strip */}
                  <div className="d-flex align-items-center justify-content-between p-2 px-3 bg-light bg-opacity-75 rounded-3 mb-3 border border-light-subtle">
                    <div className="d-flex align-items-center gap-1.5 fs-11 fw-bold text-dark">
                      <i className="fa-solid fa-graduation-cap text-danger fs-12" />
                      <span>{m.studentsMentored}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1 fs-11 fw-bold text-dark">
                      <i className="fa-solid fa-star text-warning fs-11" />
                      <span>{m.rating} Rating</span>
                    </div>
                    <span className="badge bg-danger-subtle text-danger fw-bold rounded-pill px-2 py-0.5 fs-10">
                      100% Practical
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="miniu-text-muted fs-13 mb-3 line-height-relaxed" style={{ minHeight: "56px" }}>
                    {m.bio}
                  </p>

                  {/* Key Expertise Chips */}
                  <div className="mb-3">
                    <span className="d-block fs-11 fw-bold text-uppercase text-muted letter-spacing-1 mb-2">
                      Hands-On Tech Stack:
                    </span>
                    <div className="d-flex flex-wrap gap-1.5">
                      {m.expertise.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="badge bg-white text-dark border border-light-subtle px-2.5 py-1.5 fs-11 fw-medium rounded-pill shadow-2xs d-inline-flex align-items-center gap-1"
                        >
                          <i className="fa-solid fa-check text-success fs-10" />
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Track Leader & Action */}
                <div className="pt-3 border-top mt-2 d-flex align-items-center justify-content-between">
                  <div style={{ minHeight: "38px" }} className="d-flex flex-column justify-content-center">
                    <span className="fs-10 text-uppercase text-muted fw-bold d-block">Program Lead:</span>
                    <span className="fs-12 fw-bold text-dark line-clamp-1">{m.coursesTaught}</span>
                  </div>
                  <span className="badge bg-light text-dark border border-light-subtle rounded-pill px-2.5 py-1.5 fs-11 fw-semibold d-inline-flex align-items-center gap-1.5">
                    <i className="fa-regular fa-comments text-danger" />
                    <span>1:1 Mentorship</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

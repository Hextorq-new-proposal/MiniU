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
        <div className="row g-4 justify-content-center reveal-stagger-group align-items-stretch">
          {MENTORS.map((m, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 reveal-card d-flex">
              <div className="miniu-card bg-white border border-light-subtle rounded-4 p-4 shadow-sm hover-shadow-lg transition-all d-flex flex-column justify-content-between w-100 position-relative overflow-hidden h-100">
                {/* Top Subtle Red Accent Line */}
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "3.5px",
                    background: "linear-gradient(90deg, #ff0135 0%, #ff527b 100%)"
                  }}
                />

                <div>
                  {/* Centered Large Profile Photo (96px) */}
                  <div className="d-flex justify-content-center mb-3 mt-2">
                    <div className="position-relative">
                      {m.avatar ? (
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="rounded-circle object-fit-cover shadow-sm border border-3 border-white"
                          style={{ width: "96px", height: "96px" }}
                        />
                      ) : (
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-24 shadow-sm border border-3 border-white"
                          style={{
                            width: "96px",
                            height: "96px",
                            background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)"
                          }}
                        >
                          {m.initials}
                        </div>
                      )}
                      {/* Active Status Dot */}
                      <span
                        className="position-absolute border border-2 border-white rounded-circle bg-success"
                        style={{ width: "16px", height: "16px", bottom: "4px", right: "4px" }}
                        title="Active Faculty Mentor"
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-3">
                    <div className="d-flex align-items-center justify-content-center gap-1.5 mb-1">
                      <h4 className="fs-17 fw-bold miniu-text-dark mb-0">{m.name}</h4>
                      <i className="fa-solid fa-circle-check text-primary fs-13" title="Verified Corporate Mentor" />
                    </div>
                    <span className="fs-13 text-danger fw-bold d-block mb-1.5">{m.role}</span>
                    <span className="badge bg-light text-secondary border border-light-subtle px-3 py-1 fs-11 fw-semibold rounded-pill">
                      <i className="fa-regular fa-briefcase text-muted me-1.5" />
                      {m.experience}
                    </span>
                  </div>

                  {/* Highlights Strip */}
                  <div className="d-flex align-items-center justify-content-center gap-4 p-2 bg-light bg-opacity-75 rounded-3 mb-3 border border-light-subtle w-100">
                    <div className="d-flex align-items-center gap-1.5 fs-12 fw-bold text-dark">
                      <i className="fa-solid fa-graduation-cap text-danger fs-13" />
                      <span>{m.studentsMentored}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1 fs-12 fw-bold text-dark">
                      <i className="fa-solid fa-star text-warning fs-12" />
                      <span>{m.rating} Rating</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="miniu-text-muted fs-13 mb-3 line-height-relaxed text-start" style={{ minHeight: "56px" }}>
                    {m.bio}
                  </p>

                  {/* Key Expertise Chips */}
                  <div className="mb-3 text-start">
                    <span className="d-block fs-10 fw-bold text-uppercase text-muted letter-spacing-1 mb-1.5">
                      Hands-On Tech Stack:
                    </span>
                    <div className="d-flex flex-wrap gap-1.5">
                      {m.expertise.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="badge bg-white text-dark border border-light-subtle px-2.5 py-1 fs-11 fw-medium rounded-pill shadow-2xs d-inline-flex align-items-center gap-1"
                        >
                          <i className="fa-solid fa-check text-success fs-9" />
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-top mt-auto w-100 d-flex align-items-center justify-content-between">
                  <div className="text-start">
                    <span className="fs-9 text-uppercase text-muted fw-bold d-block">Program Lead:</span>
                    <span className="fs-12 fw-bold text-dark">{m.coursesTaught}</span>
                  </div>
                  <span className="badge bg-light text-dark border border-light-subtle rounded-pill px-2.5 py-1.5 fs-11 fw-semibold d-inline-flex align-items-center gap-1">
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

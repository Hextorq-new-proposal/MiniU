import React from "react"
import { Link } from "react-router-dom"

const MENTORS = [
  {
    name: "Arun Prakash",
    role: "Senior SAP Lead Consultant",
    experience: "11+ Years Industry Exp",
    expertise: ["SAP FICO", "SAP S/4 HANA", "GST & Taxation", "Controlling"],
    coursesTaught: "SAP FICO, S/4 HANA Finance",
    bio: "Consulted for global manufacturing and retail giants. Mentored over 600+ students into enterprise ERP roles."
  },
  {
    name: "Dr. Rajesh K.",
    role: "Lead Data Scientist & Analytics Mentor",
    experience: "9+ Years Industry Exp",
    expertise: ["Power BI", "SQL & Postgres", "Python ML", "Tableau"],
    coursesTaught: "Business Analytics, Data Science",
    bio: "Specializes in business intelligence and predictive modeling. Passionate about project-based, practical training."
  },
  {
    name: "Suresh Babu",
    role: "Full Stack Architect & Cloud Engineer",
    experience: "8+ Years Industry Exp",
    expertise: ["React 19", "Node.js", "MongoDB", "DevOps & CI/CD"],
    coursesTaught: "Full Stack Web Dev, DevOps",
    bio: "Ex-tech lead with extensive experience in building scalable microservices and mentoring freshers into product companies."
  }
]

export default function Mentors() {
  return (
    <section className="py-5 py-lg-6 miniu-bg-slate border-bottom">
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Expert Faculty
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Meet Your Mentors
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Learn directly from working professionals and certified corporate consultants.
          </p>
        </div>

        {/* 3 Mentor Cards Grid */}
        <div className="row g-4 justify-content-center">
          {MENTORS.map((m, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="miniu-card p-4 justify-content-between">
                <div>
                  {/* Top Bar */}
                  <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                    <div>
                      <h4 className="fs-18 fw-bold miniu-text-dark mb-0">{m.name}</h4>
                      <span className="fs-13 text-danger fw-semibold">{m.role}</span>
                    </div>
                    <span className="badge bg-light text-secondary border px-2 py-1 fs-11">
                      {m.experience}
                    </span>
                  </div>

                  <p className="miniu-text-muted fs-14 mb-3 line-height-relaxed">
                    {m.bio}
                  </p>

                  {/* Expertise Badges */}
                  <div className="mb-3">
                    <span className="d-block fs-12 fw-bold text-dark mb-1">Key Expertise:</span>
                    <div className="d-flex flex-wrap gap-1">
                      {m.expertise.map((exp, eIdx) => (
                        <span key={eIdx} className="badge bg-light text-dark border px-2 py-1 fs-11">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-top mt-3">
                  <span className="fs-12 text-muted d-block mb-1">Courses Taught:</span>
                  <span className="fs-13 fw-semibold text-dark">{m.coursesTaught}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react"
import { CompanyLogo } from "../common/CompanyLogos"

const STORIES = [
  {
    name: "Kavitha R.",
    course: "SAP FICO",
    beforeRole: "Fresher (B.Com Graduate)",
    afterRole: "Associate SAP Consultant",
    company: "TCS",
    quote: "MiniU's hands-on SAP server practice and real GST/AP configuration classes helped me clear technical rounds confidently on my very first attempt."
  },
  {
    name: "Vignesh Kumar",
    course: "SAP ABAP",
    beforeRole: "Junior Developer",
    afterRole: "SAP ABAP Developer",
    company: "Infosys",
    quote: "The RICEF reporting and OData modules were explained with real manufacturing scenarios. The mock interviews prepared me thoroughly for corporate hiring."
  },
  {
    name: "Priyanka S.",
    course: "Business Analytics",
    beforeRole: "Operations Associate",
    afterRole: "Data & BI Analyst",
    company: "Bosch",
    quote: "The Power BI and SQL capstone projects directly matched what employers test in technical rounds. The 1-on-1 placement guidance made all the difference."
  }
]

export default function PlacementStories({ onOpenCounselling }) {
  return (
    <section id="placement-proof" className="py-5 py-lg-6 miniu-bg-white border-bottom">
      <div className="container py-3">

        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5 reveal-fade-up">
          <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Verified Outcomes
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Career Outcomes
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Real career transitions from learners who trained and built projects at MiniU.
          </p>
        </div>

        {/* 3 Transformation Story Cards */}
        <div className="row g-4 mb-4 reveal-stagger-group align-items-stretch">
          {STORIES.map((story, idx) => (
            <div key={idx} className="col-lg-4 d-flex reveal-card">
              <div
                className="border rounded-3 bg-white w-100 d-flex flex-column"
                style={{ padding: "20px", boxShadow: "0 1px 8px rgba(15,23,42,0.05)" }}
              >

                {/* Top Row: Name/Course + Company Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: 0 }}>{story.name}</p>
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>{story.course}</span>
                  </div>
                  <div style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: 999,
                    padding: "2px 10px",
                    fontSize: 9,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    flexShrink: 0
                  }}>
                    <span style={{ fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.04em" }}>PLACED @</span>
                    <CompanyLogo name={story.company} height={14} />
                  </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #f1f5f9", margin: "12px 0" }} />

                {/* Before → After */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase" }}>Before</span>
                  <span style={{ fontSize: 12.5, color: "#475569" }}>{story.beforeRole}</span>
                  <span style={{ color: "#cbd5e1", fontSize: 13 }}>→</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", textTransform: "uppercase" }}>After</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{story.afterRole}</span>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #f1f5f9", margin: "12px 0" }} />

                {/* Quote */}
                <p style={{ fontSize: 12.5, color: "#64748b", fontStyle: "italic", lineHeight: 1.55, margin: 0 }}>
                  "{story.quote}"
                </p>

                {/* Footer */}
                <div style={{
                  marginTop: "auto",
                  paddingTop: 12,
                  borderTop: "1px solid #f1f5f9",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>✅ Verified Placement</span>
                  <CompanyLogo name={story.company} height={16} />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-4 rounded-4 miniu-bg-slate border text-center max-w-800 mx-auto">
          <h4 className="fs-18 fw-bold miniu-text-dark mb-1">Want personalized guidance on your career transition?</h4>
          <p className="miniu-text-muted fs-14 mb-3">
            Speak with an academic counselor to explore which program matches your degree and background.
          </p>
          <button
            type="button"
            onClick={onOpenCounselling}
            className="btn-miniu-primary py-2 px-4 fs-14 text-white"
          >
            <span className="text-white">Book Free Career Counselling</span>
            <i className="fa-regular fa-arrow-right-long text-white" />
          </button>
        </div>

      </div>
    </section>
  )
}

import React, { useState } from "react"

const CAREER_DATA = {
  "sap-fico": {
    name: "SAP FICO Consultant",
    fresherCTC: "₹4.2 - ₹6.5 LPA",
    expCTC: "₹7.5 - ₹12.0 LPA",
    growthRate: "+140% Average Salary Hike",
    timeline: "8-10 Weeks to Placement",
    topCompanies: ["TCS", "Infosys", "Wipro", "Bosch", "Accenture", "Cognizant"]
  },
  "sap-abap": {
    name: "SAP ABAP Developer",
    fresherCTC: "₹4.5 - ₹7.0 LPA",
    expCTC: "₹8.0 - ₹14.5 LPA",
    growthRate: "+160% Average Salary Hike",
    timeline: "8-10 Weeks to Placement",
    topCompanies: ["IBM", "Deloitte", "LTI Mindtree", "Infosys", "Capgemini"]
  },
  "sap-mm": {
    name: "SAP MM / SCM Consultant",
    fresherCTC: "₹4.0 - ₹6.2 LPA",
    expCTC: "₹7.0 - ₹11.0 LPA",
    growthRate: "+130% Average Salary Hike",
    timeline: "8 Weeks to Placement",
    topCompanies: ["Bosch", "TCS", "L&T Infotech", "Cognizant", "ZF Group"]
  },
  "business-analytics": {
    name: "Business & Data Analyst",
    fresherCTC: "₹4.5 - ₹7.2 LPA",
    expCTC: "₹8.0 - ₹13.5 LPA",
    growthRate: "+150% Average Salary Hike",
    timeline: "8-10 Weeks to Placement",
    topCompanies: ["Amazon", "Target", "Mu Sigma", "Bosch", "Zoho", "LatentView"]
  },
  "data-science": {
    name: "Data Scientist / ML Engineer",
    fresherCTC: "₹5.2 - ₹8.5 LPA",
    expCTC: "₹9.5 - ₹18.0 LPA",
    growthRate: "+180% Average Salary Hike",
    timeline: "10-12 Weeks to Placement",
    topCompanies: ["Tiger Analytics", "Fractal", "Wipro", "Accenture AI", "TCS"]
  },
  "full-stack": {
    name: "Full Stack Web Developer (MERN)",
    fresherCTC: "₹4.5 - ₹7.5 LPA",
    expCTC: "₹8.0 - ₹15.0 LPA",
    growthRate: "+150% Average Salary Hike",
    timeline: "10 Weeks to Placement",
    topCompanies: ["Zoho", "Freshworks", "Cognizant", "Paytm", "Thoughtworks"]
  },
  "devops": {
    name: "Cloud & DevOps Engineer",
    fresherCTC: "₹5.0 - ₹8.0 LPA",
    expCTC: "₹9.0 - ₹16.0 LPA",
    growthRate: "+170% Average Salary Hike",
    timeline: "8 Weeks to Placement",
    topCompanies: ["AWS Partners", "Cisco", "Infosys", "Mindtree", "Red Hat"]
  },
  "uiux": {
    name: "UI/UX & Product Designer",
    fresherCTC: "₹4.0 - ₹6.5 LPA",
    expCTC: "₹7.5 - ₹12.0 LPA",
    growthRate: "+135% Average Salary Hike",
    timeline: "8 Weeks to Placement",
    topCompanies: ["Swiggy", "Cred", "Zoho", "Bain", "Tech Mahindra"]
  }
}

export default function SalaryCalculator({ onOpenDemoModal }) {
  const [selectedCourse, setSelectedCourse] = useState("sap-fico")
  const [experience, setExperience] = useState("fresher") // "fresher" or "experienced"

  const data = CAREER_DATA[selectedCourse] || CAREER_DATA["sap-fico"]
  const projectedCTC = experience === "fresher" ? data.fresherCTC : data.expCTC

  return (
    <div className="bg-white rounded-4 border p-4 p-md-5 shadow-sm">
      <div className="text-center max-w-700 mx-auto mb-4">
        <span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
          Career ROI & Salary Estimator
        </span>
        <h3 className="fs-28 fw-bold text-dark mb-2">
          Calculate Your Career & Salary Potential
        </h3>
        <p className="text-muted fs-14">
          See expected starting packages, career growth trajectory, and hiring companies for job-oriented programs at MiniU Coimbatore.
        </p>
      </div>

      <div className="row g-4 align-items-center">
        {/* Controls Column */}
        <div className="col-lg-6">
          <div className="bg-light rounded-4 p-4 border">
            {/* Step 1: Course Selection */}
            <div className="mb-4">
              <label className="form-label fs-14 fw-bold text-dark mb-2">
                1. Select Target Career Track:
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="form-select rounded-3 py-2 fs-14 fw-semibold border-light-subtle shadow-xs"
              >
                <option value="sap-fico">SAP FICO (Financial Accounting & Controlling)</option>
                <option value="sap-abap">SAP ABAP (Advanced Programming)</option>
                <option value="sap-mm">SAP MM (Materials Management & SCM)</option>
                <option value="business-analytics">Business Analytics (Power BI, SQL, Python)</option>
                <option value="data-science">Data Science & Machine Learning (AI)</option>
                <option value="full-stack">Full Stack Web Development (MERN Stack)</option>
                <option value="devops">Cloud Computing & DevOps (Docker, K8s)</option>
                <option value="uiux">UI/UX Design & Product Prototyping (Figma)</option>
              </select>
            </div>

            {/* Step 2: Experience Toggle */}
            <div className="mb-4">
              <label className="form-label fs-14 fw-bold text-dark mb-2">
                2. Current Background / Experience:
              </label>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  onClick={() => setExperience("fresher")}
                  className={`btn flex-grow-1 rounded-pill py-2 fs-13 fw-semibold transition-all ${
                    experience === "fresher"
                      ? "btn-danger shadow-sm"
                      : "btn-outline-secondary bg-white text-dark"
                  }`}
                >
                  🎓 Fresher / College Graduate
                </button>
                <button
                  type="button"
                  onClick={() => setExperience("experienced")}
                  className={`btn flex-grow-1 rounded-pill py-2 fs-13 fw-semibold transition-all ${
                    experience === "experienced"
                      ? "btn-danger shadow-sm"
                      : "btn-outline-secondary bg-white text-dark"
                  }`}
                >
                  💼 Working Professional (Switch)
                </button>
              </div>
            </div>

            <div className="p-3 bg-white rounded-3 border">
              <div className="d-flex align-items-center gap-2 text-success fs-13 fw-semibold mb-1">
                <span>✓</span> 100% Placement Guarantee Support
              </div>
              <div className="d-flex align-items-center gap-2 text-success fs-13 fw-semibold mb-1">
                <span>✓</span> Dedicated 1-on-1 Placement Counselor in Coimbatore
              </div>
              <div className="d-flex align-items-center gap-2 text-success fs-13 fw-semibold">
                <span>✓</span> Lifetime Access to MiniU Alumni Job Portal
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="col-lg-6">
          <div className="p-4 p-md-5 rounded-4 border border-danger-subtle bg-danger-subtle text-dark">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="badge bg-danger text-white rounded-pill px-3 py-1 fs-12 fw-semibold">
                Estimated Output
              </span>
              <span className="text-muted fs-13 fw-semibold">
                {data.timeline}
              </span>
            </div>

            <h4 className="fs-18 fw-semibold text-secondary mb-1">Projected Annual CTC:</h4>
            <div className="fs-36 fw-bold text-danger mb-2 font-monospace">
              {projectedCTC}
            </div>

            <div className="badge bg-white text-success border border-success-subtle px-3 py-2 rounded-pill fs-13 fw-semibold mb-4 shadow-xs">
              ⚡ {data.growthRate}
            </div>

            {/* Hiring partners preview */}
            <div className="mb-4">
              <div className="fs-13 fw-bold text-secondary text-uppercase mb-2">
                Top Hiring Companies for this track:
              </div>
              <div className="d-flex flex-wrap gap-2">
                {data.topCompanies.map((c, i) => (
                  <span key={i} className="badge bg-white text-dark border px-3 py-2 rounded-pill fs-12 fw-semibold shadow-xs">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenDemoModal && onOpenDemoModal({ shortTitle: data.name })}
              className="btn btn-danger w-100 rounded-pill py-3 fw-bold shadow fs-15 d-flex align-items-center justify-content-center gap-2"
            >
              Get Free Career Roadmap & Demo Class <i className="fa-regular fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

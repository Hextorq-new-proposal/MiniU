import React from "react"

const TRUSTED_COMPANIES = [
  "TCS",
  "Infosys",
  "Bosch",
  "Wipro",
  "Cognizant",
  "Capgemini",
  "Zoho"
]

export default function TrustStrip() {
  return (
    <section className="py-4 miniu-bg-slate border-bottom">
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-lg-3 text-center text-lg-start">
            <span className="fs-13 fw-semibold text-muted text-uppercase letter-spacing-1">
              Trusted by learners building careers in
            </span>
          </div>
          <div className="col-lg-9">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-3 gap-md-4">
              {TRUSTED_COMPANIES.map((company, index) => (
                <div key={index} className="partner-logo-item">
                  <span>{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from "react"
import { CompanyLogo } from "../common/CompanyLogos"

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
    <section className="py-4 miniu-bg-slate border-bottom reveal-fade-up">
      <div className="container">
        <p className="text-center fs-13 fw-semibold text-muted text-uppercase letter-spacing-1 mb-3">
          Trusted by learners building careers in
        </p>
        <div className="d-flex align-items-center justify-content-center gap-5 flex-nowrap">
          {TRUSTED_COMPANIES.map((company, index) => (
            <div
              key={index}
              className="partner-logo-item d-flex align-items-center justify-content-center grayscale-hover transition-all flex-shrink-0"
              style={{ opacity: 0.85 }}
            >
              <CompanyLogo name={company} height={26} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

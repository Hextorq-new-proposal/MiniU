import React, { useState } from "react"
import { Link } from "react-router-dom"

function SocialIcon({ href, icon, label, hoverColor }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="text-decoration-none"
      style={{
        width: "38px", height: "38px", minWidth: "38px",
        borderRadius: "50%", display: "inline-flex",
        alignItems: "center", justifyContent: "center",
        border: hov ? `1.5px solid ${hoverColor}` : "1.5px solid #e2e8f0",
        background: hov ? hoverColor : "#fff",
        color: hov ? "#fff" : "#64748b",
        boxShadow: hov ? `0 4px 14px ${hoverColor}40` : "0 1px 4px rgba(15,23,42,0.07)",
        transform: hov ? "translateY(-3px) scale(1.08)" : "none",
        transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)"
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <i className={`fa-brands ${icon}`} style={{ fontSize: "15px" }} />
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="miniu-bg-slate border-top py-5">
      <div className="container py-4">
        <div className="row g-4 justify-content-between">
          {/* Brand Col */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-inline-block mb-3">
              <img
                src="/assets/logo/miniu-logo.svg"
                alt="MiniU EdTech"
                style={{ height: "58px", width: "auto", maxHeight: "58px" }}
              />
            </Link>
            <p className="miniu-text-muted fs-14 mb-3 max-w-350">
              MiniU is a job-oriented professional training institute in Coimbatore offering practical programs in SAP, Business Analytics, Full Stack Web Development, and UI/UX Design.
            </p>
            <div className="d-flex flex-column gap-2 fs-13">
              <a
                href="https://maps.google.com/?q=Vayaluran+Towers+RS+Puram+Coimbatore"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-link text-decoration-none d-flex align-items-start gap-2"
              >
                <i className="fa-regular fa-location-dot text-danger mt-1 flex-shrink-0" />
                <span>Vayaluran Towers, RS Puram, Coimbatore, Tamil Nadu 641002</span>
              </a>
              <a
                href="mailto:info@miniu.info"
                className="footer-contact-link text-decoration-none d-flex align-items-center gap-2"
              >
                <i className="fa-regular fa-envelope text-danger flex-shrink-0" />
                <span>info@miniu.info</span>
              </a>
              <a
                href="tel:+919944055555"
                className="footer-contact-link text-decoration-none d-flex align-items-center gap-2"
              >
                <i className="fa-regular fa-phone text-danger flex-shrink-0" />
                <span>+91 99440 55555</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-6">
            <h5 className="fs-15 fw-bold miniu-text-dark mb-3">Navigation</h5>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 fs-14">
              <li>
                <Link to="/" className="miniu-text-muted text-decoration-none hover-text-danger">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="miniu-text-muted text-decoration-none hover-text-danger">Courses Catalog</Link>
              </li>
              <li>
                <Link to="/about" className="miniu-text-muted text-decoration-none hover-text-danger">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="miniu-text-muted text-decoration-none hover-text-danger">Resources & Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="miniu-text-muted text-decoration-none hover-text-danger">Contact & Admission</Link>
              </li>
            </ul>
          </div>

          {/* Core Tracks */}
          <div className="col-lg-3 col-6">
            <h5 className="fs-15 fw-bold miniu-text-dark mb-3">Popular Programs</h5>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 fs-14">
              <li>
                <Link to="/courses/sap-fico" className="miniu-text-muted text-decoration-none hover-text-danger">SAP FICO Certification</Link>
              </li>
              <li>
                <Link to="/courses/sap-abap" className="miniu-text-muted text-decoration-none hover-text-danger">SAP ABAP Programming</Link>
              </li>
              <li>
                <Link to="/courses/business-analytics" className="miniu-text-muted text-decoration-none hover-text-danger">Business Analytics (Power BI)</Link>
              </li>
              <li>
                <Link to="/courses/data-science" className="miniu-text-muted text-decoration-none hover-text-danger">Data Science & ML</Link>
              </li>
              <li>
                <Link to="/courses/full-stack-web-development" className="miniu-text-muted text-decoration-none hover-text-danger">Full Stack Web Development</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fs-15 fw-bold miniu-text-dark mb-3">Connect With Us</h5>
            <p className="miniu-text-muted fs-13 mb-3">
              Follow our official channels for student updates, batch announcements, and career guidance.
            </p>
            <div className="d-flex align-items-center gap-2 mb-4">
              {[
                { href: "https://www.linkedin.com/company/miniuniversity/", icon: "fa-linkedin", label: "LinkedIn", hoverColor: "#0a66c2" },
                { href: "https://www.instagram.com/miniuniversity_p", icon: "fa-instagram", label: "Instagram", hoverColor: "#e1306c" },
                { href: "https://www.facebook.com/people/MiniU/61566454693166/", icon: "fa-facebook", label: "Facebook", hoverColor: "#1877f2" },
              ].map(({ href, icon, label, hoverColor }) => (
                <SocialIcon key={label} href={href} icon={icon} label={label} hoverColor={hoverColor} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-top pt-4 mt-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 fs-13 text-muted">
          <div>
            © {new Date().getFullYear()} MiniU EdTech. All Rights Reserved.
          </div>
          <div className="d-flex gap-3">
            <Link to="/privacy-policy" className="text-muted text-decoration-none">Privacy Policy</Link>
            <Link to="/terms" className="text-muted text-decoration-none">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

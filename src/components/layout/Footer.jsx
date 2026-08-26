import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="miniu-bg-slate border-top py-5">
      <div className="container py-4">
        <div className="row g-4 justify-content-between">
          {/* Brand Col */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-inline-block mb-3">
              <img src="/assets/images/miniu/logo.png" alt="MiniU EdTech" height="36" />
            </Link>
            <p className="miniu-text-muted fs-14 mb-3 max-w-350">
              MiniU is a job-oriented professional training institute in Coimbatore offering practical programs in SAP, Business Analytics, Full Stack Web Development, and UI/UX Design.
            </p>
            <div className="d-flex flex-column gap-2 fs-13 text-secondary">
              <div>
                <i className="fa-regular fa-location-dot text-danger me-2" />
                Vayaluran Towers, RS Puram, Coimbatore, Tamil Nadu 641002
              </div>
              <div>
                <i className="fa-regular fa-envelope text-danger me-2" />
                info@miniu.info
              </div>
              <div>
                <i className="fa-regular fa-phone text-danger me-2" />
                +91 99440 55555
              </div>
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
              <a href="https://www.linkedin.com/company/miniuniversity/" target="_blank" rel="noreferrer" className="btn btn-sm btn-light border rounded-circle" style={{ width: "36px", height: "36px" }}>
                <i className="fa-brands fa-linkedin text-dark fs-14" />
              </a>
              <a href="https://www.instagram.com/miniuniversity_p" target="_blank" rel="noreferrer" className="btn btn-sm btn-light border rounded-circle" style={{ width: "36px", height: "36px" }}>
                <i className="fa-brands fa-instagram text-dark fs-14" />
              </a>
              <a href="https://www.facebook.com/people/MiniU/61566454693166/" target="_blank" rel="noreferrer" className="btn btn-sm btn-light border rounded-circle" style={{ width: "36px", height: "36px" }}>
                <i className="fa-brands fa-facebook text-dark fs-14" />
              </a>
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

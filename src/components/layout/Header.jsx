import React, { useState } from "react"
import { Link } from "react-router-dom"
import SpecularButton from "../common/SpecularButton"

export default function Header({ onOpenCounselling }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCounsellingClick = (e) => {
    if (onOpenCounselling) {
      e.preventDefault()
      onOpenCounselling()
    }
  }

  return (
    <>
      <header className="miniu-header d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link to="/" className="d-flex align-items-center text-decoration-none me-4 me-xl-5">
            <img
              src="/assets/logo/miniu-logo.svg"
              alt="MiniU EdTech"
              className="miniu-header-logo d-inline-block align-middle"
              style={{ height: "46px", width: "auto", maxHeight: "46px" }}
              onError={(e) => {
                e.target.style.display = "none"
              }}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="d-none d-lg-flex align-items-center gap-1 gap-xl-2">
            <Link to="/" className="miniu-nav-link">
              Home
            </Link>
            <Link to="/courses" className="miniu-nav-link">
              Courses
            </Link>
            <Link to="/#placement-proof" className="miniu-nav-link">
              Placements
            </Link>
            <Link to="/about" className="miniu-nav-link">
              About
            </Link>
            <Link to="/blog" className="miniu-nav-link">
              Resources
            </Link>
            <Link to="/contact" className="miniu-nav-link">
              Contact Us
            </Link>
          </nav>

          {/* Right Action */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <SpecularButton
              size="lg"
              radius={18}
              tint="#ce0505"
              tintOpacity={0}
              blur={0}
              textColor="#000000"
              lineColor="#e80a0a"
              baseColor="#e00909"
              intensity={1}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={handleCounsellingClick}
              style={{ background: "#ffffff", padding: "9px 20px" }}
            >
              <span className="fw-bold" style={{ color: "#000000", fontSize: "13.5px" }}>Book Free Counselling</span>
              <i className="fa-regular fa-arrow-right-long" style={{ color: "#000000", fontSize: "13.5px" }} />
            </SpecularButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="btn btn-sm btn-light border d-lg-none rounded-3 px-2 py-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars fs-18 text-dark" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
          style={{ zIndex: 1050 }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-75 h-100 p-4 d-flex flex-column justify-content-between shadow-lg"
            style={{ maxWidth: "320px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
                <img
                  src="/assets/logo/miniu-logo.svg"
                  alt="MiniU"
                  className="miniu-header-logo"
                  style={{ height: "36px", width: "auto", maxHeight: "36px" }}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-light rounded-circle"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="d-flex flex-column gap-2">
                <Link
                  to="/"
                  className="miniu-nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="miniu-nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <a
                  href="/#placement-proof"
                  className="miniu-nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Placements
                </a>
                <Link
                  to="/about"
                  className="miniu-nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  className="miniu-nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources & Blog
                </Link>
                <Link
                  to="/contact"
                  className="miniu-nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="pt-3 border-top">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onOpenCounselling) onOpenCounselling()
                }}
                className="btn-miniu-primary w-100 justify-content-center py-2"
              >
                Book Free Counselling
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

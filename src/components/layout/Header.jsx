import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import LiquidButton from "../ui/LiquidButton"

export default function Header({ onOpenCounselling }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isHomeActive = pathname === "/"
  const isCoursesActive = pathname.startsWith("/courses")
  const isAboutActive = pathname.startsWith("/about")
  const isPlacementsActive = pathname.startsWith("/placements")
  const isResourcesActive = pathname.startsWith("/blog") || pathname.startsWith("/resources")
  const isContactActive = pathname.startsWith("/contact")

  const handleCounsellingClick = (e) => {
    if (onOpenCounselling) {
      e.preventDefault()
      onOpenCounselling()
    }
  }

  const goToPlacements = (e) => {
    if (pathname === "/") {
      e.preventDefault()
      const el = document.getElementById("placement-proof")
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <header className="miniu-header d-flex align-items-center bg-white border-bottom position-sticky top-0 z-3">
        <div className="container d-flex align-items-center justify-content-between h-100">
          {/* Brand Logo */}
          <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
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
            <Link to="/" className={`miniu-nav-link ${isHomeActive ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/courses" className={`miniu-nav-link ${isCoursesActive ? "active" : ""}`}>
              Courses
            </Link>
            <a href="/#placement-proof" onClick={goToPlacements} className={`miniu-nav-link ${isPlacementsActive ? "active" : ""}`}>
              Placements
            </a>
            <Link to="/about" className={`miniu-nav-link ${isAboutActive ? "active" : ""}`}>
              About
            </Link>
            <Link to="/blog" className={`miniu-nav-link ${isResourcesActive ? "active" : ""}`}>
              Resources
            </Link>
            <Link to="/contact" className={`miniu-nav-link ${isContactActive ? "active" : ""}`}>
              Contact Us
            </Link>
          </nav>

          {/* Right Action */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <LiquidButton
              onClick={handleCounsellingClick}
              variant="red"
            >
              <span>Book Free Counselling</span>
              <i className="fa-regular fa-arrow-right-long" />
            </LiquidButton>
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
            className="position-absolute top-0 end-0 h-100 bg-white p-4 shadow-lg d-flex flex-column justify-content-between"
            style={{ width: "280px", maxWidth: "85vw" }}
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
                  className={`miniu-nav-link py-2 ${isHomeActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className={`miniu-nav-link py-2 ${isCoursesActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to={pathname === "/" ? "/#placement-proof" : "/placements"}
                  className={`miniu-nav-link py-2 ${isPlacementsActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Placements
                </Link>
                <Link
                  to="/about"
                  className={`miniu-nav-link py-2 ${isAboutActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  className={`miniu-nav-link py-2 ${isResourcesActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources & Blog
                </Link>
                <Link
                  to="/contact"
                  className={`miniu-nav-link py-2 ${isContactActive ? "active" : ""}`}
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

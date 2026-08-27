import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: ""
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: "" })

    // Simulate reliable API request with realistic feedback
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: "" })
      setFormData({
        name: "",
        email: "",
        mobile: "",
        location: "",
        message: ""
      })
    }, 1000)
  }

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MiniU EdTech Training Institute",
    "image": "https://miniu.info/assets/logo/miniu-logo.svg",
    "telephone": "+91-9789678512",
    "email": "info@miniu.info",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MiniU, RS Puram",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0168",
      "longitude": "76.9558"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  }

  return (
    <>
      <SEOHead
        title="Contact Us | MiniU EdTech RS Puram, Coimbatore"
        description="Get in touch with MiniU RS Puram, Coimbatore for course counseling, SAP & Tech syllabus, demo bookings, and career support."
        keywords="contact miniu coimbatore, sap course enquiry rs puram, it training institute phone number, miniu address coimbatore"
        canonicalUrl="https://miniu.info/contact"
        schema={contactSchema}
      />
      <Header />

      <main className="miniu-bg-slate min-vh-100">
        {/* =========================================================================
            1. Hero Breadcrumb Banner
           ========================================================================= */}
        <section className="miniu-contact-banner">
          <div className="container position-relative z-1">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                {/* Breadcrumb List */}
                <nav aria-label="breadcrumb" className="d-flex justify-content-center mb-3">
                  <ol className="breadcrumb mb-0 bg-transparent p-0 fs-14 fw-semibold">
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-decoration-none text-dark hover-red">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active text-danger" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>

                <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill bg-white border shadow-xs mb-3">
                  <span className="bg-danger rounded-circle" style={{ width: "8px", height: "8px" }} />
                  <span className="fs-12 fw-bold text-uppercase tracking-wider text-dark">
                    Get In Touch
                  </span>
                </div>

                <h1 className="display-5 fw-bold text-dark mb-3 miniu-font-display">
                  Contact Us
                </h1>
                <p className="text-secondary fs-16 mb-0 mx-auto" style={{ maxWidth: "600px" }}>
                  Have questions about our career programs, mentorship, or admissions? 
                  Reach out anytime or visit our center in RS Puram, Coimbatore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. Top 3 Contact Information Cards
           ========================================================================= */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {/* Card 1: Office Location */}
              <div className="col-lg-4 col-md-6">
                <div className="miniu-contact-card d-flex flex-column justify-content-between">
                  <div>
                    <div className="miniu-contact-icon">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Office Location
                    </h3>
                    <p className="text-secondary fs-15 mb-3 leading-relaxed">
                      MiniU, RS Puram
                      <br />
                      Coimbatore, Tamil Nadu
                    </p>
                  </div>
                  <a
                    href="#campus-map"
                    className="text-danger fw-bold fs-14 text-decoration-none d-inline-flex align-items-center gap-2 mt-2 hover-lift"
                  >
                    <span>View RS Puram Campus Map</span>
                    <i className="fa-solid fa-arrow-down fs-12" />
                  </a>
                </div>
              </div>

              {/* Card 2: Email Query */}
              <div className="col-lg-4 col-md-6">
                <div className="miniu-contact-card d-flex flex-column justify-content-between">
                  <div>
                    <div className="miniu-contact-icon">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      info@miniu.info
                    </h3>
                    <p className="text-secondary fs-15 mb-3 leading-relaxed">
                      Email us anytime for anykind of query.
                    </p>
                  </div>
                  <a
                    href="mailto:info@miniu.info"
                    className="text-danger fw-bold fs-14 text-decoration-none d-inline-flex align-items-center gap-2 mt-2 hover-lift"
                  >
                    <span>Send an Email</span>
                    <i className="fa-solid fa-arrow-right fs-12" />
                  </a>
                </div>
              </div>

              {/* Card 3: Call Support */}
              <div className="col-lg-4 col-md-12">
                <div className="miniu-contact-card d-flex flex-column justify-content-between">
                  <div>
                    <div className="miniu-contact-icon">
                      <i className="fa-solid fa-phone-volume" />
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">
                      Call us: +91 9789678512
                    </h3>
                    <p className="text-secondary fs-15 mb-3 leading-relaxed">
                      Call us any kind support ,we will wait for it.
                    </p>
                  </div>
                  <a
                    href="tel:+919789678512"
                    className="text-danger fw-bold fs-14 text-decoration-none d-inline-flex align-items-center gap-2 mt-2 hover-lift"
                  >
                    <span>Call Admission Desk</span>
                    <i className="fa-solid fa-arrow-right fs-12" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. Main Contact Section: Interactive Map + "Get In Touch" Form
           ========================================================================= */}
        <section className="pb-5 mb-4" id="campus-map">
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-stretch">
              {/* Left Column: Google Maps & Center Highlights */}
              <div className="col-lg-5 d-flex flex-column justify-content-between">
                <div className="bg-white p-3 p-xl-4 rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                      <div>
                        <h4 className="h6 fw-bold text-dark mb-1">
                          MiniU Learning Campus
                        </h4>
                        <span className="fs-13 text-muted">
                          RS Puram, Coimbatore
                        </span>
                      </div>
                      <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1.5 fs-12 fw-bold">
                        Open Mon - Sat
                      </span>
                    </div>

                    {/* Interactive Google Map */}
                    <div
                      className="rounded-3 overflow-hidden border mb-3 position-relative"
                      style={{ height: "300px", minHeight: "260px" }}
                    >
                      <iframe
                        title="MiniU RS Puram Coimbatore Location"
                        src="https://maps.google.com/maps?q=RS%20Puram,%20Coimbatore,%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>

                  {/* Campus Highlights */}
                  <div className="pt-2">
                    <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border mb-2.5">
                      <div className="text-danger fs-18">
                        <i className="fa-solid fa-clock" />
                      </div>
                      <div>
                        <div className="fs-13 fw-bold text-dark">Visiting Hours</div>
                        <div className="fs-12 text-muted">Monday – Saturday: 9:00 AM – 7:00 PM</div>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/919789678512?text=Hi%20MiniU%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-between p-3 rounded-3 text-decoration-none"
                      style={{ backgroundColor: "#E8F8EE", border: "1px solid #C1EED0" }}
                    >
                      <div className="d-flex align-items-center gap-2.5">
                        <i className="fa-brands fa-whatsapp fs-20 text-success" />
                        <div>
                          <div className="fs-13 fw-bold text-dark">Instant WhatsApp Chat</div>
                          <div className="fs-12 text-secondary">Chat directly with a Senior Counselor</div>
                        </div>
                      </div>
                      <i className="fa-solid fa-arrow-right text-success fs-14" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: "Get In Touch" Contact Form */}
              <div className="col-lg-7">
                <div className="miniu-contact-form-card h-100">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-danger bg-opacity-10 text-danger fs-12 fw-bold text-uppercase mb-2">
                      Contact Us
                    </div>
                    <h2 className="h2 fw-bold text-dark miniu-font-display mb-2">
                      Get In{" "}
                      <span className="miniu-header-shape text-danger">
                        Touch
                      </span>
                    </h2>
                    <p className="text-secondary fs-14 mb-0">
                      Fill in your details below and our academic advisors will connect with you within 2 hours.
                    </p>
                  </div>

                  {status.submitted ? (
                    <div className="p-4 rounded-4 bg-success bg-opacity-10 border border-success border-opacity-25 text-center my-4">
                      <div className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle mb-3" style={{ width: "48px", height: "48px" }}>
                        <i className="fa-solid fa-check fs-20" />
                      </div>
                      <h4 className="h5 fw-bold text-dark mb-1">
                        Thank You! Message Received.
                      </h4>
                      <p className="text-secondary fs-14 mb-3">
                        Our career counseling team at RS Puram, Coimbatore has received your enquiry and will call you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus({ submitting: false, submitted: false, error: "" })}
                        className="btn btn-sm btn-outline-success rounded-pill px-4 py-1.5 fs-13 fw-bold"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        {/* Full Name */}
                        <div className="col-md-6">
                          <label className="miniu-form-label">
                            Full Name*
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Sharma"
                            className="miniu-form-input"
                          />
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                          <label className="miniu-form-label">
                            Email*
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. rahul@example.com"
                            className="miniu-form-input"
                          />
                        </div>

                        {/* Mobile */}
                        <div className="col-md-6">
                          <label className="miniu-form-label">
                            Mobile*
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="e.g. +91 97896 78512"
                            className="miniu-form-input"
                          />
                        </div>

                        {/* Location */}
                        <div className="col-md-6">
                          <label className="miniu-form-label">
                            Location*
                          </label>
                          <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. Coimbatore / RS Puram"
                            className="miniu-form-input"
                          />
                        </div>

                        {/* Message */}
                        <div className="col-12">
                          <label className="miniu-form-label">
                            Message*
                          </label>
                          <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us which course (SAP, Full Stack, Data Science) or batch you are interested in..."
                            className="miniu-form-textarea"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 pt-2">
                          <button
                            type="submit"
                            disabled={status.submitting}
                            className="btn-miniu-primary miniu-contact-primary rounded-pill px-5 py-3 fs-15 fw-bold text-white border-0 shadow-sm d-inline-flex align-items-center gap-2"
                          >
                            {status.submitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                <span>Sending Query...</span>
                              </>
                            ) : (
                              <>
                                <span>Send Now</span>
                                <i className="fa-regular fa-arrow-right-long" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

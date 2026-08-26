import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"
import SyllabusAccordion from "../components/courses/SyllabusAccordion"
import LeadModal from "../components/modals/LeadModal"
import StickyActionBar from "../components/common/StickyActionBar"
import { COURSES } from "../data/coursesData"

export default function CourseDetails({ specificSlug = null }) {
  const params = useParams()
  const currentSlug = specificSlug || params.slug || "sap-fico"

  // Find matching course or default to first
  const course = COURSES.find((c) => c.slug === currentSlug) || COURSES[0]

  // Modal states
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("demo") // "demo" or "syllabus"

  const handleOpenModal = (type = "demo") => {
    setModalType(type)
    setModalOpen(true)
  }

  // Schema.org Course Structured Data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.shortDesc,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "MiniU EdTech Institute",
      "sameAs": "https://miniu.info",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "MiniU Campus, RS Puram",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641002",
        "addressCountry": "IN"
      }
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["Onsite", "Online"],
      "location": "MiniU Campus, RS Puram, Coimbatore",
      "courseWorkload": course.duration
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": course.rating,
      "reviewCount": course.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  }

  const safeImage = course.imageLarge?.startsWith("/") ? course.imageLarge : `/${course.imageLarge || "assets/images/miniu/logo.png"}`

  return (
    <>
      <SEOHead
        title={`${course.title} | MiniU EdTech Coimbatore`}
        description={course.shortDesc}
        canonicalUrl={`https://miniu.info/courses/${course.slug}`}
        schema={courseSchema}
      />

      <Header onOpenCounselling={() => handleOpenModal("demo")} />

      <main className="bg-light pb-5">
        {/* Course Hero Banner */}
        <section className="bg-white border-bottom py-5">
          <div className="container">
            {/* Breadcrumbs */}
            <nav className="mb-3">
              <ol className="breadcrumb fs-13 mb-0">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-muted text-decoration-none">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/courses" className="text-muted text-decoration-none">Courses</Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="text-muted">{course.category}</span>
                </li>
                <li className="breadcrumb-item active text-danger fw-semibold" aria-current="page">
                  {course.shortTitle}
                </li>
              </ol>
            </nav>

            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
                  <span className="badge bg-danger text-white rounded-pill px-3 py-1 fs-12 fw-semibold">
                    {course.category} Training
                  </span>
                  {course.badge && (
                    <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1 fs-12 fw-semibold">
                      ⭐ {course.badge}
                    </span>
                  )}
                  <span className="badge bg-light text-dark border rounded-pill px-3 py-1 fs-12 fw-semibold">
                    <i className="fa-solid fa-star text-warning me-1" /> {course.rating} ({course.reviewCount} Reviews)
                  </span>
                </div>

                <h1 className="fs-32 fw-bold text-dark mb-3 line-height-sm">
                  {course.title}
                </h1>

                <p className="text-muted fs-16 mb-4">
                  {course.shortDesc}
                </p>

                {/* Meta Highlights Row */}
                <div className="d-flex flex-wrap gap-4 text-dark fs-14 mb-4 pb-2 border-bottom">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-clock text-danger fs-18" />
                    <div>
                      <span className="d-block text-muted fs-11 text-uppercase">Duration</span>
                      <strong className="fs-14">{course.duration}</strong>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-location-dot text-danger fs-18" />
                    <div>
                      <span className="d-block text-muted fs-11 text-uppercase">Training Mode</span>
                      <strong className="fs-14">Coimbatore / Online</strong>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-briefcase text-danger fs-18" />
                    <div>
                      <span className="d-block text-muted fs-11 text-uppercase">Placement Support</span>
                      <strong className="fs-14 text-success">Included</strong>
                    </div>
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="d-flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenModal("demo")}
                    className="btn btn-danger btn-lg rounded-pill px-4 fs-15 fw-semibold shadow-sm"
                  >
                    🚀 Book Free Demo Session
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenModal("syllabus")}
                    className="btn btn-outline-dark btn-lg rounded-pill px-4 fs-15 fw-semibold"
                  >
                    <i className="fa-regular fa-file-pdf text-danger me-2" />
                    Download Syllabus
                  </button>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border rounded-4 shadow-sm overflow-hidden bg-white">
                  <img
                    src={safeImage}
                    alt={course.title}
                    className="w-100 object-fit-cover"
                    style={{ height: "200px" }}
                    onError={(e) => {
                      e.target.src = "/assets/images/miniu/logo.png"
                    }}
                  />
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-dark fs-16 mb-3">Course Key Highlights:</h5>
                    <ul className="list-unstyled d-flex flex-column gap-2 fs-13 text-secondary mb-4">
                      {course.keyHighlights?.slice(0, 5).map((hl, hIdx) => (
                        <li key={hIdx} className="d-flex align-items-start gap-2">
                          <i className="fa-solid fa-check text-success mt-1" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="d-grid gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenModal("demo")}
                        className="btn btn-danger rounded-pill fw-semibold py-2"
                      >
                        Enroll / Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Course Content Sections */}
        <div className="container py-5">
          <div className="row g-4">
            {/* Left Content Column */}
            <div className="col-lg-8">
              {/* Overview Card */}
              <div className="card border rounded-4 p-4 p-md-5 bg-white mb-4 shadow-xs">
                <h2 className="fs-22 fw-bold text-dark mb-3">Course Overview</h2>
                <p className="text-secondary fs-15 line-height-lg mb-4">
                  {course.longDesc}
                </p>

                <h3 className="fs-18 fw-bold text-dark mb-3">Target Career Roles</h3>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {course.targetRoles?.map((role, rIdx) => (
                    <span key={rIdx} className="badge bg-light text-dark border px-3 py-2 fs-13">
                      💼 {role}
                    </span>
                  ))}
                </div>

                <h3 className="fs-18 fw-bold text-dark mb-2">Prerequisites</h3>
                <p className="text-muted fs-14 mb-0">
                  {course.prerequisites}
                </p>
              </div>

              {/* Interactive Syllabus Module Accordion */}
              <div className="card border rounded-4 p-4 p-md-5 bg-white mb-4 shadow-xs">
                <SyllabusAccordion
                  syllabus={course.syllabus}
                  onDownloadClick={() => handleOpenModal("syllabus")}
                />
              </div>

              {/* Course Specific FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="card border rounded-4 p-4 p-md-5 bg-white shadow-xs">
                  <h2 className="fs-22 fw-bold text-dark mb-4">Frequently Asked Questions</h2>
                  <div className="d-flex flex-column gap-3">
                    {course.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="p-3 bg-light rounded-3 border">
                        <h4 className="fs-15 fw-bold text-dark mb-2">
                          Q: {faq.q}
                        </h4>
                        <p className="fs-14 text-secondary mb-0">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: "90px", zIndex: 10 }}>
                {/* Free Demo Card */}
                <div className="card border-0 rounded-4 p-4 bg-white shadow-sm mb-4 border border-danger-subtle">
                  <div className="text-center mb-3">
                    <span className="badge bg-danger text-white rounded-pill px-3 py-1 fs-12 fw-semibold mb-2">
                      Free Live Trial
                    </span>
                    <h3 className="fs-18 fw-bold text-dark">Attend a Free Demo Class</h3>
                    <p className="text-muted fs-13 mb-0">
                      Experience our hands-on teaching methodology, meet the mentors, and discuss batch timings.
                    </p>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenModal("demo")}
                      className="btn btn-danger btn-lg rounded-pill fw-semibold fs-14"
                    >
                      Book 1-on-1 Demo Session
                    </button>
                    <a
                      href="https://wa.me/919944055555"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success rounded-pill fw-semibold fs-14 d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="fa-brands fa-whatsapp fs-18" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Training Location Snapshot */}
                <div className="card border rounded-4 p-4 bg-white shadow-xs">
                  <h4 className="fs-16 fw-bold text-dark mb-2">Campus Location:</h4>
                  <p className="text-secondary fs-13 mb-3">
                    <i className="fa-solid fa-location-dot text-danger me-2" />
                    MiniU Campus, Vayaluran Towers, RS Puram, Coimbatore, Tamil Nadu 641002
                  </p>
                  <p className="text-muted fs-12 mb-0">
                    <i className="fa-solid fa-clock text-danger me-2" />
                    Batches available: Weekday Mornings / Evenings &amp; Weekend Fast-Track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Sticky Mobile Conversion Bar */}
      <StickyActionBar
        onDemoClick={() => handleOpenModal("demo")}
        onSyllabusClick={() => handleOpenModal("syllabus")}
      />

      {/* Interactive Lead / Counselling Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={course}
        type={modalType}
      />
    </>
  )
}

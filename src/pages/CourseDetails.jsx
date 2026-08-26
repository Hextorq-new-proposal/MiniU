import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
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

  return (
    <>
      {/* Full-Stack SEO Manager */}
      <SEOHead
        title={course.seo.title}
        description={course.seo.metaDesc}
        keywords={course.seo.keywords}
        canonicalUrl={`https://miniu.info/courses/${course.slug}`}
        ogImage={`https://miniu.info/${course.imageLarge}`}
        schema={courseSchema}
      />

      <Header />

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
                      <span className="d-block text-muted fs-11 text-uppercase">Placement</span>
                      <strong className="fs-14 text-success">100% Guaranteed</strong>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-indian-rupee-sign text-danger fs-18" />
                    <div>
                      <span className="d-block text-muted fs-11 text-uppercase">Salary Range</span>
                      <strong className="fs-14">{course.salaryRange}</strong>
                    </div>
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="d-flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenModal("demo")}
                    className="btn btn-danger btn-lg rounded-pill px-4 py-3 fw-bold shadow-sm fs-15 d-flex align-items-center gap-2"
                  >
                    <span>Book a Free 1-on-1 Demo Class</span>
                    <i className="fa-regular fa-arrow-right-long" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenModal("syllabus")}
                    className="btn btn-outline-dark btn-lg rounded-pill px-4 py-3 fw-semibold fs-15 d-flex align-items-center gap-2"
                  >
                    <i className="fa-solid fa-file-pdf text-danger" />
                    <span>Download Syllabus (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Course Right Image Card */}
              <div className="col-lg-4">
                <div className="bg-white p-3 rounded-4 border shadow-sm">
                  <img
                    src={course.imageLarge}
                    alt={course.title}
                    className="w-100 rounded-3 object-fit-cover mb-3"
                    style={{ maxHeight: "240px" }}
                    onError={(e) => {
                      e.target.src = "assets/images/courses/courses-two-image1.png"
                    }}
                  />
                  <div className="p-2">
                    <h5 className="fs-16 fw-bold text-dark mb-2">Training Inclusions:</h5>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 fs-13 text-secondary">
                      <li className="d-flex align-items-center gap-2">
                        <span className="text-success">✓</span> 24/7 Dedicated Server Access
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="text-success">✓</span> Live Real-World Capstone Projects
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="text-success">✓</span> Global Certification Prep & Exam Voucher
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="text-success">✓</span> 5+ Mock Technical Interviews
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="text-success">✓</span> Flexible Weekday & Weekend Batches
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                {/* Course Overview */}
                <div className="bg-white rounded-4 border p-4 p-md-5 shadow-sm mb-4">
                  <h3 className="fs-22 fw-bold text-dark mb-3">About This Program</h3>
                  <p className="text-muted fs-15 mb-4 line-height-lg">
                    {course.longDesc}
                  </p>

                  <h4 className="fs-18 fw-bold text-dark mb-3">Key Highlights of the Training</h4>
                  <div className="row g-3">
                    {course.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="col-sm-6">
                        <div className="d-flex align-items-start gap-2 p-3 rounded-3 bg-light border h-100">
                          <span className="text-danger fw-bold mt-1">✓</span>
                          <span className="fs-14 fw-semibold text-dark">{highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Career Roles */}
                <div className="bg-white rounded-4 border p-4 p-md-5 shadow-sm mb-4">
                  <h3 className="fs-20 fw-bold text-dark mb-2">Target Job Profiles</h3>
                  <p className="text-muted fs-14 mb-3">
                    Upon successful graduation from MiniU, students are qualified for the following industry positions:
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {course.targetRoles.map((role, rIdx) => (
                      <span key={rIdx} className="badge bg-light text-dark border px-3 py-2 rounded-pill fs-13 fw-semibold">
                        💼 {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Syllabus Accordion */}
                <SyllabusAccordion
                  syllabus={course.syllabus}
                  courseTitle={course.shortTitle}
                  onDownloadSyllabus={() => handleOpenModal("syllabus")}
                />

                {/* Course FAQs */}
                {course.faqs && course.faqs.length > 0 && (
                  <div className="bg-white rounded-4 border p-4 p-md-5 shadow-sm mt-4">
                    <h3 className="fs-22 fw-bold text-dark mb-3">Frequently Asked Questions</h3>
                    <div className="d-flex flex-column gap-3">
                      {course.faqs.map((faq, fIdx) => (
                        <div key={fIdx} className="p-3 bg-light rounded-3 border">
                          <h5 className="fs-15 fw-bold text-dark mb-2">Q: {faq.question}</h5>
                          <p className="text-muted fs-14 mb-0">A: {faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="sticky-top" style={{ top: "100px", zIndex: 10 }}>
                  {/* Lead Capture Box */}
                  <div className="bg-white rounded-4 border p-4 shadow-sm mb-4">
                    <span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
                      Admissions Open
                    </span>
                    <h4 className="fs-18 fw-bold text-dark mb-2">Next Batch Starting Soon!</h4>
                    <p className="text-muted fs-13 mb-4">
                      Limited seats per batch for personalized mentoring at our RS Puram campus.
                    </p>

                    <button
                      type="button"
                      onClick={() => handleOpenModal("demo")}
                      className="btn btn-danger w-100 rounded-pill py-3 fw-bold shadow-sm fs-14 mb-2"
                    >
                      Book Free Demo Class
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenModal("syllabus")}
                      className="btn btn-outline-secondary w-100 rounded-pill py-2 fs-14 fw-semibold mb-3"
                    >
                      Download Syllabus PDF
                    </button>

                    <div className="border-top pt-3 text-center">
                      <p className="text-muted fs-12 mb-1">Need immediate counseling?</p>
                      <a
                        href="tel:+919944055555"
                        className="text-danger fw-bold text-decoration-none fs-14"
                      >
                        📞 Call Us: +91 99440 55555
                      </a>
                    </div>
                  </div>

                  {/* Prerequisites Card */}
                  <div className="bg-white rounded-4 border p-4 shadow-sm">
                    <h5 className="fs-15 fw-bold text-dark mb-2">Eligibility / Prerequisites</h5>
                    <p className="text-muted fs-13 mb-0">
                      {course.prerequisites}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile Action Bar */}
      <StickyActionBar
        courseTitle={course.shortTitle}
        onOpenDemoModal={() => handleOpenModal("demo")}
      />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={course}
        type={modalType}
      />
    </>
  )
}

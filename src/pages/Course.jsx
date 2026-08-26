import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"
import CourseCatalog from "../components/courses/CourseCatalog"
import LeadModal from "../components/modals/LeadModal"
import StickyActionBar from "../components/common/StickyActionBar"

export default function Course({ initialCategory = "all" }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("demo")
  const [activeCourse, setActiveCourse] = useState(null)

  const handleEnquire = (course = null) => {
    setActiveCourse(course)
    setModalType("demo")
    setModalOpen(true)
  }

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Job Oriented Professional Training Courses at MiniU Coimbatore",
    "description": "Comprehensive professional courses in SAP Modules, Business Analytics, Full Stack Development, Data Science, and UI/UX Design.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "SAP ABAP Training in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SAP FICO Training in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Business Analytics Course in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Data Science & Machine Learning Course in Coimbatore"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Full Stack Web Development Course in Coimbatore"
      }
    ]
  }

  return (
    <>
      <SEOHead
        title="Job Oriented Courses in Coimbatore with Placement Support | MiniU EdTech"
        description="Explore top SAP modules (ABAP, FICO, MM, SD, HANA), Business Analytics, Data Science, Full Stack Web Development, and DevOps courses in Coimbatore at MiniU."
        canonicalUrl="https://miniu.info/courses"
        schema={catalogSchema}
      />

      <Header onOpenCounselling={() => handleEnquire(null)} />

      <main className="bg-light pb-5">
        {/* Banner Section */}
        <section className="bg-white border-bottom py-5">
          <div className="container text-center max-w-800 mx-auto">
            <div className="d-flex align-items-center justify-content-center gap-2 fs-13 mb-3 text-muted">
              <Link to="/" className="text-muted text-decoration-none hover-text-danger">Home</Link>
              <span className="text-secondary opacity-50">/</span>
              <span className="text-danger fw-semibold">Courses</span>
            </div>

            <span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
              Career-Focused Industry Curriculum
            </span>
            <h1 className="fs-36 fw-bold text-dark mb-3">
              Explore Job-Oriented Training Programs
            </h1>
            <p className="text-muted fs-16 mb-0">
              Master in-demand skills from certified corporate trainers. Access 24/7 dedicated servers, complete real-time capstone projects, and get placement support in top companies.
            </p>
          </div>
        </section>

        {/* Interactive Course Catalog with Live Search & Filter */}
        <section className="py-4">
          <CourseCatalog
            initialCategory={initialCategory}
            onEnquire={handleEnquire}
          />
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile Action Bar */}
      <StickyActionBar
        courseTitle="MiniU Programs"
        onOpenDemoModal={() => handleEnquire(null)}
      />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={activeCourse}
        type={modalType}
      />
    </>
  )
}

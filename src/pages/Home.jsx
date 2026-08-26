import React, { useState } from "react"
import SEOHead from "../components/common/SEOHead"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import MobileCTA from "../components/layout/MobileCTA"
import Hero from "../components/home/Hero"
import TrustStrip from "../components/home/TrustStrip"
import CareerFinder from "../components/home/CareerFinder"
import CareerPaths from "../components/home/CareerPaths"
import CareerPreviewSection from "../components/home/CareerPreviewSection"
import WhyMiniU from "../components/home/WhyMiniU"
import ProjectShowcase from "../components/home/ProjectShowcase"
import PlacementStories from "../components/home/PlacementStories"
import Stats from "../components/home/Stats"
import HowItWorks from "../components/home/HowItWorks"
import Mentors from "../components/home/Mentors"
import StudentStories from "../components/home/StudentStories"
import HomeFAQ from "../components/home/HomeFAQ"
import FinalCTA from "../components/home/FinalCTA"
import LeadModal from "../components/modals/LeadModal"
import "../styles/homeRedesign.css"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [counsellingCourse, setCounsellingCourse] = useState(null)

  const handleOpenCounselling = (course = null) => {
    setCounsellingCourse(course)
    setModalOpen(true)
  }

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MiniU EdTech Institute",
    "url": "https://miniu.info",
    "logo": "https://miniu.info/assets/images/miniu/logo.png",
    "description": "Premier job-oriented training institute in Coimbatore offering practical programs in SAP, Business Analytics, Full Stack Web Development, and UI/UX with placement support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MiniU Campus, Vayaluran Towers, RS Puram",
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
    "telephone": "+91-99440-55555",
    "sameAs": [
      "https://www.facebook.com/people/MiniU/61566454693166/",
      "https://www.instagram.com/miniuniversity_p",
      "https://www.linkedin.com/company/miniuniversity/",
      "https://x.com/MiniU_p"
    ]
  }

  return (
    <div className="miniu-home-wrapper bg-white">
      {/* 1. Dynamic SEO & Schema */}
      <SEOHead
        title="MiniU EdTech | Job-Oriented Courses in Coimbatore with Placement Support"
        description="Build job-ready skills with practical projects, certified mentors, and placement support in SAP (FICO, ABAP, MM), Business Analytics, Full Stack, and UI/UX at MiniU Coimbatore."
        keywords="sap training in coimbatore, best it training institute coimbatore, sap fico course rs puram, business analytics training coimbatore, full stack web development"
        canonicalUrl="https://miniu.info"
        schema={homeSchema}
      />

      {/* 2. Header (76px desktop, 64px mobile) */}
      <Header onOpenCounselling={() => handleOpenCounselling(null)} />

      <main>
        {/* 3. Hero Section */}
        <Hero onOpenCounselling={() => handleOpenCounselling(null)} />

        {/* 4. Trust Strip */}
        <TrustStrip />

        {/* 5. Career & Course Discovery (Category tabs + 3-question finder) */}
        <CareerFinder onOpenCounselling={() => handleOpenCounselling(null)} />

        {/* 6. Popular Career Paths (Minimal, clean featured programs) */}
        <CareerPaths />

        {/* 7. Interactive Curriculum Explorer (Dedicated section) */}
        <CareerPreviewSection onOpenCounselling={() => handleOpenCounselling(null)} />

        {/* 8. Why MiniU */}
        <WhyMiniU />

        {/* 8. Learn By Doing (3 real capstone projects) */}
        <ProjectShowcase />

        {/* 9. Placement Proof (Verified student career transitions) */}
        <PlacementStories onOpenCounselling={() => handleOpenCounselling(null)} />

        {/* 10. Subtle Animated Statistics Counter */}
        <Stats />

        {/* 11. How MiniU Works (5-Step Roadmap) */}
        <HowItWorks />

        {/* 12. Meet Your Mentors */}
        <Mentors />

        {/* 13. Student Stories & Testimonials */}
        <StudentStories />

        {/* 14. Intelligent Categorized FAQ */}
        <HomeFAQ />

        {/* 15. Outcome-Oriented Final CTA */}
        <FinalCTA onOpenCounselling={() => handleOpenCounselling(null)} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Sticky Mobile Action Bar (WhatsApp & Book Counselling) */}
      <MobileCTA onOpenCounselling={() => handleOpenCounselling(null)} />

      {/* 18. Counselling / Demo Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={counsellingCourse}
        type="demo"
      />
    </div>
  )
}

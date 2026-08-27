import { useState } from "react"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import PlacementStories from "../components/home/PlacementStories"
import LeadModal from "../components/modals/LeadModal"
import SEOHead from "../components/common/SEOHead"
import "../styles/blogRedesign.css"

export default function Placements() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SEOHead
        title="Student Placements and Career Outcomes | MiniU"
        description="See how MiniU learners move from training into SAP, analytics, and technology careers with practical projects and placement support."
        canonicalUrl="https://miniu.info/placements"
      />
      <Header onOpenCounselling={() => setModalOpen(true)} />
      <main>
        <section className="miniu-placement-hero">
          <div className="container">
            <div className="miniu-placement-hero-copy reveal-fade-up">
              <span className="miniu-eyebrow">Career outcomes</span>
              <h1>Training that moves careers forward.</h1>
              <p>Meet MiniU learners who turned practical projects, mentor feedback, and focused preparation into their next opportunity.</p>
            </div>
            <div className="miniu-placement-stats reveal-stagger-group">
              {[['1,200+', 'learners supported'], ['100%', 'placement guidance'], ['4.9 / 5', 'learner rating']].map(([value, label]) => (
                <div className="miniu-placement-stat reveal-card" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <PlacementStories onOpenCounselling={() => setModalOpen(true)} />
      </main>
      <Footer />
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type="demo" />
    </>
  )
}

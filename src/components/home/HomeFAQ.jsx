import React, { useState } from "react"

const FAQ_DATA = [
  {
    category: "Courses",
    q: "Can fresh graduates with non-technical degrees join SAP courses?",
    a: "Yes! Many of our successful SAP FICO, MM, and SD students come from B.Com, BBA, B.Sc, and non-CS engineering backgrounds. Our curriculum begins from fundamental concepts before advancing to real-time enterprise configurations."
  },
  {
    category: "Courses",
    q: "What is the typical duration of courses at MiniU?",
    a: "Most professional certification courses range from 6 to 10 weeks (60 to 90 hours of live training), including hands-on project labs and mock interview drills."
  },
  {
    category: "Placement",
    q: "How does MiniU's placement support work?",
    a: "Our dedicated placement cell conducts resume workshops, LinkedIn profile optimization, and minimum 5 technical mock interviews with corporate mentors. We then schedule direct interview opportunities with hiring partners across Coimbatore, Chennai, and Bangalore."
  },
  {
    category: "Learning Formats",
    q: "Are the classes held in Coimbatore classrooms or online?",
    a: "We offer both options: In-person classroom training at our modern campus in RS Puram, Coimbatore, as well as live interactive online instructor-led weekend/weekday batches with recorded backup sessions."
  },
  {
    category: "Certification",
    q: "Do students get dedicated server access for hands-on practice?",
    a: "Yes. All enrolled students receive 24/7 cloud server access (for SAP systems, cloud sandboxes, and database labs) throughout their training and project phase."
  },
  {
    category: "Fees & EMI",
    q: "Are there flexible fee installment or EMI options available?",
    a: "Yes, we offer zero-cost installment options to ensure high-quality professional education remains accessible for students and job seekers."
  }
]

const CATEGORIES = ["All", "Courses", "Placement", "Learning Formats", "Certification", "Fees & EMI"]

export default function HomeFAQ() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [openIndex, setOpenIndex] = useState(0)

  const filtered = FAQ_DATA.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  )

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-5 py-lg-6 miniu-bg-slate border-bottom">
      <div className="container py-3 max-w-900 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-4">
          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Got Questions?
          </span>
          <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-2">
            Frequently Asked Questions
          </h2>
          <p className="fs-16 miniu-text-muted mb-0">
            Clear answers to common questions about courses, placement, and training formats.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat)
                setOpenIndex(0)
              }}
              className={`btn btn-sm rounded-pill px-3 py-1 fs-13 fw-semibold transition-all ${
                activeCategory === cat
                  ? "btn-danger text-white shadow-xs"
                  : "btn-outline-secondary bg-white text-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="d-flex flex-column gap-3">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className={`miniu-faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="miniu-faq-btn"
                >
                  <span>{item.q}</span>
                  <span
                    className="text-danger fs-14 fw-bold transition-transform"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease"
                    }}
                  >
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="miniu-faq-content">
                    <p className="mb-0">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

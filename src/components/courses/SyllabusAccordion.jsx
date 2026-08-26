import React, { useState } from "react"

export default function SyllabusAccordion({ syllabus = [], courseTitle, onDownloadSyllabus }) {
  const [openModules, setOpenModules] = useState({ 0: true }) // First module open by default

  const toggleModule = (index) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const expandAll = () => {
    const all = {}
    syllabus.forEach((_, i) => (all[i] = true))
    setOpenModules(all)
  }

  const collapseAll = () => {
    setOpenModules({})
  }

  if (!syllabus || syllabus.length === 0) return null

  return (
    <div className="bg-white rounded-4 border p-4 p-md-5 shadow-sm">
      {/* Header controls */}
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4 pb-3 border-bottom">
        <div>
          <span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-1 fs-12 fw-bold mb-2">
            Curriculum & Hands-on Modules
          </span>
          <h3 className="fs-24 fw-bold text-dark mb-1">Interactive Course Curriculum</h3>
          <p className="text-muted fs-14 mb-0">
            {syllabus.length} Comprehensive Modules • Practical Industry Projects • Real-Time Case Studies
          </p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1 fs-12"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1 fs-12"
          >
            Collapse All
          </button>
          <button
            type="button"
            onClick={onDownloadSyllabus}
            className="btn btn-danger btn-sm rounded-pill px-3 py-1 fs-12 fw-semibold d-flex align-items-center gap-1 shadow-sm"
          >
            <i className="fa-solid fa-file-pdf" /> Download PDF
          </button>
        </div>
      </div>

      {/* Accordion list */}
      <div className="d-flex flex-column gap-3">
        {syllabus.map((item, idx) => {
          const isOpen = !!openModules[idx]
          return (
            <div
              key={idx}
              className={`rounded-3 border transition-all ${
                isOpen ? "border-danger shadow-sm bg-white" : "border-light-subtle bg-light"
              }`}
            >
              {/* Header bar */}
              <button
                type="button"
                onClick={() => toggleModule(idx)}
                className="w-100 p-3 p-md-4 text-start bg-transparent border-0 d-flex align-items-center justify-content-between gap-3 cursor-pointer"
              >
                <div className="d-flex align-items-center gap-3">
                  <span
                    className={`rounded-circle d-flex align-items-center justify-content-center fw-bold fs-14 ${
                      isOpen ? "bg-danger text-white" : "bg-white text-dark border"
                    }`}
                    style={{ width: "36px", height: "36px", minWidth: "36px" }}
                  >
                    {item.moduleNumber || idx + 1}
                  </span>
                  <div>
                    <h5 className="fs-16 fw-bold text-dark mb-0">{item.title}</h5>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  {item.hours && (
                    <span className="badge bg-light text-muted border rounded-pill px-2 py-1 fs-12 d-none d-sm-inline-block">
                      <i className="fa-regular fa-clock me-1 text-danger" /> {item.hours}
                    </span>
                  )}
                  <span
                    className={`fs-14 text-muted transition-transform ${
                      isOpen ? "rotate-180 text-danger" : ""
                    }`}
                    style={{
                      display: "inline-block",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease"
                    }}
                  >
                    ▼
                  </span>
                </div>
              </button>

              {/* Collapsible content */}
              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-top border-light">
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2 mt-2">
                    {item.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="d-flex align-items-start gap-2 fs-14 text-secondary">
                        <span className="text-danger mt-1">✓</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="mt-4 pt-4 border-top text-center bg-light-subtle rounded-3 p-4">
        <h5 className="fs-16 fw-bold text-dark mb-1">Want to review the detailed day-by-day lesson plan?</h5>
        <p className="text-muted fs-13 mb-3">
          Download our comprehensive syllabus PDF including lab setup guides and interview questions.
        </p>
        <button
          type="button"
          onClick={onDownloadSyllabus}
          className="btn btn-danger rounded-pill px-4 py-2 fw-semibold shadow-sm fs-14"
        >
          <i className="fa-solid fa-file-pdf me-2" /> Download Detailed Syllabus (PDF)
        </button>
      </div>
    </div>
  )
}

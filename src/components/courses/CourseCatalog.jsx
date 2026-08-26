import React, { useState, useMemo } from "react"
import { COURSES, CATEGORIES } from "../../data/coursesData"
import CourseCard from "./CourseCard"

export default function CourseCatalog({ onEnquire, initialCategory = "all" }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedLevel, setSelectedLevel] = useState("all")

  // Filter courses based on search term, category, and level
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" ||
        course.categorySlug.toLowerCase() === selectedCategory.toLowerCase()

      // Level filter
      const matchesLevel =
        selectedLevel === "all" ||
        course.level.toLowerCase().includes(selectedLevel.toLowerCase())

      // Search term filter
      const term = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.shortDesc.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term) ||
        course.targetRoles.some((r) => r.toLowerCase().includes(term))

      return matchesCategory && matchesLevel && matchesSearch
    })
  }, [searchTerm, selectedCategory, selectedLevel])

  return (
    <div className="container py-4">
      {/* Search & Filter Bar */}
      <div className="bg-white rounded-4 border p-4 shadow-sm mb-5">
        <div className="row g-3 align-items-center">
          {/* Search Input */}
          <div className="col-lg-6">
            <div className="position-relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses (e.g., SAP FICO, ABAP, Power BI, Python, MERN)..."
                className="form-control rounded-pill ps-4 pe-5 py-2 fs-14 border-light-subtle shadow-xs"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="position-absolute end-0 top-50 translate-middle-y me-3 btn btn-sm btn-link text-muted p-0 text-decoration-none"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Level Selector */}
          <div className="col-lg-3 col-sm-6">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="form-select rounded-pill py-2 fs-14 border-light-subtle shadow-xs"
            >
              <option value="all">All Difficulty Levels</option>
              <option value="beginner">Beginner Friendly</option>
              <option value="advanced">Advanced / Professional</option>
            </select>
          </div>

          {/* Results Count Badge */}
          <div className="col-lg-3 col-sm-6 text-sm-end">
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill fs-13 fw-semibold">
              Showing <strong>{filteredCourses.length}</strong> of {COURSES.length} Courses
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="d-flex flex-wrap gap-2 mt-4 pt-3 border-top">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`btn btn-sm rounded-pill px-3 py-2 fs-13 fw-semibold transition-all ${
                selectedCategory === cat.slug
                  ? "btn-danger shadow-sm text-white"
                  : "btn-outline-secondary bg-white text-dark"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="row g-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="col-xl-4 col-md-6">
              <CourseCard course={course} onEnquire={onEnquire} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5 bg-white rounded-4 border p-5">
          <div className="fs-48 text-muted mb-3">🔍</div>
          <h4 className="fs-20 fw-bold text-dark mb-2">No matching courses found</h4>
          <p className="text-muted fs-14 mb-4">
            Try adjusting your search keywords or clearing filters to see all available programs.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("all")
              setSelectedLevel("all")
            }}
            className="btn btn-danger rounded-pill px-4 py-2 fw-semibold shadow-sm fs-14"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  )
}

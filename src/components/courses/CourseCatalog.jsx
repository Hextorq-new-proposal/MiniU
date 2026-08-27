import React, { useState, useMemo } from "react"
import { COURSES, CATEGORIES } from "../../data/coursesData"
import CourseCard from "./CourseCard"

export default function CourseCatalog({ onEnquire, initialCategory = "all" }) {
  const [searchTerm, setSearchTerm]             = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedLevel, setSelectedLevel]       = useState("all")

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" ||
        course.categorySlug.toLowerCase() === selectedCategory.toLowerCase()
      const matchesLevel =
        selectedLevel === "all" ||
        course.level.toLowerCase().includes(selectedLevel.toLowerCase())
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

  const hasFilters = selectedCategory !== "all" || selectedLevel !== "all" || searchTerm

  return (
    <div className="container">

      {/* ─── Filter bar ──────────────────────────────────────────── */}
      <div style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "14px 18px",
        marginBottom: "24px",
        boxShadow: "0 2px 12px rgba(15,23,42,0.05)"
      }}>

        {/* Row 1: Search · Level · Count — always inline */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>

          {/* Search */}
          <div style={{ position: "relative", flex: 1 }}>
            <i className="fa-regular fa-magnifying-glass" style={{
              position: "absolute", left: "13px", top: "50%",
              transform: "translateY(-50%)", color: "#94a3b8", fontSize: "13px",
              pointerEvents: "none"
            }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search — SAP FICO, Power BI, Full Stack, MERN…"
              style={{
                width: "100%", padding: "10px 36px 10px 36px",
                fontSize: "13.5px", color: "#0f172a",
                border: "1.5px solid #e2e8f0", borderRadius: "10px",
                outline: "none", transition: "border-color 0.2s",
                background: "#fafafa"
              }}
              onFocus={e  => { e.target.style.borderColor = "#ff0135"; e.target.style.background = "#fff" }}
              onBlur={e   => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#fafafa" }}
            />
            {searchTerm && (
              <button type="button" onClick={() => setSearchTerm("")} style={{
                position: "absolute", right: "12px", top: "50%",
                transform: "translateY(-50%)", background: "none",
                border: "none", cursor: "pointer", color: "#94a3b8",
                fontSize: "13px", lineHeight: 1, padding: "2px"
              }}>✕</button>
            )}
          </div>

          {/* Level dropdown */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              style={{
                padding: "10px 36px 10px 14px", fontSize: "13px", fontWeight: 500,
                border: "1.5px solid #e2e8f0", borderRadius: "10px",
                color: "#334155", background: "#fafafa", cursor: "pointer",
                outline: "none", appearance: "none", WebkitAppearance: "none",
                minWidth: "140px"
              }}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="advanced">Advanced</option>
            </select>
            <i className="fa-solid fa-chevron-down" style={{
              position: "absolute", right: "12px", top: "50%",
              transform: "translateY(-50%)", fontSize: "10px", color: "#94a3b8",
              pointerEvents: "none"
            }} />
          </div>

          {/* Course count */}
          <div style={{
            flexShrink: 0, padding: "8px 14px",
            background: "#f1f5f9", border: "1px solid #e2e8f0",
            borderRadius: "10px", textAlign: "center", whiteSpace: "nowrap"
          }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{filteredCourses.length}</span>
            <span style={{ fontSize: "12px", color: "#64748b" }}> / {COURSES.length} courses</span>
          </div>
        </div>

        {/* Row 2: Category pills + clear */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center" }}>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.slug
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                style={{
                  padding: "6px 15px", fontSize: "12.5px", fontWeight: 600,
                  borderRadius: "8px", cursor: "pointer",
                  border: active ? "1.5px solid #ff0135" : "1.5px solid #e2e8f0",
                  background: active ? "#ff0135" : "#f8fafc",
                  color: active ? "#fff" : "#475569",
                  transition: "all 0.16s ease"
                }}
              >
                {cat.name}
              </button>
            )
          })}

          {hasFilters && (
            <button
              type="button"
              onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setSelectedLevel("all") }}
              style={{
                padding: "6px 13px", fontSize: "12px", fontWeight: 600,
                borderRadius: "8px", cursor: "pointer",
                border: "1.5px dashed #fca5a5",
                background: "#fff1f3", color: "#ff0135",
                marginLeft: "4px"
              }}
            >
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      {/* ─── Course Grid — 3 cols desktop ────────────────────────── */}
      {filteredCourses.length > 0 ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}
          className="course-grid-responsive"
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onEnquire={onEnquire} />
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: "center", padding: "64px 24px",
          background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0"
        }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔍</div>
          <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
            No courses found
          </h4>
          <p style={{ fontSize: "13.5px", color: "#64748b", marginBottom: "20px" }}>
            Try different keywords or clear the filters to see all programs.
          </p>
          <button
            type="button"
            onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setSelectedLevel("all") }}
            style={{
              background: "#ff0135", color: "#fff", border: "none",
              borderRadius: "8px", padding: "10px 28px",
              fontSize: "14px", fontWeight: 700, cursor: "pointer"
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  )
}

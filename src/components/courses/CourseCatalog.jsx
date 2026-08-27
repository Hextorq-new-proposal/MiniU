import React, { useState, useMemo } from "react"
import { COURSES, CATEGORIES } from "../../data/coursesData"
import CourseCard from "./CourseCard"

export default function CourseCatalog({ onEnquire, initialCategory = "all" }) {
  const [searchTerm, setSearchTerm]         = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedLevel, setSelectedLevel]   = useState("all")

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

  return (
    <div className="container py-3">

      {/* ── Filter bar ───────────────────────────────── */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "16px 20px",
          marginBottom: "28px",
          boxShadow: "0 2px 12px rgba(15,23,42,0.05)"
        }}
      >
        {/* Top row: search + level + count */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", marginBottom: "14px" }}>

          {/* Search */}
          <div style={{ position: "relative", flex: "1 1 260px", minWidth: "200px" }}>
            <i
              className="fa-regular fa-magnifying-glass"
              style={{
                position: "absolute", left: "13px", top: "50%",
                transform: "translateY(-50%)", color: "#94a3b8", fontSize: "13px"
              }}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search — SAP FICO, Power BI, MERN…"
              style={{
                width: "100%", padding: "9px 36px 9px 34px",
                fontSize: "13.5px", color: "#0f172a",
                border: "1.5px solid #e2e8f0", borderRadius: "999px",
                outline: "none", transition: "border-color 0.2s"
              }}
              onFocus={e => e.target.style.borderColor = "#ff0135"}
              onBlur={e => e.target.style.borderColor = "#e2e8f0"}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                style={{
                  position: "absolute", right: "12px", top: "50%",
                  transform: "translateY(-50%)", background: "none",
                  border: "none", cursor: "pointer", color: "#94a3b8",
                  fontSize: "13px", lineHeight: 1, padding: "2px"
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Level select */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            style={{
              padding: "9px 14px", fontSize: "13px", fontWeight: 500,
              border: "1.5px solid #e2e8f0", borderRadius: "999px",
              color: "#334155", background: "#fff", cursor: "pointer",
              outline: "none", flex: "0 0 auto"
            }}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
          </select>

          {/* Count */}
          <span style={{
            fontSize: "12.5px", fontWeight: 600, color: "#64748b",
            background: "#f8fafc", border: "1px solid #e2e8f0",
            borderRadius: "999px", padding: "6px 14px",
            whiteSpace: "nowrap", flex: "0 0 auto"
          }}>
            <strong style={{ color: "#0f172a" }}>{filteredCourses.length}</strong> of {COURSES.length} courses
          </span>
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.slug
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                style={{
                  padding: "6px 16px", fontSize: "12.5px", fontWeight: 600,
                  borderRadius: "999px", cursor: "pointer",
                  border: active ? "1.5px solid #ff0135" : "1.5px solid #e2e8f0",
                  background: active ? "#ff0135" : "#f8fafc",
                  color: active ? "#fff" : "#475569",
                  transition: "all 0.18s ease"
                }}
              >
                {cat.name}
              </button>
            )
          })}

          {/* Reset */}
          {(selectedCategory !== "all" || selectedLevel !== "all" || searchTerm) && (
            <button
              type="button"
              onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setSelectedLevel("all") }}
              style={{
                padding: "6px 14px", fontSize: "12px", fontWeight: 600,
                borderRadius: "999px", cursor: "pointer",
                border: "1.5px dashed #fca5a5",
                background: "#fff1f3", color: "#ff0135",
                transition: "all 0.18s ease"
              }}
            >
              ✕ Clear filters
            </button>
          )}
        </div>
      </div>

      {/* ── Courses Grid ─────────────────────────────── */}
      {filteredCourses.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "20px"
          }}
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onEnquire={onEnquire} />
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: "center", padding: "60px 24px",
          background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0"
        }}>
          <div style={{ fontSize: "42px", marginBottom: "14px" }}>🔍</div>
          <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
            No courses match your search
          </h4>
          <p style={{ fontSize: "13.5px", color: "#64748b", marginBottom: "20px" }}>
            Try different keywords or clear the filters to see all programs.
          </p>
          <button
            type="button"
            onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setSelectedLevel("all") }}
            style={{
              background: "#ff0135", color: "#fff", border: "none",
              borderRadius: "999px", padding: "10px 28px",
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

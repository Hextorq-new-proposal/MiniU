import React, { useState } from "react"
import { Link } from "react-router-dom"

const CAT_COLORS = {
  SAP:        { bg: "#eff6ff", text: "#1d4ed8", dot: "#3b82f6" },
  Business:   { bg: "#f0fdf4", text: "#166534", dot: "#22c55e" },
  Technology: { bg: "#fdf4ff", text: "#7e22ce", dot: "#a855f7" },
  Design:     { bg: "#fff7ed", text: "#c2410c", dot: "#f97316" },
  Finance:    { bg: "#fefce8", text: "#854d0e", dot: "#eab308" },
  default:    { bg: "#f1f5f9", text: "#334155", dot: "#64748b" },
}

function getCatColor(category = "") {
  const k = Object.keys(CAT_COLORS).find(k => category.toLowerCase().includes(k.toLowerCase()))
  return CAT_COLORS[k] || CAT_COLORS.default
}

export default function CourseCard({ course, onEnquire }) {
  const [hovered, setHovered] = useState(false)
  const targetUrl = `/courses/${course.slug}`
  const imgSrc = course.imageSmall?.startsWith("/")
    ? course.imageSmall
    : `/${course.imageSmall || "assets/logo/miniu-logo.svg"}`
  const col = getCatColor(course.category)

  return (
    <div
      className="d-flex flex-column h-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "14px",
        border: "1px solid #e2e8f0",
        overflow: "hidden",
        boxShadow: hovered ? "0 20px 48px rgba(15,23,42,0.14)" : "0 1px 6px rgba(15,23,42,0.06)",
        transform: hovered ? "translateY(-5px)" : "none",
        transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease"
      }}
    >
      {/* ── Image — clean, no overlay badges ─────────────────── */}
      <Link to={targetUrl} style={{ display: "block", position: "relative", height: "200px", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={imgSrc}
          alt={course.shortTitle || course.title}
          onError={(e) => { e.target.src = "/assets/logo/miniu-logo.svg" }}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)"
          }}
        />
        {/* Subtle bottom gradient for depth only */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(15,23,42,0.28) 0%, transparent 50%)"
        }} />

        {/* Rating — bottom right only, small + frosted */}
        <span style={{
          position: "absolute", bottom: "10px", right: "10px",
          fontSize: "11px", fontWeight: 700, color: "#1e293b",
          background: "rgba(255,255,255,0.92)", padding: "3px 9px",
          borderRadius: "999px", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", gap: "3px"
        }}>
          <span style={{ color: "#f59e0b" }}>★</span>
          {course.rating}
          <span style={{ color: "#94a3b8", fontWeight: 400 }}>({course.reviewCount})</span>
        </span>
      </Link>

      {/* ── Card body ─────────────────────────────────────────── */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flexGrow: 1 }}>

        {/* Category + enrolled */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{
            fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.06em", color: col.text,
            display: "inline-flex", alignItems: "center", gap: "6px"
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: col.dot }} />
            {course.category}
          </span>
          <span style={{ fontSize: "11px", color: "#94a3b8" }}>
            {course.studentsEnrolled}+
          </span>
        </div>

        {/* Course highlight */}
        {course.badge && (
          <span style={{
            display: "inline-block", alignSelf: "flex-start",
            fontSize: "10px", fontWeight: 700, color: "#ff0135",
            borderLeft: "2px solid #ff0135", paddingLeft: "8px",
            marginBottom: "6px"
          }}>
            {course.badge}
          </span>
        )}

        {/* Title */}
        <Link to={targetUrl} style={{ textDecoration: "none" }}>
          <h4 style={{
            fontSize: "15px", fontWeight: 700, color: "#0f172a",
            margin: "0 0 6px", lineHeight: 1.35,
            display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden"
          }}>
            {course.shortTitle || course.title}
          </h4>
        </Link>

        {/* Short description — 2 lines */}
        <p style={{
          fontSize: "12px", color: "#64748b", margin: "0 0 10px", lineHeight: 1.55,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
          flexGrow: 1
        }}>
          {course.shortDesc}
        </p>

        {/* Salary */}
        {course.salaryRange && (
          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#16a34a" }}>
              {course.salaryRange}
            </span>
          </div>
        )}

        {/* Meta row */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          fontSize: "11.5px", fontWeight: 600, color: "#475569",
          paddingTop: "10px", borderTop: "1px solid #f1f5f9",
          marginBottom: "12px"
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <i className="fa-regular fa-clock" style={{ color: "#ff0135", fontSize: "11px" }} />
            {course.duration.split(" ").slice(0, 2).join(" ")}
          </span>
          <span style={{ color: "#e2e8f0" }}>·</span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <i className="fa-regular fa-graduation-cap" style={{ color: "#ff0135", fontSize: "11px" }} />
            {course.level.split(" ")[0]}
          </span>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
          <Link
            to={targetUrl}
            style={{
              flex: 1, textAlign: "center", textDecoration: "none",
              background: "#ff0135", color: "#fff",
              borderRadius: "8px", padding: "9px 12px",
              fontSize: "13px", fontWeight: 700,
              transition: "background 0.2s",
              display: "block"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#e0002e"}
            onMouseLeave={e => e.currentTarget.style.background = "#ff0135"}
          >
            Explore →
          </Link>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onEnquire && onEnquire(course) }}
            style={{
              padding: "9px 14px", fontSize: "12.5px", fontWeight: 600,
              border: "1.5px solid #e2e8f0", borderRadius: "8px",
              background: "#f8fafc", color: "#334155",
              cursor: "pointer", whiteSpace: "nowrap",
              transition: "all 0.15s"
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff0135"; e.currentTarget.style.color = "#ff0135" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#334155" }}
          >
            Book Demo
          </button>
        </div>
      </div>
    </div>
  )
}

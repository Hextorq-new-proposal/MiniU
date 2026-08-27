import React, { useState } from "react"
import { Link } from "react-router-dom"

// Category color map
const CAT_COLORS = {
  SAP:        { bg: "#eff6ff", text: "#1d4ed8", dot: "#3b82f6" },
  Business:   { bg: "#f0fdf4", text: "#166534", dot: "#22c55e" },
  Technology: { bg: "#fdf4ff", text: "#7e22ce", dot: "#a855f7" },
  Design:     { bg: "#fff7ed", text: "#c2410c", dot: "#f97316" },
  Finance:    { bg: "#fefce8", text: "#854d0e", dot: "#eab308" },
  default:    { bg: "#f8fafc", text: "#334155", dot: "#64748b" },
}

function getCatColor(category = "") {
  const k = Object.keys(CAT_COLORS).find(k => category.toLowerCase().includes(k.toLowerCase()))
  return CAT_COLORS[k] || CAT_COLORS.default
}

export default function CourseCard({ course, onEnquire }) {
  const [hovered, setHovered] = useState(false)
  const targetUrl = `/courses/${course.slug}`
  const imgSrc = course.imageSmall?.startsWith("/") ? course.imageSmall : `/${course.imageSmall || "assets/logo/miniu-logo.svg"}`
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
        boxShadow: hovered
          ? "0 16px 40px rgba(15,23,42,0.13)"
          : "0 1px 6px rgba(15,23,42,0.06)",
        transform: hovered ? "translateY(-5px)" : "none",
        transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
        cursor: "pointer"
      }}
    >
      {/* ── Image zone ─────────────────────────────────── */}
      <div style={{ position: "relative", height: "150px", overflow: "hidden", flexShrink: 0 }}>
        <Link to={targetUrl} style={{ display: "block", width: "100%", height: "100%" }}>
          <img
            src={imgSrc}
            alt={course.shortTitle || course.title}
            onError={(e) => { e.target.src = "/assets/logo/miniu-logo.svg" }}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transition: "transform 0.4s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)"
            }}
          />
          {/* Dark gradient overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 55%)"
          }} />
        </Link>

        {/* Badge top-left */}
        {course.badge && (
          <span style={{
            position: "absolute", top: "10px", left: "10px",
            fontSize: "10px", fontWeight: 700, color: "#fff",
            background: "#ff0135", padding: "3px 9px",
            borderRadius: "999px", letterSpacing: "0.02em",
            boxShadow: "0 2px 8px rgba(255,1,53,0.4)"
          }}>
            {course.badge}
          </span>
        )}

        {/* Rating bottom-right */}
        <span style={{
          position: "absolute", bottom: "10px", right: "10px",
          fontSize: "11px", fontWeight: 700, color: "#1e293b",
          background: "rgba(255,255,255,0.94)", padding: "3px 8px",
          borderRadius: "999px", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", gap: "4px"
        }}>
          <span style={{ color: "#f59e0b" }}>★</span>
          {course.rating} <span style={{ color: "#94a3b8", fontWeight: 400 }}>({course.reviewCount})</span>
        </span>
      </div>

      {/* ── Card body ──────────────────────────────────── */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flexGrow: 1 }}>

        {/* Category + enrolled */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{
            fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.06em", color: col.text,
            background: col.bg, padding: "2px 8px", borderRadius: "999px",
            display: "inline-flex", alignItems: "center", gap: "4px"
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: col.dot, display: "inline-block" }} />
            {course.category}
          </span>
          <span style={{ fontSize: "11px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
            <i className="fa-solid fa-users" style={{ fontSize: "10px", color: "#94a3b8" }} />
            {course.studentsEnrolled}+ enrolled
          </span>
        </div>

        {/* Title */}
        <Link to={targetUrl} style={{ textDecoration: "none" }}>
          <h4 style={{
            fontSize: "14.5px", fontWeight: 700, color: "#0f172a",
            margin: "0 0 8px", lineHeight: 1.35,
            display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden"
          }}>
            {course.shortTitle || course.title}
          </h4>
        </Link>

        {/* Salary range — key selling point */}
        {course.salaryRange && (
          <div style={{
            display: "flex", alignItems: "center", gap: "5px",
            marginBottom: "8px"
          }}>
            <span style={{ fontSize: "11px", color: "#64748b" }}>💰</span>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#16a34a" }}>
              {course.salaryRange}
            </span>
          </div>
        )}

        {/* Meta: duration + level */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          fontSize: "11.5px", fontWeight: 600, color: "#475569",
          paddingTop: "8px", borderTop: "1px solid #f1f5f9",
          marginTop: "auto", marginBottom: "12px"
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <i className="fa-regular fa-clock" style={{ color: "#ff0135", fontSize: "11px" }} />
            {course.duration.split(" ").slice(0, 2).join(" ")}
          </span>
          <span style={{ color: "#cbd5e1" }}>·</span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <i className="fa-solid fa-signal" style={{ color: "#ff0135", fontSize: "10px" }} />
            {course.level.split(" ")[0]}
          </span>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "8px" }}>
          <Link
            to={targetUrl}
            style={{
              flex: 1, textAlign: "center", textDecoration: "none",
              background: hovered ? "#e0002e" : "#ff0135",
              color: "#fff", borderRadius: "8px",
              padding: "9px 12px", fontSize: "13px", fontWeight: 700,
              transition: "background 0.2s", display: "block"
            }}
          >
            Explore →
          </Link>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onEnquire && onEnquire(course) }}
            style={{
              padding: "9px 14px", fontSize: "12px", fontWeight: 600,
              border: "1.5px solid #e2e8f0", borderRadius: "8px",
              background: hovered ? "#f8fafc" : "#fff",
              color: "#334155", cursor: "pointer", whiteSpace: "nowrap",
              transition: "background 0.2s"
            }}
          >
            Book Demo
          </button>
        </div>

      </div>
    </div>
  )
}

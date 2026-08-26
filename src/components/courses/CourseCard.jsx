import React from "react"
import { Link } from "react-router-dom"

export default function CourseCard({ course, onEnquire }) {
  const targetUrl = `/courses/${course.slug}`
  const imgSrc = course.imageSmall?.startsWith("/") ? course.imageSmall : `/${course.imageSmall || "assets/images/miniu/logo.png"}`

  return (
    <div className="miniu-course-card bg-white rounded-4 border border-light-subtle shadow-sm overflow-hidden h-100 d-flex flex-column transition-all">
      {/* Course Image & Badge */}
      <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
        <Link to={targetUrl} className="d-block w-100 h-100">
          <img
            src={imgSrc}
            alt={course.title}
            className="w-100 h-100 object-fit-cover transition-transform"
            onError={(e) => {
              e.target.src = "/assets/logo/miniu-logo.svg"
            }}
          />
        </Link>
        {course.badge && (
          <span className="position-absolute top-0 start-0 m-3 badge bg-danger text-white px-3 py-1.5 rounded-pill fs-11 fw-semibold shadow-sm">
            {course.badge}
          </span>
        )}
        <span className="position-absolute bottom-0 end-0 m-3 badge bg-white text-dark px-2.5 py-1 rounded-pill fs-11 fw-semibold shadow-sm border">
          <i className="fa-solid fa-star text-warning me-1" /> {course.rating} ({course.reviewCount})
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        {/* Category & Meta */}
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-0.5 rounded fs-11 fw-bold text-uppercase">
            {course.category}
          </span>
          <span className="text-muted fs-12 d-flex align-items-center">
            <i className="fa-regular fa-users me-1 text-danger" /> {course.studentsEnrolled}+ Enrolled
          </span>
        </div>

        {/* Title */}
        <h4 className="fs-17 fw-bold mb-2 line-clamp-2 miniu-text-dark" style={{ minHeight: "44px" }}>
          <Link to={targetUrl} className="text-dark text-decoration-none hover-text-danger">
            {course.shortTitle || course.title}
          </Link>
        </h4>

        {/* Short Description */}
        <p className="text-muted fs-13 mb-3 line-clamp-2 flex-grow-1" style={{ minHeight: "38px" }}>
          {course.shortDesc}
        </p>

        {/* Features Meta */}
        <div className="border-top pt-2.5 mb-3 d-flex flex-wrap gap-2 text-muted fs-12">
          <span className="d-flex align-items-center fw-semibold text-dark">
            <i className="fa-regular fa-clock me-1 text-danger" /> {course.duration.split(" ")[0]} {course.duration.split(" ")[1]}
          </span>
          <span className="text-muted">•</span>
          <span className="d-flex align-items-center fw-semibold text-dark">
            <i className="fa-regular fa-graduation-cap me-1 text-danger" /> {course.level.split(" ")[0]}
          </span>
        </div>

        {/* Action Buttons: Red Solid + Crisp White Outline */}
        <div className="d-flex align-items-center gap-2 mt-auto pt-1">
          <Link
            to={targetUrl}
            className="btn btn-danger btn-sm text-white rounded-pill flex-grow-1 fw-bold py-2 shadow-xs text-decoration-none text-center fs-12"
          >
            <span className="text-white" style={{ color: "#ffffff" }}>Explore Course</span>
          </Link>
          <button
            type="button"
            onClick={() => onEnquire && onEnquire(course)}
            className="btn btn-outline-dark bg-white btn-sm rounded-pill px-3 py-2 fw-semibold fs-12"
          >
            Free Demo
          </button>
        </div>
      </div>
    </div>
  )
}

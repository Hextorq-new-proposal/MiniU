import React from "react"
import { Link } from "react-router-dom"

export default function CourseCard({ course, onEnquire }) {
  const targetUrl = `/courses/${course.slug}`

  return (
    <div className="miniu-course-card bg-white rounded-4 border border-light-subtle shadow-sm overflow-hidden h-100 d-flex flex-column transition-all">
      {/* Course Image & Badge */}
      <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
        <Link to={targetUrl} className="d-block w-100 h-100">
          <img
            src={course.imageSmall}
            alt={course.title}
            className="w-100 h-100 object-fit-cover transition-transform"
            loading="lazy"
            onError={(e) => {
              e.target.src = "assets/images/courses/courses-two-image1.png"
            }}
          />
        </Link>
        {course.badge && (
          <span className="position-absolute top-0 start-0 m-3 badge bg-danger text-white px-3 py-2 rounded-pill fs-12 fw-semibold shadow-sm">
            {course.badge}
          </span>
        )}
        <span className="position-absolute bottom-0 end-0 m-3 badge bg-white text-dark px-3 py-1 rounded-pill fs-12 fw-semibold shadow-sm border">
          <i className="fa-solid fa-star text-warning me-1" /> {course.rating} ({course.reviewCount})
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        {/* Category & Meta */}
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="badge bg-light text-primary border px-2 py-1 rounded fs-12 fw-semibold text-uppercase">
            {course.category}
          </span>
          <span className="text-muted fs-13 d-flex align-items-center">
            <i className="fa-regular fa-users me-1 text-danger" /> {course.studentsEnrolled}+ Enrolled
          </span>
        </div>

        {/* Title */}
        <h4 className="fs-18 fw-bold mb-2 line-clamp-2">
          <Link to={targetUrl} className="text-dark text-decoration-none primary-hover">
            {course.shortTitle || course.title}
          </Link>
        </h4>

        {/* Short Description */}
        <p className="text-muted fs-14 mb-3 line-clamp-2 flex-grow-1">
          {course.shortDesc}
        </p>

        {/* Features Meta */}
        <div className="border-top pt-3 mb-3 d-flex flex-wrap gap-2 text-muted fs-13">
          <span className="d-flex align-items-center">
            <i className="fa-regular fa-clock me-1 text-danger" /> {course.duration.split(" ")[0]} {course.duration.split(" ")[1]}
          </span>
          <span className="text-muted">•</span>
          <span className="d-flex align-items-center">
            <i className="fa-regular fa-graduation-cap me-1 text-danger" /> {course.level.split(" ")[0]}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="d-flex align-items-center gap-2 mt-auto">
          <Link
            to={targetUrl}
            className="btn btn-outline-danger btn-sm rounded-pill flex-grow-1 fw-semibold py-2"
          >
            Explore Course
          </Link>
          <button
            type="button"
            onClick={() => onEnquire && onEnquire(course)}
            className="btn btn-danger btn-sm rounded-pill px-3 py-2 fw-semibold shadow-sm"
          >
            Free Demo
          </button>
        </div>
      </div>
    </div>
  )
}

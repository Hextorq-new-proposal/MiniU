import React, { lazy, Suspense } from "react"

const ShaderBackground = lazy(() => import("../common/ShaderBackground"))

export default function FinalCTA({ onOpenCounselling }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello MiniU! I would like to speak with a course advisor about available job-oriented training batches."
    )
    window.open(`https://wa.me/919944055555?text=${text}`, "_blank")
  }

  return (
    <section className="py-5 py-lg-6 miniu-bg-white">
      <div className="container py-4">
        <div className="p-4 p-md-5 rounded-4 miniu-bg-slate border border-danger-subtle text-center max-w-800 mx-auto shadow-sm reveal-fade-up position-relative overflow-hidden">
          {/* Animated WebGL Shader Glow (Async Lazy Load) */}
          <Suspense fallback={null}>
            <ShaderBackground opacity={0.35} />
          </Suspense>

          <div className="position-relative" style={{ zIndex: 1 }}>
            <span className="badge bg-danger text-white rounded-pill px-3 py-1 fs-12 fw-semibold mb-3">
              Start Your Journey Today
            </span>

            <h2 className="display-6 fw-bold miniu-text-dark miniu-font-display mb-3">
              Ready to choose your next career move?
            </h2>

            <p className="fs-16 miniu-text-muted mb-4 max-w-600 mx-auto">
              Talk to a MiniU course advisor, review the detailed syllabus, and find the right path tailored for your degree and career goals.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
              {/* Short & compact primary counselling button */}
              <button
                type="button"
                onClick={onOpenCounselling}
                className="btn-miniu-primary fs-13 py-2 px-3.5 d-inline-flex align-items-center gap-2 rounded-pill shadow-xs text-white"
              >
                <span className="text-white">Book Free Counselling</span>
                <i className="fa-regular fa-arrow-right-long text-white fs-12" />
              </button>

              {/* Short & Vibrant WhatsApp Green Button */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="btn d-inline-flex align-items-center gap-2 px-3.5 py-2 rounded-pill text-white fw-bold fs-13 shadow-xs border-0 transition-all hover-translate-y"
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <i className="fa-brands fa-whatsapp fs-16 text-white" />
                <span className="text-white" style={{ color: "#ffffff" }}>Chat on WhatsApp</span>
                <i className="fa-regular fa-arrow-right-long fs-12 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

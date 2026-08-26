import { useEffect } from "react"
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Course"
import CourseDetails from "./pages/CourseDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Terms from "./pages/Terms"
import useInitScripts from "./hooks/useInitScripts"
import useSmoothScroll from "./hooks/useSmoothScroll"
import "./styles/droidLogoFont.css"

function ScrollAndTitle() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function SpaLinks() {
  const nav = useNavigate()
  useEffect(() => {
    const h = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest && e.target.closest("a")
      if (!a) return
      const href = a.getAttribute("href")
      if (!href || /^(https?:|mailto:|tel:|javascript:)/i.test(href)) return

      // Anchor hash navigation on same or root page
      if (href.startsWith("#")) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
          nav("/" + href)
        }
        return
      }

      if (href.startsWith("/#")) {
        e.preventDefault()
        nav(href)
        return
      }

      if (href.endsWith(".html") || href.startsWith("/")) {
        e.preventDefault()
        const clean = href.replace(/^\.\//, "").replace(/^\//, "")
        nav(clean === "index.html" || clean === "" ? "/" : "/" + clean)
      }
    }
    document.addEventListener("click", h)
    return () => document.removeEventListener("click", h)
  }, [nav])
  return null
}

export default function App() {
  useInitScripts()
  useSmoothScroll()

  return (
    <>
      <ScrollAndTitle />
      <SpaLinks />
      <Routes>
        {/* =========================================
            CANONICAL RESTFUL ROUTES (Single Source of Truth)
            ========================================= */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* =========================================
            LEGACY .HTML 301-STYLE REDIRECTS
            (Preserves all backlinks & old URLs cleanly)
            ========================================= */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="/course.html" element={<Navigate to="/courses" replace />} />
        <Route path="/course1.html" element={<Navigate to="/courses" replace />} />
        <Route path="/course2.html" element={<Navigate to="/courses" replace />} />
        <Route path="/blog.html" element={<Navigate to="/blog" replace />} />
        <Route path="/blog-details.html" element={<Navigate to="/blog-details" replace />} />
        <Route path="/privacy_policy.html" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/terms.html" element={<Navigate to="/terms" replace />} />

        {/* SAP Module Redirects */}
        <Route path="/sap_abap.html" element={<Navigate to="/courses/sap-abap" replace />} />
        <Route path="/sap_fico.html" element={<Navigate to="/courses/sap-fico" replace />} />
        <Route path="/sap_mm.html" element={<Navigate to="/courses/sap-mm" replace />} />
        <Route path="/sap_sd.html" element={<Navigate to="/courses/sap-sd" replace />} />
        <Route path="/sap_hana.html" element={<Navigate to="/courses/sap-s4-hana" replace />} />
        <Route path="/sap_basis.html" element={<Navigate to="/courses/sap-basis" replace />} />
        <Route path="/sap_ewm.html" element={<Navigate to="/courses/sap-ewm" replace />} />
        <Route path="/sap_hcm.html" element={<Navigate to="/courses/sap-hcm" replace />} />
        <Route path="/sap_pp.html" element={<Navigate to="/courses/sap-pp" replace />} />
        <Route path="/sap_qm.html" element={<Navigate to="/courses/sap-qm" replace />} />
        <Route path="/sap.html" element={<Navigate to="/courses" replace />} />
        <Route path="/sap1.html" element={<Navigate to="/courses" replace />} />

        {/* Business, Analytics & Data Redirects */}
        <Route path="/business_analytics.html" element={<Navigate to="/courses/business-analytics" replace />} />
        <Route path="/data_science.html" element={<Navigate to="/courses/data-science" replace />} />
        <Route path="/digital_marketing.html" element={<Navigate to="/courses/digital-marketing" replace />} />
        <Route path="/business.html" element={<Navigate to="/courses" replace />} />

        {/* Tech, Development, Cloud & QA Redirects */}
        <Route path="/full_stack.html" element={<Navigate to="/courses/full-stack-web-development" replace />} />
        <Route path="/devops.html" element={<Navigate to="/courses/devops" replace />} />
        <Route path="/web_dev.html" element={<Navigate to="/courses/full-stack-web-development" replace />} />
        <Route path="/qa_test.html" element={<Navigate to="/courses/qa-software-testing" replace />} />
        <Route path="/aws.html" element={<Navigate to="/courses/aws-cloud-practitioner" replace />} />
        <Route path="/dev.html" element={<Navigate to="/courses" replace />} />

        {/* Design Redirects */}
        <Route path="/uiux.html" element={<Navigate to="/courses/uiux-design" replace />} />
        <Route path="/graphic_design.html" element={<Navigate to="/courses/graphic-design" replace />} />
        <Route path="/designing.html" element={<Navigate to="/courses" replace />} />

        {/* Finance & Taxation Redirects */}
        <Route path="/corporate_finance.html" element={<Navigate to="/courses/corporate-finance" replace />} />
        <Route path="/tally_erp.html" element={<Navigate to="/courses/tally-prime-gst" replace />} />
        <Route path="/tax.html" element={<Navigate to="/courses/taxation-gst" replace />} />
        <Route path="/finance.html" element={<Navigate to="/courses" replace />} />
        <Route path="/finance_ar.html" element={<Navigate to="/courses" replace />} />

        {/* 404 Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

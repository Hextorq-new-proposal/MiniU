import { useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from "./pages/About"
import Aws from "./pages/Aws"
import BlogDetails from "./pages/BlogDetails"
import Blog from "./pages/Blog"
import Business from "./pages/Business"
import BusinessAnalytics from "./pages/BusinessAnalytics"
import Contact from "./pages/Contact"
import CorporateFinance from "./pages/CorporateFinance"
import Course from "./pages/Course1"
import Course1 from "./pages/Course1"
import Course2 from "./pages/Course2"
import DataScience from "./pages/DataScience"
import Designing from "./pages/Designing"
import Dev from "./pages/Dev"
import Devops from "./pages/Devops"
import DigitalMarketing from "./pages/DigitalMarketing"
import Finance from "./pages/Finance"
import FinanceAr from "./pages/FinanceAr"
import FullStack from "./pages/FullStack"
import GraphicDesign from "./pages/GraphicDesign"
import Home from "./pages/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import QaTest from "./pages/QaTest"
import Sap from "./pages/Sap"
import Sap1 from "./pages/Sap1"
import SapAbap from "./pages/SapAbap"
import SapBasis from "./pages/SapBasis"
import SapEwm from "./pages/SapEwm"
import SapFico from "./pages/SapFico"
import SapHana from "./pages/SapHana"
import SapHcm from "./pages/SapHcm"
import SapMm from "./pages/SapMm"
import SapPp from "./pages/SapPp"
import SapQm from "./pages/SapQm"
import SapSd from "./pages/SapSd"
import TallyErp from "./pages/TallyErp"
import Tax from "./pages/Tax"
import Terms from "./pages/Terms"
import Uiux from "./pages/Uiux"
import WebDev from "./pages/WebDev"
import useInitScripts from "./hooks/useInitScripts"
import { PAGES } from "./data/manifest"

function ScrollAndTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const p = PAGES[pathname]
    if (p && p.title) document.title = p.title
  }, [pathname])
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
      if (!href || /^(https?:|mailto:|tel:|javascript:|#)/i.test(href)) return
      if (href.endsWith(".html")) {
        e.preventDefault()
        const clean = href.replace(/^\.\//, "")
        nav(clean === "index.html" ? "/" : "/" + clean)
      } else if (href.startsWith("/")) {
        e.preventDefault()
        nav(href)
      }
    }
    document.addEventListener("click", h)
    return () => document.removeEventListener("click", h)
  }, [nav])
  return null
}

export default function App() {
  useInitScripts()
  return (
    <>
      <ScrollAndTitle />
      <SpaLinks />
      <Routes>
        {/* Core Home & Clean URLs */}
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/courses" element={<Course1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* All Dedicated Internal Pages (Direct 1:1 Mapping) */}
        <Route path="/about.html" element={<About />} />
        <Route path="/aws.html" element={<Aws />} />
        <Route path="/blog-details.html" element={<BlogDetails />} />
        <Route path="/blog.html" element={<Blog />} />
        <Route path="/business.html" element={<Business />} />
        <Route path="/business_analytics.html" element={<BusinessAnalytics />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/corporate_finance.html" element={<CorporateFinance />} />
        <Route path="/course.html" element={<Course1 />} />
        <Route path="/course1.html" element={<Course1 />} />
        <Route path="/course2.html" element={<Course2 />} />
        <Route path="/data_science.html" element={<DataScience />} />
        <Route path="/designing.html" element={<Designing />} />
        <Route path="/dev.html" element={<Dev />} />
        <Route path="/devops.html" element={<Devops />} />
        <Route path="/digital_marketing.html" element={<DigitalMarketing />} />
        <Route path="/finance.html" element={<Finance />} />
        <Route path="/finance_ar.html" element={<FinanceAr />} />
        <Route path="/full_stack.html" element={<FullStack />} />
        <Route path="/graphic_design.html" element={<GraphicDesign />} />
        <Route path="/privacy_policy.html" element={<PrivacyPolicy />} />
        <Route path="/qa_test.html" element={<QaTest />} />
        <Route path="/sap.html" element={<Sap />} />
        <Route path="/sap1.html" element={<Sap1 />} />
        <Route path="/sap_abap.html" element={<SapAbap />} />
        <Route path="/sap_basis.html" element={<SapBasis />} />
        <Route path="/sap_ewm.html" element={<SapEwm />} />
        <Route path="/sap_fico.html" element={<SapFico />} />
        <Route path="/sap_hana.html" element={<SapHana />} />
        <Route path="/sap_hcm.html" element={<SapHcm />} />
        <Route path="/sap_mm.html" element={<SapMm />} />
        <Route path="/sap_pp.html" element={<SapPp />} />
        <Route path="/sap_qm.html" element={<SapQm />} />
        <Route path="/sap_sd.html" element={<SapSd />} />
        <Route path="/tally_erp.html" element={<TallyErp />} />
        <Route path="/tax.html" element={<Tax />} />
        <Route path="/terms.html" element={<Terms />} />
        <Route path="/uiux.html" element={<Uiux />} />
        <Route path="/web_dev.html" element={<WebDev />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

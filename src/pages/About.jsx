import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"
import LeadModal from "../components/modals/LeadModal"
import StickyActionBar from "../components/common/StickyActionBar"
import { CompanyLogo } from "../components/common/CompanyLogos"
import SpecularButton from "../components/common/SpecularButton"

const TRUSTED_COMPANIES = [
  "TCS",
  "Infosys",
  "Bosch",
  "Wipro",
  "Cognizant",
  "Capgemini",
  "Zoho"
]

const PILLARS = [
  {
    icon: "fa-solid fa-server",
    color: "#ff0135",
    bg: "#fff1f3",
    border: "#ffd1d8",
    title: "Live Enterprise Server Labs",
    desc: "Every learner practices on live SAP S/4 HANA servers, real cloud databases, and production environments — not recorded simulations."
  },
  {
    icon: "fa-solid fa-user-tie",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
    title: "Working Corporate Mentors",
    desc: "Taught exclusively by active Senior Consultants and Architects with 8-12+ years in tier-1 MNCs who bring live project workflows into class."
  },
  {
    icon: "fa-solid fa-diagram-project",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    title: "Portfolio Capstone Projects",
    desc: "Build end-to-end GST/FICO implementations, Power BI executive dashboards, and full-stack SaaS applications to showcase in interviews."
  },
  {
    icon: "fa-solid fa-handshake-angle",
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
    title: "100% Placement Support",
    desc: "Dedicated placement cell providing 1-on-1 resume tailoring, corporate mock interviews, and guaranteed interview opportunities across 40+ partners."
  }
]

const LEADERSHIP = [
  {
    name: "Arun Prakash",
    role: "Senior SAP Lead Consultant & Program Director",
    exp: "11+ Years Industry Experience",
    avatar: "/assets/images/miniu/arun.jpg",
    initials: "AP",
    badge: "Enterprise ERP Specialist",
    bio: "Ex-consultant with extensive implementation experience across manufacturing, finance, and supply-chain domains. Dedicated to empowering next-gen SAP consultants."
  },
  {
    name: "Dr. Rajesh K.",
    role: "Lead Data Scientist & BI Mentor",
    exp: "9+ Years Industry Experience",
    avatar: null,
    initials: "RK",
    badge: "Predictive Analytics Specialist",
    bio: "Specializes in enterprise business intelligence, statistical modeling, and converting complex organizational databases into automated decision systems."
  },
  {
    name: "Suresh Babu",
    role: "Full Stack Architect & Cloud Engineer",
    exp: "8+ Years Industry Experience",
    avatar: null,
    initials: "SB",
    badge: "Cloud & Systems Specialist",
    bio: "Full-stack architect specializing in scalable distributed applications, microservices, and mentoring engineering graduates into high-growth tech careers."
  }
]

export default function About() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("demo")

  const handleOpenModal = (type = "demo") => {
    setModalType(type)
    setModalOpen(true)
  }

  return (
    <>
      <SEOHead
        title="About MiniU | Best SAP & IT Training Institute in Coimbatore"
        description="Learn more about MiniU - Coimbatore's premier destination for job-oriented training in SAP modules, Data Science, Business Analytics, and Web Development."
        keywords="about miniu coimbatore, sap training institute rs puram, it courses with placement coimbatore, best computer training center"
        canonicalUrl="https://miniu.info/about"
      />

      <Header onOpenCounselling={() => handleOpenModal("demo")} />

      <main style={{ background: "#ffffff" }}>

        {/* ── 1. Hero Section ───────────────────────────── */}
        <section style={{ background: "#ffffff", borderBottom: "1px solid #f1f5f9", padding: "56px 0 48px" }}>
          <div className="container">
            <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
              
              {/* Breadcrumb */}
              <div className="d-flex align-items-center justify-content-center gap-2 mb-3" style={{ fontSize: "13px" }}>
                <Link to="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
                <span style={{ color: "#cbd5e1" }}>/</span>
                <span style={{ color: "#ff0135", fontWeight: 700 }}>About Us</span>
              </div>

              {/* Pill badge */}
              <span style={{
                display: "inline-block", fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: "#ff0135", background: "#fff1f3",
                border: "1px solid #ffd1d8",
                padding: "4px 14px", borderRadius: "999px", marginBottom: "18px"
              }}>
                About MiniU EdTech Institute
              </span>

              <h1 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.25, margin: "0 0 16px" }}>
                Shaping Tech Careers with Practical, Enterprise-Grade Learning.
              </h1>
              <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.7, margin: "0 0 36px" }}>
                Headquartered in Coimbatore (RS Puram), MiniU delivers hands-on, job-oriented training in SAP, Business Analytics, Data Science, and Full Stack Architecture — led by active industry consultants with guaranteed placement assistance.
              </p>

              {/* Stat Highlights */}
              <div className="row g-3 justify-content-center">
                {[
                  { num: "1,200+", label: "Graduates Placed" },
                  { num: "94%",    label: "Placement Rate" },
                  { num: "11+ Yrs",label: "Avg Mentor Experience" },
                  { num: "40+",    label: "Hiring Partners" }
                ].map((s, i) => (
                  <div key={i} className="col-6 col-md-3">
                    <div style={{
                      background: "#f8fafc", border: "1px solid #e2e8f0",
                      borderRadius: "14px", padding: "16px 12px", textAlign: "center"
                    }}>
                      <div style={{ fontSize: "24px", fontWeight: 800, color: "#ff0135" }}>{s.num}</div>
                      <div style={{ fontSize: "12px", color: "#475569", fontWeight: 600, marginTop: "2px" }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Trust Strip Marquee ───────────────────────────── */}
        <section className="py-4 border-bottom" style={{ background: "#f8fafc" }}>
          <div className="container">
            <p className="text-center fs-12 fw-bold text-muted text-uppercase letter-spacing-1 mb-3">
              Our Learners Work At Top Global Enterprises
            </p>
            <div className="d-flex align-items-center justify-content-center gap-4 gap-md-5 flex-wrap">
              {TRUSTED_COMPANIES.map((company, index) => (
                <div key={index} className="d-flex align-items-center justify-content-center grayscale-hover transition-all" style={{ opacity: 0.85 }}>
                  <CompanyLogo name={company} height={24} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Mission & Vision ───────────────────────────── */}
        <section style={{ padding: "64px 0" }}>
          <div className="container">
            <div className="row g-4 align-items-stretch">
              
              {/* Mission Card */}
              <div className="col-lg-6 d-flex">
                <div style={{
                  background: "#ffffff", border: "1px solid #e2e8f0",
                  borderRadius: "20px", padding: "36px 32px", width: "100%",
                  boxShadow: "0 2px 14px rgba(15,23,42,0.04)"
                }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: "#fff1f3", border: "1px solid #ffd1d8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#ff0135", fontSize: "20px", marginBottom: "20px"
                  }}>
                    <i className="fa-solid fa-bullseye" />
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>
                    Our Mission
                  </h3>
                  <p style={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                    To democratize access to elite enterprise IT skills by replacing passive lectures with live server configuration, real manufacturing scenarios, and direct mentorship from working corporate professionals.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="col-lg-6 d-flex">
                <div style={{
                  background: "#ffffff", border: "1px solid #e2e8f0",
                  borderRadius: "20px", padding: "36px 32px", width: "100%",
                  boxShadow: "0 2px 14px rgba(15,23,42,0.04)"
                }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: "#f0fdf4", border: "1px solid #bbf7d0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#16a34a", fontSize: "20px", marginBottom: "20px"
                  }}>
                    <i className="fa-solid fa-eye" />
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>
                    Our Vision
                  </h3>
                  <p style={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                    To become South India’s most trusted technical finishing school, recognized by leading multinationals for producing job-ready graduates who contribute from Day 1 without requiring months of retraining.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. The 4 Pillars of MiniU Edge ───────────────────────────── */}
        <section style={{ background: "#f8fafc", padding: "64px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
          <div className="container">
            
            <div style={{ maxWidth: "640px", margin: "0 auto 48px", textAlign: "center" }}>
              <span style={{
                fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.08em", color: "#ff0135",
                background: "#fff1f3", border: "1px solid #ffd1d8",
                padding: "3px 12px", borderRadius: "999px", display: "inline-block", marginBottom: "12px"
              }}>
                Why Choose MiniU
              </span>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
                The MiniU Training Standard
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", margin: 0 }}>
                Every program is carefully structured around the four cornerstones essential for breaking into high-growth enterprise domains.
              </p>
            </div>

            <div className="row g-4">
              {PILLARS.map((p, i) => (
                <div key={i} className="col-md-6 col-lg-3 d-flex">
                  <div style={{
                    background: "#ffffff", border: "1px solid #e2e8f0",
                    borderRadius: "18px", padding: "28px 24px", width: "100%",
                    display: "flex", flexDirection: "column",
                    boxShadow: "0 2px 10px rgba(15,23,42,0.03)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)" }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,23,42,0.03)" }}
                  >
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "10px",
                      background: p.bg, border: `1px solid ${p.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: p.color, fontSize: "18px", marginBottom: "18px"
                    }}>
                      <i className={p.icon} />
                    </div>
                    <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 5. Corporate Faculty & Leadership ───────────────────────────── */}
        <section style={{ padding: "64px 0" }}>
          <div className="container">
            
            <div style={{ maxWidth: "640px", margin: "0 auto 48px", textAlign: "center" }}>
              <span style={{
                fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.08em", color: "#ff0135",
                background: "#fff1f3", border: "1px solid #ffd1d8",
                padding: "3px 12px", borderRadius: "999px", display: "inline-block", marginBottom: "12px"
              }}>
                Industry Faculty
              </span>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
                Learn from Active Corporate Mentors
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", margin: 0 }}>
                Our mentors are working architects and consultants who bring current real-time enterprise challenges into your daily labs.
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              {LEADERSHIP.map((m, i) => (
                <div key={i} className="col-md-6 col-lg-4 d-flex">
                  <div style={{
                    background: "#ffffff", border: "1px solid #e2e8f0",
                    borderRadius: "18px", padding: "28px 24px", width: "100%",
                    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                    boxShadow: "0 2px 10px rgba(15,23,42,0.03)"
                  }}>
                    {/* Avatar */}
                    <div style={{ position: "relative", marginBottom: "16px" }}>
                      {m.avatar ? (
                        <img
                          src={m.avatar} alt={m.name}
                          style={{
                            width: "80px", height: "80px", borderRadius: "50%",
                            objectFit: "cover", border: "3px solid #f1f5f9"
                          }}
                        />
                      ) : (
                        <div style={{
                          width: "80px", height: "80px", borderRadius: "50%",
                          background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
                          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "20px", fontWeight: 700, border: "3px solid #f1f5f9"
                        }}>
                          {m.initials}
                        </div>
                      )}
                      <span style={{
                        position: "absolute", bottom: "2px", right: "2px",
                        width: "14px", height: "14px", borderRadius: "50%",
                        background: "#16a34a", border: "2px solid #fff"
                      }} />
                    </div>

                    <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>
                      {m.name}
                    </h4>
                    <span style={{ fontSize: "12px", color: "#ff0135", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                      {m.role}
                    </span>
                    <span style={{
                      fontSize: "11px", color: "#64748b", background: "#f8fafc",
                      border: "1px solid #e2e8f0", padding: "2px 10px", borderRadius: "999px",
                      marginBottom: "14px", display: "inline-block"
                    }}>
                      {m.exp}
                    </span>

                    <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6, margin: "0 0 16px", textAlign: "center" }}>
                      {m.bio}
                    </p>

                    <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid #f1f5f9", width: "100%" }}>
                      <span style={{
                        fontSize: "11px", fontWeight: 600, color: "#334155",
                        background: "#f1f5f9", padding: "4px 12px", borderRadius: "6px",
                        display: "inline-block"
                      }}>
                        {m.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 6. Campus & Facilities ───────────────────────────── */}
        <section style={{ background: "#f8fafc", padding: "64px 0", borderTop: "1px solid #f1f5f9" }}>
          <div className="container">
            <div className="row g-4 align-items-center">
              
              <div className="col-lg-6">
                <span style={{
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.08em", color: "#ff0135",
                  background: "#fff1f3", border: "1px solid #ffd1d8",
                  padding: "3px 12px", borderRadius: "999px", display: "inline-block", marginBottom: "14px"
                }}>
                  Coimbatore Center
                </span>
                <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.3, marginBottom: "16px" }}>
                  Modern Campus in RS Puram, Coimbatore
                </h2>
                <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>
                  Our facility is equipped with dedicated high-speed server lab terminals, presentation arenas, and 1-on-1 counseling rooms designed for focused, immersive learning.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                  {[
                    "Classroom Batches at RS Puram with dedicated lab workstations",
                    "Live Interactive Online Batches for working professionals",
                    "Weekend & Fast-Track Accelerated tracks available",
                    "Continuous SAP server lab access during & post training"
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{
                        width: "20px", height: "20px", borderRadius: "50%",
                        background: "#fff1f3", border: "1px solid #ffd1d8",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#ff0135", fontSize: "10px", fontWeight: 800, flexShrink: 0
                      }}>✓</span>
                      <span style={{ fontSize: "13.5px", color: "#334155", fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <button
                    type="button"
                    className="miniu-about-primary"
                    onClick={() => handleOpenModal("demo")}
                    style={{
                      background: "#ff0135", color: "#ffffff",
                      border: "none", borderRadius: "10px",
                      padding: "12px 24px", fontSize: "14px", fontWeight: 700,
                      cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px"
                    }}
                  >
                    <span>Book Campus Visit</span>
                    <i className="fa-regular fa-arrow-right-long" />
                  </button>
                  <Link
                    to="/contact"
                    style={{
                      background: "#ffffff", color: "#0f172a",
                      border: "1.5px solid #e2e8f0", borderRadius: "10px",
                      padding: "12px 24px", fontSize: "14px", fontWeight: 700,
                      textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px"
                    }}
                  >
                    <span>Contact Details</span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{
                  background: "#ffffff", border: "1px solid #e2e8f0",
                  borderRadius: "20px", padding: "24px",
                  boxShadow: "0 4px 20px rgba(15,23,42,0.06)"
                }}>
                  <div style={{
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    borderRadius: "14px", padding: "32px 28px", color: "#fff", textAlign: "center"
                  }}>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "50%",
                      background: "rgba(255,1,53,0.2)", border: "1px solid rgba(255,1,53,0.4)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      color: "#ff0135", fontSize: "24px", marginBottom: "16px"
                    }}>
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                      MiniU EdTech Institute
                    </h3>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 0 16px" }}>
                      RS Puram, Coimbatore, Tamil Nadu — 641002
                    </p>
                    <div style={{ display: "inline-block", background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 16px", fontSize: "13px" }}>
                      📞 +91 99440 55555 &nbsp;•&nbsp; ✉️ contact@miniu.info
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 7. Bottom CTA Banner ───────────────────────────── */}
        <section style={{ padding: "64px 0" }}>
          <div className="container">
            <div style={{
              background: "#ffffff", border: "1.5px solid #ffd1d8",
              borderRadius: "24px", padding: "44px 32px", textAlign: "center",
              boxShadow: "0 8px 32px rgba(255,1,53,0.06)", maxWidth: "880px", margin: "0 auto"
            }}>
              <span style={{
                fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.08em", color: "#ff0135",
                background: "#fff1f3", border: "1px solid #ffd1d8",
                padding: "3px 12px", borderRadius: "999px", display: "inline-block", marginBottom: "14px"
              }}>
                Take The Next Step
              </span>
              <h2 style={{ fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
                Ready to Accelerate Your Career with MiniU?
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "600px", margin: "0 auto 28px", lineHeight: 1.6 }}>
                Book a free 1-on-1 career counselling session with our academic advisors to find the exact track suited for your background.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button
                  type="button"
                  className="miniu-about-primary"
                  onClick={() => handleOpenModal("demo")}
                  style={{
                    background: "#ff0135", color: "#ffffff",
                    border: "none", borderRadius: "10px",
                    padding: "12px 28px", fontSize: "14px", fontWeight: 700,
                    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px"
                  }}
                >
                  <span>Book Free Counselling</span>
                  <i className="fa-regular fa-arrow-right-long" />
                </button>
                <Link
                  to="/courses"
                  style={{
                    background: "#ffffff", color: "#0f172a",
                    border: "1.5px solid #e2e8f0", borderRadius: "10px",
                    padding: "12px 28px", fontSize: "14px", fontWeight: 700,
                    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px"
                  }}
                >
                  <span>Browse All Courses</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Sticky Mobile Action Bar */}
      <StickyActionBar
        courseTitle="MiniU Programs"
        onOpenDemoModal={() => handleOpenModal("demo")}
      />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </>
  )
}

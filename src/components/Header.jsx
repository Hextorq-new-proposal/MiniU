import { cssObj } from "../lib/cssObj"

export default function Header() {
  return (
    <>
    <div className="header-top-area d-none d-lg-block">
      <div className="header__container">
        <div className="header-top__wrp">
          <ul className="info">
            <li>
              <a href="#0">
                MiniU, RS Puram, Coimbatore
              </a>
            </li>
            <li>
              <span />
            </li>
            <li>
              <a href="mailto:info@miniu.info">
                info@miniu.info
              </a>
            </li>
          </ul>
          <ul className="socila-link">
            <li className="text-white">
              Follow Us On :
            </li>
            <li>
              <a href="https://www.facebook.com/people/MiniU/61566454693166/">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/miniuniversity_p?igsh=MmVtdWhxN2V2aHI2">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/miniuniversity/posts/?feedView=all">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://x.com/MiniU_p">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <header className="header-area">
      <div className="header__container">
        <div className="header__main">
          <a className="logo" href="index.html">
            <img alt="MiniU logo" src="assets/images/miniu/logo.png" />
          </a>
          <div className="main-menu">
            <nav>
              <ul>
                <li>
                  <a href="index.html">
                    Home
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="course.html">
                    Courses
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="sap.html">
                        SAP
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        Business Analytics
                      </a>
                    </li>
                    <li>
                      <a href="finance.html">
                        Finance
                      </a>
                    </li>
                    <li>
                      <a href="designing.html">
                        Designing
                      </a>
                    </li>
                    <li>
                      <a href="dev.html">
                        Development
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="d-flex align-items-center gap-4 gap-xl-5">
            <div className="menu-btns d-none d-lg-flex align-items-center gap-3">
              <a className="btn btn-webinar-fast" data-bs-toggle="modal" href="#webinarModal">
                

            🚀 Join our Free SAP FI Webinar

          
              </a>
              <a className="btn btn-outline-primary px-3 py-2" data-bs-toggle="modal" href="#freeDemoModal" style={cssObj("border-radius:8px;font-weight:500;")}>
                Book a Free Demo Class
              </a>
              <a className="active" href="https://lms.miniu.info/">
                Login to our LMS
              </a>
            </div>
          </div>
          <button aria-label="Toggle navigation menu" className="menubars d-block d-lg-none" data-bs-target="#menubar" data-bs-toggle="offcanvas" type="button">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
    <div className="sidebar-area offcanvas offcanvas-end" id="menubar">
      <div className="offcanvas-header">
        <a className="logo" href="index.html">
          <img alt="MiniU logo" src="assets/images/miniu/Miniu white logo.png" />
        </a>
        <button aria-label="Close navigation menu" className="btn-close" data-bs-dismiss="offcanvas" type="button">
          <i className="fa-regular fa-xmark" />
        </button>
      </div>
      <div className="offcanvas-body sidebar__body">
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="index.html">
                Home
              </a>
            </li>
            <li className="has-dropdown">
              <a className="toggle-dropdown" href="course.html">
                Courses 
                <span className="dropdown-arrow">
                  ▼
                </span>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="sap.html">
                    SAP
                  </a>
                </li>
                <li>
                  <a href="business.html">
                    Business Analytics
                  </a>
                </li>
                <li>
                  <a href="finance.html">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="designing.html">
                    Designing
                  </a>
                </li>
                <li>
                  <a href="dev.html">
                    Development
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">
                About Us
              </a>
            </li>
            <li>
              <a href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <a href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__contact-info mt-30">
          <h5 className="text-white mb-20">
            Contact Info
          </h5>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot" />
              <a href="#0">
                Coimbatore, Tamil Nadu
              </a>
            </li>
            <li className="py-2">
              <i className="fa-solid fa-phone-volume" />
              <a href="tel:+919789678512">
                +91 9789678512
              </a>
            </li>
            <li>
              <i className="fa-solid fa-paper-plane" />
              <a href="mailto:info@miniu.info">
                info@miniu.info
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-cta">
          <a className="cta-btn primary mb-2" data-bs-toggle="modal" href="https://forms.gle/FsXcWN1N2q8syQmc9">
            

        Join our Free SAP FICO Webinar

      
          </a>
          <a className="cta-btn primary mb-2" data-bs-toggle="modal" href="#freeDemoModal">
            

        Book a Free Demo Class

      
          </a>
          <a className="cta-btn outline" href="https://lms.miniu.info/">
            

        Login to our LMS

      
          </a>
        </div>
        <div className="sidebar__socials mt-3">
          <ul>
            <li>
              <a href="https://www.facebook.com/people/MiniU/61566454693166/">
                <i className="fa-brands text-white fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/miniuniversity_p?igsh=MmVtdWhxN2V2aHI2">
                <i className="fa-brands text-white fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/miniuniversity/posts/?feedView=all">
                <i className="fa-brands text-white fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://x.com/MiniU_p">
                <i className="fa-brands text-white fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="modal fade" id="freeDemoModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content demo-modal-content p-4">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold text-primary">
              <i className="bi bi-calendar-check me-2" />
              Book a Free Demo

        
            </h5>
            <button className="btn-close" data-bs-dismiss="modal" type="button" />
          </div>
          <div className="modal-body mt-3">
            <form action="demo_mailer.php" id="demoForm" method="POST">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Full Name
                  </label>
                  <input className="form-control" name="name" placeholder="Your full name" required type="text" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Email
                  </label>
                  <input className="form-control" name="email" placeholder="example@email.com" required type="email" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Mobile Number
                  </label>
                  <input className="form-control" name="phone" placeholder="+91 98765 43210" required type="tel" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Location
                  </label>
                  <input className="form-control" name="location" placeholder="Your city or area" required type="text" />
                </div>
                <div className="col-12">
                  <label className="form-label">
                    Higher Education
                  </label>
                  <input className="form-control" name="education" placeholder="B.Sc, B.E, MBA, etc." required type="text" />
                </div>
                <div className="col-12">
                  <label className="form-label">
                    Select Your Interested Course
                  </label>
                  <select className="form-select" name="course" required>
                    <option disabled selected value="">
                      Select one
                    </option>
                    <option value="SAP">
                      SAP
                    </option>
                    <option value="Business Analytics">
                      Business Analytics
                    </option>
                    <option value="Finance">
                      Finance
                    </option>
                    <option value="Designing">
                      Designing
                    </option>
                    <option value="Development">
                      Development
                    </option>
                  </select>
                </div>
              </div>
              <div className="mt-3" id="formResponse" />
              <button className="btn btn-gradient w-100 mt-4" type="submit">
                <i className="bi bi-send-fill me-1" />
                Submit Request

          
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div aria-hidden="true" aria-labelledby="webinarModalLabel" className="modal webinar-bell-modal" id="webinarModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content webinar-modal-miniu text-center overflow-hidden position-relative">
          <div className="animated-bg" />
          <div className="modal-header border-0 pb-0 position-relative z-2">
            <div className="d-flex align-items-center justify-content-between w-100">
              <h5 className="modal-title fw-bold text-white w-100 text-center" id="webinarModalLabel">
                

            🎓 Free Webinar — 
                <strong>
                  13th June 2026
                </strong>
                <br />
                 🕖 
                <strong>
                  7:30 PM
                </strong>
              </h5>
              <button className="btn-close btn-close-white position-absolute end-0 me-3" data-bs-dismiss="modal" type="button" />
            </div>
          </div>
          <div className="modal-body position-relative z-2 text-white px-4 pb-4">
            <div className="mb-3">
              <i className="bi bi-lightning-charge-fill" style={cssObj("font-size: 2.8rem;")} />
            </div>
            <h4 className="fw-bold mb-3 text-white" style={cssObj("letter-spacing: 0.3px;")}>
              

          Start your SAP FI Career

        
            </h4>
            <p className="text-white-75 mb-4" style={cssObj("line-height: 1.6;")}>
              

         Move from Accounting into SAP FI consulting with expert guidance,

         
              <strong>
                discover career opportunities and learn how 
                <strong>
                  SAP FI
                </strong>
                 can transform your future in 2026.

        
              </strong>
            </p>
            <div className="d-flex flex-column gap-2">
              <a className="btn btn-light w-100 py-2 fw-semibold shadow-sm" href="https://forms.gle/71sDaGVrrPT5Qz2c9" target="_blank">
                <i className="bi bi-calendar-check me-1" />
                 Register Now — It’s Free

          
              </a>
              <button className="btn btn-outline-light w-100 py-2 fw-semibold" data-bs-dismiss="modal">
                

            Maybe Later

          
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

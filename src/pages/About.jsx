import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"
import { cssObj } from "../lib/cssObj"

export default function About() {
  return (
    <>
      <SEOHead
        title="About MiniU | Best SAP & IT Training Institute in Coimbatore"
        description="Learn more about MiniU - Coimbatore's premier destination for job-oriented training in SAP modules, Data Science, Business Analytics, and Web Development."
        keywords="about miniu coimbatore, sap training institute rs puram, it courses with placement coimbatore, best computer training center"
        canonicalUrl="https://miniu.info/about"
      />
      <Header />
      <main>
    <section className="banner-inner-area sub-bg bg-image" data-background="assets/images/bg/banner-inner-bg.png">
      <div className="banner-inner__shape1">
        <img alt="Course illustration image" className="animation__sunMove" src="assets/images/shape/banner-inner-shape1.png" />
      </div>
      <div className="banner-inner__shape2">
        <img alt="Course illustration image" src="assets/images/shape/banner-inner-shape2.png" />
      </div>
      <div className="banner-inner__shape3">
        <img alt="Course illustration image" className="animation__arryLeftRight" src="assets/images/shape/banner-inner-shape3.png" />
      </div>
      <div className="banner-inner__shape4">
        <img alt="Course illustration image" className="animation__arryUpDown" src="assets/images/shape/banner-inner-shape4.png" />
      </div>
      <div className="banner-inner__shape5">
        <img alt="Course illustration image" src="assets/images/shape/banner-inner-shape5.png" />
      </div>
      <div className="banner-inner__circle">
        <img alt="Course illustration image" className="slide-effect1" src="assets/images/shape/banner-inner-circle.png" />
      </div>
      <div className="banner-inner__circle2">
        <img alt="Course illustration image" className="slide-effect2" src="assets/images/shape/banner-inner-circle2.png" />
      </div>
      <div className="banner-inner__dots">
        <img alt="Course illustration image" className="pxl-image-zoom" src="assets/images/shape/banner-inner-dots.png" />
      </div>
      <div className="container">
        <div className="banner-inner__content">
          <h1>
            

                        About Us

                    
          </h1>
          <ul>
            <li>
              <a href="index.html">
                Home
              </a>
            </li>
            <li>
              <i className="fa-regular fa-angle-right" />
            </li>
            <li>
              About Us 
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="about-two-area pt-120 pb-120">
      <div className="about-two__shape-left">
        <img alt="Decorative background shape" aria-hidden="true" className="animation__sunMove" src="assets/images/shape/about-two-shape-left.png" />
      </div>
      <div className="about-two__shape-right">
        <img alt="Decorative background shape" aria-hidden="true" className="slide-up-down" src="assets/images/shape/about-two-shape-right.png" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="about-two__image">
              <img alt="Course illustration image" className="w-100" src="assets/images/about/about-two-image1.png" />
              <img alt="Decorative background shape" aria-hidden="true" className="dots" src="assets/images/shape/about-two-dots.png" />
              <img alt="Decorative background shape" aria-hidden="true" className="shape" src="assets/images/shape/about-two-shape.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-header">
              <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                ABOUT US
              </h5>
              <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                Empowering

                                
                <span>
                  Careers 
                  <img alt="Decorative background shape" aria-hidden="true" src="assets/images/shape/header-shape.png" />
                </span>
                 with

                                Job-Ready Skills!

                            
              </h2>
              <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                At MiniU, we

                                believe in shaping futures by providing both online and offline training programs

                                designed to make you industry-ready. From SAP to Digital Marketing, Finance to Full

                                Stack Development, our courses come with recognized certifications and real placement

                                support to help you succeed in your career.
              </p>
            </div>
            <div className="about-two__item mt-30 mb-40">
              <ul className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                <li className="mb-4">
                  <span>
                    <svg fill="none" height="14" viewbox="0 0 16 14" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.38446 13.1797C7.34201 13.1797 7.30003 13.171 7.26115 13.1539C7.22227 13.1369 7.18732 13.1121 7.15852 13.0809L1.06661 6.49119C1.026 6.44726 0.999078 6.39244 0.989139 6.33344C0.9792 6.27445 0.986676 6.21384 1.01065 6.15902C1.03463 6.10421 1.07406 6.05758 1.12413 6.02483C1.17419 5.99208 1.23272 5.97464 1.29255 5.97464H4.22486C4.26888 5.97464 4.3124 5.98409 4.35246 6.00234C4.39252 6.0206 4.42821 6.04723 4.4571 6.08045L6.49304 8.42273C6.71307 7.95239 7.13901 7.16925 7.88646 6.21497C8.99144 4.8042 11.0468 2.7294 14.5632 0.85642C14.6312 0.820227 14.7102 0.810833 14.7848 0.830094C14.8593 0.849355 14.924 0.895871 14.9659 0.960456C15.0078 1.02504 15.024 1.103 15.0113 1.17894C14.9985 1.25488 14.9578 1.32328 14.897 1.37064C14.8836 1.38113 13.5278 2.44882 11.9674 4.40448C10.5314 6.20417 8.62239 9.14694 7.68304 12.946C7.66654 13.0128 7.62816 13.0721 7.57402 13.1144C7.51989 13.1568 7.45312 13.1799 7.38436 13.1799L7.38446 13.1797Z" fill="#181818" />
                    </svg>
                  </span>
                  <h4 className="fs-18">
                    Flexible Learning Options
                  </h4>
                </li>
                <li>
                  <span>
                    <svg fill="none" height="14" viewbox="0 0 16 14" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.38446 13.1797C7.34201 13.1797 7.30003 13.171 7.26115 13.1539C7.22227 13.1369 7.18732 13.1121 7.15852 13.0809L1.06661 6.49119C1.026 6.44726 0.999078 6.39244 0.989139 6.33344C0.9792 6.27445 0.986676 6.21384 1.01065 6.15902C1.03463 6.10421 1.07406 6.05758 1.12413 6.02483C1.17419 5.99208 1.23272 5.97464 1.29255 5.97464H4.22486C4.26888 5.97464 4.3124 5.98409 4.35246 6.00234C4.39252 6.0206 4.42821 6.04723 4.4571 6.08045L6.49304 8.42273C6.71307 7.95239 7.13901 7.16925 7.88646 6.21497C8.99144 4.8042 11.0468 2.7294 14.5632 0.85642C14.6312 0.820227 14.7102 0.810833 14.7848 0.830094C14.8593 0.849355 14.924 0.895871 14.9659 0.960456C15.0078 1.02504 15.024 1.103 15.0113 1.17894C14.9985 1.25488 14.9578 1.32328 14.897 1.37064C14.8836 1.38113 13.5278 2.44882 11.9674 4.40448C10.5314 6.20417 8.62239 9.14694 7.68304 12.946C7.66654 13.0128 7.62816 13.0721 7.57402 13.1144C7.51989 13.1568 7.45312 13.1799 7.38436 13.1799L7.38446 13.1797Z" fill="#181818" />
                    </svg>
                  </span>
                  <h4 className="fs-18">
                    Expert mentors
                  </h4>
                </li>
              </ul>
              <ul className="wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <li className="mb-4">
                  <span>
                    <svg fill="none" height="14" viewbox="0 0 16 14" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.38446 13.1797C7.34201 13.1797 7.30003 13.171 7.26115 13.1539C7.22227 13.1369 7.18732 13.1121 7.15852 13.0809L1.06661 6.49119C1.026 6.44726 0.999078 6.39244 0.989139 6.33344C0.9792 6.27445 0.986676 6.21384 1.01065 6.15902C1.03463 6.10421 1.07406 6.05758 1.12413 6.02483C1.17419 5.99208 1.23272 5.97464 1.29255 5.97464H4.22486C4.26888 5.97464 4.3124 5.98409 4.35246 6.00234C4.39252 6.0206 4.42821 6.04723 4.4571 6.08045L6.49304 8.42273C6.71307 7.95239 7.13901 7.16925 7.88646 6.21497C8.99144 4.8042 11.0468 2.7294 14.5632 0.85642C14.6312 0.820227 14.7102 0.810833 14.7848 0.830094C14.8593 0.849355 14.924 0.895871 14.9659 0.960456C15.0078 1.02504 15.024 1.103 15.0113 1.17894C14.9985 1.25488 14.9578 1.32328 14.897 1.37064C14.8836 1.38113 13.5278 2.44882 11.9674 4.40448C10.5314 6.20417 8.62239 9.14694 7.68304 12.946C7.66654 13.0128 7.62816 13.0721 7.57402 13.1144C7.51989 13.1568 7.45312 13.1799 7.38436 13.1799L7.38446 13.1797Z" fill="#181818" />
                    </svg>
                  </span>
                  <h4 className="fs-18">
                    Placement Assistance
                  </h4>
                </li>
                <li>
                  <span>
                    <svg fill="none" height="14" viewbox="0 0 16 14" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.38446 13.1797C7.34201 13.1797 7.30003 13.171 7.26115 13.1539C7.22227 13.1369 7.18732 13.1121 7.15852 13.0809L1.06661 6.49119C1.026 6.44726 0.999078 6.39244 0.989139 6.33344C0.9792 6.27445 0.986676 6.21384 1.01065 6.15902C1.03463 6.10421 1.07406 6.05758 1.12413 6.02483C1.17419 5.99208 1.23272 5.97464 1.29255 5.97464H4.22486C4.26888 5.97464 4.3124 5.98409 4.35246 6.00234C4.39252 6.0206 4.42821 6.04723 4.4571 6.08045L6.49304 8.42273C6.71307 7.95239 7.13901 7.16925 7.88646 6.21497C8.99144 4.8042 11.0468 2.7294 14.5632 0.85642C14.6312 0.820227 14.7102 0.810833 14.7848 0.830094C14.8593 0.849355 14.924 0.895871 14.9659 0.960456C15.0078 1.02504 15.024 1.103 15.0113 1.17894C14.9985 1.25488 14.9578 1.32328 14.897 1.37064C14.8836 1.38113 13.5278 2.44882 11.9674 4.40448C10.5314 6.20417 8.62239 9.14694 7.68304 12.946C7.66654 13.0128 7.62816 13.0721 7.57402 13.1144C7.51989 13.1568 7.45312 13.1799 7.38436 13.1799L7.38446 13.1797Z" fill="#181818" />
                    </svg>
                  </span>
                  <h4 className="fs-18">
                    Lifetime Access
                  </h4>
                </li>
              </ul>
            </div>
            <a className="btn-one wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms" href="about.html">
              About Us
              <i className="fa-light fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="team-two-area sub-bg-two pt-120 extra-padding">
      <div className="team-two__shape-right">
        <img alt="Decorative background shape" aria-hidden="true" className="pxl-image-zoom" src="assets/images/shape/team-two-shape.png" />
      </div>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap mb-60">
          <div className="section-header">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              OUR INSTRUCTORS
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              

                            Our 
              <span>
                Expert 
                <img alt="Decorative background shape" aria-hidden="true" src="assets/images/shape/header-shape.png" />
                

                                Instructor
              </span>
            </h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="team-two__item">
              <div className="team-two__image image">
                <img alt="Arun Kumar" src="assets/images/miniu/arun.jpg" />
              </div>
              <h4 className="mt-4">
                <a className="primary-hover" href="#">
                  Arun Kumar
                </a>
              </h4>
              <span>
                SAP Consultant &amp; Trainer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="fanfact-inner-area pt-10 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="fanfact__item">
              <div className="fanfact__icon bg1">
                <img alt="icon" src="assets/images/icon/fanfact-icon1.png" />
              </div>
              <h2>
                <span className="count">
                  100
                </span>
                k+
              </h2>
              <span>
                Students
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="fanfact__item">
              <div className="fanfact__icon bg2">
                <img alt="icon" src="assets/images/icon/fanfact-icon2.png" />
              </div>
              <h2>
                <span className="count">
                  10
                </span>
                +
              </h2>
              <span>
                Courses
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="fanfact__item">
              <div className="fanfact__icon bg3">
                <img alt="icon" src="assets/images/icon/fanfact-icon3.png" />
              </div>
              <h2>
                <span className="count">
                  20
                </span>
                +
              </h2>
              <span>
                Expert Mentors
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="fanfact__item">
              <div className="fanfact__icon bg4">
                <img alt="icon" src="assets/images/icon/fanfact-icon4.png" />
              </div>
              <h2>
                <span className="count">
                  8
                </span>
                +
              </h2>
              <span>
                Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="faq-two-area pb-120">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-header mb-40">
              <h5 className="wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                FAQ’S
              </h5>
              <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                

                                We Always Ensure the Best Training &amp; Placement for Your

                                
                <span>
                  Career Growth 
                  <img alt="Decorative background shape" aria-hidden="true" src="assets/images/shape/header-shape.png" />
                </span>
              </h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item shadow border-none wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                <h2 className="accordion-header" id="headingOne">
                  <button aria-controls="collapseOne" aria-expanded="true" className="accordion-button" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
                    

                                        Do I get a certificate after completion?

                                    
                  </button>
                </h2>
                <div aria-labelledby="headingOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
                  <div className="accordion-body">
                    

                                        Yes! Every course comes with a valuable industry-recognized certificate to boost

                                        your career prospects.

                                    
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow border-none wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <h2 className="accordion-header" id="headingTwo">
                  <button aria-controls="collapseTwo" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
                    

                                        How are MiniU courses delivered?

                                    
                  </button>
                </h2>
                <div aria-labelledby="headingTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
                  <div className="accordion-body">
                    

                                        We provide both online and offline training, allowing you to choose the format

                                        that best fits your schedule.

                                    
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow border-none wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <h2 className="accordion-header" id="headingThree">
                  <button aria-controls="collapseThree" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
                    

                                        Does MiniU offer placement support?

                                    
                  </button>
                </h2>
                <div aria-labelledby="headingThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseThree">
                  <div className="accordion-body">
                    

                                        Absolutely. We provide placement assistance and help students connect with top

                                        recruiters in the industry.

                                    
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow border-none wow fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                <h2 className="accordion-header" id="headingFour">
                  <button aria-controls="collapseFour" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapseFour" data-bs-toggle="collapse" type="button">
                    

                                        Are the trainers industry experts?

                                    
                  </button>
                </h2>
                <div aria-labelledby="headingFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseFour">
                  <div className="accordion-body">
                    

                                        Yes, all our courses are taught by experienced mentors with real-world

                                        expertise.

                                    
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow border-none wow fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                <h2 className="accordion-header" id="headingFive">
                  <button aria-controls="collapseFive" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#collapseFive" data-bs-toggle="collapse" type="button">
                    

                                        Can I access course materials after completion?

                                    
                  </button>
                </h2>
                <div aria-labelledby="headingFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseFive">
                  <div className="accordion-body">
                    

                                        Definitely. With lifetime access, you can revisit lessons and resources anytime

                                        you need.

                                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="faq-two__image">
              <img alt="Course illustration image" className="w-100" src="assets/images/faq/faq-image1.png" />
              <img alt="Decorative background shape" aria-hidden="true" className="dots1 pxl-image-zoom" src="assets/images/shape/faq-dots-top.png" />
              <img alt="Decorative background shape" aria-hidden="true" className="dots2 pxl-image-zoom" src="assets/images/shape/faq-dots-bottom.png" />
              <img alt="Decorative background shape" aria-hidden="true" className="shape1" src="assets/images/shape/faq-shape-bottom.png" />
              <img alt="Decorative background shape" aria-hidden="true" className="shape2 animation__arryUpDown" src="assets/images/shape/faq-shape-top.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="why-choose-area">
      <div className="container">
        <h2 className="section-title">
          Why Choose Our 
          <span>
            Institute
          </span>
        </h2>
        <div className="choose-grid">
          <div className="choose-item">
            <h3>
              EXPERIENCED TRAINERS
            </h3>
            <p>
              Our trainers are certified professionals with real-world experience, bringing practical

                            knowledge and insights to every class.
            </p>
          </div>
          <div className="choose-item">
            <h3>
              100% PLACEMENT ASSISTANCE
            </h3>
            <p>
              We don’t just train — we help you get hired with resume support, interview practice, and job

                            opportunities.
            </p>
          </div>
          <div className="choose-item">
            <h3>
              ONE-TO-ONE TRAINING
            </h3>
            <p>
              Get personalized guidance through one-on-one training sessions and dedicated lab practice for

                            hands-on learning.
            </p>
          </div>
          <div className="choose-item">
            <h3>
              FLEXIBLE BATCH TIMING
            </h3>
            <p>
              We offer flexible class timings — weekdays, weekends, or evenings — to suit your busy

                            schedule.
            </p>
          </div>
          <div className="choose-item">
            <h3>
              WORK IN LIVE PROJECTS
            </h3>
            <p>
              Gain real-world experience by working on live industry projects that prepare you for your job

                            role.
            </p>
          </div>
          <div className="choose-item">
            <h3>
              COURSE MATERIALS &amp; RECORDINGS
            </h3>
            <p>
              Access eBooks, notes, and recorded sessions anytime to revise and keep your learning

                            consistent.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="client-section" id="clients">
      <div className="container">
        <h2 className="section-title">
          Our Placement Partners
        </h2>
        <p className="section-subtitle">
          

                    Proudly partnered with brands that value excellence and innovation.

                
        </p>
        <div className="swiper client-row client-row-1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img alt="Client 1" src="assets/images/miniu/clients/1.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 2" src="assets/images/miniu/clients/2.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 3" src="assets/images/miniu/clients/3.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 4" src="assets/images/miniu/clients/4.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 5" src="assets/images/miniu/clients/5.png" />
            </div>
          </div>
        </div>
        <div className="swiper client-row client-row-2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img alt="Client 6" src="assets/images/miniu/clients/6.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 7" src="assets/images/miniu/clients/7.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 8" src="assets/images/miniu/clients/8.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 9" src="assets/images/miniu/clients/9.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 10" src="assets/images/miniu/clients/10.png" />
            </div>
          </div>
        </div>
        <div className="swiper client-row client-row-3">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img alt="Client 11" src="assets/images/miniu/clients/11.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 12" src="assets/images/miniu/clients/12.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 13" src="assets/images/miniu/clients/13.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 14" src="assets/images/miniu/clients/14.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 15" src="assets/images/miniu/clients/15.png" />
            </div>
            <div className="swiper-slide">
              <img alt="Client 16" src="assets/images/miniu/clients/16.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonial-three-area sub-bg-two pt-120 pb-120">
      <div className="container">
        <div className="section-header mb-60 text-center">
          <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            Testimonials
          </h5>
          <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            Hear From Our

                        
            <span>
              Students 
              <img alt="Decorative background shape" aria-hidden="true" src="assets/images/shape/header-shape.png" />
            </span>
          </h2>
        </div>
      </div>
      <div className="swiper testimonial-three__slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-three__item">
              <svg className="coma" fill="none" height="37" viewbox="0 0 50 37" width="50" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#2EB97E" />
              </svg>
              <div className="d-flex align-items-center gap-3">
                <div className="testi-info">
                  <h4>
                    Rahul Mehta
                  </h4>
                  <p>
                    SAP Consultant
                  </p>
                  <div className="star mt-1">
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star disable" />
                  </div>
                </div>
              </div>
              <p className="mt-30">
                “ MiniU’s SAP MM training was a turning point in my career. The mentors

                                were highly experienced, and with their placement support, I landed my first SAP

                                consultant role. ”
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-three__item">
              <svg className="coma" fill="none" height="37" viewbox="0 0 50 37" width="50" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#2EB97E" />
              </svg>
              <div className="d-flex align-items-center gap-3">
                <div className="testi-info">
                  <h4>
                    Priya Sharma
                  </h4>
                  <p>
                    Digital Marketing Executive
                  </p>
                  <div className="star mt-1">
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star disable" />
                  </div>
                </div>
              </div>
              <p className="mt-30">
                “ The Digital Marketing course gave me hands-on skills in SEO, Ads, and

                                Analytics. I’m now working at a top agency thanks to MiniU’s certification and guidance.

                                ”
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-three__item">
              <svg className="coma" fill="none" height="37" viewbox="0 0 50 37" width="50" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#2EB97E" />
              </svg>
              <div className="d-flex align-items-center gap-3">
                <div className="testi-info">
                  <h4>
                    Arjun Nair
                  </h4>
                  <p>
                    Full Stack Developer
                  </p>
                  <div className="star mt-1">
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star disable" />
                  </div>
                </div>
              </div>
              <p className="mt-30">
                “ From front-end to back-end, the Full Stack Development course at MiniU

                                made me job-ready. The projects and real-time examples were the best part. ”
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-three__item">
              <svg className="coma" fill="none" height="37" viewbox="0 0 50 37" width="50" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#2EB97E" />
              </svg>
              <div className="d-flex align-items-center gap-3">
                <div className="testi-info">
                  <h4>
                    Sneha Reddy
                  </h4>
                  <p>
                    Business Analyst
                  </p>
                  <div className="star mt-1">
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star disable" />
                  </div>
                </div>
              </div>
              <p className="mt-30">
                “ MiniU’s Business Analytics training was very practical. I gained

                                confidence in tools like Excel and Tableau, and I’m now placed as a junior analyst in a

                                reputed firm. ”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-60">
        <div className="dot testimonial-three__dot" />
      </div>
    </section>
      </main>
      <Footer />
    </>
  )
}

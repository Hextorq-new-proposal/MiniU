import Header from "../components/Header"
import Footer from "../components/Footer"
import { cssObj } from "../lib/cssObj"

export default function Blog() {
  return (
    <>
      <Header />
      <main>
    <section className="banner-inner-area sub-bg bg-image" data-background="assets/images/bg/banner-inner-bg.png">
      <div className="container">
        <div className="banner-inner__content">
          <h1>
            MiniU Blog
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
              Blog
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="pt-80 pb-40 text-center">
      <div className="container">
        <h2>
          Latest SAP, IT &amp; Career Growth Blogs
        </h2>
        <p>
          

                Explore expert insights on SAP training, software courses, data science, digital marketing,

                and job-oriented skills to boost your career with MiniU.

            
        </p>
      </div>
    </section>
    <section className="blog-standard-area pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="blog__item p-4 mb-30">
              <a className="blog__image d-block" href="blog-details.html">
                <img alt="Best SAP Course in Coimbatore MiniU" loading="lazy" src="assets/images/blog/blog-standard-image1.jpg" />
              </a>
              <div className="blog__content">
                <h3>
                  <a href="blog-details.html">
                    

                                    Best SAP Course in Coimbatore with Placement Support

                                
                  </a>
                </h3>
                <p className="mt-20">
                  

                                Looking for the best SAP training institute in Coimbatore? MiniU offers SAP FICO, SAP MM,

                                and SAP SD courses with real-time projects and 100% placement support. Learn from industry

                                experts and build a successful SAP career.

                            
                </p>
                <a className="read-more-btn" href="blog-details.html">
                  

                                Read More 
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="blog__item p-4 mb-30">
              <a className="blog__image d-block" href="blog-details.html">
                <img alt="Top IT Courses for Jobs 2025" loading="lazy" src="assets/images/blog/blog-standard-image2.jpg" />
              </a>
              <div className="blog__content">
                <h3>
                  <a href="blog-details.html">
                    

                                    Top IT Courses for High Salary Jobs in 2025

                                
                  </a>
                </h3>
                <p className="mt-20">
                  

                                Discover the most in-demand IT courses like Full Stack Development, Data Science,

                                Digital Marketing, and Cloud Computing. Learn how these courses can help you secure

                                high-paying jobs in 2025.

                            
                </p>
                <a className="read-more-btn" href="blog-details.html">
                  

                                Read More 
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="blog__item p-4">
              <a className="blog__image d-block" href="blog-details.html">
                <img alt="Data Science Course Career Guide" loading="lazy" src="assets/images/blog/blog-standard-image3.jpg" />
              </a>
              <div className="blog__content">
                <h3>
                  <a href="blog-details.html">
                    

                                    Data Science Career Guide for Beginners

                                
                  </a>
                </h3>
                <p className="mt-20">
                  

                                Start your journey in data science with MiniU. Learn Python, Machine Learning,

                                and real-world analytics projects. Understand salary trends and career opportunities

                                in the growing data science field.

                            
                </p>
                <a className="read-more-btn" href="blog-details.html">
                  

                                Read More 
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item search mb-4">
              <h3>
                Search
              </h3>
              <div className="input-wrp">
                <input placeholder="Search blogs..." type="text" />
                <button>
                  <i className="fa-regular fa-magnifying-glass" />
                </button>
              </div>
            </div>
            <div className="item category mb-4">
              <h3>
                Categories
              </h3>
              <ul>
                <li>
                  <a href="#">
                    <span>
                      SAP Training
                    </span>
                    <span>
                      (5)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Full Stack Development
                    </span>
                    <span>
                      (3)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Data Science
                    </span>
                    <span>
                      (4)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Digital Marketing
                    </span>
                    <span>
                      (2)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Finance &amp; Accounting
                    </span>
                    <span>
                      (3)
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="item resent-post mb-4">
              <h3>
                Recent Posts
              </h3>
              <ul>
                <li>
                  <img alt="SAP Career Guide" src="assets/images/blog/blog-recent-image1.png" />
                  <div>
                    <h5>
                      <a href="#">
                        SAP Career Opportunities in 2025
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <img alt="IT Courses" src="assets/images/blog/blog-recent-image2.png" />
                  <div>
                    <h5>
                      <a href="#">
                        Best Software Courses for Jobs
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <img alt="Digital Marketing" src="assets/images/blog/blog-recent-image3.png" />
                  <div>
                    <h5>
                      <a href="#">
                        Digital Marketing Career Growth
                      </a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            <div className="item">
              <h3>
                Tags
              </h3>
              <div className="tags">
                <a href="#">
                  SAP
                </a>
                <a href="#">
                  IT Courses
                </a>
                <a href="#">
                  Data Science
                </a>
                <a href="#">
                  Full Stack
                </a>
                <a href="#">
                  Marketing
                </a>
                <a href="#">
                  Career
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  )
}

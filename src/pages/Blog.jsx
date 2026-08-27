import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import SEOHead from "../components/common/SEOHead"
import "../styles/blogRedesign.css"

const posts = [
  { image: "assets/images/blog/blog-standard-image1.jpg", title: "Best SAP Course in Coimbatore with Placement Support", category: "SAP training", excerpt: "A practical guide to choosing SAP FICO, MM, and SD training that connects classroom learning with real projects and career support." },
  { image: "assets/images/blog/blog-standard-image2.jpg", title: "Top IT Courses for High Salary Jobs in 2025", category: "Career growth", excerpt: "Explore the skills employers are hiring for across full stack development, data science, digital marketing, and cloud computing." },
  { image: "assets/images/blog/blog-standard-image3.jpg", title: "Data Science Career Guide for Beginners", category: "Data science", excerpt: "Start with a clear learning path covering Python, machine learning, analytics projects, and the first steps toward your new role." }
]

const categories = [["SAP Training", 5], ["Full Stack Development", 3], ["Data Science", 4], ["Digital Marketing", 2], ["Finance & Accounting", 3]]
const recentPosts = [
  ["assets/images/blog/blog-recent-image1.png", "SAP Career Opportunities in 2025"],
  ["assets/images/blog/blog-recent-image2.png", "Best Software Courses for Jobs"],
  ["assets/images/blog/blog-recent-image3.png", "Digital Marketing Career Growth"]
]

export default function Blog() {
  return (
    <div className="miniu-blog-page">
      <SEOHead title="MiniU Blog | SAP, IT and Career Growth" description="Practical insights on SAP training, IT courses, data science, and career growth from MiniU." canonicalUrl="https://miniu.info/blog" />
      <Header />
      <main>
        <section className="miniu-blog-hero">
          <div className="container">
            <div className="miniu-eyebrow">The MiniU journal</div>
            <h1>Ideas for your next career move.</h1>
            <p>Useful perspectives on learning, hiring, and building a career in today&apos;s technology landscape.</p>
          </div>
        </section>
        <section className="container minui-blog-layout">
          <div className="miniu-blog-list reveal-stagger-group">
            {posts.map((post) => (
              <article className="miniu-blog-card reveal-card" key={post.title}>
                <a href="/blog-details" aria-label={`Read ${post.title}`}><img src={post.image} alt="" loading="lazy" /></a>
                <div className="miniu-blog-card-content">
                  <span className="miniu-blog-meta">{post.category}</span>
                  <h2><a href="/blog-details" className="text-reset text-decoration-none">{post.title}</a></h2>
                  <p>{post.excerpt}</p>
                  <a className="miniu-blog-read" href="/blog-details">Read article <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
          <aside className="miniu-blog-sidebar reveal-fade-up">
            <h2>Search the journal</h2>
            <form className="miniu-blog-search" onSubmit={(event) => event.preventDefault()}>
              <input type="search" placeholder="Search articles" aria-label="Search articles" />
              <button type="submit" aria-label="Search"><i className="fa-regular fa-magnifying-glass" /></button>
            </form>
            <h2>Topics</h2>
            <ul className="miniu-blog-categories">
              {categories.map(([name, count]) => <li key={name}><a href="#topics"><span>{name}</span><span>{count}</span></a></li>)}
            </ul>
            <h2>Recent articles</h2>
            <div className="miniu-blog-recent">
              {recentPosts.map(([image, title]) => <a href="/blog-details" key={title}><img src={image} alt="" loading="lazy" /><span>{title}</span></a>)}
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  )
}

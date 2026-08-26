import React from "react"

export default function PlacementPartners() {
  const row1 = [
    { id: 1, name: "SeedApps", src: "/assets/images/miniu/clients/1.png" },
    { id: 2, name: "KPMG", src: "/assets/images/miniu/clients/2.png" },
    { id: 3, name: "UnionSys Technologies", src: "/assets/images/miniu/clients/3.png" },
    { id: 4, name: "Wartsila", src: "/assets/images/miniu/clients/4.png" },
    { id: 5, name: "Kyraan Technologies", src: "/assets/images/miniu/clients/5.png" },
  ]

  const row2 = [
    { id: 6, name: "enthutech", src: "/assets/images/miniu/clients/6.png" },
    { id: 7, name: "Tech Mahindra", src: "/assets/images/miniu/clients/7.png" },
    { id: 8, name: "ThroughBit", src: "/assets/images/miniu/clients/8.png" },
    { id: 9, name: "Sri Ramachandra", src: "/assets/images/miniu/clients/9.png" },
    { id: 10, name: "TraceU", src: "/assets/images/miniu/clients/10.png" },
  ]

  const row3 = [
    { id: 11, name: "Prajai Tax Associates", src: "/assets/images/miniu/clients/11.png" },
    { id: 12, name: "ALPHASPECTS", src: "/assets/images/miniu/clients/12.png" },
    { id: 13, name: "SRISHTie Technologies", src: "/assets/images/miniu/clients/13.png" },
    { id: 14, name: "Prajai Technology", src: "/assets/images/miniu/clients/14.png" },
    { id: 15, name: "TCS", src: "/assets/images/miniu/clients/15.png" },
    { id: 16, name: "Cognizant", src: "/assets/images/miniu/clients/16.png" },
  ]

  return (
    <section className="placement-partners-section" id="clients">
      <div className="container text-center mb-4">
        <h2 className="display-6 fw-bold text-dark mb-2 miniu-font-display">
          Our Placement Partners
        </h2>
        <p className="text-secondary fs-16 mb-0">
          Proudly partnered with brands that value excellence and innovation.
        </p>
      </div>

      {/* Row 1: Scroll Left */}
      <div className="marquee-container">
        <div className="marquee-content marquee-scroll-left">
          {row1.concat(row1).concat(row1).map((item, idx) => (
            <div key={`r1-${idx}`} className="partner-logo-box">
              <img src={item.src} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="marquee-content marquee-scroll-left" aria-hidden="true">
          {row1.concat(row1).concat(row1).map((item, idx) => (
            <div key={`r1-dup-${idx}`} className="partner-logo-box">
              <img src={item.src} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scroll Right */}
      <div className="marquee-container">
        <div className="marquee-content marquee-scroll-right">
          {row2.concat(row2).concat(row2).map((item, idx) => (
            <div key={`r2-${idx}`} className="partner-logo-box">
              <img src={item.src} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="marquee-content marquee-scroll-right" aria-hidden="true">
          {row2.concat(row2).concat(row2).map((item, idx) => (
            <div key={`r2-dup-${idx}`} className="partner-logo-box">
              <img src={item.src} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Scroll Left */}
      <div className="marquee-container">
        <div className="marquee-content marquee-scroll-left">
          {row3.concat(row3).concat(row3).map((item, idx) => (
            <div key={`r3-${idx}`} className="partner-logo-box">
              <img src={item.src} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="marquee-content marquee-scroll-left" aria-hidden="true">
          {row3.concat(row3).concat(row3).map((item, idx) => (
            <div key={`r3-dup-${idx}`} className="partner-logo-box">
              <img src={item.src} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

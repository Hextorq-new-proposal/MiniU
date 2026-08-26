import { useEffect } from "react"

export default function SEOHead({
  title = "MiniU EdTech - Job Oriented Courses in Coimbatore | 100% Placement Guaranteed!",
  description = "MiniU is Coimbatore's premier training institute for SAP (ABAP, FICO, MM, SD, S/4 HANA), Business Analytics, Data Science, Full Stack Development, and UI/UX Design with 100% placement support.",
  keywords = "sap training in coimbatore, best it training institute coimbatore, sap fico course, data science training, full stack web development, mini u rs puram",
  canonicalUrl = "https://miniu.info",
  ogImage = "https://miniu.info/assets/images/miniu/logo.png",
  ogType = "website",
  schema = null
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title

    // 2. Helper to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attrName, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute("content", content || "")
    }

    // 3. Set Standard Meta Tags
    setMetaTag("name", "description", description)
    setMetaTag("name", "keywords", keywords)
    setMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1")

    // 4. Set Open Graph Tags
    setMetaTag("property", "og:title", title)
    setMetaTag("property", "og:description", description)
    setMetaTag("property", "og:url", canonicalUrl)
    setMetaTag("property", "og:type", ogType)
    setMetaTag("property", "og:image", ogImage)
    setMetaTag("property", "og:site_name", "MiniU EdTech")
    setMetaTag("property", "og:locale", "en_IN")

    // 5. Set Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image")
    setMetaTag("name", "twitter:title", title)
    setMetaTag("name", "twitter:description", description)
    setMetaTag("name", "twitter:image", ogImage)

    // 6. Set Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']")
    if (!canonicalLink) {
      canonicalLink = document.createElement("link")
      canonicalLink.setAttribute("rel", "canonical")
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute("href", canonicalUrl)

    // 7. Inject Schema.org JSON-LD
    let schemaScript = document.getElementById("miniu-schema-jsonld")
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script")
        schemaScript.id = "miniu-schema-jsonld"
        schemaScript.type = "application/ld+json"
        document.head.appendChild(schemaScript)
      }
      schemaScript.textContent = JSON.stringify(schema)
    } else if (schemaScript) {
      schemaScript.remove()
    }

    return () => {
      // Clean up script on unmount if needed
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schema])

  return null
}

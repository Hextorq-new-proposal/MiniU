import React from "react"

export const CompanyLogo = ({ name, height = 28, className = "" }) => {
  switch (name?.toLowerCase()) {
    case "tcs":
    case "tata consultancy services":
      return (
        <svg height={height} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="26" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="22" fill="#002d62" letterSpacing="1">TCS</text>
          <text x="50" y="20" fontFamily="Arial, Helvetica, sans-serif" fontWeight="600" fontSize="8" fill="#555555" letterSpacing="0.5">TATA</text>
          <text x="50" y="28" fontFamily="Arial, Helvetica, sans-serif" fontWeight="500" fontSize="7" fill="#666666" letterSpacing="0.5">CONSULTANCY SERVICES</text>
        </svg>
      )
    case "infosys":
      return (
        <svg height={height} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="24" fill="#007cc3" letterSpacing="-0.5">Infosys</text>
        </svg>
      )
    case "bosch":
      return (
        <svg height={height} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="16" cy="16" r="13" stroke="#EA1C24" strokeWidth="2.5" fill="none" />
          <path d="M9 16H23M16 9V23" stroke="#EA1C24" strokeWidth="2" strokeLinecap="round" />
          <text x="36" y="23" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="20" fill="#1C2833" letterSpacing="1.5">BOSCH</text>
        </svg>
      )
    case "wipro":
      return (
        <svg height={height} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="10" cy="10" r="3" fill="#E63946" />
          <circle cx="17" cy="7" r="2.5" fill="#F4A261" />
          <circle cx="23" cy="10" r="3" fill="#2A9D8F" />
          <circle cx="20" cy="16" r="2.5" fill="#457B9D" />
          <text x="32" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="20" fill="#2A2D34" letterSpacing="0.5">wipro</text>
        </svg>
      )
    case "cognizant":
      return (
        <svg height={height} viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="20" fill="#0033A0" letterSpacing="-0.5">Cognizant</text>
        </svg>
      )
    case "capgemini":
      return (
        <svg height={height} viewBox="0 0 145 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M12 7C9 10 7 13 7 16C7 19 9 22 12 24C15 22 17 19 17 16C17 13 15 10 12 7Z" fill="#0070AD" />
          <path d="M12 24V28H14V24H12Z" fill="#0070AD" />
          <text x="24" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="18" fill="#1B2A4A" letterSpacing="-0.5">Capgemini</text>
        </svg>
      )
    case "zoho":
      return (
        <svg height={height} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="6" width="20" height="20" rx="4" fill="#DF2027" />
          <text x="7" y="21" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="14" fill="#ffffff">Z</text>
          <rect x="26" y="6" width="20" height="20" rx="4" fill="#008FD3" />
          <text x="30" y="21" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="14" fill="#ffffff">O</text>
          <rect x="50" y="6" width="20" height="20" rx="4" fill="#58AB27" />
          <text x="54" y="21" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="14" fill="#ffffff">H</text>
          <rect x="74" y="6" width="20" height="20" rx="4" fill="#F4A220" />
          <text x="78" y="21" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="14" fill="#ffffff">O</text>
        </svg>
      )
    case "kpmg":
      return (
        <svg height={height} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" fill="#00338D" letterSpacing="2">KPMG</text>
        </svg>
      )
    case "deloitte":
      return (
        <svg height={height} viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="20" fill="#000000" letterSpacing="-0.5">Deloitte</text>
          <circle cx="75" cy="20" r="2.5" fill="#86BC25" />
        </svg>
      )
    default:
      return <span className="fs-14 fw-bold text-secondary">{name}</span>
  }
}

export default CompanyLogo

// Centralized Course Data Repository for MiniU EdTech

export const COURSES = [
  // SAP MODULES
  {
    id: "sap-abap",
    slug: "sap-abap",
    legacyUrl: "/sap_abap.html",
    title: "SAP ABAP Training in Coimbatore | Advanced Programming Course",
    shortTitle: "SAP ABAP - Advanced Programming",
    category: "SAP",
    categorySlug: "sap",
    level: "Beginner to Advanced",
    duration: "80 Hours (8-10 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.9,
    reviewCount: 142,
    studentsEnrolled: 420,
    badge: "Most In-Demand SAP Course",
    imageSmall: "assets/images/miniu/sap/small/abap.jpg",
    imageLarge: "assets/images/miniu/sap/large/abap.jpg",
    shortDesc: "Master SAP ABAP from fundamentals to advanced development. Learn Data Dictionary, Reports, BAPIs, BADIs, OData Services, and SAP HANA integration with real-time projects.",
    longDesc: "MiniU's SAP ABAP course in Coimbatore is tailored for aspiring SAP developers and IT professionals. You will gain hands-on expertise in developing custom reports, interfaces, module pool programming, forms, and system enhancements. The program includes live real-time business scenarios, interview preparation, and 100% placement support in top MNCs.",
    salaryRange: "₹4.5 LPA - ₹11.5 LPA",
    targetRoles: ["SAP ABAP Developer", "SAP Technical Consultant", "SAP ERP Programmer", "SAP S/4 HANA Technical Specialist"],
    prerequisites: "Basic programming logic & understanding of databases. Freshers and working professionals are welcome.",
    keyHighlights: [
      "Real-time SAP Server Access for Hands-on Coding",
      "Comprehensive Coverage of RICEF (Reports, Interfaces, Conversions, Enhancements, Forms)",
      "OOPS ABAP & S/4 HANA ABAP Migration Concepts",
      "3 Live End-to-End Capstone Projects",
      "100% Placement Assistance & Mock Interview Drills",
      "Globally Recognized Course Completion Certificate"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Introduction to SAP Architecture & ABAP Basics",
        hours: "12 Hours",
        topics: [
          "SAP R/3 & S/4 HANA 3-Tier Architecture Overview",
          "ABAP Workbench, SE80, SE38 Navigator Tools",
          "Data Types, Variables, Constants, and Operators",
          "Control Structures, Loops, and Modularization Techniques"
        ]
      },
      {
        moduleNumber: 2,
        title: "ABAP Data Dictionary (SE11) & Database Operations",
        hours: "16 Hours",
        topics: [
          "Domain, Data Elements, Tables (Transparent, Pool, Cluster)",
          "Views, Search Helps, Lock Objects, and Primary/Foreign Keys",
          "Open SQL Statements (SELECT, INSERT, UPDATE, DELETE)",
          "Internal Tables (Standard, Sorted, Hashed) & Work Areas"
        ]
      },
      {
        moduleNumber: 3,
        title: "Modularization & Classical / Interactive Reports",
        hours: "14 Hours",
        topics: [
          "Subroutines, Function Modules, and Function Groups",
          "Classical Reporting and Selection Screen Events",
          "Interactive Reporting and AT USER-COMMAND Events",
          "ALV Grid & List Display Programming (REUSE_ALV & SALV)"
        ]
      },
      {
        moduleNumber: 4,
        title: "Module Pool Programming & Dialog Development",
        hours: "12 Hours",
        topics: [
          "Screen Painter (SE51) & Menu Painter (SE41)",
          "Process Before Output (PBO) & Process After Input (PAI)",
          "Subscreens, Table Controls, and Tabstrips Implementation"
        ]
      },
      {
        moduleNumber: 5,
        title: "Interfaces, Enhancements, BAPI & OData Basics",
        hours: "14 Hours",
        topics: [
          "BDC (Batch Data Communication) - Session & Call Transaction",
          "BAPIs (Business Application Programming Interfaces) & RFC",
          "User Exits, Customer Exits, and BADI Implementations",
          "Introduction to OData Services and SAP Gateway (SEGW)"
        ]
      },
      {
        moduleNumber: 6,
        title: "Capstone Projects, Certification & Interview Drills",
        hours: "12 Hours",
        topics: [
          "Live Project: Custom Inventory Tracking Report for Manufacturing",
          "Live Project: Automated PO Creation Interface with BAPI",
          "Resume Building, SAP Certification Preparation, and Mock Interviews"
        ]
      }
    ],
    faqs: [
      {
        question: "Is SAP ABAP a good career choice in 2025/2026?",
        answer: "Yes, SAP ABAP developers continue to command high compensation because every SAP enterprise system requires custom development, integrations, and migration to SAP S/4 HANA."
      },
      {
        question: "Do I need coding background for SAP ABAP?",
        answer: "Basic logical understanding of programming is helpful, but our curriculum starts from fundamental principles. Many non-CS and commerce graduates successfully learn ABAP at MiniU."
      },
      {
        question: "Does MiniU provide SAP server access?",
        answer: "Yes, 24/7 dedicated cloud SAP server access is provided to all enrolled students for hands-on practice throughout the training."
      }
    ],
    seo: {
      title: "SAP ABAP Training in Coimbatore | 100% Placement Support - MiniU",
      metaDesc: "Join the best SAP ABAP training institute in Coimbatore at MiniU. Learn RICEF, OOPS ABAP, BAPIs, and S/4 HANA with real-time projects and guaranteed placement support.",
      keywords: "sap abap training coimbatore, sap abap course coimbatore, sap abap placement coimbatore, best sap institute rs puram, learn sap programming"
    }
  },

  {
    id: "sap-fico",
    slug: "sap-fico",
    legacyUrl: "/sap_fico.html",
    title: "SAP FICO Training in Coimbatore | Financial & Controlling Certification",
    shortTitle: "SAP FICO - Financial Accounting & Controlling",
    category: "SAP",
    categorySlug: "sap",
    level: "Beginner to Advanced",
    duration: "75 Hours (8 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.9,
    reviewCount: 168,
    studentsEnrolled: 510,
    badge: "Highest Hiring Volume",
    imageSmall: "assets/images/miniu/sap/small/fico.jpg",
    imageLarge: "assets/images/miniu/sap/large/fico.jpg",
    shortDesc: "Master SAP Financial Accounting (FI) and Management Controlling (CO). Learn General Ledger, AP, AR, Asset Accounting, Cost Center, and Profit Center Accounting.",
    longDesc: "MiniU's SAP FICO training program in Coimbatore provides in-depth, hands-on training for accounting, commerce, and finance graduates. You will learn end-to-end enterprise financial workflows, tax configurations (GST/TDS), integration with SAP MM/SD, and real-time balance sheet preparation.",
    salaryRange: "₹4.2 LPA - ₹10.5 LPA",
    targetRoles: ["SAP FICO Consultant", "SAP Finance Analyst", "ERP Accounting Specialist", "SAP Controlling Lead"],
    prerequisites: "B.Com, M.Com, MBA Finance, CA/ICWA Inter, or basic accounting fundamentals.",
    keyHighlights: [
      "Complete FI (General Ledger, AP, AR, Asset) & CO (Cost Center, PCA) Modules",
      "GST, TDS & Indian Taxation Configuration in SAP",
      "Live Integration with SAP MM (Procure-to-Pay) & SAP SD (Order-to-Cash)",
      "Financial Statement Versions (FSV) & Month-End Closing Activities",
      "100% Placement Assistance with Top MNC Hiring Partners"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Enterprise Structure & General Ledger (FI-GL)",
        hours: "15 Hours",
        topics: [
          "Company Code, Business Area, Chart of Accounts Configuration",
          "Fiscal Year Variants and Posting Period Variants",
          "Document Types, Number Ranges, and Field Status Groups",
          "GL Master Records, Parked & Held Documents, Accruals"
        ]
      },
      {
        moduleNumber: 2,
        title: "Accounts Payable (FI-AP) & Accounts Receivable (FI-AR)",
        hours: "18 Hours",
        topics: [
          "Vendor Account Groups, Master Records, Tolerance Limits",
          "Invoice Postings, Credit Memos, Down Payments",
          "Automatic Payment Program (APP - F110) Configuration",
          "Customer Account Groups, Invoicing, Dunning Procedure (F150)"
        ]
      },
      {
        moduleNumber: 3,
        title: "Asset Accounting (FI-AA) & Bank Accounting",
        hours: "14 Hours",
        topics: [
          "Chart of Depreciation, Asset Classes, Depreciation Keys",
          "Asset Acquisition, Transfer, Scrapping, and Retirement",
          "House Banks, Bank Accounts, and Electronic Bank Statements (EBS)"
        ]
      },
      {
        moduleNumber: 4,
        title: "Controlling (CO) & Cost Element / Center Accounting",
        hours: "16 Hours",
        topics: [
          "Controlling Area Configuration and Primary/Secondary Cost Elements",
          "Cost Center Accounting (CCA) & Standard Hierarchy",
          "Internal Orders: Real vs Statistical Orders",
          "Profit Center Accounting (PCA) & Segment Reporting"
        ]
      },
      {
        moduleNumber: 5,
        title: "Integration (MM-FI, SD-FI), GST & S/4 HANA Finance",
        hours: "12 Hours",
        topics: [
          "Automatic Account Determination (OBYC for MM, VKOA for SD)",
          "GST Configuration, Input/Output Tax, and Withholding Tax (TDS)",
          "Universal Journal (ACDOCA) & S/4 HANA Finance Differences",
          "Live Capstone Project & Mock Placement Interviews"
        ]
      }
    ],
    faqs: [
      {
        question: "Can fresh commerce graduates get jobs in SAP FICO?",
        answer: "Yes, fresh B.Com, M.Com, and MBA Finance graduates are in high demand as Associate SAP FICO Consultants in IT service companies and corporate finance hubs."
      },
      {
        question: "How does MiniU help with SAP FICO placements in Coimbatore?",
        answer: "We offer resume optimization, 5+ technical mock interviews, real-world case studies, and direct interview scheduling with top corporate hiring partners in Coimbatore, Chennai, and Bangalore."
      }
    ],
    seo: {
      title: "SAP FICO Course in Coimbatore | SAP Finance Certification - MiniU",
      metaDesc: "Learn SAP FICO in Coimbatore with practical accounting, GST, AP/AR, and S/4 HANA Finance modules. 100% placement support at MiniU Coimbatore.",
      keywords: "sap fico training coimbatore, sap fico course in coimbatore, best sap fico institute, sap finance course rs puram, sap fico job placement"
    }
  },

  {
    id: "sap-mm",
    slug: "sap-mm",
    legacyUrl: "/sap_mm.html",
    title: "SAP MM Training in Coimbatore | Materials Management & SCM Certification",
    shortTitle: "SAP MM - Materials Management & SCM",
    category: "SAP",
    categorySlug: "sap",
    level: "Beginner to Advanced",
    duration: "70 Hours (8 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.8,
    reviewCount: 135,
    studentsEnrolled: 380,
    badge: "Supply Chain Essential",
    imageSmall: "assets/images/miniu/sap/small/mm.jpg",
    imageLarge: "assets/images/miniu/sap/large/mm.jpg",
    shortDesc: "Master SAP Materials Management (MM). Learn Purchasing, Inventory Management, Master Data, Vendor Evaluation, Pricing Procedures, and P2P cycle.",
    longDesc: "MiniU's SAP MM course prepares students for rewarding careers in Supply Chain Management and Procurement. You will master the entire Procure-to-Pay (P2P) lifecycle, material valuation, physical inventory, logistics invoice verification (LIV), and integration with SAP FI and SD.",
    salaryRange: "₹4.0 LPA - ₹9.5 LPA",
    targetRoles: ["SAP MM Consultant", "Procurement Specialist", "Inventory Analyst", "Supply Chain ERP Consultant"],
    prerequisites: "Graduates in any discipline (B.E/B.Tech, B.Sc, B.Com, BBA, MBA) interested in logistics, operations, or ERP.",
    keyHighlights: [
      "End-to-End Procure-to-Pay (P2P) Cycle Implementation",
      "Material Master, Vendor Master, and Purchase Info Record Master Data",
      "Custom Pricing Procedure Configuration (Schema, Condition Types)",
      "Logistics Invoice Verification (MIRO) & GR/IR Account Cleansing",
      "Real-World Manufacturing & Retail Case Studies"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Enterprise Structure & MM Master Data",
        hours: "14 Hours",
        topics: [
          "Plant, Storage Location, Purchasing Organization Configuration",
          "Material Master: Material Types, Industry Sectors, Views",
          "Vendor Master (Business Partner in S/4 HANA) & Purchase Info Records",
          "Source Determination: Source List & Quota Arrangement"
        ]
      },
      {
        moduleNumber: 2,
        title: "Purchasing & Procurement Cycle (P2P)",
        hours: "16 Hours",
        topics: [
          "Purchase Requisition (PR), Request for Quotation (RFQ), Quotation Entry",
          "Purchase Orders (Standard, Subcontracting, Consignment, Stock Transport)",
          "Release Strategy Configuration for PR & PO Approval Workflows",
          "Contracts and Scheduling Agreements"
        ]
      },
      {
        moduleNumber: 3,
        title: "Inventory Management & Physical Inventory",
        hours: "14 Hours",
        topics: [
          "Goods Receipt (MIGO) against PO, Delivery, Production Order",
          "Movement Types (101, 103, 105, 201, 261, 301, 311, 551)",
          "Stock Transfers: Plant-to-Plant and Storage Location-to-Storage Location",
          "Physical Inventory Process: Document Creation, Count Entry, Difference Posting"
        ]
      },
      {
        moduleNumber: 4,
        title: "Valuation, Account Determination & Invoice Verification",
        hours: "14 Hours",
        topics: [
          "Valuation Class, Account Category Reference, Split Valuation",
          "Automatic Account Determination (OBYC) & MM-FI Integration",
          "Logistics Invoice Verification (MIRO), Credit Memos, Subsequent Debits/Credits",
          "Invoice Block, Release, and GR/IR Clearing (MR11)"
        ]
      },
      {
        moduleNumber: 5,
        title: "Special Procurement & Capstone Project",
        hours: "12 Hours",
        topics: [
          "Subcontracting & Vendor Consignment End-to-End Processes",
          "Stock Transport Order (STO) with and without Delivery (SD-MM Integration)",
          "Live Capstone Project: Enterprise Procurement Setup for Manufacturing Plant",
          "Resume Preparation and Placement Mock Interviews"
        ]
      }
    ],
    faqs: [
      {
        question: "What job roles can I apply for after SAP MM course?",
        answer: "You can apply for roles such as SAP MM Functional Consultant, SAP SCM Analyst, ERP Procurement Lead, and SAP Associate Consultant across manufacturing, IT, retail, and logistics sectors."
      }
    ],
    seo: {
      title: "SAP MM Training in Coimbatore | Materials Management Certification - MiniU",
      metaDesc: "Join SAP MM training in Coimbatore at MiniU. Learn Purchasing, P2P cycle, Inventory Management, and OBYC integration with 100% placement assistance.",
      keywords: "sap mm training coimbatore, sap mm course in coimbatore, sap materials management, best sap mm institute rs puram"
    }
  },

  {
    id: "sap-sd",
    slug: "sap-sd",
    legacyUrl: "/sap_sd.html",
    title: "SAP SD Training in Coimbatore | Sales & Distribution Certification",
    shortTitle: "SAP SD - Sales & Distribution",
    category: "SAP",
    categorySlug: "sap",
    level: "Beginner to Advanced",
    duration: "70 Hours (8 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.8,
    reviewCount: 110,
    studentsEnrolled: 320,
    badge: "Order-to-Cash Specialist",
    imageSmall: "assets/images/miniu/sap/small/sd.jpg",
    imageLarge: "assets/images/miniu/sap/large/sd.jpg",
    shortDesc: "Master SAP Sales & Distribution (SD). Learn Inquiry, Quotation, Sales Order, Shipping, Delivery, Billing, Pricing Condition Techniques, and SD-FI Integration.",
    longDesc: "MiniU's SAP SD training in Coimbatore empowers students to configure and manage the entire Order-to-Cash (O2C) business cycle. The curriculum covers customer master management, pricing conditions, credit management, revenue recognition, and billing integration.",
    salaryRange: "₹4.0 LPA - ₹9.8 LPA",
    targetRoles: ["SAP SD Consultant", "Sales ERP Specialist", "Order Management Consultant", "SAP Functional Analyst"],
    prerequisites: "Graduates in Any Stream (BBA, B.Com, MBA Marketing/Operations, B.E/B.Tech).",
    keyHighlights: [
      "Complete Order-to-Cash (O2C) Cycle Workflow",
      "Condition Technique & Custom Pricing Procedure Setup",
      "Shipping, Picking, Packing, and Post Goods Issue (PGI)",
      "Billing Documents, Credit & Debit Memos, Rebate Agreements",
      "SD-FI and SD-MM Integration Masterclass"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Enterprise Structure & SD Master Data",
        hours: "14 Hours",
        topics: [
          "Sales Organization, Distribution Channel, Division, Sales Area Setup",
          "Customer Master (Business Partner) & Customer-Material Info Records",
          "Plant & Shipping Point Determination Configuration"
        ]
      },
      {
        moduleNumber: 2,
        title: "Order-to-Cash (O2C) Business Processes",
        hours: "16 Hours",
        topics: [
          "Inquiry, Quotation, Standard Sales Order, Rush Order, Cash Sales",
          "Item Categories and Schedule Line Categories Determination",
          "Special Sales Processes: Consignment, Free of Charge, Third-Party Orders"
        ]
      },
      {
        moduleNumber: 3,
        title: "Pricing Procedure & Condition Technique",
        hours: "16 Hours",
        topics: [
          "Condition Types, Access Sequences, Condition Tables, Pricing Procedures",
          "Discounts, Surcharges, Freight Charges, and Tax Calculations",
          "Pricing Controls, Scales, and Free Goods Determination"
        ]
      },
      {
        moduleNumber: 4,
        title: "Shipping, Billing & Revenue Integration (VKOA)",
        hours: "14 Hours",
        topics: [
          "Outbound Delivery, Picking, Packing, and Post Goods Issue (PGI)",
          "Billing Document Creation, Cancellation, and Credit/Debit Notes",
          "Revenue Account Determination (VKOA) & SD-FI Integration"
        ]
      },
      {
        moduleNumber: 5,
        title: "Credit Management, Live Project & Placement",
        hours: "10 Hours",
        topics: [
          "Simple and Automatic Credit Control Configuration",
          "Live Project: Global Export Sales Distribution Setup",
          "Interview Drills, SAP SD Scenarios & Placement Drive"
        ]
      }
    ],
    faqs: [
      {
        question: "Is SAP SD suitable for marketing and sales graduates?",
        answer: "Absolutely! MBA Marketing, BBA, and commerce graduates easily relate to sales order processing, pricing, and billing concepts, making SAP SD an ideal career pathway."
      }
    ],
    seo: {
      title: "SAP SD Course in Coimbatore | Sales & Distribution Certification - MiniU",
      metaDesc: "Master SAP SD in Coimbatore at MiniU. Learn Order-to-Cash (O2C), Pricing Procedures, Shipping, Billing, and VKOA Integration with 100% placement support.",
      keywords: "sap sd training coimbatore, sap sd course in coimbatore, sap sales and distribution, best sap sd institute coimbatore"
    }
  },

  {
    id: "sap-s4-hana",
    slug: "sap-s4-hana",
    legacyUrl: "/sap_hana.html",
    title: "SAP S/4 HANA Training in Coimbatore | Next-Gen ERP Certification",
    shortTitle: "SAP S/4 HANA - Next-Gen ERP",
    category: "SAP",
    categorySlug: "sap",
    level: "Intermediate to Advanced",
    duration: "65 Hours (6-8 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.9,
    reviewCount: 96,
    studentsEnrolled: 290,
    badge: "Next-Gen Technology",
    imageSmall: "assets/images/miniu/sap/small/hana.jpg",
    imageLarge: "assets/images/miniu/sap/large/hana.jpg",
    shortDesc: "Upgrade to SAP S/4 HANA. Learn in-memory computing architecture, Fiori apps, Business Partner concepts, Universal Journal (ACDOCA), and migration strategies.",
    longDesc: "MiniU's SAP S/4 HANA course in Coimbatore equips learners with the latest innovations in SAP's flagship ERP platform. Explore in-memory columnar database concepts, simplified data models, embedded analytics, and SAP Fiori UI.",
    salaryRange: "₹5.5 LPA - ₹14.0 LPA",
    targetRoles: ["SAP S/4 HANA Consultant", "S/4 HANA Migration Specialist", "ERP Solution Architect"],
    prerequisites: "Basic knowledge of any SAP module (ECC) or database/ERP concepts.",
    keyHighlights: [
      "In-Memory Computing Architecture & Columnar Store Deep-Dive",
      "Universal Journal (ACDOCA) & Single Source of Truth",
      "SAP Fiori UX & Role-Based App Configuration",
      "Greenfield vs Brownfield Migration Methodologies"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "SAP S/4 HANA Overview & Architecture",
        hours: "12 Hours",
        topics: [
          "Evolution from R/3, ECC 6.0 to SAP S/4 HANA",
          "In-Memory Column-Oriented Database Fundamentals",
          "Simplified Data Model: Table Reductions & Performance Gains"
        ]
      },
      {
        moduleNumber: 2,
        title: "SAP Fiori Launchpad & User Experience",
        hours: "12 Hours",
        topics: [
          "SAP Fiori Architecture, App Types (Transactional, Analytical, Factsheet)",
          "Fiori Launchpad Configuration and Catalogs/Groups Management",
          "Embedded Analytics & Real-Time KPI Dashboards"
        ]
      },
      {
        moduleNumber: 3,
        title: "Business Partner (BP) Approach & Financial Innovations",
        hours: "14 Hours",
        topics: [
          "Mandatory Business Partner (BP) Setup replacing Vendor/Customer",
          "Universal Journal (Table ACDOCA) Architecture & Simplification",
          "Margin Analysis, Real-Time Consolidation, and Multi-Currency Ledger"
        ]
      },
      {
        moduleNumber: 4,
        title: "S/4 HANA Sourcing, Procurement & Migration Tools",
        hours: "15 Hours",
        topics: [
          "S/4 HANA Sourcing & Procurement Simplifications",
          "Migration Methodology (SAP Activate, Greenfield vs Brownfield)",
          "Readiness Check, Software Update Manager (SUM), and Data Migration Cockpit"
        ]
      },
      {
        moduleNumber: 5,
        title: "Hands-on Project & Certification Guidance",
        hours: "12 Hours",
        topics: [
          "End-to-End Enterprise Scenario Simulation on S/4 HANA Server",
          "SAP S/4 HANA Certification Exam Preparation & Placement Guidance"
        ]
      }
    ],
    faqs: [
      {
        question: "Why should I learn SAP S/4 HANA instead of traditional ECC?",
        answer: "SAP is sunsetting ECC support by 2027/2030, meaning global enterprises are rapidly migrating to S/4 HANA, creating unprecedented demand for certified consultants."
      }
    ],
    seo: {
      title: "SAP S/4 HANA Course in Coimbatore | Certification Training - MiniU",
      metaDesc: "Upgrade your career with SAP S/4 HANA training in Coimbatore at MiniU. Learn in-memory computing, Fiori apps, Universal Journal, and migration with 100% placement support.",
      keywords: "sap s4 hana training coimbatore, sap hana course coimbatore, sap s4 hana certification, best sap training institute rs puram"
    }
  },

  // BUSINESS & DATA COURSES
  {
    id: "business-analytics",
    slug: "business-analytics",
    legacyUrl: "/business_analytics.html",
    title: "Business Analytics Course in Coimbatore | Power BI, SQL, Python & Tableau",
    shortTitle: "Business Analytics & BI",
    category: "Business & Analytics",
    categorySlug: "business",
    level: "Beginner to Advanced",
    duration: "75 Hours (8-10 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.9,
    reviewCount: 155,
    studentsEnrolled: 460,
    badge: "High Career Growth",
    imageSmall: "assets/images/miniu/business/small/analytics.jpg",
    imageLarge: "assets/images/miniu/business/large/analytics.jpg",
    shortDesc: "Master Business Analytics with Advanced Excel, SQL, Power BI, Tableau, and Python. Learn to transform raw data into actionable business intelligence and dashboards.",
    longDesc: "MiniU's Business Analytics program in Coimbatore turns students and professionals into data-driven decision makers. You will master statistical modeling, SQL querying, interactive Power BI & Tableau dashboards, and business problem solving with live industry datasets.",
    salaryRange: "₹4.5 LPA - ₹12.0 LPA",
    targetRoles: ["Business Analyst", "BI Developer", "Data Analyst", "Operations Analyst"],
    prerequisites: "Any graduate (B.E/B.Tech, B.Sc, B.Com, BBA, BCA, MBA). No prior coding required.",
    keyHighlights: [
      "Master Advanced Excel (VLOOKUP, XLOOKUP, Pivot Tables, Power Query)",
      "Relational Database Querying with SQL (PostgreSQL / MySQL)",
      "Interactive BI Dashboards with Power BI & DAX Formulas",
      "Tableau Storytelling & Visual Data Analytics",
      "5+ Industry Capstone Projects (Retail, Healthcare, Finance, E-commerce)",
      "100% Placement Support & Resume Portfolio Building"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Advanced Excel for Business Analytics",
        hours: "15 Hours",
        topics: [
          "Data Cleaning, Formatting, Advanced Formulas (INDEX/MATCH, XLOOKUP)",
          "Pivot Tables, Slicers, Dynamic Charting & Dashboards",
          "Power Query for ETL (Extract, Transform, Load) and What-If Analysis"
        ]
      },
      {
        moduleNumber: 2,
        title: "SQL & Relational Databases for Analytics",
        hours: "18 Hours",
        topics: [
          "SQL Syntax, SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
          "Joins (INNER, LEFT, RIGHT, FULL OUTER) and Subqueries",
          "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG)",
          "Common Table Expressions (CTEs), Views, and Query Optimization"
        ]
      },
      {
        moduleNumber: 3,
        title: "Power BI & Data Modeling with DAX",
        hours: "18 Hours",
        topics: [
          "Power BI Desktop Interface, Data Connectivity & Transformations",
          "Star Schema & Snowflake Data Modeling, Relationships",
          "DAX Measures, Calculated Columns, Time Intelligence Functions",
          "Interactive Report Design, Bookmarks, Drill-Throughs, Power BI Service"
        ]
      },
      {
        moduleNumber: 4,
        title: "Tableau Data Visualization & Storytelling",
        hours: "12 Hours",
        topics: [
          "Tableau Architecture, Data Blending, and Joins",
          "Charts (Bar, Line, Heatmap, Waterfall, Treemap, Scatter)",
          "Calculated Fields, Level of Detail (LOD) Expressions",
          "Building Executive Storyboards & Publishing Dashboards"
        ]
      },
      {
        moduleNumber: 5,
        title: "Business Problem Solving & Capstone Projects",
        hours: "12 Hours",
        topics: [
          "Capstone 1: E-Commerce Customer Churn & Lifetime Value Analysis",
          "Capstone 2: BFSI Loan Default Prediction Dashboard",
          "Resume Preparation, GitHub/Portfolio Deployment & Mock Interviews"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need a mathematics or coding background for Business Analytics?",
        answer: "No. Business Analytics focuses on logical business thinking, data visualization tools (Power BI/Tableau), and SQL querying, which can be easily mastered from scratch."
      }
    ],
    seo: {
      title: "Business Analytics Course in Coimbatore | Power BI & SQL Training - MiniU",
      metaDesc: "Join the top Business Analytics course in Coimbatore at MiniU. Learn Advanced Excel, SQL, Power BI, and Tableau with real-world projects and 100% placement support.",
      keywords: "business analytics course coimbatore, power bi training coimbatore, sql course coimbatore, data analytics institute rs puram, business analyst job placement"
    }
  },

  {
    id: "data-science",
    slug: "data-science",
    legacyUrl: "/data_science.html",
    title: "Data Science & Machine Learning Course in Coimbatore | Python & AI Training",
    shortTitle: "Data Science & Machine Learning",
    category: "Business & Analytics",
    categorySlug: "business",
    level: "Beginner to Advanced",
    duration: "90 Hours (10-12 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.9,
    reviewCount: 172,
    studentsEnrolled: 490,
    badge: "Top Rated Tech Program",
    imageSmall: "assets/images/miniu/business/small/data.jpg",
    imageLarge: "assets/images/miniu/business/large/data.jpg",
    shortDesc: "Master Data Science, Machine Learning, and AI using Python, Pandas, NumPy, Scikit-Learn, TensorFlow, and SQL. Build real-time ML prediction models.",
    longDesc: "MiniU's Data Science course in Coimbatore is designed for graduates and software engineers seeking high-paying AI/ML careers. Learn exploratory data analysis, feature engineering, supervised/unsupervised machine learning algorithms, deep learning basics, and model deployment using Streamlit and Flask.",
    salaryRange: "₹5.0 LPA - ₹15.0 LPA",
    targetRoles: ["Data Scientist", "Machine Learning Engineer", "AI Associate", "Data Analyst"],
    prerequisites: "Basic mathematics/logical inclination. Any engineering, science, or commerce graduate can apply.",
    keyHighlights: [
      "Python for Data Science (NumPy, Pandas, Matplotlib, Seaborn)",
      "Comprehensive Machine Learning Algorithms (Regression, Trees, SVM, Ensembles)",
      "Natural Language Processing (NLP) & Deep Learning Overview",
      "Model Deployment on Cloud with Streamlit & Docker",
      "6 Hands-on Capstone Projects with Real Datasets",
      "100% Placement Support with Tech MNCs in Coimbatore & Bangalore"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Python Programming & Scientific Computing",
        hours: "18 Hours",
        topics: [
          "Python Syntax, Data Structures (Lists, Dicts, Tuples, Sets)",
          "Object-Oriented Programming (OOP) in Python",
          "NumPy: Multi-Dimensional Arrays, Vectorization, Matrix Operations",
          "Pandas: DataFrames, Series, GroupBy, Merging, Missing Value Imputation"
        ]
      },
      {
        moduleNumber: 2,
        title: "Exploratory Data Analysis (EDA) & Statistics",
        hours: "18 Hours",
        topics: [
          "Descriptive & Inferential Statistics, Probability Distributions",
          "Hypothesis Testing (Z-Test, T-Test, ANOVA, Chi-Square)",
          "Data Visualization with Matplotlib, Seaborn & Plotly",
          "Feature Engineering, Outlier Detection, Encoding, and Scaling"
        ]
      },
      {
        moduleNumber: 3,
        title: "Supervised Machine Learning Algorithms",
        hours: "20 Hours",
        topics: [
          "Linear & Polynomial Regression, Ridge, Lasso Regularization",
          "Logistic Regression for Classification & ROC-AUC Curves",
          "Decision Trees, Random Forests, Gradient Boosting (XGBoost, LightGBM)",
          "Support Vector Machines (SVM) & K-Nearest Neighbors (KNN)"
        ]
      },
      {
        moduleNumber: 4,
        title: "Unsupervised Learning, NLP & Deep Learning Intro",
        hours: "18 Hours",
        topics: [
          "K-Means Clustering, Hierarchical Clustering, and PCA (Dimensionality Reduction)",
          "NLP: Text Preprocessing, TF-IDF, Word2Vec, Sentiment Analysis",
          "Artificial Neural Networks (ANN) with Keras / TensorFlow"
        ]
      },
      {
        moduleNumber: 5,
        title: "Model Deployment, Projects & Placement",
        hours: "16 Hours",
        topics: [
          "Building Web Apps with Streamlit & REST APIs with FastAPI/Flask",
          "Deploying ML Models to Cloud Platforms",
          "Capstone: End-to-End Predictive Maintenance / Healthcare Diagnosis System",
          "Portfolio Building, GitHub Showcase & Placement Interviews"
        ]
      }
    ],
    faqs: [
      {
        question: "Can non-programmers succeed in Data Science?",
        answer: "Yes. Our curriculum begins with step-by-step Python programming from scratch before progressing into machine learning mathematics and algorithms."
      }
    ],
    seo: {
      title: "Data Science Course in Coimbatore | Machine Learning Institute - MiniU",
      metaDesc: "Learn Data Science & Machine Learning in Coimbatore at MiniU. Master Python, Pandas, Scikit-Learn, and AI with real-world projects and 100% placement support.",
      keywords: "data science course coimbatore, machine learning training coimbatore, python data science institute rs puram, artificial intelligence training coimbatore"
    }
  },

  // IT & SOFTWARE DEVELOPMENT
  {
    id: "full-stack-web-development",
    slug: "full-stack-web-development",
    legacyUrl: "/full_stack.html",
    title: "Full Stack Web Development Course in Coimbatore | MERN Stack Training",
    shortTitle: "Full Stack Web Development (MERN)",
    category: "IT & Development",
    categorySlug: "dev",
    level: "Beginner to Advanced",
    duration: "90 Hours (10-12 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.9,
    reviewCount: 185,
    studentsEnrolled: 540,
    badge: "Most Popular IT Course",
    imageSmall: "assets/images/miniu/dev/small/full.jpg",
    imageLarge: "assets/images/miniu/dev/large/full.jpg",
    shortDesc: "Become a full stack web developer mastering React, Node.js, Express, MongoDB, JavaScript ES6+, HTML5, CSS3, Tailwind, and REST APIs.",
    longDesc: "MiniU's Full Stack Development program in Coimbatore turns students into production-ready software engineers. You will learn modern frontend development with React, robust backend APIs with Node/Express, NoSQL databases with MongoDB, and cloud deployment with CI/CD.",
    salaryRange: "₹4.2 LPA - ₹12.5 LPA",
    targetRoles: ["Full Stack Developer", "Frontend Engineer", "Node.js Backend Developer", "MERN Stack Specialist"],
    prerequisites: "Any graduate or student eager to build web applications. No prior coding required.",
    keyHighlights: [
      "Modern HTML5, CSS3, Responsive Design & Tailwind CSS",
      "JavaScript ES6+, Asynchronous Programming, Promises, and DOM",
      "React 19 with Hooks, Context API, Redux Toolkit & React Router",
      "Node.js & Express.js RESTful API Architecture & JWT Auth",
      "MongoDB & Mongoose Schema Modeling",
      "4 Full-Stack Live Projects deployed on Vercel / Render"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Frontend Foundations (HTML5, CSS3, Responsive UI)",
        hours: "18 Hours",
        topics: [
          "Semantic HTML5, Accessibility, Forms, Audio/Video Elements",
          "CSS3 Flexbox, Grid, Animations, Transitions, Media Queries",
          "Tailwind CSS & Bootstrap Framework Mastery"
        ]
      },
      {
        moduleNumber: 2,
        title: "JavaScript (ES6+) & Modern Web Concepts",
        hours: "20 Hours",
        topics: [
          "Data Types, Functions, Arrow Functions, Closures, Hoisting",
          "DOM Manipulation, Event Handling, LocalStorage",
          "Asynchronous JS: Fetch API, Promises, Async/Await, Error Handling"
        ]
      },
      {
        moduleNumber: 3,
        title: "React Frontend Architecture",
        hours: "22 Hours",
        topics: [
          "React Components, JSX, Props, and State Management (useState, useEffect)",
          "Custom Hooks, useRef, useMemo, useCallback optimizations",
          "Global State Management with Redux Toolkit / Context API",
          "Client-Side Routing with React Router DOM 7"
        ]
      },
      {
        moduleNumber: 4,
        title: "Backend Development with Node.js & Express.js",
        hours: "18 Hours",
        topics: [
          "Node.js Architecture, Event Loop, File System (fs), Modules",
          "Express.js Server, Middleware, Routing, CORS, and Status Codes",
          "REST API Design, JWT Authentication, Password Hashing (bcrypt)"
        ]
      },
      {
        moduleNumber: 5,
        title: "MongoDB Database, Deployment & Placement",
        hours: "12 Hours",
        topics: [
          "MongoDB CRUD Operations, Aggregations, Mongoose Schemas",
          "Full Stack Project: Real-Time E-Commerce / EdTech Portal",
          "Git, GitHub, CI/CD, Deployment on Vercel/Render, Mock Interviews"
        ]
      }
    ],
    faqs: [
      {
        question: "How soon can I get a job after completing MERN stack training?",
        answer: "Most MiniU full-stack graduates receive placement interview calls within 3 to 6 weeks of project completion and portfolio review."
      }
    ],
    seo: {
      title: "Full Stack Developer Course in Coimbatore | MERN Stack Training - MiniU",
      metaDesc: "Master Full Stack Web Development in Coimbatore at MiniU. Learn React, Node.js, Express, MongoDB, and JavaScript with 100% placement guarantee.",
      keywords: "full stack web development coimbatore, mern stack training coimbatore, react js course coimbatore, node js training institute rs puram, web developer placement"
    }
  },

  {
    id: "devops",
    slug: "devops",
    legacyUrl: "/devops.html",
    title: "DevOps Course in Coimbatore | Docker, Kubernetes, CI/CD & AWS",
    shortTitle: "DevOps & Cloud Automation",
    category: "IT & Development",
    categorySlug: "dev",
    level: "Intermediate to Advanced",
    duration: "70 Hours (8 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.8,
    reviewCount: 98,
    studentsEnrolled: 270,
    badge: "Highest Industry Demand",
    imageSmall: "assets/images/miniu/dev/small/devops.jpg",
    imageLarge: "assets/images/miniu/dev/large/devops.jpg",
    shortDesc: "Master modern DevOps practices, Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, and AWS Cloud CI/CD automation.",
    longDesc: "MiniU's DevOps training in Coimbatore trains system admins and developers to automate software delivery pipelines. Gain practical mastery of infrastructure as code (IaC), container orchestration with Kubernetes, and enterprise CI/CD workflows.",
    salaryRange: "₹5.5 LPA - ₹14.0 LPA",
    targetRoles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer (SRE)", "Build & Release Engineer"],
    prerequisites: "Basic understanding of Linux commands and programming concepts.",
    keyHighlights: [
      "Linux Administration & Shell Scripting",
      "Continuous Integration & Delivery with Jenkins & GitHub Actions",
      "Containerization with Docker & Container Security",
      "Orchestration with Kubernetes (Pods, Deployments, Ingress)",
      "Infrastructure as Code (IaC) with Terraform & Ansible",
      "100% Placement Assistance"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Linux Administration & Git Version Control",
        hours: "14 Hours",
        topics: [
          "Linux File Systems, Permissions, User Management, Networking",
          "Shell Scripting & Process Management",
          "Git Branching, Merging, Rebase, and GitHub Collaboration"
        ]
      },
      {
        moduleNumber: 2,
        title: "Continuous Integration with Jenkins & GitHub Actions",
        hours: "14 Hours",
        topics: [
          "Jenkins Architecture, Pipelines (Declarative & Scripted)",
          "Automated Testing, Build Triggers, Webhooks",
          "GitHub Actions Workflows and CI/CD Automation"
        ]
      },
      {
        moduleNumber: 3,
        title: "Docker Containers & Containerization",
        hours: "14 Hours",
        topics: [
          "Docker Architecture, Images, Containers, Dockerfile Best Practices",
          "Docker Networking, Volumes, and Multi-Container Docker Compose",
          "Docker Hub Registry and Image Optimization"
        ]
      },
      {
        moduleNumber: 4,
        title: "Kubernetes Cluster Orchestration",
        hours: "16 Hours",
        topics: [
          "Kubernetes Architecture (Control Plane, Worker Nodes)",
          "Pods, Deployments, ReplicaSets, Services (ClusterIP, NodePort, LoadBalancer)",
          "ConfigMaps, Secrets, Persistent Volumes, and Helm Charts"
        ]
      },
      {
        moduleNumber: 5,
        title: "Terraform, Ansible & Capstone Project",
        hours: "12 Hours",
        topics: [
          "Infrastructure as Code (IaC) with Terraform on AWS",
          "Configuration Management with Ansible Playbooks",
          "Live Project: Automated End-to-End Microservice Deployment Pipeline",
          "Mock Technical Interviews & Placement Assistance"
        ]
      }
    ],
    faqs: [
      {
        question: "Is DevOps suitable for freshers?",
        answer: "Yes, candidates who build strong hands-on skills in Linux, Docker, and CI/CD pipelines stand out in entry-level Cloud & DevOps Engineer roles."
      }
    ],
    seo: {
      title: "DevOps Training in Coimbatore | Docker, Kubernetes & AWS - MiniU",
      metaDesc: "Enroll in DevOps training in Coimbatore at MiniU. Learn Linux, Docker, Kubernetes, Jenkins, Terraform, and AWS with 100% placement assistance.",
      keywords: "devops training coimbatore, devops course in coimbatore, docker kubernetes institute rs puram, cloud automation training coimbatore"
    }
  },

  {
    id: "uiux-design",
    slug: "uiux-design",
    legacyUrl: "/uiux.html",
    title: "UI/UX Design Course in Coimbatore | Figma, User Research & Design Systems",
    shortTitle: "UI/UX Design Masterclass",
    category: "Designing",
    categorySlug: "designing",
    level: "Beginner to Advanced",
    duration: "65 Hours (8 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.9,
    reviewCount: 124,
    studentsEnrolled: 350,
    badge: "Creative Career",
    imageSmall: "assets/images/miniu/design/small/ui.jpg",
    imageLarge: "assets/images/miniu/design/large/ui.jpg",
    shortDesc: "Master UI/UX Design from user research, wireframing, and Figma prototyping to complete design systems and mobile app interfaces.",
    longDesc: "MiniU's UI/UX Designing course in Coimbatore empowers creative minds to craft intuitive digital experiences. Learn design thinking, wireframing, high-fidelity Figma prototypes, micro-interactions, usability testing, and Behance/Dribbble portfolio creation.",
    salaryRange: "₹4.0 LPA - ₹10.5 LPA",
    targetRoles: ["UI/UX Designer", "Product Designer", "Interaction Designer", "Visual Designer"],
    prerequisites: "Creativity and passion for design. No prior technical or drawing experience required.",
    keyHighlights: [
      "End-to-End Design Thinking & User Research",
      "Low-Fidelity & High-Fidelity Wireframing",
      "Complete Figma Mastery (Auto-Layout, Components, Variants)",
      "Interactive Prototyping & Micro-Interactions",
      "3 Live Mobile & Web Case Studies for Portfolio",
      "100% Placement Support"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Introduction to UI/UX & Design Thinking",
        hours: "12 Hours",
        topics: [
          "Differences between UI and UX, Design Thinking Process",
          "User Research, User Interviews, Persona Creation",
          "Empathy Maps, User Journey Maps, Information Architecture"
        ]
      },
      {
        moduleNumber: 2,
        title: "Wireframing & Visual Design Principles",
        hours: "14 Hours",
        topics: [
          "Low-Fidelity Paper & Digital Wireframes",
          "Typography, Color Theory, 8pt Grid System, Visual Hierarchy",
          "Gestalt Principles and Accessibility (WCAG)"
        ]
      },
      {
        moduleNumber: 3,
        title: "Figma Mastery & Component Systems",
        hours: "16 Hours",
        topics: [
          "Figma Interface, Vectors, Pen Tool, Frames vs Groups",
          "Auto-Layout Deep-Dive, Constraints, Responsive Design",
          "Master Components, Variants, Component Properties, Design Tokens"
        ]
      },
      {
        moduleNumber: 4,
        title: "Interactive Prototyping & Usability Testing",
        hours: "12 Hours",
        topics: [
          "Smart Animate, Micro-Interactions, Scroll Animations",
          "Usability Testing Methodologies & Feedback Iteration",
          "Developer Handoff Best Practices (Inspect, CSS specs)"
        ]
      },
      {
        moduleNumber: 5,
        title: "Case Study Portfolio & Placement",
        hours: "11 Hours",
        topics: [
          "Building Complete Behance & Notion UX Case Studies",
          "Case Study 1: FinTech Mobile App Redesign",
          "Case Study 2: Healthcare SaaS Dashboard",
          "Mock Portfolio Reviews & Placement Assistance"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need coding to become a UI/UX designer?",
        answer: "No! UI/UX design focuses on user research, wireframing, aesthetics, and Figma prototyping. No programming knowledge is required."
      }
    ],
    seo: {
      title: "UI UX Design Course in Coimbatore | Figma Training - MiniU",
      metaDesc: "Master UI/UX Design in Coimbatore at MiniU. Learn Figma, User Research, Wireframing, Prototyping, and Design Systems with 100% placement support.",
      keywords: "ui ux design course coimbatore, figma training coimbatore, product design institute rs puram, learn ui ux design coimbatore"
    }
  },

  {
    id: "digital-marketing",
    slug: "digital-marketing",
    legacyUrl: "/digital_marketing.html",
    title: "Digital Marketing Course in Coimbatore | SEO, Google Ads, Meta Ads & AI",
    shortTitle: "Digital Marketing & Growth",
    category: "Marketing",
    categorySlug: "marketing",
    level: "Beginner to Advanced",
    duration: "60 Hours (6-8 Weeks)",
    mode: "Classroom (Coimbatore) / Live Online",
    rating: 4.8,
    reviewCount: 115,
    studentsEnrolled: 310,
    badge: "High ROI Career",
    imageSmall: "assets/images/miniu/marketing/small/digital.jpg",
    imageLarge: "assets/images/miniu/marketing/large/digital.jpg",
    shortDesc: "Master Search Engine Optimization (SEO), Google Search Ads, Meta/Facebook Ads, Content Marketing, and AI Marketing tools.",
    longDesc: "MiniU's Digital Marketing course in Coimbatore teaches performance marketing and organic growth strategies with live budget execution. Master on-page/technical SEO, Google Analytics (GA4), and social media ad funnels.",
    salaryRange: "₹3.8 LPA - ₹9.0 LPA",
    targetRoles: ["Digital Marketing Executive", "SEO Specialist", "Performance Marketing Manager", "Social Media Strategist"],
    prerequisites: "Any graduate or business owner.",
    keyHighlights: [
      "Comprehensive On-Page, Off-Page & Technical SEO",
      "Google Ads (Search, Display, Video, Shopping Campaigns)",
      "Meta Ads (Facebook & Instagram Lead Generation Funnels)",
      "Google Analytics 4 (GA4) & Google Tag Manager (GTM)",
      "Live Budget Campaign Execution & 100% Placement Support"
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: "Search Engine Optimization (SEO) Masterclass",
        hours: "16 Hours",
        topics: [
          "Keyword Research (Ahrefs, Semrush, Google Keyword Planner)",
          "On-Page SEO, Content Optimization, Schema Markup",
          "Technical SEO, Site Speed, Core Web Vitals, Crawling & Indexing",
          "Off-Page Link Building Strategies & Local SEO for Business"
        ]
      },
      {
        moduleNumber: 2,
        title: "Google Ads & Pay-Per-Click (PPC) Advertising",
        hours: "14 Hours",
        topics: [
          "Google Ads Structure, Bidding Strategies (Target CPA, ROAS, Maximize Clicks)",
          "Search Ads, Ad Copywriting, Quality Score Optimization",
          "Performance Max (PMax), Display & YouTube Video Ads"
        ]
      },
      {
        moduleNumber: 3,
        title: "Social Media Marketing & Meta Ads",
        hours: "14 Hours",
        topics: [
          "Facebook & Instagram Ad Manager Setup, Pixel Configuration",
          "Custom & Lookalike Audiences, Funnel Retargeting",
          "LinkedIn Ads for B2B Lead Generation"
        ]
      },
      {
        moduleNumber: 4,
        title: "Analytics, Email Marketing & Capstone Campaign",
        hours: "16 Hours",
        topics: [
          "Google Analytics 4 (GA4) Event Tracking & Conversion Funnels",
          "Email Marketing Automation (Mailchimp, Brevo)",
          "Live Client Campaign Project, Portfolio & Placement Drills"
        ]
      }
    ],
    faqs: [
      {
        question: "Do students get to run live ad campaigns during training?",
        answer: "Yes, students practice with live ad budgets on Google Ads and Meta platforms to gain real practical optimization experience."
      }
    ],
    seo: {
      title: "Digital Marketing Course in Coimbatore | SEO & Google Ads - MiniU",
      metaDesc: "Join the top Digital Marketing course in Coimbatore at MiniU. Master SEO, Google Ads, Meta Ads, GA4, and Content Marketing with 100% placement support.",
      keywords: "digital marketing course coimbatore, seo training institute coimbatore, google ads certification rs puram, performance marketing course"
    }
  }
]

export const CATEGORIES = [
  {
    id: "all",
    name: "All Courses",
    slug: "all",
    count: 20
  },
  {
    id: "sap",
    name: "SAP Modules",
    slug: "sap",
    count: 10,
    icon: "fa-light fa-database",
    desc: "Industry-leading SAP training in ABAP, FICO, MM, SD, S/4 HANA with real-time server access."
  },
  {
    id: "business",
    name: "Business & Analytics",
    slug: "business",
    count: 3,
    icon: "fa-light fa-chart-mixed",
    desc: "Transform data into actionable business intelligence with Power BI, Tableau, SQL, and Python."
  },
  {
    id: "finance",
    name: "Finance & Accounts",
    slug: "finance",
    count: 4,
    icon: "fa-light fa-coins",
    desc: "Comprehensive accounting, Corporate Finance, Tally ERP, and Taxation programs."
  },
  {
    id: "dev",
    name: "IT & Development",
    slug: "dev",
    count: 5,
    icon: "fa-light fa-code",
    desc: "Full Stack Web Development, DevOps, Cloud Computing, and Software QA Testing."
  },
  {
    id: "designing",
    name: "Design & Marketing",
    slug: "designing",
    count: 3,
    icon: "fa-light fa-pen-nib",
    desc: "Creative UI/UX design, Graphic design, and High-converting Performance Marketing."
  }
]

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  tools: string[];
  image: string;
  duration: string;
  industry: string;
}

export const projects: Project[] = [
  {
    id: "crm-migration",
    title: "Enterprise CRM Migration & Process Redesign",
    category: "Digital Transformation",
    description:
      "Led the end-to-end business analysis for migrating a 500-user Salesforce CRM from legacy on-premise infrastructure to a cloud-native architecture, redesigning 40+ business processes along the way.",
    challenge:
      "The existing CRM had accumulated 8 years of technical debt, with fragmented data silos across 6 departments and manual workarounds costing the sales team 12+ hours per week.",
    solution:
      "Conducted 60+ stakeholder interviews, mapped 40 AS-IS processes using BPMN 2.0, identified 18 critical pain points, and designed TO-BE workflows that reduced process steps by 35%. Authored 120-page BRD and facilitated 3 rounds of UAT.",
    outcomes: [
      "35% reduction in average deal cycle time",
      "12 hours/week saved per sales rep through automation",
      "$2.4M annual cost savings identified",
      "98% data migration accuracy across 1.2M records",
      "Zero critical defects at go-live",
    ],
    tools: ["Salesforce", "JIRA", "Confluence", "Miro", "SQL", "Tableau"],
    image: "https://miro.medium.com/1*cBlIsOgV1TqWilGTPR--Mw.jpeg",
    duration: "14 months",
    industry: "Financial Services",
  },
  {
    id: "supply-chain-analytics",
    title: "Supply Chain Analytics Dashboard",
    category: "Data & Analytics",
    description:
      "Defined requirements and validated a real-time supply chain analytics platform that consolidated data from 12 ERP systems into a single Tableau dashboard, enabling executive-level decision-making.",
    challenge:
      "Supply chain leadership had no unified view of inventory, logistics, and supplier performance. Decisions were made on week-old Excel reports, leading to $800K in excess inventory annually.",
    solution:
      "Facilitated discovery workshops with 8 business units, created 45 user stories with detailed acceptance criteria, built data dictionary for 200+ KPIs, and coordinated with data engineering team through 4 sprint cycles.",
    outcomes: [
      "$800K reduction in excess inventory in Year 1",
      "Real-time visibility across 12 integrated systems",
      "Decision latency reduced from 7 days to 4 hours",
      "Adopted by 150+ users across 3 continents",
      "NPS score of 72 from end-user survey",
    ],
    tools: ["Tableau", "SQL", "Power BI", "Azure DevOps", "Confluence", "Excel"],
    image: "https://media.licdn.com/dms/image/v2/D5612AQE4XzAu0Y2tWQ/article-cover_image-shrink_720_1280/B56ZVgjhyiGsAI-/0/1741081681661?e=2147483647&v=beta&t=l7yiUxHBHypEYWH5aTKsQw5_jW1omezS_-QbTwehp2k",
    duration: "8 months",
    industry: "Manufacturing",
  },
  {
    id: "digital-onboarding",
    title: "Customer Digital Onboarding Transformation",
    category: "Process Improvement",
    description:
      "Spearheaded the business analysis for redesigning the end-to-end customer onboarding journey for a retail bank, reducing onboarding time from 5 days to under 2 hours.",
    challenge:
      "The paper-based onboarding process required customers to visit a branch 3 times, submit 12 documents, and wait up to 5 business days. Customer drop-off rate was 34% during onboarding.",
    solution:
      "Conducted customer journey mapping sessions, analyzed 6 months of drop-off data, defined 80 functional requirements, created wireframes in Figma, and managed a cross-functional team of 15 across IT, compliance, and operations.",
    outcomes: [
      "Onboarding time reduced from 5 days to 90 minutes",
      "Customer drop-off rate decreased from 34% to 8%",
      "Branch visit requirement eliminated entirely",
      "Compliance approval achieved in first review cycle",
      "15,000+ customers onboarded in first quarter post-launch",
    ],
    tools: ["Figma", "JIRA", "Miro", "SQL", "Confluence", "Lucidchart"],
    image: "https://www.firstware.com/wp-content/uploads/2021/05/Project-Successful-implementation-of-self-service-portal.png",
    duration: "10 months",
    industry: "Banking & Finance",
  },
  {
    id: "hr-self-service",
    title: "HR Self-Service Portal Implementation",
    category: "Systems Implementation",
    description:
      "Acted as lead BA for the implementation of a ServiceNow HR Service Delivery module, enabling 3,200 employees to self-serve 85% of HR requests without agent intervention.",
    challenge:
      "The HR helpdesk was handling 1,800+ tickets per month, with 70% being repetitive requests (payslips, leave balances, policy documents). Average resolution time was 3.2 days.",
    solution:
      "Ran 20+ workshops to catalog 150 HR service types, prioritized top 40 by volume and complexity, authored functional specs for each, and created a knowledge base taxonomy of 300+ articles.",
    outcomes: [
      "85% of HR requests now fully self-served",
      "Ticket volume reduced by 68% in 6 months",
      "Average resolution time dropped from 3.2 days to 4 hours",
      "HR team capacity freed up for strategic initiatives",
      "Employee satisfaction score improved from 3.1 to 4.6/5",
    ],
    tools: ["ServiceNow", "JIRA", "Confluence", "Excel", "Power BI"],
    image: "https://www.konfirmity.com/images/blog/gdpr-gap-assessment-guide/step-by-step-gap-assessment.webp",
    duration: "6 months",
    industry: "Technology",
  },
  {
    id: "regulatory-compliance",
    title: "GDPR Compliance Gap Analysis & Remediation",
    category: "Compliance & Risk",
    description:
      "Conducted a comprehensive GDPR compliance gap analysis across 14 business units, identified 47 compliance gaps, and managed the remediation roadmap to achieve full compliance ahead of regulatory deadline.",
    challenge:
      "With 6 months to the GDPR enforcement deadline, the organization had no centralized view of personal data flows, no formal consent management process, and inconsistent data retention policies.",
    solution:
      "Mapped 200+ data flows across all business units, conducted risk assessments for each gap, authored 47 remediation briefs, and tracked progress through a custom JIRA compliance dashboard updated weekly for the DPO and board.",
    outcomes: [
      "Full GDPR compliance achieved 3 weeks ahead of deadline",
      "47 compliance gaps identified and remediated",
      "200+ data flows documented in central register",
      "Zero regulatory findings in subsequent audit",
      "Compliance framework adopted as group-wide standard",
    ],
    tools: ["JIRA", "Confluence", "Excel", "Lucidchart", "SharePoint"],
    image: "https://i0.wp.com/theburndown.com/wp-content/uploads/2023/07/Transformation-Framework-3-1.png?fit=1200%2C388&ssl=1",
    duration: "5 months",
    industry: "Retail",
  },
  {
    id: "agile-transformation",
    title: "Agile Transformation — Product Backlog Overhaul",
    category: "Agile & Delivery",
    description:
      "Partnered with the Head of Product to restructure a 600-item backlog for a SaaS platform, introducing epics, themes, and story mapping to align development with strategic business objectives.",
    challenge:
      "The product backlog was a flat list of 600 ungroomed tickets with no prioritization framework, causing sprint planning to take 6+ hours and frequent mid-sprint scope changes that derailed delivery.",
    solution:
      "Facilitated a 3-day story mapping workshop with product, engineering, and business stakeholders. Introduced a 3-tier backlog structure (themes → epics → stories), defined a WSJF prioritization model, and coached the team on writing testable acceptance criteria.",
    outcomes: [
      "Sprint planning time reduced from 6 hours to 90 minutes",
      "Mid-sprint scope changes reduced by 80%",
      "Backlog groomed from 600 to 120 actionable stories",
      "Team velocity increased by 40% over 3 sprints",
      "Stakeholder confidence in roadmap increased significantly",
    ],
    tools: ["JIRA", "Confluence", "Miro", "Azure DevOps"],
    image: "https://www.yodiz.com/blog/wp-content/uploads/2016/05/product-backlog-vs-sprint-backlog-agile-methodology.jpg",
    duration: "3 months",
    industry: "SaaS / Technology",
  },
];

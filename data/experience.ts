export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Business Analyst",
    company: "Meridian Financial Group",
    location: "New York, NY",
    startDate: "Mar 2022",
    endDate: "Present",
    current: true,
    description:
      "Lead BA on the Digital Transformation Office, driving strategic initiatives across retail banking, wealth management, and insurance divisions. Manage a portfolio of 4–6 concurrent projects with budgets up to $5M.",
    achievements: [
      "Delivered CRM migration project 2 weeks ahead of schedule, saving $180K in contractor costs",
      "Established BA Center of Excellence, standardizing templates and processes across 12 BAs",
      "Mentored 3 junior BAs, two of whom were promoted within 18 months",
      "Achieved CBAP certification and introduced BABOK v3 practices organization-wide",
      "Reduced requirements rework rate from 28% to 6% through improved elicitation techniques",
    ],
    technologies: ["Salesforce", "JIRA", "Confluence", "Tableau", "SQL", "Miro"],
  },
  {
    id: "exp-2",
    role: "Business Analyst",
    company: "Nexus Technology Solutions",
    location: "Boston, MA",
    startDate: "Jun 2019",
    endDate: "Feb 2022",
    current: false,
    description:
      "Embedded BA within Agile delivery teams for a B2B SaaS platform serving 200+ enterprise clients. Worked closely with Product Managers, UX designers, and engineering leads to translate business needs into actionable product requirements.",
    achievements: [
      "Authored 300+ user stories across 8 product epics, maintaining a groomed backlog for 4 scrum teams",
      "Facilitated quarterly roadmap planning sessions with C-suite stakeholders",
      "Reduced average sprint planning duration by 55% through structured backlog refinement",
      "Led discovery for a new analytics module that became the #1 requested feature by clients",
      "Received 'Employee of the Quarter' award twice for delivery excellence",
    ],
    technologies: ["Azure DevOps", "JIRA", "Figma", "SQL", "Power BI", "Confluence"],
  },
  {
    id: "exp-3",
    role: "Junior Business Analyst",
    company: "Brightpath Consulting",
    location: "Chicago, IL",
    startDate: "Aug 2017",
    endDate: "May 2019",
    current: false,
    description:
      "Supported senior BAs on enterprise consulting engagements across healthcare, retail, and logistics sectors. Gained broad exposure to requirements elicitation, process modeling, and stakeholder communication.",
    achievements: [
      "Contributed to 6 successful project deliveries across 3 industry verticals",
      "Created 40+ BPMN process diagrams for a healthcare workflow redesign project",
      "Developed proficiency in SQL for data validation and ad-hoc reporting",
      "Supported UAT coordination for a $3M ERP implementation with 200 test cases",
      "Earned Agile Certified Practitioner (PMI-ACP) certification",
    ],
    technologies: ["JIRA", "Lucidchart", "SQL", "Excel", "SharePoint", "Visio"],
  },
  {
    id: "exp-4",
    role: "Business Analyst Intern",
    company: "DataBridge Analytics",
    location: "Chicago, IL",
    startDate: "May 2016",
    endDate: "Jul 2017",
    current: false,
    description:
      "Supported the analytics team in delivering data-driven insights for retail and CPG clients. Assisted with data collection, report building, and stakeholder presentations.",
    achievements: [
      "Built automated Excel dashboards that reduced weekly reporting time by 4 hours",
      "Assisted in requirements gathering for a client-facing reporting portal",
      "Presented findings to client stakeholders in 5 quarterly business reviews",
      "Converted to full-time role offer upon graduation",
    ],
    technologies: ["Excel", "SQL", "Tableau", "PowerPoint"],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
  gpa?: string;
  honors?: string;
  relevantCourses: string[];
}

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Master of Science in Information Systems",
    institution: "Boston University",
    location: "Boston, MA",
    graduationYear: "2019",
    gpa: "3.9 / 4.0",
    honors: "Dean's List — All Semesters",
    relevantCourses: [
      "Enterprise Systems Analysis",
      "Data Management & Analytics",
      "IT Project Management",
      "Business Intelligence",
      "Systems Design & Architecture",
    ],
  },
  {
    id: "edu-2",
    degree: "Bachelor of Business Administration — Management Information Systems",
    institution: "University of Illinois at Chicago",
    location: "Chicago, IL",
    graduationYear: "2017",
    gpa: "3.7 / 4.0",
    honors: "Magna Cum Laude",
    relevantCourses: [
      "Systems Analysis & Design",
      "Database Management",
      "Operations Management",
      "Business Statistics",
      "Organizational Behavior",
    ],
  },
];

export const certifications = [
  {
    name: "Certified Business Analysis Professional (CBAP)",
    issuer: "IIBA",
    year: "2023",
    badge: "🏆",
  },
  {
    name: "PMI Agile Certified Practitioner (PMI-ACP)",
    issuer: "PMI",
    year: "2019",
    badge: "🎯",
  },
  {
    name: "Certified SAFe 5 Agilist",
    issuer: "Scaled Agile",
    year: "2022",
    badge: "⚡",
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau / Salesforce",
    year: "2021",
    badge: "📊",
  },
  {
    name: "Six Sigma Green Belt",
    issuer: "ASQ",
    year: "2020",
    badge: "🔬",
  },
];

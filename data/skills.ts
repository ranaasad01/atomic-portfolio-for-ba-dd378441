export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Analysis & Strategy",
    icon: "📊",
    skills: [
      "Requirements Gathering",
      "Gap Analysis",
      "Process Mapping",
      "Business Case Development",
      "Stakeholder Management",
      "User Story Writing",
      "Acceptance Criteria",
      "Root Cause Analysis",
    ],
  },
  {
    title: "Data & Reporting",
    icon: "📈",
    skills: [
      "SQL",
      "Tableau",
      "Power BI",
      "Excel (Advanced)",
      "Data Modeling",
      "KPI Dashboards",
      "A/B Testing",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      "JIRA",
      "Confluence",
      "Miro",
      "Lucidchart",
      "Salesforce",
      "ServiceNow",
      "Microsoft Azure DevOps",
      "Figma (Wireframing)",
    ],
  },
  {
    title: "Methodologies",
    icon: "⚙️",
    skills: [
      "Agile / Scrum",
      "Waterfall",
      "SAFe Framework",
      "BPMN 2.0",
      "UML Diagrams",
      "Six Sigma (Green Belt)",
      "Design Thinking",
      "Change Management",
    ],
  },
];

export const proficiencySkills: Skill[] = [
  { name: "SQL", level: 90, category: "Data" },
  { name: "Tableau", level: 85, category: "Data" },
  { name: "Power BI", level: 80, category: "Data" },
  { name: "JIRA", level: 95, category: "Tools" },
  { name: "Confluence", level: 92, category: "Tools" },
  { name: "Requirements Gathering", level: 97, category: "Analysis" },
  { name: "Agile / Scrum", level: 93, category: "Methodology" },
  { name: "Stakeholder Management", level: 95, category: "Analysis" },
  { name: "Process Mapping", level: 88, category: "Analysis" },
  { name: "Excel (Advanced)", level: 90, category: "Data" },
];

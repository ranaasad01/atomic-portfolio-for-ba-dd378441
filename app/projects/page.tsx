export const dynamic = "force-dynamic";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

export const metadata = {
  title: "Projects & Case Studies — Alexandra Blake",
  description:
    "Explore Alexandra Blake's BA case studies spanning CRM migration, supply chain analytics, digital onboarding, and more.",
};

const stats = [
  { icon: Briefcase, value: "30+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "$10M+", label: "Business Value Generated" },
  { icon: Users, value: "500+", label: "Stakeholders Managed" },
  { icon: Award, value: "0", label: "Critical Go-Live Defects" },
];

const categories = [
  "All",
  "Digital Transformation",
  "Data & Analytics",
  "Process Improvement",
  "Systems Implementation",
  "Compliance & Risk",
  "Agile & Delivery",
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary-700/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
            Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-5">
            Projects &amp; Case Studies
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A deep-dive into the BA work that has driven real business outcomes — from enterprise CRM migrations to GDPR compliance programs and Agile transformations.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-slate-900/60 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon size={20} className="text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-slate-50">{stat.value}</div>
                <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter + Grid */}
      <SectionWrapper>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
                (i === 0
                  ? "bg-primary-600 text-white"
                  : "bg-slate-800/60 border border-slate-700/40 text-slate-400 hover:text-slate-200 hover:border-slate-600")
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* BA Approach Section */}
      <SectionWrapper className="bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-50 mb-4">My BA Approach</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every project follows a structured, outcome-focused methodology that ensures alignment from discovery through delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discover",
              description:
                "Stakeholder interviews, workshops, and document analysis to understand the current state, pain points, and strategic objectives.",
            },
            {
              step: "02",
              title: "Define",
              description:
                "Gap analysis, process mapping, and requirements elicitation to articulate the future state and scope of change.",
            },
            {
              step: "03",
              title: "Design",
              description:
                "User stories, acceptance criteria, wireframes, and data models that give development teams everything they need to build.",
            },
            {
              step: "04",
              title: "Deliver",
              description:
                "UAT coordination, change management support, and post-launch measurement to ensure adoption and realized benefits.",
            },
          ].map((phase) => (
            <div
              key={phase.step}
              className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 hover:border-primary-700/30 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-900/80 mb-3">{phase.step}</div>
              <h3 className="text-slate-200 font-semibold text-base mb-2">{phase.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

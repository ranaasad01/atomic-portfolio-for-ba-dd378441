"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { skillCategories, proficiencySkills } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
          Skills &amp; Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
          Tools, Techniques &amp; Technologies
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A comprehensive toolkit built over 7+ years of hands-on BA work across enterprise, SaaS, and consulting environments.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 hover:border-primary-700/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-2xl mb-3">{category.icon}</div>
            <h3 className="text-slate-200 font-semibold mb-4 text-sm">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Proficiency Bars */}
      <div className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-8">
        <h3 className="text-slate-200 font-semibold text-lg mb-8 text-center">
          Key Proficiency Levels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {proficiencySkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                <span className="text-primary-400 text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-1000"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications strip */}
      <div className="mt-12 text-center">
        <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider font-medium">
          Certifications &amp; Credentials
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "CBAP (IIBA)",
            "PMI-ACP",
            "SAFe 5 Agilist",
            "Tableau Desktop Specialist",
            "Six Sigma Green Belt",
          ].map((cert) => (
            <span
              key={cert}
              className="px-4 py-2 bg-slate-800/60 border border-slate-700/40 rounded-full text-slate-300 text-sm font-medium"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

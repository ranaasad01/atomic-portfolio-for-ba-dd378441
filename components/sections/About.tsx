"use client";

import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import SectionWrapper from "@/components/ui/SectionWrapper";

const highlights = [
  {
    icon: Award,
    title: "CBAP Certified",
    description: "Certified Business Analysis Professional — the gold standard in BA credentials, issued by IIBA.",
  },
  {
    icon: Users,
    title: "Stakeholder Champion",
    description: "Proven track record of aligning C-suite executives, technical teams, and end users around shared goals.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Driven",
    description: "Every project I touch is measured by business outcomes — not just delivery milestones.",
  },
];

const values = [
  "Requirements elicitation & documentation",
  "Cross-functional team leadership",
  "Data-driven decision making",
  "Agile & Scrum facilitation",
  "Process optimization & redesign",
  "Change management & adoption",
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-slate-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image + decorative elements */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80"
              alt="Alexandra working on business analysis"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>

          {/* Floating stats card */}
          <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700/50 rounded-2xl p-5 shadow-xl max-w-[200px]">
            <div className="text-3xl font-bold text-primary-400 mb-1">7+</div>
            <div className="text-slate-300 text-sm font-medium">Years of BA Experience</div>
            <div className="text-slate-500 text-xs mt-1">Across 3 industries</div>
          </div>

          {/* Decorative dot grid */}
          <div
            className="absolute -top-4 -left-4 w-24 h-24 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
            About Me
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6 leading-tight">
            Turning Business Complexity Into{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Clarity &amp; Action
            </span>
          </h2>

          <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
            <p>
              I&apos;m a Senior Business Analyst with 7+ years of experience helping organizations navigate digital transformation, optimize processes, and make better decisions with data. My work sits at the intersection of strategy, technology, and people.
            </p>
            <p>
              I specialize in translating ambiguous business needs into precise, actionable requirements that development teams can build from and stakeholders can trust. Whether I&apos;m facilitating a discovery workshop, mapping a complex process, or analyzing data to uncover root causes — I bring structure, curiosity, and a relentless focus on outcomes.
            </p>
            <p>
              Currently at Meridian Financial Group, I lead the BA practice for the Digital Transformation Office, managing a portfolio of strategic initiatives across retail banking, wealth management, and insurance.
            </p>
          </div>

          {/* Core competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle size={15} className="text-primary-500 flex-shrink-0" />
                {value}
              </div>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-4"
              >
                <item.icon size={20} className="text-primary-400 mb-2" />
                <div className="text-slate-200 text-sm font-semibold mb-1">{item.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
export const dynamic = "force-dynamic";
import Timeline from "@/components/sections/Timeline";
import Education from "@/components/sections/Education";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Download, Briefcase, GraduationCap } from 'lucide-react';

export const metadata = {
  title: "Experience & Education — Alexandra Blake",
  description:
    "Alexandra Blake's professional work history, education, and certifications as a Senior Business Analyst.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary-700/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
            Career Journey
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-5">
            Experience &amp; Education
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            7+ years of progressive BA experience across financial services, SaaS, and enterprise consulting — from junior analyst to leading a BA Center of Excellence.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-primary-900/30"
          >
            <Download size={16} />
            Download Full Resume (PDF)
          </a>
        </div>
      </section>

      {/* Career Highlights */}
      <div className="bg-slate-900/60 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "7+", label: "Years Experience" },
              { value: "3", label: "Industries" },
              { value: "4", label: "Companies" },
              { value: "5", label: "Certifications" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold text-primary-400">{item.value}</div>
                <div className="text-slate-500 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <SectionWrapper>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-primary-900/50 border border-primary-700/40 flex items-center justify-center">
            <Briefcase size={20} className="text-primary-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Work Experience</h2>
            <p className="text-slate-500 text-sm">Full-time roles and key responsibilities</p>
          </div>
        </div>
        <Timeline />
      </SectionWrapper>

      {/* Education & Certifications */}
      <SectionWrapper className="bg-slate-900/50">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-primary-900/50 border border-primary-700/40 flex items-center justify-center">
            <GraduationCap size={20} className="text-primary-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Education &amp; Certifications</h2>
            <p className="text-slate-500 text-sm">Academic background and professional credentials</p>
          </div>
        </div>
        <Education />
      </SectionWrapper>

      {/* Resume CTA */}
      <SectionWrapper>
        <div className="relative bg-gradient-to-br from-primary-900/40 to-slate-800/40 border border-primary-700/30 rounded-3xl p-10 sm:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-56 h-56 bg-primary-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-800/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-4">
              Want the Full Picture?
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Download my complete resume for a detailed overview of my experience, skills, and accomplishments — formatted for easy sharing with hiring managers.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-primary-900/30"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

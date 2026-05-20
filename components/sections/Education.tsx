"use client";

import { education, certifications } from "@/data/experience";
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <div className="space-y-12">
      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary-900/50 border border-primary-700/40 flex items-center justify-center">
            <GraduationCap size={20} className="text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Education</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 hover:border-primary-700/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-primary-400" />
                </div>
                <div>
                  <h4 className="text-slate-100 font-semibold text-sm leading-snug mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-primary-400 text-sm font-medium">{edu.institution}</div>
                  <div className="text-slate-500 text-xs mt-1">
                    {edu.location} &bull; Class of {edu.graduationYear}
                  </div>
                  {edu.gpa && (
                    <div className="text-slate-400 text-xs mt-1">GPA: {edu.gpa}</div>
                  )}
                  {edu.honors && (
                    <div className="text-amber-400 text-xs mt-1 font-medium">{edu.honors}</div>
                  )}
                  <div className="mt-3">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                      Relevant Coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCourses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 bg-slate-700/50 rounded text-slate-400 text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary-900/50 border border-primary-700/40 flex items-center justify-center">
            <Award size={20} className="text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 flex items-start gap-4 hover:border-primary-700/30 transition-all duration-300"
            >
              <div className="text-2xl flex-shrink-0">{cert.badge}</div>
              <div>
                <div className="text-slate-200 font-semibold text-sm leading-snug">{cert.name}</div>
                <div className="text-primary-400 text-xs mt-1">{cert.issuer}</div>
                <div className="text-slate-500 text-xs mt-0.5">Issued {cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { experiences } from "@/data/experience";
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import Badge from "@/components/ui/Badge";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-700/60 via-slate-700/40 to-transparent -translate-x-1/2" />

      <div className="space-y-10">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={exp.id}
              className={"relative flex flex-col md:flex-row gap-6 md:gap-0 " + (isLeft ? "md:flex-row" : "md:flex-row-reverse")}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary-600 border-2 border-slate-950 -translate-x-1/2 z-10 shadow-lg shadow-primary-900/40" />

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className={"md:w-1/2 pl-10 md:pl-0 " + (isLeft ? "md:pr-10" : "md:pl-10")}>
                <div className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 hover:border-primary-700/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-slate-100 font-semibold text-base">{exp.role}</h3>
                      <div className="text-primary-400 font-medium text-sm mt-0.5">{exp.company}</div>
                    </div>
                    {exp.current && (
                      <Badge variant="success" size="sm">Current</Badge>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle size={14} className="text-primary-500 flex-shrink-0 mt-0.5" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

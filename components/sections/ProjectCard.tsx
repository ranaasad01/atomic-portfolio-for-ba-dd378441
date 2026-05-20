"use client";

import { Project } from "@/data/projects";
import { ArrowRight, Clock, Building2 } from 'lucide-react';
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-800/40 border border-slate-700/40 rounded-2xl overflow-hidden hover:border-primary-700/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-700/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant="primary">{project.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Building2 size={12} />
            {project.industry}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {project.duration}
          </span>
        </div>

        <h3 className="text-slate-100 font-semibold text-base mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Key outcomes */}
        <div className="mb-4">
          <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-2">
            Key Outcomes
          </div>
          <ul className="space-y-1">
            {project.outcomes.slice(0, 2).map((outcome) => (
              <li key={outcome} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="default" size="sm">
              {tool}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-primary-400 text-sm font-medium group cursor-pointer">
          View Case Study
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}

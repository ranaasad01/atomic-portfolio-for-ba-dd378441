"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-slate-900/50">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
          Testimonials
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
          What Colleagues &amp; Leaders Say
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Recommendations from managers, product partners, and engineering leads I&apos;ve worked closely with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-7 flex flex-col gap-5 hover:border-primary-700/30 transition-all duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-700/40">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-slate-200 font-semibold text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.role}</div>
                <div className="text-primary-500 text-xs">{t.company}</div>
              </div>
              <div className="ml-auto">
                <span className="px-2.5 py-1 bg-slate-700/60 rounded-full text-slate-400 text-xs">
                  {t.relationship}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

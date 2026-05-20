"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from "@/components/icons/SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/40 text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Alexandra Blake
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4">
              Senior Business Analyst &amp; Digital Transformation Specialist
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              I bridge the gap between business strategy and technology delivery — turning complex problems into clear requirements, actionable insights, and measurable outcomes. CBAP Certified with 7+ years of experience across financial services, SaaS, and enterprise consulting.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { value: "7+", label: "Years Experience" },
                { value: "30+", label: "Projects Delivered" },
                { value: "$10M+", label: "Value Generated" },
                { value: "CBAP", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-primary-900/30"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-primary-500 text-slate-300 hover:text-primary-400 font-medium rounded-lg transition-all duration-200 bg-transparent"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="mailto:alexandra.blake@email.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&q=80"
                  alt="Alexandra Blake — Senior Business Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700/50 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-xs text-slate-400 mb-0.5">Current Role</div>
                <div className="text-sm font-semibold text-slate-100">Meridian Financial</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary-900/80 border border-primary-700/50 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-xs text-primary-300 mb-0.5">Certification</div>
                <div className="text-sm font-semibold text-primary-200">CBAP 2023</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
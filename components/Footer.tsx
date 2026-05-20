"use client";

import Link from "next/link";
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
                AB
              </div>
              <span className="font-semibold text-slate-100">Alexandra Blake</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Business Analyst specializing in digital transformation, data analytics, and Agile delivery. Based in New York, NY.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h3>
            <a
              href="mailto:alexandra.blake@email.com"
              className="flex items-center gap-2 text-slate-400 hover:text-primary-400 text-sm transition-colors mb-4"
            >
              <Mail size={15} />
              alexandra.blake@email.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Alexandra Blake. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Senior Business Analyst &bull; CBAP Certified &bull; New York, NY
          </p>
        </div>
      </div>
    </footer>
  );
}

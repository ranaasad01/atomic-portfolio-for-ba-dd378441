"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800/50"
          : "bg-transparent")
      }
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
              AB
            </div>
            <span className="font-semibold text-slate-100 hidden sm:block">
              Alexandra Blake
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 " +
                  (pathname === link.href
                    ? "text-primary-400 bg-primary-950/60"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60")
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-3 flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-lg transition-all duration-200"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800/50 mt-1">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors " +
                    (pathname === link.href
                      ? "text-primary-400 bg-primary-950/60"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60")
                  }
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <FileText size={15} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

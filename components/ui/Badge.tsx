"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  size?: "sm" | "md";
}

export default function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  const variantClasses: Record<string, string> = {
    default: "bg-slate-700/60 text-slate-300 border border-slate-600/40",
    primary: "bg-primary-900/60 text-primary-300 border border-primary-700/40",
    success: "bg-emerald-900/60 text-emerald-300 border border-emerald-700/40",
    warning: "bg-amber-900/60 text-amber-300 border border-amber-700/40",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={"inline-flex items-center rounded-full font-medium " + variantClasses[variant] + " " + sizeClasses[size]}
    >
      {children}
    </span>
  );
}

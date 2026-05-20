"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail, ContactFormData } from "@/lib/emailjs";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus("success");
        setStatusMessage(result.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again or email me directly.");
    }
  };

  const inputClass =
    "w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
          Subject *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Select a subject...</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Freelance Project">Freelance / Contract Project</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Speaking Engagement">Speaking Engagement</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell me about your project, opportunity, or question..."
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Status message */}
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 bg-emerald-900/30 border border-emerald-700/40 rounded-xl text-emerald-400 text-sm">
          <CheckCircle size={18} className="flex-shrink-0" />
          {statusMessage}
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-900/30 border border-red-700/40 rounded-xl text-red-400 text-sm">
          <AlertCircle size={18} className="flex-shrink-0" />
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-primary-900/30"
      >
        {status === "loading" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

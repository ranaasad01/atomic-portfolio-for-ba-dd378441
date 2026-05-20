export const dynamic = "force-dynamic";
import ContactForm from "@/components/sections/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from "@/components/icons/SocialIcons";

export const metadata = {
  title: "Contact — Alexandra Blake",
  description:
    "Get in touch with Alexandra Blake for BA opportunities, freelance projects, or collaborations.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alexandra.blake@email.com",
    href: "mailto:alexandra.blake@email.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY (Open to Remote)",
    href: null,
  },
];

const faqs = [
  {
    q: "Are you open to remote or hybrid roles?",
    a: "Yes — I'm open to fully remote, hybrid, or on-site roles in the New York metro area. I've worked effectively with distributed teams across multiple time zones.",
  },
  {
    q: "Do you take on freelance or contract BA work?",
    a: "Absolutely. I take on select freelance engagements for requirements definition, process mapping, and Agile coaching. Reach out with your project details and timeline.",
  },
  {
    q: "What industries do you specialize in?",
    a: "My deepest experience is in financial services, SaaS/technology, and enterprise consulting. I've also delivered projects in healthcare, retail, and manufacturing.",
  },
  {
    q: "How quickly do you respond to messages?",
    a: "I aim to respond to all inquiries within 24 business hours. For urgent matters, LinkedIn is the fastest way to reach me.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary-700/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
            Contact
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-5">
            Let&apos;s Work Together
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind, a role to fill, or just want to connect? I&apos;d love to hear from you. Fill out the form or reach out directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Availability */}
            <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to full-time, contract, and freelance BA opportunities. Typical response time: within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider">
                Contact Details
              </h3>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/40 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-300 text-sm hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/40 flex items-center justify-center flex-shrink-0">
                  <LinkedinIcon size={16} className="text-primary-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-0.5">LinkedIn</div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    linkedin.com/in/alexandrablake
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/40 flex items-center justify-center flex-shrink-0">
                  <GithubIcon size={16} className="text-primary-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-0.5">GitHub</div>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    github.com/alexandrablake
                  </a>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-start gap-4 p-4 bg-slate-800/40 border border-slate-700/40 rounded-xl">
              <Clock size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-300 text-sm font-medium mb-1">Response Time</div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  I typically respond to all messages within 24 business hours. For urgent inquiries, LinkedIn is the fastest channel.
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="flex items-start gap-4 p-4 bg-slate-800/40 border border-slate-700/40 rounded-xl">
              <MessageSquare size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-300 text-sm font-medium mb-1">What to Expect</div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  After your message, I&apos;ll review your inquiry and respond with next steps — whether that&apos;s a discovery call, a proposal, or just a friendly chat.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-7 sm:p-9">
              <h2 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h2>
              <p className="text-slate-500 text-sm mb-7">
                All fields marked with * are required.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Quick answers to common questions about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 hover:border-primary-700/30 transition-all duration-300"
            >
              <h3 className="text-slate-200 font-semibold text-sm mb-3">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

export const dynamic = "force-dynamic";
import Link from "next/link";
import { ArrowRight, Download, Mail, CheckCircle, Award, Users, TrendingUp, Star, MapPin, Clock } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from "@/components/icons/SocialIcons";

/* ─── DATA ─────────────────────────────────────────────────── */

const skillCategories = [
  {
    icon: "📊",
    title: "Analysis & Strategy",
    skills: [
      "Requirements Gathering",
      "Gap Analysis",
      "Process Mapping",
      "Business Case Development",
      "Stakeholder Management",
      "User Story Writing",
    ],
  },
  {
    icon: "📈",
    title: "Data & Reporting",
    skills: [
      "SQL",
      "Tableau",
      "Power BI",
      "Excel (Advanced)",
      "Data Modeling",
      "KPI Dashboards",
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    skills: [
      "JIRA",
      "Confluence",
      "Miro",
      "Lucidchart",
      "Salesforce",
      "Azure DevOps",
    ],
  },
  {
    icon: "⚙️",
    title: "Methodologies",
    skills: [
      "Agile / Scrum",
      "SAFe Framework",
      "BPMN 2.0",
      "Six Sigma (Green Belt)",
      "Design Thinking",
      "Change Management",
    ],
  },
];

const featuredProjects = [
  {
    id: "crm",
    category: "Digital Transformation",
    industry: "Financial Services",
    duration: "14 months",
    title: "Enterprise CRM Migration & Process Redesign",
    description:
      "Led end-to-end BA for migrating a 500-user Salesforce CRM to cloud-native architecture, redesigning 40+ business processes and authoring a 120-page BRD.",
    outcomes: [
      "35% reduction in average deal cycle time",
      "12 hours/week saved per sales rep through automation",
    ],
    tools: ["Salesforce", "JIRA", "Confluence", "SQL", "Tableau"],
    image: "https://miro.medium.com/1*cBlIsOgV1TqWilGTPR--Mw.jpeg",
  },
  {
    id: "analytics",
    category: "Data & Analytics",
    industry: "Manufacturing",
    duration: "8 months",
    title: "Supply Chain Analytics Dashboard",
    description:
      "Defined requirements for a real-time Tableau platform consolidating 12 ERP systems, enabling executive decision-making and eliminating week-old Excel reports.",
    outcomes: [
      "$800K reduction in excess inventory in Year 1",
      "Decision latency reduced from 7 days to 4 hours",
    ],
    tools: ["Tableau", "SQL", "Power BI", "Azure DevOps", "Confluence"],
    image: "https://media.licdn.com/dms/image/v2/D5612AQE4XzAu0Y2tWQ/article-cover_image-shrink_720_1280/B56ZVgjhyiGsAI-/0/1741081681661?e=2147483647&v=beta&t=l7yiUxHBHypEYWH5aTKsQw5_jW1omezS_-QbTwehp2k",
  },
  {
    id: "onboarding",
    category: "Process Improvement",
    industry: "Banking & Finance",
    duration: "10 months",
    title: "Customer Digital Onboarding Transformation",
    description:
      "Redesigned the end-to-end onboarding journey for a retail bank, eliminating branch visits entirely and cutting onboarding time from 5 days to 90 minutes.",
    outcomes: [
      "Customer drop-off rate decreased from 34% to 8%",
      "15,000+ customers onboarded in first quarter post-launch",
    ],
    tools: ["Figma", "JIRA", "Miro", "SQL", "Confluence"],
    image: "https://imageio.forbes.com/specials-images/imageserve/5c928fa04bbe6f52641ab341/0x0.jpg?format=jpg&crop=2124,2123,x980,y756,safe&height=416&width=416&fit=bounds",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "VP of Digital Transformation",
    company: "Meridian Financial Group",
    avatar: "https://imageio.forbes.com/specials-images/imageserve/5c928fa04bbe6f52641ab341/0x0.jpg?format=jpg&crop=2124,2123,x980,y756,safe&height=416&width=416&fit=bounds",
    quote:
      "Alexandra is the most thorough and collaborative BA I've worked with in 15 years. Her ability to bridge the gap between technical teams and business stakeholders is exceptional. The CRM migration project would not have succeeded without her meticulous requirements work.",
    relationship: "Direct Manager",
  },
  {
    id: "t2",
    name: "Marcus Williams",
    role: "Head of Product",
    company: "Nexus Technology Solutions",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3122882.png&w=350&h=254",
    quote:
      "Working with Alex transformed how our product team operates. She introduced story mapping and backlog structuring practices that we still use today. Her user stories are always precise, testable, and tied to real business value.",
    relationship: "Product Partner",
  },
  {
    id: "t3",
    name: "Dr. Priya Nair",
    role: "Chief Data Officer",
    company: "Meridian Financial Group",
    avatar: "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_public_profile_photo_320x320/pcgmylcyzjbevqvtb8rw/priya-nair-md-chicago-il.jpg",
    quote:
      "Alex led requirements definition for our supply chain analytics platform and delivered a data dictionary and KPI framework that became the gold standard for all subsequent data projects. Her SQL skills and data literacy set her apart from most BAs.",
    relationship: "Executive Sponsor",
  },
  {
    id: "t4",
    name: "James O'Brien",
    role: "Engineering Lead",
    company: "Nexus Technology Solutions",
    avatar: "https://static01.nyt.com/images/2023/02/20/multimedia/20dc-veritas-vpzc/20dc-veritas-vpzc-mediumSquareAt3X.jpg",
    quote:
      "As an engineer, I've worked with many BAs who write vague requirements. Alex is the opposite — her acceptance criteria are crystal clear, her edge cases are thought through, and she genuinely understands technical constraints.",
    relationship: "Cross-functional Colleague",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                {[
                  { value: "7+", label: "Years Experience" },
                  { value: "30+", label: "Projects Delivered" },
                  { value: "$10M+", label: "Value Generated" },
                  { value: "CBAP", label: "Certified" },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-primary-400">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-primary-900/30"
                >
                  View My Work <ArrowRight size={16} />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-primary-500 text-slate-300 hover:text-primary-400 font-medium rounded-lg transition-all duration-200"
                >
                  <Download size={16} /> Download Resume
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

            {/* Profile image */}
            <div className="flex-shrink-0 relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl shadow-black/40">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEmv5-GLEKD8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724442111375?e=2147483647&v=beta&t=y19lLQbq_0o7jOVuUpEj4qMo31BhQcYbqrhqkWBnyxU"
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
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/30">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQG0lV4B9W_GLA/profile-displayphoto-scale_200_200/B4EZh0c.h.HIAc-/0/1754300411375?e=2147483647&v=beta&t=KY1MskR0t7RwnUabwTKI9ovuN2Bk3p6Dlz-tE8PyPSg"
                alt="Alexandra working on business analysis"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700/50 rounded-2xl p-5 shadow-xl max-w-[200px]">
              <div className="text-3xl font-bold text-primary-400 mb-1">7+</div>
              <div className="text-slate-300 text-sm font-medium">Years of BA Experience</div>
              <div className="text-slate-500 text-xs mt-1">Across 3 industries</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6 leading-tight">
              Turning Business Complexity Into{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Clarity &amp; Action
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;m a Senior Business Analyst with 7+ years of experience helping organizations navigate digital transformation, optimize processes, and make better decisions with data. My work sits at the intersection of strategy, technology, and people.
              </p>
              <p>
                I specialize in translating ambiguous business needs into precise, actionable requirements that development teams can build from and stakeholders can trust. Whether I&apos;m facilitating a discovery workshop, mapping a complex process, or analyzing data to uncover root causes — I bring structure, curiosity, and a relentless focus on outcomes.
              </p>
              <p>
                Currently at Meridian Financial Group, I lead the BA practice for the Digital Transformation Office, managing a portfolio of strategic initiatives across retail banking, wealth management, and insurance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {[
                "Requirements elicitation & documentation",
                "Cross-functional team leadership",
                "Data-driven decision making",
                "Agile & Scrum facilitation",
                "Process optimization & redesign",
                "Change management & adoption",
              ].map((v) => (
                <div key={v} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle size={15} className="text-primary-500 flex-shrink-0" />
                  {v}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { Icon: Award, title: "CBAP Certified", desc: "Gold standard in BA credentials, issued by IIBA." },
                { Icon: Users, title: "Stakeholder Champion", desc: "Aligning C-suite, technical teams, and end users." },
                { Icon: TrendingUp, title: "Outcome-Driven", desc: "Every project measured by business outcomes." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-4">
                  <Icon size={20} className="text-primary-400 mb-2" />
                  <div className="text-slate-200 text-sm font-semibold mb-1">{title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
              Skills &amp; Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
              Tools, Techniques &amp; Technologies
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit built over 7+ years of hands-on BA work across enterprise, SaaS, and consulting environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 hover:border-primary-700/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h3 className="text-slate-200 font-semibold mb-4 text-sm">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-500 text-sm mb-5 uppercase tracking-wider font-medium">
              Certifications &amp; Credentials
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["CBAP (IIBA)", "PMI-ACP", "SAFe 5 Agilist", "Tableau Desktop Specialist", "Six Sigma Green Belt"].map(
                (cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-slate-800/60 border border-slate-700/40 rounded-full text-slate-300 text-sm font-medium"
                  >
                    {cert}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-medium mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
              Recent Case Studies
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              A selection of high-impact BA projects spanning digital transformation, data analytics, and process improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-slate-800/40 border border-slate-700/40 rounded-2xl overflow-hidden hover:border-primary-700/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-slate-700/30">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-900/60 text-primary-300 border border-primary-700/40">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} />{p.industry}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} />{p.duration}
                    </span>
                  </div>
                  <h3 className="text-slate-100 font-semibold text-base mb-3 leading-snug">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="mb-4">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-2">Key Outcomes</div>
                    <ul className="space-y-1">
                      {p.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700/60 text-slate-300 border border-slate-600/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-primary-500 text-slate-300 hover:text-primary-400 font-medium rounded-lg transition-all duration-200"
            >
              View All 6 Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/40">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-slate-200 font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                    <div className="text-primary-500 text-xs">{t.company}</div>
                  </div>
                  <span className="px-2.5 py-1 bg-slate-700/60 rounded-full text-slate-400 text-xs flex-shrink-0">
                    {t.relationship}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary-900/40 to-slate-800/40 border border-primary-700/30 rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-800/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you have a complex transformation project, a data challenge, or a team that needs a skilled BA — I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-primary-900/30"
                >
                  Get In Touch <ArrowRight size={16} />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-primary-500 text-slate-300 hover:text-primary-400 font-medium rounded-lg transition-all duration-200"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

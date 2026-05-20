export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  relationship: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "VP of Digital Transformation",
    company: "Meridian Financial Group",
    avatar: "https://imageio.forbes.com/specials-images/imageserve/5c928fa04bbe6f52641ab341/0x0.jpg?format=jpg&crop=2124,2123,x980,y756,safe&height=416&width=416&fit=bounds",
    quote:
      "Alexandra is the most thorough and collaborative BA I've worked with in 15 years. Her ability to bridge the gap between technical teams and business stakeholders is exceptional. The CRM migration project would not have succeeded without her meticulous requirements work and her calm, structured approach to managing competing priorities.",
    relationship: "Direct Manager",
  },
  {
    id: "t2",
    name: "Marcus Williams",
    role: "Head of Product",
    company: "Nexus Technology Solutions",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3122882.png&w=350&h=254",
    quote:
      "Working with Alex transformed how our product team operates. She introduced story mapping and backlog structuring practices that we still use today. Her user stories are always precise, testable, and tied to real business value. She has a rare talent for asking the right questions at the right time.",
    relationship: "Product Partner",
  },
  {
    id: "t3",
    name: "Dr. Priya Nair",
    role: "Chief Data Officer",
    company: "Meridian Financial Group",
    avatar: "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_public_profile_photo_320x320/pcgmylcyzjbevqvtb8rw/priya-nair-md-chicago-il.jpg",
    quote:
      "Alex led the requirements definition for our supply chain analytics platform and delivered a data dictionary and KPI framework that became the gold standard for all subsequent data projects. Her SQL skills and data literacy set her apart from most BAs — she can speak the language of both business and data engineering.",
    relationship: "Executive Sponsor",
  },
  {
    id: "t4",
    name: "James O'Brien",
    role: "Engineering Lead",
    company: "Nexus Technology Solutions",
    avatar: "https://static01.nyt.com/images/2023/02/20/multimedia/20dc-veritas-vpzc/20dc-veritas-vpzc-mediumSquareAt3X.jpg",
    quote:
      "As an engineer, I've worked with many BAs who write vague requirements that cause endless back-and-forth. Alex is the opposite — her acceptance criteria are crystal clear, her edge cases are thought through, and she's always available to clarify. She genuinely understands the technical constraints and works with them, not against them.",
    relationship: "Cross-functional Colleague",
  },
];

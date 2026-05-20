import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alexandra Blake — Senior Business Analyst",
  description:
    "Senior Business Analyst specializing in digital transformation, data analytics, and Agile delivery. CBAP Certified with 7+ years of experience. Based in New York, NY.",
  keywords: [
    "Business Analyst",
    "CBAP",
    "Digital Transformation",
    "Requirements Engineering",
    "Agile",
    "SQL",
    "Tableau",
    "JIRA",
    "Portfolio",
  ],
  authors: [{ name: "Alexandra Blake" }],
  openGraph: {
    title: "Alexandra Blake — Senior Business Analyst",
    description:
      "Senior Business Analyst specializing in digital transformation, data analytics, and Agile delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

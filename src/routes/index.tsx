import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Insights } from "@/components/portfolio/Insights";

import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Ashhar Nadeem — Director, AI & Cloud Engineering" },
      {
        name: "description",
        content:
          "Director of AI & Cloud Engineering at EXL. 20+ years architecting enterprise data platforms, cloud-first systems, and AI strategy across Dell, Infosys, Coforge and more.",
      },
      { property: "og:title", content: "Mohammad Ashhar Nadeem — AI & Cloud Engineering Leader" },
      {
        property: "og:description",
        content:
          "Building intelligent enterprise platforms at the intersection of AI, cloud architecture, and data engineering.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohammad Ashhar Nadeem",
          jobTitle: "Director – AI & Cloud Engineering",
          worksFor: { "@type": "Organization", name: "EXL" },
          alumniOf: ["IIT Kharagpur"],
          sameAs: [
            "https://www.linkedin.com/in/ashhar/",
            "https://ashharn.medium.com",
          ],
          email: "mailto:ashharn@icloud.com",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
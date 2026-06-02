import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Insights } from "@/components/portfolio/Insights";

import { Contact } from "@/components/portfolio/Contact";

const SITE_URL = "https://ashhar-nextgen-folio.lovable.app";
const PAGE_TITLE = "Ashhar Nadeem | Data & AI Technology Consultant";
const PAGE_DESC =
  "Ashhar Nadeem is a Data & AI Technology Consultant helping organizations leverage artificial intelligence, data strategy, automation, analytics, and emerging technologies to drive business growth and digital transformation.";
const OG_DESC =
  "Data & AI Technology Consultant specializing in artificial intelligence strategy, automation, analytics, digital transformation, and technology advisory services.";
const TW_DESC =
  "Helping businesses unlock value through AI, data, analytics, automation, and technology strategy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: OG_DESC },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ashhar Nadeem" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: TW_DESC },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: "Ashhar Nadeem",
              alternateName: "Mohammad Ashhar Nadeem",
              jobTitle: "Data & AI Technology Consultant",
              description:
                "Technology consultant specializing in artificial intelligence, data strategy, analytics, automation, digital transformation, and emerging technologies.",
              url: SITE_URL,
              email: "mailto:ashharn@icloud.com",
              sameAs: [
                "https://www.linkedin.com/in/ashhar/",
                "https://ashharn.medium.com",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Generative AI",
                "Data Analytics",
                "Data Strategy",
                "Machine Learning",
                "Business Intelligence",
                "AI Transformation",
                "AI Governance",
                "Data Engineering",
                "Digital Transformation",
                "Automation",
                "Technology Consulting",
                "AI Adoption",
                "Enterprise Technology",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Data & AI Technology Consultant",
                occupationalCategory: "Technology Consulting",
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Ashhar Nadeem",
              description:
                "Professional consulting website focused on artificial intelligence, data strategy, analytics, automation, and technology advisory services.",
              inLanguage: "en",
              publisher: { "@id": `${SITE_URL}/#person` },
              about: [
                "Technology Consulting",
                "Artificial Intelligence",
                "Data Analytics",
                "Business Technology",
                "Digital Transformation",
                "Innovation Consulting",
              ],
            },
            {
              "@type": "ProfilePage",
              "@id": `${SITE_URL}/#profilepage`,
              url: SITE_URL,
              name: PAGE_TITLE,
              description: PAGE_DESC,
              mainEntity: { "@id": `${SITE_URL}/#person` },
              isPartOf: { "@id": `${SITE_URL}/#website` },
            },
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Ashhar Nadeem",
              url: SITE_URL,
              founder: { "@id": `${SITE_URL}/#person` },
              description:
                "Independent consultancy delivering AI, data, analytics, automation, and digital transformation advisory services.",
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#service`,
              name: "Ashhar Nadeem — Data & AI Technology Consulting",
              url: SITE_URL,
              provider: { "@id": `${SITE_URL}/#person` },
              areaServed: "Worldwide",
              serviceType: [
                "AI Consulting",
                "Data Consulting",
                "Technology Consulting",
                "Digital Transformation Consulting",
                "Analytics Consulting",
                "AI Strategy Advisory",
              ],
              audience: {
                "@type": "Audience",
                audienceType: [
                  "Enterprises",
                  "Startups",
                  "Business Leaders",
                  "Executives",
                  "Founders",
                  "Organizations",
                  "Government Agencies",
                ],
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE_URL}/#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
              ],
            },
          ],
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

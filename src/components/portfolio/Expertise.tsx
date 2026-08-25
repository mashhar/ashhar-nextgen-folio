import { Section } from "./Section";
import { motion } from "motion/react";

const EXPERTISE = [
  "AI & Machine Learning Strategy",
  "Cloud Architecture (AWS, Azure)",
  "Enterprise Data Engineering Platforms",
  "DevOps & Platform Engineering",
  "Digital Transformation",
  "Engineering Leadership",
];

const TOOLS = [
  "AWS", "Microsoft Azure", "Snowflake", "Palantir", "Python", "SQL",
  "Terraform", "Docker", "Kubernetes", "CI/CD", "Power BI", "Apache Spark",
  "Microsoft Fabric", "Redshift", "Ollama", "LLMs",
];

const CERTS = [
  "Google Certified Partner Specialist: Gemini Enterprise Agent Development & Deployment",
  "AI Fundamentals (DataCamp)",
  "Scrum Alliance – CSPO",
  "Google Generative AI Fundamentals",
  "Google Advanced Data Analytics",
  "AWS Architecting Solutions",
  "Snowflake SnowPro Associate",
  "Snowflake – Generative AI",
  "Snowflake – Modern Data Engineering",
  "Palantir Foundry Data Engineer",
  "Microsoft Azure (AZ-900)",
  "AWS Cloud Practitioner (CLF-C02)",
  "Data Literacy Professional",
  "GitHub Foundations",
];

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Expertise"
      title={<>The stack behind <span className="text-gradient">enterprise impact</span>.</>}
      description="A breadth of capabilities sharpened by deep specialization — strategy on top, fluent execution underneath."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 glass rounded-2xl p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Domains</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {EXPERTISE.map((e, i) => (
              <motion.li
                key={e}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex items-center gap-3 rounded-xl bg-[var(--surface-elevated)]/50 px-4 py-3 text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px] shadow-primary" />
                {e}
              </motion.li>
            ))}
          </ul>

          <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Tools &amp; Tech</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-[var(--surface-elevated)]/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 glass rounded-2xl p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Certifications
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {CERTS.map((c) => (
              <li key={c} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 text-primary">✦</span>
                <span className="text-foreground/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

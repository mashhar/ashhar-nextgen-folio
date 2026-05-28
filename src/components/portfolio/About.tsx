import { Section } from "./Section";
import { motion } from "motion/react";

const POINTS = [
  {
    title: "Two decades, one obsession",
    body:
      "Over 20 years architecting enterprise systems at Dell, Infosys, Coforge, First American and now EXL — translating ambiguous business goals into resilient, production-grade platforms.",
  },
  {
    title: "AI that ships",
    body:
      "Currently driving AI and cloud innovation across analytics and data platforms — bridging LLMs, modern data stacks, and autonomous agents with executive decision-making.",
  },
  {
    title: "Founder mindset",
    body:
      "Founded IntellicHUB to make NoCode + AI accessible to non-technical entrepreneurs. Lead with empowerment, ship with rigor, measure by impact.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Executive profile.<br /><span className="text-muted-foreground">Engineering depth.</span></>}
      description={
        <>
          A seasoned Director of AI &amp; Cloud Engineering delivering enterprise-scale digital transformation —
          PGDIT from <span className="text-foreground">IIT Kharagpur</span>, B.Tech in Electrical Engineering,
          and certified across AWS, Snowflake, Palantir, Google AI and Scrum.
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {POINTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-2xl p-6 transition hover:border-primary/40"
          >
            <div className="absolute -inset-px -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100" />
            <div className="font-mono text-xs text-primary">0{i + 1}</div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

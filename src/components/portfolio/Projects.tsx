import { Section } from "./Section";
import { motion } from "motion/react";

const PROJECTS = [
  {
    name: "CloudForge AI",
    tagline: "AI cloud architecture generator",
    description:
      "Turn natural language into scalable cloud system designs — interactive diagrams, security recommendations, Terraform starters, and deployment guidance across AWS, Azure, and GCP.",
    href: "https://cloudforgeai.ashharnadeem.in",
    stack: ["AI Agents", "AWS · Azure · GCP", "Terraform", "Interactive Diagrams"],
    metrics: [
      ["3", "Cloud providers"],
      ["1-click", "Terraform export"],
      ["Live", "In production"],
    ],
    status: "Live",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">product work</span>.</>}
      description="Production-grade products I've designed and shipped — combining AI, cloud architecture, and developer experience."
    >
      <div className="grid gap-6">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group glass relative overflow-hidden rounded-3xl p-8 sm:p-10 transition hover:border-primary/50"
          >
            {/* Aurora wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent_70%)] opacity-20 blur-3xl transition group-hover:opacity-40"
            />

            <div className="relative grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/60" />
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-300/80">
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-primary">{p.tagline}</p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-[var(--surface-elevated)]/40 px-3 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Visit {p.name.toLowerCase().replace(/\s+/g, "")}.ashharnadeem.in
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/60">
                {p.metrics.map(([n, l]) => (
                  <div key={l} className="bg-background/40 px-3 py-6 text-center">
                    <div className="font-display text-xl sm:text-2xl font-semibold text-gradient">{n}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

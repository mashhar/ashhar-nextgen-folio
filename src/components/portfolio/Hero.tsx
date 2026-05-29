import { motion } from "motion/react";

const ROLES = [
  "AI & Cloud Engineering",
  "Enterprise Data Platforms",
  "Engineering Leadership",
  "Digital Transformation",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent_70%)] opacity-40 blur-3xl animate-aurora" />
        <div className="absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,var(--glow-2),transparent_70%)] opacity-30 blur-3xl animate-aurora" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Director, AI &amp; Cloud Engineering · EXL
          </div>

          <h1 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.02]">
            <span className="block text-foreground">Mohammad Ashhar</span>
            <span className="block text-gradient">Nadeem</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Building intelligent enterprise platforms at the intersection of{" "}
            <span className="text-foreground">AI</span>,{" "}
            <span className="text-foreground">cloud architecture</span>, and{" "}
            <span className="text-foreground">data engineering</span> — turning data into measurable business outcomes.
          </p>


          {/* Role ticker */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {ROLES.map((r) => (
              <span
                key={r}
                className="glass rounded-full px-3 py-1 text-xs font-mono text-muted-foreground"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#experience"
              className="glow-ring group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              View experience
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-[var(--surface-elevated)]"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/ashhar"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              LinkedIn ↗
            </a>


          </div>
        </motion.div>

        {/* Metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl glass"
        >
          {[
            ["20+", "Years of experience"],
            ["6", "Global enterprises"],
            ["13", "Certifications"],
            ["∞", "Production systems"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/40 px-6 py-8 text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {eyebrow ? (
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
          ) : null}
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">{title}</h2>
          {description ? (
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

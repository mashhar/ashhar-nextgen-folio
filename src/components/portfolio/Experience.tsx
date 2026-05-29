import { Section } from "./Section";
import { motion } from "motion/react";

const ROLES = [

  {
    role: "Director – Data & Cloud Engineering",
    company: "EXL",
    period: "2023 – Present",
    points: [
      "Driving AI and cloud innovation across analytics and data platforms for enterprise clients.",
      "Leading data engineering transformation on modern cloud architectures.",
      "Applying AI strategically to deliver measurable business outcomes.",
      "Scaling production-grade data solutions that enhance client success.",
    ],
  },
  {
    role: "Founder",
    company: "IntellicHUB",
    period: "2023 – Present",
    points: [
      "Enabled non-tech entrepreneurs to ship apps using NoCode and AI tools.",
      "Built a platform bridging accessibility for business-first users.",
      "Compressed launch cycles for early-stage firms in fast-moving markets.",
    ],
  },
  {
    role: "Sr Product Manager",
    company: "WIN Home Inspection",
    period: "2022 – 2023",
    points: [
      "Led product strategy for AI and data-driven proptech products serving a nationwide inspector network.",
      "Partnered with engineering, design, and operations to ship scalable cloud-native platforms.",
      "Optimized inspection workflows using ML and automation to improve homeowner outcomes.",
      "Owned roadmap, discovery, and prioritization across multiple product surfaces.",
    ],
  },
  {
    role: "Sr Business Solution Consultant",
    company: "Coforge",
    period: "2019 – 2022",
    points: [
      "Led enterprise consulting across major client engagements.",
      "Architected cloud-first solutions for digital transformation programs.",
      "Drove DevOps modernization and platform engineering initiatives.",
      "Managed cross-functional delivery teams across geographies.",
    ],
  },
  {
    role: "Business Solutions Consultant",
    company: "Coforge",
    period: "2015 – 2019",
    points: [
      "Delivered end-to-end business solutions for enterprise clients.",
      "Designed scalable integration architectures for complex systems.",
      "Contributed to pre-sales and proposal development for key accounts.",
    ],
  },
  {
    role: "Sr Product Lead – Mortgage Services",
    company: "First American Financial Corporation",
    period: "2012 – 2014",
    points: [
      "Led lender integration management for mortgage services product line.",
      "Owned product roadmap and stakeholder alignment across business units.",
      "Streamlined integration workflows, reducing processing time significantly.",
    ],
  },
  {
    role: "Business Systems Analyst Advisor",
    company: "Dell",
    period: "2009 – 2012",
    points: [
      "Advised on global product data systems strategy and architecture.",
      "Drove process optimization and data quality at enterprise scale.",
      "Partnered with cross-functional teams on system modernization.",
    ],
  },
  {
    role: "System Analyst & Team Lead",
    company: "Infosys Technologies",
    period: "2002 – 2009",
    points: [
      "Led teams delivering complex enterprise applications.",
      "Progressed from developer to team lead across multiple project streams.",
      "Built foundational expertise in systems analysis and software engineering.",
    ],
  },
];



export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title={<>A career built across <span className="text-gradient">global enterprises</span>.</>}
      description="From Infosys to EXL — two decades of architecting systems, leading teams, and shaping enterprise outcomes."
    >
      <ol className="relative space-y-6 border-l border-border/60 pl-6 sm:pl-10">
        {ROLES.map((r, i) => (
          <motion.li
            key={r.role + r.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: Math.min(i * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="absolute -left-[31px] sm:-left-[47px] top-7 flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px] shadow-primary" />
            </span>
            <div className="glass rounded-2xl p-6 sm:p-7 transition hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{r.role}</h3>
                  <div className="mt-1 text-sm text-primary">{r.company}</div>
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {r.period}
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

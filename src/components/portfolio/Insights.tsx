import { Section } from "./Section";
import { motion } from "motion/react";

const POSTS = [
  {
    title: "Goodbye Apps, Hello Agents: How AI Assistants Are Rewriting the Rules of Software",
    excerpt: "OpenClaw, NanoBot and the rise of skills-based software.",
    date: "March 29, 2026",
    href: "https://ashharn.medium.com/goodbye-apps-hello-agents-how-ai-assistants-are-rewriting-the-rules-of-software-40c5fd4ade3c",
    tag: "AI Agents",
  },
  {
    title: "From Chatbot to Autonomous Agent: Designing Your Own OpenClaw Personal AI Assistant",
    excerpt:
      "Modern autonomous agents like OpenClaw move beyond passive chatbots toward goal-directed AI.",
    date: "February 22, 2026",
    href: "https://ashharn.medium.com/unlocking-the-power-of-openclaw-build-your-personal-ai-assistant-on-aws-ec2-b13f8ae10c63",
    tag: "Autonomous Agents",
  },
  {
    title: "Unlocking Local LLMs with Open WebUI and Ollama",
    excerpt:
      "A secure, cost-effective AI solution for data and cloud engineers who need control over their stack.",
    date: "December 16, 2024",
    href: "https://ashharn.medium.com/unlocking-the-power-of-local-llms-with-open-webui-and-ollama-a-secure-cost-effective-ai-solution-894166a79f4f",
    tag: "Local LLMs",
  },
  {
    title: "Data Engineering: Navigating Microsoft Fabric, AWS, GCP, IBM Cloud Pack and More",
    excerpt:
      "Data platforms have evolved from on-prem monoliths to sophisticated cloud-native systems. Here's the new landscape.",
    date: "October 2, 2024",
    href: "https://ashharn.medium.com/data-engineering-navigating-the-shift-with-microsoft-fabric-aws-gcp-ibm-cloud-pack-and-more-f06d9094af5f",
    tag: "Data Engineering",
  },
];

export function Insights() {
  return (
    <Section
      id="insights"
      eyebrow="Writing"
      title={<>Insights &amp; <span className="text-gradient">thought leadership</span>.</>}
      description="Essays on AI strategy, cloud architecture, data engineering and the future of autonomous agents — published on Medium."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {POSTS.map((p, i) => (
          <motion.a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group glass relative flex flex-col rounded-2xl p-7 transition hover:border-primary/50 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {p.tag}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-snug transition group-hover:text-gradient">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Read on Medium
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

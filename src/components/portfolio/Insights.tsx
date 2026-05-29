import { Section } from "./Section";
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMediumPosts, type MediumPost } from "@/lib/medium.functions";

const FALLBACK: MediumPost[] = [
  {
    title: "Goodbye Apps, Hello Agents: How AI Assistants Are Rewriting the Rules of Software",
    link: "https://ashharn.medium.com/goodbye-apps-hello-agents-how-ai-assistants-are-rewriting-the-rules-of-software-40c5fd4ade3c",
    pubDate: "Sun, 29 Mar 2026 10:24:40 GMT",
    snippet: "OpenClaw, NanoBot and the rise of skills-based software.",
    image: "https://cdn-images-1.medium.com/max/1536/1*cb0edEF4q8vggqeELREKWA.png",
    categories: ["AI Agents"],
  },
  {
    title: "From Chatbot to Autonomous Agent: Designing Your Own OpenClaw Personal AI Assistant",
    link: "https://ashharn.medium.com/unlocking-the-power-of-openclaw-build-your-personal-ai-assistant-on-aws-ec2-b13f8ae10c63",
    pubDate: "Sun, 22 Feb 2026 11:20:06 GMT",
    snippet: "Modern autonomous agents like OpenClaw move beyond passive chatbots toward goal-directed AI.",
    image: "https://cdn-images-1.medium.com/max/1024/1*XXq-WQO0tV0RXgryywzzEw.png",
    categories: ["Autonomous Agents"],
  },
  {
    title: "Unlocking the Power of Local LLMs with Open WebUI and Ollama",
    link: "https://ashharn.medium.com/unlocking-the-power-of-local-llms-with-open-webui-and-ollama-a-secure-cost-effective-ai-solution-894166a79f4f",
    pubDate: "Mon, 16 Dec 2024 08:16:54 GMT",
    snippet: "A secure, cost-effective AI solution for data and cloud engineers.",
    image: "https://cdn-images-1.medium.com/max/1024/1*xKQ_W4GZDeCWzO4Q6G62fA.jpeg",
    categories: ["Local LLMs"],
  },
  {
    title: "Data Engineering: Navigating Microsoft Fabric, AWS, GCP, IBM Cloud Pack and More",
    link: "https://ashharn.medium.com/data-engineering-navigating-the-shift-with-microsoft-fabric-aws-gcp-ibm-cloud-pack-and-more-f06d9094af5f",
    pubDate: "Wed, 02 Oct 2024 08:01:22 GMT",
    snippet: "Data platforms have evolved from on-prem monoliths to sophisticated cloud-native systems.",
    image: null,
    categories: ["Data Engineering"],
  },
];

function formatDate(d: string) {
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function tagLabel(p: MediumPost) {
  const first = p.categories[0] ?? "Essay";
  return first
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function Insights() {
  const fetchPosts = useServerFn(getMediumPosts);
  const { data } = useQuery({
    queryKey: ["medium-posts"],
    queryFn: () => fetchPosts(),
    staleTime: 1000 * 60 * 30,
  });

  const posts = (data && data.length > 0 ? data : FALLBACK).slice(0, 12);

  return (
    <Section
      id="insights"
      eyebrow="Writing"
      title={<>Insights &amp; <span className="text-gradient">thought leadership</span>.</>}
      description="Essays on AI strategy, cloud architecture, data engineering and the future of autonomous agents — auto-synced from Medium."
    >
      <div className="relative">
        <div
          className="max-h-[720px] overflow-y-auto pr-2 -mr-2 scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((p, i) => (
              <motion.a
                key={p.link}
                href={p.link}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
                className="group glass relative flex flex-col overflow-hidden rounded-2xl transition hover:border-primary/50 hover:-translate-y-1"
              >
                {p.image ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-elevated)]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  </div>
                ) : (
                  <div className="relative aspect-[16/9] bg-[var(--gradient-brand)] opacity-80" />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tagLabel(p)}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{formatDate(p.pubDate)}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug transition group-hover:text-gradient">
                    {p.title}
                  </h3>
                  {p.snippet && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{p.snippet}</p>
                  )}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read on Medium
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">Scroll for more · Auto-synced from Medium</span>
        <a
          href="https://ashharn.medium.com"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-primary hover:underline"
        >
          View all on Medium ↗
        </a>
      </div>
    </Section>
  );
}

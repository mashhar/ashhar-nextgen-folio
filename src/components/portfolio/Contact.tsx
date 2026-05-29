import { Section } from "./Section";

const LINKS = [
  { label: "Email", value: "ashharn@icloud.com", href: "mailto:ashharn@icloud.com" },
  { label: "LinkedIn", value: "linkedin.com/in/ashhar", href: "https://www.linkedin.com/in/ashhar" },
  { label: "Medium", value: "ashharn.medium.com", href: "https://ashharn.medium.com" },
  { label: "DataCamp", value: "datacamp.com/portfolio/ashharn", href: "https://www.datacamp.com/portfolio/ashharn" },
  { label: "Website", value: "ashharnadeem.in", href: "https://ashharnadeem.in" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let&rsquo;s build something <span className="text-gradient">consequential</span>.</>}
      description="Open to collaborations, advisory engagements, speaking opportunities, and enterprise transformation conversations."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="glass group flex items-center justify-between rounded-2xl px-5 py-4 transition hover:border-primary/50"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {l.label}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground">{l.value}</div>
              </div>
              <span aria-hidden className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary">
                →
              </span>
            </a>
          ))}
        </div>

        <form
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Portfolio inquiry — ${data.get("name") || ""}`);
            const body = encodeURIComponent(
              `From: ${data.get("name")} (${data.get("email")})\nOrg: ${data.get("org") || "-"}\n\n${data.get("message")}`,
            );
            window.location.href = `mailto:ashharn@icloud.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Full name" required />
            <Field name="email" label="Email" type="email" required />
          </div>
          <div className="mt-4">
            <Field name="org" label="Organization" />
          </div>
          <div className="mt-4">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-input bg-[var(--surface-elevated)]/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
              placeholder="Tell me what you're working on…"
            />
          </div>
          <button
            type="submit"
            className="glow-ring mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Send message →
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name, label, type = "text", required,
}: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}{required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-[var(--surface-elevated)]/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

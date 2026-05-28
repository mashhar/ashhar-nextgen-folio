import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#insights", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={[
          "flex items-center gap-1 rounded-full border border-border px-2 py-2 transition-all duration-300",
          scrolled ? "glass shadow-2xl shadow-black/30" : "bg-transparent border-transparent",
        ].join(" ")}
      >
        <a href="#top" className="ml-2 mr-1 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--gradient-brand)] text-[10px] font-bold text-primary-foreground">
            AN
          </span>
          <span className="hidden sm:inline text-foreground">Ashhar</span>
        </a>
        <div className="hidden md:flex items-center">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-[var(--surface-elevated)] hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--gradient-brand)] text-[10px] font-bold text-primary-foreground">
            AN
          </span>
          <span>Mohammad Ashhar Nadeem · © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a className="hover:text-foreground transition" href="https://www.linkedin.com/in/ashhar/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-foreground transition" href="https://ashharn.medium.com" target="_blank" rel="noreferrer">Medium</a>
          <a className="hover:text-foreground transition" href="mailto:ashharn@icloud.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

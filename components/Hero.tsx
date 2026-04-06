import { Sparkles } from "lucide-react";

type HeroProps = {
  name?: string;
  role?: string;
  summary?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  name = "Sajid Bhati",
  role = "Software Engineer",
  summary = "I build scalable web platforms and backend systems with a strong focus on clean architecture, performance, and developer experience.",
  primaryCta = { label: "View Projects", href: "#projects" },
  secondaryCta = { label: "Contact Me", href: "#contact" },
}: HeroProps) {
  return (
    <section id="hero" className="fade-up pt-12 sm:pt-16">
      <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 p-7 shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 sm:p-12">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          <Sparkles size={14} />
          Developer Portfolio
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
          {name}
        </h1>
        <p className="mt-4 text-lg font-medium text-neutral-700 dark:text-neutral-300 sm:text-xl">{role}</p>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-400">{summary}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={primaryCta.href}
            className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-700"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-800 transition hover:-translate-y-0.5 hover:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-500"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

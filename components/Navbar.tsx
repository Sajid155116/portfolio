"use client";

import CommandPalette from "@/components/CommandPalette";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  name?: string;
  items?: NavItem[];
};

const defaultItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  name = "Sajid Bhati",
  items = defaultItems,
}: NavbarProps) {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const observers = items.map((item) => {
      const target = document.querySelector(item.href);
      if (!target) {
        return null;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);
          if (visible) {
            setActive(item.href);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
      );

      observer.observe(target);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [items]);

  const commandItems = useMemo(
    () =>
      items.map((item) => ({
        label: `Go to ${item.label}`,
        href: item.href,
      })),
    [items]
  );

  return (
    <header className="pointer-events-none sticky top-3 z-40 px-4 sm:px-6">
      <nav className="pointer-events-auto mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl border border-neutral-200/75 bg-white/70 px-4 shadow-lg shadow-cyan-100/40 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/70 dark:shadow-cyan-950/30 sm:px-6">
        <a href="#hero" className="interactive-cursor text-sm font-semibold tracking-[0.16em] text-neutral-900 dark:text-neutral-100">
          {name}
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <ul className="flex items-center gap-2 rounded-xl border border-neutral-200/80 bg-white/80 p-1 dark:border-neutral-800 dark:bg-neutral-900/90">
            {items.map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  className={`interactive-cursor relative block rounded-lg px-3 py-1.5 text-sm transition ${
                    active === item.href
                      ? "text-neutral-950 dark:text-white"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {active === item.href ? (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 -z-10 rounded-lg bg-cyan-200/60 dark:bg-cyan-900/40"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  ) : null}
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
          <CommandPalette commands={commandItems} />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <CommandPalette commands={commandItems} />
        </div>
      </nav>

      <div className="pointer-events-auto lg:hidden">
        <ul className="mx-auto mt-2 flex w-full max-w-6xl gap-2 overflow-x-auto rounded-2xl border border-neutral-200/70 bg-white/70 px-4 py-2 text-sm text-neutral-600 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/70 dark:text-neutral-400 sm:px-6">
          {items.map((item) => (
            <li key={`${item.href}-mobile`} className="shrink-0">
              <a
                href={item.href}
                className={`interactive-cursor rounded-md px-2 py-1 transition hover:text-neutral-900 dark:hover:text-neutral-100 ${
                  active === item.href ? "bg-cyan-100 text-neutral-900 dark:bg-cyan-900/40 dark:text-neutral-100" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
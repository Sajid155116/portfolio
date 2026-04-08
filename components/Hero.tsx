"use client";

import MagneticButton from "@/components/MagneticButton";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type HeroProps = {
  name?: string;
  role?: string;
  summary?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  name = "Sajid Bhati",
  role = "Full Stack Developer",
  summary = "I build scalable web platforms and backend systems with a strong focus on clean architecture, performance, and developer experience.",
  primaryCta = { label: "View Projects", href: "#projects" },
  secondaryCta = { label: "Contact Me", href: "#contact" },
}: HeroProps) {
  const greeting = useMemo(() => `Hi, I'm ${name}`, [name]);
  const subtitles = ["Full Stack Dev", "Versatile Developer", "Problem Solver"];
  const [typedText, setTypedText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.35 });

  const glow = useMotionTemplate`radial-gradient(420px at ${springX}px ${springY}px, rgba(34, 211, 238, 0.22), transparent 70%)`;

  useEffect(() => {
    let frame = 0;
    let index = 0;

    const tick = () => {
      setTypedText(greeting.slice(0, index));
      index += 1;
      if (index <= greeting.length) {
        frame = window.setTimeout(tick, 70);
      }
    };

    tick();
    return () => window.clearTimeout(frame);
  }, [greeting]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSubtitleIndex((current) => (current + 1) % subtitles.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [subtitles.length]);

  return (
    <section id="hero" className="pt-12 sm:pt-16">
      <motion.div
        className="hero-grid relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-cyan-50 via-white to-orange-50 p-7 shadow-xl shadow-cyan-100/30 dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-cyan-950/20 sm:p-12"
        style={{ backgroundImage: glow }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={(event) => {
          const box = event.currentTarget.getBoundingClientRect();
          mouseX.set(event.clientX - box.left);
          mouseY.set(event.clientY - box.top);
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 16 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/50"
              style={{
                left: `${(index * 13) % 100}%`,
                top: `${(index * 17) % 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2 + (index % 4),
                ease: "easeInOut",
                delay: index * 0.08,
              }}
            />
          ))}
        </div>

        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
          <Sparkles size={14} />
          {role}
        </p>

        <h1 className="mt-5 min-h-[84px] text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:min-h-[100px] sm:text-6xl">
          {typedText}
          <span className="ml-1 inline-block h-[1em] w-[2px] animate-blink bg-cyan-500 align-middle" />
        </h1>

        <div className="mt-4 flex h-10 items-center text-lg font-medium text-neutral-700 dark:text-neutral-300 sm:text-xl">
          <span className="mr-2 text-neutral-500 dark:text-neutral-400">I am a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={subtitles[subtitleIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="text-cyan-700 dark:text-cyan-300"
            >
              {subtitles[subtitleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-400">{summary}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href={primaryCta.href} label={primaryCta.label} variant="solid" />
          <MagneticButton href={secondaryCta.href} label={secondaryCta.label} variant="outline" />
        </div>

        <p className="mt-8 text-xs tracking-[0.2em] text-neutral-500 dark:text-neutral-500">TYPE &quot;SAJID&quot; FOR A HIDDEN SURPRISE</p>
      </motion.div>
    </section>
  );
}

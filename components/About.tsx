"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Compass, Rocket, UserRound } from "lucide-react";

type AboutProps = {
  heading?: string;
};

const story = [
  {
    title: "Intro",
    icon: UserRound,
    content:
      "I am a software engineer who enjoys turning complex product requirements into reliable, elegant systems.",
  },
  {
    title: "Journey",
    icon: Compass,
    content:
      "From MNIT foundations to 2 years of production engineering, I have focused on backend architecture, full-stack delivery, and real-time features.",
  },
  {
    title: "What I Build",
    icon: Rocket,
    content:
      "I build collaboration tools, APIs, automation workflows, and developer-first products where performance and UX both matter.",
  },
];

export default function About({
  heading = "About",
}: AboutProps) {
  return (
    <AnimatedSection id="about" className="section-shell" delay={0.05}>
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <UserRound size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>

      <div className="surface-card mt-6 overflow-hidden sm:p-8">
        <div className="relative space-y-5 pl-8">
          <span className="absolute bottom-1 left-2 top-1 w-px bg-gradient-to-b from-cyan-500/70 via-neutral-300 to-orange-400/70 dark:via-neutral-700" />
          {story.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <motion.article
                key={entry.title}
                className="relative rounded-xl border border-neutral-200 bg-white/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/80"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <span className="absolute -left-[2.2rem] top-6 grid h-8 w-8 place-items-center rounded-full border border-cyan-400 bg-cyan-100 text-cyan-700 dark:border-cyan-600 dark:bg-cyan-950 dark:text-cyan-300">
                  <Icon size={14} />
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{entry.title}</h3>
                <p className="mt-2 leading-7 text-neutral-700 dark:text-neutral-300">{entry.content}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

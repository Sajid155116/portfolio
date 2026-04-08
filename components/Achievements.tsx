"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

type AchievementItem = {
  title: string;
  detail: string;
};

type AchievementsProps = {
  heading?: string;
  items?: AchievementItem[];
};

const defaultItems: AchievementItem[] = [
  {
    title: "800+ DSA Problems Solved",
    detail: "Consistently practiced data structures and algorithms through competitive and interview-oriented problem solving.",
  },
  {
    title: "Q1 2025 Spot Award",
    detail: "Recognized for high-impact engineering contributions and ownership of key product deliverables.",
  },
  {
    title: "2nd Rank Coding Contest",
    detail: "Secured second place in a coding competition through strong implementation speed and problem-solving accuracy.",
  },
];

export default function Achievements({
  heading = "Achievements",
  items = defaultItems,
}: AchievementsProps) {
  return (
    <AnimatedSection id="achievements" className="section-shell" delay={0.1}>
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <Trophy size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <motion.li
            key={item.title}
            className="surface-card hover-lift"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{item.detail}</p>
          </motion.li>
        ))}
      </ul>
    </AnimatedSection>
  );
}

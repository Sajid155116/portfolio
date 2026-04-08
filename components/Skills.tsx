"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Cloud, Database, Layers2, TerminalSquare } from "lucide-react";

type SkillGroup = {
  label: string;
  skills: string[];
};

type SkillsProps = {
  heading?: string;
  groups?: SkillGroup[];
  selectedSkill?: string | null;
  onSelectSkill?: (skill: string | null) => void;
};

const defaultGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Java", "Python", "C++", "JavaScript"] },
  { label: "Frameworks", skills: ["React", "Next.js", "NestJS", "Spring Boot"] },
  { label: "Cloud", skills: ["AWS S3", "AWS SQS", "AWS EC2"] },
  { label: "Database", skills: ["MongoDB"] },
];

export default function Skills({
  heading = "Skills",
  groups = defaultGroups,
  selectedSkill = null,
  onSelectSkill,
}: SkillsProps) {
  const iconByGroup: Record<string, React.ReactNode> = {
    Languages: <TerminalSquare size={16} className="text-neutral-500 dark:text-neutral-400" />,
    Frameworks: <Layers2 size={16} className="text-neutral-500 dark:text-neutral-400" />,
    Cloud: <Cloud size={16} className="text-neutral-500 dark:text-neutral-400" />,
    Database: <Database size={16} className="text-neutral-500 dark:text-neutral-400" />,
  };

  return (
    <AnimatedSection id="skills" className="section-shell" delay={0.08}>
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <TerminalSquare size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        Click a skill tag to spotlight projects using that stack.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <motion.article
            key={group.label}
            className="surface-card hover-lift"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {iconByGroup[group.label]}
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <button
                    type="button"
                    onClick={() => onSelectSkill?.(selectedSkill === skill ? null : skill)}
                    className={`interactive-cursor rounded-full border px-3 py-1 text-sm transition ${
                      selectedSkill === skill
                        ? "border-cyan-500 bg-cyan-500 text-white"
                        : "border-neutral-200 bg-neutral-100 text-neutral-700 hover:border-cyan-300 hover:bg-cyan-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-cyan-500 dark:hover:bg-cyan-950/30"
                    }`}
                  >
                    {skill}
                  </button>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}

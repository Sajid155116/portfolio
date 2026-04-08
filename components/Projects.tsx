"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, FolderKanban, Link2, X } from "lucide-react";
import { useMemo, useState } from "react";

type ProjectItem = {
  name: string;
  subtitle: string;
  description: string;
  category: "frontend" | "backend" | "fullstack";
  techStack: string[];
  highlights: string[];
  github?: string;
  live?: string;
};

type ProjectsProps = {
  heading?: string;
  items?: ProjectItem[];
  highlightSkill?: string | null;
};

const defaultItems: ProjectItem[] = [
  {
    name: "CMS",
    subtitle: "NestJS + Next.js",
    description:
      "Enterprise CMS with role-based workflows, document AI, and resilient file infrastructure for media-heavy teams.",
    category: "fullstack",
    techStack: ["NestJS", "Next.js", "MongoDB", "AWS S3", "OpenAI"],
    highlights: [
      "JWT + Google OAuth",
      "AWS S3 multipart uploads",
      "AI document summarization",
    ],
    github: "https://github.com/Sajid155116",
  },
  {
    name: "Connect",
    subtitle: "Multi-tenant collaboration platform",
    description:
      "Real-time workspace suite focused on communication and productivity with chat, meeting, and storage features.",
    category: "fullstack",
    techStack: ["React", "Socket.IO", "WebRTC", "Node.js", "AWS"],
    highlights: [
      "Socket.IO real-time chat",
      "WebRTC video/audio calling",
      "AWS S3 integration",
    ],
    live: "#",
  },
  {
    name: "AI DevOps Assistant",
    subtitle: "Log analysis and project insights",
    description:
      "Developer-facing assistant for ingesting logs, classifying failures, and surfacing actionable remediation guidance.",
    category: "backend",
    techStack: ["TypeScript", "Express", "MongoDB", "JWT", "Render"],
    highlights: [
      "Log ingestion pipeline",
      "Token-based auth",
      "Modular controller-service architecture",
    ],
    github: "https://github.com/Sajid155116",
  },
];

const categories: Array<"all" | "frontend" | "backend" | "fullstack"> = [
  "all",
  "frontend",
  "backend",
  "fullstack",
];

export default function Projects({
  heading = "Projects",
  items = defaultItems,
  highlightSkill = null,
}: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleItems = useMemo(() => {
    if (activeCategory === "all") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <AnimatedSection id="projects" className="section-shell" delay={0.12}>
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <FolderKanban size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`interactive-cursor rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              activeCategory === category
                ? "bg-cyan-500 text-white"
                : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {visibleItems.map((item) => (
          <motion.article
            key={item.name}
            className={`project-card interactive-cursor group relative overflow-hidden rounded-2xl border p-6 sm:p-7 ${
              highlightSkill && item.techStack.some((tech) => tech.toLowerCase() === highlightSkill.toLowerCase())
                ? "border-cyan-400 bg-cyan-50/65 dark:border-cyan-500 dark:bg-cyan-950/20"
                : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
            }`}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 170, damping: 18 }}
          >
            <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/25 blur-xl transition group-hover:bg-cyan-300/55 dark:bg-cyan-700/20 dark:group-hover:bg-cyan-600/35" />
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{item.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.name}</h3>
            <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">{item.subtitle}</p>
            <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setSelectedProject(item)}
              className="interactive-cursor mt-5 text-sm font-semibold text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
            >
              Open details
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-neutral-950/65 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
              initial={{ y: 26, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{selectedProject.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{selectedProject.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{selectedProject.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="interactive-cursor rounded-lg border border-neutral-300 p-2 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="mt-4 leading-7 text-neutral-700 dark:text-neutral-300">{selectedProject.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                {selectedProject.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-cursor inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    <Code2 size={15} />
                    GitHub
                  </a>
                ) : null}
                {selectedProject.live ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-cursor inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-cyan-500 dark:text-neutral-950 dark:hover:bg-cyan-400"
                  >
                    <Link2 size={15} />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AnimatedSection>
  );
}

"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

type ExperienceProps = {
  heading?: string;
  items?: ExperienceItem[];
};

const defaultItems: ExperienceItem[] = [
  {
    company: "Formidium Corp",
    role: "Software Engineer",
    period: "Aug 2024 - Apr 2026",
    highlights: [
      "Migration from Sails.js to NestJS and Next.js",
      "Built RBAC and user management modules",
      "Integrated Microsoft Graph APIs for Teams and Outlook",
      "Built microservices with Spring Boot and AWS SQS",
      "Developed Electron app with AWS S3 integration",
      "Worked on log pipelines using OpenTelemetry and Fluentd",
    ],
  },
];

export default function Experience({
  heading = "Experience",
  items = defaultItems,
}: ExperienceProps) {
  return (
    <AnimatedSection id="experience" className="section-shell" delay={0.1}>
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <BriefcaseBusiness size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            className="surface-card hover-lift sm:p-7"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.role}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.period}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">{item.company}</p>
            <ul className="mt-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}

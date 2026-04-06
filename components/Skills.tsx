import { Cloud, Database, Layers2, TerminalSquare } from "lucide-react";

type SkillGroup = {
  label: string;
  skills: string[];
};

type SkillsProps = {
  heading?: string;
  groups?: SkillGroup[];
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
}: SkillsProps) {
  const iconByGroup: Record<string, React.ReactNode> = {
    Languages: <TerminalSquare size={16} className="text-neutral-500 dark:text-neutral-400" />,
    Frameworks: <Layers2 size={16} className="text-neutral-500 dark:text-neutral-400" />,
    Cloud: <Cloud size={16} className="text-neutral-500 dark:text-neutral-400" />,
    Database: <Database size={16} className="text-neutral-500 dark:text-neutral-400" />,
  };

  return (
    <section id="skills" className="section-shell fade-up">
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <TerminalSquare size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <article key={group.label} className="surface-card hover-lift">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {iconByGroup[group.label]}
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

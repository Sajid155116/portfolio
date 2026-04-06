import { FolderKanban } from "lucide-react";

type ProjectItem = {
  name: string;
  subtitle: string;
  highlights: string[];
  href?: string;
};

type ProjectsProps = {
  heading?: string;
  items?: ProjectItem[];
};

const defaultItems: ProjectItem[] = [
  {
    name: "CMS",
    subtitle: "NestJS + Next.js",
    highlights: [
      "JWT + Google OAuth",
      "AWS S3 multipart uploads",
      "AI document summarization",
    ],
  },
  {
    name: "Connect",
    subtitle: "Multi-tenant collaboration platform",
    highlights: [
      "Socket.IO real-time chat",
      "WebRTC video/audio calling",
      "AWS S3 integration",
    ],
  },
];

export default function Projects({
  heading = "Projects",
  items = defaultItems,
}: ProjectsProps) {
  return (
    <section id="projects" className="section-shell fade-up">
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <FolderKanban size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.name} className="surface-card hover-lift sm:p-7">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.name}</h3>
            <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">{item.subtitle}</p>
            <ul className="mt-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {item.href ? (
              <a
                href={item.href}
                className="mt-5 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4"
              >
                View Project
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

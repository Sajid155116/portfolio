import { UserRound } from "lucide-react";

type AboutProps = {
  heading?: string;
  paragraphs?: string[];
};

const defaultParagraphs = [
  "Software Engineer with experience delivering modern full-stack products across web, cloud, and desktop environments.",
  "I enjoy building robust backend systems, real-time collaboration experiences, and clean frontends with strong developer ergonomics.",
];

export default function About({
  heading = "About",
  paragraphs = defaultParagraphs,
}: AboutProps) {
  return (
    <section id="about" className="section-shell fade-up">
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <UserRound size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>
      <div className="surface-card hover-lift mt-6 sm:p-8">
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-4xl leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

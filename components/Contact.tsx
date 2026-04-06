import { Link2, Mail, MapPin, MessageSquare } from "lucide-react";

type ContactProps = {
  heading?: string;
  email?: string;
  location?: string;
  links?: Array<{ label: string; href: string }>;
};

const defaultLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sajid-bhati-702595210" },
  { label: "GitHub", href: "https://github.com/Sajid155116" },
];

export default function Contact({
  heading = "Contact",
  email = "sajidbhati15511@example.com",
  location = "India",
  links = defaultLinks,
}: ContactProps) {
  return (
    <section id="contact" className="section-shell fade-up">
      <h2 className="section-title text-neutral-900 dark:text-neutral-100">
        <MessageSquare size={20} className="text-neutral-500 dark:text-neutral-400" />
        {heading}
      </h2>
      <div className="surface-card hover-lift mt-6 sm:p-8">
        <p className="text-neutral-700 dark:text-neutral-300">Open to software engineering roles and product-focused collaborations.</p>
        <p className="mt-4 flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
          <Mail size={18} className="mt-0.5 text-neutral-500 dark:text-neutral-400" />
          <span>
            Email:{" "}
          <a href={`mailto:${email}`} className="font-medium text-neutral-900 underline underline-offset-4 dark:text-neutral-100">
            {email}
          </a>
          </span>
        </p>
        <p className="mt-2 flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
          <MapPin size={18} className="mt-0.5 text-neutral-500 dark:text-neutral-400" />
          <span>Location: {location}</span>
        </p>
        <ul className="mt-4 flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
              >
                <Link2 size={16} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import ThemeToggle from "@/components/ThemeToggle";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  name?: string;
  items?: NavItem[];
};

const defaultItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  name = "Sajid Bhati",
  items = defaultItems,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/85 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/85">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#hero" className="text-sm font-semibold tracking-[0.08em] text-neutral-900 dark:text-neutral-100">
          {name}
        </a>
        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-5">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </nav>
      <div className="md:hidden">
        <ul className="flex gap-4 overflow-x-auto px-6 pb-3 text-sm text-neutral-600 dark:text-neutral-400 sm:px-10">
          {items.map((item) => (
            <li key={`${item.href}-mobile`} className="shrink-0">
              <a href={item.href} className="transition hover:text-neutral-900 dark:hover:text-neutral-100">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
type FooterProps = {
  name?: string;
  year?: number;
};

export default function Footer({
  name = "Sajid Bhati",
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="mt-6 border-t border-neutral-200 py-8 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 text-sm text-neutral-500 dark:text-neutral-400 sm:px-10">
        <p className="tracking-wide">
          {year} {name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

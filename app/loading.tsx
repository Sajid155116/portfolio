export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-12 pt-20 sm:px-10">
      <section className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-7 dark:border-neutral-800 dark:bg-neutral-900 sm:p-12">
        <div className="skeleton-line h-4 w-40 rounded" />
        <div className="skeleton-line h-12 w-3/4 rounded-lg" />
        <div className="skeleton-line h-7 w-1/2 rounded" />
        <div className="skeleton-line h-5 w-full rounded" />
        <div className="skeleton-line h-5 w-5/6 rounded" />
      </section>
    </main>
  );
}

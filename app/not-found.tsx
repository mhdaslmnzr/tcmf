import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-4 bg-[var(--tcmf-canvas)] px-6 text-center">
      <h1 className="text-2xl font-bold text-[var(--tcmf-ink)]">Page not found</h1>
      <p className="max-w-sm text-sm text-zinc-600">That route does not exist in this frontend preview.</p>
      <Link
        href="/"
        className="rounded-xl bg-[var(--tcmf-primary)] px-5 py-2.5 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </div>
  );
}

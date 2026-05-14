import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function TrusteeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-[var(--tcmf-canvas)]">
      <header className="border-b border-black/5 bg-[var(--tcmf-surface)] px-4 py-3">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
          <BrandLogo size={32} withWordmark />
          <Link href="/" className="text-sm font-semibold text-[var(--tcmf-primary)]">
            Exit to app
          </Link>
        </div>
        <nav
          className="mx-auto mt-3 flex max-w-2xl flex-wrap gap-2 border-t border-black/5 pt-3 text-xs font-semibold"
          aria-label="Trustee"
        >
          <Link
            href="/trustee/dashboard"
            className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700 hover:bg-zinc-200"
          >
            Dashboard
          </Link>
          <Link
            href="/trustee/approvals"
            className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700 hover:bg-zinc-200"
          >
            Spend approvals
          </Link>
          <Link
            href="/trustee/distribution"
            className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700 hover:bg-zinc-200"
          >
            Distribution
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">{children}</main>
    </div>
  );
}

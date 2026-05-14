import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { BottomNav } from "@/components/BottomNav";

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[var(--tcmf-canvas)]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[var(--tcmf-surface)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3 px-4 py-3">
          <BrandLogo size={36} />
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Link
              href="/trustee/dashboard"
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700 transition hover:bg-zinc-200"
            >
              Trustee
            </Link>
            <Link
              href="/admin/campaigns"
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700 transition hover:bg-zinc-200"
            >
              Admin
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-lg flex-1 px-4 pb-28 pt-4">{children}</main>
      <BottomNav />
    </div>
  );
}

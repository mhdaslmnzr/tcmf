import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { href: "/admin/campaigns", label: "Campaigns" },
  { href: "/admin/campaigns/new", label: "New" },
  { href: "/admin/spend", label: "Spend" },
  { href: "/admin/reports", label: "Reports" },
  { href: "/admin/trustees", label: "Trustees" },
] as const;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-zinc-100 md:flex-row">
      <aside className="border-b border-black/5 bg-[var(--tcmf-ink)] px-4 py-4 text-white md:w-56 md:border-b-0 md:border-r">
        <BrandLogo size={32} withWordmark wordmarkClassName="text-white" />
        <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-white/60">Admin</p>
        <nav className="mt-4 flex flex-row flex-wrap gap-2 md:flex-col md:gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="mt-6 inline-block text-xs font-semibold text-emerald-300">
          ← Public app
        </Link>
      </aside>
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}

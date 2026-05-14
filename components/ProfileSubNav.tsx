"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/profile", label: "Overview" },
  { href: "/profile/history", label: "Donations" },
  { href: "/profile/receipts", label: "Receipts" },
] as const;

export function ProfileSubNav() {
  const pathname = usePathname();
  return (
    <nav className="mb-5 flex gap-1 rounded-2xl bg-zinc-100/90 p-1 ring-1 ring-black/5" aria-label="Donor portal">
      {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`min-w-0 flex-1 rounded-xl py-2.5 text-center text-xs font-semibold transition ${
              active ? "bg-white text-[var(--tcmf-ink)] shadow-sm" : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

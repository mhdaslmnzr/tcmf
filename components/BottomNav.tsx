"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/campaigns", label: "Campaigns", icon: GridIcon },
  { href: "/ledger", label: "Ledger", icon: ListIcon },
  { href: "/about", label: "About", icon: InfoIcon },
  { href: "/profile", label: "Profile", icon: UserIcon },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/5 bg-[var(--tcmf-surface)]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : href === "/profile"
                ? pathname === "/profile" ||
                  pathname.startsWith("/profile/") ||
                  pathname === "/login" ||
                  pathname === "/signup"
                : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-medium transition-colors ${
                active ? "text-[var(--tcmf-primary)]" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              <Icon active={active} />
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "var(--tcmf-primary)" : "currentColor"}
      strokeWidth="1.8"
      className="shrink-0"
    >
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  );
}

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "var(--tcmf-primary)" : "currentColor"}
      strokeWidth="1.8"
      className="shrink-0"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function ListIcon({ active }: { active: boolean }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "var(--tcmf-primary)" : "currentColor"}
      strokeWidth="1.8"
      className="shrink-0"
    >
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon({ active }: { active: boolean }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "var(--tcmf-primary)" : "currentColor"}
      strokeWidth="1.8"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-5h-1M12 8h.01" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon({ active }: { active: boolean }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "var(--tcmf-primary)" : "currentColor"}
      strokeWidth="1.8"
      className="shrink-0"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M6.5 19.5a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
    </svg>
  );
}

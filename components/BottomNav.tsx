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
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--surface)",
        borderTop: "0.5px solid var(--border-mid)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      aria-label="Primary"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "stretch",
          maxWidth: "512px",
          margin: "0 auto",
          height: "40px",
        }}
      >
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
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                textDecoration: "none",
                paddingTop: "8px",
              }}
            >
              <Icon active={active} />
              {active ? (
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--text)",
                  }}
                />
              ) : (
                <span
                  style={{
                    fontSize: "8px",
                    fontWeight: 400,
                    color: "var(--text-muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
      stroke={active ? "var(--text)" : "var(--text-muted)"} strokeWidth="1.8">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  );
}

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
      stroke={active ? "var(--text)" : "var(--text-muted)"} strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function ListIcon({ active }: { active: boolean }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
      stroke={active ? "var(--text)" : "var(--text-muted)"} strokeWidth="1.8">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon({ active }: { active: boolean }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
      stroke={active ? "var(--text)" : "var(--text-muted)"} strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-5h-1M12 8h.01" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon({ active }: { active: boolean }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
      stroke={active ? "var(--text)" : "var(--text-muted)"} strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M6.5 19.5a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
    </svg>
  );
}

"use client";

import { useMemo, useState } from "react";
import { CampaignGridCard } from "@/components/CampaignGridCard";
import { causeLabel } from "@/lib/cause-styles";
import type { CauseCategory } from "@/lib/types";
import { mockCampaigns } from "@/lib/mock-data";

const filters: (CauseCategory | "all")[] = [
  "all",
  "education",
  "health",
  "livelihood",
  "women",
  "environment",
];

export function CampaignsBrowser() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [q, setQ] = useState("");

  const filteredCampaigns = useMemo(() => {
    return mockCampaigns.filter((c) => {
      if (filter !== "all" && c.cause !== filter) return false;
      if (q.trim()) {
        const s = q.trim().toLowerCase();
        if (!c.title.toLowerCase().includes(s) && !c.slug.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  }, [filter, q]);

  const active = useMemo(
    () => filteredCampaigns.filter((c) => c.status === "active"),
    [filteredCampaigns],
  );
  const closed = useMemo(
    () => filteredCampaigns.filter((c) => c.status === "closed"),
    [filteredCampaigns],
  );

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--tcmf-ink)]">Campaigns</h1>
        <p className="mt-1 text-sm text-zinc-600">Browse active work and completed campaigns.</p>
      </div>
      <input
        type="search"
        placeholder="Search by title…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-black/5 placeholder:text-zinc-400 focus:ring-2 focus:ring-[var(--tcmf-primary)]/25"
      />
      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
              filter === f
                ? "bg-[var(--tcmf-ink)] text-white"
                : "bg-white text-zinc-600 ring-1 ring-black/5 hover:bg-zinc-50"
            }`}
          >
            {f === "all" ? "All" : causeLabel[f]}
          </button>
        ))}
      </div>
      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Active</h2>
        <div className="grid grid-cols-2 gap-3">
          {active.map((c) => (
            <CampaignGridCard key={c.id} campaign={c} />
          ))}
        </div>
        {active.length === 0 ? (
          <p className="rounded-2xl bg-white px-4 py-6 text-center text-sm text-zinc-500 ring-1 ring-black/5">
            No campaigns match your filters.
          </p>
        ) : null}
      </section>
      <section className="space-y-3 pt-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Completed</h2>
        <div className="grid grid-cols-2 gap-3">
          {closed.map((c) => (
            <CampaignGridCard key={c.id} campaign={c} muted />
          ))}
        </div>
      </section>
    </div>
  );
}

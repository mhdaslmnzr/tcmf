"use client";

import { useMemo, useState } from "react";
import { formatINR } from "@/lib/format";
import type { LedgerEntry, LedgerEntryType } from "@/lib/types";

const entryTypes: (LedgerEntryType | "all")[] = [
  "all",
  "donation_in",
  "spend_out",
  "surplus_transfer",
  "correction",
];

const labels: Record<string, string> = {
  all: "All types",
  donation_in: "Donations in",
  spend_out: "Spend out",
  surplus_transfer: "Surplus",
  correction: "Corrections",
};

function startOfDay(isoDate: string): number {
  return new Date(`${isoDate}T00:00:00`).getTime();
}

function endOfDay(isoDate: string): number {
  return new Date(`${isoDate}T23:59:59.999`).getTime();
}

export function LedgerExplorer({ entries }: { entries: LedgerEntry[] }) {
  const [type, setType] = useState<(typeof entryTypes)[number]>("all");
  const [campaign, setCampaign] = useState<string>("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const campaigns = useMemo(() => {
    const set = new Set<string>();
    entries.forEach((e) => {
      if (e.campaignSlug) set.add(e.campaignSlug);
    });
    return ["all", ...Array.from(set)];
  }, [entries]);

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      if (type !== "all" && e.entryType !== type) return false;
      if (campaign !== "all" && e.campaignSlug !== campaign) return false;
      const ts = new Date(e.timestamp).getTime();
      if (from && ts < startOfDay(from)) return false;
      if (to && ts > endOfDay(to)) return false;
      return true;
    });
  }, [entries, type, campaign, from, to]);

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Filters</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="mb-1 block text-xs font-medium text-zinc-500">Entry type</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
            >
              {entryTypes.map((t) => (
                <option key={t} value={t}>
                  {labels[t]}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-xs font-medium text-zinc-500">Campaign</span>
            <select
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
            >
              <option value="all">All campaigns</option>
              {campaigns
                .filter((c) => c !== "all")
                .map((slug) => (
                  <option key={slug} value={slug}>
                    {slug.replace(/-/g, " ")}
                  </option>
                ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-xs font-medium text-zinc-500">From date</span>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-xs font-medium text-zinc-500">To date</span>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
            />
          </label>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
        <ul className="divide-y divide-zinc-100">
          {filtered.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-zinc-500">No entries match these filters.</li>
          ) : (
            filtered.map((e) => (
              <li key={e.permanentId} className="px-4 py-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-mono text-xs font-semibold text-[var(--tcmf-primary)]">
                      {e.permanentId}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[var(--tcmf-ink)]">
                      {e.campaignTitle ?? "—"}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {new Date(e.timestamp).toLocaleString("en-IN")} · {labels[e.entryType] ?? e.entryType}
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">{e.description}</p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-semibold tabular-nums ${
                        e.amount < 0 ? "text-rose-600" : "text-[var(--tcmf-ink)]"
                      }`}
                    >
                      {e.amount < 0 ? "−" : ""}
                      {formatINR(Math.abs(e.amount))}
                    </p>
                    <p
                      className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        e.verified ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-900"
                      }`}
                    >
                      {e.verified ? "Verified" : "Pending"}
                    </p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

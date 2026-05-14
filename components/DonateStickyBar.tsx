"use client";

import Link from "next/link";
import { formatINR } from "@/lib/format";
import type { Campaign } from "@/lib/types";

export function DonateStickyBar({ campaign }: { campaign: Campaign }) {
  const closed = campaign.status === "closed";
  if (closed) return null;
  const suggested = Math.max(100, Math.round(campaign.goalAmount * 0.01));
  return (
    <div className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] left-0 right-0 z-40 px-4">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3 rounded-2xl bg-[var(--tcmf-ink)] px-4 py-3 text-white shadow-lg">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/70">Donate</p>
          <p className="truncate text-sm font-semibold">{campaign.title}</p>
        </div>
        <Link
          href={`/campaigns/${campaign.slug}/donate`}
          className="shrink-0 rounded-xl bg-[var(--tcmf-accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.98]"
        >
          From {formatINR(suggested)}
        </Link>
      </div>
    </div>
  );
}

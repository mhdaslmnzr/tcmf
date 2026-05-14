"use client";

import Link from "next/link";
import { useState } from "react";
import { mockDistributionQueue } from "@/lib/mock-data";

export default function TrusteeDistributionPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  return (
    <div className="space-y-6">
      <div>
        <Link href="/trustee/dashboard" className="text-sm font-semibold text-[var(--tcmf-primary)]">
          ← Dashboard
        </Link>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--tcmf-ink)]">Distribution proofs</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Verify public counts and imagery. Internal registers are opened in the trustee app, not on the public
          site.
        </p>
      </div>
      <ul className="space-y-4">
        {mockDistributionQueue.map((d) => (
          <li key={d.id} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-semibold text-[var(--tcmf-ink)]">{d.campaignTitle}</p>
            <p className="mt-1 text-xs text-zinc-500">
              Public count:{" "}
              <span className="font-semibold text-[var(--tcmf-ink)]">
                {d.publicCount.toLocaleString("en-IN")}
              </span>{" "}
              · waiting ~{d.waitingHours}h
            </p>
            <p className="mt-2 text-sm text-zinc-700">{d.summary}</p>
            <button
              type="button"
              disabled={done[d.id]}
              onClick={() => setDone((s) => ({ ...s, [d.id]: true }))}
              className="mt-4 w-full rounded-xl bg-[var(--tcmf-primary)] py-3 text-sm font-semibold text-white disabled:opacity-50"
            >
              {done[d.id] ? "Signed (mock)" : "Sign off distribution proof"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

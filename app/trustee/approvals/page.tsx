"use client";

import { useState } from "react";
import { formatINR } from "@/lib/format";
import { mockTrusteeQueue } from "@/lib/mock-data";

export default function TrusteeApprovalsPage() {
  const [signed, setSigned] = useState<Record<string, boolean>>({});
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--tcmf-ink)]">Approvals</h1>
        <p className="mt-1 text-sm text-zinc-600">
          You cannot sign a spend you uploaded — that rule will be enforced in the API. Mock UI only.
        </p>
      </div>
      <ul className="space-y-4">
        {mockTrusteeQueue.map((q) => (
          <li key={q.id} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-semibold text-[var(--tcmf-ink)]">{q.title}</p>
            {q.amount > 0 ? (
              <p className="mt-2 text-lg font-bold tabular-nums">{formatINR(q.amount)}</p>
            ) : null}
            <button
              type="button"
              disabled={signed[q.id]}
              onClick={() => setSigned((s) => ({ ...s, [q.id]: true }))}
              className="mt-4 w-full rounded-xl bg-[var(--tcmf-primary)] py-3 text-sm font-semibold text-white disabled:opacity-50"
            >
              {signed[q.id] ? "Signed (mock)" : "Sign off"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

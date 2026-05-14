"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatINR } from "@/lib/format";
import type { Campaign } from "@/lib/types";

const presets = [100, 500, 2000, 5000, 10000];

export function DonateForm({ campaign }: { campaign: Campaign }) {
  const router = useRouter();
  const [amount, setAmount] = useState(500);
  const [busy, setBusy] = useState(false);

  function submit() {
    setBusy(true);
    window.setTimeout(() => {
      router.push(`/campaigns/${campaign.slug}/donate/thanks?amount=${amount}`);
    }, 450);
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Amount (INR)</p>
        <p className="mt-1 text-3xl font-bold tabular-nums text-[var(--tcmf-ink)]">{formatINR(amount)}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setAmount(p)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              amount === p
                ? "bg-[var(--tcmf-ink)] text-white"
                : "bg-white text-zinc-700 ring-1 ring-black/5 hover:bg-zinc-50"
            }`}
          >
            {formatINR(p)}
          </button>
        ))}
      </div>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-zinc-600">Custom</span>
        <input
          type="number"
          min={100}
          step={100}
          value={amount}
          onChange={(e) => setAmount(Math.max(100, Number(e.target.value) || 100))}
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 font-medium tabular-nums outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
        />
      </label>
      <div className="rounded-2xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-950 ring-1 ring-amber-200/80">
        Mock checkout only. Production uses Razorpay, server-side idempotency on webhooks, then a ledger line
        and private receipt data.
      </div>
      <button
        type="button"
        disabled={busy}
        onClick={submit}
        className="w-full rounded-2xl bg-[var(--tcmf-accent)] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:opacity-60"
      >
        {busy ? "Redirecting…" : "Continue (mock payment)"}
      </button>
    </div>
  );
}

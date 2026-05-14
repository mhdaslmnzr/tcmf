"use client";

import Link from "next/link";
import { useState } from "react";
import { causeLabel } from "@/lib/cause-styles";
import type { CauseCategory } from "@/lib/types";

const causes: CauseCategory[] = [
  "education",
  "health",
  "livelihood",
  "women",
  "environment",
  "general",
];

export default function AdminNewCampaignPage() {
  const [title, setTitle] = useState("");
  const [cause, setCause] = useState<CauseCategory>("general");
  const [goal, setGoal] = useState("500000");
  const [story, setStory] = useState("");

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <Link href="/admin/campaigns" className="text-sm font-semibold text-[var(--tcmf-primary)]">
        ← Campaigns
      </Link>
      <div>
        <h1 className="text-2xl font-bold text-[var(--tcmf-ink)]">New campaign</h1>
        <p className="mt-1 text-sm text-zinc-600">Form posts to Django later. Cover image uploads go to R2.</p>
      </div>
      <form
        className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Would create draft: ${title || "(untitled)"} · ${cause} · goal ${goal}`);
        }}
      >
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-zinc-700">Title</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-zinc-700">Cause</span>
          <select
            value={cause}
            onChange={(e) => setCause(e.target.value as CauseCategory)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
          >
            {causes.map((c) => (
              <option key={c} value={c}>
                {causeLabel[c]}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-zinc-700">Goal (INR)</span>
          <input
            type="number"
            min={10000}
            step={1000}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm tabular-nums outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-zinc-700">Story</span>
          <textarea
            rows={5}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
            placeholder="Long-form narrative for the Overview tab…"
          />
        </label>
        <div className="rounded-xl bg-zinc-50 px-4 py-3 text-xs text-zinc-600 ring-1 ring-black/5">
          Closure rules: bill photo, distribution proof with public count + internal register, and two trustee
          sign-offs — enforced in the API.
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--tcmf-ink)] py-3 text-sm font-semibold text-white"
        >
          Save as draft (mock)
        </button>
      </form>
    </div>
  );
}

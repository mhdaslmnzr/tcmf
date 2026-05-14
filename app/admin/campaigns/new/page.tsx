"use client";

import Link from "next/link";
import { useState } from "react";
import { pillarLabel } from "@/lib/cause-styles";
import type { Pillar } from "@/lib/types";

const pillars: Pillar[] = ["work", "educate", "empower", "elevate"];

export default function AdminNewCampaignPage() {
  const [title, setTitle] = useState("");
  const [pillar, setPillar] = useState<Pillar>("educate");
  const [goal, setGoal] = useState("500000");
  const [story, setStory] = useState("");

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <Link href="/admin/campaigns" className="text-sm font-medium" style={{ color: "var(--educate)" }}>
        ← Campaigns
      </Link>
      <div>
        <h1 className="text-2xl font-medium" style={{ color: "var(--text)" }}>New campaign</h1>
        <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>Form posts to Django later. Cover image uploads go to R2.</p>
      </div>
      <form
        className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Would create draft: ${title || "(untitled)"} · ${pillar} · goal ${goal}`);
        }}
      >
        <label className="block text-sm">
          <span className="mb-1 block font-medium" style={{ color: "var(--text-mid)" }}>Title</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border px-3 py-2.5 text-sm outline-none"
            style={{ borderColor: "var(--border-mid)", color: "var(--text)" }}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium" style={{ color: "var(--text-mid)" }}>Pillar</span>
          <select
            value={pillar}
            onChange={(e) => setPillar(e.target.value as Pillar)}
            className="w-full rounded-xl border bg-white px-3 py-2.5 text-sm outline-none"
            style={{ borderColor: "var(--border-mid)", color: "var(--text)" }}
          >
            {pillars.map((p) => (
              <option key={p} value={p}>
                {pillarLabel[p]}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium" style={{ color: "var(--text-mid)" }}>Goal (INR)</span>
          <input
            type="number"
            min={10000}
            step={1000}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full rounded-xl border px-3 py-2.5 text-sm tabular-nums outline-none"
            style={{ borderColor: "var(--border-mid)", color: "var(--text)" }}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium" style={{ color: "var(--text-mid)" }}>Story</span>
          <textarea
            rows={5}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full rounded-xl border px-3 py-2.5 text-sm outline-none"
            style={{ borderColor: "var(--border-mid)", color: "var(--text)" }}
            placeholder="Long-form narrative for the Overview tab…"
          />
        </label>
        <div
          className="rounded-xl px-4 py-3 text-xs ring-1 ring-black/5"
          style={{ background: "var(--base)", color: "var(--text-mid)" }}
        >
          Closure rules: bill photo, distribution proof with public count + internal register, and two trustee
          sign-offs — enforced in the API.
        </div>
        <button
          type="submit"
          className="w-full rounded-xl py-3 text-sm font-medium text-white"
          style={{ background: "var(--text)" }}
        >
          Save as draft (mock)
        </button>
      </form>
    </div>
  );
}

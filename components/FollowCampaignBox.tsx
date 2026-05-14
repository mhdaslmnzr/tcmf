"use client";

import { useState } from "react";

export function FollowCampaignBox({ campaignTitle }: { campaignTitle: string }) {
  const [email, setEmail] = useState("");
  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <p className="text-sm font-semibold text-[var(--tcmf-ink)]">Follow this campaign</p>
      <p className="mt-1 text-xs text-zinc-500">No account required. Mock only — no emails are sent.</p>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Would subscribe ${email || "(empty)"} to “${campaignTitle}”.`);
        }}
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-[var(--tcmf-primary)] px-4 py-2 text-sm font-semibold text-white"
        >
          Follow
        </button>
      </form>
    </div>
  );
}

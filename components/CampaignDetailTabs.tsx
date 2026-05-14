"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { formatINR } from "@/lib/format";
import {
  getCampaignUpdatesForSlug,
  getDistributionForCampaign,
  getSpendsForCampaign,
} from "@/lib/mock-data";
import { updateBadgeLabel } from "@/lib/cause-styles";
import { timeAgo } from "@/lib/format";
import type { Campaign } from "@/lib/types";

const tabs = ["Overview", "Spend log", "Distribution", "Updates"] as const;

export function CampaignDetailTabs({ campaign }: { campaign: Campaign }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  const spends = useMemo(() => getSpendsForCampaign(campaign.slug), [campaign.slug]);
  const distribution = useMemo(() => getDistributionForCampaign(campaign.slug), [campaign.slug]);
  const updates = useMemo(() => getCampaignUpdatesForSlug(campaign.slug), [campaign.slug]);
  const surplus =
    campaign.status === "closed" && campaign.amountRaised > campaign.goalAmount
      ? campaign.amountRaised - campaign.goalAmount
      : null;

  return (
    <div className="space-y-4">
      <div className="flex gap-1 overflow-x-auto rounded-2xl bg-zinc-100/80 p-1 ring-1 ring-black/5">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`min-w-0 flex-1 whitespace-nowrap rounded-xl px-3 py-2 text-center text-xs font-semibold transition ${
              tab === t
                ? "bg-white text-[var(--tcmf-ink)] shadow-sm"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Overview" ? (
        <div className="space-y-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
          <p className="text-sm leading-relaxed text-zinc-700">{campaign.story}</p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Cost breakdown</p>
            <div className="mt-2 overflow-hidden rounded-2xl ring-1 ring-black/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  <tr>
                    <th className="px-3 py-2">Item</th>
                    <th className="px-3 py-2 text-right">Qty</th>
                    <th className="px-3 py-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {campaign.costBreakdown.map((row) => (
                    <tr key={row.item} className="border-t border-zinc-100">
                      <td className="px-3 py-2">{row.item}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{row.quantity}</td>
                      <td className="px-3 py-2 text-right tabular-nums font-medium">
                        {formatINR(row.total)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
            <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium">
              Opened {new Date(campaign.openedAt).toLocaleDateString("en-IN")}
            </span>
            {campaign.closesAt ? (
              <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium">
                Closes {new Date(campaign.closesAt).toLocaleDateString("en-IN")}
              </span>
            ) : null}
            {campaign.closedAt ? (
              <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium">
                Closed {new Date(campaign.closedAt).toLocaleDateString("en-IN")}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}

      {tab === "Spend log" ? (
        <ul className="space-y-3">
          {spends.map((s) => (
            <li
              key={s.id}
              className="flex gap-3 rounded-3xl bg-white p-3 shadow-sm ring-1 ring-black/5"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                <Image src={s.billThumb} alt="" fill className="object-cover" sizes="64px" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--tcmf-ink)]">{s.vendor}</p>
                <p className="text-xs capitalize text-zinc-500">{s.category}</p>
                <p className="mt-1 text-sm font-semibold tabular-nums">{formatINR(s.amount)}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="text-zinc-400">{s.date}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-semibold ${
                      s.verified ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    {s.verified ? "Verified (2 sign-offs)" : `${s.signoffCount}/2 sign-offs`}
                  </span>
                </div>
              </div>
            </li>
          ))}
          {surplus && surplus > 0 ? (
            <li className="rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
              <span className="font-semibold text-[var(--tcmf-ink)]">Surplus line: </span>
              {formatINR(surplus)} allocated per trust policy after closure.
            </li>
          ) : null}
        </ul>
      ) : null}

      {tab === "Distribution" ? (
        <div className="space-y-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
          <p className="text-3xl font-bold tabular-nums text-[var(--tcmf-ink)]">
            {distribution.publicCount.toLocaleString("en-IN")}
          </p>
          <p className="text-sm text-zinc-600">
            Public beneficiary count only. Internal registers are not linked here.
          </p>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <Image
              src={distribution.photo}
              alt="Distribution — no identifiable faces in public imagery"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 480px"
            />
          </div>
          <p
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
              distribution.verified ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-900"
            }`}
          >
            {distribution.verified ? "Verified (trustee sign-off)" : "Pending verification"}
          </p>
        </div>
      ) : null}

      {tab === "Updates" ? (
        <ul className="space-y-3">
          {updates.length === 0 ? (
            <li className="rounded-3xl bg-white p-6 text-center text-sm text-zinc-500 ring-1 ring-black/5">
              No updates yet.
            </li>
          ) : (
            updates.map((u) => (
              <li key={u.id} className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "var(--text-mid)",
                      background: "var(--base)",
                      borderRadius: "var(--r-pill)",
                      padding: "2px 8px",
                      border: "0.5px solid var(--border-mid)",
                    }}
                  >
                    {updateBadgeLabel[u.updateType] ?? "Update"}
                  </span>
                  <span className="text-xs text-zinc-400">{timeAgo(u.postedAt)}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{u.content}</p>
                {u.image ? (
                  <div className="relative mt-3 aspect-video w-full overflow-hidden rounded-2xl">
                    <Image src={u.image} alt="" fill className="object-cover" sizes="100vw" />
                  </div>
                ) : null}
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}

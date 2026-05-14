import Image from "next/image";
import Link from "next/link";
import { causeChipClass, causeLabel } from "@/lib/cause-styles";
import { formatINR } from "@/lib/format";
import type { Campaign } from "@/lib/types";

function daysLeft(closesAt: string | null, status: Campaign["status"]): string | null {
  if (status !== "active" || !closesAt) return null;
  const end = new Date(closesAt).getTime();
  const d = Math.ceil((end - Date.now()) / (1000 * 60 * 60 * 24));
  if (d < 0) return "Closing soon";
  return `${d} days left`;
}

export function CampaignGridCard({ campaign, muted }: { campaign: Campaign; muted?: boolean }) {
  const pct = Math.min(100, Math.round((campaign.amountRaised / campaign.goalAmount) * 100));
  const href = `/campaigns/${campaign.slug}`;
  const left = daysLeft(campaign.closesAt, campaign.status);
  return (
    <Link
      href={href}
      className={`block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md ${
        muted ? "opacity-80" : ""
      }`}
    >
      <div className="relative aspect-square w-full sm:aspect-[4/5]">
        <Image
          src={campaign.coverImage}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 240px"
        />
        <div className="absolute left-2.5 top-2.5">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${causeChipClass[campaign.cause]}`}
          >
            {causeLabel[campaign.cause]}
          </span>
        </div>
      </div>
      <div className="space-y-2 p-3">
        <p className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--tcmf-ink)]">
          {campaign.title}
        </p>
        <div>
          <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
            <div
              className="h-full rounded-full bg-[var(--tcmf-primary)]"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="font-medium text-zinc-700">
              {formatINR(campaign.amountRaised)}{" "}
              <span className="text-zinc-400">/ {formatINR(campaign.goalAmount)}</span>
            </span>
            {left ? <span>{left}</span> : campaign.status === "closed" ? <span>Closed</span> : null}
          </div>
        </div>
        <p className="text-[11px] text-zinc-500">
          {campaign.beneficiaryReached.toLocaleString("en-IN")} /{" "}
          {campaign.beneficiaryTarget.toLocaleString("en-IN")} beneficiaries
        </p>
      </div>
    </Link>
  );
}

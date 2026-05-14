import Image from "next/image";
import Link from "next/link";
import { causeChipClass, causeLabel } from "@/lib/cause-styles";
import type { Campaign } from "@/lib/types";

const SHARE_MESSAGE =
  "I contributed to this campaign. It is your chance to make the world better.";

export function ShareCardPublic({ campaign }: { campaign: Campaign }) {
  const pct = Math.min(100, Math.round((campaign.amountRaised / campaign.goalAmount) * 100));
  return (
    <article className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
      <div className="relative aspect-[16/10] w-full bg-zinc-100">
        <Image src={campaign.coverImage} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" />
        <div className="absolute left-3 top-3">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${causeChipClass[campaign.cause]}`}
          >
            {causeLabel[campaign.cause]}
          </span>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h1 className="text-lg font-bold leading-snug text-[var(--tcmf-ink)]">{campaign.title}</h1>
        <div>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full rounded-full bg-[var(--tcmf-primary)]" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-xs font-medium text-zinc-500">
            Progress is public. Donor names and individual amounts are never shown.
          </p>
        </div>
        <blockquote className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm font-medium leading-relaxed text-zinc-800">
          “{SHARE_MESSAGE}”
        </blockquote>
        <Link
          href={`/campaigns/${campaign.slug}`}
          className="block w-full rounded-xl bg-[var(--tcmf-primary)] py-3 text-center text-sm font-semibold text-white"
        >
          View campaign
        </Link>
      </div>
    </article>
  );
}

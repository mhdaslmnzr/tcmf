import Image from "next/image";
import Link from "next/link";
import { causeChipClass, causeLabel, updateBadgeClass, updateBadgeLabel } from "@/lib/cause-styles";
import { timeAgo } from "@/lib/format";
import type { CampaignUpdate } from "@/lib/types";

export function FeedCard({ update }: { update: CampaignUpdate }) {
  const href = `/campaigns/${update.campaignSlug}`;
  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={update.coverImage}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${causeChipClass[update.cause]}`}
          >
            {causeLabel[update.cause]}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${updateBadgeClass[update.updateType] ?? updateBadgeClass.general}`}
          >
            {updateBadgeLabel[update.updateType] ?? "Update"}
          </span>
        </div>
      </div>
      <div className="space-y-2 p-4">
        <p className="text-sm font-semibold text-[var(--tcmf-ink)]">{update.campaignTitle}</p>
        <p className="text-sm leading-relaxed text-zinc-700">{update.content}</p>
        {update.image ? (
          <div className="relative mt-2 aspect-[2/1] w-full overflow-hidden rounded-2xl">
            <Image
              src={update.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        ) : null}
        <p className="text-xs font-medium text-zinc-400">{timeAgo(update.postedAt)}</p>
      </div>
    </Link>
  );
}

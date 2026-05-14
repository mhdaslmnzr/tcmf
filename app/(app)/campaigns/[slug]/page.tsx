import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampaignDetailTabs } from "@/components/CampaignDetailTabs";
import { DonateStickyBar } from "@/components/DonateStickyBar";
import { FollowCampaignBox } from "@/components/FollowCampaignBox";
import { causeChipClass, causeLabel } from "@/lib/cause-styles";
import { formatINR } from "@/lib/format";
import { getCampaignBySlug, getShareTokenForSlug, mockCampaigns } from "@/lib/mock-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mockCampaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = getCampaignBySlug(slug);
  if (!c) return { title: "Campaign" };
  return { title: `${c.title} · TCMF` };
}

export default async function CampaignDetailPage({ params }: Props) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  const pct = Math.min(100, Math.round((campaign.amountRaised / campaign.goalAmount) * 100));
  const shareToken = getShareTokenForSlug(slug);

  return (
    <div className="space-y-4 pb-40">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Link href="/campaigns" className="text-sm font-semibold text-[var(--tcmf-primary)]">
          ← Campaigns
        </Link>
        {shareToken ? (
          <Link
            href={`/share/${shareToken}`}
            className="text-sm font-semibold text-zinc-600 underline-offset-2 hover:text-[var(--tcmf-ink)] hover:underline"
          >
            Share card
          </Link>
        ) : null}
      </div>
      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl ring-1 ring-black/5">
        <Image
          src={campaign.coverImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="(max-width:768px) 100vw, 480px"
        />
        <div className="absolute left-3 top-3">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${causeChipClass[campaign.cause]}`}
          >
            {causeLabel[campaign.cause]}
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--tcmf-ink)]">{campaign.title}</h1>
        <div className="mt-3">
          <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full rounded-full bg-[var(--tcmf-primary)]" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2 text-sm">
            <span className="font-semibold tabular-nums text-[var(--tcmf-ink)]">
              {formatINR(campaign.amountRaised)}{" "}
              <span className="font-normal text-zinc-500">raised of {formatINR(campaign.goalAmount)}</span>
            </span>
            <span className="text-xs font-medium text-zinc-500">
              {campaign.beneficiaryReached.toLocaleString("en-IN")} /{" "}
              {campaign.beneficiaryTarget.toLocaleString("en-IN")} beneficiaries (public count)
            </span>
          </div>
        </div>
      </div>
      <FollowCampaignBox campaignTitle={campaign.title} />
      <CampaignDetailTabs campaign={campaign} />
      <DonateStickyBar campaign={campaign} />
    </div>
  );
}

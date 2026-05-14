import Link from "next/link";
import { notFound } from "next/navigation";
import { getCampaignBySlug, getShareTokenForSlug } from "@/lib/mock-data";
import { formatINR } from "@/lib/format";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ amount?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = getCampaignBySlug(slug);
  return { title: c ? `Thanks · ${c.title}` : "Thanks" };
}

export default async function DonateThanksPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { amount: amountRaw } = await searchParams;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();
  const amount = Math.max(0, Number(amountRaw) || 0);
  const shareToken = getShareTokenForSlug(slug);

  return (
    <div className="space-y-6">
      <Link href={`/campaigns/${slug}`} className="text-sm font-semibold text-[var(--tcmf-primary)]">
        ← Campaign
      </Link>
      <div className="rounded-3xl bg-emerald-50 p-6 ring-1 ring-emerald-200/80">
        <p className="text-sm font-semibold text-emerald-900">Thank you (mock)</p>
        <p className="mt-2 text-sm leading-relaxed text-emerald-950/90">
          Your support for <strong>{campaign.title}</strong> is recorded only after Razorpay confirms payment
          in production. This screen previews the donor experience.
        </p>
        {amount > 0 ? (
          <p className="mt-3 text-xs font-medium text-emerald-900/80">
            Chosen amount (private to you): {formatINR(amount)} — not shown on any public page.
          </p>
        ) : null}
      </div>
      {shareToken ? (
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-semibold text-[var(--tcmf-ink)]">Share without identity</p>
          <p className="mt-1 text-xs leading-relaxed text-zinc-600">
            The share card never includes your name or amount — only the campaign and progress.
          </p>
          <Link
            href={`/share/${shareToken}`}
            className="mt-4 inline-flex w-full justify-center rounded-xl bg-[var(--tcmf-primary)] py-3 text-sm font-semibold text-white"
          >
            Preview share card
          </Link>
        </div>
      ) : null}
      <Link href="/profile/history" className="block text-center text-sm font-semibold text-[var(--tcmf-primary)]">
        View donation history (mock)
      </Link>
    </div>
  );
}

import { notFound } from "next/navigation";
import { ShareCardPublic } from "@/components/ShareCardPublic";
import { getCampaignBySlug, getSlugByShareToken, shareTokenBySlug } from "@/lib/mock-data";

type Props = { params: Promise<{ token: string }> };

export function generateStaticParams() {
  return Object.values(shareTokenBySlug).map((token) => ({ token }));
}

export async function generateMetadata({ params }: Props) {
  const { token } = await params;
  const slug = getSlugByShareToken(token);
  const c = slug ? getCampaignBySlug(slug) : undefined;
  return { title: c ? `Share · ${c.title}` : "Share · TCMF" };
}

export default async function PublicSharePage({ params }: Props) {
  const { token } = await params;
  const slug = getSlugByShareToken(token);
  if (!slug) notFound();
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  return (
    <div className="flex min-h-full flex-col bg-[var(--tcmf-canvas)] px-4 py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Share without identity · preview
      </p>
      <ShareCardPublic campaign={campaign} />
      <p className="mx-auto mt-8 max-w-md text-center text-[11px] leading-relaxed text-zinc-500">
        No donor name or amount appears on this card. In production, Razorpay confirms payment before any
        ledger line is written.
      </p>
    </div>
  );
}

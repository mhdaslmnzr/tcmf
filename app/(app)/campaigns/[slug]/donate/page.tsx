import Link from "next/link";
import { notFound } from "next/navigation";
import { DonateForm } from "@/components/DonateForm";
import { getCampaignBySlug } from "@/lib/mock-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = getCampaignBySlug(slug);
  if (!c || c.status === "closed") return { title: "Donate" };
  return { title: `Donate · ${c.title}` };
}

export default async function DonatePage({ params }: Props) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();
  if (campaign.status === "closed") {
    return (
      <div className="space-y-4">
        <Link href={`/campaigns/${slug}`} className="text-sm font-semibold text-[var(--tcmf-primary)]">
          ← Back
        </Link>
        <p className="rounded-3xl bg-white p-6 text-sm text-zinc-600 ring-1 ring-black/5">
          This campaign is closed for donations.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <Link href={`/campaigns/${slug}`} className="text-sm font-semibold text-[var(--tcmf-primary)]">
        ← {campaign.title}
      </Link>
      <h1 className="text-xl font-bold text-[var(--tcmf-ink)]">Donate</h1>
      <DonateForm campaign={campaign} />
    </div>
  );
}

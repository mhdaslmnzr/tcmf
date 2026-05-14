import Link from "next/link";
import { notFound } from "next/navigation";
import { CampaignDetailTabs } from "@/components/CampaignDetailTabs";
import { DonateStickyBar } from "@/components/DonateStickyBar";
import { FollowCampaignBox } from "@/components/FollowCampaignBox";
import { pillarEyebrow, pillarTokens } from "@/lib/cause-styles";
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
  const tokens = pillarTokens[campaign.pillar];

  return (
    <div style={{ paddingBottom: "120px" }}>
      {/* Inner top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "var(--surface)",
          borderBottom: "0.5px solid var(--border-mid)",
          padding: "12px 14px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/campaigns"
          style={{ fontSize: "13px", fontWeight: 500, color: tokens.primary, textDecoration: "none" }}
        >
          ← Back
        </Link>
        {shareToken ? (
          <Link
            href={`/share/${shareToken}`}
            style={{ fontSize: "12px", color: "var(--text-muted)", textDecoration: "none" }}
          >
            Share
          </Link>
        ) : null}
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Campaign hero card */}
        <div style={{ background: tokens.bg, borderRadius: "var(--r-lg)", padding: "14px" }}>
          <p
            style={{
              fontSize: "9px",
              fontWeight: 500,
              color: tokens.text,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            {pillarEyebrow[campaign.pillar]}
          </p>
          <h1
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: tokens.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              marginBottom: "12px",
            }}
          >
            {campaign.title}
          </h1>
          {/* Progress bar */}
          <div>
            <div style={{ height: "5px", borderRadius: "3px", background: tokens.track, overflow: "hidden" }}>
              <div
                style={{ height: "100%", width: `${pct}%`, borderRadius: "3px", background: tokens.primary }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6px",
                fontSize: "12px",
                fontWeight: 500,
                color: tokens.text,
              }}
            >
              <span>{formatINR(campaign.amountRaised)} raised</span>
              <span>{pct}%</span>
            </div>
            <p style={{ fontSize: "10px", color: tokens.text, opacity: 0.6, marginTop: "4px" }}>
              of {formatINR(campaign.goalAmount)} goal ·{" "}
              {campaign.beneficiaryReached.toLocaleString("en-IN")} /{" "}
              {campaign.beneficiaryTarget.toLocaleString("en-IN")} beneficiaries
            </p>
          </div>
        </div>

        <FollowCampaignBox campaignTitle={campaign.title} />
        <CampaignDetailTabs campaign={campaign} />
        <DonateStickyBar campaign={campaign} />
      </div>
    </div>
  );
}

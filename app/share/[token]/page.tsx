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
    <div
      style={{
        minHeight: "100vh",
        background: "var(--base)",
        padding: "40px 14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "9px",
          fontWeight: 500,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "24px",
        }}
      >
        Share without identity · preview
      </p>
      <ShareCardPublic campaign={campaign} />
      <p
        style={{
          maxWidth: "340px",
          textAlign: "center",
          fontSize: "10px",
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginTop: "24px",
        }}
      >
        No donor name or amount appears on this card. In production, Razorpay confirms payment before any
        ledger line is written.
      </p>
    </div>
  );
}

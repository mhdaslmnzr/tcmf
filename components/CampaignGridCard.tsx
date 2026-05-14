import Link from "next/link";
import { pillarEyebrow, pillarTokens } from "@/lib/cause-styles";
import { formatINR } from "@/lib/format";
import type { Campaign } from "@/lib/types";

function daysLeft(closesAt: string | null, status: Campaign["status"]): string | null {
  if (status !== "active" || !closesAt) return null;
  const d = Math.ceil((new Date(closesAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (d < 0) return "Closing soon";
  return `${d}d left`;
}

export function CampaignGridCard({ campaign, muted }: { campaign: Campaign; muted?: boolean }) {
  const pct = Math.min(100, Math.round((campaign.amountRaised / campaign.goalAmount) * 100));
  const tokens = pillarTokens[campaign.pillar];
  const left = daysLeft(campaign.closesAt, campaign.status);

  return (
    <Link
      href={`/campaigns/${campaign.slug}`}
      style={{ opacity: muted ? 0.75 : 1 }}
    >
      <div
        style={{
          background: tokens.bg,
          borderRadius: "var(--r-lg)",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "9px",
            fontWeight: 500,
            color: tokens.text,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          {pillarEyebrow[campaign.pillar]}
        </p>

        {/* Title */}
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: tokens.text,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
          className="line-clamp-3"
        >
          {campaign.title}
        </p>

        {/* Progress bar */}
        <div>
          <div
            style={{
              height: "3px",
              borderRadius: "3px",
              background: tokens.track,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                borderRadius: "3px",
                background: tokens.primary,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
              fontSize: "10px",
              fontWeight: 500,
              color: tokens.text,
              opacity: 0.8,
            }}
          >
            <span>{formatINR(campaign.amountRaised)}</span>
            <span>{pct}%</span>
          </div>
        </div>

        {/* Meta */}
        <p
          style={{
            fontSize: "10px",
            fontWeight: 400,
            color: tokens.text,
            opacity: 0.7,
          }}
        >
          {campaign.beneficiaryReached.toLocaleString("en-IN")} /{" "}
          {campaign.beneficiaryTarget.toLocaleString("en-IN")} beneficiaries
          {left ? ` · ${left}` : campaign.status === "closed" ? " · Closed" : ""}
        </p>

        {/* Donate button */}
        {campaign.status === "active" && (
          <div
            style={{
              background: tokens.primary,
              color: "#FFFFFF",
              borderRadius: "var(--r-pill)",
              padding: "6px 11px",
              fontSize: "11px",
              fontWeight: 500,
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            Donate
          </div>
        )}
      </div>
    </Link>
  );
}

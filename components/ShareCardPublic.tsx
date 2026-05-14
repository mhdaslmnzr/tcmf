import Link from "next/link";
import { pillarEyebrow, pillarTokens } from "@/lib/cause-styles";
import { formatINR } from "@/lib/format";
import type { Campaign } from "@/lib/types";

const SHARE_MESSAGE =
  "I contributed to this campaign. It is your chance to make the world better.";

export function ShareCardPublic({ campaign }: { campaign: Campaign }) {
  const pct = Math.min(100, Math.round((campaign.amountRaised / campaign.goalAmount) * 100));
  const tokens = pillarTokens[campaign.pillar];
  return (
    <article
      style={{
        maxWidth: "375px",
        margin: "0 auto",
        borderRadius: "var(--r-lg)",
        background: tokens.bg,
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "9px",
            fontWeight: 500,
            color: tokens.text,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {pillarEyebrow[campaign.pillar]}
        </p>

        {/* Title */}
        <h1
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: tokens.text,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          {campaign.title}
        </h1>

        {/* Progress */}
        <div>
          <div style={{ height: "5px", borderRadius: "3px", background: tokens.track, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, borderRadius: "3px", background: tokens.primary }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
              fontSize: "11px",
              fontWeight: 500,
              color: tokens.text,
            }}
          >
            <span>{formatINR(campaign.amountRaised)} raised</span>
            <span>{pct}%</span>
          </div>
          <p style={{ fontSize: "9px", color: tokens.text, opacity: 0.6, marginTop: "4px", fontStyle: "italic" }}>
            Donor names and amounts are never shown publicly.
          </p>
        </div>

        {/* Share message */}
        <blockquote
          style={{
            background: "rgba(0,0,0,0.04)",
            borderRadius: "var(--r-md)",
            padding: "10px 12px",
            fontSize: "12px",
            fontWeight: 400,
            color: tokens.text,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          &ldquo;{SHARE_MESSAGE}&rdquo;
        </blockquote>

        {/* CTA */}
        <Link
          href={`/campaigns/${campaign.slug}`}
          style={{
            display: "block",
            background: tokens.primary,
            color: "#FFFFFF",
            borderRadius: "var(--r-pill)",
            padding: "10px",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          View campaign
        </Link>
      </div>
    </article>
  );
}

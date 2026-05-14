import Image from "next/image";
import Link from "next/link";
import { pillarEyebrow, pillarTokens, updateBadgeLabel } from "@/lib/cause-styles";
import { timeAgo } from "@/lib/format";
import type { CampaignUpdate } from "@/lib/types";

export function FeedCard({ update }: { update: CampaignUpdate }) {
  const href = `/campaigns/${update.campaignSlug}`;
  const tokens = pillarTokens[update.pillar];
  return (
    <Link href={href} style={{ display: "block", textDecoration: "none" }}>
      <div
        style={{
          background: tokens.bg,
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Eyebrow + badge row */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "9px",
                fontWeight: 500,
                color: tokens.text,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {pillarEyebrow[update.pillar]}
            </span>
            <span
              style={{
                fontSize: "9px",
                fontWeight: 500,
                color: tokens.text,
                opacity: 0.6,
                letterSpacing: "0.04em",
              }}
            >
              · {updateBadgeLabel[update.updateType] ?? "Update"}
            </span>
          </div>

          {/* Campaign title */}
          <p
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: tokens.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {update.campaignTitle}
          </p>

          {/* Update content */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 400,
              color: tokens.text,
              opacity: 0.8,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {update.content}
          </p>

          {/* Time */}
          <p
            style={{
              fontSize: "10px",
              color: tokens.text,
              opacity: 0.5,
              margin: 0,
            }}
          >
            {timeAgo(update.postedAt)}
          </p>
        </div>

        {/* Optional update image */}
        {update.image ? (
          <div style={{ position: "relative", aspectRatio: "16/9", width: "100%" }}>
            <Image
              src={update.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        ) : null}
      </div>
    </Link>
  );
}

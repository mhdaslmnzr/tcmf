import { ImpactStrip } from "@/components/ImpactStrip";
import { HomeFeed } from "@/components/HomeFeed";

export default function HomePage() {
  return (
    <div>
      {/* Home top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "var(--surface)",
          borderBottom: "0.5px solid var(--border-mid)",
          padding: "12px 14px 10px",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            fontWeight: 400,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            lineHeight: 1,
            marginBottom: "4px",
          }}
        >
          The Common Man Foundation
        </p>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "var(--text)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Good deeds, open books.
        </h1>
      </div>

      {/* Body */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <ImpactStrip />
        <HomeFeed />
      </div>
    </div>
  );
}

import { formatCompactINR } from "@/lib/format";
import { impactStats } from "@/lib/mock-data";

type ImpactStatsShape = typeof impactStats;

export function ImpactStrip({ stats = impactStats }: { stats?: ImpactStatsShape }) {
  const cells = [
    { label: "CAMPAIGNS", value: String(stats.campaignsCompleted) },
    { label: "RAISED", value: formatCompactINR(stats.totalRaised) },
    { label: "SPENT", value: formatCompactINR(stats.totalSpent) },
    { label: "REACHED", value: stats.beneficiariesReached.toLocaleString("en-IN") },
  ];
  return (
    <div
      style={{
        display: "flex",
        border: "0.5px solid var(--border)",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        background: "var(--surface)",
      }}
    >
      {cells.map((c, i) => (
        <div
          key={c.label}
          style={{
            flex: 1,
            padding: "10px 6px",
            textAlign: "center",
            borderRight: i < cells.length - 1 ? "0.5px solid var(--border)" : undefined,
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text)",
              lineHeight: 1.2,
            }}
          >
            {c.value}
          </div>
          <div
            style={{
              fontSize: "8px",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginTop: "3px",
            }}
          >
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}

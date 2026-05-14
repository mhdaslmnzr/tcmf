import { formatCompactINR } from "@/lib/format";
import { impactStats } from "@/lib/mock-data";

type ImpactStatsShape = typeof impactStats;

export function ImpactStrip({ stats = impactStats }: { stats?: ImpactStatsShape }) {
  const cells = [
    { label: "Campaigns done", value: String(stats.campaignsCompleted) },
    { label: "Raised (all time)", value: formatCompactINR(stats.totalRaised) },
    { label: "Spent (verified)", value: formatCompactINR(stats.totalSpent) },
    { label: "Beneficiaries", value: stats.beneficiariesReached.toLocaleString("en-IN") },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-2xl bg-white px-3 py-3 text-center shadow-sm ring-1 ring-black/5"
        >
          <div className="text-lg font-semibold tabular-nums text-[var(--tcmf-ink)]">{c.value}</div>
          <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}

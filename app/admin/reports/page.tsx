import { formatINR } from "@/lib/format";
import { impactStats } from "@/lib/mock-data";

export const metadata = { title: "Admin · Reports" };

export default function AdminReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--tcmf-ink)]">Reports</h1>
      <p className="text-sm text-zinc-600">Tax exports and CA JSON — generated on demand in production.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">FY snapshot</p>
          <p className="mt-2 text-2xl font-bold tabular-nums">{formatINR(impactStats.totalRaised)}</p>
          <p className="text-sm text-zinc-600">Total raised (mock aggregate)</p>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Donor count</p>
          <p className="mt-2 text-2xl font-bold tabular-nums">—</p>
          <p className="text-sm text-zinc-600">Populated from TaxExport model later.</p>
        </div>
      </div>
    </div>
  );
}

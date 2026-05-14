import Link from "next/link";
import { mockCampaigns } from "@/lib/mock-data";
import { formatINR } from "@/lib/format";

export const metadata = { title: "Admin · Campaigns" };

export default function AdminCampaignsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[var(--tcmf-ink)]">Campaigns</h1>
          <p className="text-sm text-zinc-600">Draft / active / paused — CRUD will call Django later.</p>
        </div>
        <Link
          href="/admin/campaigns/new"
          className="rounded-xl bg-[var(--tcmf-primary)] px-4 py-2.5 text-sm font-semibold text-white"
        >
          New campaign
        </Link>
      </div>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Raised</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {mockCampaigns.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3 font-medium text-[var(--tcmf-ink)]">{c.title}</td>
                <td className="px-4 py-3 capitalize text-zinc-600">{c.status}</td>
                <td className="px-4 py-3 text-right tabular-nums font-medium">{formatINR(c.amountRaised)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

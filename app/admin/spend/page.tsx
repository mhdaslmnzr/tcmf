import { formatINR } from "@/lib/format";
import { getSpendsForCampaign, mockCampaigns } from "@/lib/mock-data";

export const metadata = { title: "Admin · Spend" };

export default function AdminSpendPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--tcmf-ink)]">Spend uploads</h1>
      <p className="text-sm text-zinc-600">Bill photos and vendor lines — wired to R2 in production.</p>
      <ul className="space-y-3">
        {mockCampaigns.map((c) => {
          const spends = getSpendsForCampaign(c.slug);
          return (
            <li key={c.id} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <p className="font-semibold text-[var(--tcmf-ink)]">{c.title}</p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                {spends.map((s) => (
                  <li key={s.id} className="flex justify-between gap-2">
                    <span>
                      {s.vendor} · {s.category}
                    </span>
                    <span className="shrink-0 tabular-nums font-medium">{formatINR(s.amount)}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

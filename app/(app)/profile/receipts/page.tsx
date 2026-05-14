import { MockPdfLink } from "@/components/MockPdfLink";
import { formatINR } from "@/lib/format";
import { mockDonorReceipts } from "@/lib/mock-data";

export const metadata = { title: "Receipts · TCMF" };

export default function ReceiptsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--tcmf-ink)]">80G receipts</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Private to your account. Generated on demand from the database in production.
        </p>
      </div>
      <ul className="space-y-3">
        {mockDonorReceipts.map((r) => (
          <li key={r.id} className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <p className="font-mono text-xs font-semibold text-[var(--tcmf-primary)]">{r.number}</p>
            <p className="mt-1 text-sm font-semibold text-[var(--tcmf-ink)]">{r.campaign}</p>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="tabular-nums font-semibold">{formatINR(r.amount)}</span>
              <span className="text-xs text-zinc-500">{r.date}</span>
            </div>
            <MockPdfLink />
          </li>
        ))}
      </ul>
    </div>
  );
}

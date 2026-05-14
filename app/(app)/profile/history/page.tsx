import Link from "next/link";
import { formatINR } from "@/lib/format";
import { mockDonationHistory } from "@/lib/mock-data";

export const metadata = { title: "Donation history" };

export default function DonationHistoryPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--tcmf-ink)]">Donation history</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Visible only in your donor session. Never shown on public campaign or ledger pages.
        </p>
      </div>
      <ul className="space-y-3">
        {mockDonationHistory.map((h) => (
          <li key={h.id} className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Link
                  href={`/campaigns/${h.campaignSlug}`}
                  className="text-sm font-semibold text-[var(--tcmf-ink)] underline-offset-2 hover:underline"
                >
                  {h.campaignTitle}
                </Link>
                <p className="mt-1 text-xs text-zinc-500">{h.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold tabular-nums">{formatINR(h.amount)}</p>
                <p className="mt-1 text-[11px] font-medium text-zinc-400">
                  {h.receiptIssued ? "80G issued" : "Receipt pending"}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

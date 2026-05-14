import { LedgerExplorer } from "@/components/LedgerExplorer";
import { LedgerReportButton } from "@/components/LedgerReportButton";
import { mockLedger } from "@/lib/mock-data";

export const metadata = { title: "Public ledger · TCMF" };

export default function LedgerPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--tcmf-ink)]">Ledger</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Append-only log of posted entries. Donor names and individual gift amounts are never listed here.
        </p>
      </div>
      <div className="rounded-3xl bg-[var(--tcmf-primary)] p-4 text-white shadow-sm">
        <p className="text-sm font-medium text-white/90">Download annual report</p>
        <p className="mt-1 text-xs text-white/75">
          Will stream a PDF from the API when the backend is connected.
        </p>
        <LedgerReportButton />
      </div>
      <LedgerExplorer entries={[...mockLedger].sort((a, b) => b.timestamp.localeCompare(a.timestamp))} />
    </div>
  );
}

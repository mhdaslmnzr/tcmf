import Link from "next/link";
import { formatINR } from "@/lib/format";
import { mockTrusteeQueue } from "@/lib/mock-data";

export const metadata = { title: "Trustee dashboard · TCMF" };

export default function TrusteeDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--tcmf-ink)]">Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Pending approvals and sign-offs. Data is mock until the Django API is connected.
        </p>
      </div>
      <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Queue</h2>
          <Link href="/trustee/approvals" className="text-xs font-semibold text-[var(--tcmf-primary)]">
            Open approvals →
          </Link>
        </div>
        <ul className="mt-4 space-y-3">
          {mockTrusteeQueue.map((q) => (
            <li key={q.id} className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/5">
              <p className="text-sm font-semibold text-[var(--tcmf-ink)]">{q.title}</p>
              <p className="mt-1 text-xs text-zinc-500">Waiting ~{q.waitingHours}h · mock SLA</p>
              {q.amount > 0 ? (
                <p className="mt-2 text-sm font-semibold tabular-nums">{formatINR(q.amount)}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Distribution proofs</h2>
          <Link href="/trustee/distribution" className="text-xs font-semibold text-[var(--tcmf-primary)]">
            Review queue →
          </Link>
        </div>
        <p className="mt-2 text-xs text-zinc-500">
          Public beneficiary counts and photos only — registers stay internal per policy.
        </p>
      </section>
    </div>
  );
}

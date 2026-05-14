export const metadata = { title: "About · TCMF" };

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--tcmf-ink)]">About TCMF</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          The Common Man Foundation is a registered public charitable trust in India. This site is a{" "}
          <strong>frontend preview</strong>: layouts, navigation, and copy follow the product specification.
          Payments, authentication, and persistent data connect later via Django and managed services.
        </p>
      </div>
      <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">What TCMF is</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-700">
          A trust operating system where <strong>transparency is the product</strong>. Supporters see how money
          moves through campaigns, spends, and the public ledger — without ever exposing individual donors or
          beneficiaries on public surfaces.
        </p>
      </section>
      <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Non‑negotiable principles</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            <strong className="text-[var(--tcmf-ink)]">Anonymous giving:</strong> donor names and individual
            amounts never appear publicly. They exist for receipts and tax exports only.
          </li>
          <li>
            <strong className="text-[var(--tcmf-ink)]">Beneficiary dignity:</strong> public UI shows counts and
            outcomes, not names, photos, or identifying details.
          </li>
          <li>
            <strong className="text-[var(--tcmf-ink)]">Immutable ledger:</strong> financial rows are append-only.
            Corrections are new entries that reference what they supersede.
          </li>
          <li>
            <strong className="text-[var(--tcmf-ink)]">Verified spending:</strong> campaigns cannot close without
            bills, distribution proof, and at least two trustee sign-offs — enforced in the API, not just the UI.
          </li>
          <li>
            <strong className="text-[var(--tcmf-ink)]">Share without identity:</strong> share cards celebrate the
            campaign and progress, not the donor.
          </li>
          <li>
            <strong className="text-[var(--tcmf-ink)]">Trustee accountability:</strong> trustees are public figures
            on the platform; sign-offs and activity timestamps are visible.
          </li>
        </ul>
      </section>
      <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">How the public ledger works</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-700">
          Every posted line gets a permanent ID and server time. Filters help auditors slice by campaign, date,
          and entry type. Donation lines describe the event without naming people or listing private gift sizes in
          a way that could be re-identified from the public web.
        </p>
      </section>
      <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Trustees on the record</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Profiles will list role, biography, total sign-offs, and last active — so inaction is visible as well
          as action.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Managing trustee", "Trustee", "Trustee"].map((role, i) => (
            <div key={i} className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/5">
              <div className="h-12 w-12 rounded-full bg-zinc-200" />
              <p className="mt-3 text-sm font-semibold text-[var(--tcmf-ink)]">Name placeholder {i + 1}</p>
              <p className="text-xs text-zinc-500">{role}</p>
              <p className="mt-2 text-[11px] font-medium text-zinc-400">Last active — mock</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-3xl bg-[var(--tcmf-ink)] p-5 text-white">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact & compliance</h2>
        <p className="mt-2 text-sm text-white/85">
          Registered office, PAN, 80G registration, and annual reports will be published here. This shell is
          for UX validation only.
        </p>
      </section>
    </div>
  );
}

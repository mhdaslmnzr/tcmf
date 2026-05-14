import Link from "next/link";

export const metadata = { title: "Donor portal" };

export default function ProfilePage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--tcmf-ink)]">Donor portal</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Receipts, history, and account settings connect to Django + JWT in production.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/login"
          className="rounded-xl bg-[var(--tcmf-ink)] px-4 py-2.5 text-sm font-semibold text-white"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[var(--tcmf-ink)] ring-1 ring-black/10"
        >
          Create account
        </Link>
      </div>
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <p className="text-sm font-semibold text-[var(--tcmf-ink)]">Quick links</p>
        <p className="mt-1 text-xs text-zinc-500">Use the tabs above or jump here.</p>
        <div className="mt-4 flex flex-col gap-2">
          <Link href="/profile/history" className="text-sm font-semibold text-[var(--tcmf-primary)]">
            Donation history →
          </Link>
          <Link href="/profile/receipts" className="text-sm font-semibold text-[var(--tcmf-primary)]">
            80G receipts →
          </Link>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/trustee/dashboard"
          className="rounded-3xl bg-white p-4 text-sm font-semibold text-[var(--tcmf-ink)] shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-50"
        >
          Trustee console →
        </Link>
        <Link
          href="/admin/campaigns"
          className="rounded-3xl bg-white p-4 text-sm font-semibold text-[var(--tcmf-ink)] shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-50"
        >
          Admin dashboard →
        </Link>
      </div>
    </div>
  );
}

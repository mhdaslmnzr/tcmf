export const metadata = { title: "Admin · Trustees" };

export default function AdminTrusteesPage() {
  const rows = [
    { name: "Trustee One", role: "Managing trustee", signoffs: 42, last: "2026-05-10" },
    { name: "Trustee Two", role: "Trustee", signoffs: 31, last: "2026-05-09" },
    { name: "Trustee Three", role: "Trustee", signoffs: 28, last: "2026-04-22" },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--tcmf-ink)]">Trustees</h1>
      <p className="text-sm text-zinc-600">Public accountability profiles — mock rows for layout.</p>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3 text-right">Sign-offs</th>
              <th className="px-4 py-3 text-right">Last active</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {rows.map((r) => (
              <tr key={r.name}>
                <td className="px-4 py-3 font-medium">{r.name}</td>
                <td className="px-4 py-3 text-zinc-600">{r.role}</td>
                <td className="px-4 py-3 text-right tabular-nums">{r.signoffs}</td>
                <td className="px-4 py-3 text-right text-zinc-500">{r.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

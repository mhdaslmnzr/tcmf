import { ImpactStrip } from "@/components/ImpactStrip";
import { HomeFeed } from "@/components/HomeFeed";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--tcmf-ink)]">Home</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Updates across campaigns. Amounts you give stay private; the ledger stays public.
        </p>
      </div>
      <ImpactStrip />
      <HomeFeed />
    </div>
  );
}

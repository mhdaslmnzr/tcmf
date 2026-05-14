import { BottomNav } from "@/components/BottomNav";

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col" style={{ background: "var(--base)" }}>
      <main
        style={{
          flex: 1,
          maxWidth: "375px",
          width: "100%",
          margin: "0 auto",
          paddingBottom: "72px",
        }}
      >
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

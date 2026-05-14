import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Common Man Foundation",
    template: "%s · TCMF",
  },
  description:
    "Transparency-first charitable trust — public campaigns, ledger, and role dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-[var(--base)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto max-w-md space-y-6 py-2">
      <div>
        <h1 className="text-xl font-bold text-[var(--tcmf-ink)]">Sign in</h1>
        <p className="mt-1 text-sm text-zinc-600">JWT from Django will authenticate donors and staff.</p>
      </div>
      <form
        className="space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/profile");
        }}
      >
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-zinc-700">Email</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-zinc-700">Password</span>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--tcmf-primary)]/30"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--tcmf-primary)] py-3 text-sm font-semibold text-white"
        >
          Continue (mock)
        </button>
      </form>
      <p className="text-center text-sm text-zinc-600">
        New here?{" "}
        <Link href="/signup" className="font-semibold text-[var(--tcmf-primary)]">
          Create an account
        </Link>
      </p>
    </div>
  );
}

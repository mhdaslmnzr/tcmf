# The Common Man Foundation — frontend

This repository contains the **Next.js frontend** for The Common Man Foundation (TCMF): a transparency-first charitable trust interface described in the internal product specification. The Django API, payments, email, and file storage are **not wired up yet**; screens use mock data so designers and stakeholders can review flows early.

## What is implemented

- **Public shell** with bottom navigation (Home, Campaigns, Ledger, About, Profile), impact strip, and card-led layouts aligned with the spec.
- **Home feed** with infinite scroll (Intersection Observer + “Load more”) over an extended mock timeline.
- **Campaigns**: search, filters by cause, active vs completed grids, detail with tabs (overview, spend log, distribution, updates), follow-by-email (mock), donate CTA linking to a **mock checkout** flow and **thanks** page with anonymous **share card** preview.
- **Public share cards** at `/share/[token]` (no bottom chrome) — campaign hero, progress, and spec share line only; no donor name or amount.
- **Public ledger** with filters (type, campaign, **date range**) and a placeholder annual report action.
- **Auth UI (mock)**: `/login` and `/signup` redirect to profile for flow review; JWT wiring comes later.
- **Donor portal** (`/profile` + subnav): overview, **donation history** (private amounts), **80G receipts** (mock PDF actions).
- **Trustee**: dashboard, spend approvals, **distribution proof** queue.
- **Admin**: campaigns table, **new campaign** draft form, spend review list, reports placeholders, trustees table.

Installable **PWA** behaviour (service worker, manifest) is intentionally deferred.

## Prerequisites

- Node.js **20.9+** (see Next.js requirements).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). **Share cards** (no app chrome): `/share/<token>` (see `shareTokenBySlug` in `lib/mock-data.ts`). Trustee: `/trustee`. Admin: `/admin`.

## Assets

- `assets/logo.png` — organisation mark used in headers.
- `*.docx` files are listed in `.gitignore` so local prompt or policy documents are not committed by mistake.

## Scripts

| Command       | Purpose              |
| ------------- | -------------------- |
| `npm run dev` | Development server   |
| `npm run build` | Production build   |
| `npm run start` | Start production server |
| `npm run lint`  | ESLint               |

## Stack

- [Next.js](https://nextjs.org/) (App Router) and React
- [Tailwind CSS](https://tailwindcss.com/) v4

Backend work (Django, PostgreSQL, Razorpay, R2, Celery, and so on) will live in a separate service when you add it.

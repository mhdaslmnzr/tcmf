"use client";

import { useMemo, useState } from "react";
import { CampaignGridCard } from "@/components/CampaignGridCard";
import { pillarLabel, pillarTokens } from "@/lib/cause-styles";
import type { Pillar } from "@/lib/types";
import { mockCampaigns } from "@/lib/mock-data";

const pillars: Pillar[] = ["work", "educate", "empower", "elevate"];

export function CampaignsBrowser() {
  const [filter, setFilter] = useState<Pillar | "all">("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return mockCampaigns.filter((c) => {
      if (filter !== "all" && c.pillar !== filter) return false;
      if (q.trim()) {
        const s = q.trim().toLowerCase();
        if (!c.title.toLowerCase().includes(s) && !c.slug.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  }, [filter, q]);

  const active = useMemo(() => filtered.filter((c) => c.status === "active"), [filtered]);
  const closed = useMemo(() => filtered.filter((c) => c.status === "closed"), [filtered]);

  return (
    <div>
      {/* Inner top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "var(--surface)",
          borderBottom: "0.5px solid var(--border-mid)",
          padding: "12px 14px 10px",
        }}
      >
        <h1
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--text)",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Campaigns
        </h1>
        <p style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "2px" }}>
          Browse active work and completed campaigns
        </p>
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Search */}
        <input
          type="search"
          placeholder="Search by title…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{
            width: "100%",
            borderRadius: "var(--r-pill)",
            border: "0.5px solid var(--border-mid)",
            background: "var(--surface)",
            padding: "8px 14px",
            fontSize: "13px",
            color: "var(--text)",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Filter chips */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="[-webkit-scrollbar]:hidden"
        >
          {/* All chip */}
          <button
            type="button"
            onClick={() => setFilter("all")}
            style={{
              flexShrink: 0,
              borderRadius: "var(--r-pill)",
              padding: "5px 11px",
              fontSize: "10px",
              fontWeight: 500,
              border: filter === "all" ? "none" : "0.5px solid var(--border-mid)",
              background: filter === "all" ? "var(--text)" : "var(--surface)",
              color: filter === "all" ? "#FFFFFF" : "var(--text-mid)",
              cursor: "pointer",
            }}
          >
            All
          </button>

          {pillars.map((p) => {
            const tokens = pillarTokens[p];
            const isActive = filter === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setFilter(p)}
                style={{
                  flexShrink: 0,
                  borderRadius: "var(--r-pill)",
                  padding: "5px 11px",
                  fontSize: "10px",
                  fontWeight: 500,
                  border: isActive ? "none" : `0.5px solid ${tokens.primary}4D`,
                  background: isActive ? tokens.primary : tokens.bg,
                  color: isActive ? "#FFFFFF" : tokens.text,
                  cursor: "pointer",
                }}
              >
                {pillarLabel[p]}
              </button>
            );
          })}
        </div>

        {/* Active campaigns */}
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2
            style={{
              fontSize: "9px",
              fontWeight: 500,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: 0,
            }}
          >
            Active
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {active.map((c) => (
              <CampaignGridCard key={c.id} campaign={c} />
            ))}
          </div>
          {active.length === 0 && (
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "var(--text-muted)",
                padding: "24px 0",
              }}
            >
              No campaigns match your filters.
            </p>
          )}
        </section>

        {/* Completed campaigns */}
        {closed.length > 0 && (
          <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2
              style={{
                fontSize: "9px",
                fontWeight: 500,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: 0,
              }}
            >
              Completed
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {closed.map((c) => (
                <CampaignGridCard key={c.id} campaign={c} muted />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

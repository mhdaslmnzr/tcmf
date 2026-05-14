import type { Pillar } from "./types";

export const pillarLabel: Record<Pillar, string> = {
  work: "Work",
  educate: "Educate",
  empower: "Empower",
  elevate: "Elevate",
};

export const pillarEyebrow: Record<Pillar, string> = {
  work: "WORK",
  educate: "EDUCATE",
  empower: "EMPOWER",
  elevate: "ELEVATE",
};

export interface PillarTokens {
  primary: string;
  bg: string;
  text: string;
  track: string;
}

export const pillarTokens: Record<Pillar, PillarTokens> = {
  work: {
    primary: "var(--work)",
    bg: "var(--work-bg)",
    text: "var(--work-text)",
    track: "var(--work-track)",
  },
  educate: {
    primary: "var(--educate)",
    bg: "var(--educate-bg)",
    text: "var(--educate-text)",
    track: "var(--educate-track)",
  },
  empower: {
    primary: "var(--empower)",
    bg: "var(--empower-bg)",
    text: "var(--empower-text)",
    track: "var(--empower-track)",
  },
  elevate: {
    primary: "var(--elevate)",
    bg: "var(--elevate-bg)",
    text: "var(--elevate-text)",
    track: "var(--elevate-track)",
  },
};

export const updateBadgeLabel: Record<string, string> = {
  milestone: "Milestone",
  bill_uploaded: "Bill uploaded",
  distribution: "Distribution",
  closed: "Closed",
  general: "Update",
};

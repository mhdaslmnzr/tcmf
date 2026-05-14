import type { CauseCategory } from "./types";

export const causeLabel: Record<CauseCategory, string> = {
  education: "Education",
  health: "Health",
  livelihood: "Livelihood",
  women: "Women",
  environment: "Environment",
  general: "General",
};

export const causeChipClass: Record<CauseCategory, string> = {
  education: "bg-sky-100 text-sky-900",
  health: "bg-rose-100 text-rose-900",
  livelihood: "bg-amber-100 text-amber-900",
  women: "bg-violet-100 text-violet-900",
  environment: "bg-emerald-100 text-emerald-900",
  general: "bg-zinc-200 text-zinc-800",
};

export const updateBadgeClass: Record<string, string> = {
  milestone: "bg-indigo-100 text-indigo-800",
  bill_uploaded: "bg-orange-100 text-orange-900",
  distribution: "bg-teal-100 text-teal-900",
  closed: "bg-zinc-200 text-zinc-800",
  general: "bg-zinc-100 text-zinc-700",
};

export const updateBadgeLabel: Record<string, string> = {
  milestone: "Milestone",
  bill_uploaded: "Bill uploaded",
  distribution: "Distribution",
  closed: "Closed",
  general: "Update",
};

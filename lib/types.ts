export type CauseCategory =
  | "education"
  | "health"
  | "livelihood"
  | "women"
  | "environment"
  | "general";

export type CampaignStatus = "draft" | "active" | "paused" | "closed";

export type UpdateType =
  | "milestone"
  | "bill_uploaded"
  | "distribution"
  | "closed"
  | "general";

export type LedgerEntryType =
  | "donation_in"
  | "spend_out"
  | "surplus_transfer"
  | "correction";

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  cause: CauseCategory;
  story: string;
  coverImage: string;
  goalAmount: number;
  amountRaised: number;
  beneficiaryTarget: number;
  beneficiaryReached: number;
  status: CampaignStatus;
  openedAt: string;
  closesAt: string | null;
  closedAt: string | null;
  costBreakdown: { item: string; unitCost: number; quantity: number; total: number }[];
}

export interface CampaignUpdate {
  id: string;
  campaignId: string;
  campaignSlug: string;
  campaignTitle: string;
  coverImage: string;
  cause: CauseCategory;
  updateType: UpdateType;
  content: string;
  image: string | null;
  postedAt: string;
}

export interface LedgerEntry {
  permanentId: string;
  entryType: LedgerEntryType;
  amount: number;
  campaignSlug: string | null;
  campaignTitle: string | null;
  category: string;
  description: string;
  timestamp: string;
  verified: boolean;
}

export interface SpendEntry {
  id: string;
  vendor: string;
  category: string;
  amount: number;
  billThumb: string;
  date: string;
  signoffCount: number;
  verified: boolean;
}

export interface DistributionView {
  publicCount: number;
  photo: string;
  verified: boolean;
}

/** Private donor portal only — never shown on public routes */
export interface DonationHistoryEntry {
  id: string;
  campaignTitle: string;
  campaignSlug: string;
  date: string;
  amount: number;
  receiptIssued: boolean;
}

export interface DistributionQueueItem {
  id: string;
  campaignTitle: string;
  campaignSlug: string;
  publicCount: number;
  waitingHours: number;
  summary: string;
}

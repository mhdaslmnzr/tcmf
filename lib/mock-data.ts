import type {
  Campaign,
  CampaignUpdate,
  DistributionQueueItem,
  DistributionView,
  DonationHistoryEntry,
  LedgerEntry,
  SpendEntry,
} from "./types";

/** Universal placeholder until campaign art is on R2 — single approved Unsplash asset */
export const PLACEHOLDER_IMAGE_URL =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const cover = (_seed: string) => PLACEHOLDER_IMAGE_URL;

export const impactStats = {
  campaignsCompleted: 12,
  totalRaised: 18400000,
  totalSpent: 16200000,
  beneficiariesReached: 8420,
};

export const mockCampaigns: Campaign[] = [
  {
    id: "1",
    slug: "school-kits-mumbai",
    title: "School kits for Mumbai East",
    pillar: "educate",
    story:
      "We distribute durable school bags, notebooks, and geometry sets to children in municipal schools. Every rupee is tracked on the public ledger; donor identities stay private.",
    coverImage: cover("1503676387255-02505aeaff92"),
    goalAmount: 800000,
    amountRaised: 612000,
    beneficiaryTarget: 400,
    beneficiaryReached: 286,
    status: "active",
    openedAt: "2025-11-01T10:00:00.000Z",
    closesAt: "2026-06-30T18:00:00.000Z",
    closedAt: null,
    costBreakdown: [
      { item: "School bag", unitCost: 450, quantity: 400, total: 180000 },
      { item: "Notebook set", unitCost: 120, quantity: 400, total: 48000 },
      { item: "Geometry box", unitCost: 85, quantity: 400, total: 34000 },
      { item: "Logistics", unitCost: 0, quantity: 1, total: 95000 },
    ],
  },
  {
    id: "2",
    slug: "primary-care-camp",
    title: "Primary care camp — rural Karnataka",
    pillar: "empower",
    story:
      "Mobile health camps with basic diagnostics and medicines. Beneficiary identities are never shown publicly; only counts and outcomes appear here.",
    coverImage: cover("1576091160399-112ba8d25d1d"),
    goalAmount: 1200000,
    amountRaised: 1200000,
    beneficiaryTarget: 900,
    beneficiaryReached: 900,
    status: "closed",
    openedAt: "2025-04-12T09:00:00.000Z",
    closesAt: null,
    closedAt: "2025-09-20T15:00:00.000Z",
    costBreakdown: [
      { item: "Medicines", unitCost: 0, quantity: 1, total: 420000 },
      { item: "Camp logistics", unitCost: 0, quantity: 1, total: 310000 },
      { item: "Volunteer stipends", unitCost: 0, quantity: 1, total: 120000 },
    ],
  },
  {
    id: "3",
    slug: "women-livelihood-batch-4",
    title: "Women livelihood — tailoring batch 4",
    pillar: "work",
    story:
      "Six-month tailoring course with toolkits. Graduates receive starter contracts with local partners.",
    coverImage: cover("1523240795612-9a1b2f55518a"),
    goalAmount: 550000,
    amountRaised: 188000,
    beneficiaryTarget: 35,
    beneficiaryReached: 12,
    status: "active",
    openedAt: "2026-01-08T11:30:00.000Z",
    closesAt: "2026-12-15T23:59:59.000Z",
    closedAt: null,
    costBreakdown: [
      { item: "Trainer fees", unitCost: 0, quantity: 1, total: 140000 },
      { item: "Machines & materials", unitCost: 0, quantity: 1, total: 260000 },
    ],
  },
  {
    id: "4",
    slug: "mangrove-restore-coastal",
    title: "Coastal mangrove restoration",
    pillar: "elevate",
    story:
      "Community-led sapling planting with quarterly monitoring. Public updates show hectares and survival rates only.",
    coverImage: cover("1441974231531-7826876cf0f3"),
    goalAmount: 2000000,
    amountRaised: 445000,
    beneficiaryTarget: 1200,
    beneficiaryReached: 380,
    status: "active",
    openedAt: "2025-08-20T08:00:00.000Z",
    closesAt: "2027-03-01T00:00:00.000Z",
    closedAt: null,
    costBreakdown: [
      { item: "Saplings", unitCost: 0, quantity: 1, total: 520000 },
      { item: "Community wages", unitCost: 0, quantity: 1, total: 680000 },
    ],
  },
];

const mockUpdatesRaw: CampaignUpdate[] = [
  {
    id: "u1",
    campaignId: "1",
    campaignSlug: "school-kits-mumbai",
    campaignTitle: "School kits for Mumbai East",
    coverImage: mockCampaigns[0].coverImage,
    pillar: "educate",
    updateType: "milestone",
    content: "75% of the goal reached — thank you to everyone who gave. Next: vendor selection for bags.",
    image: null,
    postedAt: "2026-05-10T14:22:00.000Z",
  },
  {
    id: "u2",
    campaignId: "3",
    campaignSlug: "women-livelihood-batch-4",
    campaignTitle: "Women livelihood — tailoring batch 4",
    coverImage: mockCampaigns[2].coverImage,
    pillar: "work",
    updateType: "general",
    content: "Batch orientation completed. Toolkits will be issued in week 3.",
    image: cover("1517245386807-bb43f82c33c4"),
    postedAt: "2026-05-09T09:10:00.000Z",
  },
  {
    id: "u3",
    campaignId: "2",
    campaignSlug: "primary-care-camp",
    campaignTitle: "Primary care camp — rural Karnataka",
    coverImage: mockCampaigns[1].coverImage,
    pillar: "empower",
    updateType: "closed",
    content:
      "Campaign closed after bills, distribution proof, and dual trustee sign-off. Surplus transferred per policy.",
    image: null,
    postedAt: "2025-09-20T15:05:00.000Z",
  },
  {
    id: "u4",
    campaignId: "4",
    campaignSlug: "mangrove-restore-coastal",
    campaignTitle: "Coastal mangrove restoration",
    coverImage: mockCampaigns[3].coverImage,
    pillar: "elevate",
    updateType: "distribution",
    content: "Q1 planting drive: public beneficiary count updated; internal register filed with trustees.",
    image: cover("1464822759023-fed622ff2c3b"),
    postedAt: "2026-05-02T07:40:00.000Z",
  },
  {
    id: "u5",
    campaignId: "1",
    campaignSlug: "school-kits-mumbai",
    campaignTitle: "School kits for Mumbai East",
    coverImage: mockCampaigns[0].coverImage,
    pillar: "educate",
    updateType: "bill_uploaded",
    content: "Vendor invoice for first bag batch uploaded for trustee review.",
    image: null,
    postedAt: "2026-04-28T16:00:00.000Z",
  },
];

function extendFeedForDemo(base: CampaignUpdate[]): CampaignUpdate[] {
  const extra: CampaignUpdate[] = [];
  const baseTime = Date.UTC(2026, 4, 12, 12, 0, 0);
  for (let i = 0; i < 20; i++) {
    const src = base[i % base.length];
    const postedAt = new Date(baseTime - (i + 7) * 36 * 60 * 60 * 1000).toISOString();
    extra.push({
      ...src,
      id: `feed-gen-${i}`,
      postedAt,
      content:
        i % 3 === 0
          ? `${src.content} (Older update ${i + 1} — mock archive for infinite feed.)`
          : src.content,
    });
  }
  return [...base, ...extra];
}

export const mockHomeFeedUpdates = [...extendFeedForDemo(mockUpdatesRaw)].sort(
  (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
);

const mockUpdatesCanonical = [...mockUpdatesRaw].sort(
  (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
);

/** Public share links — token maps to campaign; no donor data in URL */
export const shareTokenBySlug: Record<string, string> = {
  "school-kits-mumbai": "sh_7f3a9c2e1b0046d0a8f5",
  "primary-care-camp": "sh_2c91d4aa70414b6e9e31",
  "women-livelihood-batch-4": "sh_9aa10bde3c2a4c1f8d77",
  "mangrove-restore-coastal": "sh_4d22e118f9ab4a0c9c12",
};

export function getSlugByShareToken(token: string): string | undefined {
  const hit = Object.entries(shareTokenBySlug).find(([, v]) => v === token);
  return hit?.[0];
}

export function getShareTokenForSlug(slug: string): string | undefined {
  return shareTokenBySlug[slug];
}

export const mockLedger: LedgerEntry[] = [
  {
    permanentId: "TCMF-2026-000412",
    entryType: "donation_in",
    amount: 5000,
    campaignSlug: "school-kits-mumbai",
    campaignTitle: "School kits for Mumbai East",
    category: "donation",
    description: "UPI donation — receipt generated privately",
    timestamp: "2026-05-11T11:02:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2026-000411",
    entryType: "spend_out",
    amount: 82000,
    campaignSlug: "school-kits-mumbai",
    campaignTitle: "School kits for Mumbai East",
    category: "stationery",
    description: "Stationery vendor — bill on file",
    timestamp: "2026-05-10T09:15:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2025-000905",
    entryType: "donation_in",
    amount: 25000,
    campaignSlug: "primary-care-camp",
    campaignTitle: "Primary care camp — rural Karnataka",
    category: "donation",
    description: "Card payment",
    timestamp: "2025-08-02T18:44:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2025-000904",
    entryType: "surplus_transfer",
    amount: 45000,
    campaignSlug: "primary-care-camp",
    campaignTitle: "Primary care camp — rural Karnataka",
    category: "other",
    description: "Surplus to general corpus after closure checks",
    timestamp: "2025-09-21T10:00:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2026-000400",
    entryType: "correction",
    amount: -2000,
    campaignSlug: "mangrove-restore-coastal",
    campaignTitle: "Coastal mangrove restoration",
    category: "other",
    description: "Correction entry — supersedes mis-posted logistics line",
    timestamp: "2026-04-01T12:30:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2026-000388",
    entryType: "donation_in",
    amount: 2000,
    campaignSlug: "women-livelihood-batch-4",
    campaignTitle: "Women livelihood — tailoring batch 4",
    category: "donation",
    description: "UPI donation",
    timestamp: "2026-03-18T08:12:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2026-000350",
    entryType: "spend_out",
    amount: 140000,
    campaignSlug: "women-livelihood-batch-4",
    campaignTitle: "Women livelihood — tailoring batch 4",
    category: "event",
    description: "Trainer fees — batch 4",
    timestamp: "2026-02-02T14:00:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2025-000820",
    entryType: "donation_in",
    amount: 100000,
    campaignSlug: "mangrove-restore-coastal",
    campaignTitle: "Coastal mangrove restoration",
    category: "donation",
    description: "Netbanking",
    timestamp: "2025-12-01T16:40:00.000Z",
    verified: true,
  },
  {
    permanentId: "TCMF-2025-000801",
    entryType: "spend_out",
    amount: 95000,
    campaignSlug: "mangrove-restore-coastal",
    campaignTitle: "Coastal mangrove restoration",
    category: "transport",
    description: "Logistics — planting drive",
    timestamp: "2025-11-20T10:05:00.000Z",
    verified: true,
  },
];

export function getSpendsForCampaign(slug: string): SpendEntry[] {
  if (slug === "school-kits-mumbai") {
    return [
      {
        id: "s1",
        vendor: "BagWorks Pvt Ltd",
        category: "schoolbag",
        amount: 128700,
        billThumb: cover("1454165805759-aa30daf9b772"),
        date: "2026-05-08",
        signoffCount: 2,
        verified: true,
      },
      {
        id: "s2",
        vendor: "City Stationers",
        category: "stationery",
        amount: 82000,
        billThumb: cover("1513475382586-d06e58bcb0e0"),
        date: "2026-05-10",
        signoffCount: 1,
        verified: false,
      },
    ];
  }
  if (slug === "primary-care-camp") {
    return [
      {
        id: "s3",
        vendor: "MedSupply Co-op",
        category: "medicine",
        amount: 418000,
        billThumb: cover("1587854692159-c57f943b129a"),
        date: "2025-08-30",
        signoffCount: 2,
        verified: true,
      },
    ];
  }
  return [];
}

export function getDistributionForCampaign(slug: string): DistributionView {
  if (slug === "primary-care-camp") {
    return {
      publicCount: 900,
      photo: cover("1579684385127-1ef15d5081ad"),
      verified: true,
    };
  }
  if (slug === "school-kits-mumbai") {
    return { publicCount: 286, photo: cover("1529390079861-591de354eb51"), verified: false };
  }
  return { publicCount: 0, photo: cover("1500530855697-b89d198620b0"), verified: false };
}

export function getCampaignUpdatesForSlug(slug: string): CampaignUpdate[] {
  return mockUpdatesCanonical.filter((u) => u.campaignSlug === slug);
}

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return mockCampaigns.find((c) => c.slug === slug);
}

export const mockTrusteeQueue = [
  { id: "t1", title: "Spend: stationery — School kits Mumbai", amount: 82000, waitingHours: 6 },
  { id: "t2", title: "Distribution proof — Mangrove Q1", amount: 0, waitingHours: 30 },
];

export const mockDistributionQueue: DistributionQueueItem[] = [
  {
    id: "d1",
    campaignTitle: "Coastal mangrove restoration",
    campaignSlug: "mangrove-restore-coastal",
    publicCount: 380,
    waitingHours: 30,
    summary: "Register PDF on R2 + public distribution photo (no faces).",
  },
  {
    id: "d2",
    campaignTitle: "School kits for Mumbai East",
    campaignSlug: "school-kits-mumbai",
    publicCount: 286,
    waitingHours: 4,
    summary: "Mid-campaign distribution checkpoint — second trustee sign-off pending.",
  },
];

export const mockDonationHistory: DonationHistoryEntry[] = [
  {
    id: "h1",
    campaignTitle: "School kits for Mumbai East",
    campaignSlug: "school-kits-mumbai",
    date: "2026-05-11",
    amount: 5000,
    receiptIssued: true,
  },
  {
    id: "h2",
    campaignTitle: "Primary care camp — rural Karnataka",
    campaignSlug: "primary-care-camp",
    date: "2025-08-02",
    amount: 25000,
    receiptIssued: true,
  },
  {
    id: "h3",
    campaignTitle: "Women livelihood — tailoring batch 4",
    campaignSlug: "women-livelihood-batch-4",
    date: "2026-03-18",
    amount: 2000,
    receiptIssued: false,
  },
];

export const mockDonorReceipts = [
  { id: "r1", number: "TCMF-80G-2026-0142", campaign: "School kits for Mumbai East", amount: 5000, date: "2026-05-11" },
  { id: "r2", number: "TCMF-80G-2025-0881", campaign: "Primary care camp — rural Karnataka", amount: 25000, date: "2025-08-02" },
];

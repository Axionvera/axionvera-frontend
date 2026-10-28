import type {
  Activity,
  Agent,
  AgentRewardSummary,
  Campaign,
  CampaignId,
  RewardEntry,
  Verifier,
} from "@/types/axionvera";

export const CURRENCY = "USDC" as const;

/*
 * ----------------------------------------------------------
 * Campaigns
 * ----------------------------------------------------------
 *
 * This file is the canonical UI/domain data source while
 * Axionvera is still using local mock data.
 *
 * Later, Core will replace the implementation behind these
 * reads without requiring the UI to redefine the domain.
 */

export const campaigns: Campaign[] = [
  {
    id: "merchant-growth",
    slug: "merchant-growth-campaign",
    name: "Merchant Growth Campaign",
    description:
      "Reward agents for verified merchant onboarding.",
    status: "active",

    qualifyingAction: "Merchant onboarded",
    rewardPerVerifiedAction: 5,

    fundedAmount: 1000,
    allocatedRewards: 325,
    availableFunds: 675,

    activeAgents: 24,

    verifierId: "operations-team",
  },

  {
    id: "customer-activation",
    slug: "customer-activation-campaign",
    name: "Customer Activation Campaign",
    description:
      "Reward verified customer activation activity.",
    status: "active",

    qualifyingAction: "Customer activated",
    rewardPerVerifiedAction: 5,

    fundedAmount: 500,
    allocatedRewards: 125,
    availableFunds: 375,

    activeAgents: 12,

    verifierId: "operations-team",
  },

  {
    id: "referral-growth",
    slug: "referral-growth-campaign",
    name: "Referral Growth Campaign",
    description:
      "Reward agents for verified referral conversions.",
    status: "active",

    qualifyingAction: "Referral converted",
    rewardPerVerifiedAction: 5,

    fundedAmount: 500,
    allocatedRewards: 90,
    availableFunds: 410,

    activeAgents: 9,

    verifierId: null,
  },

  {
    id: "retail-expansion",
    slug: "retail-expansion-campaign",
    name: "Retail Expansion Campaign",
    description:
      "Support verified retail expansion activity.",
    status: "paused",

    qualifyingAction: "Retail location activated",
    rewardPerVerifiedAction: 5,

    fundedAmount: 750,
    allocatedRewards: 210,
    availableFunds: 540,

    activeAgents: 6,

    verifierId: null,
  },
];

/*
 * ----------------------------------------------------------
 * Agents
 * ----------------------------------------------------------
 */

export const agents: Agent[] = [
  {
    id: "amina-t",
    name: "Amina T.",
    initials: "AT",
    walletLabel: "Agent Account",
    walletAddressShort: "GBXE7...AELC",
  },

  {
    id: "sarah-a",
    name: "Sarah A.",
    initials: "SA",
    walletLabel: "Agent Account",
    walletAddressShort: "G...SAR",
  },

  {
    id: "david-k",
    name: "David K.",
    initials: "DK",
    walletLabel: "Agent Account",
    walletAddressShort: "G...DAV",
  },

  {
    id: "tunde-o",
    name: "Tunde O.",
    initials: "TO",
    walletLabel: "Agent Account",
    walletAddressShort: "G...TUN",
  },
  {
    id: "fatima-r",
    name: "Fatima R.",
    initials: "FR",
    walletLabel: "Agent Account",
    walletAddressShort: "G...FAT",
  },

];

/*
 * ----------------------------------------------------------
 * Verifiers
 * ----------------------------------------------------------
 */

export const verifiers: Verifier[] = [
  {
    id: "operations-team",
    slug: "operations-team",
    name: "Operations Team",
    status: "authorised",

    assignedCampaignIds: [
      "merchant-growth",
      "customer-activation",
    ],
  },
];

/*
 * ----------------------------------------------------------
 * Agent Activity
 * ----------------------------------------------------------
 *
 * Current mock activity mirrors the Agent Activity UI.
 * Aggregate reward balances remain explicit below for now.
 * Once Core is connected, these values will be derived from
 * persisted activity + reward records.
 */

export const agentActivities: Activity[] = [
  {
    id: "activity-001",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "15m ago",
  },
  {
    id: "activity-002",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "3h ago",
  },
  {
    id: "activity-003",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "pending",
    rewardAmount: null,
    submittedLabel: "Yesterday",
  },
  {
    id: "activity-004",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "2 days ago",
  },
  {
    id: "activity-005",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "3 days ago",
  },
  {
    id: "activity-006",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "4 days ago",
  },
  {
    id: "activity-007",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "5 days ago",
  },
  {
    id: "activity-008",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "6 days ago",
  },
  {
    id: "activity-009",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "1 week ago",
  },
  {
    id: "activity-010",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "1 week ago",
  },
  {
    id: "activity-011",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "8 days ago",
  },
  {
    id: "activity-012",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "9 days ago",
  },
  {
    id: "activity-013",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "10 days ago",
  },
  {
    id: "activity-014",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "11 days ago",
  },
  {
    id: "activity-015",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "12 days ago",
  },
  {
    id: "activity-016",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "pending",
    rewardAmount: null,
    submittedLabel: "13 days ago",
  },
  {
    id: "activity-017",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "2 weeks ago",
  },
  {
    id: "activity-018",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "2 weeks ago",
  },
  {
    id: "activity-019",
    agentId: "amina-t",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "3 weeks ago",
  },
  {
    id: "activity-020",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "3 weeks ago",
  },
];

/*
 * ----------------------------------------------------------
 * Business activity
 * ----------------------------------------------------------
 *
 * Business-wide feed shown in the Business Activity workspace.
 * This is intentionally separate from Amina's personal
 * Agent Activity history because the two screens represent
 * different query scopes.
 */

export const businessActivities: Activity[] = [
  {
    id: "business-activity-001",
    agentId: "sarah-a",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "15m ago",
  },
  {
    id: "business-activity-002",
    agentId: "david-k",
    activity: "Customer activated",
    campaignId: "customer-activation",
    status: "verified",
    rewardAmount: 3,
    submittedLabel: "1h ago",
  },
  {
    id: "business-activity-003",
    agentId: "amina-t",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "pending",
    rewardAmount: null,
    submittedLabel: "3h ago",
  },
  {
    id: "business-activity-004",
    agentId: "tunde-o",
    activity: "Referral converted",
    campaignId: "referral-growth",
    status: "verified",
    rewardAmount: 5,
    submittedLabel: "Yesterday",
  },
  {
    id: "business-activity-005",
    agentId: "fatima-r",
    activity: "Merchant onboarded",
    campaignId: "merchant-growth",
    status: "pending",
    rewardAmount: null,
    submittedLabel: "Yesterday",
  },
];

export const businessActivitySummary = {
  total: 77,
  verified: 71,
  pending: 6,
} as const;

/*
 * ----------------------------------------------------------
 * Agent reward aggregates
 * ----------------------------------------------------------
 *
 * These preserve the values already shown throughout the
 * Stitch-built Rewards UI:
 *
 * Total earned: 45 USDC
 * Claimable:    20 USDC
 * Claimed:      25 USDC
 */

export const agentRewardSummaries: AgentRewardSummary[] = [
  {
    agentId: "amina-t",

    totalEarned: 45,
    claimable: 20,
    claimed: 25,

    totalActivity: 20,
    verifiedActivity: 18,
    pendingActivity: 2,
  },
];

export const rewardEntries: RewardEntry[] = [
  {
    id: "reward-001",
    agentId: "amina-t",
    campaignId: "merchant-growth",
    activity: "Merchant onboarded",
    amount: 5,
    status: "claimable",
    timeLabel: "15m ago",
  },
  {
    id: "reward-002",
    agentId: "amina-t",
    campaignId: "referral-growth",
    activity: "Referral converted",
    amount: 5,
    status: "claimable",
    timeLabel: "3h ago",
  },
  {
    id: "reward-005",
    agentId: "amina-t",
    campaignId: "merchant-growth",
    activity: "Merchant onboarded",
    amount: 5,
    status: "claimed",
    timeLabel: "Yesterday",
  },
  {
    id: "reward-003",
    agentId: "amina-t",
    campaignId: "merchant-growth",
    activity: "Merchant onboarded",
    amount: 5,
    status: "claimable",
    timeLabel: "2 days ago",
  },
  {
    id: "reward-004",
    agentId: "amina-t",
    campaignId: "merchant-growth",
    activity: "Merchant onboarded",
    amount: 5,
    status: "claimable",
    timeLabel: "4 days ago",
  },
  {
    id: "reward-006",
    agentId: "amina-t",
    campaignId: "referral-growth",
    activity: "Referral converted",
    amount: 5,
    status: "claimed",
    timeLabel: "5 days ago",
  },
  {
    id: "reward-007",
    agentId: "amina-t",
    campaignId: "merchant-growth",
    activity: "Merchant onboarded",
    amount: 5,
    status: "claimed",
    timeLabel: "6 days ago",
  },
  {
    id: "reward-008",
    agentId: "amina-t",
    campaignId: "referral-growth",
    activity: "Referral converted",
    amount: 5,
    status: "claimed",
    timeLabel: "1 week ago",
  },
  {
    id: "reward-009",
    agentId: "amina-t",
    campaignId: "merchant-growth",
    activity: "Merchant onboarded",
    amount: 5,
    status: "claimed",
    timeLabel: "2 weeks ago",
  },
];

/*
 * ----------------------------------------------------------
 * Read helpers
 * ----------------------------------------------------------
 */

export function getCampaign(
  id: CampaignId
) {
  return campaigns.find(
    (campaign) =>
      campaign.id === id
  );
}

export function getCampaignBySlug(
  slug: string
) {
  return campaigns.find(
    (campaign) =>
      campaign.slug === slug
  );
}

export function getAgent(
  id: Agent["id"]
) {
  return agents.find(
    (agent) =>
      agent.id === id
  );
}

export function getVerifier(
  id: Verifier["id"]
) {
  return verifiers.find(
    (verifier) =>
      verifier.id === id
  );
}

export function getVerifierAssignedCampaigns(
  verifierId: Verifier["id"]
) {
  const verifier =
    getVerifier(verifierId);

  if (!verifier) {
    return [];
  }

  return verifier.assignedCampaignIds
    .map((campaignId) =>
      getCampaign(campaignId)
    )
    .filter(
      (
        campaign
      ): campaign is Campaign =>
        Boolean(campaign)
    );
}

export function getActivitiesForAgent(
  agentId: Agent["id"]
) {
  return agentActivities.filter(
    (activity) =>
      activity.agentId === agentId
  );
}

export function getClaimableRewardBreakdownForAgent(
  agentId: Agent["id"]
): Array<{
  campaignId: CampaignId;
  amount: number;
}> {
  const totals =
    new Map<CampaignId, number>();

  for (
    const reward
    of rewardEntries
  ) {
    if (
      reward.agentId !== agentId ||
      reward.status !== "claimable"
    ) {
      continue;
    }

    totals.set(
      reward.campaignId,
      (totals.get(reward.campaignId) ?? 0)
        + reward.amount
    );
  }

  return Array.from(
    totals.entries()
  ).map(
    ([campaignId, amount]) => ({
      campaignId,
      amount,
    })
  );
}

export function getRewardsForAgent(
  agentId: Agent["id"]
) {
  return rewardEntries.filter(
    (reward) =>
      reward.agentId === agentId
  );
}

export function getAgentRewardSummary(
  agentId: Agent["id"]
) {
  return agentRewardSummaries.find(
    (summary) =>
      summary.agentId === agentId
  );
}


/*
 * ----------------------------------------------------------
 * Required reads
 * ----------------------------------------------------------
 *
 * Use these when a screen cannot exist without the requested
 * domain record. They return definite types, which keeps
 * React components free from repeated undefined checks.
 */

export function requireCampaign(
  id: CampaignId
): Campaign {
  const campaign = getCampaign(id);

  if (!campaign) {
    throw new Error(
      `Campaign "${id}" was not found.`
    );
  }

  return campaign;
}

export function requireVerifier(
  id: Verifier["id"]
): Verifier {
  const verifier = getVerifier(id);

  if (!verifier) {
    throw new Error(
      `Verifier "${id}" was not found.`
    );
  }

  return verifier;
}


export function requireAgent(
  id: Agent["id"]
): Agent {
  const agent = getAgent(id);

  if (!agent) {
    throw new Error(
      `Agent "${id}" was not found.`
    );
  }

  return agent;
}


export function requireAgentRewardSummary(
  agentId: Agent["id"]
): AgentRewardSummary {
  const summary =
    getAgentRewardSummary(agentId);

  if (!summary) {
    throw new Error(
      `Reward summary for agent "${agentId}" was not found.`
    );
  }

  return summary;
}

/**
 * Business directory projections.
 *
 * Canonical identities come from the shared Agent and
 * Verifier records.
 *
 * Amina's Business-facing activity/reward figures derive
 * from her canonical Agent summary so both workspaces stay
 * consistent.
 */

const aminaDirectorySummary =
  requireAgentRewardSummary("amina-t");

const aminaDirectoryCampaignCount =
  new Set(
    getActivitiesForAgent("amina-t").map(
      (activity) => activity.campaignId
    )
  ).size;

const businessAgentDirectoryStats: Array<{
  agentId: Agent["id"];
  status: "Active";
  campaigns: number;
  verified: number;
  pending: number;
  claimable: number;
  lastActivity: string;
}> = [
  {
    agentId: "sarah-a",
    status: "Active",
    campaigns: 2,
    verified: 18,
    pending: 0,
    claimable: 25,
    lastActivity: "15m ago",
  },
  {
    agentId: "david-k",
    status: "Active",
    campaigns: 2,
    verified: 14,
    pending: 0,
    claimable: 18,
    lastActivity: "1h ago",
  },
  {
    agentId: "amina-t",
    status: "Active",
    campaigns: aminaDirectoryCampaignCount,
    verified:
      aminaDirectorySummary.verifiedActivity,
    pending:
      aminaDirectorySummary.pendingActivity,
    claimable:
      aminaDirectorySummary.claimable,
    lastActivity: "3h ago",
  },
  {
    agentId: "tunde-o",
    status: "Active",
    campaigns: 2,
    verified: 12,
    pending: 0,
    claimable: 20,
    lastActivity: "Yesterday",
  },
  {
    agentId: "fatima-r",
    status: "Active",
    campaigns: 1,
    verified: 7,
    pending: 1,
    claimable: 10,
    lastActivity: "Yesterday",
  },
];

export const businessAgentDirectory =
  businessAgentDirectoryStats.map(
    (stats) => {
      const agent =
        requireAgent(stats.agentId);

      return {
        initials: agent.initials,
        name: agent.name,
        status: stats.status,
        campaigns: stats.campaigns,
        verified: stats.verified,
        pending: stats.pending,
        claimable: stats.claimable,
        lastActivity: stats.lastActivity,
      };
    }
  );

const operationsTeamDirectoryVerifier =
  requireVerifier("operations-team");

export const businessVerifierDirectory: Array<{
  name: string;
  type: string;
  status: "Authorised" | "Inactive";
  campaigns: number;
  pending: number;
  verified: number;
  href?: string;
}> = [
  {
    name: operationsTeamDirectoryVerifier.name,
    type: "Team verifier",
    status:
      operationsTeamDirectoryVerifier.status ===
      "authorised"
        ? "Authorised"
        : "Inactive",
    campaigns:
      operationsTeamDirectoryVerifier
        .assignedCampaignIds.length,
    pending: 3,
    verified: 42,
    href:
      `/app/business/verifiers/${operationsTeamDirectoryVerifier.slug}`,
  },
  {
    name: "Backend / API Verifier",
    type: "API verifier",
    status: "Authorised",
    campaigns: 1,
    pending: 2,
    verified: 21,
  },
  {
    name: "Merchant Review Team",
    type: "Team verifier",
    status: "Inactive",
    campaigns: 0,
    pending: 0,
    verified: 8,
  },
];

/**
 * Merchant Growth funding-flow preview.
 *
 * This is a historical UI transaction snapshot, not
 * mutable Core state.
 */
const merchantGrowthFundingCampaign =
  requireCampaign("merchant-growth");

export const merchantGrowthFundingPreview = {
  campaignId:
    merchantGrowthFundingCampaign.id,
  campaignName:
    merchantGrowthFundingCampaign.name,
  campaignSlug:
    merchantGrowthFundingCampaign.slug,
  campaignStatus:
    merchantGrowthFundingCampaign.status,
  rewardPerVerifiedAction:
    merchantGrowthFundingCampaign
      .rewardPerVerifiedAction,
  previousFunds: 0,
  amount:
    merchantGrowthFundingCampaign.fundedAmount,
  postFundingFunds:
    merchantGrowthFundingCampaign.fundedAmount,
} as const;

/**
 * Recent activity snapshot shown on the Merchant Growth
 * campaign detail page.
 *
 * Historical reward values remain snapshots and are not
 * recomputed from current campaign rules.
 */
const merchantGrowthCampaignActivitySnapshots: Array<{
  agentId: Agent["id"];
  action: string;
  status: "Verified" | "Pending verification";
  rewardAmount: number | null;
  time: string;
}> = [
  {
    agentId: "sarah-a",
    action: "Merchant onboarded",
    status: "Verified",
    rewardAmount: 5,
    time: "15m ago",
  },
  {
    agentId: "david-k",
    action: "Merchant onboarded",
    status: "Verified",
    rewardAmount: 5,
    time: "1h ago",
  },
  {
    agentId: "amina-t",
    action: "Merchant onboarded",
    status: "Pending verification",
    rewardAmount: null,
    time: "3h ago",
  },
];

export const merchantGrowthCampaignRecentActivity =
  merchantGrowthCampaignActivitySnapshots.map(
    (snapshot) => {
      const agent =
        requireAgent(snapshot.agentId);

      return {
        initials: agent.initials,
        name: agent.name,
        action: snapshot.action,
        status: snapshot.status,
        reward:
          snapshot.rewardAmount == null
            ? null
            : `+${snapshot.rewardAmount} ${CURRENCY}`,
        time: snapshot.time,
      };
    }
  );


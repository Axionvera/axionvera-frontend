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
    id: "reward-003",
    agentId: "amina-t",
    campaignId: "merchant-growth",
    activity: "Merchant onboarded",
    amount: 5,
    status: "claimed",
    timeLabel: "Yesterday",
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

export type CampaignStatus =
  | "active"
  | "paused"
  | "closed";

export type ActivityStatus =
  | "verified"
  | "pending";

export type CampaignId =
  | "merchant-growth"
  | "customer-activation"
  | "referral-growth"
  | "retail-expansion";

export type AgentId =
  | "amina-t"
  | "sarah-a"
  | "david-k"
  | "tunde-o"
  | "fatima-r";

export type VerifierId =
  | "operations-team";

export type Campaign = {
  id: CampaignId;
  slug: string;
  name: string;
  description: string;
  status: CampaignStatus;

  qualifyingAction: string;
  rewardPerVerifiedAction: number;

  fundedAmount: number;
  allocatedRewards: number;
  availableFunds: number;

  activeAgents: number;

  verifierId: VerifierId | null;
};

export type Agent = {
  id: AgentId;
  name: string;
  initials: string;
  walletLabel: string;
  walletAddressShort: string;
};

export type Verifier = {
  id: VerifierId;
  slug: string;
  name: string;
  status: "authorised";
  assignedCampaignIds: CampaignId[];
};

export type Activity = {
  id: string;
  agentId: AgentId;
  activity: string;
  campaignId: CampaignId;
  status: ActivityStatus;
  rewardAmount: number | null;
  submittedLabel: string;
};

export type AgentRewardSummary = {
  agentId: AgentId;

  totalEarned: number;
  claimable: number;
  claimed: number;

  totalActivity: number;
  verifiedActivity: number;
  pendingActivity: number;
};

export type RewardEntry = {
  id: string;
  agentId: AgentId;
  campaignId: CampaignId;
  activity: string;

  amount: number;
  status: "claimable" | "claimed";
  timeLabel: string;
};

export type CurrencyCode = "USDC";

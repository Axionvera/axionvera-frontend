import type {
  Campaign,
  CampaignIdInput,
  TransactionActionResult,
  WalletConnector,
} from "@axionvera/core";

import type {
  CampaignCreationPlan,
} from "@/core/campaigns/campaignCreateInput";

import {
  readActivationRule,
  readCampaignProtocolHealth,
  readCampaignProtocolState,
  readVerifierStatus,
} from "@/core/campaigns/campaignService";

import {
  addActivationRuleOnProtocol,
  addVerifierOnProtocol,
  createCampaignOnProtocol,
} from "@/core/campaigns/campaignWriteService";

type CreateConfiguredCampaignInput = {
  sourcePublicKey: string;
  wallet: WalletConnector;
  plan: CampaignCreationPlan;

  /**
   * Used when campaign creation succeeded but a later setup
   * transaction failed. Retrying then continues configuring
   * the same campaign rather than creating another one.
   */
  existingCampaignId?: CampaignIdInput;

  onCampaignCreated?: (
    campaignId: bigint
  ) => void;
};

export type ConfiguredCampaignResult = {
  campaignId: bigint;

  createTransactionHash:
    string | null;

  activationRuleTransactionHash:
    string | null;

  verifierTransactionHash:
    string | null;
};

function toBigInt(
  value: CampaignIdInput
) {
  return BigInt(
    value.toString()
  );
}

function requireSuccessfulTransaction(
  label: string,
  result: TransactionActionResult
) {
  if (result.status === "success") {
    return;
  }

  const detail =
    result.error
      ? ` ${result.error}`
      : "";

  throw new Error(
    `${label} did not complete successfully. Transaction ${result.hash} returned ${result.status}.${detail}`
  );
}

function campaignMatchesPlan(
  campaign: Campaign,
  plan: CampaignCreationPlan
) {
  return (
    campaign.admin ===
      plan.createInput.admin &&
    campaign.rewardToken ===
      plan.createInput.rewardToken &&
    campaign.name ===
      plan.createInput.name &&
    campaign.startTime ===
      toBigInt(
        plan.createInput.startTime
      ) &&
    campaign.endTime ===
      toBigInt(
        plan.createInput.endTime
      ) &&
    campaign.perAgentCap ===
      toBigInt(
        plan.createInput.perAgentCap
      )
  );
}

async function verifyCampaign(
  campaignId: CampaignIdInput,
  plan: CampaignCreationPlan
) {
  const {
    campaign,
  } =
    await readCampaignProtocolState(
      campaignId
    );

  if (
    !campaignMatchesPlan(
      campaign,
      plan
    )
  ) {
    throw new Error(
      `Campaign ${campaign.id.toString()} exists on-chain but does not match the submitted campaign configuration.`
    );
  }

  return campaign;
}

async function findCreatedCampaign(
  firstCandidateId: bigint,
  endExclusiveId: bigint,
  plan: CampaignCreationPlan
) {
  const candidateCount =
    endExclusiveId -
    firstCandidateId;

  if (
    candidateCount <= BigInt(0) ||
    candidateCount > BigInt(25)
  ) {
    throw new Error(
      "Unable to safely identify the newly created campaign."
    );
  }

  const matches: bigint[] = [];

  for (
    let candidate =
      firstCandidateId;
    candidate <
    endExclusiveId;
    candidate += BigInt(1)
  ) {
    try {
      const {
        campaign,
      } =
        await readCampaignProtocolState(
          candidate
        );

      if (
        campaignMatchesPlan(
          campaign,
          plan
        )
      ) {
        matches.push(candidate);
      }
    } catch {
      // A candidate that cannot be read is not our campaign.
    }
  }

  if (matches.length !== 1) {
    throw new Error(
      "The create transaction succeeded, but the newly created campaign could not be identified uniquely."
    );
  }

  return matches[0];
}

function isRuleNotFound(
  error: unknown
) {
  if (
    !error ||
    typeof error !== "object"
  ) {
    return false;
  }

  return (
    "contractErrorName" in error &&
    (
      error as {
        contractErrorName?: unknown;
      }
    ).contractErrorName ===
      "RuleNotFound"
  );
}

async function ensureActivationRule(
  campaignId: bigint,
  sourcePublicKey: string,
  wallet: WalletConnector,
  plan: CampaignCreationPlan
) {
  try {
    const existing =
      await readActivationRule(
        campaignId,
        plan.activationRule
          .milestone
      );

    if (
      !existing.enabled ||
      existing.rewardAmount !==
        plan.activationRule
          .rewardAmount
    ) {
      throw new Error(
        "The campaign already has a different activation rule for this qualifying action."
      );
    }

    return null;
  } catch (error) {
    if (!isRuleNotFound(error)) {
      throw error;
    }
  }

  const result =
    await addActivationRuleOnProtocol(
      {
        sourcePublicKey,
        wallet,
      },
      {
        campaignId,

        milestone:
          plan.activationRule
            .milestone,

        rewardAmount:
          plan.activationRule
            .rewardAmount,
      }
    );

  requireSuccessfulTransaction(
    "Activation rule setup",
    result
  );

  const confirmed =
    await readActivationRule(
      campaignId,
      plan.activationRule
        .milestone
    );

  if (
    !confirmed.enabled ||
    confirmed.rewardAmount !==
      plan.activationRule
        .rewardAmount
  ) {
    throw new Error(
      "The activation rule transaction succeeded but the rule could not be confirmed on-chain."
    );
  }

  return result.hash;
}

async function ensureVerifier(
  campaignId: bigint,
  sourcePublicKey: string,
  wallet: WalletConnector,
  plan: CampaignCreationPlan
) {
  const alreadyAuthorised =
    await readVerifierStatus(
      campaignId,
      plan.verifierAddress
    );

  if (alreadyAuthorised) {
    return null;
  }

  const result =
    await addVerifierOnProtocol(
      {
        sourcePublicKey,
        wallet,
      },
      {
        campaignId,
        verifier:
          plan.verifierAddress,
      }
    );

  requireSuccessfulTransaction(
    "Verifier setup",
    result
  );

  const confirmed =
    await readVerifierStatus(
      campaignId,
      plan.verifierAddress
    );

  if (!confirmed) {
    throw new Error(
      "The verifier transaction succeeded but the verifier could not be confirmed on-chain."
    );
  }

  return result.hash;
}

export async function createConfiguredCampaignOnProtocol(
  input: CreateConfiguredCampaignInput
): Promise<ConfiguredCampaignResult> {
  const {
    sourcePublicKey,
    wallet,
    plan,
    existingCampaignId,
    onCampaignCreated,
  } = input;

  let campaignId: bigint;

  let createTransactionHash:
    string | null = null;

  if (
    existingCampaignId !==
    undefined
  ) {
    campaignId =
      toBigInt(
        existingCampaignId
      );

    await verifyCampaign(
      campaignId,
      plan
    );
  } else {
    const before =
      await readCampaignProtocolHealth();

    const firstCandidateId =
      before.nextCampaignId;

    const createResult =
      await createCampaignOnProtocol(
        {
          sourcePublicKey,
          wallet,
        },
        plan.createInput
      );

    requireSuccessfulTransaction(
      "Campaign creation",
      createResult
    );

    createTransactionHash =
      createResult.hash;

    const after =
      await readCampaignProtocolHealth();

    campaignId =
      await findCreatedCampaign(
        firstCandidateId,
        after.nextCampaignId,
        plan
      );

    await verifyCampaign(
      campaignId,
      plan
    );

    onCampaignCreated?.(
      campaignId
    );
  }

  const activationRuleTransactionHash =
    await ensureActivationRule(
      campaignId,
      sourcePublicKey,
      wallet,
      plan
    );

  const verifierTransactionHash =
    await ensureVerifier(
      campaignId,
      sourcePublicKey,
      wallet,
      plan
    );

  await verifyCampaign(
    campaignId,
    plan
  );

  return {
    campaignId,
    createTransactionHash,
    activationRuleTransactionHash,
    verifierTransactionHash,
  };
}

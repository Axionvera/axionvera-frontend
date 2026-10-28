import type {
  CreateCampaignInput,
} from "@axionvera/core";

import {
  AXIONVERA_NETWORK,
} from "@/lib/axionveraNetwork";

import {
  toProtocolTokenAmount,
} from "@/core/campaigns/campaignProtocol";

export type CampaignVerifierSelection =
  | "Operations Team"
  | "Backend / API Verifier";

export type CampaignCreationFormValues = {
  adminAddress: string;
  name: string;
  qualifyingAction: string;
  reward: string;
  startDate: string;
  endDate: string;
  verifier: CampaignVerifierSelection;
};

export type CampaignCreationPlan = {
  createInput: CreateCampaignInput;

  activationRule: {
    milestone: string;
    rewardAmount: bigint;
  };

  verifierAddress: string;
};

/**
 * The Campaign contract requires an end timestamp.
 *
 * The current UI treats end date as optional, so a blank
 * value is represented as a far-future timestamp rather
 * than inventing an arbitrary short campaign duration.
 */
const NO_PRACTICAL_EXPIRY_TIMESTAMP =
  "253402300799";

function requireText(
  value: string,
  label: string
) {
  const normalized =
    value.trim();

  if (!normalized) {
    throw new Error(
      `${label} is required.`
    );
  }

  return normalized;
}

function dateToUnixSeconds(
  value: string,
  boundary: "start" | "end"
): string {
  const normalized =
    value.trim();

  if (!normalized) {
    throw new Error(
      "A date value is required."
    );
  }

  const parts =
    normalized.split("-");

  if (parts.length !== 3) {
    throw new Error(
      "Campaign date is invalid."
    );
  }

  const [
    yearText,
    monthText,
    dayText,
  ] = parts;

  const year =
    Number(yearText);

  const month =
    Number(monthText);

  const day =
    Number(dayText);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
    throw new Error(
      "Campaign date is invalid."
    );
  }

  const date =
    boundary === "start"
      ? new Date(
          year,
          month - 1,
          day,
          0,
          0,
          0,
          0
        )
      : new Date(
          year,
          month - 1,
          day,
          23,
          59,
          59,
          999
        );

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    throw new Error(
      "Campaign date is invalid."
    );
  }

  return Math.floor(
    date.getTime() / 1000
  ).toString();
}

function resolveVerifierAddress(
  verifier: CampaignVerifierSelection,
  adminAddress: string
) {
  if (
    verifier ===
    "Operations Team"
  ) {
    return adminAddress;
  }

  throw new Error(
    "Backend / API Verifier requires a configured Stellar verifier address before this campaign can be created on-chain."
  );
}

/**
 * Converts the existing campaign form into the three pieces
 * required by the Campaign protocol:
 *
 * 1. create_campaign
 * 2. add_activation_rule
 * 3. add_verifier
 *
 * This function performs no network calls.
 */
export function buildCampaignCreationPlan(
  values: CampaignCreationFormValues
): CampaignCreationPlan {
  const adminAddress =
    requireText(
      values.adminAddress,
      "Connected wallet"
    );

  const name =
    requireText(
      values.name,
      "Campaign name"
    );

  const milestone =
    requireText(
      values.qualifyingAction,
      "Qualifying action"
    );

  const rewardAmount =
    toProtocolTokenAmount(
      values.reward
    );

  if (
    rewardAmount <= BigInt(0)
  ) {
    throw new Error(
      "Reward must be greater than 0."
    );
  }

  const now =
    Math.floor(
      Date.now() / 1000
    ).toString();

  const startTime =
    values.startDate.trim()
      ? dateToUnixSeconds(
          values.startDate,
          "start"
        )
      : now;

  const endTime =
    values.endDate.trim()
      ? dateToUnixSeconds(
          values.endDate,
          "end"
        )
      : NO_PRACTICAL_EXPIRY_TIMESTAMP;

  if (
    BigInt(endTime) <=
    BigInt(startTime)
  ) {
    throw new Error(
      "Campaign end date must be after its start date."
    );
  }

  return {
    createInput: {
      admin:
        adminAddress,

      rewardToken:
        AXIONVERA_NETWORK
          .rewardToken
          .contractId,

      name,

      startTime,

      endTime,

      // The Network contract defines zero as uncapped.
      perAgentCap: "0",
    },

    activationRule: {
      milestone,
      rewardAmount,
    },

    verifierAddress:
      resolveVerifierAddress(
        values.verifier,
        adminAddress
      ),
  };
}

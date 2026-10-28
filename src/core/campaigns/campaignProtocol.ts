import type {
  CampaignStatus as ProtocolCampaignStatus,
} from "@axionvera/core";

import type {
  CampaignStatus,
} from "@/types/axionvera";

import {
  AXIONVERA_NETWORK,
} from "@/lib/axionveraNetwork";

/**
 * Converts the Campaign contract's lifecycle enum into the
 * frontend/domain representation.
 */
export function toFrontendCampaignStatus(
  status: ProtocolCampaignStatus
): CampaignStatus {
  switch (status) {
    case "Active":
      return "active";

    case "Paused":
      return "paused";

    case "Closed":
      return "closed";

    default: {
      const exhaustive:
        never = status;

      throw new Error(
        `Unsupported Campaign status: ${exhaustive}`
      );
    }
  }
}

/**
 * Converts a human-readable decimal token amount into the
 * integer representation expected by Soroban.
 *
 * Example for USDC:
 *
 * "5"     -> 50000000n
 * "12.50" -> 125000000n
 */
export function toProtocolTokenAmount(
  value: string,
  decimals =
    AXIONVERA_NETWORK
      .rewardToken.decimals
): bigint {
  const normalized =
    value.trim();

  if (
    !/^\d+(?:\.\d+)?$/.test(
      normalized
    )
  ) {
    throw new Error(
      "Token amount must be a non-negative decimal number."
    );
  }

  const [
    whole,
    fraction = "",
  ] = normalized.split(".");

  if (fraction.length > decimals) {
    throw new Error(
      `Token amount supports at most ${decimals} decimal places.`
    );
  }

  const paddedFraction =
    fraction.padEnd(
      decimals,
      "0"
    );

  const scale =
    BigInt(10) ** BigInt(decimals);

  return (
    BigInt(whole) * scale +
    BigInt(
      paddedFraction || "0"
    )
  );
}

/**
 * Converts a raw Soroban token amount into a human-readable
 * decimal string without losing bigint precision.
 *
 * Example for USDC:
 *
 * 50000000n  -> "5"
 * 125000000n -> "12.5"
 */
export function fromProtocolTokenAmount(
  amount: bigint,
  decimals =
    AXIONVERA_NETWORK
      .rewardToken.decimals
): string {
  if (amount < BigInt(0)) {
    throw new Error(
      "Token amount must not be negative."
    );
  }

  const scale =
    BigInt(10) ** BigInt(decimals);

  const whole =
    amount / scale;

  const remainder =
    amount % scale;

  if (remainder === BigInt(0)) {
    return whole.toString();
  }

  const fraction =
    remainder
      .toString()
      .padStart(
        decimals,
        "0"
      )
      .replace(/0+$/, "");

  return `${whole}.${fraction}`;
}

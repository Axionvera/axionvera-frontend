import type {
  CampaignStatus,
} from "@/types/axionvera";

/**
 * Campaign lifecycle rules.
 *
 * Keep these functions free of React, browser APIs and
 * persistence concerns.
 */

export function pauseCampaignStatus(
  currentStatus: CampaignStatus
): CampaignStatus {
  if (currentStatus === "paused") {
    return currentStatus;
  }

  return "paused";
}

export function resumeCampaignStatus(
  currentStatus: CampaignStatus
): CampaignStatus {
  if (currentStatus === "active") {
    return currentStatus;
  }

  return "active";
}

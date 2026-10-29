import type {
  CampaignId,
} from "@/types/axionvera";

/**
 * Canonical frontend-domain -> AxionVera protocol mappings.
 *
 * Only campaigns that have been positively verified on-chain
 * belong here.
 */
const CAMPAIGN_PROTOCOL_IDS:
  Partial<
    Record<
      CampaignId,
      string
    >
  > = {
    "merchant-growth": "2",
  };

export function getCampaignProtocolId(
  campaignId: CampaignId
): bigint | null {
  const value =
    CAMPAIGN_PROTOCOL_IDS[
      campaignId
    ];

  return value
    ? BigInt(value)
    : null;
}

export function requireCampaignProtocolId(
  campaignId: CampaignId
): bigint {
  const value =
    getCampaignProtocolId(
      campaignId
    );

  if (value === null) {
    throw new Error(
      `Campaign "${campaignId}" is not mapped to an on-chain campaign.`
    );
  }

  return value;
}

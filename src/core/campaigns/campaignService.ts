import {
  StellarCampaignReader,
  type CampaignIdInput,
} from "@axionvera/core";

import {
  AXIONVERA_NETWORK,
} from "@/lib/axionveraNetwork";

/**
 * Frontend boundary to the AxionVera Campaign protocol.
 *
 * React components should not construct Stellar readers
 * directly. Network and SDK concerns remain here.
 */

let campaignReader:
  StellarCampaignReader | null = null;

export function getCampaignReader() {
  if (!campaignReader) {
    campaignReader =
      new StellarCampaignReader({
        contractId:
          AXIONVERA_NETWORK
            .campaignContractId,

        rpcUrl:
          AXIONVERA_NETWORK.rpcUrl,

        sourcePublicKey:
          AXIONVERA_NETWORK
            .readSourcePublicKey,

        networkPassphrase:
          AXIONVERA_NETWORK
            .networkPassphrase,
      });
  }

  return campaignReader;
}

export async function readCampaignProtocolHealth() {
  const reader =
    getCampaignReader();

  const [
    initialized,
    protocolAdmin,
    nextCampaignId,
  ] = await Promise.all([
    reader.isInitialized(),
    reader.protocolAdmin(),
    reader.nextCampaignId(),
  ]);

  return {
    initialized,
    protocolAdmin,
    nextCampaignId,
  };
}

export async function readCampaignProtocolState(
  campaignId: CampaignIdInput
) {
  const reader =
    getCampaignReader();

  const [
    campaign,
    availableUnusedFunds,
  ] = await Promise.all([
    reader.getCampaign(campaignId),
    reader.availableUnusedFunds(
      campaignId
    ),
  ]);

  return {
    campaign,
    availableUnusedFunds,
  };
}

export async function readActivationRule(
  campaignId: CampaignIdInput,
  milestone: string
) {
  return getCampaignReader()
    .getActivationRule(
      campaignId,
      milestone
    );
}

export async function readVerifierStatus(
  campaignId: CampaignIdInput,
  verifier: string
) {
  return getCampaignReader()
    .isVerifier(
      campaignId,
      verifier
    );
}

export async function readAgentClaimableReward(
  campaignId: CampaignIdInput,
  agent: string
) {
  return getCampaignReader()
    .claimableReward(
      campaignId,
      agent
    );
}

export async function readAgentTotalEarned(
  campaignId: CampaignIdInput,
  agent: string
) {
  return getCampaignReader()
    .agentTotalEarned(
      campaignId,
      agent
    );
}

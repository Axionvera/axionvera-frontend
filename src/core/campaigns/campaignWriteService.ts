import {
  requestWalletSignature,
  StellarCampaignWriter,
  type CampaignIdInput,
  type CreateCampaignInput,
  type StellarPreparedWriteTransaction,
  type TransactionActionResult,
  type WalletConnector,
} from "@axionvera/core";

import {
  AXIONVERA_NETWORK,
} from "@/lib/axionveraNetwork";

export type CampaignWriteContext = {
  sourcePublicKey: string;
  wallet: WalletConnector;
};

function createCampaignWriter(
  sourcePublicKey: string
) {
  const normalizedPublicKey =
    sourcePublicKey.trim();

  if (!normalizedPublicKey) {
    throw new Error(
      "A connected wallet public key is required."
    );
  }

  return new StellarCampaignWriter({
    contractId:
      AXIONVERA_NETWORK
        .campaignContractId,

    rpcUrl:
      AXIONVERA_NETWORK.rpcUrl,

    sourcePublicKey:
      normalizedPublicKey,

    networkPassphrase:
      AXIONVERA_NETWORK
        .networkPassphrase,
  });
}

/**
 * Executes the standard AxionVera Soroban write pipeline:
 *
 * prepare -> wallet sign -> submit -> wait for result
 */
async function executeCampaignWrite(
  context: CampaignWriteContext,
  prepare: (
    writer: StellarCampaignWriter
  ) => Promise<
    StellarPreparedWriteTransaction
  >
): Promise<TransactionActionResult> {
  const writer =
    createCampaignWriter(
      context.sourcePublicKey
    );

  const prepared =
    await prepare(writer);

  const signed =
    await requestWalletSignature({
      wallet:
        context.wallet,

      request:
        prepared,
    });

  return writer
    .submitSignedTransaction(
      signed.signedXdr
    );
}

/**
 * Creates a Campaign through the deployed AxionVera
 * Campaign contract.
 *
 * No frontend campaign ID mapping should be persisted until
 * this transaction has succeeded and the newly assigned
 * campaign ID has been confirmed from the contract.
 */
export async function createCampaignOnProtocol(
  context: CampaignWriteContext,
  input: CreateCampaignInput
): Promise<TransactionActionResult> {
  return executeCampaignWrite(
    context,
    (writer) =>
      writer.prepareCreateCampaign(
        input
      )
  );
}


export async function addActivationRuleOnProtocol(
  context: CampaignWriteContext,
  input: {
    campaignId: CampaignIdInput;
    milestone: string;
    rewardAmount: CampaignIdInput;
  }
): Promise<TransactionActionResult> {
  return executeCampaignWrite(
    context,
    (writer) =>
      writer.prepareAddActivationRule(
        input
      )
  );
}

export async function addVerifierOnProtocol(
  context: CampaignWriteContext,
  input: {
    campaignId: CampaignIdInput;
    verifier: string;
  }
): Promise<TransactionActionResult> {
  return executeCampaignWrite(
    context,
    (writer) =>
      writer.prepareAddVerifier(
        input
      )
  );
}


export async function pauseCampaignOnProtocol(
  context: CampaignWriteContext,
  campaignId: CampaignIdInput
): Promise<TransactionActionResult> {
  return executeCampaignWrite(
    context,
    (writer) =>
      writer.preparePauseCampaign({
        campaignId,
      })
  );
}

export async function resumeCampaignOnProtocol(
  context: CampaignWriteContext,
  campaignId: CampaignIdInput
): Promise<TransactionActionResult> {
  return executeCampaignWrite(
    context,
    (writer) =>
      writer.prepareResumeCampaign({
        campaignId,
      })
  );
}

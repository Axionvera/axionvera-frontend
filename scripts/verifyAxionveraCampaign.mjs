import {
  StellarCampaignReader,
} from "@axionvera/core";

const CONTRACT_ID =
  "CAAXCSTGNQ6S73XRXYSKAEEWZNVS7XWA4EF67DRWDPS2XFSXXA3AC2C6";

const SOURCE_PUBLIC_KEY =
  "GDGOJ2KHXL3BSWHDFQYIOTCGBYP5SE4NGPUJY7XUVQX75SYKIMPJG7BO";

const RPC_URL =
  "https://soroban-testnet.stellar.org";

const reader =
  new StellarCampaignReader({
    contractId: CONTRACT_ID,
    sourcePublicKey:
      SOURCE_PUBLIC_KEY,
    rpcUrl: RPC_URL,
  });

async function main() {
  const [
    initialized,
    protocolAdmin,
    nextCampaignId,
    campaign,
    availableFunds,
  ] = await Promise.all([
    reader.isInitialized(),
    reader.protocolAdmin(),
    reader.nextCampaignId(),
    reader.getCampaign(1),
    reader.availableUnusedFunds(1),
  ]);

  console.log(
    "\n===== AXIONVERA SDK LIVE READ ====="
  );

  console.log(
    "Initialised:",
    initialized
  );

  console.log(
    "Protocol admin:",
    protocolAdmin
  );

  console.log(
    "Next campaign ID:",
    nextCampaignId.toString()
  );

  console.log("\nCampaign 1:");

  console.log({
    id: campaign.id.toString(),
    name: campaign.name,
    status: campaign.status,
    admin: campaign.admin,
    rewardToken:
      campaign.rewardToken,
    fundedAmount:
      campaign.fundedAmount.toString(),
    allocatedAmount:
      campaign.allocatedAmount.toString(),
    claimedAmount:
      campaign.claimedAmount.toString(),
    withdrawnAmount:
      campaign.withdrawnAmount.toString(),
    perAgentCap:
      campaign.perAgentCap.toString(),
  });

  console.log(
    "\nAvailable unused funds:",
    availableFunds.toString()
  );
}

main().catch((error) => {
  console.error(
    "\nSDK live-read verification failed:"
  );

  console.error(error);

  process.exitCode = 1;
});

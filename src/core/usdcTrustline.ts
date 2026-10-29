import {
  Asset,
  BASE_FEE,
  Horizon,
  Networks,
  Operation,
  TransactionBuilder,
} from "@stellar/stellar-sdk";

import {
  getStellarWalletKit,
} from "@/lib/stellarWallet";

const CIRCLE_TESTNET_USDC_ISSUER =
  "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";

const HORIZON_TESTNET =
  "https://horizon-testnet.stellar.org";

export async function createTestnetUsdcTrustline(
  walletAddress: string
) {
  const address =
    walletAddress.trim();

  if (!address) {
    throw new Error(
      "A connected Stellar wallet is required."
    );
  }

  const server =
    new Horizon.Server(
      HORIZON_TESTNET
    );

  const account =
    await server.loadAccount(
      address
    );

  const usdc =
    new Asset(
      "USDC",
      CIRCLE_TESTNET_USDC_ISSUER
    );

  const transaction =
    new TransactionBuilder(
      account,
      {
        fee: BASE_FEE,
        networkPassphrase:
          Networks.TESTNET,
      }
    )
      .addOperation(
        Operation.changeTrust({
          asset: usdc,
        })
      )
      .setTimeout(180)
      .build();

  const kit =
    await getStellarWalletKit();

  const signed =
    await kit.signTransaction(
      transaction.toXDR(),
      {
        networkPassphrase:
          Networks.TESTNET,
        address,
      }
    );

  if (!signed.signedTxXdr) {
    throw new Error(
      "The wallet did not return a signed trustline transaction."
    );
  }

  const signedTransaction =
    TransactionBuilder.fromXDR(
      signed.signedTxXdr,
      Networks.TESTNET
    );

  const result =
    await server.submitTransaction(
      signedTransaction
    );

  return {
    hash: result.hash,
  };
}

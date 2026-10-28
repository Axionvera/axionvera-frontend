import type {
  SignTransactionOptions,
  WalletConnection,
  WalletConnector,
} from "@axionvera/core";

import {
  getStellarWalletKit,
} from "@/lib/stellarWallet";

/**
 * Adapts the wallet session already owned by
 * BusinessWalletProvider to the wallet interface expected
 * by @axionvera/core.
 *
 * This adapter does not own wallet connection UI.
 */
export function createAxionveraWalletConnector(
  publicKey: string
): WalletConnector {
  const expectedPublicKey =
    publicKey.trim();

  if (!expectedPublicKey) {
    throw new Error(
      "A connected wallet public key is required."
    );
  }

  async function getCurrentConnection():
    Promise<WalletConnection> {
    const kit =
      await getStellarWalletKit();

    const result =
      await kit.getAddress();

    if (!result.address) {
      throw new Error(
        "No connected Stellar wallet was found."
      );
    }

    if (
      result.address !==
      expectedPublicKey
    ) {
      throw new Error(
        "The active Stellar wallet does not match the AxionVera business wallet session."
      );
    }

    return {
      publicKey:
        result.address,
      network:
        "testnet",
    };
  }

  return {
    id: "stellar-wallets-kit",

    name:
      "Stellar Wallets Kit",

    async connect() {
      return getCurrentConnection();
    },

    async isConnected() {
      try {
        await getCurrentConnection();
        return true;
      } catch {
        return false;
      }
    },

    async signTransaction(
      transactionXdr: string,
      options: SignTransactionOptions
    ) {
      const connection =
        await getCurrentConnection();

      if (
        options.accountToSign &&
        options.accountToSign !==
          connection.publicKey
      ) {
        throw new Error(
          "The prepared transaction signer does not match the connected wallet."
        );
      }

      const kit =
        await getStellarWalletKit();

      const result =
        await kit.signTransaction(
          transactionXdr,
          {
            networkPassphrase:
              options.networkPassphrase,

            address:
              connection.publicKey,
          }
        );

      if (!result.signedTxXdr) {
        throw new Error(
          "The wallet did not return a signed transaction."
        );
      }

      return result.signedTxXdr;
    },
  };
}

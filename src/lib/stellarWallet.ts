type StellarWalletsKitStatic =
  typeof import("@creit.tech/stellar-wallets-kit/sdk")["StellarWalletsKit"];

let kitPromise: Promise<StellarWalletsKitStatic> | null = null;

export async function getStellarWalletKit() {
  if (typeof window === "undefined") {
    throw new Error(
      "Stellar wallet access is only available in the browser."
    );
  }

  if (!kitPromise) {
    kitPromise = (async () => {
      const [
        { StellarWalletsKit },
        { defaultModules },
        { Networks },
      ] = await Promise.all([
        import("@creit.tech/stellar-wallets-kit/sdk"),
        import("@creit.tech/stellar-wallets-kit/modules/utils"),
        import("@stellar/stellar-sdk"),
      ]);

      StellarWalletsKit.init({
        modules: defaultModules(),
      });

      StellarWalletsKit.setNetwork(
        Networks.TESTNET
      );

      return StellarWalletsKit;
    })();
  }

  return kitPromise;
}

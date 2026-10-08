"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getStellarWalletKit } from "@/lib/stellarWallet";

const STORAGE_KEY =
  "axionvera:business-wallet-address";

type WalletSessionContextValue = {
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  isRestoring: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
};

const WalletSessionContext =
  createContext<WalletSessionContextValue | null>(
    null
  );

export function BusinessWalletProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [address, setAddress] =
    useState<string | null>(null);

  const [isConnecting, setIsConnecting] =
    useState(false);

  const [isRestoring, setIsRestoring] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  /*
    Attempt to restore an existing wallet session.

    We do not trust localStorage alone. If there was a
    previously connected address, the wallet kit must also
    be able to return a current wallet address.
  */
  useEffect(() => {
    let cancelled = false;

    async function restore() {
      const storedAddress =
        window.localStorage.getItem(
          STORAGE_KEY
        );

      if (!storedAddress) {
        if (!cancelled) {
          setIsRestoring(false);
        }

        return;
      }

      try {
        const kit =
          await getStellarWalletKit();

        const result =
          await kit.getAddress();

        if (
          !cancelled &&
          result.address
        ) {
          setAddress(result.address);

          window.localStorage.setItem(
            STORAGE_KEY,
            result.address
          );
        }
      } catch {
        window.localStorage.removeItem(
          STORAGE_KEY
        );

        if (!cancelled) {
          setAddress(null);
        }
      } finally {
        if (!cancelled) {
          setIsRestoring(false);
        }
      }
    }

    restore();

    return () => {
      cancelled = true;
    };
  }, []);

  const connect =
    useCallback(async () => {
      setIsConnecting(true);
      setError(null);

      try {
        const kit =
          await getStellarWalletKit();

        const result =
          await kit.authModal();

        if (!result.address) {
          throw new Error(
            "No wallet address was returned."
          );
        }

        setAddress(result.address);

        window.localStorage.setItem(
          STORAGE_KEY,
          result.address
        );
      } catch (cause) {
        const message =
          cause instanceof Error
            ? cause.message
            : "Wallet connection was not completed.";

        setError(message);
      } finally {
        setIsConnecting(false);
      }
    }, []);

  const disconnect =
    useCallback(() => {
      /*
        This disconnects the wallet from Axionvera's
        application session. It does not alter or remove
        anything from the user's wallet extension.
      */
      setAddress(null);
      setError(null);

      window.localStorage.removeItem(
        STORAGE_KEY
      );
    }, []);

  const value =
    useMemo<WalletSessionContextValue>(
      () => ({
        address,
        isConnected: Boolean(address),
        isConnecting,
        isRestoring,
        error,
        connect,
        disconnect,
      }),
      [
        address,
        isConnecting,
        isRestoring,
        error,
        connect,
        disconnect,
      ]
    );

  return (
    <WalletSessionContext.Provider
      value={value}
    >
      {children}
    </WalletSessionContext.Provider>
  );
}

export function useBusinessWallet() {
  const context =
    useContext(WalletSessionContext);

  if (!context) {
    throw new Error(
      "useBusinessWallet must be used inside BusinessWalletProvider."
    );
  }

  return context;
}

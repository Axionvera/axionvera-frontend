"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  readCampaignProtocolState,
} from "@/core/campaigns/campaignService";

import {
  pauseCampaignOnProtocol,
  resumeCampaignOnProtocol,
} from "@/core/campaigns/campaignWriteService";

import {
  requireCampaignProtocolId,
} from "@/core/campaigns/campaignProtocolIds";

import {
  formatProtocolTokenAmount,
  toFrontendCampaignStatus,
} from "@/core/campaigns/campaignProtocol";

import {
  createAxionveraWalletConnector,
} from "@/lib/axionveraWallet";

import {
  useBusinessWallet,
} from "@/components/business/BusinessWalletProvider";

import type {
  CampaignId,
  CampaignStatus,
} from "@/types/axionvera";

type LiveCampaignState = {
  status: CampaignStatus;

  fundedAmountRaw: bigint;
  allocatedAmountRaw: bigint;
  availableFundsRaw: bigint;
};

function errorMessage(
  cause: unknown
) {
  return cause instanceof Error
    ? cause.message
    : "The campaign protocol request failed.";
}

export function useCampaignProtocol(
  campaignId: CampaignId
) {
  const {
    address,
  } = useBusinessWallet();

  const protocolCampaignId =
    requireCampaignProtocolId(
      campaignId
    );

  const [
    state,
    setState,
  ] =
    useState<LiveCampaignState | null>(
      null
    );

  const [
    isLoading,
    setIsLoading,
  ] =
    useState(true);

  const [
    isMutating,
    setIsMutating,
  ] =
    useState(false);

  const [
    error,
    setError,
  ] =
    useState<string | null>(
      null
    );

  const refresh =
    useCallback(async () => {
      setIsLoading(true);

      try {
        const {
          campaign,
          availableUnusedFunds,
        } =
          await readCampaignProtocolState(
            protocolCampaignId
          );

        setState({
          status:
            toFrontendCampaignStatus(
              campaign.status
            ),

          fundedAmountRaw:
            campaign.fundedAmount,

          allocatedAmountRaw:
            campaign.allocatedAmount,

          availableFundsRaw:
            availableUnusedFunds,
        });

        setError(null);
      } catch (cause) {
        setError(
          errorMessage(cause)
        );

        throw cause;
      } finally {
        setIsLoading(false);
      }
    }, [protocolCampaignId]);

  useEffect(() => {
    void refresh().catch(
      () => undefined
    );
  }, [refresh]);

  const runLifecycleWrite =
    useCallback(
      async (
        action:
          | "pause"
          | "resume"
      ) => {
        if (!address) {
          throw new Error(
            "Connect the campaign admin wallet before changing campaign status."
          );
        }

        setIsMutating(true);
        setError(null);

        try {
          const wallet =
            createAxionveraWalletConnector(
              address
            );

          const context = {
            sourcePublicKey:
              address,
            wallet,
          };

          const result =
            action === "pause"
              ? await pauseCampaignOnProtocol(
                  context,
                  protocolCampaignId
                )
              : await resumeCampaignOnProtocol(
                  context,
                  protocolCampaignId
                );

          if (
            result.status !==
            "success"
          ) {
            throw new Error(
              result.error ??
                `Campaign ${action} transaction returned ${result.status}.`
            );
          }

          await refresh();
        } catch (cause) {
          setError(
            errorMessage(cause)
          );

          throw cause;
        } finally {
          setIsMutating(false);
        }
      },
      [
        address,
        protocolCampaignId,
        refresh,
      ]
    );

  const fundedAmount =
    state
      ? formatProtocolTokenAmount(
          state.fundedAmountRaw
        )
      : "—";

  const allocatedAmount =
    state
      ? formatProtocolTokenAmount(
          state.allocatedAmountRaw
        )
      : "—";

  const availableFunds =
    state
      ? formatProtocolTokenAmount(
          state.availableFundsRaw
        )
      : "—";

  let allocationPercent = 0;

  if (
    state &&
    state.fundedAmountRaw >
      BigInt(0)
  ) {
    const basisPoints =
      (
        state.allocatedAmountRaw *
        BigInt(10000)
      ) /
      state.fundedAmountRaw;

    allocationPercent =
      Math.min(
        100,
        Number(basisPoints) /
          100
      );
  }

  return {
    protocolCampaignId,

    status:
      state?.status ?? null,

    fundedAmount,
    allocatedAmount,
    availableFunds,
    allocationPercent,

    isLoading,
    isMutating,
    error,

    refresh,

    pause: () =>
      runLifecycleWrite(
        "pause"
      ),

    resume: () =>
      runLifecycleWrite(
        "resume"
      ),
  };
}

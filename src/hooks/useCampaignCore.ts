"use client";

import {
  useCallback,
  useSyncExternalStore,
} from "react";

import {
  getCampaignStatusServerSnapshot,
  getCampaignStatusSnapshot,
  pauseCampaign,
  resumeCampaign,
  subscribeCampaignStore,
} from "@/core/campaigns/campaignStore";
import type {
  CampaignId,
} from "@/types/axionvera";

export function useCampaignCore(
  campaignId: CampaignId
) {
  const status =
    useSyncExternalStore(
      subscribeCampaignStore,
      () =>
        getCampaignStatusSnapshot(
          campaignId
        ),
      () =>
        getCampaignStatusServerSnapshot(
          campaignId
        )
    );

  const pause =
    useCallback(() => {
      pauseCampaign(campaignId);
    }, [campaignId]);

  const resume =
    useCallback(() => {
      resumeCampaign(campaignId);
    }, [campaignId]);

  return {
    status,
    pause,
    resume,
  };
}

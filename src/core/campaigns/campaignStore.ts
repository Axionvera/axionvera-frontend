import {
  campaigns,
  requireCampaign,
} from "@/lib/axionveraData";
import type {
  CampaignId,
  CampaignStatus,
} from "@/types/axionvera";

import {
  pauseCampaignStatus,
  resumeCampaignStatus,
} from "./campaignRules";

type CampaignStatusOverrides =
  Partial<
    Record<
      CampaignId,
      CampaignStatus
    >
  >;

type PersistedCampaignState = {
  version: 1;
  statuses: CampaignStatusOverrides;
};

const STORAGE_KEY =
  "axionvera.core.campaign-state.v1";

let hydrated = false;

let statuses: CampaignStatusOverrides = {};

const listeners =
  new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function isCampaignStatus(
  value: unknown
): value is CampaignStatus {
  return (
    value === "active" ||
    value === "paused"
  );
}

function isCampaignId(
  value: string
): value is CampaignId {
  return campaigns.some(
    (campaign) =>
      campaign.id === value
  );
}

function readPersistedState():
  CampaignStatusOverrides {
  if (
    typeof window === "undefined"
  ) {
    return {};
  }

  try {
    const raw =
      window.localStorage.getItem(
        STORAGE_KEY
      );

    if (!raw) {
      return {};
    }

    const parsed =
      JSON.parse(raw) as
        Partial<PersistedCampaignState>;

    if (
      parsed.version !== 1 ||
      !parsed.statuses ||
      typeof parsed.statuses !== "object"
    ) {
      return {};
    }

    const restored:
      CampaignStatusOverrides = {};

    for (
      const [campaignId, status]
      of Object.entries(
        parsed.statuses
      )
    ) {
      if (
        isCampaignId(campaignId) &&
        isCampaignStatus(status)
      ) {
        restored[campaignId] =
          status;
      }
    }

    return restored;
  } catch {
    return {};
  }
}

function persistState() {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  const state: PersistedCampaignState = {
    version: 1,
    statuses,
  };

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch {
    // Persistence failure must not prevent
    // the in-memory campaign state working.
  }
}

function hydrateStore() {
  if (hydrated) {
    return;
  }

  hydrated = true;
  statuses = readPersistedState();

  emitChange();
}

export function subscribeCampaignStore(
  listener: () => void
) {
  listeners.add(listener);

  hydrateStore();

  return () => {
    listeners.delete(listener);
  };
}

export function getCampaignStatusSnapshot(
  campaignId: CampaignId
): CampaignStatus {
  return (
    statuses[campaignId] ??
    requireCampaign(campaignId).status
  );
}

export function getCampaignStatusServerSnapshot(
  campaignId: CampaignId
): CampaignStatus {
  return requireCampaign(
    campaignId
  ).status;
}

function setCampaignStatus(
  campaignId: CampaignId,
  status: CampaignStatus
) {
  hydrateStore();

  const current =
    getCampaignStatusSnapshot(
      campaignId
    );

  if (current === status) {
    return;
  }

  statuses = {
    ...statuses,
    [campaignId]: status,
  };

  persistState();
  emitChange();
}

export function pauseCampaign(
  campaignId: CampaignId
) {
  const current =
    getCampaignStatusSnapshot(
      campaignId
    );

  setCampaignStatus(
    campaignId,
    pauseCampaignStatus(current)
  );
}

export function resumeCampaign(
  campaignId: CampaignId
) {
  const current =
    getCampaignStatusSnapshot(
      campaignId
    );

  setCampaignStatus(
    campaignId,
    resumeCampaignStatus(current)
  );
}

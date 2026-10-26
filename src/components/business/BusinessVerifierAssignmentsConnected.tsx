"use client";

import Link from "next/link";
import { useState } from "react";

type CampaignAssignment = {
  id: string;
  name: string;
  description: string;
  active: boolean;
};

const campaigns: CampaignAssignment[] = [
  {
    id: "merchant-growth",
    name: "Merchant Growth Campaign",
    description:
      "Reward agents for verified merchant onboarding.",
    active: true,
  },
  {
    id: "customer-activation",
    name: "Customer Activation Campaign",
    description:
      "Reward agents for verified customer activation.",
    active: true,
  },
  {
    id: "referral-growth",
    name: "Referral Growth Campaign",
    description:
      "Reward agents for verified referral conversions.",
    active: false,
  },
];

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 12H5m5-5-5 5 5 5"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12 2 2 4-4m5.6-8A12 12 0 0 1 12 3a12 12 0 0 1-8.6 3A12 12 0 0 0 3 9c0 5.6 3.8 10.3 9 11.6 5.2-1.3 9-6 9-11.6 0-1-.1-2-.4-3Z"
      />
    </svg>
  );
}

export function BusinessVerifierAssignmentsConnected() {
  const [assigned, setAssigned] = useState<
    Record<string, boolean>
  >(
    Object.fromEntries(
      campaigns.map((campaign) => [
        campaign.id,
        campaign.active,
      ])
    )
  );

  const [saved, setSaved] = useState(false);

  function toggleCampaign(id: string) {
    setAssigned((current) => ({
      ...current,
      [id]: !current[id],
    }));

    setSaved(false);
  }

  const assignedCount = Object.values(
    assigned
  ).filter(Boolean).length;

  return (
    <div className="mx-auto w-full max-w-4xl pb-16">

      {/* BREADCRUMB */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[#718277]">
        <Link
          href="/app/business/verifiers"
          className="transition-colors hover:text-white"
        >
          Verifiers
        </Link>

        <span className="text-[#294034]">
          /
        </span>

        <Link
          href="/app/business/verifiers/operations-team"
          className="transition-colors hover:text-white"
        >
          Operations Team
        </Link>

        <span className="text-[#294034]">
          /
        </span>

        <span className="font-medium text-white">
          Manage assignments
        </span>
      </nav>

      {/* HEADER */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Manage assignments
          </h2>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#294034] bg-[#16281E] px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
            Authorised
          </span>
        </div>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A7B3AB]">
          Choose which campaigns Operations Team is
          authorised to verify.
        </p>
      </header>

      {/* VERIFIER CONTEXT */}
      <section className="mb-5 flex items-center justify-between gap-4 rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#294034] bg-[#142019] text-[#02C763]">
            <ShieldIcon />
          </div>

          <div>
            <p className="font-display text-base font-semibold text-white">
              Operations Team
            </p>

            <p className="mt-0.5 text-xs text-[#718277]">
              Team verifier
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-display text-xl font-semibold text-white">
            {assignedCount}
          </p>

          <p className="text-[10px] font-medium uppercase tracking-wider text-[#718277]">
            Assigned campaigns
          </p>
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="overflow-hidden rounded-xl border border-[#1B2A22] bg-[#0C120F]">
        <div className="border-b border-[#1B2A22] bg-[#101813] px-5 py-4">
          <h3 className="font-display text-sm font-semibold text-white">
            Campaign assignments
          </h3>

          <p className="mt-1 text-xs text-[#718277]">
            Assigned campaigns may submit qualifying
            activity to this verifier.
          </p>
        </div>

        <div className="divide-y divide-[#1B2A22]">
          {campaigns.map((campaign) => {
            const enabled =
              assigned[campaign.id];

            return (
              <div
                key={campaign.id}
                className="flex items-center justify-between gap-5 px-5 py-5"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">
                    {campaign.name}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#718277]">
                    {campaign.description}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={enabled}
                  onClick={() =>
                    toggleCampaign(campaign.id)
                  }
                  className={[
                    "relative h-6 w-11 shrink-0 rounded-full border transition-colors",
                    enabled
                      ? "border-[#02C763]/50 bg-[#02C763]"
                      : "border-[#294034] bg-[#142019]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all",
                      enabled
                        ? "left-[21px]"
                        : "left-0.5",
                    ].join(" ")}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCT NOTE */}
      <div className="mt-5 rounded-xl border border-[#1B2A22] bg-[#101813] p-4">
        <p className="text-xs leading-5 text-[#8A938D]">
          Removing a verifier from a campaign prevents
          future activity from being verified by that
          verifier. Existing verification history is not
          affected.
        </p>
      </div>

      {saved && (
        <div className="mt-5 rounded-xl border border-[#294034] bg-[#142019] px-4 py-3">
          <p className="text-sm font-medium text-[#02C763]">
            Assignment changes saved
          </p>

          <p className="mt-1 text-xs text-[#8A938D]">
            This confirmation is UI-only until the
            application is connected to Core.
          </p>
        </div>
      )}

      {/* ACTIONS */}
      <div className="mt-7 flex items-center justify-between gap-4">
        <Link
          href="/app/business/verifiers/operations-team"
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[#9DA8A1] transition-colors hover:text-white"
        >
          <ArrowLeft />
          Back
        </Link>

        <button
          type="button"
          onClick={() => setSaved(true)}
          className="rounded-[10px] bg-[#02C763] px-6 py-2.5 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}

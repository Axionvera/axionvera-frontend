"use client";

import Link from "next/link";
import {
  CURRENCY,
  getClaimableRewardBreakdownForAgent,
  requireAgentRewardSummary,
  requireCampaign,
} from "@/lib/axionveraData";

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-[#02C763]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        d="M12 11v5M12 8h.01"
      />
    </svg>
  );
}

export function AgentClaimApprovalConnected() {
  const summary =
    requireAgentRewardSummary("amina-t");

  const claimableBreakdown =
    getClaimableRewardBreakdownForAgent(
      "amina-t"
    );

  const merchantCampaign =
    requireCampaign("merchant-growth");

  const referralCampaign =
    requireCampaign("referral-growth");

  const merchantClaimable =
    claimableBreakdown.find(
      (item) =>
        item.campaignId === "merchant-growth"
    )?.amount ?? 0;

  const referralClaimable =
    claimableBreakdown.find(
      (item) =>
        item.campaignId === "referral-growth"
    )?.amount ?? 0;

  const claimAmount =
    summary.claimable;

  const balanceAfterClaim =
    Math.max(
      0,
      summary.claimable - claimAmount
    );

  return (
    <div className="mx-auto w-full max-w-xl pb-16">

      {/* BREADCRUMB */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-[#718277]">
        <Link
          href="/app/agent/rewards"
          className="transition-colors hover:text-white"
        >
          Rewards
        </Link>

        <span className="text-[#294034]">
          /
        </span>

        <span className="font-medium text-white">
          Claim rewards
        </span>
      </nav>

      {/* PRIMARY PANEL */}
      <section className="relative overflow-hidden rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6 shadow-xl sm:p-8">

        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#02C763]/5 blur-3xl" />

        {/* HEADER */}
        <div className="relative z-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            Approve claim
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[#A7B3AB]">
            Approve the {claimAmount} {CURRENCY} claim in your connected
            wallet.
          </p>
        </div>

        {/* WAITING STATE */}
        <div className="mt-6 flex items-center gap-3.5 rounded-[10px] bg-[#142019] p-4">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center">
            <Spinner />
          </div>

          <span className="text-sm font-medium text-white">
            Waiting for wallet approval
          </span>
        </div>

        {/* CLAIM SUMMARY */}
        <div className="mt-6 space-y-3">

          <div className="space-y-3 rounded-[10px] bg-[#142019] p-4">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-[#A7B3AB]">
                Claim amount
              </span>

              <span className="font-display text-base font-semibold text-[#02C763]">{`${claimAmount} ${CURRENCY}`}</span>
            </div>

            <div className="h-px w-full bg-[#272B28]/70" />

            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-[#A7B3AB]">
                Current claimable balance
              </span>

              <span className="font-medium text-white">{`${summary.claimable} ${CURRENCY}`}</span>
            </div>

            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-[#A7B3AB]">
                Claimable balance after claim
              </span>

              <span className="font-medium text-[#718277]">{`${balanceAfterClaim} ${CURRENCY}`}</span>
            </div>
          </div>

          {/* INCLUDED CAMPAIGNS */}
          <div className="pt-1">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
                Rewards included
              </span>

              <span className="text-xs font-medium text-[#718277]">
                {claimableBreakdown.length} campaigns
              </span>
            </div>

            <div className="space-y-2.5 rounded-[10px] bg-[#142019] p-3.5">
              <div className="flex items-center justify-between gap-4 text-xs">
                <span className="text-[#E1E3DF]">
                  {merchantCampaign.name}
                </span>

                <span className="font-medium text-white">
                  {merchantClaimable} {CURRENCY}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 text-xs">
                <span className="text-[#E1E3DF]">
                  {referralCampaign.name}
                </span>

                <span className="font-medium text-white">
                  {referralClaimable} {CURRENCY}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ADVISORY */}
        <div className="mt-6 flex items-start gap-2.5 rounded-[10px] bg-[#142019]/70 p-3.5">
          <span className="mt-0.5 shrink-0 text-[#718277]">
            <InfoIcon />
          </span>

          <p className="text-xs leading-5 text-[#A7B3AB]">
            Do not close this window while the claim is
            awaiting wallet approval.
          </p>
        </div>

        {/* ACTION */}
        <div className="mt-8 flex items-center justify-start border-t border-[#1B2A22] pt-5">
          <Link
            href="/app/agent/rewards/claim"
            className="inline-flex items-center justify-center rounded-[10px] px-5 py-2.5 text-sm font-medium text-[#A7B3AB] transition-colors hover:bg-[#142019] hover:text-white"
          >
            Cancel
          </Link>
        </div>

        {/* UI-ONLY NOTE */}
        <p className="mt-4 text-center text-[10px] leading-4 text-[#515B54]">
          UI preview only. No wallet transaction has
          been submitted.
        </p>
      </section>
    </div>
  );
}

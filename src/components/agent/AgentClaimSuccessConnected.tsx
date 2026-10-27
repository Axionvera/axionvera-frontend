"use client";

import Link from "next/link";
import {
  CURRENCY,
  getClaimableRewardBreakdownForAgent,
  requireAgentRewardSummary,
  requireCampaign,
} from "@/lib/axionveraData";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.5 12 3 3 6-6"
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

function ArrowRight() {
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
        d="M5 12h14m-5-5 5 5-5 5"
      />
    </svg>
  );
}

export function AgentClaimSuccessConnected() {
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

  const postClaimClaimable =
    Math.max(
      0,
      summary.claimable - claimAmount
    );

  const postClaimClaimed =
    summary.claimed + claimAmount;

  return (
    <div className="mx-auto flex w-full max-w-[620px] flex-col gap-6 pb-16">

      {/* BREADCRUMB */}
      <nav className="flex items-center gap-2 text-xs text-[#718277]">
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

      {/* SUCCESS PANEL */}
      <section className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-7 shadow-xl">

        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#02C763]/5 blur-3xl" />

        {/* STATUS */}
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#142019] text-[#02C763]">
              <CheckIcon />
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-white">
                Claim successful
              </h2>

              <p className="mt-1 text-sm text-[#A7B3AB]">
                {claimAmount} {CURRENCY} has been claimed successfully.
              </p>
            </div>
          </div>

          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#142019] px-2.5 py-1 text-[#02C763]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />

            <span className="text-[10px] font-semibold uppercase tracking-wide">
              Claimed
            </span>
          </div>
        </div>

        {/* METRICS */}
        <div className="rounded-[10px] bg-[#142019] p-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
                Claimed amount
              </span>

              <p className="mt-1 font-mono text-lg font-semibold tracking-tight text-[#02C763]">{`${claimAmount} ${CURRENCY}`}</p>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
                Claimable balance
              </span>

              <p className="mt-1 font-mono text-lg font-semibold tracking-tight text-white">{`${postClaimClaimable} ${CURRENCY}`}</p>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
                Total earned
              </span>

              <p className="mt-1 font-mono text-lg font-semibold tracking-tight text-white">{`${summary.totalEarned} ${CURRENCY}`}</p>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
                Total claimed
              </span>

              <p className="mt-1 font-mono text-lg font-semibold tracking-tight text-white">{`${postClaimClaimed} ${CURRENCY}`}</p>
            </div>
          </div>
        </div>

        {/* BREAKDOWN */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
              Rewards breakdown
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
              Amount
            </span>
          </div>

          <div className="overflow-hidden rounded-[10px] bg-[#142019]">

            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm font-medium text-white">
                {merchantCampaign.name}
              </span>

              <span className="font-mono text-sm font-semibold text-white">
                {merchantClaimable} {CURRENCY}
              </span>
            </div>

            <div className="h-px bg-[#272B28]/50" />

            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm font-medium text-white">
                {referralCampaign.name}
              </span>

              <span className="font-mono text-sm font-semibold text-white">
                {referralClaimable} {CURRENCY}
              </span>
            </div>

            <div className="h-px bg-[#272B28]/50" />

            <div className="flex items-center justify-between gap-4 bg-[#272B28]/40 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Total
              </span>

              <span className="font-mono text-sm font-bold text-[#02C763]">
                {claimAmount} {CURRENCY}
              </span>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="flex items-center gap-3 rounded-[10px] bg-[#142019]/80 px-4 py-3">
          <span className="shrink-0 text-[#718277]">
            <InfoIcon />
          </span>

          <p className="text-sm leading-6 text-[#A7B3AB]">
            These rewards have moved from Claimable to
            Claimed.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">

          <Link
            href="/app/agent/rewards"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-5 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
          >
            Back to Rewards
            <ArrowRight />
          </Link>

          <Link
            href="/app/agent/activity"
            className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#142019] px-5 text-sm font-medium text-white transition-colors hover:bg-[#272B28]"
          >
            View Activity
          </Link>
        </div>

        <p className="text-center text-[10px] leading-4 text-[#515B54]">
          Success state preview. Reward balances are not
          persisted yet.
        </p>
      </section>
    </div>
  );
}

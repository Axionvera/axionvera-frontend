"use client";

import Link from "next/link";
import {
  CURRENCY,
  getClaimableRewardBreakdownForAgent,
  requireAgentRewardSummary,
  requireCampaign,
} from "@/lib/axionveraData";

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h10A2.5 2.5 0 0 1 19 7.5V9h-3a3 3 0 0 0 0 6h3v1.5a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4 16.5v-9Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9h-3a3 3 0 1 0 0 6h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="8" />
      <path
        strokeLinecap="round"
        d="M14.5 9.5c-.6-.6-1.5-1-2.5-1-1.4 0-2.5.7-2.5 1.7 0 1.1 1.1 1.7 2.5 1.7s2.5.6 2.5 1.7-1.1 1.9-2.5 1.9c-1.1 0-2-.4-2.6-1M12 7v1.5M12 15.5V17"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="8" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.5 12 2.25 2.25L15.5 9.5"
      />
    </svg>
  );
}

function CampaignIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15M18 13a3 3 0 1 0 0-6M5.436 13.683A4.001 4.001 0 0 1 7 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 0 1-1.564-.317Z"
      />
    </svg>
  );
}

function ReferralIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2" />
      <path
        strokeLinecap="round"
        d="M4 19c.5-3 2.2-5 5-5s4.5 2 5 5M14.5 15c1.9.1 3.2 1.4 3.5 3"
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

export function AgentRewardsConnected() {
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

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 pb-16">

      {/* PAGE HEADER */}
      <header>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Your rewards
        </h2>

        <p className="mt-1.5 text-sm leading-6 text-[#A7B3AB]">
          View rewards you&apos;ve earned from verified
          activity and claim what is available.
        </p>
      </header>

      {/* SUMMARY */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Total earned
            </span>

            <span className="text-[#718277]">
              <CoinIcon />
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight text-white">
              {summary.totalEarned} {CURRENCY}
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#294034] bg-[#0C120F] p-5">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#02C763]/5 blur-2xl" />

          <div className="relative">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
                Claimable
              </span>

              <span className="h-2 w-2 rounded-full bg-[#02C763]" />
            </div>

            <span className="text-2xl font-semibold tracking-tight text-[#02C763]">
              {summary.claimable} {CURRENCY}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Claimed
            </span>

            <span className="text-[#718277]">
              <CheckIcon />
            </span>
          </div>

          <span className="text-2xl font-semibold tracking-tight text-white">
            {summary.claimed} {CURRENCY}
          </span>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

        {/* CLAIMABLE REWARDS */}
        <section className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6 lg:col-span-7">

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#02C763]" />

            <span className="text-xs font-medium text-[#E1E3DF]">
              Claimable rewards
            </span>
          </div>

          <div className="my-4">
            <div className="font-display text-4xl font-bold tracking-tight text-[#02C763]">
              {summary.claimable} {CURRENCY}
            </div>

            <p className="mt-2 max-w-lg text-sm leading-6 text-[#9DA8A1]">
              These rewards have been allocated from
              verified activity and are ready to claim.
            </p>
          </div>

          {/* UI ONLY FOR NOW */}
          <Link
            href="/app/agent/rewards/claim"
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#02C763] px-6 py-2.5 text-sm font-semibold text-[#031009] transition-colors hover:bg-[#02D86F]"
          >
            <WalletIcon />
            Claim {summary.claimable} {CURRENCY}
          </Link>

          {/* BREAKDOWN */}
          <div className="mt-6 border-t border-[#1B2A22] pt-5">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Reward breakdown
            </h3>

            <div className="space-y-2.5">

              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#1B2A22] bg-[#101813] p-3.5 transition-colors hover:border-[#294034]">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#1B2A22] bg-[#142019] text-[#02C763]">
                    <CampaignIcon />
                  </div>

                  <span className="truncate text-sm font-medium text-white">
                    {merchantCampaign.name}
                  </span>
                </div>

                <span className="shrink-0 text-sm font-semibold text-[#02C763]">
                  {merchantClaimable} {CURRENCY} claimable
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#1B2A22] bg-[#101813] p-3.5 transition-colors hover:border-[#294034]">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#1B2A22] bg-[#142019] text-[#02C763]">
                    <ReferralIcon />
                  </div>

                  <span className="truncate text-sm font-medium text-white">
                    {referralCampaign.name}
                  </span>
                </div>

                <span className="shrink-0 text-sm font-semibold text-[#02C763]">
                  {referralClaimable} {CURRENCY} claimable
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT REWARDS */}
        <section className="flex flex-col rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6 lg:col-span-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-base font-semibold tracking-tight text-white">
              Recent rewards
            </h3>

            <span className="text-xs text-[#718277]">
              Last 3 events
            </span>
          </div>

          <div className="flex flex-1 flex-col divide-y divide-[#1B2A22]">

            <div className="flex items-center justify-between gap-3 py-3.5 first:pt-0">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  Merchant onboarded
                </p>

                <p className="mt-1 truncate text-xs text-[#9DA8A1]">
                  Merchant Growth Campaign
                </p>
              </div>

              <div className="shrink-0 text-right">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#02C763]">
                    +5 USDC
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full border border-[#02C763]/25 bg-[#02C763]/10 px-2 py-0.5 text-[11px] text-[#02C763]">
                    <span className="h-1 w-1 rounded-full bg-[#02C763]" />
                    Claimable
                  </span>
                </div>

                <p className="mt-1 text-xs text-[#718277]">
                  15m ago
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  Referral converted
                </p>

                <p className="mt-1 truncate text-xs text-[#9DA8A1]">
                  Referral Growth Campaign
                </p>
              </div>

              <div className="shrink-0 text-right">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#02C763]">
                    +5 USDC
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full border border-[#02C763]/25 bg-[#02C763]/10 px-2 py-0.5 text-[11px] text-[#02C763]">
                    <span className="h-1 w-1 rounded-full bg-[#02C763]" />
                    Claimable
                  </span>
                </div>

                <p className="mt-1 text-xs text-[#718277]">
                  3h ago
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  Merchant onboarded
                </p>

                <p className="mt-1 truncate text-xs text-[#9DA8A1]">
                  Merchant Growth Campaign
                </p>
              </div>

              <div className="shrink-0 text-right">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#9DA8A1]">
                    +5 USDC
                  </span>

                  <span className="rounded-full border border-[#294034] bg-[#101813] px-2 py-0.5 text-[11px] text-[#9DA8A1]">
                    Claimed
                  </span>
                </div>

                <p className="mt-1 text-xs text-[#718277]">
                  Yesterday
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-[#1B2A22]/60 pt-4">
            <Link
              href="/app/agent/activity"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#02C763] transition-colors hover:text-[#02D86F]"
            >
              View activity
              <ArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

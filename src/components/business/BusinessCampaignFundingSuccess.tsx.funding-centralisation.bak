"use client";

import Link from "next/link";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 12 4 4L19 6"
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
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20V7l8-3 8 3v13M8 20v-5h8v5"
      />
      <path
        strokeLinecap="round"
        d="M8 9h.01M12 9h.01M16 9h.01"
      />
    </svg>
  );
}

function FundsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <rect
        x="3.5"
        y="6"
        width="17"
        height="12"
        rx="2"
      />
      <path
        strokeLinecap="round"
        d="M7 10h10M7 14h4"
      />
    </svg>
  );
}

function RewardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
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

export function BusinessCampaignFundingSuccess() {
  return (
    <div className="mx-auto flex w-full max-w-[620px] flex-col items-center py-6 pb-16">

      {/* SUCCESS HEADER */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#1B2A22] bg-[#101813] text-[#02C763] shadow-sm">
          <CheckIcon />
        </div>

        <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-white">
          Campaign funded
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-[#9DA8A1]">
          1,000 USDC has been added to Merchant Growth
          Campaign. The campaign now has funds available
          for verified reward allocation.
        </p>
      </div>

      {/* CAMPAIGN SUMMARY */}
      <section className="mb-4 w-full rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6 shadow-md">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#1B2A22] pb-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1B2A22] bg-[#142019] text-[#02C763]">
              <CampaignIcon />
            </div>

            <h3 className="truncate font-display text-[17px] font-semibold text-white">
              Merchant Growth Campaign
            </h3>
          </div>

          <div className="ml-3 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#02C763]/30 bg-[#02C763]/10 px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
            Active
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">

          {/* FUNDING ADDED */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#718277]">
              Funding added
            </span>

            <div className="flex items-center gap-2">
              <span className="text-[#718277]">
                <FundsIcon />
              </span>

              <span className="font-mono text-sm font-semibold text-white">
                1,000 USDC
              </span>
            </div>
          </div>

          {/* AVAILABLE FUNDS */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#718277]">
              Available campaign funds
            </span>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#02C763]" />

              <span className="font-mono text-sm font-semibold text-[#02C763]">
                1,000 USDC
              </span>
            </div>
          </div>

          {/* PREVIOUS FUNDS */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#718277]">
              Previous campaign funds
            </span>

            <span className="font-mono text-sm font-medium text-[#A7B3AB]">
              0 USDC
            </span>
          </div>

          {/* REWARD */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#718277]">
              Reward
            </span>

            <div className="flex items-center gap-2">
              <span className="text-[#718277]">
                <RewardIcon />
              </span>

              <span className="text-sm font-medium text-[#E1E3DF]">
                5 USDC{" "}
                <span className="font-normal text-[#718277]">
                  per verified action
                </span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* INFORMATION */}
      <div className="mb-8 flex w-full items-start gap-3 rounded-xl border border-[#1B2A22] bg-[#0C120F] px-4 py-3">
        <span className="mt-0.5 shrink-0 text-[#02C763]">
          <InfoIcon />
        </span>

        <p className="text-xs leading-relaxed text-[#9DA8A1]">
          Funding increases the campaign&apos;s available
          balance. Rewards are only allocated after
          qualifying agent activity has been verified.
        </p>
      </div>

      {/* ACTIONS */}
      <div className="flex w-full flex-col items-center gap-3">
        <Link
          href="/app/business/campaigns/merchant-growth-campaign"
          className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-5 py-3 text-sm font-semibold text-[#050806] shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-[#02D86F]"
        >
          View Campaign
          <ArrowRight />
        </Link>

        <Link
          href="/app/business/campaigns"
          className="inline-flex items-center gap-1.5 py-2 text-xs font-medium text-[#718277] transition-colors hover:text-white"
        >
          <ArrowLeft />
          Back to Campaigns
        </Link>
      </div>

    </div>
  );
}

"use client";

import Link from "next/link";

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-[#02C763]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M12 3a9 9 0 0 1 9 9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
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

export function AgentClaimProcessingConnected() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 pb-16">

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

      {/* PROCESSING PANEL */}
      <section className="space-y-6 rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6 shadow-xl md:p-8">

        {/* HEADER */}
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            Processing claim
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[#A7B3AB]">
            Your 20 USDC claim has been approved and is
            being processed.
          </p>
        </div>

        {/* ACTIVE STATUS */}
        <div className="flex items-center gap-3 rounded-[10px] bg-[#101813] px-4 py-3.5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center">
            <Spinner />
          </div>

          <span className="text-sm font-medium tracking-wide text-white">
            Processing...
          </span>
        </div>

        {/* LEDGER */}
        <div className="space-y-3 rounded-[10px] bg-[#101813] p-4">

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-[#A7B3AB]">
              Claim amount
            </span>

            <span className="text-sm font-semibold text-[#02C763]">
              20 USDC
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-[#A7B3AB]">
              Current claimable balance
            </span>

            <span className="text-sm font-medium text-white">
              20 USDC
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-[#A7B3AB]">
              Claimable balance after claim
            </span>

            <span className="text-sm font-medium text-[#718277]">
              0 USDC
            </span>
          </div>
        </div>

        {/* INCLUDED REWARDS */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
              Rewards included
            </span>

            <span className="text-xs text-[#A7B3AB]">
              2 campaigns
            </span>
          </div>

          <div className="overflow-hidden rounded-[10px] bg-[#101813]">

            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm text-[#E1E3DF]">
                Merchant Growth Campaign
              </span>

              <span className="text-sm font-medium text-white">
                15 USDC
              </span>
            </div>

            <div className="h-px bg-[#1B2A22]" />

            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm text-[#E1E3DF]">
                Referral Growth Campaign
              </span>

              <span className="text-sm font-medium text-white">
                5 USDC
              </span>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="flex items-start gap-3 rounded-[10px] bg-[#101813]/70 p-3.5">
          <span className="mt-0.5 shrink-0 text-[#718277]">
            <InfoIcon />
          </span>

          <p className="text-sm leading-6 text-[#A7B3AB]">
            Your claim is being processed. Reward
            balances will update after the claim
            completes successfully.
          </p>
        </div>

        {/* UI STATE NOTE */}
        <p className="text-center text-[10px] leading-4 text-[#515B54]">
          Processing state preview. The real claim status
          will later be driven by the transaction result.
        </p>
      </section>
    </div>
  );
}

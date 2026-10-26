"use client";

import Link from "next/link";

type FundingStage =
  | "approval"
  | "processing"
  | "error";

type BusinessCampaignFundingStatusProps = {
  stage: FundingStage;
};

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h11.25A2.25 2.25 0 0 1 19.5 6.75v1.5h-3A3.75 3.75 0 0 0 12.75 12a3.75 3.75 0 0 0 3.75 3.75h3v1.5a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25h-3a3.75 3.75 0 0 0 0 7.5h3a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75Z"
      />
      <circle
        cx="16.5"
        cy="12"
        r=".75"
        fill="currentColor"
        stroke="none"
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

function ErrorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        d="M12 7.5v6M12 16.5h.01"
      />
    </svg>
  );
}

function FundingSummary({
  error = false,
}: {
  error?: boolean;
}) {
  return (
    <div className="mb-5 rounded-[10px] border border-[#1B2A22] bg-[#101813] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4 border-b border-[#1B2A22] pb-3">
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
            Campaign
          </span>

          <span className="mt-0.5 truncate text-sm font-semibold text-white">
            Merchant Growth Campaign
          </span>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#02C763]/25 bg-[#02C763]/10 px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
          Active
        </span>
      </div>

      <div className="space-y-2.5 pt-4">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-[#8A938D]">
            {error
              ? "Attempted funding"
              : "Funding amount"}
          </span>

          <span className="font-mono font-semibold text-white">
            1,000 USDC
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-[#8A938D]">
            {error
              ? "Current campaign balance"
              : "Current campaign funds"}
          </span>

          <span className="font-mono font-medium text-[#A7B3AB]">
            0 USDC
          </span>
        </div>

        {!error && (
          <div className="flex items-center justify-between gap-4 border-t border-[#1B2A22]/60 pt-3 text-sm">
            <span className="text-[#8A938D]">
              Campaign funds after funding
            </span>

            <span className="font-mono font-semibold text-[#02C763]">
              1,000 USDC
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[#718277]">
      <Link
        href="/app/business/campaigns"
        className="transition-colors hover:text-white"
      >
        Campaigns
      </Link>

      <span className="text-[#294034]">/</span>

      <Link
        href="/app/business/campaigns/merchant-growth-campaign"
        className="transition-colors hover:text-white"
      >
        Merchant Growth Campaign
      </Link>

      <span className="text-[#294034]">/</span>

      <span className="font-medium text-[#E1E3DF]">
        Fund campaign
      </span>
    </nav>
  );
}

export function BusinessCampaignFundingStatus({
  stage,
}: BusinessCampaignFundingStatusProps) {
  return (
    <div className="w-full pb-16">
      <Breadcrumb />

      <div className="flex w-full justify-center py-6 md:py-10">
        <section className="w-full max-w-xl rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6 md:p-8">

          {stage === "approval" && (
            <>
              <div className="mb-6 flex justify-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#1B2A22] bg-[#101813] text-[#02C763]">
                  <WalletIcon />

                  <span className="absolute inset-0 animate-ping rounded-full border border-[#02C763]/30 opacity-25" />
                </div>
              </div>

              <div className="mb-6 text-center">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                  Approve funding
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8A938D]">
                  Approve the 1,000 USDC funding
                  transaction in your connected wallet.
                </p>
              </div>

              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#02C763]/20 bg-[#02C763]/10 px-3 py-1 text-xs font-medium text-[#02C763]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#02C763]" />
                  Waiting for wallet approval
                </span>
              </div>

              <FundingSummary />

              <div className="mb-6 flex items-start gap-2.5 rounded-[10px] border border-[#1B2A22]/70 bg-[#101412] p-3">
                <span className="mt-0.5 shrink-0 text-[#718277]">
                  <InfoIcon />
                </span>

                <p className="text-sm leading-5 text-[#8A938D]">
                  Do not close this window while the
                  funding request is awaiting approval.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <Link
                  href="/app/business/campaigns/merchant-growth-campaign?action=fund"
                  className="rounded-[10px] border border-[#1B2A22] bg-[#0C120F] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#294034] hover:bg-[#142019]"
                >
                  Cancel
                </Link>
              </div>
            </>
          )}

          {stage === "processing" && (
            <>
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1B2A22] bg-[#101813]">
                  <svg
                    className="h-6 w-6 animate-spin text-[#02C763]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-6 text-center">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                  Funding campaign
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8A938D]">
                  Your funding transaction has been
                  approved and is being submitted.
                </p>
              </div>

              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#02C763]/20 bg-[#02C763]/10 px-3 py-1 text-xs font-medium text-[#02C763]">
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#02C763]" />
                  Processing...
                </span>
              </div>

              <FundingSummary />

              <div className="mb-6 flex items-start gap-2.5 rounded-[10px] border border-[#1B2A22]/70 bg-[#101412] p-3">
                <span className="mt-0.5 shrink-0 text-[#718277]">
                  <InfoIcon />
                </span>

                <p className="text-sm leading-5 text-[#8A938D]">
                  Please wait while the transaction
                  completes. Do not navigate away from
                  this screen.
                </p>
              </div>

              <div className="text-center text-xs text-[#515B54]">
                Cancellation unavailable during network
                processing
              </div>
            </>
          )}

          {stage === "error" && (
            <>
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F25F5C]/30 bg-[#101813] text-[#F25F5C]">
                  <ErrorIcon />
                </div>
              </div>

              <div className="mb-6 text-center">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                  Funding could not be completed
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8A938D]">
                  The transaction was not completed.
                  Your campaign funds have not changed.
                </p>
              </div>

              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#F25F5C]/30 bg-[#F25F5C]/10 px-3 py-1 text-xs font-medium text-[#F25F5C]">
                  <span className="h-2 w-2 rounded-full bg-[#F25F5C]" />
                  Transaction interrupted
                </span>
              </div>

              <FundingSummary error />

              <div className="mb-6 flex items-start gap-2.5 rounded-[10px] border border-[#1B2A22]/70 bg-[#101412] p-3">
                <span className="mt-0.5 shrink-0 text-[#F25F5C]">
                  <InfoIcon />
                </span>

                <p className="text-sm leading-5 text-[#8A938D]">
                  The wallet request was rejected or
                  closed prematurely. You may initiate
                  the approval request again whenever
                  you are ready.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  href="/app/business/campaigns/merchant-growth-campaign?action=fund&stage=approval"
                  className="w-full rounded-[10px] bg-[#02C763] px-6 py-2.5 text-center text-sm font-semibold text-[#031009] transition-colors hover:bg-[#02D86F] sm:w-auto"
                >
                  Try again
                </Link>

                <Link
                  href="/app/business/campaigns/merchant-growth-campaign"
                  className="w-full rounded-[10px] border border-[#1B2A22] bg-[#0C120F] px-6 py-2.5 text-center text-sm font-medium text-white transition-colors hover:border-[#294034] hover:bg-[#142019] sm:w-auto"
                >
                  Back to campaign
                </Link>
              </div>
            </>
          )}

        </section>
      </div>
    </div>
  );
}

import Link from "next/link";

type BusinessCampaignCreatedProps = {
  name?: string;
  qualifyingAction?: string;
  reward?: string;
  verifier?: string;
};

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

function FlagIcon() {
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
        d="M5 21V4m0 0h11l-2 4 2 4H5"
      />
    </svg>
  );
}

function ActionIcon() {
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

function RewardIcon() {
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

function VerifierIcon() {
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
        d="m9 12 2 2 4-4m5.5-4A12 12 0 0 1 12 3a12 12 0 0 1-8.5 3A12 12 0 0 0 3 9c0 5.5 3.8 10.2 9 11.6 5.2-1.4 9-6.1 9-11.6 0-1-.2-2-.5-3Z"
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

function CardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.9"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />
      <path
        strokeLinecap="round"
        d="M3 10h18M12 14h5"
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

export function BusinessCampaignCreated({
  name = "Merchant Growth Campaign",
  qualifyingAction = "Merchant onboarded",
  reward = "5 USDC",
  verifier = "Operations Team",
}: BusinessCampaignCreatedProps) {
  return (
    <div className="mx-auto flex w-full max-w-[620px] flex-col items-center py-6">

      {/* SUCCESS HEADER */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#1B2A22] bg-[#101813] text-[#02C763] shadow-sm">
          <CheckIcon />
        </div>

        <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-white">
          Campaign created
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-[#9DA8A1]">
          {name} has been created successfully.
          Add funds before rewards can be allocated.
        </p>
      </div>

      {/* CAMPAIGN SUMMARY */}
      <section className="mb-4 w-full rounded-[16px] border border-[#1B2A22] bg-[#0C120F] p-6 shadow-md">
        <div className="mb-5 flex items-center justify-between border-b border-[#1B2A22] pb-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1B2A22] bg-[#142019] text-[#9DA8A1]">
              <FlagIcon />
            </div>

            <h3 className="truncate font-display text-[17px] font-semibold text-white">
              {name}
            </h3>
          </div>

          <div className="ml-3 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#02C763]/30 bg-[#02C763]/10 px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
            Active
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          {/* ACTION */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#718277]">
              Qualifying action
            </span>

            <div className="flex items-center gap-2">
              <span className="text-[#718277]">
                <ActionIcon />
              </span>

              <span className="text-sm font-medium text-[#E1E3DF]">
                {qualifyingAction}
              </span>
            </div>
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
                {reward}{" "}
                <span className="font-normal text-[#718277]">
                  per verified action
                </span>
              </span>
            </div>
          </div>

          {/* VERIFIER */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#718277]">
              Verifier
            </span>

            <div className="flex items-center gap-2">
              <span className="text-[#718277]">
                <VerifierIcon />
              </span>

              <span className="text-sm font-medium text-[#E1E3DF]">
                {verifier}
              </span>
            </div>
          </div>

          {/* FUNDS */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#718277]">
              Campaign funds
            </span>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[15px] font-medium text-white">
                0 USDC
              </span>

              <span className="rounded border border-[#1B2A22] bg-[#142019] px-2 py-0.5 text-[11px] font-medium text-[#9DA8A1]">
                Unfunded
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION NOTE */}
      <div className="mb-8 flex w-full items-center gap-3 rounded-xl border border-[#1B2A22] bg-[#0C120F] px-4 py-3">
        <span className="shrink-0 text-[#718277]">
          <InfoIcon />
        </span>

        <p className="text-xs leading-relaxed text-[#9DA8A1]">
          Rewards can only be allocated from
          available campaign funds.
        </p>
      </div>

      {/* ACTIONS */}
      <div className="flex w-full flex-col items-center gap-3">
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/app/business/campaigns/merchant-growth-campaign?action=fund"
            className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-5 py-3 text-sm font-semibold text-[#050806] shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-[#02D86F] sm:flex-1"
          >
            <CardIcon />
            Fund Campaign
          </Link>

          <Link
            href="/app/business/campaigns/merchant-growth-campaign"
            className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-[#1B2A22] bg-[#142019] px-5 py-3 text-sm font-medium text-[#E1E3DF] transition-all duration-150 hover:border-[#294034] hover:bg-[#16281E] hover:text-white sm:flex-1"
          >
            View Campaign

            <span className="text-[#718277]">
              <ArrowRight />
            </span>
          </Link>
        </div>

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

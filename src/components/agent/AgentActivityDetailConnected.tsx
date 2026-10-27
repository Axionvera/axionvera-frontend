"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  getActivitiesForAgent,
  requireCampaign,
} from "@/lib/axionveraData";
type ActivityDetail = {
  activity: string;
  campaign: string;
  submitted: string;
  status: "verified" | "pending";
  reward: number;
};

const activityDetails =
  Object.fromEntries(
    getActivitiesForAgent("amina-t").map(
      (item, index) => {
        const campaign =
          requireCampaign(item.campaignId);

        return [
          index + 1,
          {
            activity: item.activity,
            campaign: campaign.name,
            submitted: item.submittedLabel,
            status: item.status,
            reward: item.rewardAmount ?? 0,
          },
        ];
      }
    )
  ) as Record<number, ActivityDetail>;

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

function SummaryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
      />
      <path
        strokeLinecap="round"
        d="M8 3v4M16 3v4M8 11h8M8 15h5"
      />
    </svg>
  );
}

function RuleIcon() {
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
        d="M5 7h9M5 12h14M5 17h7"
      />
      <circle cx="17" cy="7" r="2" />
      <circle cx="15" cy="17" r="2" />
    </svg>
  );
}

function RewardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <rect
        x="3"
        y="6"
        width="18"
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

function StatusBadge({
  verified,
}: {
  verified: boolean;
}) {
  return verified ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#02C763]/20 bg-[#02C763]/10 px-2.5 py-1 text-xs font-medium text-[#02C763]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
      Verified
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5B942]/20 bg-[#F5B942]/10 px-2.5 py-1 text-xs font-medium text-[#F5B942]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#F5B942]" />
      Pending verification
    </span>
  );
}

export function AgentActivityDetailConnected() {
  const pathname = usePathname();

  const id = Number(
    pathname.split("/").filter(Boolean).at(-1)
  );

  const data =
    activityDetails[id] ??
    activityDetails[1];

  const verified =
    data.status === "verified";

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 pb-16">

      {/* BREADCRUMB */}
      <nav className="flex items-center gap-2 text-xs text-[#718277]">
        <Link
          href="/app/agent/activity"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <ArrowLeft />
          Activity
        </Link>

        <span className="text-[#294034]">
          /
        </span>

        <span className="truncate font-medium text-white">
          {data.activity}
        </span>
      </nav>

      {/* PAGE HEADER */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            Activity details
          </h2>

          <StatusBadge
            verified={verified}
          />
        </div>

        <p className="mt-1.5 text-sm leading-6 text-[#A7B3AB]">
          View the status of this qualifying activity
          and any reward allocated to it.
        </p>
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

        {/* LEFT */}
        <div className="space-y-6 lg:col-span-8">

          {/* SUMMARY */}
          <section className="space-y-5 rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">

            <div className="flex items-center gap-2 border-b border-[#1B2A22]/60 pb-3">
              <span className="text-[#718277]">
                <SummaryIcon />
              </span>

              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
                Activity summary
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Activity
                </span>

                <p className="mt-1 text-sm font-medium text-white">
                  {data.activity}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Campaign
                </span>

                <p className="mt-1 text-sm font-medium text-white">
                  {data.campaign}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Submitted
                </span>

                <p className="mt-1 font-mono text-sm text-[#A7B3AB]">
                  {data.submitted}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Status
                </span>

                <div className="mt-1.5">
                  <StatusBadge
                    verified={verified}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CAMPAIGN RULE */}
          <section className="space-y-5 rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">

            <div className="flex items-center gap-2 border-b border-[#1B2A22]/60 pb-3">
              <span className="text-[#718277]">
                <RuleIcon />
              </span>

              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
                Campaign rule
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Qualifying action
                </span>

                <p className="mt-1 text-sm font-medium text-white">
                  {data.activity}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Reward per verified action
                </span>

                <p className="mt-1 text-sm font-medium text-white">
                  {data.reward} USDC
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 lg:col-span-4">

          {/* REWARD */}
          <section className="flex flex-col justify-between gap-5 rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">

            <div className="space-y-4">

              <div className="flex items-center justify-between gap-3 border-b border-[#1B2A22]/60 pb-3">

                <div className="flex items-center gap-2">
                  <span className="text-[#718277]">
                    <RewardIcon />
                  </span>

                  <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
                    Reward
                  </h3>
                </div>

                {verified ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#02C763]/20 bg-[#02C763]/10 px-2 py-1 text-xs font-medium text-[#02C763]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                    Claimable
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#294034] bg-[#142019] px-2 py-1 text-xs font-medium text-[#718277]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#718277]" />
                    Unallocated
                  </span>
                )}
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Allocated reward
                </span>

                {verified ? (
                  <div className="mt-1 font-display text-3xl font-semibold tracking-tight text-[#02C763]">
                    {data.reward}{" "}
                    <span className="text-base font-normal text-[#A7B3AB]">
                      USDC
                    </span>
                  </div>
                ) : (
                  <div className="mt-1 font-display text-3xl font-semibold tracking-tight text-[#3C4941]">
                    —{" "}
                    <span className="text-xs font-normal text-[#718277]">
                      Not allocated
                    </span>
                  </div>
                )}
              </div>

              <p className="text-sm leading-6 text-[#A7B3AB]">
                {verified
                  ? "This reward was allocated after the activity was verified and is available to claim."
                  : "A reward will only be allocated if this activity is verified."}
              </p>
            </div>
          </section>

          {/* ACTIONS */}
          <section className="flex flex-col gap-3 rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">

            {verified && (
              <Link
                href="/app/agent/rewards"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-5 py-3 text-sm font-semibold text-[#031009] transition-colors hover:bg-[#02D86F]"
              >
                View rewards
                <ArrowRight />
              </Link>
            )}

            <Link
              href="/app/agent/activity"
              className="inline-flex w-full items-center justify-center rounded-[10px] border border-[#1B2A22] bg-[#101813] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#294034] hover:bg-[#142019]"
            >
              Back to Activity
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

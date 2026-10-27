"use client";

import {
  CURRENCY,
  businessActivities,
  requireAgent,
  requireCampaign,
} from "@/lib/axionveraData";

import Link from "next/link";
import { usePathname } from "next/navigation";

type VerifiedActivity = {
  initials: string;
  agent: string;
  activity: string;
  campaign: string;
  reward: string;
  time: string;
};

const activities =
  Object.fromEntries(
    businessActivities
      .filter(
        (item) =>
          item.status === "verified" &&
          [
            "sarah-a",
            "david-k",
            "tunde-o",
          ].includes(item.agentId)
      )
      .map((item) => {
        const agent =
          requireAgent(item.agentId);

        const campaign =
          requireCampaign(item.campaignId);

        const activitySlug =
          item.activity
            .toLowerCase()
            .replace(/\s+/g, "-");

        return [
          `/app/business/activity/${item.agentId}/${activitySlug}`,
          {
            initials: agent.initials,
            agent: agent.name,
            activity: item.activity,
            campaign: campaign.name,

            // Historical reward snapshot.
            // Never recompute from current campaign rules.
            reward:
              `${item.rewardAmount ?? 0} ${CURRENCY}`,

            time: item.submittedLabel,
          },
        ];
      })
  ) as Record<string, VerifiedActivity>;

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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-7 w-7"
      strokeWidth="1.9"
    >
      <circle cx="12" cy="12" r="9" />
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
      className="h-[18px] w-[18px]"
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

function FundsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
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

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />

      <path
        strokeLinecap="round"
        d="M12 7v5l3 2"
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

export function BusinessActivityViewConnected() {
  const pathname = usePathname();
  const item = activities[pathname];

  if (!item) {
    return (
      <div className="mx-auto w-full max-w-3xl pb-16">
        <div className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-white">
            Activity not found
          </h2>

          <p className="mt-2 text-sm text-[#718277]">
            This activity is not available in the current
            UI dataset.
          </p>

          <Link
            href="/app/business/activity"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#142019] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#16281E]"
          >
            <ArrowLeft />
            Back to Activity
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-6 pb-16">

      {/* BREADCRUMB */}
      <nav className="flex flex-wrap items-center gap-2 text-xs text-[#718277]">
        <Link
          href="/app/business/activity"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <ArrowLeft />
          Activity
        </Link>

        <span className="text-[#294034]">
          /
        </span>

        <span>{item.agent}</span>

        <span className="text-[#294034]">
          /
        </span>

        <span className="font-medium text-white">
          {item.activity}
        </span>
      </nav>

      {/* VERIFIED HEADER */}
      <section className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#1B2A22] bg-[#0C120F] p-8 sm:flex-row sm:items-center">
        <div className="flex items-start gap-5 sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#142019] text-[#02C763] shadow-inner">
            <CheckIcon />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                Activity verified
              </h2>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-3 py-1 text-xs font-medium text-[#02C763]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                Verified
              </span>
            </div>

            <p className="mt-1.5 text-sm leading-6 text-[#A7B3AB]">
              {item.activity} by {item.agent} has been
              verified successfully.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

        {/* ACTIVITY SUMMARY */}
        <section className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-6 lg:col-span-7">
          <div className="border-b border-[#1B2A22] pb-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
              Activity summary
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 pt-5 sm:grid-cols-2">

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Agent
              </span>

              <div className="mt-2 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16281E] text-xs font-semibold text-[#02C763]">
                  {item.initials}
                </div>

                <span className="text-sm font-medium text-white">
                  {item.agent}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Activity
              </span>

              <p className="mt-2 text-sm font-medium text-white">
                {item.activity}
              </p>
            </div>

            <div className="sm:col-span-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Campaign
              </span>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-[#718277]">
                  <CampaignIcon />
                </span>

                <span className="text-sm font-medium text-white">
                  {item.campaign}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Status
              </span>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#02C763]" />

                <span className="text-sm font-medium text-white">
                  Verified
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Recorded
              </span>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-[#718277]">
                  <ClockIcon />
                </span>

                <span className="text-sm font-medium text-white">
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* REWARD */}
        <section className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-6 lg:col-span-5">
          <div className="flex items-center justify-between border-b border-[#1B2A22] pb-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#A7B3AB]">
              Reward allocated
            </h3>

            <span className="text-[#02C763]">
              <FundsIcon />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-5">

            <div className="rounded-xl bg-[#101813] p-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Reward
              </span>

              <p className="mt-2 font-display text-xl font-semibold text-[#02C763]">
                {item.reward}
              </p>
            </div>

            <div className="rounded-xl bg-[#101813] p-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Agent
              </span>

              <p className="mt-2 text-sm font-medium text-white">
                {item.agent}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#02C763]/10 p-4">
            <span className="mt-0.5 shrink-0 text-[#02C763]">
              <InfoIcon />
            </span>

            <p className="text-sm leading-5 text-[#A7B3AB]">
              The{" "}
              <strong className="font-semibold text-[#02C763]">
                {item.reward}
              </strong>{" "}
              reward was allocated after this qualifying
              activity was verified.
            </p>
          </div>
        </section>
      </div>

      {/* ACTION */}
      <div className="pt-2">
        <Link
          href="/app/business/activity"
          className="inline-flex items-center gap-2 rounded-lg bg-[#142019] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#16281E]"
        >
          <ArrowLeft />
          Back to Activity
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import {
  CURRENCY,
  getActivitiesForAgent,
  requireAgent,
  requireAgentRewardSummary,
  requireCampaign,
  requireVerifier,
} from "@/lib/axionveraData";

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

function ShieldIcon() {
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
        d="m9 12 2 2 4-4m5.6-8A12 12 0 0 1 12 3a12 12 0 0 1-8.6 3A12 12 0 0 0 3 9c0 5.6 3.8 10.3 9 11.6 5.2-1.3 9-6 9-11.6 0-1-.1-2-.4-3Z"
      />
    </svg>
  );
}

export function AgentOverviewConnected() {
  const agent =
    requireAgent("amina-t");

  const summary =
    requireAgentRewardSummary("amina-t");

  const campaign =
    requireCampaign("merchant-growth");

  const verifier =
    campaign.verifierId
      ? requireVerifier(campaign.verifierId)
      : null;

  const firstName =
    agent.name.split(" ")[0];

  const recentActivities =
    getActivitiesForAgent("amina-t")
      .slice(0, 3)
      .map((item) => ({
        ...item,
        campaign:
          requireCampaign(item.campaignId),
      }));

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 pb-16">

      {/* PAGE HEADER */}
      <header>
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#718277]">
          Agent workspace
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Welcome back, {firstName}
        </h2>

        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#A7B3AB]">
          Track your verified activity, pending
          submissions, and rewards available to claim.
        </p>
      </header>

      {/* SUMMARY */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* CLAIMABLE */}
        <div className="relative overflow-hidden rounded-xl border border-[#294034] bg-[#0C120F] p-5">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#02C763]/5 blur-2xl" />

          <div className="relative">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
                Claimable balance
              </span>

              <span className="h-2 w-2 rounded-full bg-[#02C763]" />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold tracking-tight text-white">{summary.claimable}</span>

              <span className="text-sm font-semibold text-[#02C763]">
                USDC
              </span>
            </div>

            <p className="mt-2 text-xs text-[#718277]">
              Available from verified activity
            </p>
          </div>
        </div>

        {/* VERIFIED */}
        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Verified activity
            </span>

            <span className="h-2 w-2 rounded-full bg-[#02C763]" />
          </div>

          <span className="font-display text-3xl font-bold text-white">{summary.verifiedActivity}</span>

          <p className="mt-2 text-xs text-[#718277]">
            Qualifying actions verified
          </p>
        </div>

        {/* PENDING */}
        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Pending verification
            </span>

            <span className="h-2 w-2 rounded-full bg-[#F5B942]" />
          </div>

          <span className="font-display text-3xl font-bold text-white">{summary.pendingActivity}</span>

          <p className="mt-2 text-xs text-[#718277]">
            Activity awaiting review
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

        {/* LEFT */}
        <div className="flex flex-col gap-6 lg:col-span-7">

          {/* RECENT ACTIVITY */}
          <section className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Recent activity
                </h3>

                <p className="mt-1 text-xs text-[#718277]">
                  Your latest campaign activity
                </p>
              </div>

              <Link
                href="/app/agent/activity"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9DA8A1] transition-colors hover:text-white"
              >
                View all
                <ArrowRight />
              </Link>
            </div>

            <div className="divide-y divide-[#1B2A22]">
              {recentActivities.map((item, index) => {
                const verified =
                  item.status === "verified";

                return (
                  <div
                    key={item.id}
                    className={[
                      "flex items-center justify-between gap-4 py-4",
                      index === 0
                        ? "first:pt-1"
                        : "",
                    ].join(" ")}
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium text-white">
                          {item.activity}
                        </p>

                        {verified ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-2 py-0.5 text-[11px] font-medium text-[#02C763]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                            Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5B942]/10 px-2 py-0.5 text-[11px] font-medium text-[#F5B942]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B942]" />
                            Pending verification
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-xs text-[#718277]">
                        {item.campaign.name} ·{" "}
                        {item.submittedLabel}
                      </p>
                    </div>

                    {verified &&
                    item.rewardAmount != null ? (
                      <span className="shrink-0 text-sm font-semibold text-[#02C763]">
                        +{item.rewardAmount} {CURRENCY}
                      </span>
                    ) : (
                      <span className="shrink-0 text-xs text-[#718277]">
                        Reward pending
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* CAMPAIGN CONTEXT */}
          <section className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Your campaign
                </h3>

                <p className="mt-1 text-xs text-[#718277]">
                  Current reward programme
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />{campaign.status === "active"
      ? "Active"
      : "Paused"}</span>
            </div>

            <div className="rounded-xl border border-[#1B2A22] bg-[#101813] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#142019] text-[#02C763]">
                  <CampaignIcon />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">{campaign.name}</h4>

                  <p className="mt-1 text-xs leading-5 text-[#718277]">
                    Earn rewards for verified merchant
                    onboarding.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 border-t border-[#1B2A22] pt-5 sm:grid-cols-3">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#718277]">
                    Qualifying action
                  </span>

                  <p className="mt-1.5 text-sm font-medium text-white">{campaign.qualifyingAction}</p>
                </div>

                <div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#718277]">
                    Reward
                  </span>

                  <p className="mt-1.5 text-sm font-semibold text-[#02C763]">{`${campaign.rewardPerVerifiedAction} ${CURRENCY}`}</p>
                </div>

                <div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#718277]">
                    Verifier
                  </span>

                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="text-[#718277]">
                      <ShieldIcon />
                    </span>

                    <span className="text-sm font-medium text-white">{verifier?.name ?? "Not assigned"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 lg:col-span-5">

          {/* REWARD SNAPSHOT */}
          <section className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-6">
            <div className="mb-5">
              <h3 className="font-display text-xl font-semibold text-white">
                Rewards
              </h3>

              <p className="mt-1 text-xs text-[#718277]">
                Your reward balance overview
              </p>
            </div>

            <div className="rounded-xl border border-[#294034] bg-[#142019] p-5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                Available to claim
              </span>

              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-bold text-white">
                  {summary.claimable}
                </span>

                <span className="text-sm font-semibold text-[#02C763]">
                  USDC
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#101813] p-4">
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#718277]">
                  Claimed
                </span>

                <p className="mt-2 text-sm font-semibold text-white">
                  {summary.claimed} {CURRENCY}
                </p>
              </div>

              <div className="rounded-lg bg-[#101813] p-4">
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#718277]">
                  Lifetime earned
                </span>

                <p className="mt-2 text-sm font-semibold text-white">
                  {summary.totalEarned} {CURRENCY}
                </p>
              </div>
            </div>

            <Link
              href="/app/agent/rewards"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-5 py-3 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
            >
              View rewards
              <ArrowRight />
            </Link>
          </section>

          {/* STATUS NOTE */}
          <section className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
              How rewards work
            </span>

            <p className="mt-3 text-sm leading-6 text-[#A7B3AB]">
              Rewards become claimable only after your
              qualifying activity has been verified by
              the campaign&apos;s authorised verifier.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="2"
    >
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M9.5 8.5v7M14.5 8.5v7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="m9 9 6 6m0-6-6 6" />
    </svg>
  );
}

function PersonAddIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.8"
    >
      <circle cx="9" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M3.5 20a5.5 5.5 0 0 1 11 0M18 8v6M15 11h6" />
    </svg>
  );
}

const activity = [
  {
    initials: "SA",
    name: "Sarah A.",
    action: "Merchant onboarded",
    status: "Verified",
    reward: "+5 USDC",
    time: "15m ago",
  },
  {
    initials: "DK",
    name: "David K.",
    action: "Merchant onboarded",
    status: "Verified",
    reward: "+5 USDC",
    time: "1h ago",
  },
  {
    initials: "AT",
    name: "Amina T.",
    action: "Merchant onboarded",
    status: "Pending verification",
    reward: null,
    time: "3h ago",
  },
];

export function BusinessCampaignDetailConnected() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex w-full flex-col">
      {/* BREADCRUMB + HEADER */}
      <section className="flex flex-col gap-6 pb-6 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <nav className="mb-2 flex items-center gap-2 text-xs font-medium text-[#718277]">
            <Link
              href="/app/business/campaigns"
              className="transition-colors hover:text-[#E1E3DF]"
            >
              Campaigns
            </Link>

            <span className="text-[#294034]">/</span>

            <span className="truncate text-[#9DA8A1]">
              Merchant Growth Campaign
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Merchant Growth Campaign
            </h2>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#02C763]/25 bg-[#02C763]/10 px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
              Active
            </span>
          </div>

          <p className="mt-2 text-sm text-[#718277]">
            Reward agents for verified merchant onboarding.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#02C763] px-4 text-sm font-semibold text-[#050806] transition-all duration-150 hover:-translate-y-px hover:bg-[#02D86F]"
          >
            <PlusIcon />
            Fund Campaign
          </button>

          <div className="relative">
            <button
              type="button"
              aria-label="Campaign options"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1B2A22] bg-[#101813] text-[#9DA8A1] transition-colors hover:bg-[#16281E] hover:text-white"
            >
              <MoreIcon />
            </button>

            {menuOpen && (
              <div className="absolute right-0 z-30 mt-2 flex w-48 flex-col gap-0.5 rounded-xl border border-[#1B2A22] bg-[#101813] p-1.5 shadow-xl">
                <button
                  type="button"
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-[#9DA8A1] transition-colors hover:bg-[#16281E] hover:text-white"
                >
                  <PauseIcon />
                  Pause Campaign
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-[#F25F5C] transition-colors hover:bg-[#16281E]"
                >
                  <CloseIcon />
                  Close Campaign
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Campaign funds", "1,000 USDC", false],
          ["Allocated rewards", "325 USDC", false],
          ["Available funds", "675 USDC", true],
          ["Agents", "24", false],
        ].map(([label, value, accent]) => (
          <div
            key={label}
            className="flex flex-col justify-between rounded-2xl border border-[#1B2A22] bg-[#101813] p-5"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-[#718277]">
              {label}
            </span>

            <div
              className={[
                "mt-2 font-display text-2xl font-semibold tracking-tight",
                accent ? "text-[#02C763]" : "text-white",
              ].join(" ")}
            >
              {value}
            </div>
          </div>
        ))}
      </section>

      {/* CAMPAIGN INFORMATION */}
      <section className="mb-6 rounded-2xl border border-[#1B2A22] bg-[#101813] p-5">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#718277]">
              Qualifying action
            </span>
            <span className="text-sm font-medium text-white">
              Merchant onboarded
            </span>
          </div>

          <div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#718277]">
              Reward per verified action
            </span>
            <span className="text-sm font-medium text-white">
              5 USDC
            </span>
          </div>

          <div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#718277]">
              Verifier
            </span>
            <span className="text-sm font-medium text-white">
              Operations Team
            </span>
          </div>

          <div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#718277]">
              Campaign status
            </span>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#02C763]" />
              <span className="text-sm font-medium text-white">
                Active
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL TABS */}
      <nav className="mb-6 flex items-center gap-8 overflow-x-auto border-b border-[#1B2A22]">
        <button
          type="button"
          className="-mb-px shrink-0 border-b-2 border-[#02C763] pb-3 text-sm font-medium text-white"
        >
          Overview
        </button>

        {["Activity", "Agents", "Verifiers"].map((tab) => (
          <button
            key={tab}
            type="button"
            disabled
            title={`${tab} view will be added next`}
            className="shrink-0 cursor-default pb-3 text-sm font-medium text-[#718277]"
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* MAIN DETAIL GRID */}
      <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* RECENT ACTIVITY */}
        <div className="flex flex-col rounded-2xl border border-[#1B2A22] bg-[#101813] p-6 lg:col-span-7">
          <div className="mb-2 flex items-center justify-between border-b border-[#1B2A22]/60 pb-4">
            <h3 className="text-base font-semibold text-white">
              Recent activity
            </h3>

            <span className="text-xs text-[#718277]">
              Latest campaign activity
            </span>
          </div>

          <div className="flex flex-col">
            {activity.map((item, index) => {
              const verified = item.status === "Verified";

              return (
                <div
                  key={item.name}
                  className={[
                    "flex flex-col justify-between gap-4 py-4 sm:flex-row sm:items-center",
                    index < activity.length - 1
                      ? "border-b border-[#1B2A22]/50"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex min-w-0 items-center gap-3 sm:w-1/3">
                    <div
                      className={[
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-[#16281E] text-xs font-semibold",
                        verified
                          ? "border-[#294034] text-[#02C763]"
                          : "border-[#294034] text-[#9DA8A1]",
                      ].join(" ")}
                    >
                      {item.initials}
                    </div>

                    <span className="truncate text-sm font-medium text-white">
                      {item.name}
                    </span>
                  </div>

                  <div className="min-w-0 sm:w-1/3">
                    <span className="text-sm text-[#9DA8A1]">
                      {item.action}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:w-1/3 sm:justify-end">
                    {verified ? (
                      <>
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#02C763]/25 bg-[#02C763]/10 px-2 py-0.5 text-xs font-medium text-[#02C763]">
                          <span className="h-1 w-1 rounded-full bg-[#02C763]" />
                          Verified
                        </span>

                        <span className="whitespace-nowrap text-xs font-semibold text-[#02C763]">
                          {item.reward}
                        </span>
                      </>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-[#294034] bg-[#16281E] px-2 py-0.5 text-xs font-medium text-[#9DA8A1]">
                        Pending verification
                      </span>
                    )}

                    <span className="w-12 text-right text-xs text-[#718277]">
                      {item.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="rounded-2xl border border-[#1B2A22] bg-[#101813] p-6">
            <h3 className="mb-5 text-base font-semibold text-white">
              Reward allocation
            </h3>

            <div className="mb-5 h-3 w-full overflow-hidden rounded-full bg-[#1B2A22]">
              <div
                className="h-full rounded-full bg-[#02C763]"
                style={{ width: "32.5%" }}
              />
            </div>

            <div className="mb-4 grid grid-cols-3 gap-3 rounded-xl border border-[#1B2A22]/70 bg-[#0C120F] p-3.5">
              <div>
                <span className="mb-1 block text-xs font-medium text-[#718277]">
                  Funded
                </span>
                <span className="text-sm font-semibold text-white">
                  1,000 USDC
                </span>
              </div>

              <div className="border-l border-[#1B2A22]/60 pl-3">
                <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-[#718277]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                  Allocated
                </span>
                <span className="text-sm font-semibold text-[#02C763]">
                  325 USDC
                </span>
              </div>

              <div className="border-l border-[#1B2A22]/60 pl-3">
                <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-[#718277]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#718277]" />
                  Available
                </span>
                <span className="text-sm font-semibold text-white">
                  675 USDC
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#718277]">
              Verified activity allocates rewards to the agent&apos;s
              claimable balance.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1B2A22] bg-[#101813] p-5">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[#718277]">
              Campaign actions
            </span>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#1B2A22] bg-[#142019] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#16281E]"
              >
                <span className="text-[#02C763]">
                  <PlusIcon />
                </span>
                Add funds
              </button>

              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#1B2A22] bg-[#142019] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#16281E]"
              >
                <span className="text-[#02C763]">
                  <PersonAddIcon />
                </span>
                Add verifier
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

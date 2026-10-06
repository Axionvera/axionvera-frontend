"use client";

import { useState } from "react";

const useCases = [
  {
    title: "Merchant acquisition",
    description:
      "Reward field agents when a new merchant is successfully onboarded and verified.",
    action: "Merchant onboarded",
    reward: "5 USDC",
    campaignName: "Merchant Growth Campaign",
    funds: "1,000 USDC",
    verifier: "Operations Team",
    agent: "Sarah A.",
    avatar: "SA",
  },
  {
    title: "Customer activation",
    description:
      "Reward agents when acquired or referred customers complete a qualifying activation milestone.",
    action: "Customer activated",
    reward: "3 USDC",
    campaignName: "Customer Activation Campaign",
    funds: "750 USDC",
    verifier: "Operations Team",
    agent: "David K.",
    avatar: "DK",
  },
  {
    title: "Sales milestones",
    description:
      "Reward field or distribution teams when verified sales milestones are achieved.",
    action: "Sales milestone reached",
    reward: "10 USDC",
    campaignName: "Sales Performance Campaign",
    funds: "1,000 USDC",
    verifier: "Sales Manager",
    agent: "Fatima R.",
    avatar: "FR",
  },
  {
    title: "Referrals & conversions",
    description:
      "Reward ambassadors, affiliates, or community agents when referrals produce verified outcomes.",
    action: "Referral converted",
    reward: "5 USDC",
    campaignName: "Referral Growth Campaign",
    funds: "750 USDC",
    verifier: "Partner Operations",
    agent: "Tunde O.",
    avatar: "TO",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
    >
      <path
        d="M12 3 19 6v5c0 4.6-2.7 7.8-7 10-4.3-2.2-7-5.4-7-10V6l7-3Zm-3 9 2 2 4-4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Businesses() {
  const [selected, setSelected] = useState(0);

  const activeCase = useCases[selected];

  return (
    <section
      id="businesses"
      aria-labelledby="businesses-heading"
      className="relative scroll-mt-[72px] overflow-hidden bg-background px-6 py-24 md:py-28 lg:px-12"
    >
      {/* Restrained ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-[25%] h-[420px] w-[420px] rounded-full bg-primary/[0.025] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-[#131a16] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
              Use Cases
            </span>
          </div>

          <h2
            id="businesses-heading"
            className="font-display text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-text-primary md:text-[52px] md:leading-[58px]"
          >
            Reward the outcomes that drive growth.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
            From merchant acquisition to referrals and sales milestones,
            Axionvera lets businesses define what success looks like and
            reward agents when it happens.
          </p>
        </div>

        {/* Main interactive layout */}
        <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Use-case selectors */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {useCases.map((item, index) => {
              const isActive = selected === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(index)}
                  className={[
                    "relative overflow-hidden rounded-[16px] border p-6 text-left",
                    "bg-[#0e1310] transition-all duration-200",
                    isActive
                      ? "border-primary shadow-[0_14px_40px_rgba(2,199,99,0.06)]"
                      : "border-border-subtle hover:border-border-strong",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute bottom-3 left-0 top-3 w-1 rounded-r-full",
                      "transition-colors duration-200",
                      isActive ? "bg-primary" : "bg-transparent",
                    ].join(" ")}
                  />

                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={[
                        "font-display text-xl font-semibold tracking-[-0.02em]",
                        isActive
                          ? "text-text-primary"
                          : "text-[#d5dad6]",
                      ].join(" ")}
                    >
                      {item.title}
                    </span>

                    <span
                      className={
                        isActive
                          ? "text-primary"
                          : "text-text-tertiary"
                      }
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {item.description}
                  </p>

                  <div className="mt-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-border-subtle bg-[#131a16] px-3 py-1.5 text-xs text-text-secondary">
                    <span>
                      Qualifying action: {item.action}
                    </span>

                    <span className="text-text-tertiary">
                      •
                    </span>

                    <span className="font-semibold text-primary">
                      {item.reward}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Campaign preview */}
          <div className="lg:sticky lg:top-[96px] lg:col-span-7">
            <div className="flex flex-col gap-6 rounded-[20px] border border-border-subtle bg-surface-primary p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-8">
              {/* Preview header */}
              <div className="flex flex-col justify-between gap-4 border-b border-border-subtle pb-6 sm:flex-row sm:items-center">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-text-primary">
                  {activeCase.campaignName}
                </h3>

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Active
                </span>
              </div>

              {/* Campaign metrics */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex min-h-[104px] flex-col justify-between rounded-[12px] border border-border-subtle bg-[#131a16] p-4">
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-text-secondary">
                    Qualifying action
                  </span>

                  <span className="mt-2 font-display text-xl font-medium text-text-primary">
                    {activeCase.action}
                  </span>
                </div>

                <div className="flex min-h-[104px] flex-col justify-between rounded-[12px] border border-border-subtle bg-[#131a16] p-4">
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-text-secondary">
                    Reward
                  </span>

                  <span className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-primary">
                    +{activeCase.reward}
                  </span>
                </div>

                <div className="flex min-h-[104px] flex-col justify-between rounded-[12px] border border-border-subtle bg-[#131a16] p-4">
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-text-secondary">
                    Campaign funds
                  </span>

                  <span className="mt-2 font-display text-xl font-medium text-text-primary">
                    {activeCase.funds}
                  </span>
                </div>

                <div className="flex min-h-[104px] flex-col justify-between rounded-[12px] border border-border-subtle bg-[#131a16] p-4">
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-text-secondary">
                    Verifier
                  </span>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-primary">
                      <ShieldIcon />
                    </span>

                    <span className="font-display text-xl font-medium text-text-primary">
                      {activeCase.verifier}
                    </span>
                  </div>
                </div>
              </div>

              {/* Latest activity */}
              <div className="rounded-[12px] border border-border-subtle bg-[#131a16] p-4">
                <span className="mb-3 block text-xs font-medium uppercase tracking-[0.08em] text-text-secondary">
                  Latest verified activity
                </span>

                <div className="flex flex-col justify-between gap-4 rounded-[10px] border border-border-subtle bg-surface-primary p-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong bg-border-subtle text-xs font-semibold text-text-primary">
                      {activeCase.avatar}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {activeCase.agent}
                      </p>

                      <p className="text-xs text-text-secondary">
                        {activeCase.action}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold text-primary">
                      +{activeCase.reward}
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3 w-3"
                        stroke="currentColor"
                      >
                        <path
                          d="m5 12 4 4L19 6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Stellar settlement */}
              <div className="flex items-center gap-2 pt-1 text-xs text-text-secondary">
                <span className="text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 10V8a5 5 0 0 1 10 0v2m-11 0h12v10H6V10Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                Settlement via Stellar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

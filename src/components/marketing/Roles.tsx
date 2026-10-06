"use client";

import { useState } from "react";

function BusinessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
    >
      <path
        d="M4 10h16v10H4V10Zm2-5h12l2 5H4l2-5Zm3 9h6M9 20v-4h6v4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

function RewardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
    >
      <path
        d="M12 6v12m3-9.5C14.4 7.6 13.4 7 12 7c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.4-.6-3-1.5M4 4h16v16H4V4Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
    >
      <path
        d="m5 12 4 4L19 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Roles() {
  const [verified, setVerified] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const claimableBalance = claimed
    ? "0 USDC"
    : verified
      ? "25 USDC"
      : "20 USDC";

  return (
    <section
      id="agents"
      aria-labelledby="roles-heading"
      className="relative scroll-mt-[72px] overflow-hidden bg-background px-6 py-24 md:py-28 lg:px-12"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        {/* Section heading */}
        <div className="mb-16 flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-[#1d211e] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
              How Roles Work
            </span>
          </div>

          <h2
            id="roles-heading"
            className="font-display text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-text-primary sm:text-[44px] sm:leading-[50px] lg:text-[60px] lg:leading-[64px]"
          >
            Built around the people who make rewards work.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-xl sm:leading-8">
            Businesses define the campaign. Verifiers confirm qualifying
            activity. Agents earn rewards for successful outcomes.
          </p>
        </div>

        {/* Role architecture */}
        <div className="relative w-full max-w-6xl">
          {/* Desktop relationship lines */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 650"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="ax-role-line"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#1B2A22"
                  stopOpacity="0.35"
                />
                <stop
                  offset="50%"
                  stopColor="#02C763"
                  stopOpacity="0.65"
                />
                <stop
                  offset="100%"
                  stopColor="#1B2A22"
                  stopOpacity="0.35"
                />
              </linearGradient>
            </defs>

            <path
              d="M350 180 C430 180 440 260 500 260"
              fill="none"
              stroke="url(#ax-role-line)"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />

            <path
              d="M350 470 C430 470 440 390 500 390"
              fill="none"
              stroke="url(#ax-role-line)"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />

            <path
              d="M700 325 C790 325 800 325 870 325"
              fill="none"
              stroke="url(#ax-role-line)"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* ==================================================
                BUSINESS + VERIFIER
                ================================================== */}
            <div className="flex flex-col gap-6 lg:col-span-4">
              {/* Business */}
              <div className="flex flex-col justify-between rounded-[16px] border border-border-subtle bg-background p-6 shadow-[0_20px_55px_rgba(0,0,0,0.20)] transition-colors duration-200 hover:border-border-strong">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-primary">
                      <BusinessIcon />
                    </span>

                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary">
                      Business
                    </h3>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-text-secondary">
                    Creates and funds campaigns, defines qualifying actions,
                    sets reward rules, and chooses authorised verifiers.
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-[12px] border border-border-subtle bg-[#0b0f0c] p-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-text-secondary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-[18px] w-[18px]"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 7h10M18 7h2M4 12h3M11 12h9M4 17h7M15 17h5M14 5v4M7 10v4M11 15v4"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium text-text-primary">
                      Campaign configured
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Active
                  </span>
                </div>
              </div>

              {/* Verifier */}
              <div className="flex flex-col justify-between rounded-[16px] border border-border-subtle bg-background p-6 shadow-[0_20px_55px_rgba(0,0,0,0.20)] transition-colors duration-200 hover:border-border-strong">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-primary">
                      <VerifyIcon />
                    </span>

                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary">
                      Verifier
                    </h3>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-text-secondary">
                    Confirms whether an agent completed the qualifying
                    activity before a reward is allocated.
                  </p>
                </div>

                <div className="flex flex-col gap-3.5 rounded-[12px] border border-border-subtle bg-[#0b0f0c] p-4">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#272b28] text-xs font-semibold text-text-primary">
                        SA
                      </div>

                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          Sarah A.
                        </p>

                        <p className="text-xs text-text-secondary">
                          Merchant onboarded
                        </p>
                      </div>
                    </div>

                    <span
                      className={[
                        "w-fit rounded-full border px-2 py-1 text-xs font-medium",
                        verified
                          ? "border-primary/20 bg-primary/10 text-primary"
                          : "border-border-subtle bg-[#272b28] text-text-secondary",
                      ].join(" ")}
                    >
                      {verified
                        ? "Verified"
                        : "Pending verification"}
                    </span>
                  </div>

                  {!verified ? (
                    <button
                      type="button"
                      onClick={() => setVerified(true)}
                      className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] border border-border-subtle bg-[#1d211e] px-3 text-xs font-semibold text-text-primary transition-colors hover:bg-[#272b28]"
                    >
                      <span className="text-primary">
                        <VerifyIcon />
                      </span>

                      Verify activity
                    </button>
                  ) : (
                    <div className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] border border-primary/20 bg-primary/10 px-3 text-xs font-semibold text-primary">
                      <CheckIcon />
                      Activity verified
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ==================================================
                CAMPAIGN
                ================================================== */}
            <div className="flex flex-col items-center lg:col-span-4">
              <div className="relative w-full rounded-[20px] border border-border-subtle bg-[#0e1511] p-6 shadow-[0_26px_75px_rgba(0,0,0,0.28)] backdrop-blur-md transition-colors duration-200 hover:border-border-strong sm:p-7">
                <div className="mb-5 flex items-center justify-between gap-3 border-b border-border-subtle pb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    Campaign
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Active
                  </span>
                </div>

                <div className="mb-6">
                  <p className="mb-1 text-xs text-text-secondary">
                    Campaign
                  </p>

                  <h4 className="font-display text-2xl font-semibold tracking-[-0.025em] text-text-primary">
                    Merchant Growth Campaign
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 rounded-[12px] border border-border-subtle bg-[#0b0f0c] p-3">
                    <span className="text-xs text-text-secondary">
                      Qualifying action
                    </span>

                    <span className="text-right text-xs font-medium text-text-primary">
                      Merchant onboarded
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 rounded-[12px] border border-border-subtle bg-[#0b0f0c] p-3">
                    <span className="text-xs text-text-secondary">
                      Reward
                    </span>

                    <span className="font-display text-sm font-semibold text-primary">
                      5 USDC
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 rounded-[12px] border border-border-subtle bg-[#0b0f0c] p-3">
                    <span className="text-xs text-text-secondary">
                      Campaign funds
                    </span>

                    <span className="text-xs font-medium text-text-primary">
                      1,000 USDC
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 rounded-[12px] border border-border-subtle bg-[#0b0f0c] p-3">
                    <span className="text-xs text-text-secondary">
                      Verifier
                    </span>

                    <span className="text-xs font-medium text-text-primary">
                      Operations Team
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 border-t border-border-subtle pt-4 text-xs text-text-secondary">
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      verified
                        ? "bg-primary"
                        : "bg-text-tertiary",
                    ].join(" ")}
                  />

                  {verified
                    ? "Activity verified"
                    : "Awaiting verification"}
                </div>
              </div>
            </div>

            {/* ==================================================
                AGENT
                ================================================== */}
            <div className="flex flex-col lg:col-span-4">
              <div className="flex flex-col justify-between rounded-[16px] border border-border-subtle bg-background p-6 shadow-[0_20px_55px_rgba(0,0,0,0.20)] transition-colors duration-200 hover:border-border-strong">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-primary">
                      <RewardIcon />
                    </span>

                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary">
                      Agent
                    </h3>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-text-secondary">
                    Completes qualifying activities, tracks earned rewards,
                    and claims rewards that have been allocated.
                  </p>
                </div>

                <div className="flex flex-col gap-4 rounded-[12px] border border-border-subtle bg-[#0b0f0c] p-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#272b28] text-xs font-semibold text-text-primary">
                      SA
                    </div>

                    <span className="text-sm font-medium text-text-primary">
                      Sarah A.
                    </span>
                  </div>

                  <div
                    className={[
                      "flex items-center justify-between rounded-[10px] border p-3.5",
                      verified
                        ? "border-primary/20 bg-primary/[0.05]"
                        : "border-border-subtle bg-background",
                    ].join(" ")}
                  >
                    <span className="text-xs text-text-secondary">
                      {verified
                        ? "Reward allocated"
                        : "Pending reward"}
                    </span>

                    <span
                      className={[
                        "font-display text-xl font-semibold",
                        verified
                          ? "text-primary"
                          : "text-text-tertiary",
                      ].join(" ")}
                    >
                      +5 USDC
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-1 text-xs">
                    <span className="text-text-secondary">
                      Claimable balance
                    </span>

                    <span className="font-medium text-text-primary">
                      {claimableBalance}
                    </span>
                  </div>

                  <button
                    type="button"
                    disabled={!verified || claimed}
                    onClick={() => {
                      if (verified && !claimed) {
                        setClaimed(true);
                      }
                    }}
                    className={[
                      "inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] px-4 text-xs font-semibold transition-colors",
                      verified && !claimed
                        ? "bg-primary text-[#031009] hover:bg-primary-hover"
                        : "cursor-default border border-border-subtle bg-[#272b28] text-text-tertiary",
                    ].join(" ")}
                  >
                    {claimed ? (
                      <>
                        <CheckIcon />
                        Claimed
                      </>
                    ) : verified ? (
                      "Claim 25 USDC"
                    ) : (
                      "Available after verification"
                    )}
                  </button>

                  {claimed && (
                    <p className="text-center text-xs text-text-secondary">
                      Reward moved from claimable to claimed.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Reset demo */}
          {(verified || claimed) && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setVerified(false);
                  setClaimed(false);
                }}
                className="text-xs font-medium text-text-tertiary transition-colors hover:text-text-secondary"
              >
                Reset interaction
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function Hero() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative pb-20 pt-16 md:pb-24 md:pt-20">
        {/* Fine architectural grid */}
        <div
          aria-hidden="true"
          className="ax-hero-grid pointer-events-none absolute inset-0"
        />

        {/* Restrained atmospheric light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[14%] h-[340px] w-[700px] max-w-[90vw] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[120px]"
        />

        {/* Hero copy */}
        <div className="relative z-10 mx-auto flex max-w-[840px] flex-col items-center px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-primary px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Agent Rewards, Built for Growth
            </span>
          </div>

          <h1 className="max-w-[780px] font-display text-[42px] font-semibold leading-[46px] tracking-[-0.045em] text-text-primary sm:text-[52px] sm:leading-[56px] md:text-[64px] md:leading-[68px]">
            Reward the people who help your business grow.
          </h1>

          <p className="mt-6 max-w-[640px] text-base leading-7 text-text-secondary md:text-xl md:leading-8">
            Create performance-based campaigns, verify qualifying actions,
            and reward successful outcomes from one platform.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/app"
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-primary px-7 text-[15px] font-semibold text-[#031009] transition-colors duration-200 hover:bg-primary-hover sm:w-auto"
            >
              Launch App
            </Link>

            <Link
              href="#how-it-works"
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] border border-border-subtle bg-surface-primary px-6 text-[15px] font-semibold text-text-primary transition-colors duration-200 hover:border-border-strong hover:bg-surface-elevated sm:w-auto"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs tracking-[0.02em] text-text-tertiary md:text-[13px]">
            <span>Built on Stellar</span>
            <span className="text-border-strong">•</span>
            <span>Powered by Soroban</span>
            <span className="text-border-strong">•</span>
            <span className="text-text-secondary">Testnet live</span>
          </div>
        </div>

        {/* Product scene */}
        <div className="relative z-10 mx-auto mt-16 w-full max-w-[1240px] px-4 sm:px-6 md:mt-20">
          <div className="relative overflow-hidden rounded-[24px] border border-border-subtle bg-background-secondary/90 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.30)] sm:p-6 md:p-10">

            <div className="relative flex min-h-[390px] flex-col items-stretch justify-center gap-6 lg:min-h-[420px] lg:flex-row lg:items-center lg:gap-7">

              {/* Agent activity */}
              <div className="ax-agent-card relative z-30 w-full lg:w-[270px]">
                <div className="relative rounded-[16px] border border-border-subtle bg-surface-primary p-4 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                  <div className="absolute bottom-4 left-0 top-4 w-[3px] rounded-r-full bg-border-strong" />

                  <div className="flex items-start justify-between gap-3 pl-2">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-elevated font-display text-xs font-semibold text-text-primary">
                        SA
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-text-primary">
                          Sarah A.
                        </p>
                        <p className="text-xs text-text-secondary">
                          Merchant onboarded
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 text-[11px] text-text-tertiary">
                      Just now
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex justify-center lg:hidden">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-text-tertiary"
                    stroke="currentColor"
                  >
                    <path
                      d="m7 10 5 5 5-5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Connector left */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[245px] top-1/2 z-10 hidden w-[130px] -translate-y-1/2 lg:block"
              >
                <svg viewBox="0 0 130 32" className="h-8 w-full">
                  <path
                    d="M0 16H130"
                    stroke="#1B2A22"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                  <path
                    d="M0 16H130"
                    stroke="#02C763"
                    strokeWidth="1.5"
                    className="ax-connector-left"
                  />
                </svg>
              </div>

              {/* Campaign */}
              <div className="relative z-20 w-full lg:w-[500px]">
                <div className="overflow-hidden rounded-[20px] border border-border-subtle bg-surface-primary p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-6">
                  <div className="flex flex-col justify-between gap-4 border-b border-border-subtle pb-5 sm:flex-row sm:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-display text-lg font-semibold tracking-[-0.025em] text-text-primary">
                          Merchant Growth Campaign
                        </h2>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          Active
                        </span>
                      </div>

                      <p className="mt-2 max-w-[300px] text-sm leading-5 text-text-secondary">
                        Reward agents for verified merchant onboarding.
                      </p>
                    </div>

                    <div className="shrink-0 rounded-[12px] border border-border-subtle bg-background-secondary px-3 py-2 sm:text-right">
                      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-tertiary">
                        Campaign funds
                      </p>
                      <p className="mt-1 font-display text-base font-semibold text-text-primary">
                        1,000 USDC
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="mb-2 text-xs font-medium text-text-tertiary">
                      Authorised verifier
                    </p>

                    <div className="ax-verification-box relative h-[52px] overflow-hidden rounded-[12px] border border-border-subtle bg-surface-elevated">
                      <div className="ax-verifying-state absolute inset-0 flex items-center px-4">
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <svg
                            className="h-4 w-4 animate-spin text-text-tertiary"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="3"
                              opacity="0.25"
                            />
                            <path
                              d="M21 12a9 9 0 0 0-9-9"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>

                          Verifying activity…
                        </div>
                      </div>

                      <div className="ax-verified-state absolute inset-0 flex items-center justify-between gap-3 px-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
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

                          Activity verified
                        </div>

                        <span className="text-[11px] font-medium text-primary">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[260px] top-1/2 z-10 hidden w-[130px] -translate-y-1/2 lg:block"
              >
                <svg viewBox="0 0 130 32" className="h-8 w-full">
                  <path
                    d="M0 16H130"
                    stroke="#1B2A22"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                  <path
                    d="M0 16H130"
                    stroke="#02C763"
                    strokeWidth="1.5"
                    className="ax-connector-right"
                  />
                </svg>
              </div>

              {/* Reward */}
              <div className="ax-reward-card relative z-30 w-full rounded-[16px] lg:w-[290px]">
                <div className="relative overflow-hidden rounded-[16px] border border-border-subtle bg-surface-primary p-5 shadow-[0_20px_50px_rgba(0,0,0,0.30)]">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-[30px] font-semibold leading-none tracking-[-0.04em] text-primary">
                        +5 USDC
                      </p>

                      <p className="mt-2 text-sm font-semibold text-text-primary">
                        Reward allocated
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 6v12m3-9.5C14.4 7.6 13.4 7 12 7c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.4-.6-3-1.5"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[12px] border border-border-subtle bg-background-secondary p-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-tertiary">
                      Milestone
                    </p>
                    <p className="mt-1 text-xs font-medium text-text-secondary">
                      Merchant onboarded
                    </p>
                  </div>

                  <div className="mt-4 border-t border-border-subtle pt-4">
                    <p className="text-xs text-text-tertiary">
                      Claimable balance
                    </p>

                    <div className="relative mt-2 h-7">
                      <div className="ax-old-balance absolute inset-0 flex items-center text-sm text-text-secondary">
                        20 USDC
                      </div>

                      <div className="ax-new-balance absolute inset-0 flex items-center gap-2 text-sm font-semibold">
                        <span className="text-xs text-text-tertiary line-through">
                          20 USDC
                        </span>
                        <span className="text-primary">
                          → 25 USDC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center border-t border-border-subtle pt-5">
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                Explore how campaigns work below

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3.5 w-3.5 text-primary"
                  stroke="currentColor"
                >
                  <path
                    d="m7 10 5 5 5-5"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

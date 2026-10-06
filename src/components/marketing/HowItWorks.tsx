export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-[72px] overflow-hidden bg-background px-6 py-28 lg:px-12 md:py-36"
    >
      {/* Restrained ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[720px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-10 h-[400px] w-[540px] max-w-[80vw] rounded-full bg-primary/[0.035] blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section intro */}
        <div className="mb-24 max-w-3xl md:mb-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3c4a3d]/40 bg-[#1d211e] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
              How Axionvera Works
            </span>
          </div>

          <h2 className="max-w-[760px] font-display text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-text-primary md:text-[60px] md:leading-[64px]">
            Turn verified agent activity into programmable rewards.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary md:text-xl md:leading-8">
            Create a campaign, define what counts, verify qualifying
            activity, and reward successful outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col gap-28 md:gap-36">
          {/* Central progression line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#3c4a3d]/10 via-primary/20 to-primary/40 lg:block"
          />

          {/* =====================================================
              STEP 01
              ===================================================== */}
          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col justify-center lg:col-span-6 lg:pr-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[13px] font-semibold tracking-[0.08em] text-primary">
                  STEP 01
                </span>

                <span className="h-px w-8 bg-[#3c4a3d]/60" />
              </div>

              <h3 className="font-display text-[30px] font-semibold leading-[38px] tracking-[-0.02em] text-text-primary md:text-[44px] md:leading-[50px]">
                Create a campaign
              </h3>

              <p className="mt-5 max-w-[520px] text-base leading-[26px] text-text-secondary md:text-lg md:leading-8">
                Define the actions you want to reward, set the reward
                amount, fund the campaign, and choose authorised verifiers.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full rounded-[20px] border border-[#3c4a3d]/40 bg-[#1d211e] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#3c4a3d]/30 pb-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#3c4a3d]/40 bg-[#272b28] text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-[18px] w-[18px]"
                        stroke="currentColor"
                      >
                        <path
                          d="M5 5h14v14H5V5Zm3 4h8M8 12h8M8 15h5"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <p className="truncate font-display text-base font-semibold text-text-primary">
                      Merchant Growth Campaign
                    </p>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[13px] font-medium text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Active
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 rounded-[12px] border border-[#3c4a3d]/25 bg-[#191c1a] p-3.5">
                    <span className="text-[13px] text-text-secondary">
                      Qualifying action
                    </span>

                    <span className="text-right text-[15px] font-semibold text-text-primary">
                      Merchant onboarded
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-[12px] border border-[#3c4a3d]/25 bg-[#191c1a] p-3.5">
                      <span className="block text-[13px] text-text-secondary">
                        Reward per verified action
                      </span>

                      <span className="mt-1 block font-display text-lg font-semibold text-text-primary">
                        5 USDC
                      </span>
                    </div>

                    <div className="rounded-[12px] border border-[#3c4a3d]/25 bg-[#191c1a] p-3.5">
                      <span className="block text-[13px] text-text-secondary">
                        Campaign funds
                      </span>

                      <span className="mt-1 block font-display text-lg font-semibold text-text-primary">
                        1,000 USDC
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-[12px] border border-[#3c4a3d]/25 bg-[#191c1a] p-3.5">
                    <span className="text-[13px] text-text-secondary">
                      Verifier
                    </span>

                    <span className="text-[15px] font-semibold text-primary">
                      Operations Team
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              STEP 02
              ===================================================== */}
          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative w-full rounded-[20px] border border-[#3c4a3d]/40 bg-[#1d211e] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#3c4a3d]/30 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3c4a3d]/40 bg-[#272b28] text-sm font-semibold text-text-primary">
                      SA
                    </div>

                    <span className="text-[15px] font-semibold text-text-primary">
                      Sarah A.
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3c4a3d]/40 bg-[#272b28] px-2.5 py-1 text-[13px] text-text-secondary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5 text-primary"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 3 19 6v5c0 4.6-2.7 7.8-7 10-4.3-2.2-7-5.4-7-10V6l7-3Zm-3 9 2 2 4-4"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    Authorised verifier
                  </span>
                </div>

                <div className="mb-5 rounded-[12px] border border-[#3c4a3d]/30 bg-[#191c1a] p-4">
                  <p className="text-[13px] text-text-secondary">
                    Reported action
                  </p>

                  <p className="mt-1 font-display text-base font-semibold text-text-primary">
                    Merchant onboarded
                  </p>
                </div>

                <div className="rounded-[12px] border border-[#3c4a3d]/40 bg-[#272b28]/60 p-5">
                  <div className="flex items-center gap-2 text-sm text-text-tertiary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 7v5l3 2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    Pending verification
                  </div>

                  <div className="my-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-[#3c4a3d]/30" />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5 text-primary/70"
                      stroke="currentColor"
                    >
                      <path
                        d="m8 10 4 4 4-4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="h-px flex-1 bg-[#3c4a3d]/30" />
                  </div>

                  <div className="flex items-center gap-2.5 rounded-[10px] border border-primary/30 bg-primary/10 p-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-[18px] w-[18px] text-primary"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12.5 9.2 17 19 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="text-[15px] font-semibold text-text-primary">
                      Activity verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-6 lg:pl-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[13px] font-semibold tracking-[0.08em] text-primary">
                  STEP 02
                </span>

                <span className="h-px w-8 bg-[#3c4a3d]/60" />
              </div>

              <h3 className="font-display text-[30px] font-semibold leading-[38px] tracking-[-0.02em] text-text-primary md:text-[44px] md:leading-[50px]">
                Verify qualifying activity
              </h3>

              <p className="mt-5 max-w-[520px] text-base leading-[26px] text-text-secondary md:text-lg md:leading-8">
                Agents complete qualifying actions. Authorised verifiers
                confirm eligible activity before a reward is allocated.
              </p>
            </div>
          </div>

          {/* =====================================================
              STEP 03
              ===================================================== */}
          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col justify-center lg:col-span-6 lg:pr-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[13px] font-semibold tracking-[0.08em] text-primary">
                  STEP 03
                </span>

                <span className="h-px w-8 bg-[#3c4a3d]/60" />
              </div>

              <h3 className="font-display text-[30px] font-semibold leading-[38px] tracking-[-0.02em] text-text-primary md:text-[44px] md:leading-[50px]">
                Reward successful outcomes
              </h3>

              <p className="mt-5 max-w-[520px] text-base leading-[26px] text-text-secondary md:text-lg md:leading-8">
                Verified activity becomes a claimable reward for the agent,
                with settlement handled through Stellar.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full overflow-hidden rounded-[20px] border border-primary/40 bg-[#1d211e] p-6 shadow-[0_20px_50px_rgba(2,199,99,0.08)] md:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/15 blur-2xl"
                />

                <div className="relative mb-6 flex items-center justify-between gap-4 border-b border-[#3c4a3d]/30 pb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />

                    <span className="text-[15px] font-semibold text-text-primary">
                      Reward allocated
                    </span>
                  </div>

                  <div className="text-right text-[13px] text-text-secondary">
                    Agent{" "}
                    <span className="font-semibold text-text-primary">
                      Sarah A.
                    </span>
                  </div>
                </div>

                <div className="relative mb-6 flex flex-col items-center justify-center rounded-[14px] border border-primary/30 bg-[#272b28]/90 p-6 text-center">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    Allocated reward
                  </span>

                  <div className="font-display text-[40px] font-semibold leading-[46px] tracking-[-0.03em] text-primary md:text-[60px] md:leading-[64px]">
                    +5 USDC
                  </div>
                </div>

                <div className="relative flex flex-col items-start justify-between gap-3 rounded-[12px] border border-[#3c4a3d]/30 bg-[#191c1a] p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[13px] text-text-secondary">
                      Claimable balance
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm text-text-tertiary line-through">
                        20 USDC
                      </span>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3.5 w-3.5 text-primary"
                        stroke="currentColor"
                      >
                        <path
                          d="M5 12h14m-5-5 5 5-5 5"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className="font-display text-lg font-semibold text-text-primary">
                        25 USDC
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-[10px] bg-primary px-3 py-1.5 text-xs font-semibold text-[#031009]">
                    Claimable
                  </span>
                </div>

                <div className="relative mt-5 flex items-center gap-2 text-xs text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Settlement via Stellar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      stroke="currentColor"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
    >
      <path
        d="M4 20V8l8-4 8 4v12H4Zm4 0v-5h8v5M8 10h2m4 0h2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
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
      className="h-6 w-6"
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

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-[72px] overflow-hidden bg-background px-6 py-24 md:py-32 lg:px-12"
    >
      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex justify-center"
      >
        <div className="h-[360px] w-[840px] max-w-[90vw] -translate-y-1/3 rounded-full bg-primary/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col gap-20 md:gap-28">
        {/* =====================================================
            EDITORIAL INTRO
            ===================================================== */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-8 lg:col-span-8">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#272b28]/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                About Axionvera
              </span>
            </div>

            <h2
              id="about-heading"
              className="max-w-[820px] font-display text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-text-primary md:text-[60px] md:leading-[64px]"
            >
              Rewarding growth should be simpler.
            </h2>

            <div className="flex max-w-[700px] flex-col gap-6">
              <p className="text-base leading-7 text-text-secondary md:text-xl md:leading-8">
                Businesses rely on agents, field teams, affiliates, and
                partners to drive real outcomes, but rewarding that work is
                often fragmented across spreadsheets, manual approvals, and
                disconnected payout processes.
              </p>

              <p className="text-base font-medium leading-7 text-text-primary md:text-xl md:leading-8">
                Axionvera brings campaign rules, verification, and rewards
                into one programmable workflow.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex self-stretch flex-col justify-between pt-2 lg:col-span-4 lg:pt-16">
            <div className="relative rounded-[16px] bg-[#0b0f0c]/45 p-6 pl-7">
              <div className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-primary/45" />

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                The Mission
              </p>

              <p className="text-base leading-7 text-text-secondary">
                We&apos;re building toward a world where businesses can
                launch performance-based reward programs easily, and agents
                can earn from verified outcomes across the businesses they
                help grow.
              </p>
            </div>

            <div className="mt-8 pt-6 lg:mt-0">
              <p className="text-[13px] leading-6 tracking-[0.02em] text-text-tertiary">
                Built for businesses. Designed around agents.
                <br />
                <span className="font-medium text-text-primary">
                  Powered by verified outcomes.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BUSINESS → VERIFIED ACTIVITY → REWARD
            ===================================================== */}
        <div className="relative w-full overflow-hidden rounded-[20px] border border-border-subtle bg-[#0b0f0c]/70 p-6 md:p-10 lg:p-14">
          <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
            {/* Business */}
            <div className="relative flex flex-col items-center rounded-[16px] border border-border-subtle bg-[#191c1a]/65 p-8 text-center transition-colors duration-200 hover:border-border-strong">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle bg-[#272b28]/80 text-text-primary">
                <BusinessIcon />
              </div>

              <h3 className="font-display text-[22px] font-semibold leading-[30px] tracking-[-0.01em] text-text-primary">
                Business
              </h3>

              <p className="mt-2 text-base text-text-secondary">
                Defines the campaign
              </p>
            </div>

            {/* Connector */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/3 top-1/2 z-20 hidden w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-primary/60 md:flex"
            >
              <ArrowIcon />
            </div>

            {/* Verified activity */}
            <div className="relative flex flex-col items-center rounded-[16px] border border-primary/30 bg-[#191c1a]/90 p-8 text-center shadow-[0_14px_45px_rgba(2,199,99,0.05)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <VerifiedIcon />
              </div>

              <h3 className="font-display text-[22px] font-semibold leading-[30px] tracking-[-0.01em] text-text-primary">
                Verified activity
              </h3>

              <p className="mt-2 text-base text-text-secondary">
                Qualifying activity confirmed
              </p>
            </div>

            {/* Connector */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-2/3 top-1/2 z-20 hidden w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-primary/60 md:flex"
            >
              <ArrowIcon />
            </div>

            {/* Reward */}
            <div className="relative flex flex-col items-center rounded-[16px] border border-border-subtle bg-[#191c1a]/65 p-8 text-center transition-colors duration-200 hover:border-border-strong">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle bg-[#272b28]/80 text-primary">
                <RewardIcon />
              </div>

              <h3 className="font-display text-[22px] font-semibold leading-[30px] tracking-[-0.01em] text-text-primary">
                Agent reward
              </h3>

              <p className="mt-2 text-base text-text-secondary">
                Reward allocated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

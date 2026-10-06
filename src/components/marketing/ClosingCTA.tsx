import Link from "next/link";

export function ClosingCTA() {
  return (
    <section
      id="launch"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center sm:py-32 lg:px-12"
    >
      {/* Restrained ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[500px] max-w-[90vw] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-[#191c1a] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />

          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Ready to Build
          </span>
        </div>

        <h2 className="max-w-3xl font-display text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-text-primary md:text-[44px] md:leading-[50px]">
          Turn the outcomes that matter into rewards that motivate.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary">
          Create a campaign, define what success looks like, and reward the
          agents who help your business grow.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/app"
            className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-primary px-7 text-[15px] font-semibold text-[#031009] transition-colors hover:bg-primary-hover sm:w-auto"
          >
            Launch App
          </Link>

          <Link
            href="#current-build"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-border-subtle bg-[#191c1a] px-6 text-[15px] font-semibold text-text-primary transition-colors hover:border-border-strong hover:bg-[#1d211e] sm:w-auto"
          >
            View current build

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-primary"
              stroke="currentColor"
            >
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <p className="mt-8 text-sm text-text-secondary">
          Built on Stellar. Powered by Soroban.
        </p>
      </div>
    </section>
  );
}

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
          <span className="ax-section-dot h-1.5 w-1.5 rounded-full bg-primary" />

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

          <a
            href="https://github.com/Axionvera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-border-subtle bg-[#191c1a] px-6 text-[15px] font-semibold text-text-primary transition-all duration-200 hover:border-border-strong hover:bg-[#1d211e] sm:w-auto"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.447-1.272.097-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.748-1.027 2.748-1.027.545 1.379.202 2.398.099 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>

            View on GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-text-secondary">
          Built on Stellar. Powered by Soroban.
        </p>
      </div>
    </section>
  );
}

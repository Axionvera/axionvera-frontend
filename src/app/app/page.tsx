import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Choose Workspace | Axionvera",
  description: "Choose how you want to use Axionvera.",
};

function BackArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-3.5 w-3.5"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1"
      strokeWidth="2.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4 shrink-0 text-[#02C763]"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
      strokeWidth="1.6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
      />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
      strokeWidth="1.6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
}

export default function ChooseWorkspacePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#101412] text-[#F3F7F4]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(2,199,99,0.05) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(2,199,99,0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage: `
            linear-gradient(to right, rgba(27,42,34,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27,42,34,0.25) 1px, transparent 1px)
          `,
        }}
      />

      {/* Product header */}
      <header className="relative z-20 flex h-[72px] shrink-0 items-center justify-between border-b border-[#1B2A22]/90 bg-[#101412]/95 px-5 backdrop-blur-md sm:px-6 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#02C763]"
        >
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-[#1B2A22] bg-[#0C120F] p-1.5 transition-colors duration-200 group-hover:border-[#02C763]/50">
            <img
              src="/axionvera-logo.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold tracking-tight text-[#F3F7F4]">
              Axionvera
            </span>

            <span className="rounded border border-[#1B2A22] bg-[#101813]/80 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[#758078]">
              App
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-1.5 text-xs font-medium text-[#A7B3AB] transition-all duration-200 hover:border-[#1B2A22]/60 hover:bg-[#101813]/60 hover:text-[#F3F7F4]"
        >
          <span className="text-[#758078] transition-all duration-200 group-hover:-translate-x-0.5 group-hover:text-[#02D86F]">
            <BackArrow />
          </span>

          <span>Back to website</span>
        </Link>
      </header>

      {/* Main workspace selector */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex w-full max-w-[1060px] flex-col items-center">
          {/* Intro */}
          <div className="mb-10 max-w-2xl text-center md:mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1B2A22] bg-[#101813] px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#02C763] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#02C763] shadow-[0_0_10px_rgba(2,199,99,0.7)]" />
              </span>

              <span className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-[#A7B3AB]">
                Choose your experience
              </span>
            </div>

            <h1 className="mb-3 font-display text-3xl font-semibold leading-tight tracking-tight text-[#F3F7F4] sm:text-4xl md:text-[40px]">
              How will you use Axionvera?
            </h1>

            <p className="text-sm leading-relaxed text-[#A7B3AB] sm:text-base">
              Choose the workspace that matches what you want to do.
            </p>
          </div>

          {/* Role cards */}
          <div className="mb-10 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
            {/* Business */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#1B2A22] bg-[#101813] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#02C763] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.65),0_0_26px_-6px_rgba(2,199,99,0.22)] sm:p-8 lg:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#02C763]/5 blur-3xl transition-all duration-300 group-hover:bg-[#02C763]/10"
              />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1B2A22] bg-[#142019] text-[#02C763] shadow-inner transition-all duration-300 group-hover:border-[#02C763]/40 group-hover:bg-[#02C763]/10 group-hover:text-[#02D86F]">
                    <BusinessIcon />
                  </div>

                  <span className="rounded-md border border-[#1B2A22] bg-[#142019]/60 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A7B3AB] transition-all duration-300 group-hover:border-[#02C763]/30 group-hover:bg-[#02C763]/[0.08] group-hover:text-[#02D86F]">
                    Business
                  </span>
                </div>

                <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-[#F3F7F4]">
                  Run reward campaigns
                </h2>

                <p className="mb-6 text-sm font-normal leading-relaxed text-[#A7B3AB]">
                  Create and fund campaigns, define qualifying actions, manage
                  verifiers, and reward agents for verified outcomes.
                </p>

                <div className="mb-6 flex items-center justify-between rounded-xl border border-[#1B2A22]/60 bg-[#101412]/60 p-3 font-mono text-[11px] text-[#758078]">
                  <span className="flex items-center gap-1.5 text-[#A7B3AB]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                    Campaign
                  </span>

                  <span className="text-[#1B2A22]">→</span>
                  <span className="text-[#A7B3AB]">Verification</span>
                  <span className="text-[#1B2A22]">→</span>
                  <span className="font-medium text-[#02D86F]">Reward</span>
                </div>

                <div className="mb-8 space-y-2.5">
                  {[
                    "Create & fund campaigns",
                    "Define reward rules",
                    "Manage verifiers",
                    "Reward verified outcomes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs text-[#A7B3AB]"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/app/business"
                className="group/cta relative flex h-12 w-full items-center justify-between rounded-[10px] bg-[#02C763] px-5 text-sm font-medium text-[#050806] shadow-md transition-all duration-200 hover:bg-[#02D86F] group-hover:shadow-[0_0_28px_-6px_rgba(2,199,99,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#02D86F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101813]"
              >
                <span className="font-medium tracking-tight">
                  Enter Business Workspace
                </span>
                <ArrowRight />
              </Link>
            </article>

            {/* Agent */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#1B2A22] bg-[#101813] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#02C763] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.65),0_0_26px_-6px_rgba(2,199,99,0.22)] sm:p-8 lg:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#02C763]/5 blur-3xl transition-all duration-300 group-hover:bg-[#02C763]/10"
              />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1B2A22] bg-[#142019] text-[#02C763] shadow-inner transition-all duration-300 group-hover:border-[#02C763]/40 group-hover:bg-[#02C763]/10 group-hover:text-[#02D86F]">
                    <AgentIcon />
                  </div>

                  <span className="rounded-md border border-[#1B2A22] bg-[#142019]/60 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A7B3AB] transition-all duration-300 group-hover:border-[#02C763]/30 group-hover:bg-[#02C763]/[0.08] group-hover:text-[#02D86F]">
                    Agent
                  </span>
                </div>

                <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-[#F3F7F4]">
                  Earn from verified work
                </h2>

                <p className="mb-6 text-sm font-normal leading-relaxed text-[#A7B3AB]">
                  Track verified activity, view your rewards, and claim what
                  you&apos;ve earned.
                </p>

                <div className="mb-6 flex items-center justify-between rounded-xl border border-[#1B2A22]/60 bg-[#101412]/60 p-3 font-mono text-[11px] text-[#758078]">
                  <span className="flex items-center gap-1.5 text-[#A7B3AB]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                    Activity
                  </span>

                  <span className="text-[#1B2A22]">→</span>
                  <span className="text-[#A7B3AB]">Verified</span>
                  <span className="text-[#1B2A22]">→</span>
                  <span className="font-medium text-[#02D86F]">Earned</span>
                </div>

                <div className="mb-8 space-y-2.5">
                  {[
                    "Track qualifying activity",
                    "View allocated rewards",
                    "Monitor claimable balance",
                    "Claim earned rewards",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs text-[#A7B3AB]"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/app/agent"
                className="group/cta relative flex h-12 w-full items-center justify-between rounded-[10px] bg-[#02C763] px-5 text-sm font-medium text-[#050806] shadow-md transition-all duration-200 hover:bg-[#02D86F] group-hover:shadow-[0_0_28px_-6px_rgba(2,199,99,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#02D86F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101813]"
              >
                <span className="font-medium tracking-tight">
                  Enter Agent Workspace
                </span>
                <ArrowRight />
              </Link>
            </article>
          </div>

          {/* Trust line */}
          <div className="flex items-center gap-2.5 rounded-full border border-[#1B2A22]/70 bg-[#101813]/70 px-4 py-2 font-mono text-xs text-[#758078]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]/80 shadow-[0_0_8px_rgba(2,199,99,0.55)]" />
            <span className="tracking-wide">Built on Stellar</span>
            <span className="text-[#1B2A22]">·</span>
            <span className="tracking-wide text-[#A7B3AB]">
              Powered by Soroban
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

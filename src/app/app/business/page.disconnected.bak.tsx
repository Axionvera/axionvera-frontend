import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Overview | Axionvera",
  description: "Access your Axionvera Business workspace.",
};

function OverviewIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function CampaignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15M18 13a3 3 0 1 0 0-6M5.436 13.683A4.001 4.001 0 0 1 7 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 0 1-1.564-.317Z"
      />
    </svg>
  );
}

function AgentsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function VerifierIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12 2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z"
      />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" strokeWidth="1.8">
      <polyline
        points="22 12 18 12 15 21 9 3 6 12 2 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5" strokeWidth="1.8">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path strokeLinecap="round" d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7" strokeWidth="1.6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h11.25A2.25 2.25 0 0 1 19.5 6.75V8.25H16.5A3.75 3.75 0 0 0 12.75 12v0A3.75 3.75 0 0 0 16.5 15.75h3V17.25A2.25 2.25 0 0 1 17.25 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25h-3a3.75 3.75 0 0 0 0 7.5h3a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75Z" />
      <circle cx="16.5" cy="12" r=".75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 shrink-0" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const lockedNav = [
  { label: "Campaigns", icon: <CampaignIcon /> },
  { label: "Agents", icon: <AgentsIcon /> },
  { label: "Verifiers", icon: <VerifierIcon /> },
  { label: "Activity", icon: <ActivityIcon /> },
];

export default function BusinessOverviewPage() {
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#101412] text-[#F3F7F4]">
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden h-screen w-[256px] shrink-0 select-none flex-col justify-between border-r border-[#1B2A22] bg-[#0C120F] lg:flex">
        <div className="flex min-h-0 flex-1 flex-col">
          {/* Brand */}
          <Link
            href="/app"
            className="flex h-16 shrink-0 items-center gap-3 border-b border-[#1B2A22]/70 px-5"
          >
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-[8px] border border-[#1B2A22] bg-[#101813] p-1 shadow-sm">
              <img
                src="/axionvera-logo.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
                AXIONVERA
              </span>
              <span className="-mt-0.5 text-[10px] font-medium uppercase tracking-wide text-[#758078]">
                Business Workspace
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            <div className="relative flex items-center gap-3 rounded-[10px] border border-[#294034]/60 bg-[#16281E] px-3 py-2.5 text-sm font-medium text-white shadow-sm">
              <span className="absolute left-0 top-1/2 h-4 w-1 -translate-y-1/2 rounded-r-full bg-[#02C763]" />

              <span className="text-[#02C763]">
                <OverviewIcon />
              </span>

              <span>Overview</span>
            </div>

            {lockedNav.map((item) => (
              <button
                key={item.label}
                type="button"
                disabled
                title="Connect wallet to access"
                className="flex w-full cursor-not-allowed items-center gap-3 rounded-[10px] border border-transparent px-3 py-2.5 text-left text-sm font-medium text-[#515B54]"
              >
                <span className="text-[#465049]">{item.icon}</span>
                <span>{item.label}</span>
                <span className="ml-auto text-[#465049]">
                  <LockIcon />
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="flex flex-col gap-3 border-t border-[#1B2A22] bg-[#0C120F] p-3">
          <div className="rounded-[10px] border border-[#1B2A22] bg-[#101813] p-3">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#02C763] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#02C763]" />
              </span>

              <span className="text-xs font-medium text-[#F3F7F4]">
                Stellar Testnet
              </span>
            </div>

            <p className="text-[10px] leading-relaxed text-[#758078]">
              Testnet environment
            </p>
          </div>

          <div className="rounded-[10px] border border-[#1B2A22] bg-[#101813] p-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#1B2A22] bg-[#142019] text-[#758078]">
                <WalletIcon />
              </div>

              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#A7B3AB]">
                  Wallet not connected
                </div>
                <div className="text-[10px] text-[#758078]">
                  Connection required
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center px-3 py-2 text-xs font-medium text-[#758078] transition-colors hover:text-[#F3F7F4]"
          >
            ← Back to website
          </Link>
        </div>
      </aside>

      {/* ================= MAIN APPLICATION ================= */}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#1B2A22] bg-[#0C120F] px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            {/* Mobile logo */}
            <Link
              href="/app"
              className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#1B2A22] bg-[#101813] p-1 lg:hidden"
            >
              <img
                src="/axionvera-logo.png"
                alt="Axionvera"
                className="h-full w-full object-contain"
              />
            </Link>

            <h1
              className="font-display font-semibold tracking-tight text-white"
              style={{ fontSize: "20px", lineHeight: "28px" }}
            >
              Overview
            </h1>

            <div className="hidden h-4 w-px bg-[#1B2A22] sm:block" />

            <span className="hidden text-xs font-medium uppercase tracking-wider text-[#758078] sm:block">
              Business Workspace
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-[10px] border border-[#1B2A22] bg-[#101813] px-3 py-1.5 text-xs shadow-sm md:flex">
              <span className="h-2 w-2 rounded-full bg-[#02C763] shadow-[0_0_8px_rgba(2,199,99,0.6)]" />
              <span className="font-medium text-[#F3F7F4]">
                Stellar Testnet
              </span>
            </div>

            <button
              type="button"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-3.5 text-xs font-semibold text-[#031009] transition-all duration-200 hover:-translate-y-px hover:bg-[#02D86F] hover:shadow-[0_8px_24px_rgba(2,199,99,0.16)] active:translate-y-0 active:scale-[0.98] sm:px-4"
            >
              <WalletIcon />
              <span>Connect Wallet</span>
            </button>
          </div>
        </header>

        {/* Compact mobile nav */}
        <div className="border-b border-[#1B2A22] bg-[#0C120F] px-4 py-3 lg:hidden">
          <div className="flex gap-2 overflow-x-auto">
            <div className="flex shrink-0 items-center gap-2 rounded-[9px] border border-[#294034]/60 bg-[#16281E] px-3 py-2 text-xs font-medium text-white">
              <span className="text-[#02C763]">
                <OverviewIcon />
              </span>
              Overview
            </div>

            {lockedNav.map((item) => (
              <div
                key={item.label}
                className="flex shrink-0 items-center gap-2 rounded-[9px] border border-[#1B2A22] px-3 py-2 text-xs font-medium text-[#515B54]"
              >
                {item.label}
                <LockIcon />
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex flex-1 overflow-y-auto bg-[#101412] p-4 sm:p-6 lg:p-8">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-center">
            <section className="relative w-full max-w-[720px] overflow-hidden rounded-[20px] border border-[#1B2A22] bg-[#0C120F] px-6 py-10 text-center shadow-[0_24px_80px_-42px_rgba(0,0,0,0.85)] sm:px-10 sm:py-12">
              {/* Ambient accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-48 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#02C763]/10 blur-[90px]"
              />

              <div className="relative">
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#294034] bg-[#142019] text-[#02C763] shadow-[0_0_26px_-8px_rgba(2,199,99,0.45)]">
                  <WalletIcon />
                </div>

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1B2A22] bg-[#101813] px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#02C763] shadow-[0_0_8px_rgba(2,199,99,0.7)]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A7B3AB]">
                    Wallet Required
                  </span>
                </div>

                <h2 className="mb-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Connect your wallet
                </h2>

                <p className="mx-auto mb-7 max-w-[540px] text-center text-sm leading-6 text-[#A7B3AB] sm:text-[15px]">
                  Connect a Stellar wallet to access your Business workspace,
                  manage campaigns, and approve transactions.
                </p>

                <button
                  type="button"
                  className="mx-auto inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-5 text-sm font-semibold text-[#031009] transition-all duration-200 hover:-translate-y-px hover:bg-[#02D86F] hover:shadow-[0_10px_28px_rgba(2,199,99,0.18)] active:translate-y-0 active:scale-[0.98]"
                >
                  <WalletIcon />
                  Connect Wallet
                </button>

                <p className="mt-3 text-[11px] text-[#758078]">
                  Axionvera never has access to your private keys.
                </p>

                {/* Capabilities */}
                <div className="my-8 h-px w-full bg-[#1B2A22]" />

                <div className="text-left">
                  <h3 className="mb-4 text-sm font-semibold text-[#F3F7F4]">
                    Once connected, you can:
                  </h3>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Create and fund reward campaigns",
                      "Define qualifying actions and reward rules",
                      "Manage authorised verifiers",
                      "Monitor activity and reward agents",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-[10px] border border-[#1B2A22]/70 bg-[#101813]/70 px-3.5 py-3 text-xs leading-5 text-[#A7B3AB]"
                      >
                        <span className="mt-0.5 text-[#02C763]">
                          <CheckIcon />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifecycle hint */}
                <div className="mt-8 rounded-xl border border-[#1B2A22]/70 bg-[#101412]/70 px-4 py-3">
                  <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-[#758078] sm:gap-3">
                    <span className="text-[#A7B3AB]">Connect wallet</span>
                    <span className="text-[#294034]">→</span>
                    <span className="text-[#A7B3AB]">Access workspace</span>
                    <span className="text-[#294034]">→</span>
                    <span className="font-medium text-[#02D86F]">
                      Approve transactions
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

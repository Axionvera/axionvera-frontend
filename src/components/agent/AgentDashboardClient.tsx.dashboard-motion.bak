"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AgentOverviewConnected,
} from "@/components/agent/AgentOverviewConnected";

import {
  AgentRewardsConnected,
} from "@/components/agent/AgentRewardsConnected";

import {
  AgentActivityConnected,
} from "@/components/agent/AgentActivityConnected";

import {
  AgentActivityDetailConnected,
} from "@/components/agent/AgentActivityDetailConnected";

import {
  AgentClaimReviewConnected,
} from "@/components/agent/AgentClaimReviewConnected";

import {
  AgentClaimApprovalConnected,
} from "@/components/agent/AgentClaimApprovalConnected";

import {
  AgentClaimProcessingConnected,
} from "@/components/agent/AgentClaimProcessingConnected";

import {
  AgentClaimSuccessConnected,
} from "@/components/agent/AgentClaimSuccessConnected";

function OverviewIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <rect height="7" rx="1.5" width="7" x="3" y="3" />
      <rect height="7" rx="1.5" width="7" x="14" y="3" />
      <rect height="7" rx="1.5" width="7" x="14" y="14" />
      <rect height="7" rx="1.5" width="7" x="3" y="14" />
    </svg>
  );
}

function RewardsIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path
        strokeLinecap="round"
        d="M7 10h10M7 14h4"
      />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <polyline
        points="22 12 18 12 15 21 9 3 6 12 2 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navigation = [
  {
    label: "Overview",
    href: "/app/agent",
    icon: OverviewIcon,
  },
  {
    label: "Rewards",
    href: "/app/agent/rewards",
    icon: RewardsIcon,
  },
  {
    label: "Activity",
    href: "/app/agent/activity",
    icon: ActivityIcon,
  },
];

export function AgentDashboardClient() {
  const pathname = usePathname();

  const pageTitle =
    pathname.startsWith("/app/agent/rewards")
      ? "Rewards"
      : pathname.startsWith("/app/agent/activity")
        ? "Activity"
        : "Overview";

  function isActive(href: string) {
    if (href === "/app/agent") {
      return pathname === "/app/agent";
    }

    return pathname.startsWith(href);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#101412] text-[#F3F7F4]">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden h-screen w-[256px] shrink-0 flex-col justify-between border-r border-[#1B2A22] bg-[#0C120F] lg:flex">

        <div className="flex min-h-0 flex-1 flex-col">

          {/* BRAND */}
          <Link
            href="/app"
            aria-label="Back to workspace selection"
            className="flex h-16 shrink-0 items-center gap-3 border-b border-[#1B2A22]/70 px-5 transition-colors hover:bg-[#101813]"
          >
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-[#1B2A22] bg-[#101813] p-1">
              <Image
                src="/axionvera-logo.png"
                alt="Axionvera"
                width={28}
                height={28}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <span className="block font-display text-sm font-bold uppercase tracking-wider text-white">
                AXIONVERA
              </span>

              <span className="block text-[10px] font-medium uppercase tracking-wide text-[#718277]">
                Agent Workspace
              </span>
            </div>
          </Link>

          {/* NAV */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const active =
                isActive(item.href);

              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative flex items-center gap-3 rounded-[10px] border px-3 py-2.5 text-sm font-medium transition-all",
                    active
                      ? "border-[#294034]/60 bg-[#16281E] text-white"
                      : "border-transparent text-[#9DA8A1] hover:border-[#1B2A22] hover:bg-[#142019] hover:text-white",
                  ].join(" ")}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-4 w-1 -translate-y-1/2 rounded-r-full bg-[#02C763]" />
                  )}

                  <span
                    className={
                      active
                        ? "text-[#02C763]"
                        : "text-[#718277]"
                    }
                  >
                    <Icon />
                  </span>

                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* SIDEBAR BOTTOM */}
        <div className="flex flex-col gap-2.5 border-t border-[#1B2A22] bg-[#0C120F] p-3">

          {/* NETWORK */}
          <div className="rounded-[10px] border border-[#1B2A22] bg-[#101813] p-3">
            <div className="flex items-center gap-2 text-xs font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-[#02C763]" />
              Stellar Testnet
            </div>

            <p className="mt-1.5 text-[10px] text-[#718277]">
              Testnet environment
            </p>
          </div>

          {/* AGENT */}
          <div className="flex items-center gap-2.5 rounded-[10px] border border-[#1B2A22] bg-[#101813] p-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#294034] bg-[#142019] text-xs font-semibold text-[#02C763]">
              AT
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-white">
                Amina T.
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-[#9DA8A1]">
                  GBXE7...AELC
                </span>

                <span className="text-[10px] font-medium text-[#02C763]">
                  Testnet
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="px-2 py-1 text-xs text-[#718277] transition-colors hover:text-white"
          >
            Back to website
          </Link>
        </div>
      </aside>

      {/* ================= APPLICATION ================= */}
      <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col">

        {/* TOPBAR */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#1B2A22] bg-[#0C120F] px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3">
            <h1
              className="font-display font-semibold tracking-tight text-white"
              style={{
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              {pageTitle}
            </h1>

            <div className="hidden h-4 w-px bg-[#1B2A22] sm:block" />

            <span className="hidden text-xs font-medium uppercase tracking-wider text-[#718277] sm:block">
              Agent Workspace
            </span>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 rounded-[10px] border border-[#1B2A22] bg-[#101813] px-3 py-1.5 text-xs font-medium text-white sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#02C763]" />
              Stellar Testnet
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-[10px] border border-[#1B2A22] bg-[#101813] px-3 py-1.5 text-xs transition-colors hover:border-[#294034] hover:bg-[#142019]"
            >
              <span className="h-2 w-2 rounded-full bg-[#02C763]" />

              <span className="font-mono text-[#E1E3DF]">
                GBXE7...AELC
              </span>
            </button>
          </div>
        </header>

        {/* MOBILE NAV */}
        <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-[#1B2A22] bg-[#0C120F] px-3 py-2 lg:hidden">
          {navigation.map((item) => {
            const active =
              isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                  active
                    ? "bg-[#16281E] text-[#02C763]"
                    : "text-[#9DA8A1] hover:bg-[#142019] hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* MAIN */}
        <main className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-[#101412] p-4 pb-10 sm:p-6 sm:pb-12 lg:p-8 lg:pb-14">
          {pathname === "/app/agent" ? (
            <AgentOverviewConnected />
          ) : pathname === "/app/agent/rewards/claim/success" ? (
            <AgentClaimSuccessConnected />
          ) : pathname === "/app/agent/rewards/claim/processing" ? (
            <AgentClaimProcessingConnected />
          ) : pathname === "/app/agent/rewards/claim/approval" ? (
            <AgentClaimApprovalConnected />
          ) : pathname === "/app/agent/rewards/claim" ? (
            <AgentClaimReviewConnected />
          ) : pathname === "/app/agent/rewards" ? (
            <AgentRewardsConnected />
          ) : /^\/app\/agent\/activity\/\d+$/.test(pathname) ? (
            <AgentActivityDetailConnected />
          ) : pathname === "/app/agent/activity" ? (
            <AgentActivityConnected />
          ) : (
            <div className="mx-auto w-full max-w-3xl py-12 text-center">
              <p className="text-sm text-[#718277]">
                This Agent workspace page will be built next.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

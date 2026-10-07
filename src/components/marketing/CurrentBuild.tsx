"use client";

import { useState } from "react";

const CONTRACT_ID =
  "CAAXCSTGNQ6S73XRXYSKAEEWZNVS7XWA4EF67DRWDPS2XFSXXA3AC2C6";

const statuses = [
  {
    label: "Stellar Testnet",
    value: "Active",
  },
  {
    label: "Campaign lifecycle",
    value: "Implemented",
  },
  {
    label: "TypeScript SDK",
    value: "Working",
  },
  {
    label: "End-to-end lifecycle",
    value: "Tested",
  },
];

const contractFeatures = [
  "campaign creation",
  "funding",
  "reward rules",
  "authorised verifiers",
  "pause / resume / close",
  "reward allocation",
  "claims",
  "unused fund withdrawal",
];

const sdkFeatures = [
  "Stellar reads and writes",
  "wallet signing",
  "transaction submission",
  "typed errors",
  "typed events",
  "React hooks",
  "RPC event retrieval",
];

function ContractIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
    >
      <path
        d="M5 5h14v14H5V5Zm4 4-2 3 2 3m6-6 2 3-2 3m-3-7-1 8"
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

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
    >
      <path
        d="M9 8h10v11H9V8Zm-4 8H4V4h11v1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TechnicalTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-[8px] border border-border-subtle bg-[#1d211e] px-2.5 py-1 text-[13px] text-text-secondary">
      {children}
    </span>
  );
}

export function CurrentBuild() {
  const [copied, setCopied] = useState(false);

  async function copyContractId() {
    try {
      await navigator.clipboard.writeText(CONTRACT_ID);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="current-build"
      aria-labelledby="current-build-heading"
      className="relative overflow-hidden bg-background px-6 py-24 md:py-28 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[320px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-14">
        {/* ======================================================
            HEADER
            ====================================================== */}
        <div className="flex max-w-3xl flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border-subtle bg-[#272b28] px-3 py-1.5">
            <span className="ax-section-dot-wrap relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-primary">
              Current Build
            </span>
          </div>

          <div>
            <h2
              id="current-build-heading"
              className="font-display text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-text-primary lg:text-[60px] lg:leading-[64px]"
            >
              Already working on Stellar testnet.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary lg:text-xl lg:leading-8">
              Axionvera&apos;s campaign lifecycle is implemented through
              Soroban smart contracts and a typed SDK, with the core flow
              tested end to end on Stellar testnet.
            </p>
          </div>
        </div>

        {/* ======================================================
            STATUS
            ====================================================== */}
        <div className="flex flex-col gap-8 rounded-[20px] border border-border-subtle bg-[#191c1a] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] lg:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-border-subtle pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="text-primary">
                <ContractIcon />
              </span>

              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-text-primary">
                Core architecture status
              </span>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-border-subtle bg-[#1d211e] px-3 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.1em] text-text-tertiary">
                Network
              </span>

              <span className="text-xs font-semibold text-text-primary">
                Stellar Testnet
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {statuses.map((status) => (
              <div
                key={status.label}
                className="flex items-center justify-between gap-3 rounded-[12px] border border-border-subtle bg-[#1d211e] p-5"
              >
                <span className="text-[13px] font-medium text-text-primary">
                  {status.label}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {status.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================
            TECHNICAL PROOF
            ====================================================== */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Contract */}
          <article className="flex flex-col justify-between gap-6 rounded-[20px] border border-border-subtle bg-[#191c1a] p-7 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">
                  Smart Contract
                </span>

                <span className="rounded-full border border-border-subtle bg-[#272b28] px-2.5 py-1 text-xs font-medium text-text-primary">
                  21 public methods
                </span>
              </div>

              <h3 className="font-display text-[30px] font-semibold leading-[38px] tracking-[-0.02em] text-text-primary">
                Campaign Contract
              </h3>

              <p className="text-sm leading-6 text-text-secondary">
                Soroban smart contract implementing campaign creation,
                funding, reward rules, authorised verifiers, lifecycle
                controls, reward allocation, claims, and unused-fund
                withdrawal.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {contractFeatures.map((feature) => (
                <TechnicalTag key={feature}>
                  {feature}
                </TechnicalTag>
              ))}
            </div>
          </article>

          {/* SDK */}
          <article className="flex flex-col justify-between gap-6 rounded-[20px] border border-border-subtle bg-[#191c1a] p-7 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">
                  Integration Layer
                </span>

                <span className="rounded-full border border-border-subtle bg-[#272b28] px-2.5 py-1 text-xs font-medium text-text-primary">
                  Typed campaign APIs
                </span>
              </div>

              <h3 className="font-display text-[30px] font-semibold leading-[38px] tracking-[-0.02em] text-text-primary">
                SDK
              </h3>

              <p className="text-sm leading-6 text-text-secondary">
                Type-safe APIs for integrating Axionvera campaign
                functionality into applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {sdkFeatures.map((feature) => (
                <TechnicalTag key={feature}>
                  {feature}
                </TechnicalTag>
              ))}
            </div>
          </article>

          {/* Tests */}
          <article className="flex flex-col justify-between gap-6 rounded-[20px] border border-border-subtle bg-[#191c1a] p-7 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">
                Test Suite
              </span>

              <h3 className="font-display text-[30px] font-semibold leading-[38px] tracking-[-0.02em] text-text-primary">
                Testing
              </h3>

              <p className="text-sm leading-6 text-text-secondary">
                The campaign lifecycle has been exercised end to end
                against Stellar testnet.
              </p>
            </div>

            <div className="rounded-[14px] border border-border-subtle bg-[#1d211e] p-5">
              <div className="flex items-end justify-between gap-4">
                <span className="font-display text-[44px] font-semibold leading-none tracking-[-0.04em] text-primary">
                  704
                </span>

                <span className="text-[13px] font-medium text-text-primary">
                  tests passing
                </span>
              </div>

              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#272b28]">
                <div className="h-full w-full rounded-full bg-primary" />
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[13px] text-text-secondary">
                <span className="text-primary">
                  <CheckIcon />
                </span>

                32 test files
              </div>
            </div>
          </article>
        </div>

        {/* ======================================================
            CONTRACT ID
            ====================================================== */}
        <div className="flex flex-col items-start justify-between gap-5 rounded-[20px] border border-border-subtle bg-[#191c1a] p-5 lg:flex-row lg:items-center lg:p-6">
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">
              Campaign contract
            </span>

            <div className="flex min-w-0 items-center gap-2 rounded-[10px] border border-border-subtle bg-[#0b0f0c] px-3 py-2">
              <code className="min-w-0 truncate text-xs text-text-primary">
                <span className="sm:hidden">
                  CAAXCSTG...A3AC2C6
                </span>

                <span className="hidden sm:inline lg:hidden">
                  CAAXCSTGNQ6S...SXXA3AC2C6
                </span>

                <span className="hidden lg:inline">
                  {CONTRACT_ID}
                </span>
              </code>
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={copyContractId}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] border border-border-subtle bg-[#1d211e] px-4 text-sm font-semibold text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
            >
              {copied ? (
                <>
                  <span className="text-primary">
                    <CheckIcon />
                  </span>
                  Copied
                </>
              ) : (
                <>
                  <CopyIcon />
                  Copy contract ID
                </>
              )}
            </button>

            <a
              href="https://github.com/Axionvera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] border border-border-subtle bg-[#1d211e] px-4 text-sm font-semibold text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.447-1.272.097-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.748-1.027 2.748-1.027.545 1.379.202 2.398.099 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>

              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

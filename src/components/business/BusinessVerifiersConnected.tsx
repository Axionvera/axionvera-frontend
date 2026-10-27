"use client";

import {
  businessVerifierDirectory,
} from "@/lib/axionveraData";

import Link from "next/link";
import { useMemo, useState } from "react";

type Verifier = {
  name: string;
  type: string;
  status: "Authorised" | "Inactive";
  campaigns: number;
  pending: number;
  verified: number;
  href?: string;
};

const verifierRows: Verifier[] =
  businessVerifierDirectory;

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m16.5 16.5 4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.9"
    >
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 18 6-6-6-6"
      />
    </svg>
  );
}

export function BusinessVerifiersConnected() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return verifierRows;
    }

    return verifierRows.filter((verifier) =>
      [
        verifier.name,
        verifier.type,
        verifier.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 pb-16">

      {/* HEADER */}
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Verifiers
          </h2>

          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#A7B3AB]">
            Manage the authorised teams and systems that
            confirm qualifying campaign activity.
          </p>
        </div>

        <Link
          href="/app/business/verifiers/new"
          className="inline-flex self-start items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-4 py-2.5 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
        >
          <PlusIcon />
          Add verifier
        </Link>
      </header>

      {/* SUMMARY */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
            Total verifiers
          </span>

          <p className="mt-3 font-display text-3xl font-semibold text-white">
            3
          </p>
        </div>

        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
            Authorised
          </span>

          <p className="mt-3 font-display text-3xl font-semibold text-[#02C763]">
            2
          </p>
        </div>

        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
            Pending verifications
          </span>

          <p className="mt-3 font-display text-3xl font-semibold text-white">
            5
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <div className="relative w-full max-w-sm">
        <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-[#718277]">
          <SearchIcon />
        </span>

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search verifiers..."
          className="w-full rounded-[10px] border border-[#1B2A22] bg-[#0C120F] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#718277] focus:border-[#294034]"
        />
      </div>

      {/* VERIFIER LIST */}
      <section className="overflow-hidden rounded-xl border border-[#1B2A22] bg-[#0C120F]">
        <div className="hidden grid-cols-[2fr_1.2fr_1fr_.8fr_.8fr_40px] gap-4 border-b border-[#1B2A22] bg-[#101813] px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-[#718277] md:grid">
          <span>Verifier</span>
          <span>Type</span>
          <span>Status</span>
          <span>Campaigns</span>
          <span>Pending</span>
          <span />
        </div>

        <div className="divide-y divide-[#1B2A22]">
          {filtered.map((verifier) => {
            const content = (
              <>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {verifier.name}
                  </p>

                  <p className="mt-1 text-xs text-[#718277] md:hidden">
                    {verifier.type}
                  </p>
                </div>

                <span className="hidden text-sm text-[#A7B3AB] md:block">
                  {verifier.type}
                </span>

                <div>
                  <span
                    className={[
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                      verifier.status === "Authorised"
                        ? "bg-[#02C763]/10 text-[#02C763]"
                        : "bg-[#718277]/10 text-[#8A938D]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-1.5 w-1.5 rounded-full",
                        verifier.status === "Authorised"
                          ? "bg-[#02C763]"
                          : "bg-[#718277]",
                      ].join(" ")}
                    />

                    {verifier.status}
                  </span>
                </div>

                <span className="hidden text-sm font-medium text-white md:block">
                  {verifier.campaigns}
                </span>

                <span className="hidden text-sm font-medium text-white md:block">
                  {verifier.pending}
                </span>

                <span className="ml-auto text-[#718277]">
                  {verifier.href && <ChevronRight />}
                </span>
              </>
            );

            if (verifier.href) {
              return (
                <Link
                  key={verifier.name}
                  href={verifier.href}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-[#142019] md:grid-cols-[2fr_1.2fr_1fr_.8fr_.8fr_40px]"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={verifier.name}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4 md:grid-cols-[2fr_1.2fr_1fr_.8fr_.8fr_40px]"
              >
                {content}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-sm font-medium text-white">
                No verifiers found
              </p>

              <p className="mt-1 text-xs text-[#718277]">
                Try a different search term.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

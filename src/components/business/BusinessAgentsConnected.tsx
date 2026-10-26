"use client";

import { useMemo, useState } from "react";

type Agent = {
  initials: string;
  name: string;
  status: "Active" | "Inactive";
  campaigns: number;
  verified: number;
  pending: number;
  claimable: number;
  lastActivity: string;
};

const agents: Agent[] = [
  {
    initials: "SA",
    name: "Sarah A.",
    status: "Active",
    campaigns: 2,
    verified: 18,
    pending: 0,
    claimable: 25,
    lastActivity: "15m ago",
  },
  {
    initials: "DK",
    name: "David K.",
    status: "Active",
    campaigns: 2,
    verified: 14,
    pending: 0,
    claimable: 18,
    lastActivity: "1h ago",
  },
  {
    initials: "AT",
    name: "Amina T.",
    status: "Active",
    campaigns: 1,
    verified: 9,
    pending: 1,
    claimable: 15,
    lastActivity: "3h ago",
  },
  {
    initials: "TO",
    name: "Tunde O.",
    status: "Active",
    campaigns: 2,
    verified: 12,
    pending: 0,
    claimable: 20,
    lastActivity: "Yesterday",
  },
  {
    initials: "FR",
    name: "Fatima R.",
    status: "Active",
    campaigns: 1,
    verified: 7,
    pending: 1,
    claimable: 10,
    lastActivity: "Yesterday",
  },
];

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
      <path
        strokeLinecap="round"
        d="m16.5 16.5 4 4"
      />
    </svg>
  );
}

export function BusinessAgentsConnected() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<
    "all" | "pending" | "active"
  >("all");

  const filteredAgents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return agents.filter((agent) => {
      const matchesSearch =
        !query ||
        [
          agent.name,
          agent.status,
          agent.lastActivity,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesFilter =
        filter === "all" ||
        (filter === "pending" &&
          agent.pending > 0) ||
        (filter === "active" &&
          agent.status === "Active");

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 pb-16">

      {/* HEADER */}
      <header>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Agents
        </h2>

        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#A7B3AB]">
          View agents participating in your campaigns,
          their verified activity, and claimable rewards.
        </p>
      </header>

      {/* SUMMARY */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Total agents
            </span>

            <span className="h-2 w-2 rounded-full bg-[#718277]" />
          </div>

          <p className="mt-3 font-display text-3xl font-semibold text-white">
            24
          </p>
        </div>

        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Verified activity
            </span>

            <span className="h-2 w-2 rounded-full bg-[#02C763]" />
          </div>

          <p className="mt-3 font-display text-3xl font-semibold text-white">
            71
          </p>
        </div>

        <div className="rounded-xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
              Pending activity
            </span>

            <span className="h-2 w-2 rounded-full bg-[#F5B942]" />
          </div>

          <p className="mt-3 font-display text-3xl font-semibold text-white">
            6
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div className="inline-flex self-start rounded-full bg-[#0C120F] p-1">
          {[
            ["all", "All agents"],
            ["active", "Active"],
            ["pending", "With pending activity"],
          ].map(([value, label]) => {
            const active = filter === value;

            return (
              <button
                key={value}
                type="button"
                onClick={() =>
                  setFilter(
                    value as
                      | "all"
                      | "pending"
                      | "active"
                  )
                }
                className={[
                  "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "bg-[#1D211E] font-semibold text-white"
                    : "text-[#A7B3AB] hover:text-white",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-[#718277]">
            <SearchIcon />
          </span>

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search agents..."
            className="w-full rounded-full border-0 bg-[#0C120F] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#718277] focus:bg-[#142019] focus:ring-0"
          />
        </div>
      </section>

      {/* AGENTS TABLE */}
      <section className="overflow-hidden rounded-xl border border-[#1B2A22] bg-[#0C120F]">

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">

            <thead>
              <tr className="border-b border-[#1B2A22] bg-[#101813] text-[10px] font-semibold uppercase tracking-wider text-[#9DA8A1]">
                <th className="px-6 py-3.5">
                  Agent
                </th>

                <th className="px-6 py-3.5">
                  Status
                </th>

                <th className="px-6 py-3.5">
                  Campaigns
                </th>

                <th className="px-6 py-3.5">
                  Verified
                </th>

                <th className="px-6 py-3.5">
                  Pending
                </th>

                <th className="px-6 py-3.5">
                  Claimable
                </th>

                <th className="px-6 py-3.5">
                  Last activity
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#1B2A22]/60">
              {filteredAgents.map((agent) => (
                <tr
                  key={agent.name}
                  className="transition-colors hover:bg-[#142019]"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#294034]/60 bg-[#16281E] text-xs font-semibold text-[#02C763]">
                        {agent.initials}
                      </div>

                      <span className="whitespace-nowrap text-sm font-semibold text-white">
                        {agent.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                      {agent.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-white">
                    {agent.campaigns}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-white">
                    {agent.verified}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={[
                        "text-sm font-medium",
                        agent.pending > 0
                          ? "text-[#F5B942]"
                          : "text-[#718277]",
                      ].join(" ")}
                    >
                      {agent.pending}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-[#02C763]">
                    {agent.claimable} USDC
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-xs text-[#718277]">
                    {agent.lastActivity}
                  </td>
                </tr>
              ))}

              {filteredAgents.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-12 text-center"
                  >
                    <p className="text-sm font-medium text-white">
                      No agents found
                    </p>

                    <p className="mt-1 text-xs text-[#718277]">
                      Adjust the filter or search query.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#1B2A22] bg-[#101813] px-6 py-4 text-xs text-[#9DA8A1]">
          Showing{" "}
          <strong className="font-semibold text-white">
            {filteredAgents.length}
          </strong>{" "}
          of 24 agents
        </div>
      </section>
    </div>
  );
}

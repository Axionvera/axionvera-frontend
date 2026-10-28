"use client";

import { useRouter } from "next/navigation";

import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getActivitiesForAgent,
  requireAgentRewardSummary,
  requireCampaign,
} from "@/lib/axionveraData";

type ActivityStatus =
  | "verified"
  | "pending";

type CampaignType =
  | "merchant"
  | "referral";

type Activity = {
  id: number;
  activity: string;
  campaign: string;
  campaignType: CampaignType;
  status: ActivityStatus;
  reward: number | null;
  time: string;
};

const activities: Activity[] =
  getActivitiesForAgent("amina-t").map(
    (item, index) => {
      const campaign =
        requireCampaign(item.campaignId);

      return {
        id: index + 1,
        activity: item.activity,
        campaign: campaign.name,
        campaignType:
          item.campaignId === "referral-growth"
            ? "referral"
            : "merchant",
        status: item.status,
        reward: item.rewardAmount,
        time: item.submittedLabel,
      };
    }
  );

const activitySummary =
  requireAgentRewardSummary("amina-t");

const PAGE_SIZE = 5;

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

function MerchantIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 10h16M5 10l1-5h12l1 5M6 10v9h12v-9M9 19v-5h6v5"
      />
    </svg>
  );
}

function ReferralIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2" />
      <path
        strokeLinecap="round"
        d="M4 19c.5-3 2.2-5 5-5s4.5 2 5 5M14.5 15c1.9.1 3.2 1.4 3.5 3"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="8" />
      <path
        strokeLinecap="round"
        d="M12 8v4l2.5 1.5"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 18-6-6 6-6"
      />
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
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 18 6-6-6-6"
      />
    </svg>
  );
}

export function AgentActivityConnected() {
  const router = useRouter();

  const [status, setStatus] = useState<
    "all" | ActivityStatus
  >("all");

  const [campaign, setCampaign] = useState<
    "all" | CampaignType
  >("all");

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    return activities.filter((item) => {
      const matchesStatus =
        status === "all" ||
        item.status === status;

      const matchesCampaign =
        campaign === "all" ||
        item.campaignType === campaign;

      const matchesSearch =
        !query ||
        [
          item.activity,
          item.campaign,
          item.status,
          item.time,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesStatus &&
        matchesCampaign &&
        matchesSearch
      );
    });
  }, [status, campaign, search]);

  useEffect(() => {
    setPage(1);
  }, [status, campaign, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PAGE_SIZE)
  );

  const safePage = Math.min(
    page,
    totalPages
  );

  const pageRows = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 pb-16">

      {/* HEADER */}
      <header>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Activity
        </h2>

        <p className="mt-1.5 text-sm leading-6 text-[#A7B3AB]">
          View your qualifying activity and track its
          verification and reward status.
        </p>
      </header>

      {/* SUMMARY */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
            Total activity
          </span>

          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">{activitySummary.totalActivity}</p>
        </div>

        <div className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
              Verified
            </span>

            <span className="h-2 w-2 rounded-full bg-[#02C763]" />
          </div>

          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#02C763]">{activitySummary.verifiedActivity}</p>
        </div>

        <div className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
              Pending verification
            </span>

            <span className="h-2 w-2 rounded-full bg-[#F5B942]" />
          </div>

          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5B942]">{activitySummary.pendingActivity}</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        {/* STATUS */}
        <div className="inline-flex self-start rounded-[10px] bg-[#0C120F] p-1">
          {[
            ["all", "All activity"],
            ["verified", "Verified"],
            [
              "pending",
              "Pending verification",
            ],
          ].map(([value, label]) => {
            const active =
              status === value;

            return (
              <button
                key={value}
                type="button"
                onClick={() =>
                  setStatus(
                    value as
                      | "all"
                      | ActivityStatus
                  )
                }
                className={[
                  "rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "bg-[#272B28] text-white"
                    : "text-[#718277] hover:bg-[#142019] hover:text-white",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* SEARCH + CAMPAIGN */}
        <div className="flex flex-col gap-3 sm:flex-row">

          <select
            value={campaign}
            onChange={(event) =>
              setCampaign(
                event.target.value as
                  | "all"
                  | CampaignType
              )
            }
            className="h-10 min-w-[210px] cursor-pointer rounded-[10px] border-0 bg-[#0C120F] px-3.5 text-xs text-white outline-none focus:ring-0"
          >
            <option value="all">
              All campaigns
            </option>

            <option value="merchant">
              {requireCampaign("merchant-growth").name}
            </option>

            <option value="referral">
              {requireCampaign("referral-growth").name}
            </option>
          </select>

          <div className="relative min-w-[240px]">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#718277]">
              <SearchIcon />
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search activity..."
              className="h-10 w-full rounded-[10px] border-0 bg-[#0C120F] pl-9 pr-3.5 text-xs text-white outline-none placeholder:text-[#718277] focus:ring-0"
            />
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="overflow-hidden rounded-2xl border border-[#1B2A22] bg-[#0C120F]">

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left">

            <thead>
              <tr className="bg-[#101813]">
                <th className="px-6 py-3.5 text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Activity
                </th>

                <th className="px-6 py-3.5 text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Campaign
                </th>

                <th className="px-6 py-3.5 text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Status
                </th>

                <th className="px-6 py-3.5 text-right text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Reward
                </th>

                <th className="px-6 py-3.5 text-right text-[10px] font-semibold uppercase tracking-wider text-[#718277]">
                  Time
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#1B2A22]/60">
              {pageRows.map((item) => {
                const pending =
                  item.status === "pending";

                return (
                  <tr
                    key={item.id}
                    role="link"
                    tabIndex={0}
                    onClick={() =>
                      router.push(
                        `/app/agent/activity/${item.id}`
                      )
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();
                        router.push(
                          `/app/agent/activity/${item.id}`
                        );
                      }
                    }}
                    className="cursor-pointer transition-colors hover:bg-[#142019] focus:bg-[#142019] focus:outline-none"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={[
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#272B28]",
                            pending
                              ? "text-[#F5B942]"
                              : "text-[#02C763]",
                          ].join(" ")}
                        >
                          {pending ? (
                            <ClockIcon />
                          ) : item.campaignType ===
                            "merchant" ? (
                            <MerchantIcon />
                          ) : (
                            <ReferralIcon />
                          )}
                        </div>

                        <span className="text-sm font-medium text-white">
                          {item.activity}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-[#718277]">
                      {item.campaign}
                    </td>

                    <td className="px-6 py-4">
                      {pending ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5B942]/10 px-2.5 py-1 text-xs font-medium text-[#F5B942]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#F5B942]" />
                          Pending verification
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-2.5 py-1 text-xs font-medium text-[#02C763]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                          Verified
                        </span>
                      )}
                    </td>

                    <td
                      className={[
                        "px-6 py-4 text-right text-sm",
                        pending
                          ? "text-[#718277]"
                          : "font-semibold text-[#02C763]",
                      ].join(" ")}
                    >
                      {item.reward === null
                        ? "—"
                        : `+${item.reward} USDC`}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 text-right text-xs text-[#718277]">
                      {item.time}
                    </td>
                  </tr>
                );
              })}

              {pageRows.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center"
                  >
                    <p className="text-sm font-medium text-white">
                      No activity found
                    </p>

                    <p className="mt-1 text-xs text-[#718277]">
                      Adjust your filters or search.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#1B2A22] bg-[#101813] px-6 py-4 sm:flex-row">

          <span className="text-xs text-[#718277]">
            Showing{" "}
            <span className="font-medium text-white">
              {pageRows.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-white">
              {filtered.length}
            </span>{" "}
            activities
          </span>

          <div className="flex items-center gap-1.5">

            <button
              type="button"
              disabled={safePage === 1}
              onClick={() =>
                setPage((current) =>
                  Math.max(1, current - 1)
                )
              }
              className="inline-flex items-center gap-1 rounded-[10px] bg-[#0C120F] px-3 py-1.5 text-xs text-white transition-colors hover:bg-[#142019] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft />
              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() =>
                  setPage(pageNumber)
                }
                className={[
                  "flex h-8 w-8 items-center justify-center rounded-[10px] text-xs font-medium transition-colors",
                  safePage === pageNumber
                    ? "bg-[#02C763] text-[#050806]"
                    : "text-[#718277] hover:bg-[#142019] hover:text-white",
                ].join(" ")}
              >
                {pageNumber}
              </button>
            ))}

            <button
              type="button"
              disabled={
                safePage === totalPages
              }
              onClick={() =>
                setPage((current) =>
                  Math.min(
                    totalPages,
                    current + 1
                  )
                )
              }
              className="inline-flex items-center gap-1 rounded-[10px] bg-[#0C120F] px-3 py-1.5 text-xs text-white transition-colors hover:bg-[#142019] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

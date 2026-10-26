import Link from "next/link";

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="2"
    >
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CampaignIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15M18 13a3 3 0 1 0 0-6M5.436 13.683A4.001 4.001 0 0 1 7 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 0 1-1.564-.317Z"
      />
    </svg>
  );
}

function VerifierIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
      strokeWidth="1.8"
    >
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
      strokeWidth="1.8"
    >
      <polyline
        points="22 12 18 12 15 21 9 3 6 12 2 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const campaigns = [
  {
    name: "Merchant Growth Campaign",
    reward: "5 USDC",
    funded: "1,000 USDC",
    allocated: "325 USDC",
    progress: 32.5,
  },
  {
    name: "Customer Activation Campaign",
    reward: "3 USDC",
    funded: "750 USDC",
    allocated: "210 USDC",
    progress: 28,
  },
  {
    name: "Referral Growth Campaign",
    reward: "5 USDC",
    funded: "750 USDC",
    allocated: "290 USDC",
    progress: 38.6,
  },
];

const activity = [
  {
    agent: "Sarah A.",
    action: "Merchant onboarded",
    reward: "+5 USDC allocated",
    time: "12m ago",
  },
  {
    agent: "David K.",
    action: "Customer activated",
    reward: "+3 USDC allocated",
    time: "44m ago",
  },
  {
    agent: "Amina T.",
    action: "Referral converted",
    reward: "+5 USDC allocated",
    time: "2h ago",
  },
];

const metrics = [
  {
    label: "Active campaigns",
    value: "3",
  },
  {
    label: "Campaign funds",
    value: "2,500",
    unit: "USDC",
  },
  {
    label: "Rewards allocated",
    value: "825",
    unit: "USDC",
    accent: true,
  },
  {
    label: "Available funds",
    value: "1,675",
    unit: "USDC",
  },
];

export function BusinessOverviewConnected() {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Page intro */}
      <section className="flex flex-col gap-4 pb-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            Business overview
          </h2>

          <p className="mt-1 text-sm text-[#8E9B93]">
            Monitor campaign funding, reward allocation and recent agent activity.
          </p>
        </div>

        <Link
          href="/app/business/campaigns/new"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-[#02C763] px-4 text-sm font-semibold text-[#0B0F0C] transition-all duration-200 hover:-translate-y-px hover:bg-[#02D86F] hover:shadow-[0_8px_24px_rgba(2,199,99,0.14)] active:translate-y-0"
        >
          <PlusIcon />
          Create Campaign
        </Link>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8E9B93]">
              {metric.label}
            </span>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span
                className={[
                  "font-display text-3xl font-semibold tabular-nums",
                  metric.accent ? "text-[#02C763]" : "text-white",
                ].join(" ")}
              >
                {metric.value}
              </span>

              {metric.unit && (
                <span
                  className={
                    metric.accent
                      ? "text-sm text-[#02C763]/80"
                      : "text-sm text-[#8E9B93]"
                  }
                >
                  {metric.unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Main dashboard grid */}
      <section className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        {/* Active campaigns */}
        <div className="flex flex-col rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5 xl:col-span-7">
          <div className="flex items-center justify-between border-b border-[#1B2A22] pb-4">
            <h3 className="font-display text-lg font-semibold text-white">
              Active campaigns
            </h3>

            <Link
              href="/app/business/campaigns"
              className="group inline-flex items-center gap-1 text-xs font-medium text-[#8E9B93] transition-colors hover:text-white"
            >
              View all campaigns
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#1B2A22]/70 text-[10px] uppercase tracking-wider text-[#627368]">
                  <th className="py-3 pr-4 font-medium">Campaign</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 text-right font-medium">Reward</th>
                  <th className="px-3 py-3 text-right font-medium">Funded</th>
                  <th className="px-3 py-3 text-right font-medium">Allocated</th>
                  <th className="w-32 py-3 pl-4 font-medium">Progress</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#1B2A22]/40 text-sm">
                {campaigns.map((campaign) => (
                  <tr
                    key={campaign.name}
                    className="transition-colors hover:bg-[#101813]/60"
                  >
                    <td className="whitespace-nowrap py-4 pr-4 font-medium text-white">
                      {campaign.name}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#294034] bg-[#14281E] px-2.5 py-0.5 text-[11px] text-[#02C763]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                        Active
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-right tabular-nums text-[#E1E3DF]">
                      {campaign.reward}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-right tabular-nums text-[#8E9B93]">
                      {campaign.funded}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-right tabular-nums text-white">
                      {campaign.allocated}
                    </td>

                    <td className="whitespace-nowrap py-4 pl-4">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#16281E]">
                          <div
                            className="h-1.5 rounded-full bg-[#02C763]"
                            style={{ width: `${campaign.progress}%` }}
                          />
                        </div>

                        <span className="w-9 text-right font-mono text-[11px] text-[#8E9B93]">
                          {campaign.progress.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 xl:col-span-5">
          {/* Activity */}
          <div className="flex flex-col rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-5">
            <div className="flex items-center justify-between border-b border-[#1B2A22] pb-4">
              <h3 className="font-display text-lg font-semibold text-white">
                Recent activity
              </h3>

              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#627368]">
                Live stream
              </span>
            </div>

            <div className="mt-4 divide-y divide-[#1B2A22]/50">
              {activity.map((event) => (
                <div
                  key={`${event.agent}-${event.time}`}
                  className="flex items-start justify-between gap-3 py-3.5 first:pt-1 last:pb-1"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-semibold text-white">
                        {event.agent}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#294034]" />

                      <span className="truncate text-sm text-[#8E9B93]">
                        {event.action}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-full border border-[#294034] bg-[#14281E] px-2 py-0.5 text-[10px] text-[#02C763]">
                        Verified
                      </span>

                      <span className="text-xs font-medium text-[#02C763]">
                        {event.reward}
                      </span>
                    </div>
                  </div>

                  <span className="shrink-0 pt-0.5 text-[11px] text-[#627368]">
                    {event.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-4">
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#8E9B93]">
              Quick actions
            </h3>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 xl:grid-cols-3">
              <Link
                href="/app/business/campaigns/new"
                className="group flex flex-col items-center justify-center rounded-[10px] border border-[#1B2A22] bg-[#142019] p-3 text-white transition-all duration-150 hover:border-[#294034]"
              >
                <span className="mb-1 text-[#8E9B93] transition-colors group-hover:text-white">
                  <CampaignIcon />
                </span>
                <span className="text-center text-xs">Create Campaign</span>
              </Link>

              <Link
                href="/app/business/verifiers"
                className="group flex flex-col items-center justify-center rounded-[10px] border border-[#1B2A22] bg-[#142019] p-3 text-white transition-all duration-150 hover:border-[#294034]"
              >
                <span className="mb-1 text-[#8E9B93] transition-colors group-hover:text-white">
                  <VerifierIcon />
                </span>
                <span className="text-center text-xs">Add Verifier</span>
              </Link>

              <Link
                href="/app/business/activity"
                className="group flex flex-col items-center justify-center rounded-[10px] border border-[#1B2A22] bg-[#142019] p-3 text-white transition-all duration-150 hover:border-[#294034]"
              >
                <span className="mb-1 text-[#8E9B93] transition-colors group-hover:text-white">
                  <ActivityIcon />
                </span>
                <span className="text-center text-xs">View Activity</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

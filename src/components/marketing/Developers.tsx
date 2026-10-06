function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
    >
      <path
        d="m9 7-5 5 5 5m6-10 5 5-5 5m-2-12-2 14"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BalanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
    >
      <path
        d="M4 7h16v12H4V7Zm3-3h10v3H7V4Zm1 8h4m4 0h1"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettlementIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
    >
      <path
        d="M5 8h14M5 16h14M8 5 5 8l3 3m8 2 3 3-3 3"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const pipeline = [
  {
    number: "01",
    label: "Product",
    title: "Campaign setup",
    description:
      "Businesses create and fund campaigns, define qualifying actions, set reward amounts, and assign authorised verifiers.",
    accent: false,
  },
  {
    number: "02",
    label: "SDK",
    title: "Axionvera SDK",
    description:
      "Typed application APIs connect campaign actions, wallet signing, reads, writes, events, and transaction submission.",
    accent: false,
  },
  {
    number: "03",
    label: "Smart contract",
    title: "Soroban contract",
    description:
      "Campaign contracts manage funding, verification, reward allocation, campaign lifecycle, and agent claims.",
    accent: true,
  },
  {
    number: "04",
    label: "Settlement",
    title: "Stellar",
    description:
      "Claimed rewards settle through Stellar using supported assets such as USDC.",
    accent: false,
  },
];

const pillars = [
  {
    title: "Programmable campaign logic",
    description:
      "Campaign creation, funding, verification, reward allocation, lifecycle controls, and claims are handled through Soroban smart contracts.",
    icon: <CodeIcon />,
  },
  {
    title: "Transparent reward state",
    description:
      "Businesses and agents can track campaign funds, allocated rewards, available funds, earned rewards, and claimable balances.",
    icon: <BalanceIcon />,
  },
  {
    title: "Stellar settlement",
    description:
      "Rewards can settle using assets supported on Stellar, including USDC.",
    icon: <SettlementIcon />,
  },
];

export function Developers() {
  return (
    <section
      id="developers"
      aria-labelledby="developers-heading"
      className="relative scroll-mt-[72px] overflow-hidden bg-background px-6 py-24 md:py-28 lg:px-12"
    >
      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="ax-developers-grid pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 lg:gap-24">
        {/* Heading */}
        <div className="flex max-w-3xl flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border-subtle bg-[#1d211e] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
              Built on Stellar
            </span>
          </div>

          <h2
            id="developers-heading"
            className="font-display text-[32px] font-semibold leading-[38px] tracking-[-0.025em] text-text-primary lg:text-[60px] lg:leading-[64px]"
          >
            Built for rewards that can move with your business.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-text-secondary lg:text-xl lg:leading-8">
            Axionvera uses a typed SDK, Soroban smart contracts, and Stellar
            settlement to make campaign rules programmable, reward state
            transparent, and claims easy to track.
          </p>
        </div>

        {/* Architecture flow */}
        <div className="relative w-full rounded-[20px] border border-border-subtle bg-[#1d211e] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.24)] lg:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-border-subtle pb-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-base font-semibold text-text-primary">
                Axionvera architecture
              </span>
            </div>

            <span className="text-sm text-text-secondary">
              From campaign setup to Stellar settlement
            </span>
          </div>

          <div className="relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {pipeline.map((item, index) => (
              <div
                key={item.number}
                className={[
                  "relative flex min-h-[220px] flex-col rounded-[16px] border bg-[#191c1a] p-6 transition-colors lg:p-7",
                  item.accent
                    ? "border-primary/40 shadow-[0_0_24px_rgba(2,199,99,0.06)] hover:border-primary"
                    : "border-border-subtle hover:border-border-strong",
                ].join(" ")}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className={[
                      "text-xs font-semibold uppercase tracking-[0.12em]",
                      item.accent
                        ? "text-primary"
                        : "text-text-secondary",
                    ].join(" ")}
                  >
                    {item.number}
                  </span>

                  <span
                    className={[
                      "rounded-full border px-2.5 py-1 text-xs font-medium",
                      item.accent
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border-subtle bg-[#272b28] text-text-secondary",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>

                {index < pipeline.length - 1 && (
                  <div className="absolute -right-3.5 top-1/2 z-20 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-[#272b28] text-text-secondary lg:flex">
                    <ArrowIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Supporting pillars */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-[20px] border border-border-subtle bg-[#1d211e] p-7 transition-colors duration-200 hover:border-border-strong lg:p-8"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-[10px] border border-primary/20 bg-[#0b0f0c] text-primary">
                {pillar.icon}
              </div>

              <h3 className="font-display text-[22px] font-semibold leading-[30px] tracking-[-0.01em] text-text-primary">
                {pillar.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

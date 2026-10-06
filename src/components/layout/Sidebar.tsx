"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";

type IconName =
  | "overview"
  | "campaigns"
  | "agents"
  | "verifiers"
  | "activity"
  | "settings";

interface NavigationItem {
  label: string;
  href: string;
  icon: IconName;
}

const mainNavigation: NavigationItem[] = [
  {
    label: "Overview",
    href: "/overview",
    icon: "overview",
  },
  {
    label: "Campaigns",
    href: "/campaigns",
    icon: "campaigns",
  },
  {
    label: "Agents",
    href: "/agents",
    icon: "agents",
  },
  {
    label: "Verifiers",
    href: "/verifiers",
    icon: "verifiers",
  },
  {
    label: "Activity",
    href: "/activity",
    icon: "activity",
  },
];

const bottomNavigation: NavigationItem[] = [
  {
    label: "Settings",
    href: "/settings",
    icon: "settings",
  },
];

function NavIcon({ name }: { name: IconName }) {
  const base =
    "h-[18px] w-[18px] shrink-0 stroke-current";

  if (name === "overview") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base}>
        <path
          d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (name === "campaigns") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base}>
        <path
          d="M5 4h14v16H5V4Zm3 4h8M8 12h8M8 16h5"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "agents") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base}>
        <path
          d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19c.4-3.2 2-5 4.5-5s4.1 1.8 4.5 5m1.5 0c.3-2.4 1.5-3.8 3.5-3.8 2 0 3.2 1.4 3.5 3.8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "verifiers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base}>
        <path
          d="M12 3 19 6v5c0 4.6-2.7 7.8-7 10-4.3-2.2-7-5.4-7-10V6l7-3Zm-3 9 2 2 4-4"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "activity") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base}>
        <path
          d="M4 12h4l2-5 4 10 2-5h4"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={base}>
      <path
        d="M12 8.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-6.5Zm8 3.5-2-.8a7 7 0 0 0-.5-1.2l.9-2-2.4-2.4-2 .9a7 7 0 0 0-1.2-.5L12 4H8.7L8 6a7 7 0 0 0-1.2.5l-2-.9L2.4 8l.9 2a7 7 0 0 0-.5 1.2L1 12v3l2 .8c.1.4.3.8.5 1.2l-.9 2 2.4 2.4 2-.9c.4.2.8.4 1.2.5l.8 2h3l.8-2c.4-.1.8-.3 1.2-.5l2 .9 2.4-2.4-.9-2c.2-.4.4-.8.5-1.2l2-.8v-3Z"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavigationLink({
  item,
}: {
  item: NavigationItem;
}) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    (item.href !== "/overview" &&
      pathname.startsWith(`${item.href}/`));

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex h-11 items-center gap-3 rounded-[10px] px-3",
        "text-sm font-medium transition-colors",
        isActive
          ? "bg-surface-interactive text-text-primary"
          : "text-text-secondary hover:bg-surface-primary hover:text-text-primary"
      )}
    >
      <span
        className={cn(
          "transition-colors",
          isActive
            ? "text-primary"
            : "text-text-tertiary group-hover:text-text-secondary"
        )}
      >
        <NavIcon name={item.icon} />
      </span>

      <span>{item.label}</span>

      {isActive && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
      )}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col border-r border-border-subtle bg-background lg:flex">
      <div className="flex h-16 items-center border-b border-border-subtle px-5">
        <Link
          href="/overview"
          className="font-display text-lg font-semibold tracking-[-0.035em] text-text-primary"
        >
          Axionvera
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <nav className="flex-1 space-y-1 px-3 py-5">
          {mainNavigation.map((item) => (
            <NavigationLink
              key={item.href}
              item={item}
            />
          ))}
        </nav>

        <div className="border-t border-border-subtle p-3">
          {bottomNavigation.map((item) => (
            <NavigationLink
              key={item.href}
              item={item}
            />
          ))}

          <div className="mt-3 rounded-[12px] border border-border-subtle bg-surface-primary p-3">
            <p className="text-xs font-semibold text-text-primary">
              Business Account
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-xs text-text-secondary">
                  G...7K2
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] text-text-tertiary">
                    Stellar Testnet
                  </span>
                </div>
              </div>

              <button
                type="button"
                aria-label="Open account menu"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] text-text-tertiary transition-colors hover:bg-surface-interactive hover:text-text-primary"
              >
                •••
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

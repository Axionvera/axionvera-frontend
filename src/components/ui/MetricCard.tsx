import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Panel } from "@/components/ui/Panel";

interface MetricCardProps {
  label: string;
  value: ReactNode;
  accent?: boolean;
  className?: string;
}

export function MetricCard({
  label,
  value,
  accent = false,
  className,
}: MetricCardProps) {
  return (
    <Panel
      padding="md"
      className={cn(
        "min-h-[112px] flex flex-col justify-between",
        className
      )}
    >
      <p className="text-sm font-medium text-text-secondary">
        {label}
      </p>

      <div
        className={cn(
          "mt-4 font-display text-[30px] font-semibold leading-none tracking-[-0.03em]",
          accent ? "text-primary" : "text-text-primary"
        )}
      >
        {value}
      </div>
    </Panel>
  );
}

import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type StatusTone =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

interface StatusBadgeProps {
  children: ReactNode;
  tone?: StatusTone;
  className?: string;
}

const toneClasses: Record<StatusTone, string> = {
  success:
    "border-[rgba(2,199,99,0.22)] bg-[rgba(2,199,99,0.10)] text-success",
  warning:
    "border-[rgba(245,185,66,0.22)] bg-[rgba(245,185,66,0.09)] text-warning",
  error:
    "border-[rgba(242,95,92,0.22)] bg-[rgba(242,95,92,0.09)] text-error",
  info:
    "border-[rgba(91,140,255,0.22)] bg-[rgba(91,140,255,0.09)] text-info",
  neutral:
    "border-border-subtle bg-surface-interactive text-text-secondary",
};

export function StatusBadge({
  children,
  tone = "neutral",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center rounded-full border px-2.5 py-1",
        "text-xs font-semibold leading-none",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

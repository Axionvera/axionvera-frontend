import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export function Panel({
  children,
  className,
  padding = "lg",
  ...props
}: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-border-subtle bg-surface-primary",
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-primary bg-primary text-[#031009] hover:bg-primary-hover",
  secondary:
    "border border-border-strong bg-surface-elevated text-text-primary hover:bg-surface-interactive",
  ghost:
    "border border-transparent bg-transparent text-text-secondary hover:bg-surface-interactive hover:text-text-primary",
  danger:
    "border border-[rgba(242,95,92,0.28)] bg-[rgba(242,95,92,0.08)] text-error hover:bg-[rgba(242,95,92,0.13)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold",
        "transition-colors duration-200",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

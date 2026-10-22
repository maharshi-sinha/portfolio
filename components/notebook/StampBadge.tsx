import React from "react";
import { cn } from "@/lib/utils";

interface StampBadgeProps {
  children: React.ReactNode;
  variant?: "ink" | "red" | "subtle";
  rotation?: "left" | "right" | "none";
  className?: string;
  size?: "sm" | "md";
}

export function StampBadge({
  children,
  variant = "ink",
  rotation = "left",
  className,
  size = "md",
}: StampBadgeProps) {
  const rotationClasses = {
    left: "-rotate-2",
    right: "rotate-1.5",
    none: "rotate-0",
  };

  const variantClasses = {
    ink: "text-ink-primary dark:text-ink-white border-ink-primary dark:border-ink-white",
    red: "text-red-700 dark:text-red-400 border-red-700 dark:border-red-400",
    subtle: "text-ink-muted dark:text-ink-faint border-ink-muted dark:border-ink-faint",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-mono font-semibold uppercase tracking-wider select-none border border-dashed rounded-sm transition-transform duration-200 hover:rotate-0",
        rotationClasses[rotation],
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <span className="relative">
        {children}
      </span>
    </span>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

interface StickyNoteProps {
  children: React.ReactNode;
  title?: string;
  rotation?: "left" | "right" | "straight";
  className?: string;
  tapeColor?: "default" | "dark";
}

export function StickyNote({
  children,
  title,
  rotation = "left",
  className,
}: StickyNoteProps) {
  const rotationStyles = {
    left: "rotate-0 sm:-rotate-1 sm:hover:-rotate-0",
    right: "rotate-0 sm:rotate-1.5 sm:hover:rotate-0",
    straight: "rotate-0",
  };

  return (
    <div
      className={cn(
        "relative p-4 md:p-5 transition-all duration-300 ease-out",
        "bg-yellow-50/80 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200",
        "border border-yellow-200/80 dark:border-stone-800",
        "shadow-[2px_4px_12px_rgba(0,0,0,0.06)] dark:shadow-[2px_4px_16px_rgba(0,0,0,0.35)]",
        "rounded-sm",
        rotationStyles[rotation],
        className
      )}
    >
      {/* Tape strip at top */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 washi-tape rounded-xs pointer-events-none" />

      {title && (
        <div className="mb-2 pb-1 border-b border-stone-300/40 dark:border-stone-700/50 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold opacity-75">
            {title}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-600" />
        </div>
      )}

      <div className="text-sm font-handwritten text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Marginalia() {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-full py-2 px-3 sm:px-6 border-b border-ink-border dark:border-paper-dark-border bg-paper-subtle/50 dark:bg-paper-dark-subtle/40 backdrop-blur-xs text-[11px] sm:text-xs font-mono text-ink-muted dark:text-ink-faint flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-3">
      {/* Location & IST Time */}
      <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-ink-muted shrink-0" />
          <span className="truncate">{portfolioData.profile.location}</span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <Clock className="w-3.5 h-3.5 text-ink-muted shrink-0" />
          <span>
            IST: <strong className="text-ink-primary dark:text-ink-white font-mono">{istTime || "11:00:00 AM"}</strong>
          </span>
        </div>
      </div>

      {/* Status stamp badge */}
      <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-ink-border/30 dark:border-paper-dark-border/40">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-ink-primary dark:text-ink-white font-medium text-[11px] sm:text-xs">
            {portfolioData.profile.status.text}
          </span>
        </div>

        <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider bg-ink-border/50 dark:bg-paper-dark-border/60 text-ink-secondary dark:text-ink-white-muted">
          FIELD LOG v2.4
        </span>
      </div>
    </aside>
  );
}

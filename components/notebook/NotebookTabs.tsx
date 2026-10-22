"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PenTool } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface Tab {
  id: string;
  number: string;
  label: string;
  href: string;
}

const TABS: Tab[] = [
  { id: "about", number: "01", label: "ABOUT", href: "#about" },
  { id: "experience", number: "02", label: "EXPERIENCE", href: "#experience" },
  { id: "projects", number: "03", label: "PROJECTS", href: "#projects" },
  { id: "stack", number: "04", label: "STACK", href: "#stack" },
  { id: "writing", number: "05", label: "WRITING", href: "#writing" },
  { id: "contact", number: "06", label: "CONTACT", href: "#contact" },
];

interface NotebookTabsProps {
  onOpenScratchpad: () => void;
}

export function NotebookTabs({ onOpenScratchpad }: NotebookTabsProps) {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    TABS.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Notebook tabs"
      className="sticky top-0 z-40 bg-paper-ivory/95 dark:bg-paper-dark/95 backdrop-blur-md border-b border-ink-border dark:border-paper-dark-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between overflow-x-auto no-scrollbar py-2">
        {/* Index Tabs */}
        <div className="flex items-center gap-1 sm:gap-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => handleScroll(e, tab.href)}
                className={cn(
                  "group relative px-2.5 sm:px-3.5 py-1.5 text-xs font-mono transition-all duration-200 rounded-t border-t border-x",
                  "whitespace-nowrap flex items-center gap-1.5",
                  isActive
                    ? "bg-paper-card dark:bg-paper-dark-elevated text-ink-primary dark:text-ink-white border-ink-border dark:border-paper-dark-border shadow-xs -mb-[9px] pb-[10px] z-10"
                    : "bg-paper-subtle/50 dark:bg-paper-dark-subtle/40 text-ink-muted dark:text-ink-faint border-transparent hover:text-ink-primary dark:hover:text-ink-white hover:border-ink-border/50"
                )}
              >
                <span className={cn(
                  "text-[10px] font-semibold opacity-60 transition-opacity",
                  isActive ? "opacity-100" : "group-hover:opacity-80"
                )}>
                  {tab.number}.
                </span>
                <span className="font-semibold tracking-wider">{tab.label}</span>
              </a>
            );
          })}
        </div>

        {/* Quick Actions: Theme Switcher & Doodle Pad */}
        <div className="pl-3 flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={onOpenScratchpad}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md border border-dashed border-ink-muted/60 dark:border-paper-dark-border text-ink-secondary dark:text-ink-white-muted hover:text-ink-primary dark:hover:text-ink-white hover:border-ink-primary transition-all duration-200 bg-paper-card/80 dark:bg-paper-dark-elevated shadow-xs"
            title="Open visitor doodle pad"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span className="hidden md:inline font-handwritten text-base leading-none">Doodle Pad</span>
            <span className="md:hidden">JOT</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

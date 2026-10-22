"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("notebook-theme");
    
    // Explicitly default to light theme on fresh load
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("notebook-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("notebook-theme", "light");
    }
  };

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full border border-paper-border dark:border-paper-dark-border" />;
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={`Switch to ${isDark ? "Ivory Paper (Light)" : "Noir Field Notes (Dark)"}`}
      aria-label="Toggle notebook paper mode"
      className="group relative flex items-center gap-2 px-2.5 py-1 text-xs font-mono border border-ink-border dark:border-paper-dark-border rounded-md bg-paper-card dark:bg-paper-dark-elevated text-ink-secondary dark:text-ink-white-muted hover:text-ink-primary dark:hover:text-ink-white hover:border-ink-muted transition-all duration-200 shadow-sm"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
          <span className="hidden sm:inline">NOIR</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 transition-transform group-hover:-rotate-12" />
          <span className="hidden sm:inline">IVORY</span>
        </>
      )}
    </button>
  );
}

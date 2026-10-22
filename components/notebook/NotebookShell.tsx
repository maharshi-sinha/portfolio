"use client";

import React, { useState } from "react";
import { Marginalia } from "./Marginalia";
import { NotebookTabs } from "./NotebookTabs";
import { ThemeToggle } from "./ThemeToggle";
import { ScratchpadModal } from "./ScratchpadModal";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

interface NotebookShellProps {
  children: React.ReactNode;
}

export function NotebookShell({ children }: NotebookShellProps) {
  const [scratchpadOpen, setScratchpadOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-stone-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Scratchpad Modal */}
      <ScratchpadModal
        isOpen={scratchpadOpen}
        onClose={() => setScratchpadOpen(false)}
      />

      {/* Top Banner & IST Clock */}
      <Marginalia />

      {/* Notebook Navigation Bar */}
      <NotebookTabs onOpenScratchpad={() => setScratchpadOpen(true)} />

      {/* Main Notebook Body Layout */}
      <main className="relative flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8 md:py-12">
        {/* Notebook Cover Border & Layered Paper Effect */}
        <div className="relative bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border rounded-lg shadow-notebook dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300">
          
          {/* Subtle notebook graph/dot texture overlay */}
          <div className="absolute inset-0 bg-notebook-dots opacity-60 pointer-events-none" />

          {/* Left Notebook Perforation / Spine Accent on desktop */}
          <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-8 flex-col items-center justify-around py-8 border-r border-dashed border-ink-border dark:border-paper-dark-border/80 bg-paper-subtle/40 dark:bg-paper-dark-subtle/20 pointer-events-none z-10">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-stone-400/70 dark:border-stone-700 bg-paper-ivory dark:bg-paper-dark shadow-inner"
              />
            ))}
          </div>

          {/* Left Red/Graphite Margin Line */}
          <div className="hidden sm:block absolute left-12 lg:left-20 top-0 bottom-0 w-px bg-red-500/35 dark:bg-red-500/25 pointer-events-none z-10" />

          {/* Main Content Area */}
          <div className="relative sm:pl-16 lg:pl-28 pr-4 sm:pr-8 md:pr-12 py-8 sm:py-12">
            {children}
          </div>

          {/* Bottom Notebook Page Edge Footer */}
          <footer className="relative border-t border-ink-border dark:border-paper-dark-border bg-paper-subtle/40 dark:bg-paper-dark-subtle/30 px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ink-muted dark:text-ink-faint">
            <div className="flex items-center gap-3 flex-wrap">
              <span>© {new Date().getFullYear()} Maharshi Sinha</span>
              <span className="opacity-40">•</span>
              <span>Software Development Engineer</span>
              <span className="opacity-40">•</span>
              <span className="font-handwritten text-sm text-ink-secondary dark:text-ink-white-muted">
                Handcrafted with Next.js & TypeScript
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-primary dark:hover:text-ink-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-primary dark:hover:text-ink-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-primary dark:hover:text-ink-white transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.profile.socials.email}`}
                  className="hover:text-ink-primary dark:hover:text-ink-white transition-colors"
                  aria-label="Email Maharshi"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-3.5 w-px bg-ink-border dark:bg-paper-dark-border" />

              <ThemeToggle />

              <button
                onClick={scrollToTop}
                className="p-1.5 rounded border border-ink-border dark:border-paper-dark-border hover:bg-paper-card dark:hover:bg-paper-dark hover:text-ink-primary dark:hover:text-ink-white transition-colors"
                title="Return to top of notebook"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

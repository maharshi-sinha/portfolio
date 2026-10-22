"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { Github, ExternalLink, Code2, Sparkles, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterCategory = "all" | "mobile" | "fullstack" | "tool";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-12 sm:py-16 border-b border-ink-border/80 dark:border-paper-dark-border/80">
      {/* Notebook Section Header & Page Marker */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-dashed border-ink-border dark:border-paper-dark-border text-xs font-mono text-ink-muted dark:text-ink-faint gap-1.5 sm:gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink-primary dark:text-ink-white">[ SECTION 03 ]</span>
          <span>// ENGINEERING BLUEPRINTS &amp; PROJECTS</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PAGE 03</span>
          <span className="opacity-40">•</span>
          <span className="font-handwritten text-sm">open source blueprints</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-1.5">
        <span className="text-[11px] sm:text-xs font-mono text-ink-muted mr-1 shrink-0">FILTER:</span>
        {[
          { key: "all", label: "All Works" },
          { key: "mobile", label: "Mobile (Flutter / iOS)" },
          { key: "fullstack", label: "Web & Fullstack" },
          { key: "tool", label: "Backend & Systems" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as FilterCategory)}
            className={cn(
              "px-2.5 sm:px-3 py-1 rounded text-xs font-mono transition-all duration-200 border whitespace-nowrap shrink-0",
              activeFilter === tab.key
                ? "bg-ink-primary dark:bg-ink-white text-white dark:text-ink-primary border-transparent font-medium shadow-xs"
                : "bg-paper-card dark:bg-paper-dark-elevated text-ink-secondary dark:text-ink-white-muted border-ink-border dark:border-paper-dark-border hover:border-ink-muted"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between p-4 sm:p-6 rounded-md bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border hover:border-ink-muted dark:hover:border-paper-dark-border/80 transition-all duration-200 shadow-xs hover:shadow-notebook"
          >
            {/* Blueprint Header */}
            <div>
              <div className="flex items-start justify-between gap-2 pb-3 border-b border-dashed border-ink-border/50 dark:border-paper-dark-border/50">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-faint">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink-primary dark:text-ink-white mt-0.5">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-xs px-1.5 py-0.5 rounded border border-ink-border/50 dark:border-paper-dark-border/50 text-ink-muted shrink-0">
                  {project.pageNumber}
                </span>
              </div>

              {/* Tagline */}
              <p className="mt-3 text-xs font-mono font-medium text-ink-secondary dark:text-ink-white-muted">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-ink-muted dark:text-ink-faint leading-relaxed">
                {project.description}
              </p>

              {/* Architectural Highlights */}
              <div className="mt-4 space-y-1.5 bg-paper-subtle/40 dark:bg-paper-dark-subtle/30 p-3 rounded border border-ink-border/40 dark:border-paper-dark-border/40">
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block pb-1">
                  ARCHITECTURAL NOTES:
                </span>
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-ink-secondary dark:text-ink-white-muted leading-snug"
                  >
                    <span className="text-ink-muted mt-0.5 font-mono text-[11px]">›</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer: Tech Stack + Links */}
            <div className="mt-6 pt-4 border-t border-ink-border/40 dark:border-paper-dark-border/40">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-paper-subtle dark:bg-paper-dark-subtle border border-ink-border/50 dark:border-paper-dark-border/50 text-ink-secondary dark:text-ink-white-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-dashed border-ink-border/30">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-ink-primary dark:text-ink-white hover:underline underline-offset-4"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="text-ink-muted">Private Client Work</span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-ink-muted hover:text-ink-primary dark:hover:text-ink-white"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { StampBadge } from "@/components/notebook/StampBadge";
import { StickyNote } from "@/components/notebook/StickyNote";
import { 
  ArrowDownRight, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Terminal,
  ArrowRight
} from "lucide-react";

export function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative pb-12 sm:pb-16 border-b border-ink-border/80 dark:border-paper-dark-border/80">
      {/* Notebook Section Header & Page Marker */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 mb-6 border-b border-dashed border-ink-border dark:border-paper-dark-border text-xs font-mono text-ink-muted dark:text-ink-faint gap-1.5 sm:gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink-primary dark:text-ink-white">[ SECTION 01 ]</span>
          <span>// PROFILE &amp; DOSSIER</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PAGE 01</span>
          <span className="opacity-40">•</span>
          <span className="font-handwritten text-sm">logged at {portfolioData.profile.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-6">
          {/* Badges */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            <StampBadge variant="ink" rotation="none" size="sm">
              SDE • FULL STACK &amp; MOBILE DEVELOPER
            </StampBadge>
            <StampBadge variant="red" rotation="none" size="sm">
              AVAILABLE FOR HIRE
            </StampBadge>
          </div>

          {/* Avatar + Name & Title */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border border-ink-border dark:border-paper-dark-border shadow-xs bg-paper-subtle">
                <Image
                  src="/avatar.jpg"
                  alt="Maharshi Sinha"
                  width={80}
                  height={80}
                  priority
                  className="w-full h-full object-cover grayscale contrast-105"
                />
              </div>
              {/* Micro tape accent */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 washi-tape rounded-xs pointer-events-none" />
            </div>

            <div>
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink-primary dark:text-ink-white leading-tight">
                Maharshi Sinha
              </h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-mono text-ink-muted dark:text-ink-faint">
                {portfolioData.profile.title} &amp; System Builder
              </p>
            </div>
          </div>

          {/* Bio Paragraphs */}
          <p className="text-base sm:text-lg leading-relaxed text-ink-secondary dark:text-ink-white-muted font-normal max-w-2xl">
            {portfolioData.profile.shortBio}
          </p>

          <p className="text-sm leading-relaxed text-ink-muted dark:text-ink-faint max-w-2xl">
            {portfolioData.profile.extendedBio}
          </p>

          {/* Interactive Terminal / REPL Box */}
          <div className="p-3.5 sm:p-4 rounded-md bg-paper-subtle/80 dark:bg-paper-dark-subtle border border-ink-border dark:border-paper-dark-border font-mono text-xs space-y-1.5 shadow-xs overflow-x-auto">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink-border/50 dark:border-paper-dark-border/50 text-[11px] text-ink-muted min-w-[280px]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>engineer_manifest.sh</span>
              </span>
              <span className="text-[10px] uppercase">sh-interactive</span>
            </div>
            <p className="text-ink-muted dark:text-ink-faint">
              <span className="text-emerald-600 dark:text-emerald-400">$</span> whoami
            </p>
            <p className="text-ink-primary dark:text-ink-white pl-3 sm:pl-4 font-medium break-words">
              &quot;Maharshi Sinha — SDE building Flutter/React Native apps &amp; executing Cloud Migrations&quot;
            </p>
            <p className="text-ink-muted dark:text-ink-faint">
              <span className="text-emerald-600 dark:text-emerald-400">$</span> stack --primary
            </p>
            <p className="text-ink-secondary dark:text-ink-white-muted pl-3 sm:pl-4 break-words">
              Flutter, React Native, Bloc/Riverpod, Next.js, Electron, AWS, Docker, Vercel, GitHub Actions
            </p>
            <p className="text-ink-muted dark:text-ink-faint">
              <span className="text-emerald-600 dark:text-emerald-400">$</span> cloud_migration --metrics
            </p>
            <p className="text-ink-secondary dark:text-ink-white-muted pl-3 sm:pl-4 font-mono text-[11px] break-words">
              &quot;NAM → India Server Cutover: 90% cost reduction, 65% latency drop, zero downtime&quot;
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap pt-1 sm:pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-md text-xs font-mono font-medium bg-ink-primary dark:bg-ink-white text-white dark:text-ink-primary hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-md text-xs font-mono border border-ink-border dark:border-paper-dark-border bg-paper-card dark:bg-paper-dark-elevated text-ink-secondary dark:text-ink-white hover:text-ink-primary hover:border-ink-muted transition-all shadow-xs"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-ink-muted" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={portfolioData.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-md text-xs font-mono text-ink-muted hover:text-ink-primary dark:hover:text-ink-white transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={portfolioData.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-md text-xs font-mono text-ink-muted hover:text-ink-primary dark:hover:text-ink-white transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Sticky Note & Key Stats */}
        <div className="lg:col-span-4 space-y-6">
          <StickyNote title="FIELD NOTE" rotation="right" className="w-full">
            <p className="text-base text-stone-800 dark:text-stone-100">
              &ldquo;Clean code is not just about fewer lines; it&apos;s about clarity of thought and respect for the next engineer who reads it.&rdquo;
            </p>
            <div className="mt-3 pt-2 border-t border-stone-300/40 dark:border-stone-700/50 flex justify-between items-center text-xs font-mono">
              <span>— Maharshi S.</span>
              <span className="opacity-60">SDE Journal</span>
            </div>
          </StickyNote>

          {/* Quick Metrics / Stats Grid */}
          <div className="p-4 rounded-md border border-dashed border-ink-border dark:border-paper-dark-border bg-paper-subtle/30 dark:bg-paper-dark-subtle/20 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-ink-muted pb-1 border-b border-ink-border/50 dark:border-paper-dark-border/50">
              <span className="font-semibold uppercase tracking-wider">INDEX METRICS</span>
              <span>2024–2026</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-1">
              {portfolioData.profile.stats.map((stat, i) => (
                <div key={i} className="p-2.5 rounded bg-paper-card dark:bg-paper-dark-elevated border border-ink-border/50 dark:border-paper-dark-border/50">
                  <div className="font-serif text-2xl font-bold text-ink-primary dark:text-ink-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-ink-muted dark:text-ink-faint leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

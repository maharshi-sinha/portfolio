"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { StampBadge } from "@/components/notebook/StampBadge";
import { StickyNote } from "@/components/notebook/StickyNote";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Sparkles,
  ExternalLink 
} from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#141414", "#78716C", "#C2410C"],
    });

    // Create mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    window.open(`mailto:${portfolioData.profile.socials.email}?subject=${subject}&body=${body}`, "_blank");

    setSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-16">
      {/* Notebook Section Header & Page Marker */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-dashed border-ink-border dark:border-paper-dark-border text-xs font-mono text-ink-muted dark:text-ink-faint">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink-primary dark:text-ink-white">[ SECTION 06 ]</span>
          <span>// DISPATCH STATION &amp; CONTACT</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PAGE 06</span>
          <span className="opacity-40">•</span>
          <span className="font-handwritten text-sm">let&apos;s build together</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dispatch Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-7 rounded-md bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border shadow-xs">
            <div className="pb-4 border-b border-dashed border-ink-border/60 dark:border-paper-dark-border/60 flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-primary dark:text-ink-white">
                  Send a Dispatch
                </h3>
                <p className="text-xs font-mono text-ink-muted dark:text-ink-faint mt-0.5">
                  Direct inquiry to Maharshi Sinha
                </p>
              </div>

              <StampBadge variant="red" rotation="right" size="sm">
                INBOX ACTIVE
              </StampBadge>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-ink-muted mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3 py-2 text-xs font-mono rounded border border-ink-border dark:border-paper-dark-border bg-paper-subtle/50 dark:bg-paper-dark-subtle/40 text-ink-primary dark:text-ink-white focus:outline-none focus:border-ink-primary dark:focus:border-ink-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-muted mb-1">
                    YOUR EMAIL / CONTACT
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 text-xs font-mono rounded border border-ink-border dark:border-paper-dark-border bg-paper-subtle/50 dark:bg-paper-dark-subtle/40 text-ink-primary dark:text-ink-white focus:outline-none focus:border-ink-primary dark:focus:border-ink-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-ink-muted mb-1">
                  MESSAGE / PROJECT SCOPE *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Maharshi, let's talk about building our mobile app / web project..."
                  className="w-full px-3 py-2 text-xs font-mono rounded border border-ink-border dark:border-paper-dark-border bg-paper-subtle/50 dark:bg-paper-dark-subtle/40 text-ink-primary dark:text-ink-white focus:outline-none focus:border-ink-primary dark:focus:border-ink-white transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-medium bg-ink-primary dark:bg-ink-white text-white dark:text-ink-primary hover:opacity-90 transition-opacity shadow-sm"
                >
                  {sent ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Dispatch Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Dispatch</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] font-mono text-ink-muted">
                  Replies typically within 24h
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Direct Connections & Sticky Note */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="p-5 rounded-md bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border shadow-xs space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block">
              DIRECT INBOX
            </span>
            <div className="flex items-center justify-between gap-2 p-2.5 rounded bg-paper-subtle dark:bg-paper-dark-subtle border border-ink-border/50 text-xs font-mono">
              <span className="truncate text-ink-primary dark:text-ink-white select-all">
                {portfolioData.profile.socials.email}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="p-1 rounded hover:bg-paper-card dark:hover:bg-paper-dark text-ink-muted hover:text-ink-primary transition-colors shrink-0"
                title="Copy email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="p-5 rounded-md bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border shadow-xs space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block">
              DIGITAL FOOTPRINT
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href={portfolioData.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded border border-ink-border/60 dark:border-paper-dark-border/60 hover:bg-paper-subtle dark:hover:bg-paper-dark-subtle transition-colors text-ink-secondary dark:text-ink-white-muted"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded border border-ink-border/60 dark:border-paper-dark-border/60 hover:bg-paper-subtle dark:hover:bg-paper-dark-subtle transition-colors text-ink-secondary dark:text-ink-white-muted"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded border border-ink-border/60 dark:border-paper-dark-border/60 hover:bg-paper-subtle dark:hover:bg-paper-dark-subtle transition-colors text-ink-secondary dark:text-ink-white-muted"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>X / Twitter</span>
              </a>
              <a
                href={portfolioData.profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded border border-ink-border/60 dark:border-paper-dark-border/60 hover:bg-paper-subtle dark:hover:bg-paper-dark-subtle transition-colors text-ink-secondary dark:text-ink-white-muted"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <StickyNote title="OPEN TO OPPORTUNITIES" rotation="right" className="w-full">
            <p className="text-xs font-mono leading-relaxed text-stone-700 dark:text-stone-300">
              Actively evaluating:
              <br />• Full-time Software Development Engineer (SDE) positions
              <br />• High-growth tech startup mobile/web engineering
              <br />• Select freelance architecture &amp; advisory contracts
            </p>
          </StickyNote>
        </div>
      </div>
    </section>
  );
}

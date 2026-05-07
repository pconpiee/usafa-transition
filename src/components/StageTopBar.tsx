"use client";

import Link from "next/link";
import { useVisitedStages } from "@/lib/useVisitedStages";

const STAGES = [
  { num: 1, href: "/the-reckoning", label: "Who Are You Now", phase: "f" },
  { num: 2, href: "/know-your-gifts", label: "Know Your Gifts", phase: "f" },
  { num: 3, href: "/the-map", label: "The Map", phase: "f" },
  { num: 4, href: "/networking", label: "Networking", phase: "w" },
  { num: 5, href: "/the-search", label: "The Search", phase: "w" },
  { num: 6, href: "/application-package", label: "Applications", phase: "w" },
  { num: 7, href: "/interview-prep", label: "Interviews", phase: "w" },
  { num: 8, href: "/managing-the-pipeline", label: "Pipeline", phase: "w" },
  { num: 9, href: "/negotiation", label: "Negotiation", phase: "w" },
  { num: 10, href: "/first-90-days", label: "First 90 Days", phase: "l" },
  { num: 11, href: "/the-long-game", label: "Long Game", phase: "l" },
  { num: 12, href: "/the-chain", label: "The Chain", phase: "l" },
];

const PHASE_COLOR: Record<string, string> = {
  f: "#60a5fa",
  w: "#a78bfa",
  l: "#34d399",
};

export default function StageTopBar({ current }: { current: string }) {
  const { visited } = useVisitedStages();
  const idx = STAGES.findIndex((s) => s.href === current);
  if (idx === -1) return null;
  const prev = idx > 0 ? STAGES[idx - 1] : null;
  const next = idx < STAGES.length - 1 ? STAGES[idx + 1] : null;
  const visitedCount = STAGES.filter((s) => visited.has(s.href)).length;

  return (
    <div className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 flex items-center gap-2 sm:gap-4">
        {/* Prev */}
        {prev ? (
          <Link
            href={prev.href}
            aria-label={`Previous: ${prev.label}`}
            className="group flex items-center gap-1 px-2 py-1.5 text-xs text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors flex-shrink-0"
          >
            <span aria-hidden="true">←</span>
            <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-300 hidden sm:inline">
              {String(prev.num).padStart(2, "0")}
            </span>
            <span className="hidden md:inline">{prev.label}</span>
          </Link>
        ) : (
          <div className="w-12 sm:w-24" aria-hidden="true" />
        )}

        {/* Progress dots */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline text-[10px] text-slate-500 uppercase tracking-wide font-mono mr-1">
              {visitedCount}/12
            </span>
            <div className="flex gap-0.5 sm:gap-1 flex-1">
              {STAGES.map((s) => {
                const isCurrent = s.href === current;
                const isVisited = visited.has(s.href);
                const color = PHASE_COLOR[s.phase];
                return (
                  <Link
                    key={s.num}
                    href={s.href}
                    aria-label={`Stage ${s.num}: ${s.label}`}
                    className="flex-1 group py-1.5"
                    title={`${String(s.num).padStart(2, "0")} — ${s.label}`}
                  >
                    <div
                      className="h-1.5 rounded-sm transition-all"
                      style={{
                        background: isCurrent ? color : isVisited ? color + "55" : "#1e293b",
                        outline: isCurrent ? `1.5px solid ${color}` : "none",
                        outlineOffset: "1.5px",
                      }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Next */}
        {next ? (
          <Link
            href={next.href}
            aria-label={`Next: ${next.label}`}
            className="group flex items-center gap-1 px-2 py-1.5 text-xs text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors flex-shrink-0"
          >
            <span className="hidden md:inline">{next.label}</span>
            <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-300 hidden sm:inline">
              {String(next.num).padStart(2, "0")}
            </span>
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <Link
            href="/"
            aria-label="Back to start"
            className="flex items-center gap-1 px-2 py-1.5 text-xs text-slate-400 hover:text-slate-100 rounded-md transition-colors flex-shrink-0"
          >
            <span className="hidden md:inline">Home</span>
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

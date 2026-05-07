"use client";

import { useVisitedStages } from "@/lib/useVisitedStages";

const STAGES = [
  { num: 1, href: "/the-reckoning", phase: "f" },
  { num: 2, href: "/know-your-gifts", phase: "f" },
  { num: 3, href: "/the-map", phase: "f" },
  { num: 4, href: "/networking", phase: "w" },
  { num: 5, href: "/the-search", phase: "w" },
  { num: 6, href: "/application-package", phase: "w" },
  { num: 7, href: "/interview-prep", phase: "w" },
  { num: 8, href: "/managing-the-pipeline", phase: "w" },
  { num: 9, href: "/negotiation", phase: "w" },
  { num: 10, href: "/first-90-days", phase: "l" },
  { num: 11, href: "/the-long-game", phase: "l" },
  { num: 12, href: "/the-chain", phase: "l" },
];

const PHASE_COLOR: Record<string, string> = {
  f: "#60a5fa",
  w: "#a78bfa",
  l: "#34d399",
};

export default function StageProgressBar({ current }: { current: string }) {
  const { visited } = useVisitedStages();
  const visitedCount = STAGES.filter((s) => visited.has(s.href)).length;

  return (
    <div className="mt-8" aria-label="Stage progress">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-500 uppercase tracking-wide">Pipeline progress</span>
        <span className="text-xs text-slate-500 font-mono">{visitedCount}/12</span>
      </div>
      <div className="flex gap-1">
        {STAGES.map((s) => {
          const isCurrent = s.href === current;
          const isVisited = visited.has(s.href);
          const color = PHASE_COLOR[s.phase];
          return (
            <a
              key={s.num}
              href={s.href}
              aria-label={`Go to stage ${s.num}`}
              className="flex-1 group"
            >
              <div
                className="h-2 rounded-sm transition-all"
                style={{
                  background: isCurrent ? color : isVisited ? color + "55" : "#1e293b",
                  outline: isCurrent ? `2px solid ${color}` : "none",
                  outlineOffset: "1px",
                }}
              />
              <div className="text-[10px] font-mono text-slate-500 text-center mt-1 group-hover:text-slate-300 transition-colors">
                {String(s.num).padStart(2, "0")}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

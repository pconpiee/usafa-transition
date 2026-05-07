"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useVisitedStages } from "@/lib/useVisitedStages";
const stages = [
  { num: "01", href: "/the-reckoning", label: "Who Are You Now" },
  { num: "02", href: "/know-your-gifts", label: "Know Your Gifts" },
  { num: "03", href: "/the-map", label: "The Map" },
  { num: "04", href: "/networking", label: "Networking" },
  { num: "05", href: "/the-search", label: "The Search" },
  { num: "06", href: "/application-package", label: "Applications" },
  { num: "07", href: "/interview-prep", label: "Interviews" },
  { num: "08", href: "/managing-the-pipeline", label: "Pipeline" },
  { num: "09", href: "/negotiation", label: "Negotiation" },
  { num: "10", href: "/first-90-days", label: "First 90 Days" },
  { num: "11", href: "/the-long-game", label: "Long Game" },
  { num: "12", href: "/the-chain", label: "The Chain" },
];

const tools = [
  { href: "/comp", label: "Pay Reference", sigil: "$" },
  { href: "/comp-translator", label: "Comp Translator", sigil: "⇄" },
  { href: "/timeline", label: "Timeline", sigil: "◷" },
  { href: "/bold-face", label: "Bold Face", sigil: "✓" },
  { href: "/resources", label: "Resources", sigil: "◈" },
];

const topLinks = [
  { href: "/paths", label: "Paths" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [stagesOpen, setStagesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { visited } = useVisitedStages();

  const currentStage = stages.find((s) => s.href === pathname);
  const visitedCount = stages.filter((s) => visited.has(s.href)).length;

  useEffect(() => {
    if (!stagesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setStagesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setStagesOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [stagesOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-100 hover:text-blue-400 transition-colors flex-shrink-0 group"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M4 14 Q16 6 28 14" fill="currentColor" fillOpacity="0.18" />
              <path d="M4 14 Q16 6 28 14" />
              <path d="M10 14 L14 26" />
              <path d="M22 14 L18 26" />
              <path d="M16 14 L16 26" opacity="0.4" />
              <circle cx="16" cy="27" r="1.4" fill="currentColor" stroke="none" />
            </svg>
            Blue Canopy
          </Link>

          {/* Desktop: stage indicator + tools */}
          <div className="hidden lg:flex items-center gap-1">
          {/* Search button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("blue-canopy:open-search"))}
              aria-label="Open search"
              aria-keyshortcuts="Meta+K Control+K"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-600 rounded-lg transition-colors"
            >
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <span className="hidden xl:inline">Search</span>
              <kbd className="hidden xl:inline text-xs border border-slate-700 rounded px-1 py-0.5">⌘K</kbd>
            </button>

            {/* Stages dropdown trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setStagesOpen(!stagesOpen)}
                aria-expanded={stagesOpen}
                aria-haspopup="menu"
                aria-controls="nav-stages-menu"
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-slate-100 transition-colors rounded-md hover:bg-slate-800/50"
              >
                {currentStage ? (
                  <>
                    <span className="font-mono text-xs text-blue-400">{currentStage.num}</span>
                    <span>{currentStage.label}</span>
                  </>
                ) : (
                  <span>The 12 Stages</span>
                )}
                <svg aria-hidden="true" className={`w-3 h-3 transition-transform ${stagesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {stagesOpen && (
                <div id="nav-stages-menu" role="menu" className="absolute top-full right-0 mt-1 w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden">
                  <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Pipeline</p>
                    {visitedCount > 0 && (
                      <p className="text-xs text-slate-500 font-mono">{visitedCount}/12</p>
                    )}
                  </div>
                  {stages.map((s) => {
                    const isVisited = visited.has(s.href);
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setStagesOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-slate-800 ${
                          pathname === s.href ? "text-blue-400 bg-slate-800/60" : "text-slate-300"
                        }`}
                      >
                        <span className="font-mono text-xs text-slate-500 w-6 flex-shrink-0">{s.num}</span>
                        <span className="flex-1">{s.label}</span>
                        {isVisited && (
                          <span aria-label="visited" className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                  <div className="border-t border-slate-800 px-3 py-2">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Tools</p>
                    {tools.map((t) => (
                      <Link key={t.href} href={t.href} onClick={() => setStagesOpen(false)}
                        className="flex items-center gap-2 px-0 py-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors">
                        <span className="text-slate-500 text-xs font-mono w-4">{t.sigil}</span>
                        {t.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-4 bg-slate-700 mx-1" />

            {topLinks.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`px-3 py-2 text-sm transition-colors rounded-md hover:bg-slate-800/50 ${
                  pathname === t.href ? "text-blue-400" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {t.label}
              </Link>
            ))}

            <div className="w-px h-4 bg-slate-700 mx-1" />

            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`px-3 py-2 text-sm transition-colors rounded-md hover:bg-slate-800/50 ${
                  pathname === t.href ? "text-blue-400" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-300 hover:text-slate-100"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="lg:hidden pb-4 space-y-0.5 border-t border-slate-800 pt-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {[
              { phase: "Foundation", color: "text-blue-400", range: [0, 3] },
              { phase: "The Work", color: "text-purple-400", range: [3, 9] },
              { phase: "The Landing", color: "text-green-400", range: [9, 12] },
            ].map((group, gi) => (
              <div key={group.phase} className={gi > 0 ? "pt-2" : ""}>
                <p className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${group.color}`}>
                  {group.phase}
                </p>
                {stages.slice(group.range[0], group.range[1]).map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                      pathname === s.href
                        ? "text-blue-400 bg-slate-800/60"
                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                    }`}
                  >
                    <span className="font-mono text-xs text-slate-500 w-5">{s.num}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-2 border-t border-slate-800 mt-2">
              <p className="px-3 py-1 text-xs text-slate-500 uppercase tracking-wide">Explore</p>
              {topLinks.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    pathname === t.href
                      ? "text-blue-400 bg-slate-800/60"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  }`}
                >
                  {t.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-800 mt-2">
              <p className="px-3 py-1 text-xs text-slate-500 uppercase tracking-wide">Tools</p>
              {tools.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

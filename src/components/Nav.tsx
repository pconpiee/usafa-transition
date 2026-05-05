"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  { href: "/comp", label: "Comp" },
  { href: "/comp-translator", label: "Comp Translator" },
  { href: "/timeline", label: "Timeline" },
  { href: "/bold-face", label: "Bold Face" },
  { href: "/resources", label: "Resources" },
];

const topLinks = [
  { href: "/paths", label: "Paths" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [stagesOpen, setStagesOpen] = useState(false);
  const pathname = usePathname();

  const currentStage = stages.find((s) => s.href === pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-slate-100 hover:text-blue-400 transition-colors flex-shrink-0"
          >
            Blue Canopy
          </Link>

          {/* Desktop: stage indicator + tools */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Stages dropdown trigger */}
            <div className="relative">
              <button
                onClick={() => setStagesOpen(!stagesOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-slate-100 transition-colors rounded-md hover:bg-slate-800/50"
              >
                {currentStage ? (
                  <>
                    <span className="font-mono text-xs text-blue-400">{currentStage.num}</span>
                    <span>{currentStage.label}</span>
                  </>
                ) : (
                  <span>The 12 Stages</span>
                )}
                <svg className={`w-3 h-3 transition-transform ${stagesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {stagesOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden">
                  <div className="px-3 py-2 border-b border-slate-800">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Pipeline</p>
                  </div>
                  {stages.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setStagesOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-slate-800 ${
                        pathname === s.href ? "text-blue-400 bg-slate-800/60" : "text-slate-300"
                      }`}
                    >
                      <span className="font-mono text-xs text-slate-500 w-6 flex-shrink-0">{s.num}</span>
                      <span>{s.label}</span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-800 px-3 py-2">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Tools</p>
                    {tools.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setStagesOpen(false)}
                        className="block px-0 py-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors"
                      >
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
            className="lg:hidden p-2 text-slate-400 hover:text-slate-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="lg:hidden pb-4 space-y-0.5 border-t border-slate-800 pt-3">
            <p className="px-3 py-1 text-xs text-slate-500 uppercase tracking-wide">The Pipeline</p>
            {stages.map((s) => (
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
                <span className="font-mono text-xs text-slate-600 w-5">{s.num}</span>
                {s.label}
              </Link>
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

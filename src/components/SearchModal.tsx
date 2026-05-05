"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { searchData, SearchItem } from "@/lib/searchData";

const fuse = new Fuse(searchData, {
  keys: ["title", "description", "keywords"],
  threshold: 0.35,
  includeScore: true,
});

const typeLabel: Record<SearchItem["type"], string> = {
  stage: "Stage",
  path: "Path",
  tool: "Tool",
  section: "Section",
};

const typeColor: Record<SearchItem["type"], string> = {
  stage: "text-blue-400",
  path: "text-purple-400",
  tool: "text-green-400",
  section: "text-slate-400",
};

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.length > 1
    ? fuse.search(query).slice(0, 8).map((r) => r.item)
    : searchData.slice(0, 6);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => { setSelected(0); }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    if (e.key === "Enter" && results[selected]) {
      window.location.href = results[selected].href;
      close();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4" onClick={close}>
      <div
        className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800">
          <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search stages, paths, tools…"
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-sm outline-none"
          />
          <kbd className="text-xs text-slate-600 border border-slate-700 rounded px-1.5 py-0.5">esc</kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-slate-500 text-center">No results for &ldquo;{query}&rdquo;</p>
          ) : (
            results.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`flex items-start gap-3 px-4 py-2.5 transition-colors ${i === selected ? "bg-slate-800" : "hover:bg-slate-800/50"}`}
              >
                <span className={`text-xs font-medium mt-0.5 w-10 flex-shrink-0 ${typeColor[item.type]}`}>
                  {typeLabel[item.type]}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-200">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-slate-800 px-4 py-2 flex items-center gap-4 text-xs text-slate-600">
          <span><kbd className="border border-slate-700 rounded px-1">↑↓</kbd> navigate</span>
          <span><kbd className="border border-slate-700 rounded px-1">↵</kbd> open</span>
          <span><kbd className="border border-slate-700 rounded px-1">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

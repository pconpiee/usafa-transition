"use client";

import { useState } from "react";
import Link from "next/link";

type Path = {
  id: string;
  label: string;
  tag: string;
  tagColor: string;
  shape: string;
  comp: string;
  pros: string[];
  cons: string[];
  honest: string;
};

export default function PathTabs({ paths }: { paths: Path[] }) {
  const [active, setActive] = useState(paths[0].id);
  const path = paths.find((p) => p.id === active)!;

  return (
    <div>
      {/* Tab bar — wraps on mobile */}
      <div className="flex flex-wrap gap-2 mb-6">
        {paths.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              active === p.id
                ? "bg-slate-700 text-slate-100 ring-1 ring-slate-500"
                : "bg-slate-900/70 text-slate-500 hover:text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Active path card */}
      <div className="border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-5 bg-slate-900/40">
          <div className="flex items-start justify-between gap-4 mb-2">
            <Link
              href={`/the-map/${path.id}`}
              className="font-bold text-slate-100 hover:text-blue-400 transition-colors text-lg"
            >
              {path.label} &rarr;
            </Link>
            <span className={`text-xs font-medium flex-shrink-0 mt-1 ${path.tagColor}`}>
              {path.tag}
            </span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-5">{path.shape}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                What works
              </p>
              <ul className="space-y-1.5">
                {path.pros.map((pro) => (
                  <li key={pro} className="flex gap-2 text-xs text-slate-400 leading-snug">
                    <span className="text-green-600 flex-shrink-0 mt-0.5">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                The real tradeoffs
              </p>
              <ul className="space-y-1.5">
                {path.cons.map((con) => (
                  <li key={con} className="flex gap-2 text-xs text-slate-400 leading-snug">
                    <span className="text-slate-600 flex-shrink-0 mt-0.5">&ndash;</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
            <span className="text-slate-400 font-medium">Comp range:</span> {path.comp}
          </p>
        </div>

        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 leading-relaxed italic">{path.honest}</p>
          <Link
            href={`/the-map/${path.id}`}
            className="flex-shrink-0 text-xs font-medium text-blue-400 hover:text-blue-300 whitespace-nowrap transition-colors"
          >
            Deep dive &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

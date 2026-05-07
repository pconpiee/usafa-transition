import Link from "next/link";

export function TLDR({ items }: { items: string[] }) {
  return (
    <div className="mt-6 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
      <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">TL;DR</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-400 flex gap-2">
            <span className="text-slate-500 flex-shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OnThisPage({ items }: { items: [string, string][] }) {
  return (
    <nav aria-label="On this page" className="mt-8 p-4 rounded-lg border border-slate-800 bg-slate-900/40">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">On this page</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {items.map(([href, label]) => (
          <Link key={href} href={href} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function StallCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
      <p className="text-xs text-amber-500 uppercase tracking-wide mb-1 font-semibold">Where people stall here</p>
      <p className="text-sm text-slate-300 leading-relaxed">{children}</p>
    </div>
  );
}

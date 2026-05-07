import Link from "next/link";

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

export default function StageNav({ current }: { current: string }) {
  const idx = stages.findIndex((s) => s.href === current);
  if (idx === -1) return null;
  const prev = idx > 0 ? stages[idx - 1] : null;
  const next = idx < stages.length - 1 ? stages[idx + 1] : null;

  return (
    <nav
      aria-label="Stage navigation"
      className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 gap-4 text-sm"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col items-start gap-1 p-4 -ml-4 rounded-lg hover:bg-slate-900/60 transition-colors"
        >
          <span className="text-xs text-slate-500 uppercase tracking-wide">← Previous</span>
          <span className="flex items-center gap-2">
            <span className="font-mono text-xs text-blue-400">{prev.num}</span>
            <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium">
              {prev.label}
            </span>
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-1 p-4 -mr-4 rounded-lg hover:bg-slate-900/60 transition-colors text-right"
        >
          <span className="text-xs text-slate-500 uppercase tracking-wide">Next →</span>
          <span className="flex items-center gap-2">
            <span className="font-mono text-xs text-blue-400">{next.num}</span>
            <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium">
              {next.label}
            </span>
          </span>
        </Link>
      ) : (
        <Link
          href="/"
          className="group flex flex-col items-end gap-1 p-4 -mr-4 rounded-lg hover:bg-slate-900/60 transition-colors text-right"
        >
          <span className="text-xs text-slate-500 uppercase tracking-wide">You finished the pipeline</span>
          <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium">
            Back to start →
          </span>
        </Link>
      )}
    </nav>
  );
}

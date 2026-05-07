// Horizontal bars showing year-1 / year-5 / year-10+ comp ranges across paths.
// Visual at a glance: "where are the slow burners vs the rocket ships".
const PATHS = [
  { label: "Airlines", color: "#34d399", y1: [80, 100], y5: [110, 180], y10: [200, 400] },
  { label: "Defense", color: "#60a5fa", y1: [90, 130], y5: [130, 180], y10: [180, 250] },
  { label: "Tech & Ops", color: "#a78bfa", y1: [100, 160], y5: [180, 280], y10: [300, 500] },
  { label: "Finance / Cons.", color: "#818cf8", y1: [130, 250], y5: [300, 450], y10: [400, 800] },
  { label: "Government", color: "#94a3b8", y1: [80, 120], y5: [110, 160], y10: [150, 220] },
  { label: "Entrepreneurship", color: "#fbbf24", y1: [0, 120], y5: [50, 300], y10: [0, 1000] },
];

const MAX_K = 800;

function Bar({ range, color }: { range: [number, number]; color: string }) {
  const [lo, hi] = range;
  const left = (lo / MAX_K) * 100;
  const width = ((hi - lo) / MAX_K) * 100;
  return (
    <div className="relative h-3 bg-slate-900 rounded-sm border border-slate-800">
      <div
        className="absolute inset-y-0 rounded-sm opacity-80"
        style={{ left: `${left}%`, width: `${Math.max(width, 0.6)}%`, background: color }}
        aria-hidden="true"
      />
    </div>
  );
}

function fmt([lo, hi]: [number, number]) {
  if (hi >= 1000) return `$${lo}K–$${(hi / 1000).toFixed(0)}M+`;
  return `$${lo}K–$${hi}K${hi >= 500 ? "+" : ""}`;
}

export default function PayComparisonChart() {
  return (
    <figure
      className="my-8 bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6"
      aria-labelledby="pay-chart-title"
    >
      <div className="flex items-baseline justify-between gap-3 mb-4">
        <p id="pay-chart-title" className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
          Comp range by path — at a glance
        </p>
        <p className="text-[10px] text-slate-500 font-mono">scale: $0 → $800K+</p>
      </div>

      {/* Header row */}
      <div className="hidden sm:grid grid-cols-[120px_1fr_1fr_1fr] gap-4 text-[10px] uppercase tracking-wide text-slate-500 mb-2">
        <div />
        <div>Year 1</div>
        <div>Year 5</div>
        <div>Year 10+</div>
      </div>

      <div className="space-y-3">
        {PATHS.map((p) => (
          <div
            key={p.label}
            className="grid grid-cols-1 sm:grid-cols-[120px_1fr_1fr_1fr] gap-2 sm:gap-4 sm:items-center"
          >
            <p className="text-xs font-medium text-slate-300">{p.label}</p>
            <div className="space-y-1">
              <Bar range={p.y1 as [number, number]} color={p.color} />
              <p className="text-[10px] text-slate-500 font-mono sm:hidden">
                Y1 {fmt(p.y1 as [number, number])}
              </p>
            </div>
            <div className="space-y-1">
              <Bar range={p.y5 as [number, number]} color={p.color} />
              <p className="text-[10px] text-slate-500 font-mono sm:hidden">
                Y5 {fmt(p.y5 as [number, number])}
              </p>
            </div>
            <div className="space-y-1">
              <Bar range={p.y10 as [number, number]} color={p.color} />
              <p className="text-[10px] text-slate-500 font-mono sm:hidden">
                Y10+ {fmt(p.y10 as [number, number])}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
        Bars show <span className="text-slate-300">range</span> from low to high; widths reflect comp
        <em> variance</em>, not certainty. Entrepreneurship&rsquo;s upper bound is unbounded — most
        founders earn near zero, a few earn life-changing amounts.
      </p>
    </figure>
  );
}

interface Component {
  label: string;
  value: number;
  color: string;
}

export default function CompStackedBar({
  basePay,
  flightPay,
  bah,
  bas,
  tricare,
  retirement,
  taxAdvantage,
}: {
  basePay: number;
  flightPay: number;
  bah: number;
  bas: number;
  tricare: number;
  retirement: number;
  taxAdvantage: number;
}) {
  const components: Component[] = [
    { label: "Base pay", value: basePay, color: "#3b82f6" },
    { label: "Flight pay", value: flightPay, color: "#a78bfa" },
    { label: "BAH", value: bah, color: "#22d3ee" },
    { label: "BAS", value: bas, color: "#34d399" },
    { label: "TRICARE", value: tricare, color: "#fbbf24" },
    { label: "Retirement", value: retirement, color: "#f472b6" },
    { label: "Tax advantage", value: taxAdvantage, color: "#facc15" },
  ].filter((c) => c.value > 0);

  const total = components.reduce((s, c) => s + c.value, 0) || 1;
  const fmt = (n: number) =>
    "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <figure className="my-6" aria-labelledby="comp-bar-title">
      <p id="comp-bar-title" className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
        Civilian-equivalent comp, broken down
      </p>
      {/* Stacked bar */}
      <div className="flex w-full h-7 rounded-md overflow-hidden border border-slate-700">
        {components.map((c) => (
          <div
            key={c.label}
            style={{
              width: `${(c.value / total) * 100}%`,
              background: c.color,
            }}
            title={`${c.label}: ${fmt(c.value)} (${Math.round((c.value / total) * 100)}%)`}
            aria-label={`${c.label}: ${fmt(c.value)}`}
          />
        ))}
      </div>
      {/* Legend */}
      <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-xs">
        {components.map((c) => (
          <li key={c.label} className="flex items-center gap-2 text-slate-400">
            <span
              aria-hidden="true"
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
              style={{ background: c.color }}
            />
            <span className="flex-1">{c.label}</span>
            <span className="font-mono text-slate-500 text-[11px]">
              {Math.round((c.value / total) * 100)}%
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500">
        Total: <span className="font-mono text-slate-300">{fmt(total)}</span>
      </p>
    </figure>
  );
}

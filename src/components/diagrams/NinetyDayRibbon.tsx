const PHASES = [
  { weeks: "1–2", title: "Listen & Learn", color: "#60a5fa", goal: "Absorb. Don't impress." },
  { weeks: "3–4", title: "Map the System", color: "#a78bfa", goal: "Understand the machine." },
  { weeks: "5–8", title: "Early Win", color: "#22d3ee", goal: "Demonstrate ability." },
  { weeks: "9–12", title: "Expand & Invest", color: "#34d399", goal: "Build cross-team relationships." },
];

export default function NinetyDayRibbon() {
  return (
    <figure className="my-6">
      <svg viewBox="0 0 600 130" role="img" aria-labelledby="ninety-title" className="w-full h-auto">
        <title id="ninety-title">First 90 days — phase ribbon</title>

        {/* Week axis ticks */}
        {Array.from({ length: 13 }).map((_, i) => (
          <g key={i}>
            <line x1={20 + i * 47} y1="98" x2={20 + i * 47} y2="103" stroke="#334155" strokeWidth="1" />
            {i % 2 === 0 && (
              <text x={20 + i * 47} y="118" textAnchor="middle" fontSize="9" fill="#64748b">
                W{i}
              </text>
            )}
          </g>
        ))}
        <line x1="20" y1="98" x2="584" y2="98" stroke="#334155" strokeWidth="1" />

        {/* Phase blocks */}
        {(() => {
          const ranges: [number, number][] = [
            [1, 2],
            [3, 4],
            [5, 8],
            [9, 12],
          ];
          return PHASES.map((p, i) => {
            const [from, to] = ranges[i];
            const x = 20 + (from - 1) * 47;
            const w = (to - from + 1) * 47;
            return (
              <g key={p.title}>
                <rect
                  x={x + 2}
                  y={20}
                  width={w - 4}
                  height={70}
                  rx="6"
                  fill={p.color}
                  fillOpacity="0.12"
                  stroke={p.color}
                  strokeWidth="1.5"
                />
                <text
                  x={x + w / 2}
                  y={42}
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="ui-monospace, monospace"
                  fill={p.color}
                  fontWeight="700"
                >
                  Week {p.weeks}
                </text>
                <text
                  x={x + w / 2}
                  y={60}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#e2e8f0"
                  fontWeight="600"
                >
                  {p.title}
                </text>
                <text
                  x={x + w / 2}
                  y={78}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#94a3b8"
                >
                  {p.goal}
                </text>
              </g>
            );
          });
        })()}
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        Each phase earns the next. Skip phase 1 and you&rsquo;ll perform too early.
      </figcaption>
    </figure>
  );
}

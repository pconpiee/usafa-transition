"use client";

interface Milestone {
  monthsOut: number;
  title: string;
  category: "admin" | "career" | "financial" | "personal" | "network";
}

const CATEGORY_COLOR: Record<Milestone["category"], string> = {
  admin: "#f87171",
  career: "#60a5fa",
  financial: "#fbbf24",
  personal: "#34d399",
  network: "#a78bfa",
};

export default function TimelineAxis({ milestones }: { milestones: Milestone[] }) {
  // monthsOut ranges from +18 (left) down to -3 (right, post-separation).
  const MAX = 18;
  const MIN = -3;
  const RANGE = MAX - MIN; // 21

  const W = 800;
  const PAD_L = 50;
  const PAD_R = 30;
  const PLOT_W = W - PAD_L - PAD_R;
  const H = 200;

  const xFor = (m: number) => PAD_L + ((MAX - m) / RANGE) * PLOT_W;

  // Group milestones by integer monthsOut so dots stack vertically when overlapping.
  const grouped: Record<number, Milestone[]> = {};
  for (const m of milestones) {
    if (m.monthsOut > MAX || m.monthsOut < MIN) continue;
    (grouped[m.monthsOut] ||= []).push(m);
  }

  const ticks = [18, 15, 12, 9, 6, 3, 0, -3];

  return (
    <figure className="my-6 overflow-x-auto" aria-labelledby="timeline-axis-title">
      <p id="timeline-axis-title" className="sr-only">
        Visual timeline: milestones plotted by months from separation
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" className="w-full h-auto min-w-[640px]">
        {/* Separation marker */}
        <line
          x1={xFor(0)}
          y1={20}
          x2={xFor(0)}
          y2={H - 30}
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <text x={xFor(0)} y={16} textAnchor="middle" fontSize="11" fill="#60a5fa" fontWeight="700">
          Separation
        </text>

        {/* Axis line */}
        <line x1={PAD_L} y1={H - 30} x2={W - PAD_R} y2={H - 30} stroke="#334155" strokeWidth="1" />

        {/* Ticks */}
        {ticks.map((t) => (
          <g key={t}>
            <line x1={xFor(t)} y1={H - 30} x2={xFor(t)} y2={H - 25} stroke="#475569" strokeWidth="1" />
            <text x={xFor(t)} y={H - 12} textAnchor="middle" fontSize="10" fill="#64748b">
              {t > 0 ? `${t}mo` : t === 0 ? "0" : `+${Math.abs(t)}mo`}
            </text>
          </g>
        ))}

        {/* Milestone dots, stacked vertically when same month */}
        {Object.entries(grouped).map(([m, items]) => {
          const x = xFor(Number(m));
          return items.map((it, i) => {
            const y = H - 50 - i * 14;
            return (
              <g key={`${m}-${i}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill={CATEGORY_COLOR[it.category]}
                  fillOpacity="0.85"
                  stroke="#0a0f1a"
                  strokeWidth="1.5"
                >
                  <title>{`${m}mo — ${it.title}`}</title>
                </circle>
              </g>
            );
          });
        })}

        {/* Legend */}
        <g transform={`translate(${PAD_L}, ${H - 195})`}>
          {Object.entries(CATEGORY_COLOR).map(([k, c], i) => (
            <g key={k} transform={`translate(${i * 95}, 0)`}>
              <circle cx="6" cy="6" r="4" fill={c} />
              <text x="16" y="9" fontSize="10" fill="#94a3b8" style={{ textTransform: "capitalize" }}>
                {k}
              </text>
            </g>
          ))}
        </g>
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        Months from separation. Hover a dot to see the milestone.
      </figcaption>
    </figure>
  );
}

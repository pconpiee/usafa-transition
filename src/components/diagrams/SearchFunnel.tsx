// 7-step JPOS funnel — visualized as a narrowing pipeline.
const STEPS = [
  { num: 0, label: "Discovery", color: "#94a3b8", note: "Found it" },
  { num: 1, label: "Qualify", color: "#fbbf24", note: "Hard constraints" },
  { num: 2, label: "Research", color: "#60a5fa", note: "Org + role" },
  { num: 3, label: "Network", color: "#a78bfa", note: "2+ contacts" },
  { num: 4, label: "Applied", color: "#22d3ee", note: "Submitted" },
  { num: 5, label: "Interview", color: "#34d399", note: "Active" },
  { num: 6, label: "Offer", color: "#10b981", note: "Decision" },
];

export default function SearchFunnel() {
  // Each step occupies an equal horizontal slice; vertical height tapers linearly
  // from 90% (Discovery) down to 35% (Offer) — a gentle funnel.
  const SLICE = 600 / STEPS.length;
  const minH = 26;
  const maxH = 64;
  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 600 110"
        role="img"
        aria-labelledby="funnel-title funnel-desc"
        className="w-full h-auto"
      >
        <title id="funnel-title">JPOS — 7-step pipeline funnel</title>
        <desc id="funnel-desc">
          A horizontal funnel showing the 7 steps of the Job Pursuit Operating System,
          narrowing from Discovery on the left to Offer on the right. Each step is
          color-coded and labeled.
        </desc>
        {STEPS.map((s, i) => {
          const t = i / (STEPS.length - 1);
          const h = maxH - t * (maxH - minH);
          const y = (110 - h) / 2 - 10;
          const x = i * SLICE + 4;
          const w = SLICE - 8;
          return (
            <g key={s.num}>
              <rect
                x={x}
                y={y}
                width={w}
                height={h}
                rx="4"
                fill={s.color}
                fillOpacity="0.15"
                stroke={s.color}
                strokeWidth="1"
              />
              <text
                x={x + w / 2}
                y={y + h / 2 - 1}
                textAnchor="middle"
                fill={s.color}
                fontSize="11"
                fontWeight="700"
                fontFamily="ui-monospace, monospace"
              >
                S{s.num}
              </text>
              <text
                x={x + w / 2}
                y={y + h / 2 + 11}
                textAnchor="middle"
                fill="#cbd5e1"
                fontSize="9"
              >
                {s.label}
              </text>
              <text
                x={x + w / 2}
                y={y + h + 14}
                textAnchor="middle"
                fill="#64748b"
                fontSize="8"
              >
                {s.note}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        Every role you track sits at exactly one step. Volume narrows as scrutiny rises.
        Don&rsquo;t deep-research a role before it clears Step 1.
      </figcaption>
    </figure>
  );
}

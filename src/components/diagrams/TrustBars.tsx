// Three components stacking up to "Trust" — Mayer, Davis & Schoorman (1995).
const PARTS = [
  { label: "Ability", note: "the early win", color: "#60a5fa" },
  { label: "Benevolence", note: "help that isn't yours", color: "#34d399" },
  { label: "Integrity", note: "consistency over time", color: "#fbbf24" },
];

export default function TrustBars() {
  return (
    <figure className="my-6">
      <svg viewBox="0 0 400 180" role="img" aria-labelledby="trust-title" className="w-full h-auto max-w-md mx-auto">
        <title id="trust-title">Trust = Ability + Benevolence + Integrity</title>
        {/* Three stacking blocks rising to a Trust cap */}
        {PARTS.map((p, i) => {
          const x = 30 + i * 115;
          return (
            <g key={p.label}>
              <rect
                x={x}
                y={60 - i * 0}
                width={95}
                height={70}
                rx="6"
                fill={p.color}
                fillOpacity="0.18"
                stroke={p.color}
                strokeWidth="1.5"
              />
              <text x={x + 47} y={88} textAnchor="middle" fontSize="13" fontWeight="700" fill={p.color}>
                {p.label}
              </text>
              <text x={x + 47} y={106} textAnchor="middle" fontSize="9" fill="#94a3b8">
                {p.note}
              </text>
              <text x={x + 47} y={150} textAnchor="middle" fontSize="14" fontWeight="700" fill="#475569">
                {i < PARTS.length - 1 ? "+" : ""}
              </text>
            </g>
          );
        })}
        <text x="200" y={40} textAnchor="middle" fontSize="13" fill="#cbd5e1" fontWeight="600">
          Observed Trust
        </text>
        <line x1="30" y1="50" x2="370" y2="50" stroke="#334155" strokeWidth="1" />
        <text x="200" y={172} textAnchor="middle" fontSize="9" fill="#64748b">
          Mayer, Davis &amp; Schoorman (1995)
        </text>
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        All three are required. Two out of three reads as &ldquo;competent but not safe&rdquo; or
        &ldquo;nice but not effective.&rdquo;
      </figcaption>
    </figure>
  );
}

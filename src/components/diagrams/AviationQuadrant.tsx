// 2x2 — comp ceiling (y) vs lifestyle/predictability (x)
const PATHS = [
  { id: "majors", label: "Commercial Majors", x: 32, y: 78, color: "#34d399" },
  { id: "cargo", label: "Cargo (FedEx/UPS)", x: 72, y: 80, color: "#22d3ee" },
  { id: "fractional", label: "Fractional / Charter", x: 22, y: 70, color: "#a78bfa" },
  { id: "corporate", label: "Corporate flight dept", x: 80, y: 50, color: "#60a5fa" },
];

export default function AviationQuadrant() {
  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 600 360"
        role="img"
        aria-labelledby="av-quad-title av-quad-desc"
        className="w-full h-auto"
      >
        <title id="av-quad-title">Aviation paths — comp ceiling vs. lifestyle</title>
        <desc id="av-quad-desc">
          A 2x2 chart with comp ceiling on the vertical axis and schedule predictability /
          lifestyle on the horizontal axis. Commercial majors and cargo sit in the high-comp /
          high-lifestyle band; fractional sits high-comp but lower-lifestyle; corporate sits
          high-lifestyle but lower comp ceiling.
        </desc>

        {/* Frame */}
        <rect x="60" y="40" width="500" height="270" fill="none" stroke="#1e293b" strokeWidth="1" />
        {/* Quadrant cross */}
        <line x1="310" y1="40" x2="310" y2="310" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="60" y1="175" x2="560" y2="175" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

        {/* Axis labels */}
        <text x="40" y="50" fontSize="10" fill="#64748b">$$$</text>
        <text x="40" y="305" fontSize="10" fill="#64748b">$</text>
        <text x="60" y="335" fontSize="10" fill="#64748b">less predictable</text>
        <text x="560" y="335" fontSize="10" fill="#64748b" textAnchor="end">more predictable</text>
        <text x="20" y="180" fontSize="10" fill="#94a3b8" transform="rotate(-90 20 180)" textAnchor="middle">Comp ceiling</text>
        <text x="310" y="355" fontSize="10" fill="#94a3b8" textAnchor="middle">Lifestyle / schedule predictability</text>

        {/* Quadrant labels */}
        <text x="180" y="60" fontSize="9" fill="#475569" textAnchor="middle">High pay, harder schedule</text>
        <text x="440" y="60" fontSize="9" fill="#475569" textAnchor="middle">High pay, predictable schedule</text>
        <text x="180" y="295" fontSize="9" fill="#475569" textAnchor="middle">Lower pay, harder schedule</text>
        <text x="440" y="295" fontSize="9" fill="#475569" textAnchor="middle">Lower pay, predictable schedule</text>

        {/* Plotted paths */}
        {PATHS.map((p) => {
          const cx = 60 + (p.x / 100) * 500;
          const cy = 310 - (p.y / 100) * 270;
          return (
            <g key={p.id}>
              <circle cx={cx} cy={cy} r="9" fill={p.color} fillOpacity="0.25" stroke={p.color} strokeWidth="2" />
              <text
                x={cx}
                y={cy - 14}
                textAnchor="middle"
                fontSize="11"
                fill="#e2e8f0"
                fontWeight="600"
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        Most pilots default to majors. Three other flavors offer different trade-offs.
      </figcaption>
    </figure>
  );
}

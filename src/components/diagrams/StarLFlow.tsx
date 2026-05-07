const NODES = [
  { l: "S", t: "Situation", d: "What was the context?", color: "#60a5fa" },
  { l: "T", t: "Task", d: "What was your responsibility?", color: "#a78bfa" },
  { l: "A", t: "Action", d: "What did you do, specifically?", color: "#22d3ee" },
  { l: "R", t: "Result", d: "What changed because of you?", color: "#34d399" },
  { l: "L", t: "Learning", d: "What would you do differently?", color: "#fbbf24" },
];

export default function StarLFlow() {
  const W = 100;
  const GAP = 12;
  return (
    <figure className="my-6">
      <svg
        viewBox={`0 0 ${NODES.length * (W + GAP)} 150`}
        role="img"
        aria-labelledby="star-title"
        className="w-full h-auto"
      >
        <title id="star-title">STAR-L story structure</title>
        {NODES.map((n, i) => {
          const x = i * (W + GAP);
          return (
            <g key={n.l}>
              {/* Connector arrow */}
              {i < NODES.length - 1 && (
                <line
                  x1={x + W + 2}
                  y1={45}
                  x2={x + W + GAP - 2}
                  y2={45}
                  stroke="#475569"
                  strokeWidth="1.5"
                  markerEnd="url(#arrow)"
                />
              )}
              <rect
                x={x}
                y={10}
                width={W}
                height={70}
                rx="8"
                fill={n.color}
                fillOpacity="0.12"
                stroke={n.color}
                strokeWidth="1.5"
              />
              <text
                x={x + W / 2}
                y={36}
                textAnchor="middle"
                fontSize="22"
                fontWeight="800"
                fill={n.color}
                fontFamily="ui-monospace, monospace"
              >
                {n.l}
              </text>
              <text
                x={x + W / 2}
                y={56}
                textAnchor="middle"
                fontSize="11"
                fill="#e2e8f0"
                fontWeight="600"
              >
                {n.t}
              </text>
              <text x={x + W / 2} y={100} textAnchor="middle" fontSize="9" fill="#94a3b8">
                <tspan x={x + W / 2} dy="0">{n.d.split("?")[0]}?</tspan>
              </text>
            </g>
          );
        })}
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L5,3 z" fill="#475569" />
          </marker>
        </defs>
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        STAR-L: the L is the move that distinguishes a story from a brag. Always include it.
      </figcaption>
    </figure>
  );
}

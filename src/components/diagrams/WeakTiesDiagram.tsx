export default function WeakTiesDiagram() {
  // Two clusters: "You + strong ties" on the left, "Different industry" on the right.
  // One bridge edge = the weak tie.
  // Inside each cluster, every node is connected to every other (redundant info).
  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 600 240"
        role="img"
        aria-labelledby="weak-ties-title weak-ties-desc"
        className="w-full h-auto bg-slate-900/40 border border-slate-800 rounded-xl"
      >
        <title id="weak-ties-title">Weak ties bridge structural holes</title>
        <desc id="weak-ties-desc">
          Two clusters of contacts: a dense cluster on the left containing you and four close
          contacts, all interconnected; a separate cluster on the right of five contacts in a
          different industry. A single edge — a weak tie — bridges the two clusters. The
          weak tie is the path through which non-redundant information flows.
        </desc>

        {/* Left cluster — strong ties */}
        <g>
          {/* Edges between strong ties (fully connected) */}
          {[
            [120, 60, 180, 110],
            [120, 60, 90, 140],
            [120, 60, 170, 180],
            [120, 60, 60, 90],
            [180, 110, 90, 140],
            [180, 110, 170, 180],
            [180, 110, 60, 90],
            [90, 140, 170, 180],
            [90, 140, 60, 90],
            [170, 180, 60, 90],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={`l${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#1e293b"
              strokeWidth="1"
            />
          ))}
          {/* Cluster nodes */}
          <circle cx="120" cy="60" r="9" fill="#3b82f6" />
          <text x="120" y="40" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="600">
            You
          </text>
          <circle cx="180" cy="110" r="6" fill="#475569" />
          <circle cx="90" cy="140" r="6" fill="#475569" />
          <circle cx="170" cy="180" r="6" fill="#475569" />
          <circle cx="60" cy="90" r="6" fill="#475569" />
          <text x="120" y="225" textAnchor="middle" fill="#64748b" fontSize="10">
            Strong ties — same circles, redundant info
          </text>
        </g>

        {/* Bridge edge (the weak tie) */}
        <line
          x1="180"
          y1="110"
          x2="430"
          y2="120"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <text x="305" y="100" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="600">
          weak tie
        </text>
        <text x="305" y="115" textAnchor="middle" fill="#94a3b8" fontSize="9">
          (the bridge)
        </text>

        {/* Right cluster — different industry */}
        <g>
          {[
            [430, 120, 490, 70],
            [430, 120, 540, 100],
            [430, 120, 510, 170],
            [430, 120, 460, 200],
            [490, 70, 540, 100],
            [490, 70, 510, 170],
            [540, 100, 510, 170],
            [510, 170, 460, 200],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={`r${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#1e293b"
              strokeWidth="1"
            />
          ))}
          <circle cx="430" cy="120" r="6" fill="#475569" />
          <circle cx="490" cy="70" r="6" fill="#475569" />
          <circle cx="540" cy="100" r="6" fill="#475569" />
          <circle cx="510" cy="170" r="6" fill="#475569" />
          <circle cx="460" cy="200" r="6" fill="#475569" />
          <text x="490" y="225" textAnchor="middle" fill="#64748b" fontSize="10">
            Different industry — non-redundant info
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        Granovetter (1973): the bridge — your weak tie — is the path information takes
        between worlds. Most of your job leads come from this edge, not from the dense
        cluster on the left.
      </figcaption>
    </figure>
  );
}

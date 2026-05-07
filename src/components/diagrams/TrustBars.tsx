// Three components stacking up to "Trust" — Mayer, Davis & Schoorman (1995).
const PARTS = [
  { label: "Ability", note: "the early win", color: "#60a5fa" },
  { label: "Benevolence", note: "help that isn't yours", color: "#34d399" },
  { label: "Integrity", note: "consistency over time", color: "#fbbf24" },
];

export default function TrustBars() {
  return (
    <figure className="my-8" aria-labelledby="trust-title">
      <p id="trust-title" className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Observed Trust
      </p>

      {/* Equation row: [A] + [B] + [C] = Trust */}
      <div className="flex items-stretch justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
        {PARTS.map((p, i) => (
          <div key={p.label} className="flex items-stretch gap-2 sm:gap-3 flex-1 min-w-0">
            <div
              className="flex-1 rounded-lg p-3 sm:p-4 text-center border-2 min-w-0"
              style={{
                background: `${p.color}15`,
                borderColor: `${p.color}88`,
              }}
            >
              <p
                className="text-sm sm:text-base font-bold mb-1"
                style={{ color: p.color }}
              >
                {p.label}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">{p.note}</p>
            </div>
            {i < PARTS.length - 1 && (
              <span
                aria-hidden="true"
                className="self-center text-xl sm:text-2xl text-slate-500 font-light"
              >
                +
              </span>
            )}
          </div>
        ))}
        <span aria-hidden="true" className="self-center text-xl sm:text-2xl text-slate-500 font-light">
          =
        </span>
        <div
          className="flex-1 rounded-lg p-3 sm:p-4 text-center border-2 min-w-0"
          style={{
            background: "#3b82f618",
            borderColor: "#60a5fa",
          }}
        >
          <p className="text-sm sm:text-base font-bold mb-1 text-blue-300">Trust</p>
          <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">earned, then maintained</p>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        Mayer, Davis &amp; Schoorman (1995). All three required &mdash; two-out-of-three reads as
        &ldquo;competent but not safe&rdquo; or &ldquo;nice but not effective.&rdquo;
      </p>
    </figure>
  );
}

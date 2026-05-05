import Link from "next/link";

export const metadata = {
  title: "Comp Reference | Blue Canopy",
  description:
    "Side-by-side compensation data for all six post-military career paths. Year 1, Year 5, Year 10+, ceilings, equity, and the thing to watch for each one.",
};

const paths = [
  {
    id: "airlines",
    label: "Airlines",
    tag: "Known quantity",
    tagColor: "text-green-400",
    href: "/the-map/airlines",
    year1: { range: "$80K–$100K", note: "Regional FO" },
    year5: { range: "$110K–$180K", note: "Captain upgrade or FO at a major" },
    year10: { range: "$200K–$400K+", note: "Major captain (10–15yr seniority)" },
    ceiling: "High — transparent seniority ladder; slow climb, no ceiling",
    equity: "None",
    pension: "Defined benefit at most majors",
    flag: "First 2–5 years at regionals are lean. Budget for them.",
  },
  {
    id: "defense",
    label: "Defense & Aerospace",
    tag: "Easiest translation",
    tagColor: "text-blue-400",
    href: "/the-map/defense",
    year1: { range: "$90K–$130K", note: "PM, BD, ops roles" },
    year5: { range: "$130K–$180K", note: "Program manager, senior BD" },
    year10: { range: "$180K–$250K+", note: "Director, VP — varies by company" },
    ceiling: "Moderate — comp compresses without lateral moves",
    equity: "RSUs at publicly traded primes (Lockheed, RTX, L3, etc.)",
    pension: "401k matching standard; no defined benefit",
    flag: "Clearance premium erodes if it's your only differentiator.",
  },
  {
    id: "tech-business",
    label: "Tech & Business",
    tag: "Highest upside",
    tagColor: "text-purple-400",
    href: "/the-map/tech-business",
    year1: { range: "$100K–$160K", note: "PM, ops, strategy, BizOps" },
    year5: { range: "$160K–$250K", note: "Senior IC or early management" },
    year10: { range: "$250K–$500K+", note: "Director/VP + equity" },
    ceiling: "Highest of any path — equity events can compress decades",
    equity: "RSUs or options standard; can be material at growth-stage companies",
    pension: "401k only — but total comp ceiling is the highest",
    flag: "Translation cost is highest. Network is the path in, not applications.",
  },
  {
    id: "government",
    label: "Government & Civil Service",
    tag: "Stability, capped comp",
    tagColor: "text-slate-400",
    href: "/the-map/government",
    year1: { range: "$80K–$120K", note: "GS-12/13 entry" },
    year5: { range: "$105K–$140K", note: "GS-13/14 equivalent" },
    year10: { range: "$130K–$180K", note: "GS-15 or SES — hard cap by statute" },
    ceiling: "Hard ceiling — SES limit regardless of scope or contribution",
    equity: "None",
    pension: "FERS + TSP match — significant long-term wealth if you stay",
    flag: "Pension vesting creates golden handcuffs. Know when they click.",
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    tag: "High risk, uncapped",
    tagColor: "text-orange-400",
    href: "/the-map/entrepreneurship",
    year1: {
      range: "$0–$110K",
      note: "Own startup: survival mode. Early employee: $80K–$110K + equity",
    },
    year5: { range: "Highly variable", note: "Depends on traction or company stage" },
    year10: { range: "Uncapped", note: "Exit event: significant. Most startups: minimal exit." },
    ceiling: "Uncapped — but base rate of startup failure is high",
    equity: "Central to the model. Price it at $0; be pleasantly surprised.",
    pension: "None at early-stage companies",
    flag: "Model equity at zero. The comp upside is real but not the base case.",
  },
  {
    id: "nontraditional",
    label: "Non-Traditional",
    tag: "Worth naming",
    tagColor: "text-teal-400",
    href: "/the-map/nontraditional",
    year1: { range: "$40K–$80K", note: "Education, ministry, nonprofit" },
    year5: { range: "$60K–$100K", note: "Varies widely by sector and location" },
    year10: {
      range: "$80K–$130K",
      note: "Senior roles at larger nonprofits or education admin",
    },
    ceiling: "Lower — but comp is rarely the primary consideration here",
    equity: "None",
    pension: "TIAA/403b in education; some access to pension",
    flag: "Requires deliberate financial planning before you choose.",
  },
];

export default function CompReference() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Reference Tool
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
            Comp Reference
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed max-w-2xl">
            Side-by-side compensation data for all six paths. Year 1, Year 5, Year 10+. Ceilings,
            equity notes, and the flag for each one. Use this to compare trajectories, not just
            starting salaries.
          </p>
          <p className="mt-3 text-xs text-slate-600">
            Ranges are 2025–2026 US civilian market. Geography matters significantly — DC, SF, NY
            skew higher; most other markets are lower. These are research baselines, not guarantees.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Summary table */}
        <section>
          <h2 className="text-lg font-bold text-slate-100 mb-4">Year-by-year comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-4 py-3 text-xs text-slate-500 font-medium">Path</th>
                  <th className="text-left px-4 py-3 text-xs text-slate-500 font-medium">Year 1</th>
                  <th className="text-left px-4 py-3 text-xs text-slate-500 font-medium">Year 5</th>
                  <th className="text-left px-4 py-3 text-xs text-slate-500 font-medium">Year 10+</th>
                  <th className="text-left px-4 py-3 text-xs text-slate-500 font-medium hidden sm:table-cell">
                    Ceiling
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {paths.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-4 py-3.5">
                      <p className={`font-semibold text-xs ${p.tagColor}`}>{p.label}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{p.tag}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="text-slate-300 font-mono text-xs">{p.year1.range}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{p.year1.note}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="text-slate-300 font-mono text-xs">{p.year5.range}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{p.year5.note}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="text-slate-300 font-mono text-xs">{p.year10.range}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{p.year10.note}</p>
                    </td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">
                      <p className="text-slate-500 text-xs leading-snug max-w-[200px]">
                        {p.ceiling}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Equity + pension + flag */}
        <section>
          <h2 className="text-lg font-bold text-slate-100 mb-4">Equity, benefits & watch-outs</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {paths.map((p) => (
              <div
                key={p.id}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className={`font-semibold text-sm ${p.tagColor}`}>{p.label}</p>
                  <Link
                    href={p.href}
                    className="text-xs text-slate-600 hover:text-blue-400 transition-colors"
                  >
                    Deep dive →
                  </Link>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex gap-2">
                    <span className="text-slate-600 w-14 flex-shrink-0">Equity</span>
                    <span className="text-slate-400 leading-snug">{p.equity}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-600 w-14 flex-shrink-0">Pension</span>
                    <span className="text-slate-400 leading-snug">{p.pension}</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 flex gap-2">
                    <span className="text-amber-600 flex-shrink-0">▲</span>
                    <span className="text-slate-500 italic leading-snug">{p.flag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Framing note */}
        <section className="border-l-2 border-slate-700 pl-5 py-1">
          <p className="text-sm text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Starting comp is not the metric.</strong> The
            question is trajectory — where you are in Year 5, Year 10, and what options you have
            at each point. A $90K defense role with strong clearance mobility is a different bet
            than a $90K government role with pension lock-in. Model both before you decide.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 text-sm pt-4 border-t border-slate-800">
          <Link href="/the-map" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← The Map (Stage 03)
          </Link>
          <Link href="/paths" className="text-slate-500 hover:text-slate-300 transition-colors">
            Paths decision tool
          </Link>
          <Link
            href="/negotiation"
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            Stage 09: Negotiation
          </Link>
          <Link
            href="/the-long-game"
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            Stage 11: The Long Game
          </Link>
        </div>
      </div>
    </div>
  );
}

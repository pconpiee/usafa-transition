import Link from "next/link";

export const metadata = {
  title: "Paths | Blue Canopy",
  description:
    "Five archetypes USAFA pilots actually live after active duty — the zoomed-out lens. Each maps to one or more of the seven industry paths on the Map.",
};

const paths = [
  {
    id: "airlines",
    label: "Commercial Airlines",
    tag: "Known quantity",
    tagColor: "text-green-400",
    oneLiner:
      "A life organized around flying, with a transparent seniority system and a community you already understand.",
    comp: "$80K–$100K (regional FO) → $200K–$400K+ (major captain, 10–15 yr)",
    skillTransfer: "High — you're still flying",
    hiringComplexity: "Low — structured pipeline via ATP, interview prep, class dates",
    compCeiling: "Moderate-high (seniority-gated, not performance-gated)",
    identityContinuity: "High — you remain 'the pilot'",
    timeToLand: "Short to medium — 6–18 months from decision",
    keyStages: "Stages 06–09",
    keyStagesNote: "Applications, interviews, pipeline management, negotiation. The path itself is clear — the prep is the work.",
    honest:
      "If you genuinely want to fly commercially, do it. The biggest trap isn't going to the airlines — it's going because you don't know what else to do. One is a career. The other is deferred decision-making.",
    watchOut:
      "The first 2–5 years at regionals are financially harder than the seniority chart suggests. Plan the gap before you commit.",
  },
  {
    id: "guard-reserve",
    label: "Guard / Reserve + Civilian Career",
    tag: "Both worlds",
    tagColor: "text-blue-400",
    oneLiner:
      "Keep flying part-time while building a civilian career. The operational identity doesn't have to end.",
    comp: "Guard/Reserve pay (variable) + civilian salary (wide range by path)",
    skillTransfer: "High — mission continuity with civilian skill-building",
    hiringComplexity: "Low to medium — employers vary on Guard/Reserve flexibility",
    compCeiling: "Depends entirely on the civilian track you pursue alongside it",
    identityContinuity: "High — you stay in the community",
    timeToLand: "Depends on the civilian piece — Guard slot can be fast if one is open",
    keyStages: "Stages 01–05",
    keyStagesNote: "The identity and vision work matters more here, not less. You're managing two tracks — which means the clarity work at Stages 01–03 is load-bearing.",
    honest:
      "Guard and Reserve is a legitimate choice, not a fallback. The trap is using it to delay the civilian identity work. You still have to figure out who you are when you're not in uniform — the Guard just gives you more runway.",
    watchOut:
      "Employer compatibility is real. Some employers value Guard/Reserve service; some will quietly penalize the schedule unpredictability. Do the research before you take the job.",
  },
  {
    id: "defense",
    label: "Defense & Aerospace Industry",
    tag: "Easiest translation",
    tagColor: "text-amber-400",
    oneLiner:
      "A life adjacent to the mission, with credentials that translate immediately and a culture that doesn't need explaining.",
    comp: "$90K–$130K (entry/mid) → $150K–$250K+ (program director, senior exec)",
    skillTransfer: "High — you were the customer",
    hiringComplexity: "Medium — clearance is an asset; network into it",
    compCeiling: "Moderate-high (strong upside at director/exec level)",
    identityContinuity: "Medium — mission-adjacent but different role",
    timeToLand: "Medium — 3–9 months with a warm network",
    keyStages: "Stages 04–10",
    keyStagesNote: "The full pipeline. The translation is easy — the search and negotiation still require work. Don't assume the clearance premium removes the need to negotiate.",
    honest:
      "This is the natural first move for a lot of vets, and for good reason. The risk is staying longer than serves you because it's comfortable. Defense is a great foundation, not necessarily a ceiling.",
    watchOut:
      "The 'military guy' identity trap is real in defense contracting. Be the person with operational experience who is actively building civilian skills — not the person who peaked in the cockpit.",
  },
  {
    id: "corporate",
    label: "Corporate / Private Aviation & Operations",
    tag: "Premium ceiling",
    tagColor: "text-purple-400",
    oneLiner:
      "High-comp, high-expectation civilian roles where operational excellence and leadership credibility are the actual product.",
    comp: "$100K–$160K (PM/ops entry) → $200K–$500K+ (senior leadership, equity events)",
    skillTransfer: "Medium — transferable with translation work",
    hiringComplexity: "High — network-dependent, longer cycle, more opaque",
    compCeiling: "High — performance-gated, not seniority-gated",
    identityContinuity: "Low to medium — new vocabulary, new status markers",
    timeToLand: "Long — 6–18 months for senior roles",
    keyStages: "All 12",
    keyStagesNote: "Every stage earns its place here. The identity work, the gift inventory, the network — all of it is load-bearing. This path rewards the pilots who did the full preparation.",
    honest:
      "The comp ceiling is real. So is the ramp time. You will feel like a beginner for longer than you expect. That's not a signal you're failing — it's a signal you're in the right kind of stretch.",
    watchOut:
      "Don't lead with the jet. Your flying experience is interesting for one conversation. What gets you the offer is demonstrating that you understand what the business needs and can deliver it.",
  },
  {
    id: "reinvention",
    label: "Full Reinvention",
    tag: "New person",
    tagColor: "text-rose-400",
    oneLiner:
      "Tech, consulting, finance, entrepreneurship, law, medicine — paths where the pilot identity becomes context, not credential.",
    comp: "Wide range — $0 (early startup) to $300K+ (finance, senior consulting)",
    skillTransfer: "Low to medium — and that's fine",
    hiringComplexity: "High — requires the most positioning and translation work",
    compCeiling: "Highest ceiling, widest variance",
    identityContinuity: "Low — intentionally building a new identity",
    timeToLand: "Longest — 12–36 months for meaningful transition",
    keyStages: "All 12",
    keyStagesNote: "Start at Stage 01 and do not skip it. The identity work is not optional when you're building a new one from scratch. The whole pipeline is the infrastructure.",
    honest:
      "The pilots who do this best are the ones who did Stage 01 honestly — who sat with who they were without the jet long enough to know who they were becoming. This path requires that work more than any other.",
    watchOut:
      "The neutral zone is longer here. Expect it. The instinct to grab the first stable thing is strongest when the horizon is farthest away. That instinct is almost always wrong.",
  },
];

const matrixRows = [
  { label: "Skill transfer", key: "skillTransfer" },
  { label: "Hiring complexity", key: "hiringComplexity" },
  { label: "Comp ceiling", key: "compCeiling" },
  { label: "Identity continuity", key: "identityContinuity" },
  { label: "Time to land", key: "timeToLand" },
  { label: "Key stages", key: "keyStages" },
] as const;

export default function PathsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Decision Tool
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight text-balance">
            Five archetypes USAFA pilots actually live
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed max-w-2xl">
            Most pilots leave active duty thinking there are two options: airlines or Guard.
            At the highest level there are five archetypes &mdash; five shapes a post-service life
            tends to take. This is the zoomed-out lens.
          </p>
          <p className="mt-3 text-sm text-slate-500 max-w-2xl">
            Each archetype maps to one or more of the seven specific industry paths in{" "}
            <Link href="/the-map" className="text-blue-400 hover:text-blue-300">Stage 03 — The Map</Link>.
            Use this page to choose the shape; use the Map to choose the industry.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            This is a decision tool, not a recommendation engine. The right path is the one that
            fits your actual life — not the most prestigious, not the most familiar, not the one
            your squadron mates took.
          </p>
          <p className="mt-3 text-sm text-slate-500 border-l-2 border-slate-700 pl-4">
            <span className="text-slate-400">Once you have a direction:</span> Stage 03 &mdash;{" "}
            <a href="/the-map" className="text-blue-400 hover:text-blue-300">The Map</a> &mdash; goes
            deeper on six civilian paths with real comp ranges, pros/cons, and honest trade-offs.
            This page helps you pick a direction. That page helps you understand what it actually looks like.
          </p>
        </div>
      </section>

      {/* Comparison matrix */}
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-lg font-semibold text-slate-200 mb-1">The comparison</h2>
          <p className="text-sm text-slate-500 mb-6">Scroll right on mobile. The last row routes you to the right stages.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 pr-4 text-slate-500 font-medium w-32" />
                  {paths.map((p) => (
                    <th key={p.id} className="text-left py-3 pr-4 font-medium">
                      <span className={`text-[10px] font-medium uppercase tracking-wide ${p.tagColor}`}>
                        {p.tag}
                      </span>
                      <p className="text-slate-200 text-xs font-semibold leading-tight mt-0.5">{p.label}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {matrixRows.map((row) => (
                  <tr key={row.key}>
                    <td className="py-3 pr-4 text-slate-500 font-medium align-top whitespace-nowrap">{row.label}</td>
                    {paths.map((p) => (
                      <td key={p.id} className={`py-3 pr-4 align-top leading-relaxed ${row.key === "keyStages" ? "text-blue-400 font-mono font-medium" : "text-slate-400"}`}>
                        {p[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Path detail cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Path by path</h2>
          <p className="text-slate-500 text-sm">Honest trade-offs. No optimistic case without the hard truth.</p>
        </div>

        {paths.map((path) => (
          <div key={path.id} id={path.id} className="border border-slate-800 rounded-xl overflow-hidden">
            {/* Path header */}
            <div className="bg-slate-900/60 px-6 py-5 border-b border-slate-800">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`text-xs font-medium uppercase tracking-wide ${path.tagColor}`}>
                    {path.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 mt-0.5">{path.label}</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{path.oneLiner}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 font-mono">{path.comp}</p>
            </div>

            {/* Path body */}
            <div className="px-6 py-5 space-y-5">
              {/* Honest take */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">The honest take</p>
                <p className="text-sm text-slate-400 leading-relaxed">{path.honest}</p>
              </div>

              {/* Watch out */}
              <div className="border-l-2 border-amber-700/50 pl-4">
                <p className="text-xs text-amber-500 uppercase tracking-wide mb-1">Watch out for</p>
                <p className="text-sm text-slate-500 leading-relaxed">{path.watchOut}</p>
              </div>

              {/* Which stages */}
              <div className="bg-slate-900/40 rounded-lg p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Which stages matter most</p>
                <p className="text-blue-400 font-mono font-medium text-sm mb-1">{path.keyStages}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{path.keyStagesNote}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* On optionality */}
      <section className="border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <blockquote className="max-w-2xl">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              &ldquo;Keeping options open sounds strategic. It is often a rationalization for avoiding
              the discomfort of commitment.&rdquo;
            </p>
            <p className="mt-4 text-sm text-slate-500">On optionality</p>
          </blockquote>
          <p className="mt-6 text-sm text-slate-500 max-w-2xl leading-relaxed">
            You don&rsquo;t have to know your answer before entering the pipeline. But you do have to
            hold a tentative direction — a working hypothesis about what you&rsquo;re aiming for —
            or the stages won&rsquo;t have anything to orient around. A working hypothesis is not a
            commitment. It&rsquo;s a starting vector.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/the-reckoning"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Start at Stage 01 &rarr;
            </Link>
            <Link
              href="/the-map"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
              See Stage 03: The Map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Path: Tech & Ops | Blue Canopy",
  description:
    "Product management, business operations, corporate strategy, and operations roles at tech companies. The direct path in, what it pays, and the hidden taxes.",
};

export default function TechOpsPath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path: Tech &amp; Ops
          </p>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
            <a href="/" className="hover:text-slate-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/the-map" className="hover:text-slate-400 transition-colors">The Map</a>
            <span>/</span>
            <span className="text-slate-400">Tech &amp; Ops</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight text-balance">
            Tech &amp; Ops
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Product management, business operations, corporate strategy, and ops roles at tech
            companies. Highest comp ceiling of any path. Hardest translation. The path where
            doing the networking and credentialing work pays off most — and where doing it badly
            leaves you submitting applications into the void.
          </p>
          <div className="mt-4 p-3 rounded-lg border border-purple-800/40 bg-purple-950/20 text-sm text-slate-400">
            Looking at{" "}
            <strong className="text-slate-300">MBB consulting, IB, or PE</strong>?
            That&rsquo;s a different decision tree.{" "}
            <Link href="/the-map/finance-consulting" className="text-purple-400 hover:text-purple-300">
              Finance &amp; Consulting →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 2026 landscape</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Tech hiring slowed across 2024–2025 and is recovering unevenly. AI / ML /
              defense-tech hiring is robust. General PM and BizOps hiring is more competitive than
              2021 levels. The vets who do best here almost always get in through people, not
              portals — either a direct referral into a team that needs a strong operator, or via
              SkillBridge at a company they&rsquo;ve built a relationship with.
            </p>
            <p>
              The roles that translate best from a rated background:{" "}
              <strong className="text-slate-100">program manager</strong>,{" "}
              <strong className="text-slate-100">business operations</strong>,{" "}
              <strong className="text-slate-100">product operations</strong>,{" "}
              <strong className="text-slate-100">strategy &amp; planning</strong>, and{" "}
              <strong className="text-slate-100">technical program manager (TPM)</strong>.
              Pure software PM is harder without a technical background, but not impossible once
              you&rsquo;re inside a company in an adjacent role.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The direct routes in</h2>
          <div className="space-y-4">
            {[
              {
                route: "Big tech veteran programs",
                detail:
                  "Amazon Military Programs, Google Veterans Network, Microsoft MSSA. These are real pipelines hiring transitioning service members into PM, PMO, ops, and TPM roles. MSSA is more enlisted-focused; Amazon and Google programs are strong for O-3-level officers. Apply early — spots are limited.",
                links: [["Microsoft MSSA", "https://military.microsoft.com/mssa/"]],
              },
              {
                route: "Hiring Our Heroes Corporate Fellowship",
                detail:
                  "12-week SkillBridge program at Fortune 500 and tech hosts. Many companies have converted fellows to full-time roles. Research the specific company before applying — the conversion rate varies widely.",
                links: [
                  ["Hiring Our Heroes", "https://www.hiringourheroes.org/fellowships/"],
                ],
              },
              {
                route: "Direct PM / corp strategy roles (networking-dependent)",
                detail:
                  "Possible without a program or MBA, but requires a path through informational conversations with people already inside the company. The PMP, Salesforce, and AWS certifications via IVMF are real signals of seriousness — the imperfect proxy for the MBA when you can't get there.",
                links: [
                  ["IVMF Onward to Opportunity", "https://ivmf.syracuse.edu/programs/career-training/onward-to-opportunity/"],
                ],
              },
              {
                route: "COMMIT Foundation & ACP mentorship",
                detail:
                  "COMMIT Foundation is well-regarded for 1:1 officer transition coaching. American Corporate Partners (ACP) runs year-long mentor matches with corporate executives, free. Both sharpen your positioning before you start applications.",
                links: [
                  ["COMMIT Foundation", "https://www.commitfoundation.org/"],
                  ["American Corporate Partners", "https://www.acp-usa.org/"],
                ],
              },
            ].map((r) => (
              <div key={r.route} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-medium text-slate-100 mb-2">{r.route}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">{r.detail}</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  {r.links.map(([label, url]) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      {label} &rarr;
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">What this pays</h2>
          <div className="grid sm:grid-cols-3 gap-3 text-center">
            {[
              { num: "$100K–$160K", label: "Entry: PM, BizOps, strategy, TPM" },
              { num: "$180K–$280K", label: "Year 5: Senior PM / Senior Manager" },
              { num: "$300K–$500K+", label: "Year 10+: Director / VP + equity" },
            ].map((c) => (
              <div key={c.label} className="p-3 rounded-lg border border-slate-700 bg-slate-900/40">
                <p className="text-lg font-bold text-slate-50 font-mono">{c.num}</p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400 italic">
            levels.fyi has live comp data by company and level — check it directly before any
            negotiation. Geography matters: SF/Seattle/NYC skew 20–40% higher than mid-market.
          </p>
          <div className="mt-4">
            <Link href="/comp" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              Compare all paths by comp trajectory →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 5–10 year arc</h2>
          <div className="space-y-4">
            {[
              {
                label: "Direct → PM → Senior leadership",
                what:
                  "Direct entry via referral or veteran program into a PM or BizOps role. 2–3 years to senior IC. Then GPM / Director of Product / VP Product over 5–8 years. Equity-heavy compensation; total comp at senior levels at FAANG clears $500K+. Volatile across hiring cycles.",
              },
              {
                label: "SkillBridge → Corporate conversion → Manager track",
                what:
                  "12-week fellowship → full-time offer → 3–5 years building the domain credential → promoted into management. Slower start but real path for those who want to grow inside one company vs. lateral-moving for comp.",
              },
              {
                label: "Corp role → MBA → Senior strategy",
                what:
                  "Work 2–3 years in an entry tech or ops role, use the experience to strengthen an MBA application, then use the MBA to leapfrog into senior strategy, GPM, or consulting. Longer timeline but more intentional trajectory.",
              },
            ].map((row) => (
              <div key={row.label} className="border-l-2 border-purple-400/50 pl-4">
                <p className="font-medium text-slate-100 mb-1">{row.label}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{row.what}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-50 mb-3">The hidden taxes</h2>
          <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Imposter syndrome is real and predictable.</strong>{" "}
                You will hit a wall around month 4 when novelty fades. The people around you have
                domain fluency you don&rsquo;t have yet. Ride it out — the leadership background is
                more valuable than it looks in the first 90 days.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Layoffs are real.</strong> The stability
                you&rsquo;re used to does not exist in tech. Plan finances for 6 months of runway
                at all times.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Applications without networking don&rsquo;t work.</strong>{" "}
                56% of professional jobs are filled through networks before they&rsquo;re posted. In
                tech, the referral is the path. Cold applications at tech companies are a last resort,
                not a strategy.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Use the vet network.</strong> Most people
                underuse the AOG and class network because they feel like they should make it on
                their own. Civilians use their networks as a matter of course. You should too.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Microsoft MSSA",
                url: "https://military.microsoft.com/mssa/",
                what: "Software & Systems Academy — 16-week technical program leading to PM and engineer roles at Microsoft and partners.",
              },
              {
                name: "IVMF Onward to Opportunity",
                url: "https://ivmf.syracuse.edu/programs/career-training/onward-to-opportunity/",
                what: "Free certifications: PMP, Salesforce, AWS, CompTIA. Real signal in tech recruiting when you don't have a tech degree.",
              },
              {
                name: "Hiring Our Heroes Fellowship",
                url: "https://www.hiringourheroes.org/fellowships/",
                what: "12-week SkillBridge at Fortune 500 and tech companies. Many hosts convert fellows to full-time.",
              },
              {
                name: "American Corporate Partners (ACP)",
                url: "https://www.acp-usa.org/",
                what: "Free year-long mentorship from a corporate exec. Strong for sharpening positioning before applications.",
              },
              {
                name: "COMMIT Foundation",
                url: "https://www.commitfoundation.org/",
                what: "1:1 officer transition coaching. Well-regarded, free, competitive to get into.",
              },
              {
                name: "levels.fyi",
                url: "https://www.levels.fyi/",
                what: "Live comp data by company and level. Use this before every negotiation.",
              },
            ].map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-900/40 hover:border-purple-400/50 hover:bg-slate-800/50 transition"
              >
                <p className="font-medium text-slate-100 text-sm">{r.name} &rarr;</p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{r.what}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-700 pt-10">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/the-map"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
              &larr; Back to The Map
            </Link>
            <Link
              href="/the-map/finance-consulting"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
              Finance &amp; Consulting →
            </Link>
            <Link
              href="/networking"
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Stage 04: Networking &rarr;
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

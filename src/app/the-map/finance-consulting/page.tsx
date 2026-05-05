import Link from "next/link";

export const metadata = {
  title: "Path: Finance & Consulting | Blue Canopy",
  description:
    "MBB consulting, IB, PE-adjacent roles, and the MBA bridge. Schools, application timeline, recruiting reality, and what the 10-year arc actually looks like.",
};

export default function FinanceConsultingPath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path: Finance &amp; Consulting
          </p>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
            <a href="/" className="hover:text-slate-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/the-map" className="hover:text-slate-400 transition-colors">The Map</a>
            <span>/</span>
            <span className="text-slate-400">Finance &amp; Consulting</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
            Finance &amp; Consulting
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            MBB consulting, corporate finance, IB-adjacent, and PE. The credential-heavy end of
            the civilian spectrum. The MBA is often the bridge — and for USAFA grads, it&rsquo;s
            frequently free. The clock on that decision starts now.
          </p>
          <div className="mt-4 p-3 rounded-lg border border-indigo-800/40 bg-indigo-950/20 text-sm text-slate-400">
            Looking at{" "}
            <strong className="text-slate-300">PM, BizOps, or tech strategy roles</strong>? That&rsquo;s a
            different path.{" "}
            <Link href="/the-map/tech-ops" className="text-indigo-400 hover:text-indigo-300">
              Tech &amp; Ops →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 2026 landscape</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Consulting hiring at MBB has normalized after the post-COVID surge but is still
              strong. The military leadership story translates exceptionally well to MBB if
              positioned correctly — structured thinking, comfort with ambiguity, leading without
              authority. The vets who land at McKinsey, BCG, and Bain almost always do so either
              via a SkillBridge fellowship or via a top MBA program.
            </p>
            <p>
              IB is a different animal. Investment banking at bulge brackets almost always requires
              a pre-MBA banking analyst role or a post-MBA associate hire — the recruiting pipeline
              is built for that sequence. PE at megafunds follows the same pattern. For USAFA
              grads, the realistic entry points are{" "}
              <strong className="text-slate-100">consulting first</strong>, or{" "}
              <strong className="text-slate-100">MBA → banking → PE</strong>, or{" "}
              <strong className="text-slate-100">corp dev / growth equity</strong> roles where the
              operating background is actually valued.
            </p>
          </div>
        </section>

        {/* MBA bridge */}
        <section className="border border-indigo-400/30 bg-indigo-950/20 rounded-xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-3">
            The deep dive
          </p>
          <h2 className="text-2xl font-bold text-slate-50 mb-2">The MBA bridge</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            For most people targeting consulting, corporate strategy, or PE-adjacent roles, a top
            MBA is the highest-ROI move available. Yellow Ribbon coverage at top schools makes
            tuition close to free; the network buys you access to interviews you cannot otherwise
            get; and the recruiting pipelines into MBB and tech were built for people exactly
            like you.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-slate-100 mb-3">Where vets actually go (and why)</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Veteran enrollment varies enormously across programs. The M7 (HBS, Stanford GSB,
                Wharton, Booth, Kellogg, Columbia, MIT Sloan) typically run{" "}
                <strong className="text-slate-100">4–6%</strong> veterans per class. Several
                programs run higher and offer specific veteran scholarships:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { school: "Tuck (Dartmouth)", note: "Highest M7-adjacent vet share. Strong rural community fit, very hands-on alumni." },
                  { school: "Georgetown McDonough", note: "13% vets in Class of 2027. Mujica Veteran Stipend + Pat Tillman scholarships. DC-adjacent for defense-curious vets." },
                  { school: "Carnegie Mellon Tepper", note: "Dedicated military recruiter, strong tech and consulting placement." },
                  { school: "UMN Carlson", note: "28% vets full-time STEM track (2025). $7,500 stipend. Underrated for value-per-dollar." },
                  { school: "Darden (Virginia)", note: "Historically vet-heavy. Strong consulting and corp strategy placement." },
                  { school: "Ross (Michigan)", note: "Solid consulting/PE pipeline. Active veterans club." },
                  { school: "Fuqua (Duke)", note: "Strong on health and tech. Vet community active." },
                  { school: "USC Marshall MBV", note: "Master of Business for Veterans — 10-month vet-specific program. Alternative to a full MBA." },
                ].map((s) => (
                  <div key={s.school} className="text-sm">
                    <p className="font-medium text-slate-100">{s.school}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400 italic">
                Source: school class profiles + GMAC&rsquo;s 2025 veteran MBA guide. Update
                annually — class composition shifts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-100 mb-3">
                The application timeline (for a fall start)
              </h3>
              <div className="space-y-2 text-sm text-slate-300">
                {[
                  ["~14 months out", "Open Service to School MBA Link. Free counseling. Match with a vet ambassador at target schools. Start essay drafts."],
                  ["~12 months out", "GMAT/GRE study. Most successful vet apps land 720+ GMAT or 325+ GRE — don't use vet leniency as an excuse to skip prep."],
                  ["~9 months out", "Take the test. School visits where possible. Build your referee list."],
                  ["~6 months out (early Sept)", "Round 1 deadlines. R1 is your best shot — smaller pool, faster decisions. Apply R1 if your stack is strong."],
                  ["~3 months out (early Jan)", "Round 2 deadlines. The default for most vets — gives more time to land the GMAT and polish essays."],
                  ["1–2 months out", "Interview prep + admit decisions. Don't leave active duty until offers are in writing."],
                ].map(([when, what]) => (
                  <div key={when} className="flex gap-3 border-l-2 border-indigo-400/50 pl-4">
                    <span className="text-xs font-mono text-indigo-300 flex-shrink-0 w-32">
                      {when}
                    </span>
                    <span className="leading-relaxed">{what}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-100 mb-3">
                The money: it&rsquo;s probably free
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Post-9/11 GI Bill + Yellow Ribbon at most top programs covers tuition entirely.
                M7 Yellow Ribbon agreements are usually uncapped or near it. Plus:
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-indigo-300 flex-shrink-0">&middot;</span>
                  <span>
                    <strong className="text-slate-100">Tillman Scholars</strong> — ~60 selected
                    per year across all grad programs. ~$10K average + a national network.{" "}
                    <a
                      href="https://pattillmanfoundation.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-300 hover:text-indigo-200 underline"
                    >
                      pattillmanfoundation.org
                    </a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-300 flex-shrink-0">&middot;</span>
                  <span>
                    <strong className="text-slate-100">School-specific scholarships</strong> —
                    Mujica (Georgetown), Carlson stipend (UMN), and similar at most top programs.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-300 flex-shrink-0">&middot;</span>
                  <span>
                    <strong className="text-slate-100">Living stipend</strong> — Yellow Ribbon
                    plus GI Bill housing allowance (~$3–5K/month) often covers rent during the
                    program.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-100 mb-3">
                The MBA recruiting reality (read this twice)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                MBA is not a 2-year vacation. Consulting recruiting starts the week you arrive.
              </p>
              <div className="text-sm text-slate-300 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-slate-100">August (orientation):</strong> Networking
                  events, coffee chats, firm receptions. You cannot skip these.
                </p>
                <p>
                  <strong className="text-slate-100">September–October:</strong> First-round
                  applications. Cover letters, resume polish, behavioral prep.
                </p>
                <p>
                  <strong className="text-slate-100">Late October–November:</strong> First-round
                  interviews at MBB and other consulting firms.
                </p>
                <p>
                  <strong className="text-slate-100">By Thanksgiving:</strong> Many summer
                  internship offers are out. The summer internship is the audition for full-time.
                </p>
                <p>
                  <strong className="text-slate-100">
                    If you arrive thinking you&rsquo;ll &ldquo;figure it out&rdquo;:
                  </strong>{" "}
                  you&rsquo;ve already missed it. The strongest applicants start case prep in{" "}
                  <em>April</em> before the program starts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">
            The direct (no-MBA) path to MBB
          </h2>
          <div className="space-y-4">
            {[
              {
                route: "MBB SkillBridge fellowships",
                detail:
                  "McKinsey (10–12 weeks), BCG (12 weeks), and Bain (10 weeks, in Chicago/Austin/Dallas/Houston) all run formal SkillBridge fellowships. McKinsey's 2023 inaugural cohort hit 100% offer rate. These are full-time consulting roles, often without requiring an MBA. The cleanest direct shot for a transitioning O-3/O-4 with a strong leadership story.",
                links: [
                  ["McKinsey Military Fellowship", "https://www.mckinsey.com/careers/mckinsey-military-fellowship"],
                  ["BCG SkillBridge", "https://careers.bcg.com/global/en/locations/united-states/skillbridge"],
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
                      className="text-indigo-400 hover:text-indigo-300 underline"
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
              { num: "$220–250K", label: "Post-MBA MBB Year 1 total comp" },
              { num: "$300–450K", label: "Year 5: Senior associate / Manager" },
              { num: "$400K+", label: "Year 10: Principal / Partner trajectory" },
            ].map((c) => (
              <div key={c.label} className="p-3 rounded-lg border border-slate-700 bg-slate-900/40">
                <p className="text-lg font-bold text-slate-50 font-mono">{c.num}</p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400 italic">
            Pre-MBA / direct-entry consulting roles run lower ($130–180K base for Big 4 and
            strategy boutiques). Post-MBA PE associate roles can run $300K+ at megafunds but the
            door is nearly closed without pre-MBA banking.
          </p>
          <div className="mt-4">
            <Link href="/comp" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
              Compare all paths by comp trajectory →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 5–10 year arc</h2>
          <div className="space-y-4">
            {[
              {
                label: "MBA → MBB → Industry",
                what: "MBA, then 2–3 years at MBB, then exit to industry: Director of Strategy, Chief of Staff to a senior exec, or operating role at a PE-backed business. The most reliable engine for compounded comp and optionality. By Year 7 post-MBA, $400K+ all-in is common.",
              },
              {
                label: "SkillBridge → MBB → Career",
                what: "Skip the MBA, ride the SkillBridge → full-time conversion. Full-time start as Associate. Same arc as the MBA route but compressed by ~2 years. Some firms sponsor MBA later.",
              },
              {
                label: "MBA → Corp dev / growth equity",
                what: "Post-MBA into corporate development at a Fortune 500 or a growth equity firm where operating background is valued over pure finance. More accessible than megafund PE; strong 10-year trajectory if you find the right sponsor.",
              },
            ].map((row) => (
              <div key={row.label} className="border-l-2 border-indigo-400/50 pl-4">
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
                <strong className="text-slate-100">PE is mostly closed without pre-MBA banking.</strong>{" "}
                Some target megafund PE post-MBA without realizing the pipeline is built for
                ex-bankers. Corp dev, growth equity, and operating roles at PE portfolios are the
                realistic vet paths.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">
                  The recruiting calendar doesn&rsquo;t wait for you to get settled.
                </strong>{" "}
                Consulting recruiting at MBA programs starts in Week 1 of orientation. People who
                arrive without case prep done have already lost ground to classmates who started
                in April.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">IB is a different door.</strong> If investment
                banking is the goal, the path is pre-MBA analyst → MBA associate, or a boutique
                that specifically recruits vets. Don&rsquo;t confuse consulting with banking — the
                culture, hours, and exit options are different.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Use the vet network at business school.</strong>{" "}
                Every top MBA program has a veteran club. These are the people who have already
                walked the recruiting path you&rsquo;re about to walk — they know which firms
                actually recruit vets and which have empty diversity branding.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Service to School (S2S) MBA Link",
                url: "https://service2school.org/sign-up/mba-admissions-support",
                what: "Free MBA application counseling. Matches you with a vet ambassador at target schools. The single highest-ROI free service for vet MBA applicants.",
              },
              {
                name: "McKinsey Military Fellowship",
                url: "https://www.mckinsey.com/careers/mckinsey-military-fellowship",
                what: "10–12 week SkillBridge; full-time consulting offers for successful fellows.",
              },
              {
                name: "BCG SkillBridge",
                url: "https://careers.bcg.com/global/en/locations/united-states/skillbridge",
                what: "BCG's formal SkillBridge program. National.",
              },
              {
                name: "Pat Tillman Foundation",
                url: "https://pattillmanfoundation.org/",
                what: "Tillman Scholars — ~60 selected/year across grad programs. The network is the real value.",
              },
              {
                name: "Beyond the Uniform podcast",
                url: "https://podcasts.apple.com/us/podcast/beyond-the-uniform/id1148739411",
                what: "500+ interviews with vet-MBAs at top schools and MBB. Unfiltered recruiting reality.",
              },
              {
                name: "r/MBA (search 'veteran' or 'military')",
                url: "https://www.reddit.com/r/MBA/",
                what: "Hundreds of admit-cycle threads with real GMAT scores, school choices, and outcomes.",
              },
            ].map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-900/40 hover:border-indigo-400/50 hover:bg-slate-800/50 transition"
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
              href="/the-map/tech-ops"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
              Tech &amp; Ops →
            </Link>
            <Link
              href="/networking"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Stage 04: Networking &rarr;
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

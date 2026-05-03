import Link from "next/link";

export const metadata = {
  title: "Path: Non-Traditional Paths | Blue Canopy",
  description:
    "The drill-down on education, ministry, nonprofit, and coaching — the path most undervalued, most aligned with calling, and most financially viable when the stack is understood.",
};

export default function NonTraditionalPath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path 6 of 6
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
            Non-Traditional Paths
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Education, ministry, coaching, nonprofit leadership. Often
            the path most aligned with calling and meaning &mdash; and
            most overlooked because the standalone salaries look low.
            The math gets more interesting once the pension stack is
            honest.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        <section className="border-l-2 border-blue-400/40 pl-4">
          <p className="text-sm text-slate-300 leading-relaxed italic">
            A note on framing. The &ldquo;tradeoffs&rdquo; described on this
            page are tradeoffs against the conventional success metrics of
            the other five paths. If your foundation is somewhere other than
            compensation and external prestige, several of these tradeoffs
            are not tradeoffs at all &mdash; they are features. Read accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 2026 landscape</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Many of the most-at-peace transitioners in civilian life
              are the ones who chose something completely unexpected.
              Teaching at a high-performing high school. Coaching at
              the Academy or a prep school. Pastoral ministry. Running
              a mid-size nonprofit. The compensation deltas vs. defense
              or tech are real &mdash; but the financial structures
              most of these households operate inside (military pension
              + VA disability + employer salary + employer benefits)
              frequently produce a household income that&rsquo;s
              competitive with industry peers.
            </p>
            <p>
              This path is also where calling pressure shows up
              loudest. If you have it, you know. If you don&rsquo;t and
              you&rsquo;re choosing this for image or proximity to
              family, that&rsquo;s a fragile decision.
            </p>
          </div>
        </section>

        {/* Sub-paths */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The four primary sub-paths</h2>
          <div className="space-y-5">
            {[
              {
                path: "Teaching (secondary or higher ed)",
                detail:
                  "K-12 teaching pays $50-90K depending on state, district, and step. The federal Troops to Teachers program was defunded in 2020; states run successor pipelines unevenly. Teach For America actively recruits vets; 2-year commitment, Title I schools, modest pay. For higher ed: USAFA permanent civilian faculty roles do not always require a PhD; prep schools (NAPS, USMAPS, USCG Academy prep) recruit through service academy networks.",
                hidden: "TFA's 2-year commitment is intense but lands you in a national network of educators that pays dividends across a career — including grad school admissions if that becomes the next move.",
              },
              {
                path: "Coaching (athletic)",
                detail:
                  "DI assistant coaching at $50-80K is the realistic entry point for those with athletic backgrounds. HS coaching usually pairs with a teaching role. Service academy coaching (USAFA, USMA, USNA) is uniquely suited to grads with the right athletic resume — and the lifestyle, mission, and location are unmatched.",
                hidden: "The coaching ladder is unforgiving. Hours are worse than squadron ops, pay is worse, and tenure is precarious. Most vet coaches end up on the teach + coach combo path because it's the only sustainable version.",
              },
              {
                path: "Ministry / Chaplaincy",
                detail:
                  "Civilian ministry typically requires an M.Div (3 years) plus an ecclesiastical endorsement. Hospital, hospice, and prison chaplaincy roles pay $55-95K with full benefits. Military chaplain transitions to VA chaplaincy is a clean path. Pastoral roles in churches vary enormously — solo pastor at a small church $40-70K + housing; teaching pastor at a multi-site church $80K+.",
                hidden: "GI Bill pays for seminary but most seminaries have low Yellow Ribbon caps — verify before you commit. Some Reformed and Anglican seminaries have generous vet support; check school by school.",
              },
              {
                path: "Nonprofit leadership",
                detail:
                  "Small nonprofit ED salaries $80-120K typical; mid-size $130-180K; large nonprofit (>$10M budget) EDs $200K+. Vet-led and vet-serving nonprofits (Travis Manion, Mission Continues, Team Rubicon, Folds of Honor) hire many transitioning officers into program and leadership roles. Cross-sector nonprofit work (education, mental health, public policy) is also accessible.",
                hidden: "GuideStar/Candid 990 data is public — you can look up any 501(c)(3)'s revenue, top salaries, and program ratios before applying. Do this before any nonprofit interview. It will tell you whether the org is sustainable.",
              },
            ].map((p) => (
              <div key={p.path} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-medium text-slate-100 mb-2">{p.path}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">{p.detail}</p>
                <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-blue-400/50 pl-3">
                  <strong className="text-slate-200">What they don&rsquo;t tell you:</strong> {p.hidden}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The financial math */}
        <section className="border border-blue-400/30 bg-blue-950/30 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-50 mb-3">The financial stack (the part nobody runs the math on)</h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            For a retiring O-5 considering nonprofit ED at $110K, the
            household income picture often looks like this:
          </p>
          <div className="space-y-2 text-sm">
            {[
              ["O-5 retirement (20 yrs)", "$50–60K/yr"],
              ["VA disability (varies)", "$15–40K/yr (mostly tax-free)"],
              ["Nonprofit ED salary", "$110K"],
              ["Employer 403(b) match + benefits", "$10–15K equivalent"],
              ["TSP / Roth growth (passive)", "compounds quietly in background"],
            ].map(([line, val]) => (
              <div key={line} className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-300">{line}</span>
                <span className="text-slate-100 font-medium">{val}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 font-semibold">
              <span className="text-slate-100">All-in effective income</span>
              <span className="text-blue-300">$185–230K</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400 leading-relaxed italic">
            Numbers are illustrative. The point: the &ldquo;low
            salary&rdquo; framing of non-traditional paths is mostly
            wrong for retiring officers. The household economics are
            competitive with industry peers; the lifestyle is often
            better; and the meaning calculus is different. Run your
            own numbers in the{" "}
            <Link href="/comp-translator" className="text-blue-300 hover:text-blue-200 underline">Comp Translator</Link>.
          </p>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Teach For America", url: "https://www.teachforamerica.org/", what: "Vet pipeline is well-developed. 2-year commitment, Title I schools. Strong network of vet alumni in education." },
              { name: "The Mission Continues", url: "https://missioncontinues.org/", what: "6-month service fellowship at a nonprofit. Stipend, training, network. A way to test the nonprofit fit before committing." },
              { name: "Travis Manion Foundation", url: "https://www.travismanion.org/", what: "Character / leadership programming. Hires vets into program roles." },
              { name: "Team Rubicon", url: "https://teamrubiconusa.org/", what: "Disaster response. Volunteer entry; staff roles for those who lead operations or chapters well." },
              { name: "Folds of Honor", url: "https://foldsofhonor.org/", what: "Scholarships for families of fallen and disabled service members. Vet-staffed." },
              { name: "USAFA AOG Career Services", url: "https://www.usafa.org/career-services", what: "Class network surfaces academy/prep school roles 12+ months before public posting. Underused." },
              { name: "Association of Theological Schools", url: "https://www.ats.edu/", what: "Accredited seminaries; check Yellow Ribbon caps and military scholarships school by school." },
              { name: "Candid (formerly GuideStar)", url: "https://candid.org/", what: "Nonprofit financial transparency. Look up any 501(c)(3)'s 990 before applying — revenue, salaries, program ratios are public." },
            ].map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-slate-700 bg-slate-900/40 hover:border-blue-400/50 hover:bg-slate-800/50 transition">
                <p className="font-medium text-slate-100 text-sm">{r.name} &rarr;</p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{r.what}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Hidden taxes */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-50 mb-3">The hidden taxes</h2>
          <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Prestige loss is real and underestimated.</strong> Some find it harder than expected to tell former peers they teach high school chemistry. If image still matters to you, this path is harder than the math suggests.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">No second-act ladder.</strong> Most non-traditional paths don&rsquo;t have the lateral mobility into industry that defense or government does. Choose this knowing it&rsquo;s a commitment, not a try-out.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Calling can&rsquo;t be borrowed.</strong> If you&rsquo;re choosing this because someone you respect chose it, it usually doesn&rsquo;t hold. Those who do well here have a specific personal pull they can articulate.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Spousal income matters.</strong> Many vet-non-traditional households work because the spouse is in industry. Run the joint numbers, not just yours.</span></li>
          </ul>
        </section>

        {/* Voices */}
        <section className="border border-slate-700 rounded-xl p-6 bg-slate-900/40">
          <p className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold">Voices worth finding</p>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            For the unfiltered version of these paths:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://podcasts.apple.com/us/podcast/beyond-the-uniform/id1148739411" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Beyond the Uniform podcast</a><span className="text-slate-400">Interviews include vet teachers, ministers, and nonprofit EDs. Apple Podcasts.</span></li>
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://www.teachforamerica.org/military-veterans-initiative" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">TFA Military Veterans Initiative</a><span className="text-slate-400">TFA&rsquo;s vet program page with named profiles and pathways.</span></li>
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://www.missioncontinues.org/alumni/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Mission Continues alumni network</a><span className="text-slate-400">Real fellow profiles and stories from inside the nonprofit world.</span></li>
          </ul>
        </section>

        <section className="border-t border-slate-700 pt-10">
          <div className="flex flex-wrap gap-3">
            <Link href="/the-map" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors">&larr; Back to The Map</Link>
            <Link href="/networking" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">Stage 04: Networking &rarr;</Link>
          </div>
        </section>

      </div>
    </div>
  );
}

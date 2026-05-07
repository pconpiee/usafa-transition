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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
            <a href="/" className="hover:text-slate-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/the-map" className="hover:text-slate-400 transition-colors">The Map</a>
            <span>/</span>
            <span className="text-slate-400">Non-Traditional Paths</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight text-balance">
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

        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500">
          <svg aria-hidden="true" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M12 7v5l3 2" />
          </svg>
          ~5 min read
        </p>

        {/* TL;DR */}
        <section className="border border-blue-400/30 bg-blue-950/30 rounded-xl p-5">
          <p className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold">TL;DR</p>
          <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span>Non-traditional paths trade comp ceiling for mission alignment and flexibility</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span>Education admin, coaching, and consulting are viable at $80&ndash;120K+ with the right timing</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span className="text-slate-400 italic">Read fully if: you know private-sector optimization isn&rsquo;t the goal &mdash; you want meaning over maximization</span></li>
          </ul>
        </section>

        {/* On this page */}
        <nav className="flex flex-wrap gap-2 text-xs" aria-label="On this page">
          {[
            { label: "Overview", href: "#overview" },
            { label: "Education", href: "#education" },
            { label: "Nonprofit", href: "#nonprofit" },
            { label: "Coaching & Consulting", href: "#coaching" },
            { label: "Ministry", href: "#ministry" },
            { label: "Resources", href: "#resources" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-1 rounded-full border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors">{l.label}</a>
          ))}
        </nav>

        <section className="border-l-2 border-blue-400/40 pl-4">
          <p className="text-sm text-slate-300 leading-relaxed italic">
            A note on framing. The &ldquo;tradeoffs&rdquo; described on this
            page are tradeoffs against the conventional success metrics of
            the other five paths. If your foundation is somewhere other than
            compensation and external prestige, several of these tradeoffs
            are not tradeoffs at all &mdash; they are features. Read accordingly.
          </p>
        </section>

        <section id="overview">
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

        {/* Education & Academia */}
        <section id="education">
          <h2 className="text-xl font-bold text-slate-50 mb-2">Education &amp; Academia</h2>
          <p className="text-xs text-slate-400 italic mb-5">Honest take: teaching alone pays poorly ($40&ndash;65K); administration is where comp becomes viable.</p>
          <div className="space-y-4">
            {[
              {
                role: "K-12 School Leadership / Administration",
                comp: "$75–110K",
                detail: "Principal pipeline programs like New Leaders provide a structured path to school leadership. Strong mission fit for veterans. Troops to Teachers (state-run successors to the federal program) offer stipends and certification support. Most states have their own veteran-to-teacher pipelines — uneven but real.",
              },
              {
                role: "Higher Ed Administration",
                comp: "$65–100K",
                detail: "Dean of students, VP of student affairs, and ROTC instructor roles. ROTC instructors can draw partial military pay and salary simultaneously — a particularly natural fit. Administration is where compensation in higher ed becomes viable; faculty-track positions rarely are.",
              },
              {
                role: "USAFA or Service Academy Instructor",
                comp: "$85–120K",
                detail: "Rare openings, competitive, and uniquely suited to USAFA graduates. Strong for those who want to stay connected to the academy without returning to active duty. Department heads sometimes recruit directly through the AOG network before positions hit USAJobs.",
              },
            ].map((item) => (
              <div key={item.role} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-medium text-slate-100">{item.role}</p>
                  <span className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded whitespace-nowrap">{item.comp}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nonprofit & Mission-Driven */}
        <section id="nonprofit">
          <h2 className="text-xl font-bold text-slate-50 mb-2">Nonprofit &amp; Mission-Driven</h2>
          <p className="text-xs text-slate-400 italic mb-5">Honest take: entry-level nonprofit roles pay $45&ndash;65K; wait until you have leverage (network, credentials, track record) before making this move.</p>
          <div className="mb-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              The most compelling nonprofit roles for veterans are senior leadership positions &mdash; but those are 5&ndash;10 years post-separation for most. The path there is to come in post-MBA or post-corporate stint with management credibility, not straight from active duty.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                role: "Executive Director — Veteran-Serving Nonprofit",
                comp: "$70–120K",
                detail: "ED compensation depends heavily on org budget. Orgs with < $1M annual budget typically pay $70–90K; orgs at $1–5M pay $90–130K. Use Candid (candid.org) to pull 990 data before any interview — revenue, top salaries, and program ratios are public and tell you whether the org is sustainable.",
              },
              {
                role: "Program Director — Established Veteran Orgs",
                comp: "$60–90K",
                detail: "Team Red White & Blue, Mission 22, Travis Manion Foundation, and Student Veterans of America all hire veterans into leadership and program director roles. These organizations have strong cultures, genuine missions, and provide a realistic entry point into senior nonprofit leadership.",
              },
            ].map((item) => (
              <div key={item.role} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-medium text-slate-100">{item.role}</p>
                  <span className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded whitespace-nowrap">{item.comp}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coaching & Consulting */}
        <section id="coaching">
          <h2 className="text-xl font-bold text-slate-50 mb-2">Coaching &amp; Consulting Solo Practice</h2>
          <p className="text-xs text-slate-400 italic mb-5">Honest take: most people who say they want to &ldquo;do coaching&rdquo; don&rsquo;t build a business &mdash; they build a hobby. Treat it like a startup.</p>
          <div className="space-y-4">
            {[
              {
                role: "Executive / Leadership Coaching",
                comp: "$150–500/hr established",
                tag: "First-year realistic: $30–60K solo",
                detail: "ICF certification runs $3–8K and 60–125 hours depending on program level. Expect 12–18 months to build a real client base. Rate reality: $75–150/hr in year one; $150–500/hr once established with a referral pipeline and a positioning niche.",
              },
              {
                role: "Career Transition Coaching for Veterans",
                comp: "$80–150/hr",
                tag: "Part-time viable while employed",
                detail: "Strong demand from the same community you came from. Can run part-time while employed elsewhere — which is the right approach for the first 12 months. The credibility of having navigated your own transition is a genuine differentiator that commercial coaches can't buy.",
              },
              {
                role: "Independent Consulting",
                comp: "$80–120K+ once established",
                tag: "Strong niches: defense, aviation, leadership dev",
                detail: "Requires 3–5 years of verifiable domain expertise first. Defense, aviation, leadership development, and acquisition management are all strong niches. The most common mistake: consulting too soon, before the expertise is deep enough to command premium rates and generate referrals.",
              },
            ].map((item) => (
              <div key={item.role} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <p className="font-medium text-slate-100">{item.role}</p>
                  <span className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded whitespace-nowrap">{item.comp}</span>
                </div>
                <p className="text-xs text-amber-300 mb-2">{item.tag}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ministry */}
        <section id="ministry">
          <h2 className="text-xl font-bold text-slate-50 mb-2">Ministry</h2>
          <p className="text-xs text-slate-400 italic mb-5">Honest take: this path is a calling, not a career strategy &mdash; but the transferable leadership skills from USAFA and the military are genuinely rare in most ministry contexts.</p>
          <div className="space-y-4">
            {[
              {
                role: "Military Chaplain (Active / Reserve)",
                comp: "Full military benefits",
                tag: "Requires MDiv + ecclesiastical endorsement",
                detail: "If still in service or able to re-access via reserve. Requires an M.Div or equivalent plus an ecclesiastical endorsement from a recognized denomination. Full military benefits, pay, and retirement accrual. The cleanest transition for those already on a ministry formation track.",
              },
              {
                role: "Civilian Ministry — Pastoral / Church Plant",
                comp: "$40–80K + housing",
                tag: "Housing allowance adds 15–25% to effective comp",
                detail: "Compensation varies wildly by church size, denomination, and location. Housing or parsonage allowance is common and adds 15–25% to effective compensation. Solo pastor at a small church: $40–70K + housing. Teaching pastor at a multi-site church: $80K+.",
              },
              {
                role: "Seminary (M.Div Path)",
                comp: "3-year M.Div",
                tag: "Many seminaries offer strong vet scholarships",
                detail: "Most strong seminaries offer veterans scholarships — but Yellow Ribbon caps vary widely, so verify school by school before committing. Many seminarians work full-time alongside a 3-year M.Div. Reformed and Anglican seminaries have historically strong veteran support programs.",
              },
            ].map((item) => (
              <div key={item.role} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <p className="font-medium text-slate-100">{item.role}</p>
                  <span className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded whitespace-nowrap">{item.comp}</span>
                </div>
                <p className="text-xs text-blue-300 mb-2">{item.tag}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section id="resources">
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

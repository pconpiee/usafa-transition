import Link from "next/link";

export const metadata = {
  title: "Path: Entrepreneurship & Startups | Blue Canopy",
  description:
    "The drill-down on founding, early-stage, and vet-led capital — startup vs. small business vs. real estate, fundraising stages, and the resources that actually exist.",
};

export default function EntrepreneurshipPath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path 5 of 6
          </p>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
            <a href="/" className="hover:text-slate-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/the-map" className="hover:text-slate-400 transition-colors">The Map</a>
            <span>/</span>
            <span className="text-slate-400">Entrepreneurship</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
            Entrepreneurship &amp; Startups
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            The path most aligned with what the military trained you for
            &mdash; mission focus, calm under pressure, leadership when
            there&rsquo;s no playbook &mdash; and the path most likely
            to be done badly if you romanticize it. The military rarely
            teaches what a startup actually is, how it&rsquo;s funded,
            or how it differs from the rental property your buddy is
            calling a &ldquo;startup.&rdquo; This page is the version of
            that briefing that should have happened in TAP.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* What even IS a startup */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">First: what people actually mean by &ldquo;startup&rdquo;</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            The word &ldquo;startup&rdquo; gets used for everything
            from a guy with one Airbnb to a $50B unicorn. They are not
            the same thing, and the financial and lifestyle math is
            radically different. Three categories worth keeping
            separate:
          </p>
          <div className="space-y-4">
            <div className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
              <p className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wide">A. The VC-backed startup</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                A new company designed to grow fast and big &mdash;
                usually software, biotech, or hardware with a software
                component. Funded by venture capital in stages (seed
                through Series D+). Founders take small salaries and
                lots of equity. The bet is that the company gets big
                enough to IPO or be acquired, at which point equity
                pays out. <strong className="text-slate-100">Most fail.</strong>{" "}
                The successful ones generate outsized outcomes for
                founders and early employees, which is why VCs and the
                press care so much about them. Anduril, Shield AI,
                Palantir-at-founding, SpaceX-at-founding: all VC-backed
                startups.
              </p>
            </div>
            <div className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
              <p className="text-sm font-semibold text-emerald-300 mb-2 uppercase tracking-wide">B. The small business / mom-and-pop</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                A new business designed to serve a defined market and
                generate cash flow for the owner &mdash; not necessarily
                grow exponentially. Self-funded, SBA-loan-funded, or
                family-funded. Examples: a vet-owned construction
                company, a franchise, a consulting firm, a brewery, a
                physical therapy practice. <strong className="text-slate-100">Most actually succeed</strong>{" "}
                (the failure rate myth is largely about VC-backed
                startups). They throw off owner income from year 1 or
                2; they don&rsquo;t IPO. This is what the IVMF data
                means when it says vets are 2x more likely to be
                self-employed.
              </p>
            </div>
            <div className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
              <p className="text-sm font-semibold text-amber-300 mb-2 uppercase tracking-wide">C. Investing (real estate, etc.) &mdash; not entrepreneurship</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                If you own one Airbnb, three rental units, or a
                portfolio of single-family rentals, you&rsquo;re an{" "}
                <em>investor</em>, not a founder. This is a great
                strategy &mdash; vets cluster here for good reason
                (VA loans, rental income to stack on pension, BAH while
                in service). But it&rsquo;s a different sport from
                building a company. Capital allocation, not company
                building. <strong className="text-slate-100">If you scale to a 10+ unit portfolio with
                staff, you&rsquo;ve crossed into a small business</strong>{" "}
                (category B). Most don&rsquo;t.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed italic">
            Why this matters: the resources, capital, and risk profile
            for each category are different. A SBA 7(a) loan is for
            category B. A VC seed round is for category A. A VA loan
            on a fourplex is for category C. Don&rsquo;t mix them up.
          </p>
        </section>

        {/* Fundraising stages */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">If you&rsquo;re going VC-backed: how fundraising actually works</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Startups raise capital in named stages. Each stage maps to
            a different company maturity, dilution level, and what kind
            of work you&rsquo;d be doing if you joined. Knowing the
            stage tells you most of what you need to know.
          </p>
          <div className="space-y-3">
            {[
              {
                stage: "Pre-seed / Friends & Family",
                size: "$50K–$500K",
                from: "Founders, family, angels",
                what: "Idea + maybe a prototype. The team is the founders only. If you join here, you&rsquo;re a co-founder by another name. Highest risk; highest equity (3–10%+).",
              },
              {
                stage: "Seed",
                size: "$500K–$5M",
                from: "Seed VCs, angels, accelerators (Y Combinator, Techstars)",
                what: "Building the first version of the product, finding initial customers. Team is 2–10 people. If you join here you&rsquo;re early — probably 0.5–2% equity, base salary 60–80% of market.",
              },
              {
                stage: "Series A",
                size: "$5M–$20M",
                from: "Tier-1 VCs (Sequoia, a16z, Founders Fund, etc.)",
                what: "Product-market fit signal. Real revenue or real traction. Team is 10–40 people. Joining here gets you 0.1–0.5% equity, base near-market. The first hire-driven scaling.",
              },
              {
                stage: "Series B",
                size: "$20M–$60M",
                from: "Growth-stage VCs",
                what: "Proven model; now scaling sales, ops, and team. 40–150 employees. Equity 0.05–0.2%; salary at-market or above. Most of the operational job functions exist (BD, ops, finance, marketing).",
              },
              {
                stage: "Series C and beyond",
                size: "$60M+",
                from: "Late-stage VCs, growth equity, crossover funds",
                what: "Mature company optimizing toward IPO or acquisition. 150+ employees. Looks more like a normal company than a startup. Equity meaningful but smaller; salary fully competitive. Lower risk; lower variance.",
              },
              {
                stage: "Exit",
                size: "—",
                from: "Public market (IPO) or acquirer (M&A)",
                what: "Equity becomes liquid. This is when paper wealth becomes real wealth. Can take 7–12 years from founding. Many companies never reach this — they raise, struggle, and either get acqui-hired (small outcome) or shut down.",
              },
            ].map((s) => (
              <div key={s.stage} className="border border-slate-700 rounded-lg p-4 bg-slate-900/40">
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <p className="font-semibold text-slate-100">{s.stage}</p>
                  <span className="text-xs font-mono text-blue-300">{s.size}</span>
                  <span className="text-xs text-slate-400">from: {s.from}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{__html: s.what}} />
              </div>
            ))}
          </div>
        </section>

        {/* Job types by stage */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">What you&rsquo;d actually do at each stage</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Officer skill sets translate well to startups, but the
            specific role you&rsquo;d play depends on the stage you
            join. Approximate fits for transitioning O-3/O-4s:
          </p>
          <div className="space-y-4">
            {[
              { role: "Founder / Co-founder (pre-seed)", what: "You're inventing the company. Equity is high; salary is low or zero. You'll do everything: product, sales, hiring, fundraising. The military's bias toward action and ability to recruit operators is a real edge here. Most who try fail; the ones who succeed compound." },
              { role: "Chief of Staff (Seed–Series A)", what: "Common landing spot for officers. You're the founder's force-multiplier — running ops, special projects, hiring, board prep. High learning rate. Scales out as the company grows; a Chief of Staff at a Series B company often becomes VP Operations or VP BD." },
              { role: "Head of Operations / GM (Series A–B)", what: "Owning the operational function. Scaling the playbook the founders prototyped. Vets do well here — it's program management with more ambiguity and faster feedback." },
              { role: "Head of BD / Sales (any stage, especially gov-tech)", what: "Translating the product to enterprise or government customers. If you came out of an acquisition or stakeholder-heavy mil role, this is your most-direct fit. Highest comp ceiling at defense-tech and gov-tech startups." },
              { role: "Forward Deployed Engineer / Customer Success (Series A+ at gov-facing companies)", what: "Embedding with the customer to make the product work in the real environment. Palantir built its early business on this role. Defense-tech companies (Anduril, Shield AI, Saronic) all hire vets here." },
              { role: "Product Manager (Series B+)", what: "Owning a product line. PM at a startup is closer to a squadron commander than at a big company — broader scope, fewer adjacent specialists, more decisions per week. Great fit for those with technical chops or operational depth in the product domain." },
            ].map((r) => (
              <div key={r.role} className="border-l-2 border-blue-400/50 pl-4">
                <p className="font-medium text-slate-100 mb-1">{r.role}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{r.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Three versions of this path */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Three versions of being your own boss</h2>
          <div className="space-y-5">
            {[
              {
                version: "Founding (CEO of your own thing)",
                detail:
                  "You're the one signing the lease, the loan, the first hire's offer letter. Total upside; total downside; total ownership. Most successful vet founders run small businesses (gov contracting, professional services, franchises) where the path to revenue is clear and capital efficiency is high. VC-backed software founding is harder, lower base rate, longer runway.",
                whoFits:
                  "Those with a specific problem they're obsessed with, 18+ months of personal runway, and a tolerance for sustained ambiguity. Don't found because the wider transition feels too hard — that's the most expensive way to discover entrepreneurship isn't for you.",
              },
              {
                version: "Early employee at a Series A–B startup",
                detail:
                  "Joining at the right stage at a fast-growing company gets you most of the founder learning curve at a fraction of the personal capital risk. Equity is meaningful (0.1–1% range typical for senior IC roles, much higher for executive hires). You're learning company-building from the inside.",
                whoFits:
                  "Most who think they want to found should probably do this first. You'll learn what you don't know, build a network of operators, and either get the equity outcome or pattern-match for your own founding moment 3–5 years later.",
              },
              {
                version: "Acquiring an existing small business (ETA)",
                detail:
                  "Underrated and well-suited to officer skill sets. SBA 7(a) loans + an SBIC or search-fund structure can let you buy a profitable small business ($3–10M revenue, $500K–$2M EBITDA) and become an owner-operator. The 'vet ETA' (entrepreneurship-through-acquisition) community has grown significantly since 2020.",
                whoFits:
                  "Those who don't want to invent a product but want to lead an organization. People who like operations more than ideation. MBA programs with ETA pathways (HBS, Stanford, Booth, MIT, Tuck all have search-fund tracks) are the most-traveled route in.",
              },
              {
                version: "Real estate as wealth-building (not the same as founding)",
                detail:
                  "VA loans + house-hacking + 1031 exchanges are a legitimate wealth strategy that many vets execute well. Don't confuse it with running a company. It can compound to 7-figure net worth over 15 years if executed disciplined. It rarely produces a full-time income early. Most people who go full-time in real estate have eventually built it into a small business (category B above) — property management, multifamily syndication, etc.",
                whoFits:
                  "People who want passive cash flow and equity buildup alongside another career. Or people who are willing to scale into a real estate business over a decade.",
              },
            ].map((v) => (
              <div key={v.version} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-medium text-slate-100 mb-2">{v.version}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">{v.detail}</p>
                <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-blue-400/50 pl-3">
                  <strong className="text-slate-200">Who fits:</strong> {v.whoFits}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Funding mechanics */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Funding mechanics worth knowing</h2>
          <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">SBA 7(a) and 504 loans</strong> &mdash; standard small-biz loans. Used for category B (small business) and ETA. Vet fee waivers apply in many cases &mdash; verify current 2026 fee structure.</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">VA Home Loan</strong> &mdash; the lever for category C (real estate). Zero down, no PMI, can be reused. The single most-used wealth-building tool by transitioning vets, full stop.</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">VR&amp;E (Chapter 31)</strong> &mdash; entrepreneurship-adjacent training is fundable through Voc Rehab if you have a service-connected disability. Underused.</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Federal contracting set-asides</strong> &mdash; SDVOSB and VOSB designations open access to billions in DoD and federal civilian contracts annually. Real lever for services businesses; mostly irrelevant for software startups.</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Vet-led VC for category A</strong> &mdash; Veteran Ventures Capital, Squadra Ventures, Hivers and Strivers, The Veteran Fund. See resources below.</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Friends-and-family rounds</strong> &mdash; the AOG class network and squadron diaspora is a real first-money source. Ask carefully and document everything.</span></li>
          </ul>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Veteran Ventures Capital", url: "https://www.veteranventures.us/", what: "Veteran-led fund focused on defense innovation and dual-use tech. Avg first check $2–3M. Strong follow-on capacity." },
              { name: "Squadra Ventures", url: "https://www.squadra.vc/", what: "$105M raised in 2024. Cyber and national security. Founded by Guy Filippelli (ex-Army intel; sold RedOwl to Forcepoint)." },
              { name: "Hivers and Strivers", url: "https://hiversandstrivers.com/", what: "Angel fund for vet-led startups. $80M deployed across 20+ companies since 2010. Founders are USAFA / service academy grads." },
              { name: "The Veteran Fund", url: "https://www.veteran.fund/", what: "Newer fund (debuted 2024) backing vet-led companies. Worth knowing as a member of NVCA." },
              { name: "Moonshots Capital", url: "https://www.moonshotscapital.com/", what: "Vet-led VC, early stage. Active across enterprise software and defense tech." },
              { name: "EBV (Syracuse)", url: "https://ivmf.syracuse.edu/programs/entrepreneurship/ebv/", what: "Entrepreneurship Bootcamp for Veterans. Free, residency-based, foundational. Best for first-time founders." },
              { name: "IVMF Entrepreneurship Programs", url: "https://ivmf.syracuse.edu/programs/entrepreneurship/", what: "Bunker Labs CEOcircle and Breaking Barriers programs now run under IVMF. Cohort-based, free." },
              { name: "SBA Veterans Certifications", url: "https://certifications.sba.gov/", what: "VOSB and SDVOSB certification (transferred from VA in 2023). Opens federal contracting set-asides — major lever for service businesses." },
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
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Most startups fail.</strong> That&rsquo;s the base rate for category A. Don&rsquo;t use the survivors&rsquo; LinkedIn posts as your sample. Small businesses (B) and real estate (C) have very different success curves.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Spousal alignment matters more than capital.</strong> The financial volatility of founding stresses marriages in ways military life didn&rsquo;t prepare you for. Get a full conversation in writing before you commit.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Equity is illiquid.</strong> A 0.5% stake at a $100M company looks great until you realize you can&rsquo;t turn it into rent for 5+ years. Model scenarios at zero, at base case, at upside.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">No structure.</strong> The military trained you to operate inside a structure. Founding has none. Some thrive here; some discover they always needed the scaffolding more than they admitted.</span></li>
          </ul>
        </section>

        {/* Voices */}
        <section className="border border-slate-700 rounded-xl p-6 bg-slate-900/40">
          <p className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold">Voices worth finding</p>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            The vet-founder space is loud on LinkedIn. The honest
            stories are quieter. Where to find them:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://podcasts.apple.com/us/podcast/beyond-the-uniform/id1148739411" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Beyond the Uniform podcast &mdash; founder interviews</a><span className="text-slate-400">Dozens of interviews with vet founders, including failures and pivots.</span></li>
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://www.reddit.com/r/Entrepreneur/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">r/Entrepreneur and r/realestateinvesting</a><span className="text-slate-400">For category B and C respectively. Long-form, anonymous, often more useful than LinkedIn.</span></li>
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://www.biggerpockets.com/forums/521-veterans" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">BiggerPockets veterans forum</a><span className="text-slate-400">Active vet real-estate community &mdash; VA loan house-hacking, multifamily, BRRRR, the whole landscape.</span></li>
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://www.acquired.fm/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Acquired podcast</a><span className="text-slate-400">Deep dives on how companies actually got built. The single best way to learn the language of category-A founders.</span></li>
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

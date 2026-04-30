import Link from "next/link";

export const metadata = {
  title: "Path: Entrepreneurship & Startups | Blue Canopy",
  description:
    "The drill-down on founding, early-stage, and vet-led capital for transitioning USAFA pilots — when to found, when to be employee #5, and the resources that actually exist.",
};

export default function EntrepreneurshipPath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path 5 of 6
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
            Entrepreneurship &amp; Startups
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The path most aligned with what the military trained you for &mdash;
            mission focus, calm under pressure, leadership when there&rsquo;s
            no playbook &mdash; and the path most likely to be done badly if
            you romanticize it. The vet-founder ecosystem is real, but
            statistically rare. Most successful vet entrepreneurs are doing
            something quieter than the LinkedIn version of this story.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The 2026 landscape</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Veterans are <strong className="text-slate-200">~2x more likely</strong>{" "}
              than non-veterans to be self-employed (long-running IVMF data),
              but new vet business formation has declined sharply vs. the
              WWII/Vietnam-era cohorts. Most vet entrepreneurs run services
              businesses &mdash; government contracting, construction,
              franchise operations, professional services &mdash; not
              VC-backed software startups.
            </p>
            <p>
              The <strong className="text-slate-200">VC-backed defense-tech wave</strong>{" "}
              (Anduril, Shield AI, Saronic, Apex, Skydio, Hermeus, Mach
              Industries, ABL Space) has created more vet-founder capital
              flow than the prior decade combined. Squadra Ventures raised
              $105M in 2024 for cyber and national security. Veteran
              Ventures Capital writes $2&ndash;3M first checks. Hivers and
              Strivers has put $80M into 20+ vet-led companies since 2010
              (founders are USAFA / service academy grads, by the way).
              The capital is there for the right idea and right team.
            </p>
            <p>
              The hardest decision is usually not <em>whether</em> to do this
              but <em>which version</em>. Founding a company with personal
              capital risk is a different sport than joining as employee #5
              at a Series A defense-tech startup with 0.3% equity. Both are
              entrepreneurship. The risk-adjusted math is wildly different.
            </p>
          </div>
        </section>

        {/* Three versions of this path */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Three versions of this path</h2>
          <div className="space-y-5">
            {[
              {
                version: "Founding (CEO of your own thing)",
                detail:
                  "You're the one signing the lease, the loan, the first hire's offer letter. Total upside; total downside; total ownership. Most successful vet founders run services businesses (gov contracting, professional services, franchises) where the path to revenue is clear and capital efficiency is high. VC-backed software founding is harder, lower base rate, longer runway.",
                whoFits:
                  "PTWOBs who have a specific problem they're obsessed with, who have 18+ months of personal runway, and who can tolerate sustained ambiguity. Don't found because the wider transition feels too hard — that's the most expensive way to discover entrepreneurship isn't for you.",
              },
              {
                version: "Early employee at a Series A–B defense-tech or dual-use startup",
                detail:
                  "Joining at the right stage at a fast-growing defense-tech company gets you most of the founder learning curve at a fraction of the personal capital risk. Equity is meaningful (0.1–1% range typical for senior IC roles, much higher for executive hires). You're learning company-building from the inside.",
                whoFits:
                  "Most PTWOBs who think they want to found should probably do this first. You'll learn what you don't know, build a network of operators, and either get the equity outcome or pattern-match for your own founding moment 3–5 years later.",
              },
              {
                version: "Acquiring an existing small business",
                detail:
                  "Underrated and well-suited to officer skill sets. SBA 7(a) loans + an SBIC or search-fund structure can let you buy a profitable small business ($3–10M revenue, $500K–$2M EBITDA) and become an owner-operator. The 'vet ETA' (entrepreneurship-through-acquisition) community has grown significantly since 2020.",
                whoFits:
                  "PTWOBs who don't want to invent a product but want to lead an organization. People who like operations more than ideation. Those with MBA programs that have ETA pathways (HBS, Stanford, Booth, MIT, Tuck all have search-fund tracks).",
              },
            ].map((v) => (
              <div key={v.version} className="border border-slate-800 rounded-lg p-5 bg-slate-900/30">
                <p className="font-medium text-slate-200 mb-2">{v.version}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{v.detail}</p>
                <p className="text-xs text-slate-500 leading-relaxed border-l-2 border-blue-500/40 pl-3">
                  <strong className="text-slate-300">Who fits:</strong> {v.whoFits}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The bridge */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The bridge: capital, programs, and people</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            The vet-founder ecosystem is small enough to know personally. Six
            months of intentional informational conversations with vet founders
            and vet investors will move you from outsider to insider. None of
            it is gatekept &mdash; it&rsquo;s just relationship-built.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Veteran Ventures Capital",
                url: "https://www.veteranventures.us/",
                what: "Veteran-led fund focused on defense innovation and dual-use tech. Avg first check $2–3M. Strong follow-on capacity.",
              },
              {
                name: "Squadra Ventures",
                url: "https://www.squadra.vc/",
                what: "$105M raised in 2024. Cyber and national security. Founded by Guy Filippelli (ex-Army intel; sold RedOwl to Forcepoint).",
              },
              {
                name: "Hivers and Strivers",
                url: "https://hiversandstrivers.com/",
                what: "Angel fund for vet-led startups. $80M deployed across 20+ companies since 2010. Founders are USAFA / service academy grads.",
              },
              {
                name: "The Veteran Fund",
                url: "https://www.veteran.fund/",
                what: "Newer fund (debuted 2024) backing vet-led companies. Worth knowing as a member of NVCA.",
              },
              {
                name: "Moonshots Capital",
                url: "https://www.moonshotscapital.com/",
                what: "Vet-led VC, early stage. Active across enterprise software and defense tech.",
              },
              {
                name: "EBV (Syracuse)",
                url: "https://ivmf.syracuse.edu/programs/entrepreneurship/ebv/",
                what: "Entrepreneurship Bootcamp for Veterans. Free, residency-based, foundational. Best for first-time founders.",
              },
              {
                name: "IVMF Programs (incl. former Bunker Labs)",
                url: "https://ivmf.syracuse.edu/programs/entrepreneurship/",
                what: "Bunker Labs CEOcircle and Breaking Barriers programs now run under IVMF. Cohort-based, free.",
              },
              {
                name: "VetBiz / SDVOSB Certification",
                url: "https://veterans.certify.sba.gov/",
                what: "Now centralized under SBA (transferred from VA in 2023). Service-Disabled Veteran-Owned Small Business cert opens federal contracting set-asides — major lever for service businesses.",
              },
            ].map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-800/50 transition">
                <p className="font-medium text-slate-200 text-sm">{r.name} &rarr;</p>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{r.what}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Funding mechanics */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Funding mechanics worth knowing</h2>
          <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">SBA 7(a) and 504 loans</strong> &mdash; standard small-biz loans. SBA Veterans Advantage historically waived/reduced fees; verify current 2026 fee structure.</span></li>
            <li className="flex gap-2"><span className="text-blue-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">VR&amp;E (Chapter 31)</strong> &mdash; entrepreneurship-adjacent training is fundable through Voc Rehab if you have a service-connected disability. Underused.</span></li>
            <li className="flex gap-2"><span className="text-blue-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Federal contracting set-asides</strong> &mdash; SDVOSB and VOSB designations open access to billions in DoD and federal civilian contracts annually. Real lever for services businesses; mostly irrelevant for software startups.</span></li>
            <li className="flex gap-2"><span className="text-blue-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Friends-and-family rounds</strong> &mdash; the AOG class network and squadron diaspora is a real first-money source for vet founders. Ask carefully and document everything.</span></li>
          </ul>
        </section>

        {/* Arc */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">What the arc looks like</h2>
          <div className="space-y-4">
            {[
              { year: "Year 0–1 (founding)", what: "If founding: 12–18 months pre-revenue or sub-revenue. Personal capital burn. The mission is product-market fit and / or first reliable revenue. If joining early-stage: onboarding, learning the company's go-to-market, ramping into ownership of a function." },
              { year: "Year 1–3", what: "Founder: first paying customers, first hires, first real existential crises. Most companies fail in this window. If you survive, you've earned the founder identity. Early employee: stock vesting cliff (year 1 typically), promotions, scope expansion." },
              { year: "Year 3–7", what: "Founder: scale or die. Series A → B → C is real money but real dilution. Early employee: companies that survive this stretch typically generate liquidity events for early hires (acquisitions, secondaries, IPO)." },
              { year: "Year 7+", what: "Most successful vet entrepreneurs are not on a 7-year arc — they're on a 15-year one. The financial outcomes that matter happen at exit, which can take longer than expected. Plan accordingly." },
            ].map((row) => (
              <div key={row.year} className="border border-slate-800 rounded-lg p-5 bg-slate-900/30">
                <p className="font-semibold text-slate-200 mb-1">{row.year}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{row.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden taxes */}
        <section className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-100 mb-3">The hidden taxes</h2>
          <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Most startups fail.</strong> That&rsquo;s the base rate. Don&rsquo;t use the survivors&rsquo; LinkedIn posts as your sample. The boring cargo of failed founders is the larger reality.</span></li>
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Spousal alignment matters more than capital.</strong> The financial volatility of founding stresses marriages in ways military life didn&rsquo;t prepare you for. Get a full conversation in writing before you commit.</span></li>
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Equity is illiquid.</strong> A 0.5% stake at a $100M company looks great until you realize you can&rsquo;t turn it into rent for 5+ years. Model scenarios at zero, at base case, at upside.</span></li>
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">No structure.</strong> The military trained you to operate inside a structure. Founding has none. Some PTWOBs thrive in this; some discover they always needed the scaffolding more than they admitted.</span></li>
          </ul>
        </section>

        {/* Story */}
        <section className="border border-slate-800 rounded-xl p-6 bg-slate-900/30">
          <p className="text-xs uppercase tracking-wide text-blue-400 mb-3 font-medium">From a peer</p>
          <p className="text-sm text-slate-300 italic leading-relaxed">
            &ldquo;I tried to found out of the gate. Burned 14 months on an
            idea that didn&rsquo;t have product-market fit, but I learned the
            mechanics of fundraising, hiring, and what a real customer
            conversation sounds like. Then I joined a Series A defense-tech
            company as the third commercial hire. Two years later I was running
            BD for the company. The failed founding was the most expensive
            education I&rsquo;ve ever paid for, and probably the most useful.
            If I could redo it, I&rsquo;d join the startup first and found
            second. The reverse worked, but it was harder than it needed to
            be.&rdquo;
          </p>
          <p className="mt-3 text-xs text-slate-500">&mdash; KC-135 PTWOB, defense-tech operator</p>
        </section>

        <section className="border-t border-slate-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <Link href="/the-map" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors">&larr; Back to The Map</Link>
            <Link href="/networking" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">Stage 04: Networking &rarr;</Link>
          </div>
          <p className="mt-8 text-xs text-slate-700 italic">Blue Skies &mdash; 487</p>
        </section>

      </div>
    </div>
  );
}

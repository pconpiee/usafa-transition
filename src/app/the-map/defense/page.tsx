import Link from "next/link";

export const metadata = {
  title: "Path: Defense & Aerospace | Blue Canopy",
  description:
    "The drill-down on the defense industry — primes vs. defense tech, BD vs. PM, the clearance premium, and the real career arc.",
};

export default function DefensePath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path 2 of 6
          </p>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
            <a href="/" className="hover:text-slate-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/the-map" className="hover:text-slate-400 transition-colors">The Map</a>
            <span>/</span>
            <span className="text-slate-400">Defense &amp; Aerospace</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight text-balance">
            Defense &amp; Aerospace Industry
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            The natural first move for many leaving the service &mdash;
            for good reason. The translation is real, the clearance is
            leverage, and the industry is in the middle of the deepest
            reshape in 40 years as defense tech companies and primes
            converge on the same contracts.
          </p>
        </div>
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500">
            <svg aria-hidden="true" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 7v5l3 2" />
            </svg>
            ~3 min read
          </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 2026 landscape, honestly</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The DoD topline jumped sharply in the FY26 budget request,
              with specific programs (Golden Dome missile shield,
              autonomous collaborative platforms, hypersonics, space-based
              ISR) pulling capital in. Anduril and Palantir announced a
              consortium to bid against the primes for major programs.
              Shield AI raised at $5B+, Saronic and Apex Space at
              billion-plus.{" "}
              <strong className="text-slate-100">
                The traditional primes are not going away &mdash; but the
                question of where you land has gotten more interesting
                than it was five years ago.
              </strong>
            </p>
            <p>
              For a transitioning O-3/O-4, the defense industry is where
              the most direct skill translation happens: program
              management, capture/BD, technical operations, simulation,
              training. Your clearance, your acquisition vocabulary, and
              your operational perspective on the customer are real assets
              &mdash; the question is whether you spend the next 10 years
              using them as a foundation or as a ceiling.
            </p>
          </div>
        </section>

        {/* Two camps */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Two camps, very different cultures</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
              <p className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wide">The primes</p>
              <p className="font-medium text-slate-100 mb-3">Lockheed, RTX, Boeing, Northrop, GD, L3Harris, BAE</p>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li>&middot; Director-level entry common for O-4/O-5 with right experience</li>
                <li>&middot; ~$140&ndash;180K base + 10&ndash;20% bonus + RSUs</li>
                <li>&middot; Liquid public equity; predictable benefits; pension at some still</li>
                <li>&middot; Deeply matrixed, slow-moving, bureaucratic</li>
                <li>&middot; Strong vet networks internally; culture is familiar</li>
                <li>&middot; Risk: getting siloed as &ldquo;the military guy&rdquo;</li>
              </ul>
            </div>
            <div className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
              <p className="text-sm font-semibold text-amber-300 mb-2 uppercase tracking-wide">Defense tech</p>
              <p className="font-medium text-slate-100 mb-3">Anduril, Palantir, Shield AI, Saronic, SpaceX, Skydio, Apex, Epirus</p>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li>&middot; Smaller titles, broader scope, faster pace</li>
                <li>&middot; Base lower at most (~$130&ndash;160K), equity heavier</li>
                <li>&middot; Equity is illiquid; model it at zero, hope for upside</li>
                <li>&middot; SpaceX known for low base, long hours, mission pull</li>
                <li>&middot; Vet-friendly leadership at most; SkillBridge programs at Anduril and others</li>
                <li>&middot; Risk: equity worth nothing if liquidity event doesn&rsquo;t come</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed italic">
            The right answer for many is to spend 2&ndash;3 years at a
            prime to learn the industry and ship, then move to defense
            tech for the equity ride and the pace. Some do the reverse.
            Both work. What doesn&rsquo;t work is staying at a prime so
            long the equity window closes on you.
          </p>
        </section>

        {/* Role forks */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Role forks: BD vs. PM vs. Ops vs. Engineering</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Inside any defense company, these four functions have very
            different career physics. Understand them before you accept
            an offer.
          </p>
          <div className="space-y-4">
            {[
              {
                role: "Business Development / Capture",
                what: "Relationship work + proposal management. You're identifying opportunities, building customer relationships, leading the capture process for major bids. Eat-what-you-kill compensation pattern at primes — the highest ceiling in the industry. Best fit if you liked the briefing and stakeholder side of squadron ops more than the flying itself.",
              },
              {
                role: "Program Management",
                what: "Owning the cost/schedule/performance triangle on a contract. The single most direct skill translation from squadron leadership. Mid-stable career physics, predictable, well-compensated. The default landing spot for most rated transitioners — don't default to it without considering BD.",
              },
              {
                role: "Operations / Mission Systems",
                what: "Running the day-to-day execution of a program — flight test ops, mission planning support, training systems delivery. Closer to operational rhythms you're used to. Compensation tier slightly below PM at primes; equivalent at defense tech.",
              },
              {
                role: "Engineering & Technical (if you have a STEM degree)",
                what: "Systems engineering, requirements, integration. You're not coding C++ from a USAFA mech-e degree — but if you can pattern-match across mission, system, and customer, you're rare. Great fit if you want depth over breadth.",
              },
            ].map((r) => (
              <div key={r.role} className="border-l-2 border-blue-400/50 pl-4">
                <p className="font-medium text-slate-100 mb-1">{r.role}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{r.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The bridge */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The bridge: SkillBridge, clearance, network</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The defense industry hires through three doors: corporate
              SkillBridge fellowships, vet-recruiting events, and direct
              referrals from inside. The vast majority of senior
              placements come through door three.
            </p>
            <p>
              <strong className="text-slate-100">SkillBridge in 2026:</strong>{" "}
              The program is intact but the Air Force tightened its rules
              in early 2026 &mdash; O-4 and above are now capped at{" "}
              <strong>60&ndash;90 days</strong> (down from 180), and field
              grade commander approval is required. Plan your dates
              against this. If you&rsquo;re an O-3 you still have the full
              120-day window. If you&rsquo;re O-4+ targeting a 12-week
              consulting fellowship (McKinsey, BCG, Bain &mdash; see
              Tech &amp; Business), get unit commander buy-in early.
            </p>
            <p>
              <strong className="text-slate-100">The clearance premium</strong>{" "}
              is real. A current TS/SCI with poly is worth $20&ndash;40K
              annually in the right role &mdash; but only if you keep it
              active. Gaps over 24 months mean re-investigation.
              Don&rsquo;t let yours lapse during a transition pause.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              "Anduril SkillBridge — 3–4 month internships in defense tech roles",
              "Hiring Our Heroes Corporate Fellowship — 12-week placement, 92%+ offer rate (claimed)",
              "Vet Tech Trek and similar curated company visits",
              "USAFA Network on LinkedIn — 30K+ alums, vet recruiting events",
              "AOG career services and class network",
              "Veterans on Wall Street (some defense overlap)",
            ].map((t) => (
              <div key={t} className="text-xs text-slate-400 leading-relaxed flex gap-2">
                <span className="text-blue-300 flex-shrink-0">&middot;</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Arc */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">What the arc looks like</h2>
          <div className="space-y-4">
            {[
              { year: "Year 1", what: "Onboarding into a senior individual-contributor or first-line leader role at a prime, or first-employee/early stage at a defense-tech company. Learning the contracts vocabulary, the customer hierarchy from the other side of the table, and the political map of the company." },
              { year: "Years 2–3", what: "First measurable program ship or capture win. This is when your military credibility either compounds (you delivered) or stalls (you stayed in the comfortable spaces). Compensation typically jumps 15–30% with a promotion or strong cycle." },
              { year: "Years 4–6", what: "Director-level at a prime; principal/staff at defense tech. You're now running programs or capture portfolios. This is the equity window at the defense tech companies — exits, IPOs, secondary offerings cluster here." },
              { year: "Years 7–15", what: "VP-level at a prime is realistic; C-suite at smaller defense tech is realistic. Those who keep moving across companies (every 4–6 years) tend to compound faster than those who stay loyal to one logo." },
            ].map((row) => (
              <div key={row.year} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-semibold text-slate-100 mb-1">{row.year}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{row.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden taxes */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-50 mb-3">The hidden taxes</h2>
          <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Pace.</strong> The cockpit and the squadron run fast. Primes don&rsquo;t. Year 1 is frustrating in a way you have to be ready for &mdash; it&rsquo;s not your team underperforming, it&rsquo;s the system.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">The military identity comfort.</strong> Defense lets you stay close to who you were. That&rsquo;s the appeal. It&rsquo;s also the trap. Some stay 15 years and then realize they never actually transitioned &mdash; they just changed uniforms.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Defense tech equity is not airline seniority.</strong> A 0.05% grant at a $5B company is paper. Liquidity events can take 7+ years and are not guaranteed. Model it at zero.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Travel.</strong> BD and capture roles travel hard &mdash; D.C. corridor weekly is normal. PM less. Confirm before you sign.</span></li>
          </ul>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Anduril Careers / SkillBridge", url: "https://www.anduril.com/skillbridge", what: "3–4 month transition internships in operations, software, hardware, business roles. Strong vet leadership at all levels." },
              { name: "Hiring Our Heroes Corporate Fellowship", url: "https://www.hiringourheroes.org/fellowships/", what: "12-week SkillBridge fellowship at major employers across primes and tech. Strong placement rate." },
              { name: "Service Academy Career Conference", url: "https://www.sacc-jobfair.com/", what: "Recurring hiring events specifically for service-academy grads. Many primes recruit here." },
              { name: "American Corporate Partners (ACP)", url: "https://www.acp-usa.org/", what: "Year-long mentor match with corporate executives. Free, well-run. Defense industry mentors common." },
              { name: "USAFA AOG Career Services", url: "https://www.usafa.org/career-services", what: "Class network, mentorship, recruiting events. Underused by most grads." },
              { name: "IVMF Onward to Opportunity (Syracuse)", url: "https://ivmf.syracuse.edu/programs/career-training/onward-to-opportunity/", what: "Free certifications (PMP, Six Sigma, Salesforce). Underused — these are real credentials in the industry." },
            ].map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-900/40 hover:border-blue-400/50 hover:bg-slate-800/50 transition"
              >
                <p className="font-medium text-slate-100 text-sm">{r.name} &rarr;</p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{r.what}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Voices */}
        <section className="border border-slate-700 rounded-xl p-6 bg-slate-900/40">
          <p className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold">Voices worth finding</p>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Listen to people who actually made the prime-to-defense-tech
            move, or vice versa, before you commit. The pattern matters
            more than any single story.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2 flex-wrap">
              <span className="text-blue-300 flex-shrink-0">&middot;</span>
              <a href="https://podcasts.apple.com/us/podcast/beyond-the-uniform/id1148739411" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Beyond the Uniform podcast</a>
              <span className="text-slate-400">500+ interviews with vets at primes, defense tech, and capture roles.</span>
            </li>
            <li className="flex gap-2 flex-wrap">
              <span className="text-blue-300 flex-shrink-0">&middot;</span>
              <a href="https://breakingdefense.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Breaking Defense</a>
              <span className="text-slate-400">Defense industry trade journalism. Read it weekly to learn the customer landscape from the press side.</span>
            </li>
            <li className="flex gap-2 flex-wrap">
              <span className="text-blue-300 flex-shrink-0">&middot;</span>
              <a href="https://www.reddit.com/r/AirForce/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">r/AirForce + r/securityclearance</a>
              <span className="text-slate-400">Active threads on prime vs. defense-tech offers, clearance economics, and what year-2 looks like.</span>
            </li>
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

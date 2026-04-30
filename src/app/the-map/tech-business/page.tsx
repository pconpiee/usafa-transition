import Link from "next/link";

export const metadata = {
  title: "Path: Tech & Business (incl. MBA) | Blue Canopy",
  description:
    "The drill-down on tech, consulting, PE/finance, and the MBA bridge for transitioning USAFA pilots — schools, applications, recruiting timeline, and post-MBA outcomes.",
};

export default function TechBusinessPath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path 3 of 6
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
            Tech &amp; Business
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Highest comp ceiling. Hardest translation. The path where doing the
            networking and credentialing work pays off most &mdash; and where
            doing it badly leaves you stuck submitting applications into the
            void. This is also where the <em>MBA bridge</em> lives, so it gets
            the longest treatment.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Landscape */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The 2026 landscape</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              &ldquo;Tech and business&rdquo; is a wide tent. Inside it, four
              functional paths matter for most PTWOBs: <strong className="text-slate-200">consulting</strong>{" "}
              (MBB and adjacent), <strong className="text-slate-200">corporate strategy / business
              operations</strong> (in-house at tech and Fortune 500), <strong className="text-slate-200">product
              management</strong> at tech companies, and <strong className="text-slate-200">PE/finance</strong>{" "}
              (mostly post-MBA, narrow door). Comp ceilings are the highest of
              any path on this site, but so is the variance &mdash; getting
              landed at the right firm is the whole game.
            </p>
            <p>
              Three things are true in 2026: hiring slowed across tech in
              2024&ndash;2025 and is recovering unevenly; AI / ML / defense-tech
              hiring is robust while general tech PM/ops hiring is more
              competitive than 2021 levels; consulting hiring at MBB has
              normalized after the post-COVID surge but is still strong.
            </p>
            <p>
              The PTWOBs who do best in this path almost always do one of two
              things: (1) go directly to a Big-4 or strategy consulting firm
              via SkillBridge or military pipeline programs, or (2) use a
              top MBA program as the bridge. Direct-to-tech-PM works but
              requires a specific kind of network or technical depth most
              rated officers don&rsquo;t have on day one.
            </p>
          </div>
        </section>

        {/* The MBA bridge - the deep section */}
        <section className="border border-blue-900/40 bg-blue-950/20 rounded-xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3">The deep dive</p>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">The MBA bridge</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            For most PTWOBs targeting consulting, corporate strategy, product
            management, or PE-adjacent roles, a top MBA is the highest-ROI
            move available. Yellow Ribbon coverage at top schools makes
            tuition close to free; the network buys you access to interviews
            you cannot otherwise get; and the recruiting pipelines into MBB
            and tech were built for people exactly like you.
          </p>

          <div className="space-y-6">
            {/* Schools */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-3">Where vets actually go (and why)</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Veteran enrollment varies enormously across programs. The pure
                M7 (HBS, Stanford GSB, Wharton, Booth, Kellogg, Columbia, MIT
                Sloan) typically run <strong className="text-slate-200">4&ndash;6%</strong>{" "}
                veterans per class. Tuck has historically run higher
                (~7&ndash;8%). Several &ldquo;next tier&rdquo; programs run
                meaningfully higher and offer specific veteran scholarships:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { school: "Tuck (Dartmouth)", note: "Highest M7-adjacent vet share. Strong rural community fit, very hands-on alumni." },
                  { school: "Georgetown McDonough", note: "13% vets in Class of 2027. Mujica Veteran Stipend + Pat Tillman scholarships. DC-adjacent for defense-curious vets." },
                  { school: "Carnegie Mellon Tepper", note: "Smaller class, dedicated military recruiter, strong tech placement." },
                  { school: "UMN Carlson", note: "28% vets full-time STEM track (2025). $7,500 stipend. Underrated for value-per-dollar." },
                  { school: "Darden (Virginia)", note: "Historically vet-heavy. Strong consulting and corp strategy placement." },
                  { school: "Ross (Michigan)", note: "Solid consulting/PE pipeline. Active veterans club." },
                  { school: "Fuqua (Duke)", note: "Strong on health and tech. Vet community active." },
                  { school: "USC Marshall MBV", note: "Master of Business for Veterans — 10-month vet-specific program, alternative to a full MBA." },
                ].map((s) => (
                  <div key={s.school} className="text-sm">
                    <p className="font-medium text-slate-200">{s.school}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed italic">
                Source: school class profiles + GMAC&rsquo;s 2025 veteran MBA
                guide. Update annually &mdash; class composition shifts.
              </p>
            </div>

            {/* Application timeline */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-3">The application timeline (for a fall start)</h3>
              <div className="space-y-2 text-sm text-slate-400">
                {[
                  ["~14 months out", "Open Service to School MBA Link. Free counseling. Match with a vet ambassador at target schools. Start essay drafts."],
                  ["~12 months out", "GMAT/GRE study. Most successful vet apps land 720+ GMAT or 325+ GRE — don't use vet leniency as an excuse to skip prep."],
                  ["~9 months out", "Take the test. School visits where possible. Build referee list."],
                  ["~6 months out (early Sept)", "Round 1 deadlines. R1 is your best shot at top schools — you're competing against a smaller pool and decisions come back faster. Veterans often apply R1 if their stack is strong."],
                  ["~3 months out (early Jan)", "Round 2 deadlines. The default for most vets — gives more time to land the GMAT and prep essays."],
                  ["1–2 months out", "Interview prep + admit decisions. Don't quit your day job until offers are in writing."],
                ].map(([when, what]) => (
                  <div key={when} className="flex gap-3 border-l-2 border-blue-500/30 pl-4">
                    <span className="text-xs font-mono text-blue-400 flex-shrink-0 w-32">{when}</span>
                    <span className="leading-relaxed">{what}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Money */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-3">The money: it&rsquo;s probably free</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Post-9/11 GI Bill + Yellow Ribbon at most top programs covers
                tuition entirely. Some schools (e.g. Denver Daniels, Fordham
                Gabelli) advertise full tuition coverage. M7 Yellow Ribbon
                agreements are usually uncapped or near it. Plus:
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2"><span className="text-blue-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Tillman Scholars</strong> &mdash; ~60 selected per year across all grad programs. ~$10K average + a national network. <a href="https://pattillmanfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">pattillmanfoundation.org</a></span></li>
                <li className="flex gap-2"><span className="text-blue-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">School-specific vet scholarships</strong> &mdash; Mujica (Georgetown), Carlson stipend (UMN), and similar at most top programs.</span></li>
                <li className="flex gap-2"><span className="text-blue-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Living stipend</strong> &mdash; Yellow Ribbon plus the GI Bill housing allowance (~$3&ndash;5K/month based on city) often covers rent during the program.</span></li>
              </ul>
            </div>

            {/* MBA recruiting reality */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-3">The MBA recruiting reality (read this twice)</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                MBA is not a 2-year vacation. Consulting recruiting starts the
                week you arrive. The timeline:
              </p>
              <div className="text-sm text-slate-400 space-y-2 leading-relaxed">
                <p><strong className="text-slate-200">August (orientation):</strong> Networking events, coffee chats, firm receptions. You cannot skip these.</p>
                <p><strong className="text-slate-200">September&ndash;October:</strong> First-round applications. Cover letters, resume polish, behavioral prep.</p>
                <p><strong className="text-slate-200">Late October&ndash;November:</strong> First-round interviews at MBB and other consulting firms.</p>
                <p><strong className="text-slate-200">By Thanksgiving:</strong> Many offers are out for summer internship. The summer internship is the audition for full-time.</p>
                <p><strong className="text-slate-200">If you arrive thinking you&rsquo;ll &ldquo;figure it out&rdquo;:</strong> you&rsquo;ve already missed it. The vets who do best start case prep in <em>April</em> before the program starts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct (no-MBA) paths */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The direct (no-MBA) routes</h2>
          <div className="space-y-4">
            {[
              {
                route: "MBB SkillBridge fellowships",
                detail: "McKinsey (10–12 weeks), BCG (12 weeks), and Bain (10 weeks, in Chicago/Austin/Dallas/Houston) all run formal SkillBridge fellowships. McKinsey's 2023 inaugural cohort hit 100% offer rate. These are full-time consulting roles, often without requiring an MBA. The cleanest direct shot for a transitioning O-3/O-4 with a strong leadership story.",
                links: [
                  ["McKinsey Military Fellowship", "https://www.mckinsey.com/careers/mckinsey-military-fellowship"],
                ],
              },
              {
                route: "Big tech veteran programs",
                detail: "Amazon's Military Programs, Google Veterans Network, Microsoft MSSA. These are real pipelines that hire transitioning service members into PM, PMO, ops, and TPM roles. Weaker for senior officer transitions (more enlisted-focused at MSSA), stronger for O-3-level.",
                links: [
                  ["Microsoft MSSA", "https://military.microsoft.com/programs/microsoft-software-and-systems-academy/"],
                ],
              },
              {
                route: "Direct PM / corp strategy roles",
                detail: "Possible but networking-dependent. You'll need a path through informational conversations with vets already inside the company. The PMP, Salesforce, and AWS certifications via IVMF are real signals of seriousness — the imperfect proxy for the MBA when you can't get there.",
                links: [
                  ["IVMF Onward to Opportunity", "https://ivmf.syracuse.edu/programs/career-training/onward-to-opportunity/"],
                ],
              },
              {
                route: "BreakLine, COMMIT Foundation, Veterati",
                detail: "BreakLine ran cohort programs into tech and finance — verify current operating status as the vet-services funding environment shifted in 2024. COMMIT Foundation is highly regarded for 1:1 transition coaching, especially for officers. Veterati is mentor-matching, free, light-touch.",
                links: [
                  ["COMMIT Foundation", "https://www.commitfoundation.org/"],
                  ["Veterati", "https://www.veterati.com/"],
                ],
              },
            ].map((r) => (
              <div key={r.route} className="border border-slate-800 rounded-lg p-5 bg-slate-900/30">
                <p className="font-medium text-slate-200 mb-2">{r.route}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{r.detail}</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  {r.links.map(([label, url]) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{label} &rarr;</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comp */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">What this actually pays</h2>
          <div className="grid sm:grid-cols-3 gap-3 text-center">
            {[
              { num: "$220–250K", label: "Post-MBA MBB total comp Year 1" },
              { num: "$250–350K", label: "Post-MBA tech senior PM (FAANG L6)" },
              { num: "$300K+", label: "Post-MBA megafund PE associate (rare; usually pre-MBA banking required)" },
            ].map((c) => (
              <div key={c.label} className="p-3 rounded-lg border border-slate-800 bg-slate-900/30">
                <p className="text-lg font-bold text-slate-100">{c.num}</p>
                <p className="mt-1 text-xs text-slate-600 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 leading-relaxed italic">
            Pre-MBA / direct-entry roles run lower (typically $130&ndash;180K
            base for senior associate / strategy roles, $150&ndash;200K for tech
            PM at large companies). levels.fyi has live data on tech and
            consulting comp; check it directly.
          </p>
        </section>

        {/* Arc */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The 5–10 year arc, by route</h2>
          <div className="space-y-4">
            {[
              { label: "MBA → Consulting → Industry", what: "MBA, then 2–3 years at MBB, then exit to industry: Director of Strategy, Chief of Staff to a senior executive, or operating role at a PE-backed business. The most reliable engine for compounded comp and optionality. By year 7 post-MBA, $400K+ all-in is common." },
              { label: "MBA → Tech PM → Senior leadership", what: "MBA into a senior PM role at a tech company, then GPM / Director of Product / VP Product over 5–8 years. Equity-heavy compensation; total comp at L7+ at FAANG can clear $700K. Volatile across hiring cycles." },
              { label: "Direct → MBB SkillBridge → Career", what: "Skip the MBA, ride the SkillBridge → full-time conversion. Full-time start as Associate. Same arc as the MBA route but compressed by ~2 years. Some firms sponsor MBA later." },
              { label: "Direct → Corporate → Senior strategy / GM", what: "Direct entry into a Fortune 500 strategy or business operations role. Slower comp curve early, but the ceiling is real once you make the GM/SVP move (often year 8–12). Strong fit for officers who liked execution at scale more than the cockpit." },
            ].map((row) => (
              <div key={row.label} className="border-l-2 border-blue-500/30 pl-4">
                <p className="font-medium text-slate-200 mb-1">{row.label}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{row.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden taxes */}
        <section className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-100 mb-3">The hidden taxes</h2>
          <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Beginner mode is real.</strong> You will not be the most senior person in the room. You will not understand every joke. Most PTWOBs in tech and business hit a wall around month 4 when the novelty fades and the imposter syndrome kicks in. Ride it out.</span></li>
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">Layoffs are real.</strong> The stability you&rsquo;re used to does not exist in tech. Plan finances for 6 months of runway always.</span></li>
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">PE is mostly closed without pre-MBA banking.</strong> Some PTWOBs target megafund PE post-MBA without realizing the recruiting pipeline is built for ex-bankers. Corp dev, growth equity, and operating roles at PE portfolios are the realistic vet paths.</span></li>
            <li className="flex gap-2"><span className="text-amber-400 flex-shrink-0">&middot;</span><span><strong className="text-slate-200">The vet network is your superpower.</strong> Use it. Most PTWOBs underuse the AOG and class network because they feel like they should make it on their own. That&rsquo;s a fixed-mindset trap. Civilians use their networks; you should too.</span></li>
          </ul>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Service to School (S2S) MBA Link", url: "https://service2school.org/sign-up/mba-admissions-support", what: "Free MBA application counseling. Matches you with a vet ambassador at target schools. The single highest-ROI free service for vet MBA applicants." },
              { name: "McKinsey Military Fellowship", url: "https://www.mckinsey.com/careers/mckinsey-military-fellowship", what: "10–12 week SkillBridge fellowship; full-time consulting offers for successful fellows." },
              { name: "BCG and Bain SkillBridge", url: "https://www.bcg.com/careers/military-and-veterans", what: "Both run formal SkillBridge programs. Bain is in Chicago, Austin, Dallas, Houston. BCG is national." },
              { name: "Pat Tillman Foundation", url: "https://pattillmanfoundation.org/", what: "Tillman Scholars program — ~60 selected/year across grad programs. Network is the real value." },
              { name: "American Corporate Partners (ACP)", url: "https://www.acp-usa.org/", what: "Year-long mentor match with a corporate exec. Free, well-run." },
              { name: "IVMF Onward to Opportunity", url: "https://ivmf.syracuse.edu/programs/career-training/onward-to-opportunity/", what: "Free certifications: PMP, Salesforce, AWS, CompTIA, Six Sigma. Real signal in tech and consulting recruiting." },
              { name: "Hiring Our Heroes Corporate Fellowship", url: "https://www.hiringourheroes.org/fellowships/", what: "12-week SkillBridge; many tech and Fortune 500 hosts." },
              { name: "Military MBA Consulting", url: "https://militarymbaconsulting.com/", what: "Paid consulting service from former vet admits. The high-end option if S2S can&rsquo;t cover your needs." },
            ].map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-800/50 transition">
                <p className="font-medium text-slate-200 text-sm">{r.name} &rarr;</p>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{r.what}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="border border-slate-800 rounded-xl p-6 bg-slate-900/30">
          <p className="text-xs uppercase tracking-wide text-blue-400 mb-3 font-medium">From a peer</p>
          <p className="text-sm text-slate-300 italic leading-relaxed">
            &ldquo;I told myself I&rsquo;d figure out the consulting thing
            during the first month of school. By the second week of orientation
            I&rsquo;d been to four firm receptions and seen guys who had been
            case-prepping since April. I caught up by Christmas, but I was
            behind on my own program for the entire first semester. The MBA
            isn&rsquo;t the credential. The recruiting cycle is the credential.
            Treat it like a deployment workup, not a sabbatical.&rdquo;
          </p>
          <p className="mt-3 text-xs text-slate-500">&mdash; B-1 PTWOB, top-5 MBA, now at MBB</p>
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

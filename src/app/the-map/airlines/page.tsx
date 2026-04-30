import Link from "next/link";

export const metadata = {
  title: "Path: Commercial Airlines | Blue Canopy",
  description:
    "The drill-down on commercial airlines — regionals vs. majors, ATP-CTP, the seniority math, and the real career arc.",
};

export default function AirlinesPath() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path 1 of 6
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
            Commercial Airlines
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            The most well-trodden path for rated transitioners. Transparent
            seniority economics, a real community, and pay that crossed into
            genuine wealth-building territory after the 2022&ndash;2023
            contract round. The trap isn&rsquo;t going &mdash; it&rsquo;s
            going by default.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* The landscape */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 2026 landscape, honestly</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The post-COVID hiring surge that opened up roughly 13,000
              major-airline seats in 2022&ndash;2023 has cooled. Through
              2024 and into 2026, majors paused or slowed new-hire classes;
              regionals are back to being a filter, not a free escalator.
              The pay scales, however, did not snap back &mdash; the new
              contracts are locked in for the next several years and they
              are extraordinary by any historical standard.
            </p>
            <p>
              At a major (Delta, United, American), a Year 1 narrowbody
              first officer earns roughly{" "}
              <strong className="text-slate-100">$100&ndash;115/hr</strong>{" "}
              &mdash; about $95K to $115K against a typical 75&ndash;80
              monthly hour line, plus per-diem and 401(k) matching that
              pushes total comp closer to $130K. Southwest leads the pack
              on Year-1 FO pay (~$130K). A 12-year captain on a widebody
              (777, 787, A350) is at{" "}
              <strong className="text-slate-100">$465/hour</strong>{" "}
              &mdash; that is roughly $440K&ndash;$500K per year before
              profit-sharing and 401(k). A first-year captain at Delta is
              in the{" "}
              <strong className="text-slate-100">$300K&ndash;$315K</strong>{" "}
              range. These are the highest commercial pilot wages in
              modern airline history.
            </p>
            <p>
              The reason most people hesitate isn&rsquo;t the money;
              it&rsquo;s what comes with it. Seniority is the only
              currency. The day you start determines your next 25 years
              &mdash; base, equipment, schedule, vacation, retirement
              timing. One month of seniority can be worth tens of
              thousands over a career, which is why the question of{" "}
              <em>when</em> you start matters almost as much as{" "}
              <em>where</em>.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { num: "$95–130K", label: "Major Yr-1 FO total comp" },
              { num: "$313K", label: "Delta Yr-1 captain (est.)" },
              { num: "$465/hr", label: "12-yr widebody captain" },
              { num: "750 hrs", label: "Mil R-ATP minimum" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-lg border border-slate-700 bg-slate-900/50">
                <p className="text-lg font-bold text-slate-50">{s.num}</p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The forks within the path */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The sub-decisions inside the path</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            &ldquo;Going to the airlines&rdquo; is not one decision.
            It&rsquo;s a stack of them. Get these right before you submit
            applications.
          </p>
          <div className="space-y-5">
            {[
              {
                fork: "Direct-to-major vs. regional first",
                detail:
                  "If you have your hours and competitive military experience (especially heavy or fighter time with PIC/IP/EP), apply direct to majors. Most rated transitioners hit the hour mins. The regional path is for the under-houred, not for the under-confident — going to a regional 'to be safe' is the most expensive cautious decision in this industry. You are giving up the seniority date that compounds.",
              },
              {
                fork: "Legacy (Delta/United/American) vs. low-cost (Southwest, JetBlue) vs. cargo (FedEx, UPS, Atlas)",
                detail:
                  "Cargo (FedEx, UPS) historically pays the best, ages the best, and has the most predictable schedules — but is hardest to get into and requires comfort with all-night ops. Legacies have widebody international flying; LCC/ULCCs are domestic-heavy with their own culture. Talk to people 5+ years in at each before you decide.",
              },
              {
                fork: "Active duty separation vs. Guard/Reserve while flying for the airline",
                detail:
                  "The Guard/Reserve fork is significant. Many leave active duty, drop into a Guard or Reserve unit, and start their airline seniority simultaneously. You keep flying military, retain the community, and accrue toward a Reserve retirement at 60. The cost is complexity (USERRA leave laws work, but it's friction), and you have to land a Guard/Reserve slot — they're competitive. This is the path a lot of fighter and heavy guys quietly take.",
              },
              {
                fork: "Base and equipment first assignment",
                detail:
                  "You'll bid for a base and aircraft on day one. Bid based on where you'll commute from for 5+ years, not where you want to live the next 6 months. Bidding to a junior base (typically held by senior pilots at smaller stations) gets you off reserve faster than bidding to a senior base (NYC, LAX, ATL) where you'll sit reserve longer. Most new hires under-weigh this — the QOL delta between line and reserve is enormous.",
              },
            ].map((item) => (
              <div key={item.fork} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-medium text-slate-100 mb-2">{item.fork}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The bridge */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The bridge: from squadron to right seat</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The mechanical prep is well-documented; the timing is what
              gets missed. Major-airline applications run through tools
              like Aero Crew Solutions and AviatorBio &mdash; the
              application itself is data-entry-heavy (flight time,
              aircraft, dates, addresses for every job back to high
              school). Get this clean and current <em>before</em> you
              start interview prep.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {[
              {
                step: "12&ndash;18 months out",
                actions: [
                  "Get your logbook in civilian format. Convert mil time line by line; don't leave this for the last month.",
                  "Take the ATP-CTP course (~$5K, often paid for by the airline as a contingent hire, or run as part of SkillBridge).",
                  "Pass the ATP written.",
                  "First-class medical, current. Address any flags before you apply.",
                ],
              },
              {
                step: "9&ndash;12 months out",
                actions: [
                  "Open RTAG, BogiDope, and major-airline forums. Read the threads. Understand the calendar.",
                  "Begin building references inside each target airline. Two captains who'll write for you is the minimum.",
                  "Decide on Guard/Reserve. If yes, start that application now — it can take a year.",
                ],
              },
              {
                step: "3&ndash;9 months out",
                actions: [
                  "Submit applications to 3&ndash;5 carriers, not one. Don't romance a single airline.",
                  "Interview prep — the major-airline interview format is well-documented (HR + technical + sim eval at some carriers). Emerald Coast, Spitfire Elite, and Kit Darby/AIR Inc. are the names that come up most often.",
                  "If your unit allows it under 2026 SkillBridge rules (O-4+ now capped at 60&ndash;90 days), use it for ATP-CTP, indoc, or a related corporate role.",
                ],
              },
            ].map((row) => (
              <div key={row.step} className="border-l-2 border-blue-400/50 pl-4">
                <p className="text-sm font-semibold text-blue-300 mb-2"
                   dangerouslySetInnerHTML={{ __html: row.step }} />
                <ul className="space-y-1.5">
                  {row.actions.map((a) => (
                    <li key={a} className="text-sm text-slate-300 leading-relaxed flex gap-2">
                      <span className="text-slate-500 flex-shrink-0">&middot;</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* The arc */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">What the arc actually looks like</h2>
          <div className="space-y-4">
            {[
              {
                year: "Year 1",
                what: "Indoc, IOE, then onto the line as a reserve FO. You'll be on call, your schedule will be unpredictable, and your QOL will be the worst it gets — for the rest of your career. Pay is already strong by historical standards but you'll feel the schedule. Hold the line.",
              },
              {
                year: "Years 2–4",
                what: "You hold a line. You bid up. You're now flying a known schedule, watching your seniority number compound. Most pilots stop being miserable around month 14. International widebody flying becomes possible if you bid for it.",
              },
              {
                year: "Years 5–10",
                what: "Captain upgrade window depending on your airline and equipment. At the moment of upgrade, your annual comp roughly doubles. Some pilots delay upgrade to keep international FO trips. Both are legitimate.",
              },
              {
                year: "Years 10–25",
                what: "Senior captain, widebody, international. This is where the math gets serious — $400K+ annually, profit-sharing, max 401(k) match, and the schedule of your choice. Mandatory retirement is age 65 (the proposed bump to 67 didn't pass in the 2024 FAA Reauthorization).",
              },
              {
                year: "After 65",
                what: "Pension/401(k) drawdown plus a network of pilots doing post-airline second acts: corporate flying, training and check-airman roles, simulator instruction, FAA work, or pure retirement. The financial position by this point is, for most majors captains who flew the back half, genuinely wealthy.",
              },
            ].map((row) => (
              <div key={row.year} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-semibold text-slate-100 mb-1">{row.year}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{row.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The hidden taxes */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-50 mb-3">The hidden taxes nobody warns you about</h2>
          <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Commuting.</strong> If you don&rsquo;t live in
                base, you&rsquo;re jumpseating to work on your own time. Add 1&ndash;2 unpaid days
                to every trip. Many junior pilots bid the wrong base because they
                wanted to stay where they were &mdash; then commute for a decade.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Identity is still pilot.</strong> Some find
                they actually wanted distance from the cockpit identity, not
                more of it. This shows up around year 3 when the novelty fades.
                Do the identity work in Stage 01 honestly.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Lateral movement is brutal.</strong> Your seniority
                doesn&rsquo;t transfer between airlines. Switching majors after
                year 3 means starting over &mdash; which is why the first
                airline you join is, in practice, the only airline you&rsquo;ll
                join.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-300 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Furlough risk is real.</strong> The 2020 wave
                wiped out years of seniority for the most junior pilots. Hiring
                cycles are real. Don&rsquo;t plan finances assuming uninterrupted
                upgrade timelines.
              </span>
            </li>
          </ul>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "BogiDope",
                url: "https://bogidope.com/",
                what: "The most-used military-to-airline prep resource. Application services, interview prep, course content. Started by active military pilots.",
              },
              {
                name: "RTAG",
                url: "https://www.rtag.org/",
                what: "Originally rotor-focused, now broader. Free network, conferences, articles. Strong for under-credentialed transitions.",
              },
              {
                name: "Emerald Coast Interview Consulting",
                url: "https://emeraldcoastinterviewconsulting.com/",
                what: "Pilot-specific interview prep. Florida-based. Good track record at majors.",
              },
              {
                name: "AIR Inc. (Kit Darby)",
                url: "https://jet-jobs.com/",
                what: "Founded by Kit Darby, retired UAL captain and Army aviator. Career counseling, cover letters, resume review, interview prep. One of the longest-running shops in the space.",
              },
              {
                name: "Spitfire Elite",
                url: "https://spitfireelite.com/",
                what: "Application, resume, and interview prep for military-to-airline transitions. Active at OBAP and RTAG conferences.",
              },
              {
                name: "ALPA Military Pilot Outreach",
                url: "https://www.alpa.org/",
                what: "ALPA runs a transition outreach program for active-duty pilots. Free briefings, networking. If your target airline is ALPA-represented, get on their list.",
              },
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

        {/* Voices to find */}
        <section className="border border-slate-700 rounded-xl p-6 bg-slate-900/40">
          <p className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold">Voices worth finding</p>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            For real, unfiltered transition stories &mdash; not curated by
            anyone &mdash; go listen and read directly. The question
            you&rsquo;ll learn the most from isn&rsquo;t &ldquo;is the
            airline path good?&rdquo; It&rsquo;s &ldquo;what do people 4
            years in actually say about year 1?&rdquo;
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-blue-300 flex-shrink-0">&middot;</span>
              <a href="https://beyondtheuniform.org/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Beyond the Uniform</a>
              <span className="text-slate-400">&mdash; Justin Nassiri&rsquo;s podcast, 500+ interviews with vets across every path including airline transitions.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-300 flex-shrink-0">&middot;</span>
              <a href="https://www.bogidope.com/blog" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">BogiDope blog</a>
              <span className="text-slate-400">&mdash; first-person transition writeups from current and recent military-to-airline pilots.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-300 flex-shrink-0">&middot;</span>
              <a href="https://www.rtag.org/articles/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">RTAG articles</a>
              <span className="text-slate-400">&mdash; named transition stories from rotor and fixed-wing pilots, attributed by author.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-300 flex-shrink-0">&middot;</span>
              <a href="https://www.reddit.com/r/flying/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">r/flying</a>
              <span className="text-slate-400">&mdash; the unfiltered version. Search &ldquo;military transition&rdquo; for years of threads.</span>
            </li>
          </ul>
        </section>

        {/* Forward */}
        <section className="border-t border-slate-700 pt-10">
          <p className="text-sm text-slate-400 mb-6">
            If you&rsquo;re going airlines, the rest of the pipeline still
            applies &mdash; especially networking, the comp translator (so
            you understand the airline number against your military total
            comp), and interview prep. The story bank in Stage 07 works
            for airline HR interviews verbatim.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/the-map"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
              &larr; Back to The Map
            </Link>
            <Link
              href="/networking"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Stage 04: Networking &rarr;
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

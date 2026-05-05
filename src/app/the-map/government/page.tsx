import Link from "next/link";

export const metadata = {
  title: "Path: Government & Civil Service | Blue Canopy",
  description:
    "The drill-down on federal civil service, IC, and aviation regulator paths — GS scale, Direct Hire Authority, and the long arc.",
};

export default function GovernmentPath() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Path 4 of 6
          </p>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
            <a href="/" className="hover:text-slate-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/the-map" className="hover:text-slate-400 transition-colors">The Map</a>
            <span>/</span>
            <span className="text-slate-400">Government &amp; Civil Service</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
            Government &amp; Civil Service
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            The path most undersold to transitioning officers. Pay
            compression is real, the bureaucracy is real &mdash; but
            the mission alignment is real too, and the pension-on-pension
            stack at year 20 is one of the strongest financial
            structures available to any civilian.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* TL;DR */}
        <section className="border border-blue-400/30 bg-blue-950/30 rounded-xl p-5">
          <p className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold">TL;DR</p>
          <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span>Federal civil service offers stability, mission continuity, and competitive total comp with locality pay</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span>DHA and VRA let you skip the competitive hiring queue &mdash; most veterans don&rsquo;t use this</span></li>
            <li className="flex gap-2"><span className="text-blue-300 flex-shrink-0">&middot;</span><span className="text-slate-400 italic">Skim if: you&rsquo;re dead set on private sector and have no interest in continuing public service</span></li>
          </ul>
        </section>

        {/* On this page */}
        <nav className="flex flex-wrap gap-2 text-xs" aria-label="On this page">
          {[
            { label: "Overview", href: "#overview" },
            { label: "GS Pay Scale", href: "#gs-scale" },
            { label: "Direct Hire Authority", href: "#direct-hire" },
            { label: "Intelligence Community", href: "#ic-path" },
            { label: "FAA Careers", href: "#faa-path" },
            { label: "Resources", href: "#resources" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-1 rounded-full border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors">{l.label}</a>
          ))}
        </nav>

        <section id="overview">
          <h2 className="text-xl font-bold text-slate-50 mb-4">The 2026 landscape</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Federal civilian comp doesn&rsquo;t look great on paper
              next to defense industry or tech. The math changes when
              you stack it: military pension (if you&rsquo;re retiring)
              + VA disability (taxable status varies) + GS salary +
              FERS pension accrual + TSP match. For a retiring O-5
              landing as a GS-15 in DC, the all-in stack is often{" "}
              <strong className="text-slate-100">$220&ndash;260K effective</strong>,
              plus federal benefits that are genuinely excellent (FEHB,
              vesting pension, predictable schedule).
            </p>
            <p>
              Three sub-paths matter most:
              the <strong className="text-slate-100">DoD civilian / acquisition workforce</strong>,
              the <strong className="text-slate-100">intelligence community</strong>{" "}
              (CIA, DIA, NSA, NGA, NRO), and{" "}
              <strong className="text-slate-100">aviation regulator roles</strong>{" "}
              (FAA Aviation Safety Inspector, NTSB investigator, NASA
              program management). A fourth, less-traveled option is
              direct entry to State or DHS components for those with
              relevant background.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { num: "$130K+", label: "GS-13 step 1, DC locality" },
              { num: "$155K+", label: "GS-14 step 1, DC locality" },
              { num: "$183K+", label: "GS-15 step 1, DC locality" },
              { num: "$151–246K", label: "SES base range" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-lg border border-slate-700 bg-slate-900/50">
                <p className="text-lg font-bold text-slate-50">{s.num}</p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-400 leading-relaxed italic text-center">
            Source: 2026 OPM pay tables; numbers reflect
            Washington-Baltimore locality. SES is performance-based,
            no locality. Verify against{" "}
            <a href="https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">opm.gov</a>.
          </p>
        </section>

        {/* GS Pay Scale */}
        <section id="gs-scale">
          <h2 className="text-xl font-bold text-slate-50 mb-2">GS Pay Scale</h2>
          <p className="text-sm text-slate-400 mb-5">Grades most relevant to transitioning O-3/O-4 pilots. Base pay before locality adjustments.</p>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/60">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">GS Grade</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">Typical Role</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap">Step 1 Base</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap">Step 10 Base</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  { grade: "GS-12", role: "Analyst, Program Manager", step1: "$88,520", step10: "$115,079", notes: "Entry point for most O-3 equivalents" },
                  { grade: "GS-13", role: "Senior Analyst, Branch Chief", step1: "$105,289", step10: "$136,878", notes: "O-4 equivalent; supervisory roles" },
                  { grade: "GS-14", role: "Division Chief, Senior PM", step1: "$124,532", step10: "$161,900", notes: "Competitive; usually requires 2+ GS years" },
                  { grade: "GS-15", role: "Director-level, SES track", step1: "$146,411", step10: "$190,334", notes: "Top of GS; next step is SES" },
                ].map((row) => (
                  <tr key={row.grade} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-100">{row.grade}</td>
                    <td className="px-4 py-3 text-slate-300">{row.role}</td>
                    <td className="px-4 py-3 text-slate-300 font-mono whitespace-nowrap">{row.step1}</td>
                    <td className="px-4 py-3 text-slate-300 font-mono whitespace-nowrap">{row.step10}</td>
                    <td className="px-4 py-3 text-slate-400 text-xs leading-snug">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-400 leading-relaxed italic border-l-2 border-blue-400/40 pl-3">
            Locality pay adds 15&ndash;35% depending on location (DC area &asymp;30%). Pentagon area GS-13 Step 1 &asymp; $136,876 total with locality. Verify against{" "}
            <a href="https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">opm.gov pay tables</a>.
          </p>
        </section>

        {/* Direct Hire Authority */}
        <section id="direct-hire">
          <h2 className="text-xl font-bold text-slate-50 mb-4">Direct Hire Authority</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed mb-6">
            <p className="text-sm">
              Direct Hire Authority (DHA) lets agencies skip the standard competitive hiring process for roles that are hard to fill or face a critical shortage. For veterans, this is the fast lane &mdash; and most don&rsquo;t know it exists.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Who qualifies",
                body: "30% or more disabled veteran, or 3+ years of continuous active duty service. Eligible for non-competitive appointment — you go directly to the hiring manager, bypassing the cert list entirely.",
              },
              {
                title: "VRA — Veterans' Recruitment Appointment",
                body: "For veterans with less than 3 years of service. Allows appointment to positions up to GS-11 without competition. Converts to a career appointment after 2 years of satisfactory performance. Underused and underadvertised.",
              },
              {
                title: "Schedule A (disability)",
                body: "OPM's Schedule A hiring authority for persons with disabilities. If you carry a service-connected disability rating, this is a separate, parallel pathway for GS appointment that runs alongside the standard competitive process.",
              },
              {
                title: "How to actually use it",
                body: "On USAJobs, filter by hiring path and check \"Direct Hire Authority.\" Most veterans filter only by \"Veteran\" and miss DHA-specific listings entirely. Also ask directly on every informational call with a federal hiring manager — most will tell you whether the position can be filled via DHA.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-slate-700 rounded-lg p-4 bg-slate-900/40">
                <p className="font-medium text-slate-100 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Intelligence Community */}
        <section id="ic-path">
          <h2 className="text-xl font-bold text-slate-50 mb-2">Intelligence Community</h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Three realistic IC paths for USAFA pilots. Your security clearance is the entry ticket &mdash; don&rsquo;t let it expire. Interim clearances can get you started while full adjudication continues.
          </p>
          <div className="space-y-4">
            {[
              {
                org: "DIA — Defense Intelligence Agency",
                fit: "HUMINT/MASINT analyst, operational intelligence",
                detail: "The most accessible IC entry for AF intel-adjacent backgrounds. DIA hires across GS-12/13 analyst roles with strong operational intelligence demand. Your clearance is the fast lane — don't let it lapse before you apply.",
                comp: "$95–130K base (GS-12/13)",
              },
              {
                org: "NGA — National Geospatial-Intelligence Agency",
                fit: "Imagery analyst, geospatial intelligence",
                detail: "Heavy STEM demand and a strong culture fit for pilots with ISR backgrounds. NGA has specific aviation and RPA pipelines. Geospatial literacy built during operational flying translates directly and is genuinely valued.",
                comp: "$90–130K base (GS-12/13)",
              },
              {
                org: "NRO — National Reconnaissance Office",
                fit: "Acquisition and program management of satellite systems",
                detail: "Heavily mission-focused, strong for those who want to stay in the national security world and lean toward systems and acquisition management. Great for pilots transitioning into PM roles. The NRO's culture rewards technical depth and long-term mission commitment.",
                comp: "$100–145K base (GS-13/14)",
              },
            ].map((ic) => (
              <div key={ic.org} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-medium text-slate-100">{ic.org}</p>
                  <span className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded whitespace-nowrap">{ic.comp}</span>
                </div>
                <p className="text-xs text-blue-300 mb-2">{ic.fit}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{ic.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-2 border-blue-400/40 pl-4 text-sm text-slate-400 leading-relaxed">
            Apply through agency direct pages:{" "}
            <a href="https://www.intelligencecareers.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">intelligencecareers.gov</a>{" "}
            for multi-agency listings. IC hires laterally and through fellowships &mdash; get on those lists 12+ months out.
          </div>
        </section>

        {/* FAA Career Path */}
        <section id="faa-path">
          <h2 className="text-xl font-bold text-slate-50 mb-2">FAA Career Path</h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            The FAA has the cleanest direct translation from military aviation experience of any federal agency. Realistic timeline: 6&ndash;18 month hiring process; background check + drug test required.
          </p>
          <div className="space-y-4">
            {[
              {
                role: "Aviation Safety Inspector (ASI)",
                grade: "GS-13/14 · $105–162K",
                detail: "Requires ATP or equivalent military flight experience. Best fit for pilots with 1,500+ hours. The 1825-series is the job classification on USAJobs. The cleanest direct translation from rated officer to federal aviation regulator.",
                tag: "Best fit for most transitioning pilots",
              },
              {
                role: "Air Traffic Control (ATC) Specialist",
                grade: "GS-7 to GS-12 progression",
                detail: "FAA requires applicants to be under 31 years old at application — military ATC veterans are exempt from this age limit. Military ATC background is a direct path and bypasses much of the initial training pipeline.",
                tag: "Military ATC background = direct path",
              },
              {
                role: "Flight Standards District Office (FSDO) Inspector",
                grade: "GS-13/14",
                detail: "Regional role based at one of 80+ FSDOs across the country. Strong work-life balance relative to airline or DoD careers. Less glamorous than a D.C. headquarters role, but steady, place-based, and genuinely mission-aligned for those who care about aviation safety culture.",
                tag: "Strong work-life balance; regional placement",
              },
            ].map((r) => (
              <div key={r.role} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <p className="font-medium text-slate-100">{r.role}</p>
                  <span className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded whitespace-nowrap">{r.grade}</span>
                </div>
                <p className="text-xs text-amber-300 mb-2">{r.tag}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-2 border-blue-400/40 pl-4 text-sm text-slate-400 leading-relaxed">
            ASI hiring runs through USAJobs (search 1825-series). The Office of Aviation Safety does targeted outreach at AOPA and ALPA events. Check{" "}
            <a href="https://www.faa.gov/jobs" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">faa.gov/jobs</a>{" "}
            and network with current ASIs.
          </div>
        </section>

        {/* Sub-paths */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The four sub-paths in detail</h2>
          <div className="space-y-5">
            {[
              {
                path: "DoD Civilian / Acquisition Workforce",
                detail:
                  "GS-13/14/15 program managers, contracting officers, systems engineers across Air Force PEOs, AFRL, AFLCMC, Space Force PEOs. The cleanest translation from rated officer experience — you've been the customer, now you sit on the buyer side. AFLCMC at Wright-Patt, SMC/SSC at LA AFB / Peterson, AFRL across multiple sites are the high-volume entry points.",
                tactics: "Use Direct Hire Authority where available — it skips the standard cert process. Many DoD civilian jobs use DHA explicitly for veterans. Ask hiring managers directly.",
              },
              {
                path: "Intelligence Community",
                detail:
                  "CIA, DIA, NSA, NGA, NRO. DIA is most accessible for AF intel-adjacent backgrounds. CIA's Directorate of Operations is competitive but vet-heavy. NGA and NRO have specific aviation/space pipelines. All four maintain mil-to-civ programs and protect clearance continuity better than most other paths.",
                tactics: "Apply through agency direct pages (cia.gov/careers, intelligencecareers.gov). Veterans' preference applies but matters less here than network. The IC hires through fellowships, summer programs, and direct sourcing — get on those lists 12+ months out.",
              },
              {
                path: "FAA / NTSB / Aviation Regulator",
                detail:
                  "Aviation Safety Inspector (ASI) at the FAA is a GS-13/14 role, often the cleanest direct fit for a transitioning rated officer with ATP. NTSB investigators are GS-13/14 with similar requirements. NASA aerospace engineers and program managers (KSC, JSC, AFRC) are technical roles for those with engineering depth.",
                tactics: "ASI hiring goes through USAJobs but the Office of Aviation Safety preferentially recruits through targeted job announcements. Check usajobs.gov weekly with saved searches for 1825-series jobs. Network with current ASIs at AOPA / ALPA events.",
              },
              {
                path: "Civilian Faculty at USAFA / Service Academies",
                detail:
                  "Often overlooked. PhDs aren't always required for permanent military faculty conversion or for prep school instructional roles. Compensation lower than industry, but lifestyle, location, and mission alignment are unmatched for some.",
                tactics: "Reach out to department heads at USAFA directly. AOG class network surfaces openings 12+ months before they hit USAJobs.",
              },
            ].map((p) => (
              <div key={p.path} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-medium text-slate-100 mb-2">{p.path}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">{p.detail}</p>
                <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-blue-400/50 pl-3">
                  <strong className="text-slate-200">How to actually get in:</strong> {p.tactics}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The bridge */}
        <section>
          <h2 className="text-xl font-bold text-slate-50 mb-4">The bridge: USAJobs is the final filter, not the first</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Federal hiring runs on three parallel tracks:{" "}
              <strong className="text-slate-100">competitive service</strong>{" "}
              (USAJobs cert process &mdash; slow, opaque),{" "}
              <strong className="text-slate-100">excepted service</strong>{" "}
              (Title 5 carve-outs at IC and DoD &mdash; faster, more
              relationship-based), and{" "}
              <strong className="text-slate-100">Direct Hire Authority</strong>{" "}
              (cheat code &mdash; skips most cert process for
              hard-to-fill roles).
            </p>
            <p>
              Veterans&rsquo; preference is real but it doesn&rsquo;t
              get you hired. It helps you survive the resume screen.
              The hiring manager knows who they want. Your job is to be
              that person via network and fit before the announcement
              closes.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              "Save searches on USAJobs by series (1825 ASI, 0301 Misc Admin, 0340 Program Mgr, 0801 Engineer)",
              "Network with current civilians inside target organizations 6+ months before applying",
              "Translate your military narrative into the verbose USAJobs resume format — 5+ pages is normal here",
              "Ask about Direct Hire Authority on every informational call",
              "PMF (Presidential Management Fellows) is for grad-degree holders with 2-year fellowship, GS-9/11 entry — competitive but a fast accelerator",
              "SES Candidate Development Program (CDP) is the structured path to senior executive — apply once you have 7+ years of post-mil federal experience",
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
              { year: "Year 1", what: "Onboarding into a GS-13/14 role at a DoD or IC component. The pace is slower than the squadron. Expect to spend 90 days learning who actually makes decisions vs. who's on the org chart." },
              { year: "Years 2–4", what: "Promotion to GS-14 or step increases. You now know the system and start making real impact on programs. This is where most decide to stay (mission still pulls) or pivot to industry (pace frustrates)." },
              { year: "Years 5–8", what: "GS-15 is realistic by year 5–8 with the right roles and locality moves. Pay caps in around $185–195K with locality. Some pivot to defense industry at this point and double their comp." },
              { year: "Years 8–15", what: "SES is the next rung — typically requires the SES Candidate Development Program or direct executive hire from a senior position. Real career capstone for officers who want to keep serving without the uniform." },
              { year: "Year 20+", what: "FERS pension vests at 1% per year of service, payable from your minimum retirement age (57 for most). Stacked with military retirement and TSP, this is one of the most financially secure retirements available — quietly, without anyone telling you about it during separation." },
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
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Pace and bureaucracy.</strong> If the cockpit&rsquo;s feedback loop was 90 minutes, federal civil service is closer to 9 months. Learn to think in fiscal years.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Political cycles.</strong> Administration changes can fundamentally shift your work, your organization, and sometimes your job. Plan for it.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Ceiling.</strong> SES and SES-equivalent are the cap. Industry pays 2&ndash;3x at the equivalent level. If you&rsquo;re in this for compensation maximization, this is the wrong path.</span></li>
            <li className="flex gap-2"><span className="text-amber-300 flex-shrink-0">&middot;</span><span><strong className="text-slate-100">Golden handcuffs.</strong> The pension vesting timeline + FEHB make leaving expensive after year 8&ndash;10. Some find that liberating; some find it confining. Decide early.</span></li>
          </ul>
        </section>

        {/* Resources */}
        <section id="resources">
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "USAJobs", url: "https://www.usajobs.gov/", what: "The federal hiring portal. Saved searches and email alerts are essential. Resume builder is the only format federal HR will read." },
              { name: "Intelligence Careers", url: "https://www.intelligencecareers.gov/", what: "Joint portal for the IC. Apply through agency direct pages too — IC hires laterally and through specific fellowships." },
              { name: "OPM Pay Tables", url: "https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/", what: "Authoritative source for GS, SES, locality, and special-rate tables. Update annually." },
              { name: "FedsHireVets", url: "https://www.fedshirevets.gov/", what: "Federal hiring rules for veterans, including preference, VRA, and Schedule A. Read the rules; don&rsquo;t guess." },
              { name: "Presidential Management Fellows", url: "https://www.pmf.gov/", what: "Two-year fellowship for grad degree holders. Competitive, fast accelerator." },
              { name: "FAA Career Site", url: "https://www.faa.gov/jobs", what: "Aviation Safety Inspector, ATC, and engineering roles. ASI listings are 1825-series on USAJobs." },
            ].map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-slate-700 bg-slate-900/40 hover:border-blue-400/50 hover:bg-slate-800/50 transition">
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
            Federal civil service is the path with the least public
            content &mdash; most who land here aren&rsquo;t loud about
            it. Go to the people who are:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://podcasts.apple.com/us/podcast/beyond-the-uniform/id1148739411" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Beyond the Uniform podcast</a><span className="text-slate-400">Search the archive for federal civilian and IC interviews.</span></li>
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://federalnewsnetwork.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Federal News Network</a><span className="text-slate-400">Daily reporting on federal civilian workforce, hiring authorities, and policy shifts.</span></li>
            <li className="flex gap-2 flex-wrap"><span className="text-blue-300 flex-shrink-0">&middot;</span><a href="https://www.reddit.com/r/fednews/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">r/fednews</a><span className="text-slate-400">Unfiltered current-fed perspectives. Search &ldquo;veteran transition&rdquo; for years of threads.</span></li>
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

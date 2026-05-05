import Link from "next/link";

export const metadata = {
  title: "Aviation Paths | Blue Canopy",
  description:
    "All four aviation paths explained honestly: commercial airlines (regionals/majors/LCC), cargo (FedEx/UPS/Amazon Air), fractional/charter (NetJets/Flexjet), and corporate flight departments. Real comp data, sub-decisions, and what pilots consistently don't know.",
};

export default function AviationPaths() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-10 relative">
          <p className="text-green-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Stage 03 &mdash; The Map &mdash; Aviation Paths
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight">
            Aviation Paths
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            You want to keep flying. That&rsquo;s not one decision &mdash; it&rsquo;s four. Commercial airlines
            is the most talked-about. Cargo, fractional, and corporate are equally legitimate paths with
            different trade-offs that most pilots never seriously examine.
          </p>
        </div>

        {/* Jump links */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-600 font-medium">On this page:</span>
            {[
              { id: "aviation-fork", label: "Aviation fork" },
              { id: "commercial", label: "Commercial airlines" },
              { id: "cargo", label: "Cargo" },
              { id: "fractional", label: "Fractional & Charter" },
              { id: "corporate", label: "Corporate flight dept" },
              { id: "guard-reserve", label: "Guard / Reserve overlay" },
              { id: "timeline", label: "Timeline" },
              { id: "resources", label: "Resources" },
            ].map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-xs text-slate-500 hover:text-green-400 transition-colors px-2 py-0.5 rounded bg-slate-900/60 border border-slate-800 hover:border-green-800"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* AVIATION FORK DIAGRAM */}
        <section id="aviation-fork">
          <h2 className="text-xl font-bold text-slate-50 mb-4">The aviation fork</h2>
          <div className="border border-slate-800 rounded-xl bg-slate-900/30 p-6">

            {/* Root */}
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1.5 rounded-md border border-green-800/50 bg-green-950/20 text-xs font-mono text-green-300 tracking-widest uppercase">
                I want to stay in aviation
              </span>
            </div>
            <div className="flex justify-center mb-3">
              <div className="w-px h-5 bg-slate-700" />
            </div>
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1.5 rounded-md border border-amber-800/40 bg-amber-950/20 text-xs text-amber-400 text-center">
                What kind of flying life do you want?
              </span>
            </div>

            {/* H-bar to 4 branches */}
            <div className="flex justify-center mb-0">
              <div className="relative w-full max-w-xl h-5">
                <div className="absolute left-[12.5%] right-[12.5%] top-0 border-t border-slate-700" />
                {[12.5, 37.5, 62.5, 87.5].map((pct) => (
                  <div
                    key={pct}
                    className="absolute top-0 w-px h-5 bg-slate-700"
                    style={{ left: `${pct}%` }}
                  />
                ))}
              </div>
            </div>

            {/* 4 path columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-0">
              {[
                {
                  label: "Commercial Airlines",
                  sub: "Regionals → Majors · LCC",
                  comp: "$80K → $450K+",
                  note: "Transparent seniority. Long game. Known quantity.",
                  border: "border-green-800/50",
                  bg: "bg-green-950/20",
                  text: "text-green-400",
                  href: "#commercial",
                },
                {
                  label: "Cargo",
                  sub: "FedEx · UPS · Amazon Air",
                  comp: "≈Major pay",
                  note: "No pax. Better WLB. Retire well. Underrated.",
                  border: "border-yellow-800/40",
                  bg: "bg-yellow-950/10",
                  text: "text-yellow-400",
                  href: "#cargo",
                },
                {
                  label: "Fractional / Charter",
                  sub: "NetJets · Flexjet · Wheels Up",
                  comp: "$120K–$350K+",
                  note: "No seniority system. Relationship hiring. Strong pay.",
                  border: "border-sky-800/40",
                  bg: "bg-sky-950/10",
                  text: "text-sky-400",
                  href: "#fractional",
                },
                {
                  label: "Corporate Flight Dept",
                  sub: "Company jet · Fortune 500s",
                  comp: "$100K–$300K",
                  note: "9-to-5ish. Max stability. Hardest to access.",
                  border: "border-emerald-800/40",
                  bg: "bg-emerald-950/10",
                  text: "text-emerald-400",
                  href: "#corporate",
                },
              ].map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  className={`flex flex-col gap-1 p-3 rounded-lg border ${p.border} ${p.bg} hover:opacity-80 transition-opacity`}
                >
                  <p className={`text-xs font-semibold ${p.text}`}>{p.label}</p>
                  <p className="text-slate-600 text-xs leading-snug">{p.sub}</p>
                  <p className={`text-xs font-mono ${p.text} opacity-80 mt-1`}>{p.comp}</p>
                  <p className="text-slate-500 text-xs leading-snug mt-1">{p.note}</p>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-center">
              <Link href="/comp" className="text-xs text-slate-500 hover:text-green-400 transition-colors">
                Compare all aviation paths + civilian paths by comp →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* COMMERCIAL AIRLINES */}
        {/* ═══════════════════════════════════════ */}
        <section id="commercial">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded bg-green-500/50" />
            <div>
              <p className="text-xs uppercase tracking-widest text-green-400 font-semibold">Path 1 of 4</p>
              <h2 className="text-2xl font-bold text-slate-50">Commercial Airlines</h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The most well-trodden path for rated transitioners. Transparent seniority economics, a real
              community, and pay that crossed into genuine wealth-building territory after the 2022&ndash;2023
              contract round. The trap isn&rsquo;t going &mdash; it&rsquo;s going by default.
            </p>
            <p>
              At a major (Delta, United, American), a Year 1 narrowbody first officer earns roughly{" "}
              <strong className="text-slate-100">$100&ndash;115/hr</strong> &mdash; about $95K to $115K
              against a typical 75&ndash;80 monthly hour line, plus per-diem and 401(k) matching that
              pushes total comp closer to $130K. A 12-year widebody captain is at{" "}
              <strong className="text-slate-100">$465/hour</strong> &mdash; roughly $440K&ndash;$500K
              annually. These are the highest commercial pilot wages in modern airline history.
            </p>
          </div>

          {/* Comp stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
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

          {/* Sub-decisions */}
          <div className="mt-8 space-y-4">
            <h3 className="font-semibold text-slate-100">The sub-decisions inside commercial airlines</h3>
            {[
              {
                fork: "Direct-to-major vs. regional first",
                detail: "If you have your hours and competitive military experience, apply direct to majors. Most rated transitioners hit the hour mins. Going regional 'to be safe' is the most expensive cautious decision in this industry — you give up the seniority date that compounds. One month of seniority is worth tens of thousands over a career.",
              },
              {
                fork: "Legacy (Delta/United/American) vs. low-cost (Southwest, JetBlue) vs. ultra-low-cost (Spirit, Frontier)",
                detail: "Culture, schedule, and pay curves differ significantly. Southwest is top of the LCC pack on pay. Ultra-low-cost carriers are a different world — extremely high utilization, different culture. Talk to people 5+ years in at each before you decide.",
              },
              {
                fork: "Guard / Reserve while flying for the airline",
                detail: "Many leave active duty, drop into a Guard or Reserve unit, and start their airline seniority simultaneously. You keep flying military, retain the community, and accrue toward a Reserve retirement at 60. USERRA leave laws work — but it's friction. A Guard/Reserve slot must be secured separately, and they're competitive.",
              },
              {
                fork: "Base and equipment first assignment",
                detail: "Bid based on where you'll commute from for 5+ years, not where you want to live right now. Bidding to a junior base gets you off reserve faster. Most new hires under-weigh this — the QOL delta between line and reserve is enormous.",
              },
            ].map((item) => (
              <div key={item.fork} className="border border-slate-700 rounded-lg p-5 bg-slate-900/40">
                <p className="font-medium text-slate-100 mb-2">{item.fork}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* CARGO */}
        {/* ═══════════════════════════════════════ */}
        <section id="cargo">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded bg-yellow-500/50" />
            <div>
              <p className="text-xs uppercase tracking-widest text-yellow-400 font-semibold">Path 2 of 4</p>
              <h2 className="text-2xl font-bold text-slate-50">Cargo Flying</h2>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-yellow-800/30 bg-yellow-950/10 mb-6">
            <p className="text-sm text-yellow-300 font-medium mb-1">What most pilots don&rsquo;t know</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              FedEx and UPS pilots have historically been the highest-paid pilots in the world — not
              second to the majors, often better. No passengers, night-oriented operations, and a union
              culture focused on schedule quality and retirement security. This is a competing path, not
              a consolation prize.
            </p>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              FedEx and UPS are the two major players. Amazon Air has grown rapidly and represents a
              newer pathway (via Atlas Air and other wet-lease operators). Other major cargo carriers:
              Kalitta Air, ABX Air, Southern Air.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-center">
            {[
              { num: "≈Majors", label: "FedEx/UPS pay comparable to legacy majors" },
              { num: "Night ops", label: "All-night schedule is the core trade-off" },
              { num: "Pension", label: "UPS has a defined-benefit pension — rare in aviation" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-lg border border-yellow-900/40 bg-yellow-950/10">
                <p className="text-base font-bold text-yellow-300">{s.num}</p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="font-semibold text-slate-100">What it actually looks like</h3>
            {[
              {
                label: "The work",
                detail: "All-night operations. You sleep during the day. The community is tight, somewhat different culture from pax carriers — less brand-focused, more ops-focused. If you genuinely prefer night ops or are indifferent to it, the lifestyle trade is often favorable.",
              },
              {
                label: "The access problem",
                detail: "FedEx and UPS are hard to get into — both have historically hired from regional feeders (like Ameriflight or Mountain Air Cargo) or from military direct. The application volume is lower than at legacy majors, but the list moves slowly. Strong mil background and a quality logbook are the entry requirements.",
              },
              {
                label: "Amazon Air",
                detail: "Amazon Air operates through Atlas Air, Air Transport International, and others. Less prestigious but a real pathway in, and Amazon has been aggressive about pilot hiring as the network grows. Pay is lower than FedEx/UPS but comparable to midtier pax carriers.",
              },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-yellow-400/40 pl-4">
                <p className="font-medium text-slate-100 text-sm mb-1">{item.label}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* FRACTIONAL / CHARTER */}
        {/* ═══════════════════════════════════════ */}
        <section id="fractional">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded bg-sky-500/50" />
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Path 3 of 4</p>
              <h2 className="text-2xl font-bold text-slate-50">Fractional &amp; Charter</h2>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-sky-800/30 bg-sky-950/10 mb-6">
            <p className="text-sm text-sky-300 font-medium mb-1">What most pilots don&rsquo;t know</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              You can match or beat major airline pay without spending a decade waiting to hold a line.
              There is no seniority system in fractional &mdash; you don&rsquo;t start over at the
              bottom. Access is relationship-based, not class-date-based, which means your network
              determines your timeline.
            </p>
          </div>

          {/* Comp comparison */}
          <div className="mt-4 grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { company: "NetJets", pay: "~$120–250K (FO to Capt)", note: "World's largest fractional. Berkshire Hathaway-owned. Strong union (NJASAP)." },
              { company: "Flexjet", pay: "~$130–300K (Capt)", note: "Premium brand. Bombardier and Embraer heavy. Strong compensation." },
              { company: "Wheels Up / Charter ops", pay: "Variable, $80K–$180K", note: "More variable — many operators. Quality of company matters enormously." },
            ].map((c) => (
              <div key={c.company} className="p-3 rounded-lg border border-sky-900/40 bg-sky-950/10">
                <p className="text-sm font-bold text-slate-100">{c.company}</p>
                <p className="text-xs font-mono text-sky-300 mt-0.5">{c.pay}</p>
                <p className="text-xs text-slate-400 mt-2 leading-snug">{c.note}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {[
              {
                label: "How the schedule works",
                detail: "Fractional operates on a rotating duty schedule — typically 7 days on / 7 days off (or 8/7 or 14/14 depending on contract). When you're on, you're fully available. When you're off, you're genuinely off. For people with families or who want hard on/off structure, this is often better than airline reserve in the junior years.",
              },
              {
                label: "How hiring works",
                detail: "No class dates. No application portal lottery. Fractional hiring is almost entirely relationship-driven. Someone has to know you, vouch for you, or refer you. If you don't have a direct contact at NetJets or Flexjet, your path in is through someone who does — which means building that relationship intentionally, not sending a cold application.",
              },
              {
                label: "The trade-offs vs. majors",
                detail: "No defined-benefit pension. No seniority system (good and bad — better early, less certain later). High asset exposure to the private wealth market — when the economy contracts, fractional flying contracts too. No ALPA protection in most cases. These are real trade-offs to model.",
              },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-sky-400/40 pl-4">
                <p className="font-medium text-slate-100 text-sm mb-1">{item.label}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* CORPORATE FLIGHT DEPT */}
        {/* ═══════════════════════════════════════ */}
        <section id="corporate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded bg-emerald-500/50" />
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Path 4 of 4</p>
              <h2 className="text-2xl font-bold text-slate-50">Corporate Flight Department</h2>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-emerald-800/30 bg-emerald-950/10 mb-6">
            <p className="text-sm text-emerald-300 font-medium mb-1">What most pilots don&rsquo;t know</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              The most stable flying job in existence &mdash; if you find the right company. A corporate
              flight department job is not a job you apply for online. It&rsquo;s a relationship you
              cultivate. The pilots who end up here almost always got in through a connection. Once
              in, it&rsquo;s often a career.
            </p>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed mb-6">
            <p>
              Corporate flight departments exist at Fortune 500s, PE-backed companies, major sports
              teams, real estate firms, and wealthy family offices. Pay varies enormously by company
              and location &mdash; a flight department at a Texas energy company pays very differently
              than one at a Midwest manufacturer.
            </p>
          </div>

          <div className="mt-4 grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { num: "$100–300K", label: "Comp range (Captain, varies heavily)" },
              { num: "Near 9–5", label: "Schedule structure — fly when the executives fly" },
              { num: "Relationship", label: "Hiring is 100% network-dependent" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-lg border border-emerald-900/40 bg-emerald-950/10 text-center">
                <p className="text-base font-bold text-emerald-300">{s.num}</p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {[
              {
                label: "How the schedule works",
                detail: "You fly when the company needs the aircraft. That's often business-hour heavy — Mon–Fri, domestic, hub-to-hub. Some companies have heavy international; others barely travel. The schedule quality is entirely dependent on the company culture and leadership's travel habits.",
              },
              {
                label: "How to access it",
                detail: "National Business Aviation Association (NBAA) is the industry org. The NBAA career portal (aviationpros.com partnership) has jobs, but the real access is through the NBAA Business Aviation Convention (NBAA-BACE) in October each year — the single largest gathering of corporate aviation. Show up in person. Talk to pilots. Have your hours and type ratings current.",
              },
              {
                label: "What they're hiring for",
                detail: "Beyond hours and currency, corporate flight dept chiefs are hiring for someone they can trust to represent the company in front of C-suite executives. Professionalism, judgment, and discretion matter as much as stick-and-rudder. USAFA grads who can hold their own in a boardroom conversation while also flying the G650 are genuinely sought after.",
              },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-emerald-400/40 pl-4">
                <p className="font-medium text-slate-100 text-sm mb-1">{item.label}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4">
            <a
              href="https://www.nbaa.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              NBAA — National Business Aviation Association →
            </a>
          </div>
        </section>

        {/* Guard / Reserve overlay */}
        <section id="guard-reserve" className="border border-slate-700 rounded-xl p-6 bg-slate-900/30">
          <h2 className="text-lg font-bold text-slate-100 mb-3">The Guard / Reserve overlay</h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            This applies to all four aviation paths: many pilots pursue Guard or Reserve flying
            simultaneously with their civilian career. The major benefits:
          </p>
          <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <li className="flex gap-2">
              <span className="text-blue-400 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Reserve retirement at 60</strong> — accrue points,
                vest at 20 qualifying years, draw pension at 60. Real money on top of whatever your
                civilian career generates.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Continued military flying</strong> — if the jets
                still call you and you're not flying them in your civilian role, the Guard is how you
                keep doing it.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">USERRA protections</strong> — your civilian
                employer must reinstate you after military leave. It works, but it's friction.
                Know the rules before you negotiate your offer.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 flex-shrink-0">&middot;</span>
              <span>
                <strong className="text-slate-100">Guard / Reserve slots are competitive</strong> —
                you don't just join. You apply for a specific unit and MDS. The process takes months.
                Start it before you separate if this is the direction.
              </span>
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section id="timeline">
          <h2 className="text-xl font-bold text-slate-50 mb-4">Timeline: from squadron to right seat</h2>
          <div className="space-y-4">
            {[
              {
                step: "12–18 months out",
                actions: [
                  "Get your logbook in civilian format. Convert mil time line by line — don't leave this for the last month.",
                  "Take the ATP-CTP course (~$5K, often paid for by the airline as a contingent hire, or run via SkillBridge).",
                  "Pass the ATP written.",
                  "First-class medical, current. Address any flags before you apply.",
                  "If Guard/Reserve: start that application now — it can take a year.",
                ],
              },
              {
                step: "9–12 months out",
                actions: [
                  "Open RTAG, BogiDope, and your target airline/fractional forums. Read the threads. Understand the calendar.",
                  "Begin building references inside each target operator. Two captains who'll write for you is the minimum.",
                  "For cargo or fractional: start relationship-building with pilots currently flying there.",
                  "NBAA if targeting corporate: register for BACE in October.",
                ],
              },
              {
                step: "3–9 months out",
                actions: [
                  "Apply to 3–5 carriers, not one. Don't romance a single company.",
                  "Interview prep — the major airline format is well-documented. Cargo and fractional interviews are different; ask someone who's done them recently.",
                  "For corporate flight dept: you likely already have the contact or you don't. If you don't, start now.",
                ],
              },
            ].map((row) => (
              <div key={row.step} className="border-l-2 border-green-400/50 pl-4">
                <p className="text-sm font-semibold text-green-300 mb-2">{row.step}</p>
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

        {/* Hidden taxes */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-50 mb-3">The hidden taxes (all aviation paths)</h2>
          <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
            {[
              { tax: "Commuting at majors.", detail: "If you don't live in base, add 1–2 unpaid days to every trip. Many junior pilots bid the wrong base because they wanted to stay where they were — then commute for a decade." },
              { tax: "Identity is still pilot.", detail: "Some find they actually wanted distance from the cockpit identity, not more of it. This shows up around year 3 when the novelty fades. Do the identity work in Stage 01 honestly." },
              { tax: "Lateral movement is brutal at majors.", detail: "Your seniority doesn't transfer between airlines. Switching after year 3 means starting over — which is why the first major you join is, in practice, the only major." },
              { tax: "Furlough risk is real.", detail: "The 2020 wave wiped out years of seniority for the most junior pilots. Don't plan finances assuming uninterrupted upgrade timelines." },
              { tax: "Fractional/corporate access requires being known.", detail: "Cold applications to NetJets or a corporate flight dept almost never work. The network is the strategy. Start building it now." },
            ].map((t) => (
              <li key={t.tax} className="flex gap-2">
                <span className="text-amber-300 flex-shrink-0">&middot;</span>
                <span>
                  <strong className="text-slate-100">{t.tax}</strong> {t.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Resources */}
        <section id="resources">
          <h2 className="text-xl font-bold text-slate-50 mb-4">Resources worth your time</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "BogiDope", url: "https://bogidope.com/", what: "Military-to-airline prep resource. Application services, interview prep. Started by active military pilots." },
              { name: "RTAG", url: "https://www.rtag.org/", what: "Free network, conferences. Strong for under-credentialed or rotary-wing transitions." },
              { name: "Emerald Coast Interview Consulting", url: "https://emeraldcoastinterviewconsulting.com/", what: "Pilot-specific interview prep. Good track record at majors." },
              { name: "AIR Inc. (Kit Darby)", url: "https://jet-jobs.com/", what: "Career counseling, cover letters, resume review, interview prep. Founded by UAL captain / Army aviator." },
              { name: "NBAA Career Portal", url: "https://www.nbaa.org/", what: "Corporate and business aviation jobs. NBAA-BACE in October is the must-attend event for corporate flight dept access." },
              { name: "ALPA Military Pilot Outreach", url: "https://www.alpa.org/", what: "Free briefings, networking for active-duty pilots. If your target airline is ALPA-represented, get on their list." },
              { name: "Airline Pilot Central", url: "https://www.airlinepilotcentral.com/", what: "Per-airline pay tables, domicile info, and interview guides. Current and updated." },
              { name: "Airline Pilot Forums", url: "https://www.airlinepilotforums.com/", what: "Per-airline threads with current pilots talking pay, schedule, base, and upgrade. Unfiltered." },
            ].map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-900/40 hover:border-green-400/50 hover:bg-slate-800/50 transition"
              >
                <p className="font-medium text-slate-100 text-sm">{r.name} &rarr;</p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{r.what}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Forward nav */}
        <section className="border-t border-slate-700 pt-10">
          <div className="flex flex-wrap gap-3">
            <Link href="/the-map" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors">
              &larr; Back to The Map
            </Link>
            <Link href="/networking" className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors">
              Stage 04: Networking &rarr;
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

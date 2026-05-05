import Link from "next/link";
import PathTabs from "@/components/PathTabs";

export const metadata = {
  title: "Stage 03: The Map | Blue Canopy",
  description:
    "The civilian career ecosystem mapped honestly. Seven paths, real comp ranges, the aviation fork, and how hiring actually works.",
};

const paths = [
  {
    id: "airlines",
    label: "Aviation Paths",
    tag: "Multiple flavors",
    tagColor: "text-green-400",
    shape: "Commercial airlines, cargo, fractional/charter, and corporate flight depts. If you want to keep flying in some form — know all four options before you commit to one.",
    comp: "$80K–$130K (regional/cargo entry) → $200K–$500K+ (major captain / senior NetJets)",
    pros: [
      "Transparent seniority at majors — you know exactly where you stand",
      "Cargo (FedEx/UPS) pays comparably to majors with better schedule",
      "Fractional (NetJets/Flexjet) can match major pay without a seniority system",
      "Corporate flight depts offer near 9-to-5 schedules and real stability",
      "The community is familiar — culture, language, and mission overlap",
    ],
    cons: [
      "Major airline seniority is non-transferable — the first airline is the only airline",
      "First 2–5 years at regionals are financially tough — plan for it",
      "Identity still wrapped around the jet — useful to examine before you commit",
      "Fractional and corporate roles are relationship-hiring — harder to access",
      "Furlough risk at majors is real (see 2020) — don't assume uninterrupted timelines",
    ],
    honest:
      "If you want to keep flying, the decision is which flavor — not just airlines vs. everything else. Cargo and fractional are legitimate competing paths that most pilots never seriously consider.",
  },
  {
    id: "defense",
    label: "Defense & Aerospace",
    tag: "Easiest translation",
    tagColor: "text-blue-400",
    shape: "A life adjacent to the mission you came from, with credentials that translate immediately and a culture that doesn't require translation.",
    comp: "$90K–$130K (entry/mid) → $150K–$250K+ (program director, senior exec)",
    pros: [
      "Your clearance is immediately valuable — many companies will pay a premium for it",
      "The vocabulary overlaps — you'll understand the customer because you were the customer",
      "Culture is familiar enough to not be disorienting",
      "BD/capture, program management, and ops roles map directly to what you did",
      "Strong company-to-company mobility once you have the industry credential",
    ],
    cons: [
      "Risk of getting siloed — you become 'the military guy' forever",
      "Culture is slower and more political than the cockpit — frustrating at first",
      "Some defense contractors are excellent employers; some are giant resume black holes",
      "The clearance premium erodes if you stay in roles where it's your only differentiator",
      "The DoD acquisition machine is grinding and bureaucratic — know what you're signing up for",
    ],
    honest:
      "This is the natural first move for a lot of vets, and for good reason — the translation is real. The risk is staying here longer than serves you because it's comfortable. Defense is a great foundation, not necessarily a ceiling.",
  },
  {
    id: "tech-ops",
    label: "Tech & Ops",
    tag: "Highest comp ceiling",
    tagColor: "text-purple-400",
    shape: "PM, BizOps, corporate strategy, operations at tech companies. High translation cost upfront, broadest range of outcomes.",
    comp: "$100K–$160K (entry PM/ops) → $250K–$350K+ (senior leadership) → $500K+ (VP + equity)",
    pros: [
      "Compensation ceiling is the highest of any path",
      "Equity events can compress decades if you land in the right place",
      "Problems are complex and intellectually engaging in different ways",
      "Your leadership background is genuinely rare and valued in good orgs",
      "Geography increasingly flexible — remote-first at many tech companies",
    ],
    cons: [
      "Translation burden is highest — nobody knows what your job title means",
      "Credentialing matters: PMP, AWS, Salesforce, or domain expertise helps",
      "Imposter syndrome is real and predictable — show up anyway",
      "Culture shock: move fast, fail fast, flat hierarchy, no formality",
      "Layoffs in tech can be sudden and deep; no stability equivalent",
    ],
    honest:
      "The path where networking and credentialing pays off most. Your path to tech is through people, not portals. Cold applications at tech companies are a last resort.",
  },
  {
    id: "finance-consulting",
    label: "Finance & Consulting",
    tag: "Credential-heavy, strong ceiling",
    tagColor: "text-indigo-400",
    shape: "MBB consulting, IB-adjacent, PE, and corporate finance. The MBA is often the bridge — and for USAFA grads it's frequently free.",
    comp: "$130–180K (Big 4/boutique direct) → $220–250K (post-MBA MBB Year 1) → $400K+ (Year 7)",
    pros: [
      "Military leadership story translates extremely well to MBB if positioned correctly",
      "GI Bill + Yellow Ribbon at top MBA programs often covers tuition entirely",
      "Post-MBA MBB exit options are broad: industry, PE, corp dev, principal",
      "SkillBridge at McKinsey/BCG/Bain is a direct shot without an MBA",
      "Structured thinking and comfort with ambiguity are the core consulting skills",
    ],
    cons: [
      "Consulting MBA recruiting starts Week 1 of orientation — prep starts months before",
      "PE at megafunds is mostly closed without pre-MBA banking — know the difference",
      "The credential cycle is long: MBA applications are 12–18 months of work",
      "Work-life intensity at MBB is real — 60-hour weeks are not unusual",
      "IB is a different door — know if that's actually what you want before targeting it",
    ],
    honest:
      "The MBA is one of the highest-ROI moves available for USAFA grads targeting consulting or finance. The clock on that decision starts now — applications take longer than anyone expects.",
  },
  {
    id: "government",
    label: "Government & Civil Service",
    tag: "Stability, slower comp",
    tagColor: "text-slate-400",
    shape: "A life of mission continuity and stability, traded against compensation ceiling and pace.",
    comp: "$80K–$120K (GS-12/13 entry) → $130K–$180K (GS-15/SES), capped",
    pros: [
      "Continuity with the mission you already care about",
      "FEHB benefits are excellent — one of the best healthcare systems available",
      "Federal pension (FERS) + TSP match is real retirement wealth if you stay",
      "Clearance-required roles give you immediate access the civilian world doesn't have",
      "Schedule stability that doesn't exist in startups or consulting",
    ],
    cons: [
      "Pay compression is real at senior levels — the SES cap is a ceiling",
      "Bureaucracy can be soul-crushing if you're used to the pace of ops",
      "Promotion timelines are longer than you're used to",
      "Political transitions can shift your work fundamentally",
      "Harder to leave the longer you stay — golden handcuffs via pension vesting",
    ],
    honest:
      "For some — especially those with deep national security backgrounds or who genuinely want to serve in a different form — this is the right answer. Know that it trades compensation ceiling for stability and mission alignment.",
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship & Startups",
    tag: "High risk, high learning",
    tagColor: "text-orange-400",
    shape: "A life of high autonomy and high risk, where the ceiling is unlimited and the floor is real.",
    comp: "$0–$80K (early stage, your own startup) → uncapped (if it works) | $80K–$150K (early startup employee) + equity",
    pros: [
      "Highest autonomy of any path — you set the direction",
      "Founding-stage roles give you equity that could matter over 5–10 years",
      "Your military-trained bias toward action and comfort with chaos is a genuine advantage",
      "The learning velocity at a good startup is unmatched",
      "Failure is common and recoverable — the stigma is lower than you were trained to expect",
    ],
    cons: [
      "Most startups fail. That's not pessimism, that's the base rate.",
      "Financial instability at early stages is real — plan for 12–24 months of runway",
      "No structure is disorienting if you've only worked in highly structured environments",
      "The civilian startup world has its own culture, jargon, and rules — you're a beginner again",
      "Equity is illiquid and often worth nothing — model it at zero and be pleasantly surprised",
    ],
    honest:
      "The military mindset is genuinely well-suited for founding-stage chaos — mission focus, calm under pressure, leadership when there's no playbook. The adjustment is to civilian culture, speed, and ambiguity tolerance. If this is pulling at you, go do informational conversations with veterans who've done it before you commit.",
  },
  {
    id: "nontraditional",
    label: "Non-Traditional Paths",
    tag: "Worth naming",
    tagColor: "text-teal-400",
    shape: "A life often most aligned with calling and meaning, traded against the prestige and compensation of the more visible paths.",
    comp: "Varies widely — education ($50K–$90K), nonprofit ($60K–$110K), ministry/chaplaincy ($40K–$80K + housing)",
    pros: [
      "Often align most directly with calling and meaning",
      "Non-transactional relationships — the people you serve are not transactions",
      "The formation work you've done in service translates directly",
      "Geographic flexibility in education and ministry in particular",
      "Identity is built on values and mission rather than compensation or status",
    ],
    cons: [
      "Compensation is genuinely lower — make this decision with eyes open",
      "The prestige culture of military aviation does not exist here",
      "Harder to explain to peers who expected you to do something 'impressive'",
      "Requires financial planning to work — not a decision to make without running the numbers",
    ],
    honest:
      "Those who are most at peace in civilian life are the ones who did something completely different. If you feel pulled toward something that doesn't look like a typical post-military career — pay attention to that.",
  },
];

export default function TheMap() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-10 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Stage 03 of 12 &mdash; The Pipeline
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
            The Map
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The civilian career ecosystem, mapped honestly. Seven paths, real comp ranges, the
            full aviation fork, and how hiring actually works. No cheerleading.
          </p>
          <p className="mt-3 text-sm text-slate-500 border-l-2 border-slate-700 pl-4">
            Not sure which direction you&rsquo;re pointed?{" "}
            <Link href="/paths" className="text-blue-400 hover:text-blue-300">The Paths page</Link>{" "}
            is the decision tool &mdash; five broad directions with a comparison matrix. Start there,
            then come back here for the deep dive.
          </p>

          {/* TL;DR */}
          <div className="mt-6 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">TL;DR</p>
            <ul className="space-y-1">
              {[
                "The 7 paths available to USAFA pilots — aviation, defense, tech, finance, govt, entrepreneurship, nontraditional",
                "Awareness layer: paths most pilots don't know exist before they self-select",
                "Read fully if: you haven't picked a direction yet — this is the most important page",
              ].map((item) => (
                <li key={item} className="text-sm text-slate-400 flex gap-2">
                  <span className="text-slate-600 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* On this page: jump links */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-5">
          <nav className="p-4 rounded-lg border border-slate-800 bg-slate-900/40">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">On this page</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {[
                ["#awareness", "What most pilots don't know"],
                ["#decision-map", "Decision map"],
                ["#the-paths", "All 7 paths"],
                ["#how-hiring-works", "How hiring works"],
                ["#geography", "Geography"],
                ["#what-to-do", "Action steps"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Choosing vs. discerning */}
        <section id="discerning">
          <h2 className="text-xl font-bold text-slate-100 mb-4">Before any of this: choosing vs. discerning</h2>
          <p className="text-slate-400 leading-relaxed">
            Before any of this matters, a question worth sitting with: are you choosing a path or are
            you discerning a calling? Both are legitimate, but they are not the same activity, and they
            reward different kinds of work. Choosing optimizes among preferences. Discerning listens for
            what is being asked of you. The networks and tactics described below help with both &mdash;
            but knowing which you are doing changes how you read everything that follows.
          </p>
        </section>

        {/* AWARENESS LAYER */}
        <section id="awareness">
          <div className="rounded-xl border border-amber-800/30 bg-amber-950/10 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              Before you answer any preference questions
            </p>
            <h2 className="text-xl font-bold text-slate-100 mb-2">
              What most pilots never hear about
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Most rated pilots hear &ldquo;airlines&rdquo; and that&rsquo;s it &mdash; the default, the thing everyone talks
              about. But you can&rsquo;t make an informed preference until you know what exists.
              These five options are real, competitive, and consistently unknown to pilots first entering
              the transition process.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  name: "Cargo Flying",
                  where: "FedEx · UPS · Amazon Air · Atlas · Kalitta",
                  comp: "≈Major airline pay",
                  insight: "No passengers. Historically better QoL. FedEx and UPS pilots retire extremely well. Most pilots assume it's a fallback — it's a competing path.",
                  color: "border-yellow-800/40 bg-yellow-950/10",
                  nameColor: "text-yellow-400",
                  href: "/the-map/airlines#cargo",
                },
                {
                  name: "Fractional / Charter",
                  where: "NetJets · Flexjet · Wheels Up · Clay Lacy",
                  comp: "$120K–$350K+ (captain)",
                  insight: "No seniority system. Relationship-based hiring. Can match or beat major airline pay. You're not waiting a decade to hold a line.",
                  color: "border-sky-800/40 bg-sky-950/10",
                  nameColor: "text-sky-400",
                  href: "/the-map/airlines#fractional",
                },
                {
                  name: "Corporate Flight Dept",
                  where: "Company aircraft · Private jet ops · Fortune 500s",
                  comp: "$100K–$300K",
                  insight: "Near 9-to-5 schedule. Maximum stability. The most relationship-dependent hiring in aviation — but once you're in, it's excellent.",
                  color: "border-emerald-800/40 bg-emerald-950/10",
                  nameColor: "text-emerald-400",
                  href: "/the-map/airlines#corporate",
                },
                {
                  name: "Defense-Tech PM",
                  where: "Primes · GovCon · Defense startups",
                  comp: "$120K–$200K+",
                  insight: "Your rated background is a credential civilians literally cannot fake. Defense primes actively recruit pilots for acquisition, test, and PM roles. No flying required.",
                  color: "border-blue-800/40 bg-blue-950/10",
                  nameColor: "text-blue-400",
                  href: "/the-map/defense",
                },
                {
                  name: "The USAFA Network",
                  where: "Long Blue Line · AOG · Your class",
                  comp: "Multiplier on every path",
                  insight: "Not a path — an asset. Most pilots underuse it completely. Your class alone has people 3–10 years ahead of you in every one of these paths. Map the network before you decide the direction.",
                  color: "border-purple-800/40 bg-purple-950/10",
                  nameColor: "text-purple-400",
                  href: "/networking",
                },
              ].map((card) => (
                <Link
                  key={card.name}
                  href={card.href}
                  className={`flex flex-col gap-1.5 p-4 rounded-lg border ${card.color} hover:opacity-80 transition-opacity`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <p className={`font-semibold text-sm ${card.nameColor}`}>{card.name}</p>
                    <p className={`text-xs font-mono flex-shrink-0 ${card.nameColor} opacity-80`}>{card.comp}</p>
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">{card.where}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">{card.insight}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DECISION MAP — fork diagram, reframed */}
        <section id="decision-map">
          <h2 className="text-xl font-bold text-slate-100 mb-4">The decision map</h2>
          <div className="border border-slate-800 rounded-xl bg-slate-900/30 p-6">

            {/* Root */}
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1.5 rounded-md border border-slate-600 bg-slate-900 text-xs font-mono text-slate-300 tracking-widest uppercase">
                Separation
              </span>
            </div>
            {/* Stem */}
            <div className="flex justify-center mb-3">
              <div className="w-px h-5 bg-slate-700" />
            </div>
            {/* Fork question — REFRAMED */}
            <div className="flex justify-center mb-3">
              <span className="px-4 py-2 rounded-md border border-amber-700/50 bg-amber-950/20 text-xs text-amber-300 text-center font-medium">
                Do you want to stay in aviation?
              </span>
            </div>
            {/* H-bar */}
            <div className="flex justify-center mb-0">
              <div className="flex w-3/4">
                <div className="flex-1 h-5 border-t border-r border-slate-700" />
                <div className="flex-1 h-5 border-t border-l border-slate-700" />
              </div>
            </div>

            {/* Two branches */}
            <div className="grid grid-cols-2 gap-4 mt-0">

              {/* Left: YES — aviation sub-fork */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-slate-600 font-mono">YES</span>
                {/* Aviation sub-fork */}
                <div className="w-full space-y-1.5">
                  {[
                    {
                      label: "Commercial Airlines",
                      sub: "Regionals → Majors",
                      border: "border-green-800/50",
                      bg: "bg-green-950/20",
                      text: "text-green-400",
                      comp: "$80K → $450K+",
                      href: "/the-map/airlines#commercial",
                    },
                    {
                      label: "Cargo",
                      sub: "FedEx · UPS · Amazon Air",
                      border: "border-yellow-800/40",
                      bg: "bg-yellow-950/10",
                      text: "text-yellow-400",
                      comp: "≈Major pay, better WLB",
                      href: "/the-map/airlines#cargo",
                    },
                    {
                      label: "Fractional / Charter",
                      sub: "NetJets · Flexjet",
                      border: "border-sky-800/40",
                      bg: "bg-sky-950/10",
                      text: "text-sky-400",
                      comp: "$120K–$350K+, no seniority",
                      href: "/the-map/airlines#fractional",
                    },
                    {
                      label: "Corporate Flight Dept",
                      sub: "Company jet · 9-to-5ish",
                      border: "border-emerald-800/40",
                      bg: "bg-emerald-950/10",
                      text: "text-emerald-400",
                      comp: "$100K–$300K",
                      href: "/the-map/airlines#corporate",
                    },
                  ].map((p) => (
                    <Link
                      key={p.label}
                      href={p.href}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg border ${p.border} ${p.bg} hover:opacity-80 transition-opacity`}
                    >
                      <div>
                        <p className={`text-xs font-medium ${p.text}`}>{p.label}</p>
                        <p className="text-slate-600 text-xs">{p.sub}</p>
                      </div>
                      <p className={`text-xs font-mono ${p.text} opacity-70 text-right ml-2 flex-shrink-0`}>{p.comp}</p>
                    </Link>
                  ))}
                </div>
                <Link href="/the-map/airlines" className="text-xs text-slate-600 hover:text-green-400 transition-colors mt-1">
                  Aviation deep dive →
                </Link>
              </div>

              {/* Right: NO / Unsure */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-slate-600 font-mono">NO / NOT SURE</span>
                <div className="w-full space-y-1.5">
                  {[
                    { label: "Defense & Aerospace", sub: "Easiest translation", border: "border-blue-800/40", bg: "bg-blue-950/10", text: "text-blue-400", href: "/the-map/defense" },
                    { label: "Tech & Ops", sub: "Highest comp ceiling", border: "border-purple-800/40", bg: "bg-purple-950/10", text: "text-purple-400", href: "/the-map/tech-ops" },
                    { label: "Finance & Consulting", sub: "MBA bridge, MBB path", border: "border-indigo-800/40", bg: "bg-indigo-950/10", text: "text-indigo-400", href: "/the-map/finance-consulting" },
                    { label: "Government", sub: "Stability, capped comp", border: "border-slate-700", bg: "bg-slate-900/40", text: "text-slate-400", href: "/the-map/government" },
                    { label: "Entrepreneurship", sub: "High risk, uncapped", border: "border-orange-800/40", bg: "bg-orange-950/10", text: "text-orange-400", href: "/the-map/entrepreneurship" },
                    { label: "Non-Traditional", sub: "Worth naming", border: "border-teal-800/40", bg: "bg-teal-950/10", text: "text-teal-400", href: "/the-map/nontraditional" },
                  ].map((p) => (
                    <Link
                      key={p.label}
                      href={p.href}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg border ${p.border} ${p.bg} hover:opacity-80 transition-opacity`}
                    >
                      <div>
                        <p className={`text-xs font-medium ${p.text}`}>{p.label}</p>
                        <p className="text-slate-600 text-xs">{p.sub}</p>
                      </div>
                      <span className="text-slate-700 text-xs">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-slate-800 text-center">
              <Link href="/comp" className="text-xs text-slate-500 hover:text-blue-400 transition-colors">
                Compare all seven paths by comp, equity &amp; trajectory →
              </Link>
            </div>
          </div>
        </section>

        {/* ALL PATHS — tabbed */}
        <section id="the-paths">
          <h2 className="text-xl font-bold text-slate-100 mb-2">The seven paths</h2>
          <p className="text-slate-500 text-sm mb-6">
            Pick a path tab to see the full breakdown — tradeoffs, comp, and a link to the deep dive.
            Comp ranges are 2025–2026 US civilian market. Geography matters &mdash; DC, SF, NY skew 20–40% higher.
          </p>
          <PathTabs paths={paths} />
        </section>

        {/* How civilian hiring works */}
        <section id="how-hiring-works">
          <h2 className="text-xl font-bold text-slate-100 mb-4">How civilian hiring actually works</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Civilian hiring does not work like the Air Force talent management system. There is no central
              assignment process. There is no transparency about what roles exist, what they pay, or who is
              being considered. There is no institutional advocacy for your development.
            </p>
            <p>
              What there is: 56% of professional jobs are filled through personal networks before they are
              ever posted publicly. Another 25–40% are filled through internal referrals. The jobs you see
              on LinkedIn or USAJobs are largely what&rsquo;s left after the network has been exhausted.
              This is not a conspiracy. It is how human beings hire.
            </p>
            <p>
              This means most transition advice about &ldquo;how to write a better resume&rdquo; is
              optimizing for the minority. The leverage is in building the network that surfaces the 56%.{" "}
              <Link href="/networking" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                Stage 04: Networking
              </Link>{" "}
              is where that work lives.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { num: "56%", label: "of jobs filled through personal contacts" },
              { num: "25–40%", label: "filled through employee referrals" },
              { num: "~20%", label: "actually filled via public job postings" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-lg border border-slate-800 bg-slate-900/30">
                <p className="text-2xl font-bold text-slate-100">{s.num}</p>
                <p className="mt-1 text-xs text-slate-600 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Geography */}
        <section id="geography">
          <h2 className="text-xl font-bold text-slate-100 mb-4">Geography is a decision, not a default</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              One of the biggest levers in your transition is geography, and most people don&rsquo;t treat it
              as a decision. They end up where they ended up — where their terminal base was, where family is,
              where it felt familiar. Nothing wrong with that, but it&rsquo;s worth understanding the implications.
            </p>
            <p>
              Defense and government work is concentrated: Northern Virginia, Huntsville AL, Colorado Springs,
              San Diego, Dayton OH, Tampa. Tech and finance require major metro markets (or full remote, which
              requires prior sector experience to access). Airlines are domicile-based &mdash; its own calculation.
            </p>
            <p>
              If you want to maximize options, especially in the first 18 months, proximity to a major market
              gives you more surface area. Remote work has expanded what&rsquo;s possible, but early-career
              relationship-building still rewards proximity.
            </p>
          </div>
        </section>

        {/* Action steps */}
        <section id="what-to-do" className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-100 mb-4">What to do with this</h2>
          <div className="space-y-3">
            {[
              {
                num: "0",
                step: "Before you pick.",
                detail: "If you are open to it, this is a decision worth praying about, fasting on, or talking through with a pastor or wise older friend before it becomes a list of preferences. The transition industry will treat it as a market problem. It is not only a market problem. Do not let urgency rush you past the deeper question.",
              },
              {
                num: "1",
                step: "See what exists before you rank preferences.",
                detail: "Read the awareness cards above. Then actually look up a FedEx pilot's retirement, a NetJets captain's schedule, a corporate flight dept job posting. You can't rank options you haven't seen.",
              },
              {
                num: "2",
                step: "Pick two paths that pull at you — and one that scares you.",
                detail: "The two that pull are obvious. The third — the path that scares you because it would cost something visible — is the one worth examining. Sometimes the scary one is wrong. Sometimes it is the call.",
              },
              {
                num: "3",
                step: "Find three people who did each one.",
                detail: "Via LinkedIn, USAFA network, AOG. Not to ask for a job — to understand the actual lived experience from someone 3 years in.",
              },
              {
                num: "4",
                step: "Do the comp math.",
                detail: "Use the Comp Translator to figure out what your current total comp is. Then compare it to the ranges above. The gap is real but may be smaller than you think.",
              },
              {
                num: "5",
                step: "Decide on geography before you decide on role.",
                detail: "Where do you want to live? That filters a lot. Then figure out what opportunities exist in that market.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-mono flex items-center justify-center mt-0.5">
                  {item.num}
                </span>
                <div>
                  <p className="font-medium text-slate-200 text-sm">{item.step}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where people stall */}
        <section className="border-l-2 border-amber-700/50 pl-5 py-1">
          <p className="text-xs text-amber-600 uppercase tracking-wide mb-1">Where people stall here</p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Most pilots read this and still default to airlines or defense. Both are legitimate paths.
            But make the choice deliberately &mdash; not because you ran out of imagination.
          </p>
        </section>

        {/* Nav forward */}
        <section className="border-t border-slate-800 pt-10">
          <p className="text-sm text-slate-500 mb-6">
            Once you have a direction (even a tentative one), Stage 04 is where the real work happens.
            Networking is how you access the 56% that never gets posted.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/networking" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
              Stage 04: Networking &rarr;
            </Link>
            <Link href="/comp-translator" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors">
              Comp Translator
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

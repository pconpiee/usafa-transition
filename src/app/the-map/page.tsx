import Link from "next/link";

export const metadata = {
  title: "Stage 03: The Map | Blue Canopy",
  description:
    "The civilian career ecosystem explained honestly. Six paths, real comp ranges, the airline fork, and how hiring actually works.",
};

const paths = [
  {
    id: "airlines",
    label: "Commercial Airlines",
    tag: "Known quantity",
    tagColor: "text-green-400",
    shape: "A life organized around flying, with a transparent seniority system and a familiar community.",
    comp: "$80K–$100K (regional FO) → $200K–$400K+ (major captain, 10–15 yr)",
    pros: [
      "Seniority system is transparent — you know exactly where you stand",
      "If you want to fly, you're doing it",
      "Community is familiar — the culture translates",
      "Pension + retirement trajectory at majors is genuinely excellent",
      "Schedule predictability improves with seniority",
    ],
    cons: [
      "First 2–5 years at regionals are financially tough — plan for it",
      "Seniority is everything, which means geographic inflexibility for years",
      "Identity still wrapped around the jet — you're still 'the pilot'",
      "Limited transferability if you decide you want something different at 45",
      "Furlough risk is real (see 2020) — the seniority floor drops hard",
    ],
    honest:
      "If you genuinely want to fly commercially, do it. The biggest trap isn't going to the airlines — it's going because you don't know what else to do. One is a career. The other is deferred decision-making.",
  },
  {
    id: "defense",
    label: "Defense & Aerospace Industry",
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
    id: "tech-business",
    label: "Tech & Business",
    tag: "Highest upside, hardest translation",
    tagColor: "text-purple-400",
    shape: "A life of high translation cost upfront, with the steepest learning curve and the broadest range of possible outcomes.",
    comp: "$100K–$160K (entry PM/ops) → $200K–$500K+ (senior leadership, equity events)",
    pros: [
      "Compensation ceiling is the highest of any path",
      "Equity and career velocity can compress decades if you land in the right place",
      "Problems are hard and complex in different ways — intellectually engaging",
      "Your leadership background is genuinely rare and valued in good orgs",
      "Geography is increasingly flexible — remote-first culture at many tech companies",
    ],
    cons: [
      "The translation burden is highest — nobody knows what your job title means",
      "Credentialing matters: MBA, PMP, or domain expertise helps",
      "Imposter syndrome is real — you'll be surrounded by people with very different backgrounds",
      "Culture shock is real — move fast, fail fast, flat hierarchy, no formality",
      "Layoffs in tech can be sudden and deep; the stability you're used to doesn't exist",
    ],
    honest:
      "This is the path where doing the networking and credentialing work pays off most. You can absolutely get here — but not by just submitting applications. Your path to tech is through people, not portals.",
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Stage 03 of 12 &mdash; The Pipeline
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
            The Map
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The civilian career ecosystem, mapped honestly by someone
            who walked it. Six paths with real comp ranges, the airline
            fork, and how hiring actually works. No cheerleading.
          </p>
          <p className="mt-3 text-sm text-slate-500 border-l-2 border-slate-700 pl-4">
            Not sure which direction you&rsquo;re pointed?{" "}
            <a href="/paths" className="text-blue-400 hover:text-blue-300">The Paths page</a>{" "}
            is the decision tool &mdash; five broad directions with a comparison matrix and honest
            trade-offs. Start there, then come back here for the deep dive.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Choosing vs. discerning */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Before any of this: choosing vs. discerning</h2>
          <p className="text-slate-400 leading-relaxed">
            Before any of this matters, a question worth sitting with: are you choosing a path or are
            you discerning a calling? Both are legitimate, but they are not the same activity, and they
            reward different kinds of work. Choosing optimizes among preferences. Discerning listens for
            what is being asked of you. The networks and tactics described below help with both &mdash;
            but knowing which you are doing changes how you read everything that follows.
          </p>
        </section>

        {/* How civilian hiring works */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">How civilian hiring actually works</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Here is the thing that took me the longest to understand: civilian hiring does not work like
              the Air Force talent management system. There is no central assignment process. There is no
              transparency about what roles exist, what they pay, or who is being considered. There is no
              institutional advocacy for your development.
            </p>
            <p>
              What there is: 56% of professional jobs are filled through personal networks before they are
              ever posted publicly. Another 25–40% are filled through internal referrals. The jobs you see
              on LinkedIn or USAJobs are largely what&rsquo;s left after the network has been exhausted.
              This is not a conspiracy. It is how human beings hire.
            </p>
            <p>
              This means that most of the transition advice about &ldquo;how to write a better resume&rdquo;
              is optimizing for a minority of available opportunities. The leverage is in building the network
              that surfaces the 56% that never got posted. Stage 04 &mdash;{" "}
              <Link href="/networking" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                Networking
              </Link>{" "}
              &mdash; is where that work lives.
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

        {/* Airline fork callout */}
        <section className="p-6 rounded-xl border border-blue-900/50 bg-blue-950/20">
          <h2 className="text-lg font-bold text-slate-100 mb-3">The airline fork</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            If you have a rated background, you need to answer this question before you read the rest of this page:
            <em className="text-slate-300"> do you actually want to fly commercially?</em>
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            Not &ldquo;should I go to the airlines?&rdquo; Not &ldquo;what would my family think?&rdquo;
            Do <em>you</em> want to fly commercially as a career?{" "}
            <strong className="text-slate-200">And &mdash; if you are someone who prays about this kind
            of decision &mdash; is this what you are being called to, or what you are reaching for
            because it is familiar?</strong>{" "}
            The lifestyle, the seniority grind, the community, the identity of it.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            If yes: go. It&rsquo;s a legitimate life. The path is well-documented and the community is strong.{" "}
            The rest of this page is still useful for framing, but airline-track prep is its own world &mdash;
            check out the rated-pilot transition forums and the specific guidance on ATP, type ratings, and seniority timing.
            If no, or if you&rsquo;re not sure: read on.
          </p>
        </section>

        {/* The 6 paths */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-2">The six paths</h2>
          <p className="text-slate-500 text-sm mb-8">
            Comp ranges are 2025–2026 US civilian market. They are starting points for research,
            not guarantees. Geography matters enormously &mdash; DC, SF, NY skew higher; most other
            markets are lower.
          </p>
          <p className="text-xs text-slate-500 italic mb-4">
            Each path has its own deep-dive page &mdash; tap the title to drill
            into the sub-decisions, the timeline, real comp data, and the
            resources that actually exist.
          </p>
          <div className="space-y-6">
            {paths.map((path) => {
              const slug = path.id === "tech-business" ? "tech-business" : path.id;
              return (
                <div key={path.id} className="border border-slate-800 rounded-xl overflow-hidden">
                  <div className="p-5 bg-slate-900/40">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Link
                        href={`/the-map/${slug}`}
                        className="font-bold text-slate-100 hover:text-blue-400 transition-colors"
                      >
                        {path.label} &rarr;
                      </Link>
                      <span className={`text-xs font-medium flex-shrink-0 ${path.tagColor}`}>
                        {path.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {path.shape}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">What works</p>
                        <ul className="space-y-1.5">
                          {path.pros.map((p) => (
                            <li key={p} className="flex gap-2 text-xs text-slate-400 leading-snug">
                              <span className="text-green-600 flex-shrink-0 mt-0.5">+</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">The real tradeoffs</p>
                        <ul className="space-y-1.5">
                          {path.cons.map((c) => (
                            <li key={c} className="flex gap-2 text-xs text-slate-400 leading-snug">
                              <span className="text-slate-600 flex-shrink-0 mt-0.5">&ndash;</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
                      <span className="text-slate-400 font-medium">Comp range:</span> {path.comp}
                    </p>
                  </div>
                  <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between gap-4">
                    <p className="text-xs text-slate-500 leading-relaxed italic">{path.honest}</p>
                    <Link
                      href={`/the-map/${slug}`}
                      className="flex-shrink-0 text-xs font-medium text-blue-400 hover:text-blue-300 whitespace-nowrap"
                    >
                      Deep dive &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Geography note */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Geography is a decision, not a default</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              One of the biggest levers in your transition is geography, and most people don&rsquo;t treat it
              as a decision. They end up where they ended up &mdash; where their terminal base was, where family is,
              where it felt familiar. Nothing wrong with that, but it&rsquo;s worth understanding the implications.
            </p>
            <p>
              Defense and government work is concentrated in specific corridors: Northern Virginia,
              Huntsville AL, Colorado Springs, San Diego, Dayton OH, Tampa, and a few others.
              Tech and finance require being in or near major metro markets (or being willing to be
              fully remote, which increasingly requires prior experience in the sector to access).
              Airlines are domicile-based, which is its own calculation.
            </p>
            <p>
              If you want to maximize your options, especially in the first 18 months, being near
              a major market gives you more surface area. Remote work has expanded what&rsquo;s possible,
              but early-career relationship-building still rewards proximity.
            </p>
          </div>
        </section>

        {/* What to do with this */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-100 mb-4">What to do with this</h2>
          <div className="space-y-3">
            {[
              {
                num: "0",
                step: "Before you pick.",
                detail:
                  "If you are open to it, this is a decision worth praying about, fasting on, or talking through with a pastor or wise older friend before it becomes a list of preferences. The transition industry will treat it as a market problem. It is not only a market problem. Do not let urgency rush you past the deeper question.",
              },
              {
                num: "1",
                step: "Pick two paths that pull at you — and one that scares you.",
                detail:
                  "The two that pull are obvious. The third — the path that scares you because it would cost something visible — is the one worth examining. Sometimes the scary one is wrong. Sometimes it is the call.",
              },
              {
                num: "2",
                step: "Find three people who did each one.",
                detail:
                  "Via LinkedIn, USAFA network, AOG. Not to ask for a job — to understand the actual lived experience from someone 3 years in.",
              },
              {
                num: "3",
                step: "Do the comp math.",
                detail:
                  "Use the Comp Translator to figure out what your current total comp is. Then compare it to the ranges above. The gap is real but may be smaller than you think.",
              },
              {
                num: "4",
                step: "Decide on geography before you decide on role.",
                detail:
                  "Where do you want to live? That filters a lot. Then figure out what opportunities exist in that market.",
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
            <Link
              href="/networking"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Stage 04: Networking &rarr;
            </Link>
            <Link
              href="/comp-translator"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
              Comp Translator
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

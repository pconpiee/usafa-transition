export default function First90DaysPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Post-separation
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        The First 90 Days & Beyond
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        You got the job. The negotiation is complete. Now the real work begins.
        Research says the first 90 days are disproportionately important.
      </p>

      {/* The 90-Day Framework */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">
          The 90-Day Action Plan
        </h2>
        <p className="text-sm text-slate-400 mb-8">
          Watkins&rsquo; research (<em>The First 90 Days</em>, HBS Press)
          found that new hires who invest deliberately in their first 90 days
          reach the &ldquo;breakeven point&rdquo;&mdash;where they contribute
          more than they consume&mdash;significantly faster.
        </p>

        <div className="space-y-6">
          {[
            {
              weeks: "Week 1-2",
              title: "Listen and Learn",
              actions: [
                "Meet every team member 1:1. Understand current projects, priorities, pain points.",
                "Ask more than you speak. Your job this week is to absorb, not impress.",
                "Begin Watkins' five conversations with your manager: Situation, Expectations, Resources, Style, Development.",
                "Map the informal power structure — who actually makes decisions? Who is trusted?",
              ],
            },
            {
              weeks: "Week 3-4",
              title: "Understand the System",
              actions: [
                "Map the organization chart (formal and informal). Identify decision-makers, gatekeepers, allies.",
                "Understand the review and promotion process. Write it down. This shapes every future comp conversation.",
                "Start your 'brag document' — a running log of achievements, impact, and growth. When review time comes, you won't remember month two.",
                "Identify the communication norms: written or verbal? Detailed or high-level? Scheduled or ad hoc?",
              ],
            },
            {
              weeks: "Week 5-8",
              title: "Deliver an Early Win",
              actions: [
                "Identify one concrete problem you can solve or one deliverable you can complete. Execute it well.",
                "Make sure the right people see it. Not bragging — visibility of contribution.",
                "The research on trust (Mayer, Davis & Schoorman, 1995): Ability + Benevolence + Integrity. The early win demonstrates Ability.",
                "Help someone on a problem that isn't yours. This demonstrates Benevolence. Together, they build the foundation for observed Integrity.",
              ],
            },
            {
              weeks: "Week 9-12",
              title: "Expand and Invest",
              actions: [
                "Begin building relationships outside your immediate team. Cross-functional relationships are structural gold (Burt, 2004).",
                "Have the explicit expectations conversation with your manager if you haven't already.",
                "Identify one area where you need to develop. Ask for it — conference, training, mentor, stretch assignment.",
                "Run PEDL on your first 90 days. Two things going well. Two things to change. What's the one thing to take forward?",
              ],
            },
          ].map((phase) => (
            <div
              key={phase.weeks}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-6"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-0.5 rounded">
                  {phase.weeks}
                </span>
                <h3 className="text-lg font-semibold text-slate-200">
                  {phase.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {phase.actions.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-slate-600 flex-shrink-0">&bull;</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* The Identity Transition */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">
          The identity transition nobody warns you about
        </h2>
        <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
          <p>
            Bridges&rsquo; research identifies three phases in every transition.
            You are likely in the <strong className="text-slate-200">neutral zone</strong>&mdash;the
            old identity has ended but the new one hasn&rsquo;t formed yet. This
            feels like confusion, anxiety, and heightened vulnerability. It is
            also where the real development happens.
          </p>
          <p>
            The temptation is to rush through it&mdash;to grab the first clear
            identity, the first stable ground. The professionals who build the
            strongest careers tolerate the ambiguity long enough for the right
            identity to emerge. This is not passivity. It is discernment.
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-5 my-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-red-400 mb-1">
                  Ending
                </h3>
                <p className="text-xs text-slate-500">
                  Letting go of rank, identity, competence, geographic home.
                  Loss and disorientation&mdash;even when the change was chosen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-400 mb-1">
                  Neutral Zone
                </h3>
                <p className="text-xs text-slate-500">
                  The old identity has ended. The new one hasn&rsquo;t formed.
                  Confusion, creativity, vulnerability. This is where you are.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 mb-1">
                  New Beginning
                </h3>
                <p className="text-xs text-slate-500">
                  The new identity takes hold. Energy returns. Competence
                  rebuilds. Clarity, momentum, purpose.
                </p>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-xs">
            A 10-year longitudinal study (Frontiers in Sociology, 2024) found
            that identity reconstruction can persist for years or decades.
            Counterintuitively, a study of 9,566 veterans found outcomes
            <em> worsen</em> in years 2-3 before stabilizing. Don&rsquo;t
            mistake the neutral zone for failure.
          </p>
        </div>
      </section>

      {/* Five-Year Architecture */}
      <section className="mt-16 border-t border-slate-800 pt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">
          The Five-Year Architecture
        </h2>
        <p className="text-sm text-slate-400 mb-8">
          Small, consistent investments in relationships, skills, reputation,
          and compensation produce dramatically different outcomes over five
          years (Newport, <em>So Good They Can&rsquo;t Ignore You</em>, 2012).
        </p>

        <div className="space-y-6">
          {[
            {
              year: "Year 1",
              title: "Foundation",
              items: [
                "Complete the 90-day relationship map. Schedule one informational conversation per month outside your org.",
                "Join one professional community. Make one introduction per month connecting two people who should know each other.",
                "Find a mentor 8-15 years ahead. After every significant experience, write a 10-minute PEDL debrief.",
                "Understand your total comp. Start the brag document. Know the review cycle and promotion criteria.",
              ],
            },
            {
              year: "Year 2",
              title: "Building Trust Capital",
              items: [
                "Move from receiving feedback to actively seeking it — specifically from people who know your blind spots.",
                "Take on one cross-domain project. If you're technical, engage in business or policy.",
                "Execute your first raise conversation using the Comp Translator data and calibrated questions.",
                "Identify one area where you're operating from a fixed mindset. Work on it.",
              ],
            },
            {
              year: "Year 3",
              title: "Taking on Real Stakes",
              items: [
                "Accept a stretch assignment that requires leading something you're not fully qualified for. The 70-20-10 research says this is where development happens.",
                "Deliver one public contribution: a talk, a paper, a panel. Establish your voice.",
                "Map your network structurally: where are you bridging holes? Where are you trapped in a cluster?",
                "Begin investing in someone newer. Not formally — just be available.",
              ],
            },
            {
              year: "Year 4",
              title: "Multiplied Impact",
              items: [
                "Identify what you uniquely connect that no one else does. That's your structural position.",
                "Develop a personal vision articulation — not a career goal, but a statement of the future you're building toward.",
                "Build one relationship outside your industry that challenges your assumptions.",
                "Honest assessment: on track for leadership, or approaching a ceiling?",
              ],
            },
            {
              year: "Year 5",
              title: "Consolidation & The Chain",
              items: [
                "Full network audit: has quality deepened or have you just accumulated contacts?",
                "Identify 2-3 people you've formed who are ready for greater responsibility. Commission them.",
                "Five-year compensation review: total earnings, growth, comparison to market. Did negotiating matter?",
                "Ask: what am I building that will outlast my direct involvement? What does faithfulness look like from here?",
              ],
            },
          ].map((yr) => (
            <div
              key={yr.year}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-6"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm font-mono text-blue-400 font-bold">
                  {yr.year}
                </span>
                <h3 className="text-lg font-semibold text-slate-200">
                  {yr.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {yr.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-slate-600 flex-shrink-0">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-900/70 border border-slate-800 rounded-lg p-6">
          <p className="text-sm text-slate-400 italic">
            The goal of formation is not to produce people who need you. It is
            to produce people who can go out and form others. What you build here
            is not just a career. It is a legacy&mdash;measured not by what you
            earned, but by what you gave, who you served, and whether you were
            faithful with what was entrusted to you.
          </p>
        </div>
      </section>
    </div>
  );
}

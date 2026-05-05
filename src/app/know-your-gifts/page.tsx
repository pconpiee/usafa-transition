export default function KnowYourGiftsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 02 of 12 &mdash; Know Your Gifts
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Know Your Gifts
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        Not StrengthsFinder. Not MBTI. Not a personality type. This is about
        mapping what you can actually do — from evidence — and translating it
        into language a hiring manager understands.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Most pilots undersell themselves catastrophically because they describe
        their jobs instead of their demonstrated capabilities. A civilian
        doesn&rsquo;t know what a flight lead does. They do know what
        it means to make split-second decisions with incomplete information
        under real consequences.
      </p>

      {/* TL;DR */}
      <div className="mt-6 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">TL;DR</p>
        <ul className="space-y-1">
          {[
            "How to translate military roles into civilian capability language",
            "Mapping your actual demonstrated skills — not personality types",
            "Skim if: you have a clear target role and already know how to pitch yourself",
          ].map((item) => (
            <li key={item} className="text-sm text-slate-400 flex gap-2">
              <span className="text-slate-600 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* On this page */}
      <nav className="mt-8 p-4 rounded-lg border border-slate-800 bg-slate-900/40">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">On this page</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {[
            ["#translation", "The translation problem"],
            ["#gift-inventory", "The gift inventory"],
            ["#airframe-callouts", "Airframe callouts"],
            ["#action", "What to do with this"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Why this matters */}
      <section id="translation" className="mt-12">
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <h3 className="text-base font-semibold text-slate-200 mb-3">
            The translation problem
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-red-400 font-semibold text-xs uppercase tracking-wide mb-2">
                What you say
              </p>
              <ul className="space-y-2 text-slate-500">
                <li>&ldquo;I was a flight lead.&rdquo;</li>
                <li>&ldquo;I flew 800 hours in the F-16.&rdquo;</li>
                <li>&ldquo;I was an instructor pilot.&rdquo;</li>
                <li>&ldquo;I managed a $4M budget.&rdquo;</li>
                <li>&ldquo;I completed my IDE.&rdquo;</li>
              </ul>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-2">
                What a civilian hears
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>
                  &ldquo;I qualified to lead 4-ship combat missions and was
                  responsible for every aircraft and crew.&rdquo;
                </li>
                <li>
                  &ldquo;I have 800+ hours operating a $30M aircraft system
                  at the limits of human performance.&rdquo;
                </li>
                <li>
                  &ldquo;I designed and delivered training programs that
                  produced combat-ready aviators.&rdquo;
                </li>
                <li>
                  &ldquo;I managed $4M in resources with zero margin for
                  error.&rdquo;
                </li>
                <li>
                  &ldquo;I completed graduate-level strategic leadership
                  education.&rdquo;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Gift Inventory */}
      <section id="gift-inventory" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The gift inventory
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          Work through each category. Be specific. Claims without evidence
          are just claims.
        </p>

        <div className="space-y-6">
          {[
            {
              category: "Technical mastery under pressure",
              military: "Operating complex aircraft systems, emergency procedures, CRM, BFM",
              translation:
                "You operate high-stakes technology in degraded conditions, execute memorized emergency responses without looking them up, and coordinate multi-crew operations in real time. This is exactly what operations, incident response, and systems management roles need.",
              questions: [
                "What's the most technically complex thing you've managed under real pressure?",
                "What emergency or abnormal procedure have you actually executed? What happened?",
                "Where have you had to diagnose a system failure in real time?",
              ],
            },
            {
              category: "Decision-making with incomplete information",
              military: "Tactical decisions in time-constrained environments, threat assessment, go/no-go under pressure",
              translation:
                "Every mission you planned had information gaps. Every flight had decision points where you committed on incomplete data. Civilian orgs pay significant money for people who can make sound decisions without waiting for certainty.",
              questions: [
                "Describe a decision you made in under 60 seconds that had real consequences.",
                "When have you had to make a call when your gut said one thing and the data said another?",
                "What's the highest-stakes decision you've made alone?",
              ],
            },
            {
              category: "Team building and leadership",
              military: "Flight lead, IP, ADOC, squadron officer roles, new pilot integration",
              translation:
                "You have built team competence from scratch. You have taken someone who couldn't do the job and made them capable. You have led in life-and-death environments. Most civilian managers have never done anything close to this.",
              questions: [
                "Who is the weakest person you ever turned into a capable operator? What did that take?",
                "Describe a time you had to lead people who didn't want to be led.",
                "What's the most dysfunctional team you inherited? What changed?",
              ],
            },
            {
              category: "Teaching and knowledge transfer",
              military: "IP, check ride prep, flight lead upgrade, stan/eval, academic instruction",
              translation:
                "Teaching is one of the most underrated executive skills. You've built curriculum, assessed performance against standards, and coached people through high-stakes evaluations. L&D, program management, and consulting roles pay for exactly this.",
              questions: [
                "What's the hardest thing you've ever taught someone? How did you break it down?",
                "How have you adapted your teaching when the standard approach wasn't working?",
                "Describe a curriculum or training program you built from scratch.",
              ],
            },
            {
              category: "Process management and execution discipline",
              military: "Mission planning, sortie generation, checklists, stan/eval, audits",
              translation:
                "You have operated in a high-reliability environment where process compliance was not optional. You can build checklists, run audits, and hold standards without collapsing under social pressure to cut corners.",
              questions: [
                "Where have you been responsible for a process that could not fail?",
                "Describe a time you caught a process gap before it became an incident.",
                "What's the most complex logistics or planning problem you've coordinated?",
              ],
            },
            {
              category: "Cross-cultural and joint operations",
              military: "Coalition operations, CAOC, joint assignments, exercises with allied forces",
              translation:
                "You have operated with people from radically different organizational cultures, communication styles, and rule sets. You figured out how to be effective anyway. Global companies and cross-functional teams value this more than most pilots realize.",
              questions: [
                "Describe working with a partner nation, joint service, or interagency team. What was hard?",
                "When have you had to build credibility with a team that had no reason to trust you?",
                "What did you learn about communication that you can only learn by operating in a foreign environment?",
              ],
            },
          ].map((item) => (
            <div
              key={item.category}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-slate-200 mb-1">
                {item.category}
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Military context: {item.military}
              </p>
              <p className="text-sm text-slate-400 mb-4">{item.translation}</p>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">
                  Your evidence questions
                </p>
                <ul className="space-y-1">
                  {item.questions.map((q, i) => (
                    <li key={i} className="text-sm text-slate-400 flex gap-2">
                      <span className="text-slate-600 flex-shrink-0">→</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Airframe-specific callouts */}
      <section id="airframe-callouts" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Airframe callouts
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Different platforms mean different capability profiles. Know which
          story you&rsquo;re telling.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              platform: "Fighter (F-16, F-15, A-10, F-22, F-35)",
              strengths:
                "Solo decision-making, high-stakes judgment, advanced situational awareness, weapons employment, BFM, DCA/OCA",
              bestFor:
                "Tech (product management, ops), private equity ops/strategy, consulting, defense policy, risk management",
            },
            {
              platform: "Mobility / Tanker (C-17, C-5, KC-135, KC-46)",
              strengths:
                "Multi-crew leadership, complex logistics, global operations, mission planning, crew resource management",
              bestFor:
                "Supply chain, logistics management, program management, airline ops, government contracting",
            },
            {
              platform: "Special Operations (MC-130, AC-130, CV-22)",
              strengths:
                "Ambiguity management, joint/interagency ops, low-visibility planning, sustained operations under pressure, coalition building",
              bestFor:
                "Consulting, government, international security, risk / crisis management",
            },
            {
              platform: "ISR / EW (RC-135, U-2, E-8, E-3)",
              strengths:
                "Intelligence synthesis, pattern analysis, multi-domain ops coordination, long-duration mission execution",
              bestFor:
                "Intelligence community, defense tech, data/analytics, government",
            },
            {
              platform: "Trainer (T-38, T-6, T-7)",
              strengths:
                "Instructional design, performance coaching, standards management, high-volume student throughput",
              bestFor:
                "L&D / corporate training, program management, consulting, higher education",
            },
            {
              platform: "Helicopter / Rotary (HH-60, UH-1, MH-53)",
              strengths:
                "Low-altitude ops, confined space decision-making, personnel recovery, joint operations, humanitarian ops",
              bestFor:
                "Emergency management, law enforcement, healthcare ops, SAR sector",
            },
          ].map((af) => (
            <div
              key={af.platform}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-5"
            >
              <p className="text-sm font-semibold text-blue-400 mb-2">
                {af.platform}
              </p>
              <p className="text-xs text-slate-400 mb-3">
                <span className="text-slate-500 font-medium">Core strengths: </span>
                {af.strengths}
              </p>
              <p className="text-xs text-slate-500">
                <span className="text-slate-500 font-medium">Maps well to: </span>
                {af.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What to do with this */}
      <section id="action" className="mt-12 bg-blue-600/5 border border-blue-500/20 rounded-xl p-6 sm:p-8">
        <h3 className="text-base font-semibold text-slate-200 mb-4">
          What to do with this
        </h3>
        <div className="space-y-3">
          {[
            "Write 3–5 specific, evidence-based stories for each category that applies to you. Specific means named, dated, and quantified where possible.",
            "Translate military language before you use it in any application or interview. If a civilian hiring manager couldn't parse it cold, rewrite it.",
            "Identify the 2–3 categories where your evidence is strongest. Those are your anchors.",
            "Know the 1–2 categories where your evidence is thin. Be honest about the gap and ready to say how you're closing it.",
            "Take these stories to informational conversations before you go to interviews. Rehearse the translation in low-stakes conversations first.",
          ].map((a, i) => (
            <div key={i} className="flex gap-3 text-sm text-slate-400">
              <span className="text-blue-400 flex-shrink-0 font-mono text-xs mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Where people stall */}
      <div className="mt-8 border-l-2 border-amber-700/50 pl-5 py-1">
        <p className="text-xs text-amber-600 uppercase tracking-wide mb-1">Where people stall here</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Pilots default to listing credentials — hours, aircraft, qualifications. What you actually
          bring is more interesting than your logbook. Ask a civilian who knows you well what they&rsquo;d
          hire you to do. The answer will surprise you.
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-between">
        <a
          href="/the-reckoning"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          ← Stage 01: The Reckoning
        </a>
        <a
          href="/the-map"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Stage 03: The Map →
        </a>
      </div>

    </div>
  );
}

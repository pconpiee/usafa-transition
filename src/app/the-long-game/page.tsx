import Link from "next/link";

export default function TheLongGamePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 11 of 12 — The Long Game
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        The Long Game
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        The transition is not the destination. The first offer is not the
        ceiling. Year one is not the arc.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Most transition advice is about getting the job. Very little is about
        what happens after. This stage is about the architecture of a career
        that compounds over 20 years — not a job you hold for 18 months.
      </p>

      {/* TL;DR */}
      <div className="mt-6 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">TL;DR</p>
        <ul className="space-y-1">
          {[
            "The career arc that matters — trajectory over title",
            "How to build toward optionality: the portfolio of credibility that opens big doors",
            "Skim if: you're thriving in your current role and have a clear 3-year plan",
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
            ["#five-year", "Five-year architecture"],
            ["#identity", "The identity shift"],
            ["#network", "The compounding network"],
            ["#year-five", "Year five question"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* The 5-year frame */}
      <section id="five-year" className="mt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">
          The five-year architecture
        </h2>
        <div className="space-y-4">
          {[
            {
              year: "Year 1",
              title: "Prove yourself, learn the language",
              focus: "Competence and humility. You are new. You do not know how things work here. Learn the org, earn trust through performance on the small things, and resist every instinct to tell them how the Air Force did it.",
              watch: "Don't mistake your rank for your standing. You have none yet. It will come back — through different mechanisms.",
              metric: "Can your manager describe your value without using the word \"military\"?",
            },
            {
              year: "Year 2",
              title: "Start building optionality",
              focus: "You now have enough organizational knowledge to move. Start developing the network outside your immediate team. Reconnect with the people you met during the search. Keep conversations alive.",
              watch: "The danger: you get comfortable. Comfortable is fine. Locked-in is not. Build options even when you don't need them.",
              metric: "Do you have at least one relationship at each of three different companies in your target space?",
            },
            {
              year: "Year 3",
              title: "Expand your scope, assess your trajectory",
              focus: "You now have enough domain knowledge and org credibility to start taking on more complex problems. Ask for harder assignments. Be visible on cross-functional work. Start developing your people if you have them.",
              watch: "Salary growth compresses over time when you stay at the same employer — the market moves faster than internal raise cycles. Know your number. Asking for it isn't greed — it's hygiene.",
              metric: "Does your title and comp reflect your actual scope and contribution?",
            },
            {
              year: "Year 4–5",
              title: "Architect the next phase",
              focus: "You are now a civilian professional with real credentials — not a veteran who transitioned. This is a shift in how you present yourself and how you think about the market. What do you want the next decade to look like? What would it take to get there?",
              watch: "Loyalty to people, not institutions. Companies restructure. Leaders change. Stay loyal to the relationships, invest in the people.",
              metric: "Can you describe your five-year goal clearly enough that someone could help you with it?",
            },
          ].map((item) => (
            <div key={item.year} className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold text-blue-400 bg-blue-400/10">
                  {item.year}
                </span>
                <h3 className="text-sm font-semibold text-slate-200">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-3">{item.focus}</p>
              <p className="text-xs text-amber-400 bg-amber-400/5 border border-amber-400/20 rounded px-3 py-2 mb-3">
                ⚠ Watch: {item.watch}
              </p>
              <p className="text-xs text-slate-600">
                <span className="text-slate-500 font-medium">Track: </span>
                {item.metric}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Identity */}
      <section id="identity" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The identity shift
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          This is the one most people don&rsquo;t talk about.
        </p>
        <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
          <p>
            Military identity is compressed. You wore it on your chest.
            It was visible to strangers, respected by peers, and legible
            inside the system. Rank signaled competence. Wings signaled a
            fraternity. The uniform did enormous social work.
          </p>
          <p>
            In civilian life, none of that scaffolding exists. You have to
            build a new identity from scratch — not as a veteran who survived
            the transition, but as a professional with real civilian credentials.
            This takes longer than anyone tells you.
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-3">
            <h3 className="text-sm font-semibold text-slate-200">
              Signs the shift is happening
            </h3>
            {[
              "You stop translating your military experience into civilian language and start just describing your civilian experience.",
              "Your professional identity is no longer primarily about what you were — it's about what you're doing now.",
              "You introduce yourself without mentioning the Air Force as the lead credential.",
              "When asked what you do, the answer is easy and accurate.",
              "You're mentoring people who are going through what you went through — and you're useful to them.",
            ].map((item, i) => (
              <div key={i} className="flex gap-2 text-sm text-slate-400">
                <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p>
            The timeline varies. For some it&rsquo;s two years. For some it&rsquo;s five.
            The research on military-to-civilian identity transition (Naphan &amp;
            Elliott, 2015) is clear that the integration — not replacement — of
            military identity into a civilian professional identity is the
            healthiest path.
          </p>
          <p>
            You don&rsquo;t stop being someone who flew jets. You stop needing
            that to be the whole story.
          </p>
        </div>
      </section>

      {/* The compounding network */}
      <section id="network" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The compounding network
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          The network you built during the search doesn&rsquo;t expire. It
          compounds — if you maintain it.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4 text-sm text-slate-400">
          <p>
            The people who helped you find your first role are now in your
            network. The peers you met during informational conversations are
            on trajectories of their own. In five years, some of them will be
            hiring managers, partners, or founders.
          </p>
          <p>
            Network maintenance is simple and frequently neglected:
          </p>
          <ul className="space-y-2">
            {[
              "Check in with two or three people per month. Not to ask for anything. To stay connected.",
              "Send a note when you see something relevant to someone you know (\"saw this and thought of you\").",
              "Make introductions when you can. Givers gain (Grant, 2013).",
              "When someone reaches out to you for help — respond. You know what it's like to need that response.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The question */}
      <section id="year-five" className="mt-16 border-t border-slate-800 pt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">
          The question worth asking from year five
        </h2>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4 text-slate-400 text-sm leading-relaxed">
          <p>
            There&rsquo;s a question that becomes easier to answer once you&rsquo;ve
            been through the transition and built something on the other side.
            It&rsquo;s not &ldquo;what job do I have&rdquo; or &ldquo;how much
            do I make.&rdquo;
          </p>
          <p>
            It&rsquo;s: <span className="text-slate-200 font-medium italic">what am I building that will matter after I&rsquo;m done with it?</span>
          </p>
          <p>
            Frederick Buechner&rsquo;s definition of vocation — the place where
            your deep gladness and the world&rsquo;s deep hunger meet — is easier
            to locate from year five than from year one. But it&rsquo;s worth
            asking now so you&rsquo;re pointed in the right direction.
          </p>
          <p>
            Some people find that the career they built is exactly the right one.
            Some find that they need to turn left. Both are good outcomes if the
            question was being asked.
          </p>
          <p className="text-slate-300 pt-2 border-t border-slate-800">
            One operating principle worth carrying forward, from a senior
            teammate reflecting on what stuck: <em>great legacies don&rsquo;t
            come naturally, they come intentionally. Invest in those below,
            behind, and beside you.</em> Year five is when you&rsquo;re
            finally in a position to do that. Don&rsquo;t wait for year ten.
          </p>
        </div>
      </section>

      {/* Where people stall */}
      <div className="mt-8 border-l-2 border-amber-700/50 pl-5 py-1">
        <p className="text-xs text-amber-600 uppercase tracking-wide mb-1">Where people stall here</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Judging the first year as if it&rsquo;s the whole career. The discomfort of early
          civilian work is not a signal the path is wrong &mdash; it&rsquo;s a signal you&rsquo;re growing.
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-between">
        <Link
          href="/first-90-days"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          ← Stage 10: First 90 Days
        </Link>
        <Link
          href="/the-chain"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Stage 12: The Chain →
        </Link>
      </div>

    </div>
  );
}

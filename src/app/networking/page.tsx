"use client";

import Link from "next/link";

export default function NetworkingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 04 — Networking
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Networking
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        When I separated I went to conferences, asked everyone who else I
        should meet, told people where I wanted to go and why &mdash; and
        gave them a story they could pass along. Jobs came to me. This page
        is the system behind why that worked.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        The research on this is fifty years deep and remarkably consistent. The
        people most likely to connect you with a job are not your close friends.
        They&rsquo;re the people you barely know.
      </p>

      {/* Section 1: The Science */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The science: why weak ties win
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          Granovetter (1973), Burt (2004) — the two most replicated findings in
          career network research
        </p>

        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            Mark Granovetter&rsquo;s 1973 paper &ldquo;The Strength of Weak
            Ties&rdquo; found something counterintuitive: your close friends
            — the people you talk to most, trust most, care about most — are
            the least likely to connect you with a new job. The reason is
            structural. Your close friends know the same people you do, move in
            the same circles, have access to the same information.
          </p>
          <p>
            Your weak ties — the guy you flew with once three years ago, the
            classmate who went guard and now works in tech, the boss from your
            first assignment who LinkedIn-connected but never messaged — those
            people move in different circles. They know things you don&rsquo;t
            know. They know people you&rsquo;ve never met.
          </p>
          <p>
            56% of professionals find their jobs through personal contacts.
            Of those, the majority come through weak ties, not close friends.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            {
              stat: "56%",
              label: "of jobs filled through personal contacts",
              source: "Granovetter, 1974",
            },
            {
              stat: "25–40%",
              label: "of hires come from employee referrals",
              source: "CareerXroads annual surveys",
            },
            {
              stat: "3×",
              label:
                "more likely to get an unsolicited opportunity if you're actively networking",
              source: "LinkedIn Economic Graph, 2023",
            },
          ].map((s) => (
            <div
              key={s.stat}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {s.stat}
              </div>
              <div className="text-sm text-slate-400">{s.label}</div>
              <div className="text-xs text-slate-600 mt-2">{s.source}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <h3 className="text-base font-semibold text-slate-200 mb-4">
            Structural holes — Burt (2004)
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Ronald Burt studied managers at a large electronics company and
            found that the ones who got promoted earlier, paid more, and rated
            better were the ones who bridged structural holes — who connected
            groups that weren&rsquo;t otherwise connected.
          </p>
          <p className="text-sm text-slate-400">
            Brokers see opportunities that neither group sees on its own. In a
            field where most people cluster by background — aviation, tech,
            defense — being the person who knows people in all three gives you
            information before it&rsquo;s public, and access before
            it&rsquo;s competed for.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-2 pr-4 text-slate-400 font-medium">
                    Network position
                  </th>
                  <th className="text-left py-2 pr-4 text-slate-400 font-medium">
                    Information access
                  </th>
                  <th className="text-left py-2 text-slate-400 font-medium">
                    Career advantage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {[
                  {
                    pos: "Closed network (everyone knows each other)",
                    info: "Redundant — same circles, same knowledge",
                    adv: "Low. Comfortable. Informationally trapped.",
                  },
                  {
                    pos: "Brokerage position (bridges separate groups)",
                    info: "Non-redundant — different circles, different knowledge",
                    adv: "High. Sees opportunities others miss.",
                  },
                  {
                    pos: "Peripheral isolate (few connections of any kind)",
                    info: "Minimal",
                    adv: "Very low. Invisible to the system.",
                  },
                ].map((row) => (
                  <tr key={row.pos}>
                    <td className="py-3 pr-4 text-slate-300">{row.pos}</td>
                    <td className="py-3 pr-4 text-slate-400">{row.info}</td>
                    <td className="py-3 text-slate-400">{row.adv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Network Audit */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Network audit: what you actually have
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          Ibarra & Hunter (2007) — three types of network, and why most people
          only have one
        </p>

        <p className="text-slate-400 mb-6 leading-relaxed">
          Most pilots have a strong operational network — the people they work
          with every day — and a decent personal network — classmates, bros,
          people who know them. What almost nobody has when they separate is a
          strategic network: people outside your world who are positioned to
          know about opportunities you&rsquo;d never hear about otherwise.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              type: "Operational",
              purpose: "Getting current work done",
              who: "Immediate colleagues, squadron mates, direct chain",
              status: "Most pilots: strong",
              color: "emerald",
            },
            {
              type: "Personal",
              purpose: "Development, support, identity",
              who: "Classmates, friends in the industry, mentors",
              status: "Most pilots: decent",
              color: "blue",
            },
            {
              type: "Strategic",
              purpose: "Positioning for future opportunities",
              who: "Senior people in fields you're targeting, cross-industry contacts, people at companies you want",
              status: "Most pilots: thin",
              color: "amber",
            },
          ].map((n) => (
            <div
              key={n.type}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-5"
            >
              <div
                className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
                  n.color === "emerald"
                    ? "text-emerald-400"
                    : n.color === "blue"
                    ? "text-blue-400"
                    : "text-amber-400"
                }`}
              >
                {n.type}
              </div>
              <div className="text-sm font-medium text-slate-200 mb-2">
                {n.purpose}
              </div>
              <div className="text-xs text-slate-500 mb-3">{n.who}</div>
              <div
                className={`text-xs font-semibold ${
                  n.color === "emerald"
                    ? "text-emerald-400"
                    : n.color === "blue"
                    ? "text-blue-400"
                    : "text-amber-400"
                }`}
              >
                {n.status}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <h3 className="text-base font-semibold text-slate-200 mb-4">
            The audit (do this now, not later)
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Write down every professional contact you have. For each one, note:
            What world do they operate in? What do they know that you
            don&rsquo;t? Do they know people you don&rsquo;t know?
          </p>
          <div className="space-y-3">
            {[
              {
                q: "Aviation / military",
                note: "You have this. It won&rsquo;t get you a civilian job by itself.",
              },
              {
                q: "Defense & aerospace (civilian side)",
                note: "You probably have some. Extend it deliberately.",
              },
              {
                q: "Tech / software / product",
                note: "You likely have almost none. This is a structural hole.",
              },
              {
                q: "Finance / private equity / consulting",
                note: "Probably zero. High-value gap.",
              },
              {
                q: "Someone at a company you actually want to work for",
                note: "If you don&rsquo;t know anyone there, that&rsquo;s the problem.",
              },
              {
                q: "Someone who recently made the transition you&rsquo;re trying to make",
                note: "Their experience is the most directly applicable intel you can get.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 text-sm border-b border-slate-800/50 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-slate-600 flex-shrink-0 mt-0.5">
                  ☐
                </span>
                <div>
                  <span className="text-slate-300">{item.q}</span>
                  <span className="text-slate-500"> — {item.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Informational Conversation */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The informational conversation
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          The most effective tool you&rsquo;re not using — and the most
          common way pilots do it wrong
        </p>

        <div className="space-y-4 text-slate-400 mb-8 leading-relaxed">
          <p>
            An informational conversation is not a job interview. You&rsquo;re
            not pitching yourself. You&rsquo;re there to learn — what
            does this person&rsquo;s world actually look like, how did they get
            there, what do they see from where they sit that you can&rsquo;t
            see from yours.
          </p>
          <p>
            Why do they work? Three reasons. The Ben Franklin effect: people who
            do you a favor come to like you more, not less. When someone gives
            you their time, they become invested in your success. The norm of
            reciprocity: the person who gave you their time wants their advice
            to land. They think of you when an opportunity comes up. And dormant
            tie reactivation: reaching out to someone you haven&rsquo;t spoken
            to in years restores the relationship — and those dormant contacts
            have often moved into circles you can&rsquo;t reach through your
            active network.
          </p>
        </div>

        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 mb-6">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-3">
            How pilots get this wrong
          </p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex gap-2">
              <span className="text-red-400 flex-shrink-0">✗</span>
              Sending the same mass message to 50 LinkedIn contacts
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 flex-shrink-0">✗</span>
              Asking &ldquo;Can I pick your brain?&rdquo; (vague, low-effort,
              subtly commodifying)
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 flex-shrink-0">✗</span>
              Attaching a resume without being asked
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 flex-shrink-0">✗</span>
              Asking for a job in the first message
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 flex-shrink-0">✗</span>
              Not following up within 24 hours after the conversation
            </li>
          </ul>
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 mb-6">
          <h3 className="text-base font-semibold text-slate-200 mb-4">
            The outreach message that works
          </h3>
          <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 text-sm text-slate-400 space-y-3 italic">
            <p>
              &ldquo;[Name] — I&rsquo;m a USAFA grad [class year],
              separating from the Air Force after [X years] flying [airframe].
              I&rsquo;ve been researching [their field/company/domain], and your
              work stood out — particularly [something specific you actually
              found].
            </p>
            <p>
              I&rsquo;d be grateful for 20 minutes of your time to understand
              how your world works. I&rsquo;m not looking for a position right
              now — I&rsquo;m trying to understand the landscape before I make
              any moves.
            </p>
            <p>
              Happy to work around your schedule — video call, phone, coffee if
              you&rsquo;re in [city].&rdquo;
            </p>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs text-slate-500">
            <div className="bg-slate-800/30 rounded p-3">
              <span className="text-emerald-400 font-semibold">USAFA alumni response rate:</span>{" "}
              60–70%
            </div>
            <div className="bg-slate-800/30 rounded p-3">
              <span className="text-slate-400 font-semibold">General cold outreach:</span>{" "}
              10–15%
            </div>
          </div>
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <h3 className="text-base font-semibold text-slate-200 mb-4">
            The 20-minute structure
          </h3>
          <div className="space-y-3">
            {[
              {
                time: "2 min",
                what: "Thank them. Explain why you reached out to them specifically — not a template.",
              },
              {
                time: "10 min",
                what: "Their story. How did they get to where they are? What surprised them? What do they wish they&rsquo;d known?",
              },
              {
                time: "10 min",
                what: "Your 2–3 specific, researched questions. Not &ldquo;What&rsquo;s it like?&rdquo; but something you could only ask someone who actually does this.",
              },
              {
                time: "3 min",
                what: "&ldquo;Who else would you suggest I speak with?&rdquo; This is the most important question in the conversation.",
              },
              {
                time: "24 hr",
                what: "Thank-you message referencing something specific from the conversation. Not a template. Not optional.",
              },
            ].map((row) => (
              <div
                key={row.time}
                className="flex gap-4 text-sm border-b border-slate-800/50 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-blue-400 font-mono text-xs w-10 flex-shrink-0 mt-0.5">
                  {row.time}
                </span>
                <span className="text-slate-400">{row.what}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-blue-600/5 border border-blue-500/20 rounded-lg p-4">
            <p className="text-xs text-slate-500">
              <strong className="text-blue-400">
                The one question that changes everything:
              </strong>{" "}
              At the end of the conversation, after you&rsquo;ve learned what
              you came to learn, ask: &ldquo;Is there anything I can help you
              with?&rdquo; Most of the time the answer is no. But the question
              signals you&rsquo;re not extracting — you&rsquo;re relating. And
              occasionally the answer is yes, and that&rsquo;s when the
              relationship becomes real.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 8-Week Protocol */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The 8-week protocol
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          Treat this like a training schedule. It&rsquo;s an engineering
          exercise, not a personality exercise.
        </p>

        <div className="space-y-4">
          {[
            {
              weeks: "Week 1–2",
              title: "Map what you have",
              actions: [
                "Write down every professional contact. Every single one.",
                "Categorize by domain: aviation/military, defense/aerospace, tech, finance, other.",
                "Note for each: what world do they operate in, what do they know you don&rsquo;t, who do they know you don&rsquo;t.",
                "Identify your existing structural holes — where are you not connected at all?",
              ],
            },
            {
              weeks: "Week 3–4",
              title: "Identify the gaps",
              actions: [
                "Where do you want to end up? What fields, companies, roles?",
                "Do you know anyone there? If not, do you know anyone who might?",
                "Find 10–15 specific people you want to talk to. Real people with real names.",
                "For each one: find something specific about their work that you can reference. Not their bio — something that shows you paid attention.",
              ],
            },
            {
              weeks: "Week 5–8",
              title: "Fill the gaps — 1 to 2 conversations per week",
              actions: [
                "Targeted, researched, respectful outreach. Not mass-broadcast.",
                "The goal is not to get a job. The goal is to understand how the world works.",
                "After every conversation: write a 10-minute debrief. What did you learn? What surprised you? Who did they suggest you talk to?",
                "Track who you talked to, what you learned, and what the next action is.",
              ],
            },
            {
              weeks: "Ongoing",
              title: "Give before you ask",
              actions: [
                "Every conversation includes: &ldquo;Is there anything I can help you with?&rdquo;",
                "Share relevant articles, introductions, or information — not to curry favor, but because it&rsquo;s the right way to operate.",
                "The research (Grant, 2013): in every profession studied, the top performers were the ones whose default orientation was to contribute value to others first.",
                "This is not naive. It&rsquo;s the strategy that compounds over 30 years when every other strategy burns out.",
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
                <h3 className="text-base font-semibold text-slate-200">
                  {phase.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {phase.actions.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-slate-600 flex-shrink-0 mt-0.5">
                      &bull;
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Your first five conversations */}
      <section className="mt-12 bg-blue-600/5 border border-blue-500/20 rounded-xl p-6 sm:p-8">
        <h3 className="text-base font-semibold text-slate-200 mb-4">
          Your first five conversations
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          Before you apply to anything, schedule these five conversations. In
          this order.
        </p>
        <div className="space-y-3">
          {[
            {
              n: "1",
              who: "A USAFA grad in your target role",
              why: "The alumni network is your single strongest structural asset. Response rates are dramatically higher. Use it first.",
            },
            {
              n: "2",
              who: "Someone at a company you admire",
              why: "Not HR. A working professional doing the kind of work you want to do. Learn what the day actually looks like.",
            },
            {
              n: "3",
              who: "Someone in a domain adjacent to yours",
              why: "If you&rsquo;re aviation-centric, talk to someone in tech. If you&rsquo;re defense, talk to someone in finance. Cross-domain fluency is built through conversation.",
            },
            {
              n: "4",
              who: "Someone senior enough to see the landscape",
              why: "A director, VP, or program manager. They see patterns and trends invisible at the entry level.",
            },
            {
              n: "5",
              who: "Someone who made this transition 2–3 years ago",
              why: "Recent enough to remember what the transition felt like. Senior enough to have landed somewhere. Most directly applicable intel available.",
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xs font-mono">
                {item.n}
              </span>
              <div>
                <span className="text-slate-200 font-medium">{item.who}</span>
                <span className="text-slate-500"> — {item.why}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-between">
        <Link
          href="/the-map"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          ← Stage 03: The Map
        </Link>
        <Link
          href="/the-search"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Stage 05: The Search →
        </Link>
      </div>

      <p className="mt-12 text-sm text-slate-600 italic">Blue Skies — 487</p>
    </div>
  );
}

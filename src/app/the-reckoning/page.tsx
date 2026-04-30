import Link from "next/link";

export const metadata = {
  title: "Stage 01: Who Are You Now | Blue Canopy",
  description:
    "The identity question nobody warns you about. Before strategy, before resume, before anything else — you have to figure out who you are when the jet is gone.",
};

export default function TheReckoning() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Stage 01 &mdash; The Pipeline
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
            Who are you now?
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The question nobody warns you about. Before strategy, before resume, before anything
            else &mdash; you have to reckon with what just changed.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* The actual problem */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The thing no one says out loud</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              You spent four years at USAFA being forged into a specific kind of person.
              Then however many years in the cockpit, getting really good at something
              that demands everything &mdash; your attention, your reflexes, your identity.
              Pilot is not a job. It is a complete self-concept. The jet defines your peer group,
              your schedule, your vocabulary, your stories, your sense of what a good day looks like.
            </p>
            <p>
              And then you leave. And civilians ask "what do you do?" and you say "I&rsquo;m
              transitioning out of the Air Force" and you watch their eyes glaze over slightly
              because they don&rsquo;t know what that means and honestly, right now, neither do you.
            </p>
            <p>
              This is not a crisis. It is a developmental phase with a name and a shape and a way through.
              But you have to actually go through it, not around it.
            </p>
          </div>
        </section>

        {/* Bridges Model */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The terrain</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            William Bridges spent decades studying why people struggle with transitions even when the
            change was chosen and wanted. His finding: we confuse the <em>change</em> (the external event &mdash;
            separation date, final flight, terminal leave) with the <em>transition</em> (the internal
            psychological process of letting one identity go and building a new one). The change happens
            in a day. The transition takes years.
          </p>
          <div className="space-y-4">
            {[
              {
                phase: "Ending",
                timing: "Starts before you leave",
                what: "Letting go of pilot identity, mission identity, unit identity, rank. The status, the competence, the belonging.",
                feel: "Loss, even when you chose this. Grief that feels weird because nothing bad happened.",
              },
              {
                phase: "The Neutral Zone",
                timing: "Months 0–18 post-sep",
                what: "The old identity is gone. The new one hasn't formed yet. You are in between. This is where most people panic and grab the first stable thing.",
                feel: "Anxiety. Creativity. Vulnerability. The feeling of being behind people who never served. Imposter syndrome in civilian rooms.",
              },
              {
                phase: "New Beginning",
                timing: "Whenever you stop rushing",
                what: "A professional identity that integrates service without being defined by it. You know what you bring. You can tell the story without a uniform.",
                feel: "Clarity. Momentum. The sense that your experience is an asset, not a liability to explain.",
              },
            ].map((phase) => (
              <div key={phase.phase} className="p-5 rounded-lg border border-slate-800 bg-slate-900/40">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-semibold text-slate-200">{phase.phase}</h3>
                  <span className="text-xs text-slate-600">{phase.timing}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">{phase.what}</p>
                <p className="text-sm text-slate-500 italic">{phase.feel}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500 leading-relaxed">
            The neutral zone is where the real development happens. The professionals who build the
            best civilian careers are the ones who can tolerate its ambiguity long enough for the right
            thing to emerge. This is not passivity. There is a difference between waiting because you&rsquo;re
            afraid and waiting because you&rsquo;re discerning.
          </p>
        </section>

        {/* Pilot-specific */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">
            If you flew, specifically
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Non-rated officers have identity complexity when they leave. Rated officers have more. Your
              identity was tied to a physical skill that is genuinely rare, that took years to acquire, and
              that most civilians literally cannot picture. &ldquo;I flew&rdquo; doesn&rsquo;t land the way
              &ldquo;I managed a $50M program&rdquo; does, even though the cognitive and leadership demands
              of the cockpit arguably exceed both.
            </p>
            <p>
              There&rsquo;s also the team dimension if you wore a specific patch &mdash; Wings of Blue, a
              fighter squadron, weapons school cadre, a special tactics unit. You didn&rsquo;t just fly &mdash;
              you were part of a specific lineage. That community is real and permanent. But it doesn&rsquo;t
              pay you. And you are going to meet civilians who have never heard of it and won&rsquo;t fully
              understand why it matters to you. That&rsquo;s okay. Not everything translates. Not everything
              needs to.
            </p>
            <p>
              The identity trap is this: you may find yourself performing &ldquo;former military pilot&rdquo;
              as a personality in civilian settings because it&rsquo;s the most legible thing you have.
              It&rsquo;s what gets the reaction. People perk up. It explains you instantly. The trap is staying
              there past the point where it serves you &mdash; because eventually it becomes a ceiling, not
              a credential.
            </p>
          </div>
        </section>

        {/* Fixed vs Growth mindset table */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The mindset fork</h2>
          <p className="text-slate-400 leading-relaxed mb-5">
            Carol Dweck&rsquo;s research on mindset has a specific application in career transitions that most
            people miss. The fixed-mindset trap for high-achievers is not "I can&rsquo;t learn new things."
            It&rsquo;s subtler: <em>I should already know how to do this.</em> You have a degree, commendations,
            flight hours. And now you feel like a beginner. The response to that feeling determines almost everything.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 pr-4 text-slate-400 font-medium">Fixed mindset</th>
                  <th className="text-left py-2 text-slate-300 font-medium">Growth mindset</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["I should already know how civilian hiring works.", "I am actively learning how civilian hiring works."],
                  ["Networking feels like performing.", "Networking feels like learning."],
                  ["Asking questions reveals weakness.", "Asking questions reveals curiosity."],
                  ["Rejection means I don't belong here.", "Rejection means this wasn't the right fit — yet."],
                  ["I need to have this figured out.", "I'm running experiments to figure it out."],
                ].map(([fixed, growth]) => (
                  <tr key={fixed}>
                    <td className="py-3 pr-4 text-slate-400 italic align-top">&ldquo;{fixed}&rdquo;</td>
                    <td className="py-3 text-slate-200 align-top">&ldquo;{growth}&rdquo;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Transition Inventory */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-slate-100 mb-2">The transition inventory</h2>
          <p className="text-sm text-slate-500 mb-6">
            Do this before you write a resume or send a networking message. Write honestly. No one else needs to see it.
          </p>
          <div className="space-y-5">
            {[
              {
                q: "What am I letting go of?",
                prompt:
                  "Not just the job. The identity, the status, the competence, the community, the vocabulary, the unit, the mission. Name them specifically.",
              },
              {
                q: "What am I afraid of?",
                prompt:
                  '"I\'m afraid I won\'t find a job" is too vague. "I\'m afraid I\'ll take the first offer because I panic and spend five years in a job I hate" is honest.',
              },
              {
                q: "What do I already bring that has value here?",
                prompt:
                  "Not credentials — capacities. The ability to function under pressure. To lead people who don't want to be led. To brief complex information to people who need a decision, not a briefing.",
              },
              {
                q: "What do I not yet know that I need to learn?",
                prompt:
                  "Salary negotiation. How civilian hiring works. How performance reviews work. What a good civilian boss looks like. What I actually want.",
              },
              {
                q: "Who sees me most clearly right now?",
                prompt:
                  "Not who tells you what you want to hear. Who tells you what they actually see? Call them before you start applying.",
              },
            ].map((item, i) => (
              <div key={item.q} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-mono flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-slate-200 mb-1">{item.q}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The airline question */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The airline question</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              If you have a rated background and commercial hours, the airline question is real and
              you should answer it honestly before you do anything else. The airlines are hiring.
              The pay is good and getting better. The lifestyle is known. The community is familiar.
            </p>
            <p>
              Some people should go to the airlines. Not because it&rsquo;s the default, but because
              it genuinely fits their actual life. If you want to fly, want schedule predictability,
              want the community, want to build retirement around a pension and seniority number &mdash;
              there is no shame in that. It&rsquo;s a legitimate life.
            </p>
            <p>
              The trap is choosing the airlines because you don&rsquo;t know what else to do and at
              least you know how to fly. That&rsquo;s not a career decision. That&rsquo;s the neutral zone
              making you grab the first stable thing.
            </p>
            <p>
              Stage 03 &mdash; <Link href="/the-map" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">The Map</Link> &mdash;
              goes through all six paths with honest comp ranges and tradeoffs, including airlines vs. civilian careers.
              Do this identity work first, then read that.
            </p>
          </div>
        </section>

        {/* What not to do */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">What not to do right now</h2>
          <ul className="space-y-3 text-slate-400">
            {[
              "Don't send your resume anywhere until you've done the transition inventory above.",
              "Don't accept the first offer because you're anxious — unless the first offer is genuinely great.",
              "Don't perform confidence you don't feel. Civilian hiring managers can smell it.",
              "Don't let \"I used to fly jets\" become your entire identity in a new setting. It gets you in the room once. It won't keep you there.",
              "Don't skip this stage. The people who struggle most are the ones who jumped straight to tactics.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-slate-700 mt-1 flex-shrink-0">—</span>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Nav forward */}
        <section className="border-t border-slate-800 pt-10">
          <p className="text-sm text-slate-500 mb-6">
            When you&rsquo;ve done the transition inventory and sat with it for a few days, move to Stage 02.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/know-your-gifts"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Stage 02: Know Your Gifts &rarr;
            </Link>
            <Link
              href="/the-map"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
              Stage 03: The Map
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

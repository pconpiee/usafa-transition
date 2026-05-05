import Link from "next/link";

const stages = [
  {
    num: "01",
    href: "/the-reckoning",
    title: "Who Are You Now",
    desc: "The question nobody asks but everybody is asking. Your identity just got complicated. Start here.",
  },
  {
    num: "02",
    href: "/know-your-gifts",
    title: "Know Your Gifts",
    desc: "Not StrengthsFinder. What you actually bring, translated into language civilians understand.",
  },
  {
    num: "03",
    href: "/the-map",
    title: "The Map",
    desc: "The civilian career ecosystem, explained honestly. Six paths. The airline fork. How hiring actually works.",
  },
  {
    num: "04",
    href: "/networking",
    title: "Networking",
    desc: "Undertaught, underused, and learnable. The research on why it works and how to actually do it.",
  },
  {
    num: "05",
    href: "/the-search",
    title: "The Search",
    desc: "A stage-gated system for running your job search without wasting effort or losing track.",
  },
  {
    num: "06",
    href: "/application-package",
    title: "Applications",
    desc: "The resume, cover letter, and bullet translation work. What the machine is looking for vs. what the human is.",
  },
  {
    num: "07",
    href: "/interview-prep",
    title: "Interviews",
    desc: "Behavioral interviewing is closer to a stan eval than it feels. Here's how to run your story bank.",
  },
  {
    num: "08",
    href: "/managing-the-pipeline",
    title: "Managing the Pipeline",
    desc: "Competing offers, exploding deadlines, timeline conflicts. How to handle it without burning bridges.",
  },
  {
    num: "09",
    href: "/negotiation",
    title: "Negotiation",
    desc: "Most people leave money on the table here. The frameworks, the scripts, and what to do when they offer $Y.",
  },
  {
    num: "10",
    href: "/first-90-days",
    title: "First 90 Days",
    desc: "The research on what actually matters after you land. You are not the flight lead anymore — here's what that means.",
  },
  {
    num: "11",
    href: "/the-long-game",
    title: "The Long Game",
    desc: "What the 6-month, 1-year, and 3-year version of a civilian career actually looks like.",
  },
  {
    num: "12",
    href: "/the-chain",
    title: "The Chain",
    desc: "At some point you reach back. This is why it matters — and what it looks like when you do it well.",
  },
];

const tools = [
  {
    href: "/comp-translator",
    title: "Comp Translator",
    desc: "Your military total comp is probably higher than you think. Translate it to a civilian market number before any salary conversation.",
    tag: "Tool",
  },
  {
    href: "/timeline",
    title: "Timeline Builder",
    desc: "Enter your separation date. Get a personalized 18-month checklist built from what the people who did it well actually did.",
    tag: "Tool",
  },
  {
    href: "/bold-face",
    title: "Bold Face",
    desc: "The things you memorize cold because when the moment comes, you won't have time to think.",
    tag: "Drills",
  },
  {
    href: "/resources",
    title: "Resources",
    desc: "Honest ratings of the programs, nonprofits, and tools available to you. What's worth your time and what isn't.",
    tag: "Intel",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 relative">
          <p className="text-blue-300 text-sm font-medium tracking-wide uppercase mb-4">
            For USAFA grads leaving active duty &mdash; especially those who flew
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight tracking-tight">
            You know how to fly.
            <br />
            <span className="text-slate-400">The civilian landing is harder.</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#where-are-you"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              Find your starting point
            </Link>
            <Link
              href="/paths"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-700 transition-colors"
            >
              See the paths
            </Link>
          </div>
          <div className="mt-8 space-y-3 text-base text-slate-400 max-w-2xl leading-relaxed">
            <p>
              Separation is a leap into the unknown: the civilian world. For
              some, it&rsquo;s the plan. For others, a surprise. Either way,
              the landing is smoother when you&rsquo;ve got a plan and a{" "}
              <span className="text-blue-400">canopy</span>.
            </p>
            <p className="text-slate-500">
              Here&rsquo;s to good ships &mdash; and soft landings.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Separated 2021. Built after three years coaching grad students and tech professionals.
            This is the good gouge I wish someone had handed me at the gate.
          </p>
        </div>
      </section>

      {/* Where are you right now? */}
      <section id="where-are-you" className="border-t border-slate-800 bg-slate-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg font-semibold text-slate-200 mb-1">Where are you right now?</h2>
          <p className="text-sm text-slate-500 mb-6">Pick your situation. You&rsquo;ll land somewhere useful in under 10 seconds.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                label: "I have 18+ months until separation",
                sub: "Start at the beginning. You have the runway — use it.",
                href: "/the-reckoning",
                tag: "Stage 01",
              },
              {
                label: "I have 6–12 months left",
                sub: "Skip the theory for now. Get to the network and the search.",
                href: "/networking",
                tag: "Stage 04",
              },
              {
                label: "I've already separated",
                sub: "Start at Stage 04. Do Stages 01–03 in parallel, not in sequence.",
                href: "/networking",
                tag: "Stage 04",
              },
              {
                label: "I'm Guard/Reserve, weighing full civilian",
                sub: "Start with the paths. The picture looks different from your position.",
                href: "/paths",
                tag: "Paths",
              },
              {
                label: "I'm already out and working — but reassessing",
                sub: "Skip to The Long Game. The question now isn't placement — it's trajectory.",
                href: "/the-long-game",
                tag: "Stage 11",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group p-4 rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors text-sm leading-snug">
                    {item.label}
                  </p>
                  <span className="text-xs font-mono text-slate-600 flex-shrink-0 pt-0.5">{item.tag}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to use this */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg font-semibold text-slate-200 mb-4">How to use this</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-slate-400">
            <div>
              <p className="font-medium text-slate-300 mb-1">Work the pipeline in sequence.</p>
              <p>The 12 stages are designed to build on each other. Jumping straight to interview prep without doing the identity work first is like briefing a sortie without a threat assessment.</p>
            </div>
            <div>
              <p className="font-medium text-slate-300 mb-1">Use the tools when you need them.</p>
              <p>The Comp Translator, Timeline, and Bold Face drills aren&rsquo;t stages &mdash; they&rsquo;re tools you&rsquo;ll reach for at specific moments. They&rsquo;re in the nav.</p>
            </div>
            <div>
              <p className="font-medium text-slate-300 mb-1">Built for the person I was in 2021.</p>
              <p>Separated that year. Spent three years coaching grad students and tech professionals through transitions I&rsquo;d already made. Now bringing it back to the long blue line &mdash; the gouge, the honest map, the things I wish someone had handed me at the gate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 12 Stages */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">The pipeline</h2>
          <p className="mt-2 text-slate-500 text-sm">
            Twelve stages from &ldquo;I&rsquo;m leaving soon&rdquo; to &ldquo;I&rsquo;m thriving and helping the next group.&rdquo;
          </p>
        </div>

        <div className="space-y-2">
          {stages.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-start gap-4 p-4 rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
            >
              <span className="font-mono text-sm text-slate-600 group-hover:text-blue-400 transition-colors pt-0.5 flex-shrink-0 w-6">
                {s.num}
              </span>
              <div>
                <h3 className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Tools</h2>
          <p className="text-slate-500 text-sm mb-8">Reach for these at the right moment in the pipeline.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group block p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
              >
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                  {t.tag}
                </span>
                <h3 className="mt-1.5 font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The numbers */}
      <section className="border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-xs text-slate-600 uppercase tracking-wide mb-6">Why this matters</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: "62%", label: "veterans underemployed at 6.5 years out" },
              { num: "18mo", label: "head start the people who did it well actually took" },
              { num: "4/10", label: "average veteran rating of TAP" },
              { num: "4 in 10", label: "veterans have a job offer in hand on their separation day" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-slate-100">{s.num}</p>
                <p className="mt-1 text-xs text-slate-600 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The quick view — where to focus by timeline */}
      <section className="border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg font-semibold text-slate-200 mb-1">The quick view</h2>
          <p className="text-sm text-slate-500 mb-6">Where you are determines where to start. The stages are a calendar, not a curriculum.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-2 pr-6 text-slate-500 font-medium w-36">Where you are</th>
                  <th className="text-left py-2 text-slate-400 font-medium">What to focus on</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {[
                  {
                    when: "18+ months out",
                    focus: "Stages 01–03. Identity, inventory, vision. No urgency yet — use it.",
                  },
                  {
                    when: "12 months out",
                    focus: "Stages 04–06. Network, market research, comp baseline. Start building relationships before you need them.",
                  },
                  {
                    when: "6 months out",
                    focus: "Stages 05–08. Active search, positioning, managing the pipeline. This is the sprint.",
                  },
                  {
                    when: "3 months out",
                    focus: "Stages 08–10. Offers, negotiation, the landing. Don't rush past the negotiation stage.",
                  },
                  {
                    when: "Already separated",
                    focus: "Start at Stage 04. Stages 01–03 still matter — do them in parallel, not in sequence.",
                  },
                ].map((row) => (
                  <tr key={row.when}>
                    <td className="py-3 pr-6 text-blue-400 font-mono text-xs align-top whitespace-nowrap">{row.when}</td>
                    <td className="py-3 text-slate-400 text-sm leading-relaxed">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

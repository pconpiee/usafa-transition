import Link from "next/link";

const tools = [
  {
    href: "/playbook",
    title: "The Playbook",
    desc: "What the highest-performing USAFA grads did when they left. Not theory. The actual moves, mindset, and sequence.",
    tag: "Start here",
  },
  {
    href: "/comp-translator",
    title: "Know Your Worth",
    desc: "Your O-3 pay is worth more than you think. Translate military total comp to civilian equivalents.",
    tag: "Tool",
  },
  {
    href: "/resources",
    title: "Resource Ratings",
    desc: "Honest ratings of every transition program. What actually works, what's performative, what's missing.",
    tag: "Intel",
  },
  {
    href: "/timeline",
    title: "Timeline Builder",
    desc: "Enter your separation date. Get a personalized checklist built from the 18-month outlier standard.",
    tag: "Tool",
  },
  {
    href: "/bold-face",
    title: "Bold Face",
    desc: "Memorized emergency procedures for your transition. The 60-second story. The response to rejection. The ask.",
    tag: "Drills",
  },
  {
    href: "/first-90-days",
    title: "First 90 Days",
    desc: "The research on what matters after you land. Early wins, trust-building, and the five-year architecture.",
    tag: "Post-sep",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 relative">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
            For USAFA grads leaving active duty
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight tracking-tight">
            You&rsquo;re not behind.
            <br />
            <span className="text-slate-400">You&rsquo;re deploying to a new theater.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            The research says 62% of veterans are underemployed 6.5 years out.
            The outliers&mdash;the ones who crushed it&mdash;did specific things, in a
            specific order, with a specific mindset. This site is their playbook.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/playbook"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              Read the Playbook
            </Link>
            <Link
              href="/comp-translator"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-700 transition-colors"
            >
              Know Your Worth
            </Link>
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "62%", label: "of veterans underemployed at 6.5 years" },
              { num: "46.2", label: "per 100K suicide rate in first year post-sep" },
              { num: "4/10", label: "TAP rating from actual veterans" },
              { num: "#3", label: "USAFA AOG alumni support vs. West Point, Annapolis" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-bold text-slate-100">
                  {s.num}
                </p>
                <p className="mt-2 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conviction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">
          Why this exists
        </h2>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            There are 45+ federal transition programs. RAND found virtually no
            evidence they work. TAP is associated with <em>lower</em> wages. The
            AOG is mostly a fundraising operation. Everything is fragmented, and
            the burden of stitching it together falls on you at the most
            stressful moment of your career.
          </p>
          <p>
            Meanwhile, the grads who thrived did specific things: they started 18
            months early, did 50-100 informational interviews, stacked
            credentials, chose geography intentionally, and optimized for
            trajectory over first-job comp. They treated transition like a
            military campaign.
          </p>
          <p>
            This site puts their playbook in your hands. Every tool here is
            free. No login. No paywall. No fundraising ask.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
          The tools
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group block p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
            >
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                {t.tag}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {t.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* The Emotional Arc */}
      <section className="border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
            What you&rsquo;re going to feel
          </h2>
          <p className="text-slate-400 mb-8">
            Every outlier went through this arc. Even the most successful. It is
            not a sign of weakness. It is the terrain.
          </p>
          <div className="space-y-6">
            {[
              {
                phase: "Anticipatory anxiety",
                time: "12-18 months out",
                feel: '"Who am I without the uniform?"',
              },
              {
                phase: "Imposter syndrome",
                time: "0-6 months post",
                feel: "Feeling years behind civilian peers who never served.",
              },
              {
                phase: "Translation frustration",
                time: "0-12 months",
                feel: '"$50M weapons program manager" doesn\'t land like "PM at Google."',
              },
              {
                phase: "Identity reconstruction",
                time: "6-18 months",
                feel: "Building a new professional identity that integrates service without being defined by it.",
              },
              {
                phase: "Acceleration",
                time: "18-36 months",
                feel: "Military-trained leaders often advance faster than civilian peers once they find footing.",
              },
              {
                phase: "Giving back",
                time: "3+ years",
                feel: "Reaching back to help the next wave. The chain continues.",
              },
            ].map((item, i) => (
              <div
                key={item.phase}
                className="flex gap-4 sm:gap-6 items-start"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-mono text-slate-500">
                  {i + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-semibold text-slate-200">
                      {item.phase}
                    </h3>
                    <span className="text-xs text-slate-600">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 italic">
                    {item.feel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "About | Blue Canopy",
  description:
    "Who built Blue Canopy, why it exists, and what makes it different from every other transition resource you've already ignored.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
            Who built this and why
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The short version: a USAFA grad who flew, got out, figured it out the hard way, and built the resource he wished had existed.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The transition, briefly</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I graduated from USAFA. I flew. I separated in 2021 &mdash; the transition was harder than
              expected, and not in the ways the briefings warned about.
            </p>
            <p>
              What followed was three years coaching grad students and civilians navigating similar crossroads
              in the tech space. Somewhere in there the question became: what if I took all of it &mdash;
              the frameworks, the network, the hard-won gouge &mdash; and brought it back to the long blue line?
            </p>
            <p>
              This site is the answer. Not advice from someone watching from the sidelines. From someone who
              has been on the other side of the jump and spent years helping others find their footing on a
              different kind of terrain.
            </p>
            <p>
              It&rsquo;s what I would hand my past self the week I decided to separate.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Why free, no login, no paywall</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              There are good people building transition coaching businesses. That&rsquo;s not this.
              A coaching business requires converting skeptics, managing relationships at scale,
              and structuring content to create demand for more content. Those incentives are not
              always aligned with getting you to the right answer as fast as possible.
            </p>
            <p>
              This site has one goal: give every USAFA grad who finds it a genuinely better map than
              they had before. That&rsquo;s it. If it helps you, tell someone else. If something&rsquo;s
              wrong or missing, use the feedback button at the bottom of the screen.
            </p>
            <p>
              The USAFA community is small enough that I&rsquo;d hear about it if this were useful,
              and small enough that I&rsquo;d hear about it louder if it weren&rsquo;t.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">What makes this different</h2>
          <div className="space-y-3">
            {[
              {
                label: "Practitioner-built, not aggregated.",
                desc: "Every framework here has been tested personally or tested in close proximity. The Bridges model, the negotiation frameworks, the networking research — all of it has been run through the filter of actual pilot-to-civilian transitions, not just read about.",
              },
              {
                label: "USAFA-specific, not veteran-generic.",
                desc: "The TAP program is built for E-5s separating from the Army. It is not built for USAFA pilots going into corporate America. The identity dynamics, the compensation gaps, the network structure, and the cultural translation challenges are different. This site addresses those specifically.",
              },
              {
                label: "Honest about the hard parts.",
                desc: "The airline trap section exists because most transition resources won't tell you that choosing the airlines because you don't know what else to do is deferred decision-making, not a career plan. Every stage has a 'where people stall here' note because the stall points are usually more useful than the roadmap.",
              },
              {
                label: "No conversion goal.",
                desc: "There's nothing to buy. The Comp Translator, the 12 stages, the Bold Face drills — all of it is free and ungated. The one thing the site asks for is a conversation, and only if you want it.",
              },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-lg border border-slate-800 bg-slate-900/30">
                <p className="font-medium text-slate-200 mb-1">{item.label}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-slate-100 mb-2">The conversation you can have</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            At the bottom of Stage 01, there&rsquo;s a one-line form: name, email, and your rough
            separation date. If you fill it out, you&rsquo;ll get a personal reply — not an autoresponder.
            An offer to schedule 30 minutes. No script. No agenda. Just a conversation with someone
            who&rsquo;s been on the other side.
          </p>
          <p className="text-sm text-slate-500">
            You don&rsquo;t have to be ready. You don&rsquo;t have to have it figured out.
            That&rsquo;s exactly when the conversation is most useful.
          </p>
          <div className="mt-6">
            <Link
              href="/the-reckoning#im-in"
              className="inline-flex px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Go to Stage 01 &rarr;
            </Link>
          </div>
        </section>

        <section className="border-t border-slate-800 pt-10 text-center">
          <p className="text-slate-500 text-sm italic mb-2">
            &ldquo;There are good ships and wood ships, and ships that sail the seas.<br />
            But the best ships are friendships, and may they always be.&rdquo;
          </p>
          <p className="text-slate-400 text-sm font-medium tracking-wide">Blue Skies &mdash; 487</p>
        </section>

      </div>
    </div>
  );
}

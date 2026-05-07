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
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight text-balance">
            Who built this and why
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Patrick Connolly. USAFA &lsquo;16. Space Ops. Separated 2021.
            The path since then has been anything but straight &mdash; which is exactly the point.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">The actual story</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I didn&rsquo;t fly. I was a Space Operations Officer &mdash; five years of
              night shifts watching satellites, then a few more helping the Air Force figure
              out what the Space Force was supposed to be. It was meaningful work. I left
              it anyway.
            </p>
            <p>
              The plan after I separated was nonprofit work. My wife and I had a strong
              sense we were supposed to go to Ethiopia and help run a mission there. So we
              did. About six months in, a civil war started and we got evacuated.
            </p>
            <p>
              Back in Houston, I started a business with my brother-in-law. It didn&rsquo;t
              work either. By the end of that year I was a jobless veteran, fifty-five job
              applications deep, with zero responses. I was applying to anything that paid
              &mdash; Director of Strategy down to grocery store bagger and a long list in
              between. My wife had just been diagnosed with something the doctors thought
              might be cancer. We were paying $890 a month for health insurance and still
              writing $3,000 checks at the pharmacy. VA disability didn&rsquo;t close the
              gap. I had also told myself I would never work in space again, and never
              anywhere near the government again. Both of those promises were about to age
              poorly.
            </p>
            <p>
              The first space job I tried was Slingshot Aerospace. It looked like a layup
              &mdash; three of their founders had been in my squadron, half their leadership
              was USAFA, and their whole product was space domain awareness, which was
              literally my job. Their portal couldn&rsquo;t physically receive my CV. I
              ended up reading it line-by-line over the phone to their HR lead, who was kind
              about it. They never replied.
            </p>
            <p>
              The job that did reply was Leanspace, a small French satellite software
              startup I&rsquo;d never heard of. Three rounds of interviews and they asked
              how soon I could move to France. My wife looked at me like I was crazy. Two
              weeks after the offer we sold the car and most of what we owned. A month
              later we landed in Paris.
            </p>
            <p>
              We were on a train pulling out of Paris, headed to my new job in Strasbourg,
              when my brand-new French phone buzzed. It was Slingshot&rsquo;s rejection
              email, finally arriving. The timing felt like a wink.
            </p>
            <p>
              I spent the next three years at Leanspace &mdash; Product Manager, then
              Solutions Architect, then opening the American office. We made it to the final
              three of a Space Force contract as the only non-US vendor shortlisted. I
              helped raise around &euro;14.5M in grants and closed a Series A. For the first
              six months of all that, I was sure I was about to get fired. Imposter syndrome
              is real and predictable. It also doesn&rsquo;t survive contact with brilliant
              people who haven&rsquo;t yet figured out what you&rsquo;re capable of. They
              eventually do. You just have to stay long enough to let them.
            </p>
            <p>
              I&rsquo;m now Director of New Space Initiatives at the International Space
              University &mdash; strategy and partnerships across space agencies,
              governments, and commercial space.
            </p>
            <p className="text-slate-300">
              If you take one thing from that, take this: the system is not built to receive
              you. The companies that should obviously hire you probably won&rsquo;t. The
              right thing usually shows up sideways, on a timeline you didn&rsquo;t pick.
              Step anyway. Everything follows from that.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Why this site exists</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Most career advice skips the harder question. It teaches you to translate your
              bullets, write a better LinkedIn, prepare for behavioral interviews. Useful,
              but downstream. Upstream is who you are when the uniform comes off.
            </p>
            <p>
              For me that question got answered before I separated. My identity is rooted in
              God. That part stayed steady when everything around it shifted &mdash; Ethiopia,
              the failed business, the move to France, the imposter syndrome. The wild
              moves only look powerful in retrospect because the foundation underneath them
              didn&rsquo;t move.
            </p>
            <p>
              If you don&rsquo;t yet know where your identity is rooted, sit with that
              before you sprint at the job search. It&rsquo;s the most important work you
              can do, and the most skipped. No site can do it for you. Stage 01 is a place
              to start, not a place to finish.
            </p>
            <p>
              If you do know &mdash; if your foundation is settled &mdash; this site is for
              the rest of it. Translation. Networking. Comp. The honest map of where you
              might go and what each path actually costs. I made most of the mistakes the
              site warns about. This is the map I wish someone had handed me at the gate.
            </p>
          </div>
        </section>

        {/* The hill */}
        <section className="border-l-4 border-blue-500 pl-5">
          <p className="text-slate-300 leading-relaxed italic">
            &ldquo;There are lots of wars to fight. Let love be the hill you die on.&rdquo;
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            A mentor said this to me once. It&rsquo;s the filter every yes has run through
            since &mdash; Ethiopia during a civil war, France for a satellite startup, and
            now this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">What makes this different</h2>
          <div className="space-y-3">
            {[
              {
                label: "Built from inside the problem.",
                desc: "Not a consulting product built from research. Every framework here has been tested personally — the identity work, the networking grind, the negotiation, the first-90-days navigation. I have made most of the mistakes this site warns about.",
              },
              {
                label: "USAFA-specific, not veteran-generic.",
                desc: "The TAP program is built for E-5s separating from the Army. It is not built for Academy grads going into corporate America, defense-tech, or European startups. The identity dynamics, the compensation gaps, the network structure, and the cultural translation challenges are specific. This site addresses those specifically.",
              },
              {
                label: "Honest about what I don't know.",
                desc: "I'm a space ops officer, not a pilot. I don't know the airlines path from the inside — the content there comes from the people who do. Where I have direct experience I say so. Where I'm synthesizing from other people's paths I say that too.",
              },
              {
                label: "No conversion goal.",
                desc: "There's nothing to buy. The Comp Translator, the 12 stages, the Bold Face drills — all of it is free and ungated. The only thing the site asks for is a conversation, and only if you want it.",
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
            separation date. If you fill it out, you&rsquo;ll get a personal reply &mdash; not an autoresponder.
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
          <p className="text-slate-400 text-sm font-medium tracking-wide">Blue Skies &mdash; 487</p>
        </section>

      </div>
    </div>
  );
}

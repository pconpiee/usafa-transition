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
            J. Patrick Connolly. USAFA &lsquo;16. Space Ops. Separated 2021.
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
              I didn&rsquo;t fly. I was a Space Operations Officer &mdash; five years operating the
              $17.5B US Space Surveillance Network at the Combined Space Operations Center, tracking
              threats to on-orbit assets, and helping write the Space Force&rsquo;s Space Domain
              Awareness Concept of Operations during the Air Force-to-Space Force transition.
            </p>
            <p>
              I separated in 2021. The plan was nonprofit work &mdash; I went to Ethiopia with my wife
              to help run a mission there. A civil war had other ideas, and we were evacuated.
              Back in the US, I started a business with my brother-in-law. Then a French satellite
              software startup called Leanspace took a chance on me &mdash; partly because USAFA
              taught me Raptor, and they needed someone who could actually code.
            </p>
            <p>
              I spent three years at Leanspace: Product Manager, Solutions Architect, then US Business
              Development. I opened the American office, ran the capture that got us into the final
              three of a Space Force contract (the only non-US vendor shortlisted), and helped
              co-author ~&euro;14.5M in grants to CNES, ESA, and France 2030. The Series A closed.
              I was based in Strasbourg the whole time.
            </p>
            <p>
              Now I&rsquo;m Director of New Space Initiatives at the International Space University &mdash;
              strategy and partnerships across space agencies, governments, and the commercial sector.
              I&rsquo;m also in the inaugural cohort of the Coller Deep-Tech MBA at Tel Aviv University.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">Why this site exists</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Along the way I kept finding the same thing: the most boring-sounding skills were
              the most transferable. Writing performance bullets for Airmen turned out to be the
              same skill that helps junior salespeople win awards and senior developers get promoted.
              The ability to brief a threat environment is the same as the ability to run a board
              update. Identity, translated.
            </p>
            <p>
              I also noticed that most people &mdash; not just veterans &mdash; don&rsquo;t know
              what they want to be when they grow up. They follow the path of the people around them,
              or chase something they decided at 16 and never actually investigated. I went into
              the Air Force wanting to become a missionary. What I was actually chasing was
              adventure, and a deep need to invest in people wherever they are and whatever they believe.
              The missionary part was a form, not the function.
            </p>
            <p>
              Blue Canopy exists because the USAFA community deserves a guide built specifically for
              them &mdash; not a repurposed Army TAP deck, not generic career advice. Something that
              knows what it means to leave a world where your identity, your peer group, your
              vocabulary, and your sense of a good day were all defined by the same institution.
            </p>
            <p>
              This is the map I wish someone had handed me at the gate.
            </p>
          </div>
        </section>

        {/* The hill */}
        <section className="border-l-4 border-blue-500 pl-5">
          <p className="text-slate-300 leading-relaxed italic">
            &ldquo;There are lots of wars to fight. Lots of hills to die on. Choose wisely.&rdquo;
          </p>
          <p className="mt-3 text-slate-400 leading-relaxed italic">
            A mentor told me once: &ldquo;Let love be the hill you die on.&rdquo;
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            That filter has shaped every yes since. It took me to Ethiopia during a civil war,
            to France to help a satellite startup, and now to this site.
            It will keep shaping what I say yes to.
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

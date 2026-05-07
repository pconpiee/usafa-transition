import Link from "next/link";
import StageNav from "@/components/StageNav";

export default function TheChainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 12 of 12 — The Chain
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight text-balance">
        The Chain
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        You didn&rsquo;t get here on your own. Someone sent you this link, told
        you about a company, made a call for you, or just told you the truth
        about what it was going to be like.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        The chain only works if people who made it through turn around and reach
        back. This is the last stage — and the one that makes the whole thing
        matter.
      </p>

      {/* TL;DR */}
      <div className="mt-6 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">TL;DR</p>
        <ul className="space-y-1">
          {[
            "How to turn around and pull the next person through",
            "Low-ask, high-trust ways to stay in the game without burning out",
            "Read fully — this is the one most people skip and the one the community needs most",
          ].map((item) => (
            <li key={item} className="text-sm text-slate-400 flex gap-2">
              <span className="text-slate-500 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What the chain is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">
          What the chain actually is
        </h2>
        <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
          <p>
            At USAFA, the upperclassmen who made the biggest difference weren&rsquo;t the ones
            with the most impressive records. They were the ones who turned around. Who remembered
            what it felt like not to know, and showed up for the people who came after them.
            The institution ran on that chain. It still does.
          </p>
          <p>
            The same principle applies here. The mission isn&rsquo;t your career milestone.
            It&rsquo;s producing the next wave of people who can land well.
          </p>
          <p>
            And right now &mdash; in the months right after separation, when identity is in flux,
            financial pressure is real, and the professional network is still forming &mdash; what
            people need most isn&rsquo;t always a LinkedIn introduction. It&rsquo;s a check-in
            from someone who has been in that exact place and can say honestly: this is what it
            was like, this is what helped, you&rsquo;re not behind.
          </p>
          <p>
            That kind of presence &mdash; low-ask, high-trust, just showing up &mdash; is the
            thing no org, no resource, and no website can replicate. Only people who&rsquo;ve
            been through it can provide it.
          </p>
          <p>
            The problem is that most people who transition successfully disappear into their
            civilian lives and never turn around. Not out of malice &mdash; out of busyness,
            distance, and the assumption that someone else is handling it.
          </p>
          <p>
            No one else is handling it.
          </p>
        </div>
      </section>

      {/* The research on giving */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The evidence for giving
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Adam Grant&rsquo;s research (<em>Give and Take</em>, 2013) found that
          the highest-performing professionals in multiple fields are givers —
          not takers or matchers. The key finding:
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4">
          <p className="text-sm text-slate-300 font-medium">
            Givers are both the most and least successful professionals. The
            difference is in how they give.
          </p>
          <div className="space-y-3 text-sm text-slate-400">
            <p>
              Givers who burn out are giving indiscriminately — time they
              don&rsquo;t have, to people who don&rsquo;t give back, in ways
              that take too long. Givers who thrive give in high-leverage ways
              that align with their expertise and don&rsquo;t collapse their
              own output.
            </p>
            <p>
              For a transition veteran, high-leverage giving looks specific:
            </p>
          </div>
          <ul className="space-y-2">
            {[
              "A 20-minute phone call with someone who just decided to separate",
              "One honest email about what the first job was actually like",
              "A LinkedIn introduction to someone who can open a door",
              "Reviewing someone's resume and saying what isn't working",
              "Telling them the truth about a company before they take an offer",
              "Forwarding this site to one person who needs it",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-400">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Practical structure */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Making it sustainable
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          You cannot give everything to everyone. You can give something
          to the right people.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              cap: "Time: 1–2 hours/month",
              what: "That's all. One to two calls, conversations, or emails. Consistent is better than occasional bursts of intensity followed by nothing.",
            },
            {
              cap: "Scope: Your specific experience",
              what: "You can only speak with authority about the path you actually took. That's still enormously valuable to someone who is about to take a similar one.",
            },
            {
              cap: "Format: What works for you",
              what: "Phone calls, LinkedIn messages, a coffee, a review. Pick the format that has the lowest friction for you so you actually do it.",
            },
            {
              cap: "Boundary: It's OK to say no",
              what: "Not every request is one you can or should take. \"I'm not the right person for this\" is a complete sentence. Refer on where you can.",
            },
          ].map((item) => (
            <div key={item.cap} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-sm">
              <p className="text-blue-400 font-medium mb-2">{item.cap}</p>
              <p className="text-slate-400">{item.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The legacy question */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">
          The legacy question
        </h2>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4 text-sm text-slate-400 leading-relaxed">
          <p>
            Ten years from now, someone will be where you were when you first
            started reading this site. They will have just decided to separate.
            They will be scared in a way they won&rsquo;t admit to anyone who
            isn&rsquo;t in the same place.
          </p>
          <p>
            The chain question is: will you be findable when they look for
            someone who has been through this? And when they find you, will you
            pick up?
          </p>
          <p>
            That&rsquo;s the whole thing. Not a grand gesture. Not a nonprofit.
            Just a willingness to be in the formation.
          </p>
          <p className="text-slate-300 font-medium pt-2">
            The chain doesn&rsquo;t break because of you.
          </p>
        </div>
      </section>

      {/* Full pipeline navigation */}
      <section className="mt-16 bg-slate-900/70 border border-slate-800 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-slate-400 mb-4">
          Back to the beginning
        </h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { href: "/", label: "Home" },
            { href: "/the-reckoning", label: "Stage 01: The Reckoning" },
            { href: "/know-your-gifts", label: "Stage 02: Know Your Gifts" },
            { href: "/the-map", label: "Stage 03: The Map" },
            { href: "/networking", label: "Stage 04: Networking" },
            { href: "/the-search", label: "Stage 05: The Search" },
            { href: "/application-package", label: "Stage 06: Applications" },
            { href: "/interview-prep", label: "Stage 07: Interviews" },
            { href: "/managing-the-pipeline", label: "Stage 08: Managing the Pipeline" },
            { href: "/negotiation", label: "Stage 09: Negotiation" },
            { href: "/first-90-days", label: "Stage 10: First 90 Days" },
            { href: "/the-long-game", label: "Stage 11: The Long Game" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-500 hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-blue-400/5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Where people stall */}
      <div className="mt-8 border-l-2 border-amber-700/50 pl-5 py-1">
        <p className="text-xs text-amber-500 uppercase tracking-wide mb-1">Where people stall here</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Waiting until they feel &ldquo;qualified enough&rdquo; to reach back. You don&rsquo;t need to
          have it figured out. You need to be one year ahead of the person asking.
        </p>
      </div>

      <StageNav current="/the-chain" />

      {/* PTWOB sign-off — final sign-off, after stage nav */}
      <section className="mt-16 border-t border-slate-800 pt-12 text-center space-y-4">
        <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
          This site was built by Patrick Connolly, PTWOB #487 &mdash; separated 2021.
          If it was useful, pass it on. If something is wrong, find him and tell him.
          The whole point is that it keeps getting better.
        </p>
        <p className="text-lg text-slate-300 font-medium">Blue Skies &mdash; 487</p>
      </section>

    </div>
  );
}

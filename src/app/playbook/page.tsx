export default function PlaybookPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Start here
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        The Outlier Playbook
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        What the highest-performing USAFA grads did when they left active duty.
        Five stages. Each earns the next.
      </p>

      {/* Stage 0 */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-mono text-blue-400">
            0
          </span>
          <h2 className="text-2xl font-bold text-slate-100">
            Read Your Story
          </h2>
        </div>
        <div className="ml-13 space-y-4 text-slate-400 leading-relaxed">
          <p>
            Before you write a single application or send a single networking
            message, you have to read your own story. Not your resume. Your{" "}
            <em>story</em>.
          </p>
          <p>
            William Bridges&rsquo; research on transitions found that a transition
            is not the same as a change. A change is the external event&mdash;you
            separate, you move, you start a new job. A transition is the internal
            process of letting go of one identity and forming another.
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 my-6">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-4">
              The Transition Inventory
            </h3>
            <ol className="space-y-3 text-sm">
              <li>
                <span className="text-slate-300 font-medium">1.</span>{" "}
                What am I letting go of? (rank, identity, competence, geographic
                home, camaraderie)
              </li>
              <li>
                <span className="text-slate-300 font-medium">2.</span>{" "}
                What am I afraid of? Name it specifically. &ldquo;I&rsquo;m
                afraid I won&rsquo;t find a job&rdquo; is too vague.
                &ldquo;I&rsquo;m afraid that if I take the role I actually want,
                I&rsquo;ll find out I&rsquo;m not as capable as I believed&rdquo;
                is honest.
              </li>
              <li>
                <span className="text-slate-300 font-medium">3.</span>{" "}
                What do I already bring that has value? Not credentials&mdash;
                <em>capacities</em>. Leading under ambiguity. Executing with
                incomplete information. Building teams from strangers.
              </li>
              <li>
                <span className="text-slate-300 font-medium">4.</span>{" "}
                What do I not yet know that I need to learn? (industry norms,
                salary structures, how civilians actually communicate)
              </li>
              <li>
                <span className="text-slate-300 font-medium">5.</span>{" "}
                Who is one person already in my target domain I could learn
                from? Not impress. <em>Learn from.</em>
              </li>
            </ol>
          </div>
          <p className="text-sm text-slate-500">
            Herminia Ibarra&rsquo;s research found that successful career changers
            don&rsquo;t first decide who they want to become and then execute.
            They experiment with <em>provisional selves</em> through small
            actions and refine through experience. Identity emerges from action.
            But the kind of action matters.
          </p>
        </div>
      </section>

      {/* Stage 1 */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-mono text-blue-400">
            1
          </span>
          <h2 className="text-2xl font-bold text-slate-100">
            Know Your Gifts
          </h2>
        </div>
        <div className="ml-13 space-y-4 text-slate-400 leading-relaxed">
          <p>
            Not StrengthsFinder. Not MBTI. Those describe temperament. This maps
            demonstrated capability from evidence.
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 my-6">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-4">
              The Gift Inventory
            </h3>
            <ol className="space-y-3 text-sm">
              <li>
                <span className="text-slate-300 font-medium">1.</span>{" "}
                What have others specifically thanked you for&mdash;more than
                once, unsolicited?
              </li>
              <li>
                <span className="text-slate-300 font-medium">2.</span>{" "}
                What do you do that exhausts others but energizes you?
              </li>
              <li>
                <span className="text-slate-300 font-medium">3.</span>{" "}
                What did you build in the gap&mdash;the moment when no structure
                existed and you made one?
              </li>
            </ol>
          </div>
          <p>
            Most people in your position underestimate themselves. Some
            overestimate in the wrong directions. Both need correction. The goal
            is accurate reading, not self-congratulation.
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 my-6">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-4">
              Field Assignment
            </h3>
            <p className="text-sm">
              Ask one person who knows you well: &ldquo;What do you see in me
              that I don&rsquo;t see in myself?&rdquo; Bring the verbatim answer
              to your next planning session.
            </p>
          </div>
        </div>
      </section>

      {/* Stage 2 */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-mono text-blue-400">
            2
          </span>
          <h2 className="text-2xl font-bold text-slate-100">
            Position Yourself
          </h2>
        </div>
        <div className="ml-13 space-y-4 text-slate-400 leading-relaxed">
          <p>
            Most gifted, displaced people are invisible not because they lack
            substance but because they have never learned to translate their
            story into the language of the context they&rsquo;re entering.
          </p>

          <h3 className="text-lg font-semibold text-slate-200 mt-8">
            The One-Sentence Story
          </h3>
          <p>
            Write the one-sentence version of your story. Not your CV summary.
            Not your elevator pitch. The sentence that, if someone knew it,
            would make everything else legible. Memorize it. You will deliver
            it cold.
          </p>

          <h3 className="text-lg font-semibold text-slate-200 mt-8">
            The 90-Second Professional Introduction
          </h3>
          <p>
            Rebuilt from the one-sentence story&mdash;not polished from the most
            recent job title. The research on narrative transportation (Green &
            Brock, 2000) shows that stories engage attention in a way that
            bullet points cannot. Your introduction should open with a brief,
            vivid, honest story of why you do what you do.
          </p>

          <h3 className="text-lg font-semibold text-slate-200 mt-8">
            Resume Translation
          </h3>
          <p>
            The research on resume screening (Cole et al., 2007) shows hiring
            managers spend 6-30 seconds on initial review. They scan for
            signals, not stories. What works:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 text-slate-500 mt-2">
            <li>Quantified achievements (&ldquo;Reduced test cycle time by 30%&rdquo;)</li>
            <li>Keywords matching the job description (ATS screening is real)</li>
            <li>Clear structure that reduces cognitive load</li>
            <li>Tailored content for each application</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            Best free resource for this: <strong>Hire Heroes USA</strong>{" "}
            (8/10). Their human-reviewed resume service is the gold standard.
          </p>
        </div>
      </section>

      {/* Stage 3 */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-mono text-blue-400">
            3
          </span>
          <h2 className="text-2xl font-bold text-slate-100">
            Jump Phase: Field Work
          </h2>
        </div>
        <div className="ml-13 space-y-4 text-slate-400 leading-relaxed">
          <p>
            You don&rsquo;t learn to jump by studying jumping. You learn by
            jumping, debriefing, and jumping again. The 70-20-10 research
            (McCall, Lombardo & Morrison, 1988) is clear: 70% of leadership
            development comes from challenging experience, 20% from mentoring,
            and 10% from formal training.
          </p>

          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 my-6">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-4">
              The Field Assignment Sequence
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-300 font-medium">Weeks 1-2: Three real conversations</p>
                <p className="text-slate-500">
                  In your target domain, with real people. This is
                  reconnaissance. Not applying. Not pitching. Learning the
                  terrain. Granovetter&rsquo;s research (1973) found that 56% of
                  professionals found their position through personal contacts,
                  and the majority came through weak ties.
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">Weeks 3-4: One written piece</p>
                <p className="text-slate-500">
                  A perspective, a case study, a documented insight. Published or
                  sent to a real recipient. Not stored. Real audience, real
                  stakes.
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">Weeks 5-6: One formal ask</p>
                <p className="text-slate-500">
                  A meeting request, a pitch, an application, a
                  negotiation&mdash;whatever is real in your situation. Full
                  preparation using bold face.
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">Weeks 7-8: The hardest conversation</p>
                <p className="text-slate-500">
                  The one you&rsquo;ve been avoiding. Could be professional or
                  personal. Whatever is actually governing your forward motion.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-slate-200 mt-8">
            The PEDL Debrief
          </h3>
          <p>
            After every field assignment, every conversation, every action with
            real stakes:
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 my-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-blue-400 font-semibold">P &mdash; Plan</p>
                <p className="text-slate-500">What were you going to do and why?</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">E &mdash; Execute</p>
                <p className="text-slate-500">What actually happened?</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">D &mdash; Debrief</p>
                <p className="text-slate-500">
                  Two things you did well. Two things you&rsquo;d do differently.
                </p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">L &mdash; Learn</p>
                <p className="text-slate-500">
                  What is the one thing you&rsquo;re taking forward?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 4 */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-mono text-blue-400">
            4
          </span>
          <h2 className="text-2xl font-bold text-slate-100">
            The Chain
          </h2>
        </div>
        <div className="ml-13 space-y-4 text-slate-400 leading-relaxed">
          <p>
            The outliers who transitioned best did one more thing: within 2-3
            years, they reached back to help the next wave. This wasn&rsquo;t
            altruism as an afterthought. It was the move that paradoxically
            accelerated their own networks and careers.
          </p>
          <p>
            The research (Grant, <em>Give and Take</em>, 2013) is unequivocal:
            in every profession studied, the top performers were Givers. But
            successful Givers are not martyrs. They give strategically, protect
            their time, and have clear boundaries. The giving is genuine. The
            strategy is in how they manage energy.
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 my-6">
            <p className="text-sm text-slate-300">
              The goal of formation is not to produce people who need you. It is
              to produce people who can go out and form others. What you build
              here is not just a career. It is a legacy&mdash;measured not by
              what you earned, but by what you gave, who you served, and whether
              you were faithful with what was entrusted to you.
            </p>
          </div>
        </div>
      </section>

      {/* The 8 Things */}
      <section className="mt-20 border-t border-slate-800 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
          The 8 things outliers did differently
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              num: "01",
              title: "Started 18+ months early",
              desc: "Treated transition like a military campaign with a planning timeline.",
            },
            {
              num: "02",
              title: "Did 50-100+ informational interviews",
              desc: "Asked for conversations, not jobs. The Ben Franklin effect built allies.",
            },
            {
              num: "03",
              title: "Stacked credentials",
              desc: "GI Bill + Yellow Ribbon for top MBA. PMP, AWS certs, CFA while still serving.",
            },
            {
              num: "04",
              title: "Chose geography intentionally",
              desc: "Moved to where their target industry clusters: Austin, DC, SF, NYC.",
            },
            {
              num: "05",
              title: "Sought broadening assignments",
              desc: "FAO, fellowships, DARPA, acquisition, congressional liaison before separating.",
            },
            {
              num: "06",
              title: "Maintained identity beyond the uniform",
              desc: "Had hobbies, side projects, civilian friendships. 100% military identity = hardest transition.",
            },
            {
              num: "07",
              title: "Built financial runway",
              desc: "Saved aggressively during service to avoid taking the first offer out of desperation.",
            },
            {
              num: "08",
              title: "Optimized for trajectory over first-job comp",
              desc: "Some took lower pay at high-growth companies, betting on long-term upside.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="p-5 rounded-lg border border-slate-800 bg-slate-900/50"
            >
              <span className="text-xs font-mono text-blue-400">
                {item.num}
              </span>
              <h3 className="mt-1 font-semibold text-slate-200 text-sm">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function InterviewPrepPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 07 of 12 — Interviews
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Interview Prep
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        Pilots know how to execute. The problem is most haven&rsquo;t thought
        about what interviewers are actually evaluating — and confuse performance
        with authenticity.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        The research on employment interviews is clear: structured behavioral
        interviews predict performance better than anything except actual work
        samples. You can bring structure to your side of the conversation
        regardless of what they bring to theirs.
      </p>

      {/* TL;DR */}
      <div className="mt-6 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">TL;DR</p>
        <ul className="space-y-1">
          {[
            "What interviewers actually evaluate — and how to give them what they want",
            "The STAR-L framework and how to build a story bank before every interview",
            "Skim if: you're consistently getting to final rounds and getting offers",
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
            ["#evaluating", "What they're evaluating"],
            ["#star-l", "STAR-L framework"],
            ["#story-bank", "Story bank"],
            ["#research", "Interviewer research"],
            ["#questions", "Questions to ask"],
            ["#anxiety", "Managing anxiety"],
            ["#debrief", "Post-interview debrief"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* What interviewers are evaluating */}
      <section id="evaluating" className="mt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          What they&rsquo;re actually evaluating
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Not polish. Not rank. Not how many hours you flew.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              n: "01",
              what: "Can this person think clearly?",
              look: "Reason through ambiguous problems, explain complex ideas simply, show their work.",
            },
            {
              n: "02",
              what: "Can the team work with this person?",
              look: "Listening, adaptability, awareness of how they affect others, ability to disagree without damaging the relationship.",
            },
            {
              n: "03",
              what: "Do they have the technical foundation?",
              look: "Relevant experience, demonstrated capability in required domains, honest about gaps.",
            },
            {
              n: "04",
              what: "Do they fit this org?",
              look: "Values, working style, motivations aligned with the team culture and mission.",
            },
          ].map((item) => (
            <div key={item.n} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
              <span className="text-xs font-mono text-blue-400">{item.n}</span>
              <h3 className="text-sm font-semibold text-slate-200 mt-1 mb-2">{item.what}</h3>
              <p className="text-sm text-slate-500">{item.look}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-600">
          Source: Huffcutt et al. (2001) meta-analysis on employment interview validity, Journal of Applied Psychology.
        </p>
      </section>

      {/* The STAR-L framework */}
      <section id="star-l" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The STAR-L framework
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          STAR answers work because they&rsquo;re specific and concrete. The L
          is what separates good answers from great ones — and what most pilots
          skip.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <div className="space-y-5">
            {[
              {
                l: "S",
                label: "Situation",
                time: "~15% of the answer",
                what: "One or two sentences. Just enough context for them to understand the stakes. Not the full mission brief.",
                trap: "Pilots spend 80% of their answer here. Don't.",
              },
              {
                l: "T",
                label: "Task",
                time: "~10% of the answer",
                what: "Your specific responsibility. Not the team's. Yours. What were you accountable for?",
                trap: null,
              },
              {
                l: "A",
                label: "Action",
                time: "~55% of the answer",
                what: "What you actually did. The specific decisions you made and why. Your reasoning. Your adjustments. Use \"I,\" not \"we.\" This is the longest part by far.",
                trap: "Many candidates default to \"we\" because that's how collaborative work happens. In an interview they're evaluating YOU. Say \"I.\"",
              },
              {
                l: "R",
                label: "Result",
                time: "~15% of the answer",
                what: "What happened? Quantify where possible. Don't fabricate numbers, but don't be vague if you have them.",
                trap: null,
              },
              {
                l: "L",
                label: "Learn",
                time: "~5% of the answer",
                what: "One sentence: what did you take from this experience? This signals growth mindset and self-awareness — two things interviewers specifically weight.",
                trap: "This is the differentiator. Most candidates skip it entirely.",
              },
            ].map((row) => (
              <div key={row.l} className="flex gap-4 border-b border-slate-800/50 pb-5 last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-bold font-mono">
                  {row.l}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-slate-200">{row.label}</span>
                    <span className="text-xs text-slate-600">{row.time}</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{row.what}</p>
                  {row.trap && (
                    <p className="text-xs text-amber-400 bg-amber-400/5 border border-amber-400/20 rounded px-3 py-2">
                      ⚠ Common trap: {row.trap}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key insight */}
      <div className="my-6 p-4 rounded-lg border-l-4 border-blue-500 bg-blue-500/5">
        <p className="text-sm font-semibold text-blue-300 mb-1">Key insight</p>
        <p className="text-sm text-slate-300 leading-relaxed">The difference between a good answer and a great one is the L — what you Learned. It&rsquo;s the signal that you reflect, adapt, and won&rsquo;t repeat mistakes. Interviewers remember it because almost no one does it.</p>
      </div>

      {/* Your story bank */}
      <section id="story-bank" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Build your story bank before every interview
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Prepare these five categories minimum. Rehearse them until they&rsquo;re
          natural, not memorized.
        </p>
        <div className="space-y-3">
          {[
            {
              n: "1",
              type: "Technical challenge",
              prompt: "A time you solved a complex technical problem. Not \"I flew the mission.\" A specific problem you diagnosed and solved.",
            },
            {
              n: "2",
              type: "Team success / leadership",
              prompt: "A time your team achieved something significant because of how you led. Specific. Named. Dated.",
            },
            {
              n: "3",
              type: "Failure and what you learned",
              prompt: "A real failure. Not \"I work too hard.\" A genuine mistake, what happened as a result, and what you changed afterward.",
            },
            {
              n: "4",
              type: "Time you led without authority",
              prompt: "A time you influenced an outcome without a direct authority over the people involved. Lateral leadership.",
            },
            {
              n: "5",
              type: "Something you built from nothing",
              prompt: "A program, process, team, or initiative you started that didn't exist before you. Especially valuable for management roles.",
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xs font-mono">
                {item.n}
              </span>
              <div>
                <p className="text-slate-200 font-medium mb-1">{item.type}</p>
                <p className="text-slate-500 text-sm">{item.prompt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interviewer intel */}
      <section id="research" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Treat your interviewer as an asset
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Before every interview, spend 15 minutes on each interviewer. Not
          to impress them. To understand them.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="space-y-3 text-sm text-slate-400">
            <p>
              Find their LinkedIn. See how they got to where they are. What
              did they do before this org? What do they seem to care about?
              Have they published, spoken, or written anything? Is there
              common ground — geography, school, background, interest?
            </p>
            <p>
              You&rsquo;re not fishing for flattery material. You&rsquo;re
              trying to understand their frame of reference so you can
              communicate effectively with them.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">What to do with what you find</p>
            {[
              "If they came from a technical background: lean into specifics. They'll push on depth.",
              "If they came from a business background: lead with outcomes and impact, not process.",
              "If they're newer to the role: they're evaluating culture fit and working-style alignment.",
              "If they're senior: they're asking \"can I trust this person?\" Be direct and honest.",
              "If you find common ground: use it — briefly, genuinely, not performatively.",
            ].map((item, i) => (
              <div key={i} className="flex gap-2 text-sm text-slate-400">
                <span className="text-slate-600 flex-shrink-0 mt-0.5">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section id="questions" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Questions to ask them
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          The questions you ask reveal more about you than the answers you gave.
          Strong questions signal you&rsquo;ve actually thought about the role.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
            <p className="text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wide">Strong questions</p>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                "What does success look like in this role in the first six months?",
                "What's the biggest challenge the team is facing right now?",
                "What made the last person in this role effective \u2014 or what would you change?",
                "How does this role interact with [specific other team]?",
                "What do people who thrive here have in common?",
              ].map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-400 flex-shrink-0">✓</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
            <p className="text-xs font-semibold text-red-400 mb-3 uppercase tracking-wide">Weak questions</p>
            <ul className="space-y-2 text-sm text-slate-500">
              {[
                "\"What's the work-life balance like?\" (Save for after the offer.)",
                "\"How quickly could I be promoted?\" (Signals you're already looking past the role.)",
                "Anything you could have found on their website.",
                "\"What does [company] do?\" (Shows you didn't research.)",
                "No questions at all. (Signals low interest.)",
              ].map((q, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-400 flex-shrink-0">✗</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Managing interview anxiety */}
      <section id="anxiety" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Managing anxiety
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Performance anxiety in interviews is physiological, not a character
          flaw. Evidence-based management exists.
        </p>
        <div className="space-y-3">
          {[
            {
              method: "Reframe, don't suppress",
              detail: "Tell yourself \"I am excited\" rather than trying to calm down. Anxiety and excitement have the same physiological signature. Reframing to excitement improves performance. Trying to suppress arousal makes it worse. (Jamieson et al., 2010)",
            },
            {
              method: "Pre-interview routine",
              detail: "Develop a 5-minute routine before every interview: slow breathing, review your key stories, one brief physical movement. Athletes use pre-performance routines to regulate arousal. Works the same in interviews.",
            },
            {
              method: "Preparation is the strongest anxiety reducer",
              detail: "Anxiety is highest when uncertainty is highest. Know your stories. Know the org. Know your questions. Preparation doesn't guarantee a good interview, but lack of preparation guarantees a bad one.",
            },
          ].map((item) => (
            <div key={item.method} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-sm">
              <p className="text-slate-200 font-medium mb-1">{item.method}</p>
              <p className="text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PEDL post-interview debrief */}
      <section id="debrief" className="mt-16 border-t border-slate-800 pt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The post-interview PEDL
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Run this within 2 hours of every interview. Win or lose — the debrief
          is the product.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              l: "P",
              w: "Plan",
              d: "What was your strategy going in? What stories were you planning to use? What questions were you going to ask?",
            },
            {
              l: "E",
              w: "Execute",
              d: "What actually happened? Which questions came up? How did your answers land? Where did you feel strong, where shaky?",
            },
            {
              l: "D",
              w: "Debrief",
              d: "Two things you did well. Two things you'd do differently. Your assessment first — don't wait for external feedback.",
            },
            {
              l: "L",
              w: "Learn",
              d: "What is the one thing you're taking forward to every interview after this one?",
            },
          ].map((item) => (
            <div key={item.l} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-blue-400 font-mono">
                  {item.l}
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  {item.w}
                </span>
              </div>
              <p className="text-sm text-slate-500">{item.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-600">
          The interview that doesn&rsquo;t get debriefed is an experience that
          doesn&rsquo;t become learning. (Kolb, 1984)
        </p>
      </section>

      {/* Where people stall */}
      <div className="mt-8 border-l-2 border-amber-700/50 pl-5 py-1">
        <p className="text-xs text-amber-600 uppercase tracking-wide mb-1">Where people stall here</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Over-preparing for predicted questions, under-preparing the story bank. You can&rsquo;t control what they ask.
          You can control how well you know your own material.
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-between">
        <Link
          href="/application-package"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          ← Stage 06: Applications
        </Link>
        <Link
          href="/managing-the-pipeline"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Stage 08: Pipeline →
        </Link>
      </div>

    </div>
  );
}

import Link from "next/link";

export default function ApplicationPackagePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 06 — Application Package
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Applications
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        Most pilots write military resumes and wonder why civilian hiring
        managers don&rsquo;t respond. This is the fix.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Hiring managers spend 6–30 seconds on initial review. They&rsquo;re
        scanning for signals, not stories. Your job is to make the right signals
        obvious in the first ten seconds.
      </p>

      {/* Pre-application gate */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Pre-application gate
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Don&rsquo;t submit until all of these are true.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-3">
          {[
            "I have researched this org beyond their website — news, recent projects, strategic direction.",
            "I've tailored my resume to this specific role. Not sent a generic version.",
            "My cover letter connects a specific experience of mine to a specific need of theirs.",
            "I know the visa/work authorization requirements and I'm eligible.",
            "I know (or have tried to learn) who the hiring manager or team lead is.",
            "I have had at least one informational conversation with someone at this org or in this domain.",
            "Someone I trust has read my application package for clarity and substance.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 text-sm text-slate-400">
              <span className="text-slate-600 flex-shrink-0 mt-0.5">☐</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* The Resume */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The resume
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          One page for early career. Two pages max for senior roles. Never
          creative formatting. Never a photo. Never an objective statement.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-3">
              What works
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                "Quantified achievements: \"Led 18-aircraft operation, zero incidents, $4M budget\"",
                "Keywords from the job description (ATS screening is real — check before submitting)",
                "Civilian-translated language (see Know Your Gifts for the translation)",
                "Clear structure with consistent formatting",
                "Tailored content for each specific role",
                "Results, not duties. What changed because you were there?",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-400 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-3">
              What kills applications
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              {[
                "Military jargon without translation (ADOC, IP, CAOC, AFSOC — none of these mean anything)",
                "Objective statements (\"Seeking a challenging role...\")",
                "Listing every course, certification, and training ever attended",
                "Duty descriptions instead of impact statements",
                "O-3, O-4, GS-12 — these grade systems don't translate",
                "Creative formatting, graphics, unusual fonts — reads as compensation",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-400 flex-shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <h3 className="text-base font-semibold text-slate-200 mb-4">
            The bullet formula
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            Every bullet should follow one pattern: <span className="text-slate-200 font-medium">verb + what you did + impact/result</span>
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-red-400 text-xs mb-1">Before (military-speak):</p>
              <p className="text-slate-500 italic bg-slate-800/50 rounded p-3">
                &ldquo;Responsible for flight lead duties and instruction of student
                pilots in accordance with AFI 11-2 standards.&rdquo;
              </p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs mb-1">After (civilian-translated):</p>
              <p className="text-slate-300 italic bg-slate-800/50 rounded p-3">
                &ldquo;Led 6-pilot team in complex multi-phase operations; assessed
                and trained 12 student pilots to mission-ready status in 8-month
                certification program.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cover Letter */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The cover letter
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Not a prose restatement of your resume. A story that connects who you
          are to what they need. Three paragraphs maximum.
        </p>

        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4">
          {[
            {
              para: "Opening — 2 sentences",
              what: "Why this role, this org, this mission. Be specific. Reference something real — a recent project, a publication, their stated direction. If you can't do this, you haven't done enough research.",
            },
            {
              para: "Bridge — 1 paragraph",
              what: "The connection between your background and what they need. Not \"I have skills X, Y, Z\" — but \"My experience doing [specific thing] prepared me to contribute to [their specific challenge].\" One story. Specific. Translated.",
            },
            {
              para: "Close — 2 sentences",
              what: "Forward-looking. What you want to explore or build. End with energy, not formality. \"I look forward to the conversation\" is a dead close. \"I am especially interested in [specific aspect of role] and would enjoy discussing [specific question]\" is not.",
            },
          ].map((p) => (
            <div key={p.para} className="border-b border-slate-800/50 pb-4 last:border-0 last:pb-0">
              <p className="text-sm font-semibold text-slate-200 mb-1">{p.para}</p>
              <p className="text-sm text-slate-400">{p.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The LinkedIn profile */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The LinkedIn profile
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Your profile is doing work when you&rsquo;re not looking. Make it
          legible to a civilian in ten seconds.
        </p>
        <div className="space-y-4">
          {[
            {
              field: "Headline",
              bad: "&ldquo;USAF Officer | F-16 Pilot | MBA Student&rdquo;",
              good: "&ldquo;Operations Leader | High-Stakes Decision-Making | Transitioning to [Target Field]&rdquo;",
              note: "Military titles mean nothing to civilians. Describe what you do, not what you were.",
            },
            {
              field: "About section",
              bad: "A timeline of your assignments and PCS moves.",
              good: "3–4 sentences: what you do (translated), what you're building toward, what kind of problems excite you.",
              note: "This is the one place to show personality. Don't default to LinkedIn corporate-speak.",
            },
            {
              field: "Experience bullets",
              bad: "Copy-paste from your military bio or SURF.",
              good: "Same translated bullet formula as your resume. Impact, not duty.",
              note: "LinkedIn shows in search results. Keywords matter. Include the civilian equivalents of your military roles.",
            },
          ].map((item) => (
            <div key={item.field} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-200 mb-3">{item.field}</p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm mb-2">
                <div>
                  <p className="text-xs text-red-400 mb-1">Don&rsquo;t:</p>
                  <p className="text-slate-500 italic">{item.bad}</p>
                </div>
                <div>
                  <p className="text-xs text-emerald-400 mb-1">Do:</p>
                  <p className="text-slate-300 italic">{item.good}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mt-12 bg-blue-600/5 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-base font-semibold text-slate-200 mb-3">
          Free resources for this
        </h3>
        <div className="space-y-2 text-sm text-slate-400">
          <p>
            <span className="text-slate-200 font-medium">Hire Heroes USA</span> — free
            human-reviewed resume service for veterans and transitioning military.
            Their reviewers understand both worlds. Use it. It&rsquo;s the best
            free resume help available.
          </p>
          <p>
            <span className="text-slate-200 font-medium">
              <Link href="/comp-translator" className="text-blue-400 hover:text-blue-300">
                Comp Translator
              </Link>
            </span>{" "}
            — before you quote a salary expectation in any application.
          </p>
          <p>
            <span className="text-slate-200 font-medium">
              <Link href="/know-your-gifts" className="text-blue-400 hover:text-blue-300">
                Know Your Gifts
              </Link>
            </span>{" "}
            — for the military-to-civilian translation table and airframe-specific
            callouts.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-between">
        <Link
          href="/the-search"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          ← Stage 05: The Search
        </Link>
        <Link
          href="/interview-prep"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Stage 07: Interviews →
        </Link>
      </div>

      <p className="mt-12 text-sm text-slate-600 italic">Blue Skies — 487</p>
    </div>
  );
}

import Link from "next/link";

export default function NegotiationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 09 — Negotiation
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Negotiation
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        Most pilots don&rsquo;t negotiate. That&rsquo;s not humility — it&rsquo;s
        money left on the table. The first offer is rarely the final offer.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Babcock &amp; Laschever (2003) found that people who negotiate their first
        offer earn an average of $5,000 more starting salary — which compounds
        over a career into hundreds of thousands of dollars. The cost of not
        negotiating is not zero.
      </p>

      {/* Why people don't negotiate */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Why pilots don&rsquo;t negotiate
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          And why those reasons, while understandable, are wrong.
        </p>
        <div className="space-y-3">
          {[
            {
              fear: "\"They might rescind the offer.\"",
              reality: "This is exceedingly rare. Employers expect negotiation at the offer stage. Rescinding for a professional counter-offer is almost unheard of in professional roles.",
            },
            {
              fear: "\"I don't want to seem greedy.\"",
              reality: "Negotiation is not greed \u2014 it's stewardship. You are responsible for getting compensation that reflects your value. That's a professional responsibility, not a character flaw.",
            },
            {
              fear: "\"I don't know what to say.\"",
              reality: "You're about to learn a specific script. There are three or four sentences that handle 80% of negotiation conversations. This is learnable.",
            },
            {
              fear: "\"I should be grateful they hired me.\"",
              reality: "Gratitude and negotiation are not in conflict. You can be genuinely glad about the offer and professionally ask for more in the same conversation.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-sm">
              <p className="text-amber-400 font-medium mb-1">{item.fear}</p>
              <p className="text-slate-400">{item.reality}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The principled approach */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Principled negotiation
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Fisher &amp; Ury&rsquo;s framework from{" "}
          <em>Getting to Yes</em> (1981) is still the most well-supported model.
          The core: negotiate interests, not positions.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              principle: "Focus on interests, not positions",
              what: "Your position: \"I want $130K.\" Your interest: compensation that lets you cover your family's needs, reflects your experience, and doesn't feel like a step backward. Those are different things \u2014 and interests are more negotiable.",
            },
            {
              principle: "Look for mutual gains",
              what: "You want higher base. They want you to start soon. You want more PTO. They want flexibility on start date. The negotiation space is larger than most people treat it.",
            },
            {
              principle: "Use objective criteria",
              what: "Market data removes ego from the conversation. \"Based on my research using [Glassdoor / Levels.fyi / LinkedIn Salary], similar roles in this market pay $X–$Y.\" Objective criteria gives both sides a face-saving path.",
            },
            {
              principle: "Separate people from the problem",
              what: "The recruiter is not your adversary. They generally want you to take the job. You're both trying to solve a compensation problem together. Treat them that way.",
            },
          ].map((item) => (
            <div key={item.principle} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-sm">
              <p className="text-blue-400 font-medium mb-2">{item.principle}</p>
              <p className="text-slate-400">{item.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calibrated questions — Voss */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Calibrated questions
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          Chris Voss (former FBI negotiator,{" "}
          <em>Never Split the Difference</em>) introduces &ldquo;calibrated
          questions&rdquo; — how-questions that invite the other side to solve
          the problem with you instead of resisting.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="space-y-3 text-sm">
            {[
              { q: "\"How can we make the numbers work given what I've outlined?\"", why: "Invites collaboration instead of confrontation." },
              { q: "\"How does your team typically handle situations where there's a gap between the offer and the candidate's expectations?\"", why: "Opens the process without pressure." },
              { q: "\"What flexibility exists in the total package?\"", why: "Expands the frame beyond base salary." },
              { q: "\"What would need to be true for the base to reach $X?\"", why: "Gets them describing the path rather than defending a wall." },
            ].map((item, i) => (
              <div key={i} className="border-b border-slate-800/50 pb-3 last:border-0 last:pb-0">
                <p className="text-slate-200 font-medium mb-1">{item.q}</p>
                <p className="text-slate-500 text-xs">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ackerman model */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The Ackerman model
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          A structured counter-offer sequence. Psychologically grounded.
          Works for salary negotiation.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <div className="space-y-4">
            {[
              { step: "Target", pct: "Target = your honest ideal number", desc: "The number you'd genuinely be happy with. Not inflated fantasy \u2014 your actual target." },
              { step: "Opening ask", pct: "Start at 115–120% of target", desc: "Open higher than your target so you have room to come down. End at or above target." },
              { step: "Counter 1", pct: "Come down to ~108%", desc: "Second offer. Show movement. Each concession should be smaller than the last." },
              { step: "Counter 2", pct: "Come down to ~103%", desc: "Smaller movement again. The psychological pattern signals you're approaching your floor." },
              { step: "Final offer", pct: "Land at or above target", desc: "Make your final number oddly precise ($127,350 not $128,000). Precision signals you've done the math \u2014 not that you're guessing." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 border-b border-slate-800/50 pb-4 last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-slate-200">{item.step}</span>
                    <span className="text-xs text-slate-600 font-mono">{item.pct}</span>
                  </div>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-3">
          Source: Voss, C. &amp; Raz, T. (2016). <em>Never Split the Difference</em>. HarperBusiness.
        </p>
      </section>

      {/* Total comp */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Total compensation is not just base salary
        </h2>
        <p className="text-sm text-slate-500 mb-2">
          You came from a system with flight pay, BAH, BAS, and a pension.
          Civilian comp is also multi-variable.
        </p>
        <p className="text-sm text-slate-500 mb-6">
          If they can&rsquo;t move on base, there is almost always movement
          elsewhere.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { item: "Base salary", note: "The anchor. Negotiate this first." },
            { item: "Annual bonus / target bonus", note: "What's the target %? What's the actual average payout? Is it discretionary or formulaic?" },
            { item: "Equity / RSUs", note: "Vesting schedule matters. $50K in RSUs on a 4-year cliff vesting is very different from quarterly vesting." },
            { item: "Sign-on bonus", note: "Often one-time money they can give without resetting the base. Easiest place to find movement if base is capped." },
            { item: "Start date", note: "Later start = more salary before you start; earlier start = more goodwill and ramp time." },
            { item: "Performance review cycle", note: "When is your first review? Can it be moved up to 6 months instead of 12?" },
            { item: "PTO / leave", note: "Pilot schedules are inflexible. Civilian PTO is negotiable. What do you need?" },
            { item: "Remote / hybrid", note: "Days in-office affect your real comp via commute cost, childcare, quality of life." },
            { item: "Title", note: "May affect your future negotiating position with that employer and with subsequent employers." },
            { item: "Relocation allowance", note: "If applicable, this can easily be $5–20K in negotiation space." },
          ].map((item) => (
            <div key={item.item} className="flex justify-between gap-3 bg-slate-900/70 border border-slate-800 rounded-xl p-4 text-sm">
              <span className="text-slate-200 font-medium flex-shrink-0">{item.item}</span>
              <span className="text-slate-500 text-right text-xs">{item.note}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-blue-400/5 border border-blue-400/20 rounded-xl">
          <p className="text-sm text-slate-400">
            For help calculating what you actually need to maintain your current
            standard of living after losing BAH, flight pay, and BAS, use the{" "}
            <Link href="/comp-translator" className="text-blue-400 hover:text-blue-300">
              Compensation Translator →
            </Link>
          </p>
        </div>
      </section>

      {/* Scripts */}
      <section className="mt-16 border-t border-slate-800 pt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          What to say
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Word-for-word starting points. Use your own voice.
        </p>
        <div className="space-y-6">
          {[
            {
              scenario: "When they ask your salary expectation (before the offer)",
              text: "\"Based on my research and the scope of the role, I'm targeting the [$X\u2013$Y] range. But I'm flexible and want to understand the full package before anchoring to a number. What does the compensation structure look like?\"",
              note: "Deflect before the offer. Don't anchor yourself early. If they push: \"I'm targeting [X] based on my research.\"",
            },
            {
              scenario: "When you receive a written offer",
              text: "\"Thank you \u2014 I'm genuinely excited about this opportunity, and I appreciate the offer. Before I sign I want to discuss the compensation. Based on my research for this type of role in this market, I was expecting something closer to [X]. Is there flexibility there?\"",
              note: "Express genuine enthusiasm. Then ask. Don't apologize for asking.",
            },
            {
              scenario: "When they say \"this is our best offer\"",
              text: "\"I understand. I want to make this work \u2014 I'm very interested in the role. If there's no movement on base, is there flexibility on [sign-on / review cycle / PTO / start date]? I want to find a way to land this.\"",
              note: "Shift to the other variables. \"Best offer on base\" rarely means \"best offer on everything.\"",
            },
            {
              scenario: "When you're ready to accept",
              text: "\"I've thought about it and I'm ready to accept. I'm looking forward to getting started. Can you send the updated offer letter?\"",
              note: "Clean, professional, done. No lingering or re-opening.",
            },
          ].map((item) => (
            <div key={item.scenario} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-sm space-y-3">
              <p className="text-slate-300 font-medium">{item.scenario}</p>
              <div className="bg-slate-800/60 border-l-2 border-blue-400 rounded px-4 py-3">
                <p className="text-slate-300 italic">{item.text}</p>
              </div>
              <p className="text-xs text-slate-500">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-between">
        <Link
          href="/managing-the-pipeline"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          ← Stage 08: Managing the Pipeline
        </Link>
        <Link
          href="/first-90-days"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Stage 10: First 90 Days →
        </Link>
      </div>

      <p className="mt-12 text-sm text-slate-600 italic">Blue Skies — 487</p>
    </div>
  );
}

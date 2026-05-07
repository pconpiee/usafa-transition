import Link from "next/link";
import StageNav from "@/components/StageNav";

export default function ManagingThePipelinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4">
        Stage 08 of 12 — Managing the Pipeline
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight text-balance">
        Managing the Pipeline
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        The search is a mission. Treat it like one. You need situational
        awareness across multiple active roles simultaneously, energy management,
        and a weekly debrief cycle.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Most pilots are good at executing individual sortie tasks. Managing a
        10-role pipeline across 8 months while also networking, studying
        industries, and handling family + finances is a different skill. Here
        is the system.
      </p>

      {/* TL;DR */}
      <div className="mt-6 p-4 rounded-lg border border-slate-700 bg-slate-900/60">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">TL;DR</p>
        <ul className="space-y-1">
          {[
            "How to manage multiple processes simultaneously without dropping any",
            "The tracking system and communication cadence that keeps you in control",
            "Skim if: you have fewer than 3 active processes right now",
          ].map((item) => (
            <li key={item} className="text-sm text-slate-400 flex gap-2">
              <span className="text-slate-500 flex-shrink-0">—</span>
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
            ["#bandwidth", "Bandwidth management"],
            ["#follow-up", "Follow-up cadence"],
            ["#weekly-review", "The weekly review"],
            ["#energy", "Energy management"],
            ["#metrics", "Weekly metrics"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* The reality */}
      <section className="mt-12 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-amber-400 mb-3">What the numbers actually say</h3>
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          {[
            { stat: "12–18 mo", label: "Realistic time from separation intent to offer acceptance, done well" },
            { stat: "60%+", label: "Of jobs filled through personal contacts, not job-board applications" },
            { stat: "6 in 10", label: "Veterans separate without an offer in hand — the pipeline failure is structural" },
          ].map((s) => (
            <div key={s.stat}>
              <div className="text-2xl font-bold text-amber-400 mb-1">{s.stat}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-400 mt-4">
          These are not indictments of the people — they&rsquo;re indictments
          of the system most pilots use, which is: apply to jobs and wait to hear
          back. That system doesn&rsquo;t work. Treating the search as a managed
          mission does.
        </p>
      </section>

      {/* Bandwidth management */}
      <section id="bandwidth" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Bandwidth management
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          You cannot run 20 roles through a serious process simultaneously.
          You should not try to run 1.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <div className="space-y-4 text-sm text-slate-400">
            <p>
              The research on job search intensity (Kanfer, Wanberg & Kantrowitz,
              2001) found that focused, high-quality search activity produces
              better outcomes than high-volume, low-quality search activity.
              Sending 50 applications into the void is not a more aggressive
              search — it's a less effective one.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {[
                { stage: "Active / deep work", n: "3\u20135", desc: "Roles where you're doing serious research, networking, and tailored applications. These deserve real time." },
                { stage: "Watching / light touch", n: "5–8", desc: "Roles you're tracking but not yet committed to. Discovery and qualification stages." },
                { stage: "Total pipeline", n: "10–15", desc: "Total roles you're tracking at any time. Too few means no optionality. Too many means nothing gets done well." },
              ].map((item) => (
                <div key={item.stage} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{item.n}</div>
                  <div className="text-xs font-semibold text-slate-300 mb-1">{item.stage}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Follow-up cadence */}
      <section id="follow-up" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Follow-up cadence
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          The pipeline dies when follow-up stops. Most candidates stop following
          up after one attempt. Most hires happen after three to five touchpoints.
        </p>
        <div className="space-y-3">
          {[
            {
              trigger: "After submitting an application",
              action: "If no acknowledgment in 1 week: one professional follow-up to confirm receipt. \"I wanted to confirm my application arrived and express continued interest.\"",
            },
            {
              trigger: "After an informational conversation",
              action: "Within 24 hours: personalized thank-you referencing something specific from the conversation. Not optional.",
            },
            {
              trigger: "After an interview",
              action: "Within 24 hours: thank-you to each interviewer individually. Mention one thing specific to their interview. Run your PEDL debrief (Plan / Execute / Debrief / Learn).",
            },
            {
              trigger: "When you haven't heard back (post-interview)",
              action: "1 week after stated decision timeline: one professional check-in. \"I'm following up on our conversation from [date]. Still very interested \u2014 happy to provide any additional information.\"",
            },
            {
              trigger: "When a role closes (rejection or pass)",
              action: "Close it in your JPOS tracker. Run a brief PEDL. Keep the relationship open. \"I appreciate the consideration. If there are future opportunities that might be a fit, I'd welcome the chance to reconnect.\"",
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 text-sm">
              <p className="text-slate-200 font-medium mb-1">{item.trigger}</p>
              <p className="text-slate-400">{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly review */}
      <section id="weekly-review" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          The weekly review
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Friday afternoon, 30 minutes. Non-negotiable. The search that
          doesn&rsquo;t have a weekly review loses momentum and discipline.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <div className="space-y-3">
            {[
              "How many roles am I actively pursuing? Is it the right number?",
              "What stage is each role in? What needs to move?",
              "What gate is each role stuck at? What's the specific next action?",
              "How many quality interactions did I have this week? (Target: 2–3 minimum)",
              "What follow-ups are overdue?",
              "What did I learn this week that changes my strategy?",
              "What am I avoiding that I need to face?",
            ].map((q, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-400">
                <span className="text-slate-500 flex-shrink-0 mt-0.5">☐</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy management */}
      <section id="energy" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Energy management
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          The search is a long sortie. You need to manage your energy across
          months, not just days.
        </p>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            Rejection is a normal part of the process. The average rate from
            application to interview is 8–10% for cold applications. From
            informational network contacts it&rsquo;s dramatically higher —
            but it still means you will hear no many times before you hear yes.
          </p>
          <p>
            Pilots are used to a world where competence is directly rewarded
            and the feedback loop is fast. The job search inverts both: the
            feedback loop is slow, opaque, and often noisy, and rejection often
            has nothing to do with your capability.
          </p>
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-3">
            <h3 className="text-sm font-semibold text-slate-200">
              What the research says about search sustainability
            </h3>
            {[
              { b: "Momentum matters more than intensity.", d: "Sustained moderate effort over months outperforms intense bursts followed by demoralization. Plan for a 12–18 month runway." },
              { b: "Meaning protects against rejection.", d: "Know why the search matters beyond the job itself — financial stability, mission alignment, family, growth. When meaning is clear, rejection stings less." },
              { b: "The search needs a life around it.", d: "Physical activity, sleep, and one non-career relationship are not luxuries. They are requirements for sustained high performance." },
              { b: "Celebrate the process metrics, not just outcomes.", d: "Track conversations had, applications submitted, connections made. These are the leading indicators. Offer acceptances are lagging indicators you can't control directly." },
            ].map((item) => (
              <div key={item.b} className="text-sm">
                <span className="text-slate-200 font-medium">{item.b} </span>
                <span className="text-slate-500">{item.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics dashboard */}
      <section id="metrics" className="mt-16 bg-slate-900/70 border border-slate-800 rounded-xl p-6">
        <h3 className="text-base font-semibold text-slate-200 mb-4">
          Weekly metrics to track
        </h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            { metric: "Active roles in pipeline", why: "Pipeline size indicator" },
            { metric: "New roles added this week", why: "Opportunity generation" },
            { metric: "Roles advanced a stage", why: "Forward motion" },
            { metric: "Quality outreach messages sent", why: "Networking input" },
            { metric: "Conversations had", why: "Relationship building" },
            { metric: "Referrals activated", why: "Warm pipeline measure" },
            { metric: "Applications submitted", why: "Execution metric" },
            { metric: "Interviews booked", why: "Conversion indicator" },
          ].map((item) => (
            <div key={item.metric} className="flex justify-between bg-slate-800/50 rounded p-3">
              <span className="text-slate-300">{item.metric}</span>
              <span className="text-slate-500 text-xs">{item.why}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Use your{" "}
          <Link href="/the-search" className="text-blue-400 hover:text-blue-300">
            JPOS tracker
          </Link>{" "}
          to maintain this dashboard. Review every Friday.
        </p>
      </section>

      {/* Where people stall */}
      <div className="mt-8 border-l-2 border-amber-700/50 pl-5 py-1">
        <p className="text-xs text-amber-500 uppercase tracking-wide mb-1">Where people stall here</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Treating each opportunity as if it&rsquo;s the last one. Apply broadly enough
          that no single rejection derails the whole process.
        </p>
      </div>

      <StageNav current="/managing-the-pipeline" />
    </div>
  );
}

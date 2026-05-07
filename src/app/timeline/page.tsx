"use client";

import { useState } from "react";
import TimelineAxis from "@/components/diagrams/TimelineAxis";

interface Milestone {
  monthsOut: number;
  title: string;
  detail: string;
  category: "admin" | "career" | "financial" | "personal" | "network";
}

const milestones: Milestone[] = [
  { monthsOut: 18, title: "Begin transition planning", detail: "The outlier standard. Start here, not at 6 months. Run your transition inventory (Playbook Stage 0).", category: "career" },
  { monthsOut: 18, title: "Map your network", detail: "Write down every professional contact. Identify structural holes — who do you NOT know in your target domain? (Granovetter, Burt)", category: "network" },
  { monthsOut: 18, title: "Research SkillBridge opportunities", detail: "3,500+ approved orgs. The best ones fill fast. AF has the highest approval rates. Talk to your commander early.", category: "career" },
  { monthsOut: 15, title: "Complete Gift Inventory", detail: "What have others thanked you for? What exhausts others but energizes you? What did you build in the gap?", category: "personal" },
  { monthsOut: 15, title: "Start informational conversations", detail: "1-2 per week. Not job applications — learning conversations. Ask: 'Who else should I talk to?' (see Bold Face)", category: "network" },
  { monthsOut: 15, title: "Research credentials to stack", detail: "PMP, AWS, CFA, MBA programs. Use AF COOL while still in — it pays for certifications. GI Bill comparison tool at VA.gov.", category: "career" },
  { monthsOut: 12, title: "Begin VA disability claim prep", detail: "Get EVERYTHING documented in your medical record NOW. Work with a VSO (DAV, VFW, American Legion) — don't do this alone.", category: "admin" },
  { monthsOut: 12, title: "Apply for ACP mentorship", detail: "Free corporate mentor for a year. $90K avg starting salary for participants. Takes time to match — start early.", category: "network" },
  { monthsOut: 12, title: "TSP strategy decision", detail: "Keep in TSP? Roll to IRA? Understand Rule of 55, Roth conversion tax implications. Military OneSource has free financial planning.", category: "financial" },
  { monthsOut: 12, title: "Apply for SkillBridge", detail: "Submit formal request through your chain. Have backup companies. The approval process can take months.", category: "career" },
  { monthsOut: 10, title: "Build your one-sentence story", detail: "Not your elevator pitch. The sentence that makes everything else legible. Memorize it. (Playbook Stage 2)", category: "personal" },
  { monthsOut: 10, title: "Start resume rebuild", detail: "Use Hire Heroes USA (free, human-reviewed, gold standard). Rebuild from your one-sentence story, not from your most recent duty title.", category: "career" },
  { monthsOut: 9, title: "Begin field assignments", detail: "Three real conversations, then a written piece, then a formal ask, then the hardest conversation. PEDL debrief (Plan / Execute / Debrief / Learn) each one.", category: "career" },
  { monthsOut: 9, title: "Research target geography", detail: "Where does your target industry cluster? Austin, DC, SF, NYC, Denver? Cost of living vs. opportunity density. Don't default to 'where family is.'", category: "career" },
  { monthsOut: 6, title: "Complete TAP (mandatory)", detail: "4/10 from veterans, but required. The DOL employment workshop is the best part. CSP pathway to SkillBridge is the only genuinely valuable piece.", category: "admin" },
  { monthsOut: 6, title: "File VA disability claim", detail: "File before or immediately after separation. Use a VSO. Don't wait — processing takes months. Backdate documentation helps.", category: "admin" },
  { monthsOut: 6, title: "Healthcare transition plan", detail: "TRICARE → civilian insurance. Costs jump 7-9x. Research employer plans, ACA marketplace, TRICARE Reserve Select if applicable.", category: "financial" },
  { monthsOut: 6, title: "Compensation research file", detail: "Build your one-pager: target comp (total), minimum acceptable, BATNA, their constraints, 3 calibrated questions, 3 non-salary levers.", category: "financial" },
  { monthsOut: 4, title: "Begin active applications", detail: "If not doing SkillBridge. Network-sourced opportunities first. Employee referrals account for 25-40% of hires at major orgs.", category: "career" },
  { monthsOut: 3, title: "Practice bold face drills", detail: "60-second story cold. Response to 'what do you do?' Response to the slightly-wrong offer. Response to rejection.", category: "personal" },
  { monthsOut: 2, title: "Final move logistics", detail: "DITY/PPM move, housing at destination, school registration if kids, spouse employment plan. Don't underestimate this.", category: "admin" },
  { monthsOut: 1, title: "Final out-processing", detail: "DD-214, medical records copies, security clearance documentation. Keep copies of EVERYTHING.", category: "admin" },
  { monthsOut: 0, title: "Separation day", detail: "You're not leaving the military. You're deploying to a new theater.", category: "personal" },
  { monthsOut: -1, title: "Activate Military OneSource", detail: "12 free counseling sessions available for 365 days post-separation. Use them.", category: "personal" },
  { monthsOut: -1, title: "Start the First 90 Days protocol", detail: "If employed: Watkins' five conversations, early wins, trust-building. If searching: maintain field assignment cadence.", category: "career" },
  { monthsOut: -3, title: "90-day check-in", detail: "Run PEDL on your entire transition so far. Two things going well. Two things to change. What's the one thing to take forward?", category: "personal" },
];

const categoryColors: Record<string, string> = {
  admin: "text-red-400 bg-red-400/10 border-red-400/20",
  career: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  financial: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  personal: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  network: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

function formatDate(base: Date, monthsOut: number): string {
  const d = new Date(base);
  d.setMonth(d.getMonth() - monthsOut);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function TimelinePage() {
  const [sepDate, setSepDate] = useState("");

  const baseDate = sepDate
    ? (() => {
        const [y, m] = sepDate.split("-").map(Number);
        return new Date(y, m - 1, 1);
      })()
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <style>{`
        @media print {
          nav, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-area { color: black !important; }
        }
      `}</style>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
            Tool
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight text-balance">
            Timeline Builder
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Enter your separation date. Get a personalized checklist built from the
            18-month outlier standard.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="no-print flex-shrink-0 flex items-center gap-2 px-4 py-2 text-sm border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
          Print / Save as PDF
        </button>
      </div>

      <div className="no-print mt-8">
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Target separation date
        </label>
        <input
          type="month"
          value={sepDate}
          onChange={(e) => setSepDate(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500"
        />
      </div>

      <TimelineAxis milestones={milestones} />

      {/* Legend */}
      <div className="no-print mt-6 flex flex-wrap gap-2">
        {Object.entries(categoryColors).map(([cat, cls]) => (
          <span
            key={cat}
            className={`text-xs px-2 py-1 rounded-full border ${cls}`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Timeline */}
      <div className="print-area mt-10 relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800" />
        <div className="space-y-6">
          {milestones.map((m, i) => {
            const dateStr = baseDate ? formatDate(baseDate, m.monthsOut) : null;
            const isPast = baseDate
              ? new Date(baseDate.getFullYear(), baseDate.getMonth() - m.monthsOut) < new Date()
              : false;

            return (
              <div key={i} className="relative pl-10">
                <div
                  className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                    isPast
                      ? "bg-slate-600 border-slate-600"
                      : "bg-slate-900 border-slate-500"
                  }`}
                />
                <div
                  className={`${isPast ? "opacity-50" : ""}`}
                >
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-sm font-semibold text-slate-200">
                      {m.title}
                    </h3>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded border ${categoryColors[m.category]}`}
                    >
                      {m.category}
                    </span>
                    {dateStr && (
                      <span className="text-xs text-slate-500 font-mono">
                        {dateStr}
                      </span>
                    )}
                    {!dateStr && (
                      <span className="text-xs text-slate-700 font-mono">
                        T-{m.monthsOut > 0 ? m.monthsOut + "mo" : m.monthsOut === 0 ? "0" : "+" + Math.abs(m.monthsOut) + "mo"}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{m.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

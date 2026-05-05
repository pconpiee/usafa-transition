"use client";

import { useState } from "react";

const BASE_PAY: Record<string, Record<number, number>> = {
  "O-1": { 2: 45135, 3: 48974, 4: 51483 },
  "O-2": { 2: 54461, 3: 58354, 4: 62543, 5: 63836, 6: 64756 },
  "O-3": { 4: 68933, 5: 72256, 6: 75622, 7: 78232, 8: 82096, 9: 84850, 10: 86988 },
  "O-4": { 6: 81563, 8: 88742, 10: 95320, 12: 99851, 14: 103214, 16: 105112 },
  "O-5": { 10: 107436, 12: 112440, 14: 116532, 16: 120768, 18: 124872, 20: 128964 },
};

// Geographic BAH tiers (annual, with dependents)
const BAH_TIERS = [
  { label: "National Average (default)", examples: "", annual: 23400 },
  { label: "Major metro — NYC, LA, DC, SF, Boston", examples: "", annual: 36000 },
  { label: "Mid-size city — Seattle, Raleigh, Denver", examples: "", annual: 27600 },
  { label: "Small city — Wichita Falls, Columbus", examples: "", annual: 19200 },
  { label: "Enter my own BAH", examples: "", annual: -1 },
];

// Aviation Career Incentive Pay (ACIP) monthly → annual
const ACIP_OPTIONS = [
  { label: "None", annual: 0 },
  { label: "< 6 years aviation (~$188/mo)", annual: 2256 },
  { label: "6–9 years aviation (~$650/mo)", annual: 7800 },
  { label: "10–13 years aviation (~$750/mo)", annual: 9000 },
  { label: "14+ years aviation (~$840/mo)", annual: 10080 },
];

const BAS = 3276; // annual officer BAS 2025

function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function CompTranslatorPage() {
  const [rank, setRank] = useState("O-3");
  const [years, setYears] = useState(6);
  const [bahTierIdx, setBahTierIdx] = useState(0);
  const [customBahMonthly, setCustomBahMonthly] = useState("");
  const [dependents, setDependents] = useState(true);
  const [acipIdx, setAcipIdx] = useState(0);

  const basePay =
    BASE_PAY[rank]?.[years] ??
    BASE_PAY[rank]?.[
      Object.keys(BASE_PAY[rank])
        .map(Number)
        .filter((y) => y <= years)
        .sort((a, b) => b - a)[0]
    ] ??
    70000;

  const selectedTier = BAH_TIERS[bahTierIdx];
  const isCustomBah = selectedTier.annual === -1;
  const customBahAnnual = customBahMonthly
    ? parseFloat(customBahMonthly) * 12
    : 0;
  const bahWithDeps = isCustomBah
    ? customBahAnnual
    : selectedTier.annual;
  const bah = dependents ? bahWithDeps : Math.round(bahWithDeps * 0.85);

  const flightPay = ACIP_OPTIONS[acipIdx].annual;
  const taxFreeAllowances = bah + BAS;
  const tricareSavings = 5849;
  const retirementContrib = Math.round(basePay * 0.05);
  const totalMilitaryComp =
    basePay + flightPay + taxFreeAllowances + tricareSavings + retirementContrib;
  const taxAdvantage = Math.round(taxFreeAllowances * 0.22);
  const civEquivalent = totalMilitaryComp + taxAdvantage;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <style>{`
        @media print {
          nav, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-area { color: black !important; }
        }
      `}</style>
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Tool
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Comp Translator
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        Your military total compensation is higher than your base pay suggests.
        Tax-free allowances, TRICARE, and retirement matching add up. See what
        a civilian employer would need to pay you to match it.
      </p>
      <div className="mt-6 max-w-2xl border-l-2 border-slate-700 pl-4">
        <p className="text-sm text-slate-400 leading-relaxed">
          One note before you use this. The number this tool produces is your{" "}
          <em>market value</em> &mdash; what a civilian employer would pay to
          acquire your equivalent labor. It is not your <em>worth</em>. The
          two are not the same word, and the gap between them matters. You
          will negotiate better, transition better, and live better if you
          keep them separate. Use this number in salary conversations. Do not
          use it to answer the question of who you are.
        </p>
      </div>

      {/* Inputs */}
      <div className="no-print mt-10 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Rank
          </label>
          <select
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500"
          >
            {Object.keys(BASE_PAY).map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Years of Service
          </label>
          <input
            type="number"
            min={2}
            max={20}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Job opportunity location
          </label>
          <select
            value={bahTierIdx}
            onChange={(e) => setBahTierIdx(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500"
          >
            {BAH_TIERS.map((t, i) => (
              <option key={i} value={i}>{t.label}</option>
            ))}
          </select>
          {isCustomBah && (
            <div className="mt-2">
              <input
                type="number"
                min={0}
                placeholder="Your monthly BAH (e.g. 1950)"
                value={customBahMonthly}
                onChange={(e) => setCustomBahMonthly(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 placeholder:text-slate-600"
              />
              <p className="text-xs text-slate-600 mt-1">Monthly BAH amount — check your LES or MyPay</p>
            </div>
          )}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Flight pay (ACIP)
            </label>
            <select
              value={acipIdx}
              onChange={(e) => setAcipIdx(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500"
            >
              {ACIP_OPTIONS.map((o, i) => (
                <option key={i} value={i}>{o.label}</option>
              ))}
            </select>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={dependents}
              onChange={(e) => setDependents(e.target.checked)}
              className="rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-300">With dependents</span>
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="print-area">
      <div className="mt-6 flex justify-end no-print">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 text-sm border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
          Print / Save as PDF
        </button>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 gap-6">
        {/* Military Breakdown */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-slate-200 mb-4">
            Military Total Compensation
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Base Pay</span>
              <span className="text-slate-200 font-mono">{formatCurrency(basePay)}</span>
            </div>
            {flightPay > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-400">Flight Pay (ACIP)</span>
                <span className="text-slate-200 font-mono">{formatCurrency(flightPay)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-400">BAH (tax-free)</span>
              <span className="text-emerald-400 font-mono">{formatCurrency(bah)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">BAS (tax-free)</span>
              <span className="text-emerald-400 font-mono">{formatCurrency(BAS)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">TRICARE value</span>
              <span className="text-emerald-400 font-mono">{formatCurrency(tricareSavings)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">TSP Match (5% BRS)</span>
              <span className="text-slate-200 font-mono">{formatCurrency(retirementContrib)}</span>
            </div>
            <div className="border-t border-slate-700 pt-3 flex justify-between">
              <span className="text-slate-200 font-semibold">Total</span>
              <span className="text-slate-100 font-mono font-bold text-lg">
                {formatCurrency(totalMilitaryComp)}
              </span>
            </div>
          </div>
        </div>

        {/* Civilian Equivalent */}
        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-slate-200 mb-4">
            Civilian Equivalent
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Military total comp</span>
              <span className="text-slate-200 font-mono">{formatCurrency(totalMilitaryComp)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Tax advantage of allowances</span>
              <span className="text-amber-400 font-mono">+{formatCurrency(taxAdvantage)}</span>
            </div>
            <div className="border-t border-blue-500/20 pt-3">
              <p className="text-slate-500 text-xs mb-2">
                A civilian employer would need to pay you approximately:
              </p>
              <p className="text-3xl font-bold text-blue-400 font-mono">
                {formatCurrency(civEquivalent)}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                to match your current military compensation, including
                healthcare, retirement, and the tax advantage of allowances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Shock */}
      <section className="mt-12 bg-slate-900/70 border border-slate-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-200 mb-4">
          The compensation shock is real
        </h2>
        <div className="space-y-3 text-sm text-slate-400">
          <p>
            TRICARE costs ~$726/year. Average civilian employer health plan costs
            ~$6,575/year for the employee share alone. That&rsquo;s a{" "}
            <strong className="text-red-400">7-9x increase</strong> in
            healthcare costs.
          </p>
          <p>
            30-40% of your military cash pay (BAH + BAS) is tax-free. In
            civilian life, every dollar is taxed. An O-3 who sees a &ldquo;$75K
            offer&rdquo; and compares it to their ~$69K base pay is leaving
            {formatCurrency(civEquivalent - 75000)} on the table.
          </p>
          <p>
            The research on anchoring (Tversky & Kahneman, 1974) shows that the
            first number in a negotiation shapes the outcome. If you don&rsquo;t
            know your real market value, someone else sets the anchor.
          </p>
        </div>
      </section>

      {/* Negotiation tips */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-200 mb-4">
          When they make the offer
        </h2>
        <div className="space-y-3 text-sm text-slate-400">
          <p>
            Fisher & Ury&rsquo;s principled negotiation framework: negotiate
            interests, not positions. Chris Voss&rsquo;s calibrated questions
            give the other party agency:
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex gap-2">
              <span className="text-slate-600">&bull;</span>
              <span>Instead of &ldquo;I need more money&rdquo; &rarr; &ldquo;How can we work together to get closer to the market rate for this role?&rdquo;</span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-600">&bull;</span>
              <span>Instead of &ldquo;That&rsquo;s too low&rdquo; &rarr; &ldquo;What flexibility is there in the compensation structure?&rdquo;</span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-600">&bull;</span>
              <span>Instead of &ldquo;Can you do better?&rdquo; &rarr; &ldquo;What would it take to move this closer to {formatCurrency(civEquivalent)}?&rdquo;</span>
            </li>
          </ul>
          <p className="mt-4 text-slate-500 text-xs">
            Babcock & Laschever (2003) found that not negotiating your first
            salary can cost over $600,000 in lifetime earnings. Negotiating
            respectfully does not damage the relationship (Marks & Harold, 2011).
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}

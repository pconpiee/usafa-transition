"use client";

import { useState } from "react";

const BASE_PAY: Record<string, Record<number, number>> = {
  "O-1": { 2: 45135, 3: 48974, 4: 51483 },
  "O-2": { 2: 54461, 3: 58354, 4: 62543, 5: 63836, 6: 64756 },
  "O-3": { 4: 68933, 5: 72256, 6: 75622, 7: 78232, 8: 82096, 9: 84850, 10: 86988 },
  "O-4": { 6: 81563, 8: 88742, 10: 95320, 12: 99851, 14: 103214, 16: 105112 },
  "O-5": { 10: 107436, 12: 112440, 14: 116532, 16: 120768, 18: 124872, 20: 128964 },
};

const BAH_RATES: Record<string, number> = {
  "Colorado Springs, CO": 22536,
  "Washington, DC": 33876,
  "San Antonio, TX": 22272,
  "Omaha, NE": 19404,
  "Dayton, OH": 18276,
  "Tampa, FL": 24252,
  "Los Angeles, CA": 39852,
  "Hampton Roads, VA": 24132,
  "Albuquerque, NM": 19476,
  "Huntsville, AL": 19944,
  "National Average": 23400,
};

const BAS = 3276; // annual officer BAS 2025

function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function CompTranslatorPage() {
  const [rank, setRank] = useState("O-3");
  const [years, setYears] = useState(6);
  const [location, setLocation] = useState("National Average");
  const [dependents, setDependents] = useState(true);

  const basePay = BASE_PAY[rank]?.[years] ?? BASE_PAY[rank]?.[Object.keys(BASE_PAY[rank]).map(Number).filter(y => y <= years).sort((a, b) => b - a)[0]] ?? 70000;
  const bah = BAH_RATES[location] ?? BAH_RATES["National Average"];
  const bahAdjusted = dependents ? bah : Math.round(bah * 0.85);
  const taxFreeAllowances = bahAdjusted + BAS;
  const tricareSavings = 5849; // civilian equivalent cost difference
  const retirementContrib = Math.round(basePay * 0.05); // BRS 5% match
  const totalMilitaryComp = basePay + taxFreeAllowances + tricareSavings + retirementContrib;

  // Tax advantage of tax-free allowances (est 22% bracket)
  const taxAdvantage = Math.round(taxFreeAllowances * 0.22);
  const civEquivalent = totalMilitaryComp + taxAdvantage;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Tool
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Know Your Worth
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        Your military compensation is worth more than your base pay suggests.
        Tax-free allowances, TRICARE, and retirement matching add up. See what
        a civilian employer would need to pay you to match it.
      </p>

      {/* Inputs */}
      <div className="mt-10 grid sm:grid-cols-2 gap-4">
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
            Duty Station / BAH Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500"
          >
            {Object.keys(BAH_RATES).map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
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
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
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
            <div className="flex justify-between">
              <span className="text-slate-400">BAH (tax-free)</span>
              <span className="text-emerald-400 font-mono">{formatCurrency(bahAdjusted)}</span>
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
            know your true worth, someone else sets the anchor.
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
  );
}

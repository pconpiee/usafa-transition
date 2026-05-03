const resources = [
  {
    name: "SkillBridge",
    rating: 8,
    category: "Government",
    url: "https://skillbridge.osd.mil",
    verdict: "The best thing DOD has done for transition.",
    detail:
      "Spend your final months on active duty doing a civilian internship while keeping full military pay and benefits. 70–90% hire rate. AF is the most SkillBridge-friendly branch. Duration limits changed April 2026: O-3 and below = 180 days, O-4 = 90 days, O-5 = 120 days. Start the process 12+ months out — approval is commander-dependent.",
    tip: "The best opportunities fill fast. Research companies early and have backup options. Some placements are beneath O-3/O-4 experience — negotiate for substantive roles, not administrative ones.",
  },
  {
    name: "Hire Our Heroes (HOH) Fellowship",
    rating: 8.5,
    category: "Nonprofit",
    url: "https://www.hiringourheroes.org/career-development/fellowships/",
    verdict: "SkillBridge done right. Chamber of Commerce connects you to a real company.",
    detail:
      "A 12-week fellowship through the U.S. Chamber of Commerce Foundation. You do your SkillBridge through HOH and they place you at a corporate partner — no need to cold-pitch companies yourself or navigate the paperwork alone. Partners include major Fortune 500 employers. Corporate Fellowship Track is the most competitive and most rewarding.",
    tip: "If you're eligible for SkillBridge and want corporate exposure, this handles the hardest part: getting in the door. Apply early — cohort spots are limited.",
  },
  {
    name: "Hire Heroes USA",
    rating: 8,
    category: "Nonprofit",
    url: "https://www.hireheroesusa.org",
    verdict: "The gold standard for free resume + career coaching.",
    detail:
      "Free career coaching, resume reviews, and job matching. Career coaches are often veterans themselves. Resume services are significantly better than TAP. 80%+ job placement rate across 90,000+ veterans served.",
    tip: "Start here for your resume. Their human-reviewed service is better than any automated military-to-civilian tool that exists.",
  },
  {
    name: "Breakline",
    rating: 8.5,
    category: "Nonprofit",
    url: "https://breakline.org",
    verdict: "Hidden gem. Best program for officers targeting tech/business.",
    detail:
      "Intensive multi-week programs with direct employer introductions to Google, Amazon, LinkedIn, and others. Selective admissions. Strong for officer-level candidates with leadership experience. Good for MBA-track and tech PM/business roles.",
    tip: "This is the one most people haven't heard of. If you're targeting tech or business, apply. It's the closest thing to SkillBridge for tech careers.",
  },
  {
    name: "ACP Mentorship",
    rating: 7.5,
    category: "Nonprofit",
    url: "https://www.acp-advisornet.org",
    verdict: "Free corporate mentor for a year. $90K average starting salary for participants.",
    detail:
      "Year-long mentorship pairing veterans with corporate professionals from JPMorgan, GE, Pfizer, etc. Matching quality is generally good. 98% of veterans would recommend. Best for those targeting Fortune 500 / corporate careers.",
    tip: "The one-on-one mentorship provides what TAP cannot: personalized guidance. Less useful for entrepreneurship or non-traditional paths.",
  },
  {
    name: "VET TEC",
    rating: 8,
    category: "VA Benefit",
    url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/",
    verdict: "VA-funded tech training — verify current GI Bill impact before enrolling.",
    detail:
      "VA funds approved coding and tech bootcamps through this program. Partners have included Galvanize, Flatiron, General Assembly, and others. Officially designed not to count against your GI Bill entitlement, but program details and eligibility have evolved — the VA website can be ambiguous. Verify the current GI Bill impact directly with VA before enrolling if preserving GI Bill for an MBA matters to you.",
    tip: "If the program is available and genuinely doesn't touch your GI Bill, it's an excellent option. Confirm that in writing before you commit. Check va.gov for current program status.",
  },
  {
    name: "Veterati",
    rating: 7,
    category: "Nonprofit",
    url: "https://www.veterati.com",
    verdict: "On-demand mentorship calls. Free, flexible, underutilized.",
    detail:
      "Digital mentorship platform where you browse mentor profiles and book phone/video calls. No year-long commitment required. Mentors include senior veterans who've successfully transitioned. Good for specific industry questions.",
    tip: "Use this for informational interviews when you don't have a personal connection in your target industry.",
  },
  {
    name: "Military OneSource",
    rating: 7,
    category: "Government",
    url: "https://www.militaryonesource.mil",
    verdict: "12 free counseling sessions AFTER separation. Almost nobody knows.",
    detail:
      "Free non-medical counseling, financial planning, tax prep, relocation assistance. Available up to 365 days post-separation. Most people don't realize it extends past active duty.",
    tip: "Bookmark this before you separate. The free counseling alone is worth it during the transition stress period.",
  },
  {
    name: "Code Platoon",
    rating: 8,
    category: "Bootcamp",
    url: "https://www.codeplatoon.org",
    verdict: "Veteran-specific coding bootcamp. Tight-knit community. Accepts GI Bill.",
    detail:
      "Immersive full-stack program designed specifically for veterans. Community is tight-knit. Strong alumni network. One of the best paths into software engineering for veterans.",
    tip: "Consider pairing VET TEC with Code Platoon if eligible. Or use GI Bill here and save VET TEC for another certification.",
  },
  {
    name: "USAFA AOG / Long Blue Line",
    rating: 6,
    category: "Alumni",
    url: "https://www.usafa.org",
    verdict: "The informal network is powerful. The formal programs lag behind West Point and Annapolis.",
    detail:
      "Career services exist but are less resourced than WPAOG or USNA Alumni Association. Regional chapters vary enormously — DC, Colorado Springs are active; most are dormant. The real value is informal: LinkedIn outreach to fellow grads gets a 60-70% response rate.",
    tip: "Don't wait for AOG to help you. Reach out to grads directly on LinkedIn. The shared Academy experience creates instant trust. Use it.",
  },
  {
    name: "TAP / SFL-TAP",
    rating: 4,
    category: "Government",
    url: "https://www.dodtap.mil",
    verdict: "Mandatory checkbox exercise. RAND found it's associated with LOWER wages.",
    detail:
      "Too generic (treats pilots and finance officers identically), too late (most attend within 90 days of sep), instructor quality varies wildly. The DOL employment workshop is the best part. Resume section is weak.",
    tip: "Complete it because you have to. Don't rely on it for anything. The Career Skills Program (CSP) pathway to SkillBridge is the only genuinely valuable piece.",
  },
  {
    name: "Bunker Labs",
    rating: 7.5,
    category: "Nonprofit",
    url: "https://bunkerlabs.org",
    verdict: "For the entrepreneurship-minded. Strong cohort programs.",
    detail:
      "Launch Lab, CEO Circle peer groups, and Veterans in Residence (co-working space). Best for veterans who want to start companies, not join them. Active chapters in major cities.",
    tip: "If you have the 'I want to build something' drive, this is your community. The CEO Circle peer groups are particularly valuable.",
  },
  {
    name: "Team Rubicon",
    rating: 8,
    category: "Nonprofit",
    url: "https://www.teamrubiconusa.org",
    verdict: "Not a career tool. The best thing for the 'loss of mission' problem.",
    detail:
      "Deploys veterans for disaster response and humanitarian aid. Addresses the loss of mission and purpose that is one of the deepest pain points. Leadership development opportunities are real.",
    tip: "If you're struggling with 'who am I without the uniform,' this bridges the gap better than any career program.",
  },
];

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating / 2);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-base leading-none ${i <= filled ? "text-amber-400" : "text-slate-700"}`}
        >
          ★
        </span>
      ))}
      <span className="text-xs text-slate-600 ml-1.5">{rating}/10</span>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
        Intel
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        Resource Ratings
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl">
        Honest ratings of every major transition resource. Based on veteran
        forum consensus, research data, and real outcomes. Not what the
        organizations say about themselves.
      </p>

      <div className="mt-10 space-y-6">
        {resources
          .sort((a, b) => b.rating - a.rating)
          .map((r) => (
            <div
              key={r.name}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-slate-100">
                      {r.name}
                    </h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {r.category}
                    </span>
                  </div>
                  <p className="text-sm text-blue-400 mt-1">{r.verdict}</p>
                </div>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-2"
                >
                  Visit site
                </a>
              </div>
              <StarRating rating={r.rating} />
              <p className="mt-4 text-sm text-slate-400">{r.detail}</p>
              <div className="mt-3 bg-slate-800/50 rounded-lg px-4 py-3">
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-amber-400">Tip:</span>{" "}
                  {r.tip}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* The Gap */}
      <section className="mt-12 bg-red-500/5 border border-red-500/20 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-200 mb-4">
          What&rsquo;s missing
        </h2>
        <ul className="space-y-3 text-sm text-slate-400">
          <li>
            <strong className="text-slate-300">Personalized, role-aware guidance.</strong>{" "}
            No program says &ldquo;You were a 62E at AFRL &mdash; here are the 15
            companies that hire your exact skill set.&rdquo;
          </li>
          <li>
            <strong className="text-slate-300">A unified timeline tool.</strong>{" "}
            The transition involves dozens of parallel workstreams. Nothing
            manages them together.
          </li>
          <li>
            <strong className="text-slate-300">Compensation benchmarking.</strong>{" "}
            &ldquo;What does the market actually pay?&rdquo; is the #1 anxiety and
            no good tool exists for total comp translation.
          </li>
          <li>
            <strong className="text-slate-300">Mid-career officer support.</strong>{" "}
            The O-3/O-4 with 8-12 years is too senior for entry-level programs
            and too junior for executive networks.
          </li>
          <li>
            <strong className="text-slate-300">Identity transition support.</strong>{" "}
            The psychological shift is under-addressed by career-focused programs.
          </li>
        </ul>
      </section>
    </div>
  );
}

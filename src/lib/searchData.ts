export interface SearchItem {
  title: string;
  description: string;
  href: string;
  type: 'stage' | 'path' | 'tool' | 'section';
  keywords?: string;
}

export const searchData: SearchItem[] = [
  // Stages
  { type: 'stage', title: 'Stage 01 — Who Are You Now', description: 'Identity work. The reckoning before strategy.', href: '/the-reckoning', keywords: 'identity reckoning separation transition' },
  { type: 'stage', title: 'Stage 02 — Know Your Gifts', description: 'Translate military experience into civilian capability language.', href: '/know-your-gifts', keywords: 'skills gifts translation resume military civilian' },
  { type: 'stage', title: 'Stage 03 — The Map', description: 'All 7 paths. Awareness before preference.', href: '/the-map', keywords: 'paths map career aviation airlines defense tech consulting' },
  { type: 'stage', title: 'Stage 04 — Networking', description: 'Weak ties, informational conversations, the 8-week protocol.', href: '/networking', keywords: 'networking weak ties informational linkedin contacts' },
  { type: 'stage', title: 'Stage 05 — The Search', description: 'Structured job search. Target list vs. pipeline.', href: '/the-search', keywords: 'job search applications linkedin target list pipeline' },
  { type: 'stage', title: 'Stage 06 — Application Package', description: 'Resume, LinkedIn, cover letter. Military-to-civilian translation.', href: '/application-package', keywords: 'resume cover letter linkedin application package' },
  { type: 'stage', title: 'Stage 07 — Interview Prep', description: 'STAR-L framework, story bank, managing anxiety.', href: '/interview-prep', keywords: 'interview STAR behavioral story anxiety questions' },
  { type: 'stage', title: 'Stage 08 — Managing the Pipeline', description: 'Track multiple processes. Stay in control.', href: '/managing-the-pipeline', keywords: 'pipeline tracking multiple offers process management' },
  { type: 'stage', title: 'Stage 09 — Negotiation', description: 'Anchor high. Full package. The most skipped step.', href: '/negotiation', keywords: 'negotiate salary offer compensation package anchor' },
  { type: 'stage', title: 'Stage 10 — First 90 Days', description: 'Land well. Observe before you act. 30/60/90.', href: '/first-90-days', keywords: 'first 90 days onboarding new job observe learn' },
  { type: 'stage', title: 'Stage 11 — The Long Game', description: 'Trajectory over title. Building toward optionality.', href: '/the-long-game', keywords: 'long game career trajectory optionality credibility' },
  { type: 'stage', title: 'Stage 12 — The Chain', description: 'Turn around. Pull the next person through.', href: '/the-chain', keywords: 'chain pay it forward mentorship community' },
  // Paths
  { type: 'path', title: 'Aviation Paths', description: 'Commercial, cargo, fractional/charter, corporate flight.', href: '/the-map/airlines', keywords: 'airlines commercial cargo fractional charter corporate aviation ATP majors' },
  { type: 'path', title: 'Defense & Aerospace', description: 'Primes, defense tech, BD vs PM, clearance premium.', href: '/the-map/defense', keywords: 'defense aerospace Lockheed Boeing Raytheon clearance program manager BD' },
  { type: 'path', title: 'Tech & Ops', description: 'Product management, BizOps, corporate strategy.', href: '/the-map/tech-ops', keywords: 'tech PM product manager BizOps operations startup corporate strategy' },
  { type: 'path', title: 'Finance & Consulting', description: 'MBB consulting, MBA bridge, IB-adjacent.', href: '/the-map/finance-consulting', keywords: 'finance consulting MBA McKinsey Bain BCG investment banking' },
  { type: 'path', title: 'Government & Civil Service', description: 'GS scale, Direct Hire, IC, FAA.', href: '/the-map/government', keywords: 'government GS civil service federal DIA NGA FAA inspector' },
  { type: 'path', title: 'Entrepreneurship', description: 'Startups, acquisition entrepreneurship, franchise.', href: '/the-map/entrepreneurship', keywords: 'entrepreneurship startup founder franchise acquisition SBA' },
  { type: 'path', title: 'Non-Traditional Paths', description: 'Education, nonprofit, coaching, ministry.', href: '/the-map/nontraditional', keywords: 'education nonprofit coaching ministry nontraditional alternative' },
  // Tools
  { type: 'tool', title: 'Comp Reference', description: 'Side-by-side compensation across all 7 paths.', href: '/comp', keywords: 'compensation salary comp reference table paths compare' },
  { type: 'tool', title: 'Comp Translator', description: 'Convert military pay to civilian total comp equivalent.', href: '/comp-translator', keywords: 'compensation translator military pay BAH BAS civilian equivalent' },
  { type: 'tool', title: 'Timeline Tool', description: 'Month-by-month transition calendar.', href: '/timeline', keywords: 'timeline calendar months separation plan schedule' },
  { type: 'tool', title: 'Bold Face Drills', description: 'Practice your answer to "tell me about yourself" and other must-answer questions.', href: '/bold-face', keywords: 'bold face drills practice interview tell me about yourself elevator pitch' },
  { type: 'tool', title: 'Resources', description: 'Rated guide to every program, nonprofit, and tool available.', href: '/resources', keywords: 'resources SkillBridge HOH Hire Heroes Breakline programs rated' },
  { type: 'tool', title: 'The Outlier Playbook', description: 'Five stages. What the highest performers did.', href: '/playbook', keywords: 'playbook outlier high performance five stages what worked' },
];

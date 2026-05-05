import Link from "next/link";

export const metadata = {
  title: "Tech & Business | Blue Canopy",
  description:
    "This path has been split into Tech & Ops and Finance & Consulting.",
};

export default function TechBusinessLanding() {
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Stage 03 &mdash; The Map
        </p>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
          <a href="/" className="hover:text-slate-400 transition-colors">Home</a>
          <span>/</span>
          <a href="/the-map" className="hover:text-slate-400 transition-colors">The Map</a>
          <span>/</span>
          <span className="text-slate-400">Path Split</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-50 mb-4">Tech &amp; Business</h1>
        <p className="text-slate-300 leading-relaxed mb-8">
          This path has been split into two distinct deep-dives because the decision trees, credentials,
          timelines, and comp trajectories are fundamentally different. Choose the one that matches where
          you&rsquo;re actually pointing:
        </p>
        <div className="space-y-4">
          <Link
            href="/the-map/tech-ops"
            className="flex flex-col gap-1 p-5 rounded-xl border border-purple-800/50 bg-purple-950/20 hover:border-purple-400/50 hover:bg-purple-950/30 transition"
          >
            <p className="font-bold text-slate-50 text-lg">Tech &amp; Ops &rarr;</p>
            <p className="text-sm text-purple-300 font-medium">Product management, BizOps, corporate strategy, operations at tech companies</p>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Direct entry via referral or veteran program. $100K–$160K to start; Director/VP + equity at 10 years.
              The network is the path in, not applications.
            </p>
          </Link>
          <Link
            href="/the-map/finance-consulting"
            className="flex flex-col gap-1 p-5 rounded-xl border border-indigo-800/50 bg-indigo-950/20 hover:border-indigo-400/50 hover:bg-indigo-950/30 transition"
          >
            <p className="font-bold text-slate-50 text-lg">Finance &amp; Consulting &rarr;</p>
            <p className="text-sm text-indigo-300 font-medium">MBB consulting, corporate finance, PE-adjacent roles, and the MBA bridge</p>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              The credential-heavy end. MBA is often the bridge — and for USAFA grads it&rsquo;s frequently free via
              Yellow Ribbon. SkillBridge fellowships at McKinsey, BCG, and Bain offer the direct path.
              $220–250K post-MBA MBB; $400K+ at Year 7.
            </p>
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/the-map" className="text-sm text-slate-400 hover:text-slate-200 transition">
            &larr; Back to The Map
          </Link>
        </div>
      </div>
    </div>
  );
}

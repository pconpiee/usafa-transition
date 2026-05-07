import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="text-slate-300 font-semibold mb-2">Blue Canopy</p>
            <p className="text-slate-500 leading-relaxed text-xs">
              A free transition guide for USAFA grads leaving active duty.
              No login. No paywall. No pitch.
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Start here</p>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/the-reckoning" className="text-slate-400 hover:text-blue-400 transition-colors">Stage 01 — Who Are You Now</Link></li>
              <li><Link href="/the-map" className="text-slate-400 hover:text-blue-400 transition-colors">Stage 03 — The Map</Link></li>
              <li><Link href="/networking" className="text-slate-400 hover:text-blue-400 transition-colors">Stage 04 — Networking</Link></li>
              <li><Link href="/paths" className="text-slate-400 hover:text-blue-400 transition-colors">All paths</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Reach out</p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="mailto:pb.connollys@gmail.com?subject=Blue%20Canopy%20feedback"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  pb.connollys@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:pb.connollys@gmail.com?subject=Blue%20Canopy%20—%20found%20an%20error"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Report an error
                </a>
              </li>
              <li><Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors">About this site</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 text-center space-y-2">
          <p className="text-slate-500 text-xs italic leading-relaxed max-w-xl mx-auto">
            &ldquo;The place God calls you to is the place where your deep gladness and the world&rsquo;s deep hunger meet.&rdquo; &mdash; Frederick Buechner
          </p>
          <p className="text-slate-600 text-xs">
            Built for the long blue line.
          </p>
        </div>
      </div>
    </footer>
  );
}

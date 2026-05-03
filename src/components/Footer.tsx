export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center space-y-4">
          <p className="text-slate-500 text-sm italic">
            &ldquo;There are good ships and wood ships, and ships that sail the seas.
            But the best ships are friendships, and may they always be.&rdquo;
          </p>
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Blue Skies &mdash; 487
          </p>
          <p className="text-slate-500 text-xs">
            If the question of identity-when-the-marker-moves is the one you
            are actually living with, there is a longer paper on it here:{" "}
            <a
              href="https://hidden-nine-beta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              Hidden
            </a>
            .
          </p>
          <div className="pt-2 border-t border-slate-900 space-y-2">
            <p className="text-slate-600 text-xs">
              Free. No login. No paywall. Every tool on this site is yours.
            </p>
            <p className="text-slate-700 text-xs italic">
              &ldquo;The place God calls you to is the place where your deep gladness and the world&rsquo;s deep hunger meet.&rdquo; &mdash; Frederick Buechner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

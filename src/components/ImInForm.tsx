"use client";

import { useState } from "react";

const pathOptions = [
  "Not sure yet",
  "Commercial Airlines",
  "Defense & Aerospace",
  "Tech & Ops (PM, BizOps, corporate strategy)",
  "Finance & Consulting (MBB, MBA, IB-adjacent)",
  "Government & Civil Service",
  "Entrepreneurship / Startup",
  "Non-Traditional (education, nonprofit, ministry)",
];

export default function ImInForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sepDate, setSepDate] = useState("");
  const [path, setPath] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setError(false);
    try {
      const url = process.env.NEXT_PUBLIC_FORMSPREE_IIM_URL;
      if (!url) throw new Error("missing endpoint");
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.slice(0, 200),
          email: email.slice(0, 200),
          separationDate: sepDate.slice(0, 100),
          path: path.slice(0, 100),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="im-in" className="border border-blue-800/40 bg-blue-950/20 rounded-xl p-6">
      {submitted ? (
        <div className="text-center py-4">
          <p className="text-slate-200 font-semibold mb-2">Got it.</p>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
            You&rsquo;ll hear back personally — not an autoresponder. An offer to schedule 30 minutes.
            No script. No agenda.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold text-slate-100 mb-1">I&rsquo;m doing this.</h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            Name, email, and a rough separation date. That&rsquo;s it. You&rsquo;ll get a personal
            reply &mdash; an offer to schedule 30 minutes, ask anything, hear where you are. No script.
            No agenda.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={200}
                aria-label="Name"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  required
                  maxLength={200}
                  aria-label="Email"
                  aria-invalid={emailTouched && email.length > 0 && !emailValid}
                  className={`w-full bg-slate-900 border rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500 ${
                    emailTouched && email.length > 0 && !emailValid ? "border-red-500/60" : "border-slate-700"
                  }`}
                />
                {emailTouched && email.length > 0 && !emailValid && (
                  <p className="text-xs text-red-400 mt-1">Doesn&rsquo;t look like an email.</p>
                )}
              </div>
            </div>
            <input
              type="text"
              placeholder="Rough separation date (e.g. Spring 2026, Oct 2025)"
              value={sepDate}
              onChange={(e) => setSepDate(e.target.value)}
              maxLength={100}
              aria-label="Rough separation date"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <select
              value={path}
              onChange={(e) => setPath(e.target.value)}
              aria-label="Which path are you most drawn to?"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Which path are you most drawn to?</option>
              {pathOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {error && (
              <p role="alert" className="text-sm text-red-400">Something went wrong sending that. Try again in a moment.</p>
            )}
            <button
              type="submit"
              disabled={pending}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
            >
              {pending ? "Sending…" : "I’m in →"}
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-500">
            No spam. No autoresponder. One human on the other end.
          </p>
        </>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ message }),
    });
    setSubmitted(true);
    setMessage("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg flex items-center justify-center transition-colors"
        aria-label="Send feedback"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16c0 1.1-.9 2-2 2H7l-4 4V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10z" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-300"
              aria-label="Close"
            >
              ✕
            </button>
            {submitted ? (
              <div className="text-center py-4">
                <p className="text-slate-200 font-medium mb-1">Got it — thanks.</p>
                <p className="text-sm text-slate-500">Feedback helps make this better for the next person.</p>
                <button
                  onClick={() => { setSubmitted(false); setOpen(false); }}
                  className="mt-4 text-sm text-blue-400 hover:text-blue-300"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <p className="text-slate-200 font-medium mb-1">What&apos;s missing? What&apos;s wrong?</p>
                  <p className="text-xs text-slate-500 mb-3">Anonymous. Not monitored for replies. Just collected so it can make the next version better.</p>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Something was wrong, missing, or confusing..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

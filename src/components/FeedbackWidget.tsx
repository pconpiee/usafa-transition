"use client";

import { useState, useEffect, useRef } from "react";
import { useFocusTrap } from "@/lib/useFocusTrap";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef, open);

  useEffect(() => {
    const opener = () => setOpen(true);
    window.addEventListener("blue-canopy:open-feedback", opener);
    return () => window.removeEventListener("blue-canopy:open-feedback", opener);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    setTimeout(() => {
      const first = dialogRef.current?.querySelector<HTMLElement>(
        'textarea, button, [href], input, select, [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    }, 50);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) triggerRef.current?.focus();
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setError(false);
    try {
      const url = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      if (!url) throw new Error("missing endpoint");
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ message: message.slice(0, 2000) }),
      });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
      setMessage("");
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-colors"
        aria-label="What's missing? Send feedback"
      >
        <svg aria-hidden="true" className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16c0 1.1-.9 2-2 2H7l-4 4V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10z" />
        </svg>
        <span className="text-sm font-medium">What&apos;s missing?</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
            className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200"
              aria-label="Close"
            >
              ✕
            </button>
            {submitted ? (
              <div className="text-center py-4">
                <p id="feedback-title" className="text-slate-200 font-medium mb-1">Got it — thanks.</p>
                <p className="text-sm text-slate-400">Feedback helps make this better for the next person.</p>
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
                  <p id="feedback-title" className="text-slate-200 font-medium mb-3">What&apos;s missing from this site that will help future USAFA grads find jobs?</p>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    minLength={5}
                    maxLength={2000}
                    placeholder="Something was wrong, missing, or confusing..."
                    aria-label="Your feedback"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus:border-blue-500 resize-none"
                    required
                  />
                </div>
                {error && (
                  <p role="alert" className="text-sm text-red-400">Something went wrong sending that. Try again in a moment.</p>
                )}
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
                >
                  {pending ? "Sending…" : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

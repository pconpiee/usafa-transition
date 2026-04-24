"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Stage =
  | "discovery"
  | "qualification"
  | "research"
  | "networking"
  | "applied"
  | "interview"
  | "offer"
  | "archived";

interface Job {
  id: string;
  title: string;
  company: string;
  stage: Stage;
  notes: string;
  addedAt: string;
}

const STAGES: { key: Stage; label: string; desc: string; color: string }[] = [
  { key: "discovery", label: "Stage 0 — Discovery", desc: "Found it, not yet qualified", color: "slate" },
  { key: "qualification", label: "Stage 1 — Qualify", desc: "Hard constraints check", color: "amber" },
  { key: "research", label: "Stage 2 — Research", desc: "Org, role, positioning", color: "blue" },
  { key: "networking", label: "Stage 3 — Network", desc: "2+ quality interactions", color: "violet" },
  { key: "applied", label: "Stage 4 — Applied", desc: "Package submitted", color: "cyan" },
  { key: "interview", label: "Stage 5 — Interview", desc: "Active conversations", color: "emerald" },
  { key: "offer", label: "Stage 6 — Offer", desc: "Negotiation + decision", color: "green" },
  { key: "archived", label: "Archive", desc: "Closed / passed / declined", color: "slate" },
];

const STORAGE_KEY = "jpos-pipeline-v1";

function newJob(title: string, company: string): Job {
  return {
    id: crypto.randomUUID(),
    title,
    company,
    stage: "discovery",
    notes: "",
    addedAt: new Date().toISOString(),
  };
}

export default function TheSearchPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setJobs(JSON.parse(raw));
    } catch {}
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  function addJob() {
    if (!newTitle.trim() || !newCompany.trim()) return;
    setJobs((prev) => [...prev, newJob(newTitle.trim(), newCompany.trim())]);
    setNewTitle("");
    setNewCompany("");
    setShowAdd(false);
  }

  function moveJob(id: string, stage: Stage) {
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, stage } : j)));
  }

  function saveNotes(id: string) {
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, notes: editNotes } : j)));
    setEditId(null);
  }

  function deleteJob(id: string) {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }

  const stageColor = (key: Stage) => {
    const s = STAGES.find((s) => s.key === key);
    const map: Record<string, string> = {
      slate: "text-slate-400",
      amber: "text-amber-400",
      blue: "text-blue-400",
      violet: "text-violet-400",
      cyan: "text-cyan-400",
      emerald: "text-emerald-400",
      green: "text-green-400",
    };
    return map[s?.color ?? "slate"] ?? "text-slate-400";
  };

  const stageBorderColor = (key: Stage) => {
    const s = STAGES.find((s) => s.key === key);
    const map: Record<string, string> = {
      slate: "border-slate-700",
      amber: "border-amber-500/30",
      blue: "border-blue-500/30",
      violet: "border-violet-500/30",
      cyan: "border-cyan-500/30",
      emerald: "border-emerald-500/30",
      green: "border-green-500/30",
    };
    return map[s?.color ?? "slate"] ?? "border-slate-700";
  };

  const activeJobs = STAGES.filter((s) => s.key !== "archived").map((s) => ({
    ...s,
    jobs: jobs.filter((j) => j.stage === s.key),
  }));

  const archivedJobs = jobs.filter((j) => j.stage === "archived");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl">
        <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
          Stage 05 — The Search
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
          The Search
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl">
          The Job Pursuit Operating System. Every role you&rsquo;re tracking
          moves through 7 stages. Gate before effort — no deep work until
          hard constraints pass.
        </p>
      </div>

      {/* JPOS principles */}
      <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-4xl">
        {[
          { p: "Gate before effort", d: "No deep work until hard constraints (visa, comp floor, location) are confirmed to pass." },
          { p: "Evidence over claims", d: "Every application assertion maps to a specific story with proof." },
          { p: "Value before ask", d: "Network is contribution-first. Give before you ask for introductions." },
        ].map((item) => (
          <div key={item.p} className="bg-slate-900/70 border border-slate-800 rounded-lg p-4 text-sm">
            <p className="text-slate-200 font-medium mb-1">{item.p}</p>
            <p className="text-slate-500 text-xs">{item.d}</p>
          </div>
        ))}
      </div>

      {/* Stage gates quick reference */}
      <div className="mt-8 max-w-4xl">
        <details className="group">
          <summary className="cursor-pointer text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-2">
            <span className="group-open:hidden">▶</span>
            <span className="hidden group-open:inline">▼</span>
            JPOS stage gates — what needs to be true to advance each stage
          </summary>
          <div className="mt-4 space-y-2">
            {[
              { s: "Stage 0 → 1", gate: "Role is real, relevant, and has an actionable deadline." },
              { s: "Stage 1 → 2", gate: "All hard constraints pass: work auth, comp floor, location, timeline, values." },
              { s: "Stage 2 → 3", gate: "At least 60% of critical requirements have credible evidence in your story bank." },
              { s: "Stage 3 → 4", gate: "At least 2 quality interactions, at least 1 internal or ecosystem signal of fit." },
              { s: "Stage 4 → 5", gate: "Acknowledgment received or follow-up sent on schedule." },
              { s: "Stage 5 → 6", gate: "Offer, hold, or rejection captured with explicit next action." },
            ].map((row) => (
              <div key={row.s} className="flex gap-4 text-xs">
                <span className="text-blue-400 font-mono w-24 flex-shrink-0">{row.s}</span>
                <span className="text-slate-400">{row.gate}</span>
              </div>
            ))}
          </div>
        </details>
      </div>

      {/* Add job button */}
      <div className="mt-10 max-w-4xl">
        {!showAdd ? (
          <button
            onClick={() => setShowAdd(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            + Add role to pipeline
          </button>
        ) : (
          <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row gap-3 items-end">
            <div className="flex-1">
              <label className="text-xs text-slate-500 mb-1 block">Role title</label>
              <input
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500"
                placeholder="e.g. Program Manager"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addJob()}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-slate-500 mb-1 block">Company</label>
              <input
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500"
                placeholder="e.g. Lockheed Martin"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addJob()}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={addJob}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Add
              </button>
              <button
                onClick={() => setShowAdd(false)}
                className="px-4 py-2 text-slate-400 hover:text-slate-200 text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Pipeline Kanban */}
      <div className="mt-8 space-y-4">
        {activeJobs.map((stage) => (
          <div key={stage.key}>
            <div className={`flex items-center gap-2 mb-2`}>
              <span className={`text-xs font-semibold uppercase tracking-wide ${stageColor(stage.key)}`}>
                {stage.label}
              </span>
              <span className="text-xs text-slate-600">— {stage.desc}</span>
              {stage.jobs.length > 0 && (
                <span className={`ml-auto text-xs font-mono ${stageColor(stage.key)}`}>
                  {stage.jobs.length}
                </span>
              )}
            </div>

            {stage.jobs.length === 0 ? (
              <div className={`border border-dashed ${stageBorderColor(stage.key)} rounded-xl p-4 text-xs text-slate-700 text-center`}>
                No roles in this stage
              </div>
            ) : (
              <div className="space-y-2">
                {stage.jobs.map((job) => (
                  <div
                    key={job.id}
                    className={`bg-slate-900/70 border ${stageBorderColor(stage.key)} rounded-xl p-4`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-200 truncate">{job.title}</p>
                        <p className="text-xs text-slate-500">{job.company}</p>
                        {job.notes && (
                          <p className="text-xs text-slate-600 mt-1 truncate">{job.notes}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {/* Move stage selector */}
                        <select
                          value={job.stage}
                          onChange={(e) => moveJob(job.id, e.target.value as Stage)}
                          className="text-xs bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-300 focus:outline-none focus:border-blue-500"
                        >
                          {STAGES.map((s) => (
                            <option key={s.key} value={s.key}>
                              {s.key === "archived" ? "Archive" : s.label.replace("Stage ", "S")}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={() => {
                            setEditId(editId === job.id ? null : job.id);
                            setEditNotes(job.notes);
                          }}
                          className="text-xs text-slate-500 hover:text-slate-300 px-2 py-1 transition-colors"
                          title="Notes"
                        >
                          📝
                        </button>
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="text-xs text-slate-600 hover:text-red-400 px-1 py-1 transition-colors"
                          title="Delete"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    {editId === job.id && (
                      <div className="mt-3">
                        <textarea
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500 resize-none"
                          rows={3}
                          placeholder="Notes, next action, contacts, gate status..."
                          value={editNotes}
                          onChange={(e) => setEditNotes(e.target.value)}
                        />
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => saveNotes(job.id)}
                            className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditId(null)}
                            className="text-xs px-3 py-1 text-slate-500 hover:text-slate-300 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Archive */}
        {archivedJobs.length > 0 && (
          <details className="group">
            <summary className="cursor-pointer text-xs text-slate-600 hover:text-slate-400 transition-colors flex items-center gap-2">
              <span>Archive ({archivedJobs.length} roles)</span>
            </summary>
            <div className="mt-2 space-y-2">
              {archivedJobs.map((job) => (
                <div key={job.id} className="bg-slate-900/30 border border-slate-800 rounded-xl p-4 opacity-60">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-400">{job.title}</p>
                      <p className="text-xs text-slate-600">{job.company}</p>
                    </div>
                    <div className="flex gap-1">
                      <select
                        value={job.stage}
                        onChange={(e) => moveJob(job.id, e.target.value as Stage)}
                        className="text-xs bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-400 focus:outline-none"
                      >
                        {STAGES.map((s) => (
                          <option key={s.key} value={s.key}>{s.label}</option>
                        ))}
                      </select>
                      <button onClick={() => deleteJob(job.id)} className="text-xs text-slate-700 hover:text-red-400 px-1 py-1">✕</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>

      {/* Weekly cadence */}
      <section className="mt-16 max-w-4xl">
        <h2 className="text-xl font-bold text-slate-100 mb-4">
          Weekly cadence
        </h2>
        <div className="grid sm:grid-cols-5 gap-3">
          {[
            { day: "Mon", task: "Pipeline triage. Stage gates. Planning." },
            { day: "Tue", task: "Research and positioning artifacts." },
            { day: "Wed", task: "Outreach and conversations." },
            { day: "Thu", task: "Applications and interview execution." },
            { day: "Fri", task: "Follow-ups, metrics, PEDL updates." },
          ].map((d) => (
            <div key={d.day} className="bg-slate-900/70 border border-slate-800 rounded-lg p-3 text-center">
              <p className="text-sm font-semibold text-blue-400 mb-1">{d.day}</p>
              <p className="text-xs text-slate-500">{d.task}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PEDL section */}
      <section className="mt-12 max-w-4xl bg-slate-900/70 border border-slate-800 rounded-xl p-6">
        <h3 className="text-base font-semibold text-slate-200 mb-2">
          PEDL after every stage close
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          Win or lose — capture and apply lessons. The search that doesn&rsquo;t
          debrief is just chaos with paperwork.
        </p>
        <div className="grid sm:grid-cols-4 gap-3 text-sm">
          {[
            { l: "P", w: "Plan", d: "What was your goal and strategy for this role?" },
            { l: "E", w: "Execute", d: "What actually happened at each stage?" },
            { l: "D", w: "Debrief", d: "Two things that worked. Two things to change." },
            { l: "L", w: "Learn", d: "One thing you carry into the next role cycle." },
          ].map((item) => (
            <div key={item.l} className="bg-slate-800/50 rounded-lg p-3">
              <span className="text-blue-400 font-bold text-lg font-mono">{item.l}</span>
              <span className="text-slate-400 text-xs font-medium ml-1">{item.w}</span>
              <p className="text-xs text-slate-500 mt-1">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-4 max-w-4xl text-xs text-slate-600">
        Your pipeline data is stored locally in your browser. Nothing leaves
        your device.
      </p>

      {/* Navigation */}
      <div className="mt-16 max-w-4xl pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-between">
        <Link
          href="/networking"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          ← Stage 04: Networking
        </Link>
        <Link
          href="/application-package"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Stage 06: Applications →
        </Link>
      </div>

      <p className="mt-12 text-sm text-slate-600 italic">Blue Skies — 487</p>
    </div>
  );
}

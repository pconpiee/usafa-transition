"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const KEY = "blue-canopy:visited-stages-v1";

const STAGE_PATHS = new Set([
  "/the-reckoning",
  "/know-your-gifts",
  "/the-map",
  "/networking",
  "/the-search",
  "/application-package",
  "/interview-prep",
  "/managing-the-pipeline",
  "/negotiation",
  "/first-90-days",
  "/the-long-game",
  "/the-chain",
]);

export function useVisitedStages() {
  const pathname = usePathname();
  const [visited, setVisited] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setVisited(new Set(JSON.parse(raw)));
    } catch {}
  }, []);

  useEffect(() => {
    if (!STAGE_PATHS.has(pathname)) return;
    setVisited((prev) => {
      if (prev.has(pathname)) return prev;
      const next = new Set(prev);
      next.add(pathname);
      try { localStorage.setItem(KEY, JSON.stringify([...next])); } catch {}
      return next;
    });
  }, [pathname]);

  const reset = useCallback(() => {
    setVisited(new Set());
    try { localStorage.removeItem(KEY); } catch {}
  }, []);

  return { visited, reset };
}

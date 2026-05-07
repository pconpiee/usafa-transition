"use client";

import { usePathname } from "next/navigation";
import StageTopBar from "@/components/StageTopBar";

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

export default function MaybeStageTopBar() {
  const pathname = usePathname();
  if (!STAGE_PATHS.has(pathname)) return null;
  return <StageTopBar current={pathname} />;
}

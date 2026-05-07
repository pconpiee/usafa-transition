"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SearchModalPanel = dynamic(() => import("./SearchModalPanel"), { ssr: false });

export default function SearchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const opener = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("blue-canopy:open-search", opener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("blue-canopy:open-search", opener);
    };
  }, []);

  if (!open) return null;
  return <SearchModalPanel onClose={() => setOpen(false)} />;
}

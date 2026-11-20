"use client";
import { useEffect, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { profile } from "@/data/portfolio";

type Status = "idle" | "copied" | "failed";

/** Copies the email address to the clipboard, with visible + announced feedback. */
export default function CopyEmailButton() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const t = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(t);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-4 py-2 text-sm font-semibold text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
      >
        {status === "copied" ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
        {status === "copied" ? "Copied!" : "Copy email"}
      </button>
      <span role="status" className="font-mono text-xs text-mute">
        {status === "copied" && `${profile.email} copied to clipboard`}
        {status === "failed" && "Couldn’t copy — please select the address manually"}
      </span>
    </span>
  );
}

"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icon";

type CopyButtonProps = {
  value: string;
  label: string;
  icon: ReactNode;
};

export function CopyButton({ value, label, icon }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    setCopied(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        copied ? `${label} copied to clipboard` : `Copy ${label} to clipboard`
      }
      className={`flex w-full items-center gap-3 rounded-xl border bg-surface-0/40 px-4 py-3 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 ${
        copied
          ? "border-green/40 text-green"
          : "border-white/5 text-subtext-1 hover:text-text hover:border-lavender/30"
      }`}
    >
      {icon}
      <span className="text-sm truncate flex-1 text-left">
        {copied ? "Copied!" : label}
      </span>
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 shrink-0" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5 shrink-0 text-overlay-1" />
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
}

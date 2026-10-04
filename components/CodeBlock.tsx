"use client";

import { useRef, useState } from "react";

export function CodeBlock(props: React.ComponentPropsWithoutRef<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(ref.current?.textContent ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="relative my-6">
      <button
        onClick={copy}
        className="absolute right-3 top-3 z-10 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre ref={ref} {...props} />
    </div>
  );
}
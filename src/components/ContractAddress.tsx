"use client";

import { useState } from "react";
import { TOKEN } from "@/lib/token";

/** Copies the official contract address to clipboard with visual confirmation. */
export function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const addr = TOKEN.CONTRACT_ADDRESS;

  const copy = async () => {
    if (!addr) return;
    await navigator.clipboard.writeText(addr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="glass relative overflow-hidden rounded-2xl border border-neon/20 bg-ink/60 px-5 py-4 sm:px-7 sm:py-5">
      {/* top glow line */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

      <p className="font-mono text-[0.6rem] tracking-[0.3em] text-neon/80 uppercase">
        Official Contract Address
      </p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        {addr ? (
          <span className="flex-1 break-all font-mono text-[0.78rem] text-white/85 sm:text-sm">
            {addr}
          </span>
        ) : (
          <span className="flex items-center gap-2 font-mono text-[0.78rem] text-white/45">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Not yet deployed — will be announced here first
          </span>
        )}

        <button
          type="button"
          onClick={copy}
          disabled={!addr}
          aria-label={copied ? "Address copied" : "Copy contract address"}
          className={`group flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.18em] uppercase transition-all duration-300 ${
            addr
              ? copied
                ? "border-neon/60 bg-neon/15 text-neon"
                : "border-white/15 text-white/70 hover:border-neon/50 hover:bg-neon/10 hover:text-neon"
              : "cursor-not-allowed border-white/10 text-white/30 opacity-50"
          }`}
        >
          {copied ? (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
                <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
              </svg>
              Copy Address
            </>
          )}
        </button>
      </div>
    </div>
  );
}

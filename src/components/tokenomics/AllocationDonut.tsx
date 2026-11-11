"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SVGProps } from "react";

export type Allocation = { label: string; percent: number; color: string };

const R = 80;
const C = 2 * Math.PI * R;

/**
 * 3D-inspired donut chart. Pass verified `allocations` (percentages summing to 100)
 * to render real segments. With no data it renders an empty, softly animated
 * "Coming Soon" ring, so no figures are ever implied before they are final.
 */
export function AllocationDonut({ allocations = [] }: { allocations?: Allocation[] }) {
  const reduce = useReducedMotion();
  const hasData = allocations.length > 0;

  let offset = 0;
  const segments = allocations.map((a) => {
    const len = (a.percent / 100) * C;
    const seg = { ...a, dash: `${Math.max(len - 3, 0)} ${C}`, offset: -offset };
    offset += len;
    return seg;
  });

  const ring = (stroke: string, extra?: SVGProps<SVGCircleElement>) => (
    <circle cx="100" cy="100" r={R} fill="none" stroke={stroke} strokeWidth="26" {...extra} />
  );

  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div className="relative aspect-square [perspective:1000px]">
        <div aria-hidden="true" className="glow-pulse absolute inset-[18%] rounded-full bg-neon/20 blur-3xl" />
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          initial={reduce ? false : { rotateX: 0, opacity: 0 }}
          whileInView={{ rotateX: 28, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Extruded depth: stacked rings below the top face */}
          {[...Array(8)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 200 200"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              style={{ transform: `translateZ(${-(i + 1) * 2.5}px)` }}
            >
              {ring(i < 7 ? "#0a2e15" : "#020403")}
            </svg>
          ))}

          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <defs>
              <linearGradient id="pending" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#063b19" />
                <stop offset="50%" stopColor="#0d5a26" />
                <stop offset="100%" stopColor="#063b19" />
              </linearGradient>
              <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#39ff14" stopOpacity="0" />
                <stop offset="100%" stopColor="#8cff00" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {ring("url(#pending)")}

            {hasData ? (
              segments.map((s, i) => (
                <motion.circle
                  key={s.label}
                  cx="100"
                  cy="100"
                  r={R}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="26"
                  strokeDasharray={s.dash}
                  strokeDashoffset={s.offset}
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                />
              ))
            ) : (
              <>
                {/* Segment ticks hint at a structure without implying any values */}
                {ring("#030604", { strokeDasharray: `1.2 ${C / 24 - 1.2}`, strokeWidth: 27 })}
                <g className={reduce ? "" : "spin-slow"} style={{ transformOrigin: "100px 100px", animationDuration: "8s" }}>
                  {ring("url(#sweep)", { strokeDasharray: `${C * 0.22} ${C}`, strokeLinecap: "round", strokeWidth: 4 })}
                </g>
              </>
            )}

            {/* Rim highlights */}
            <circle cx="100" cy="100" r={R + 13} fill="none" stroke="#d8b45a" strokeOpacity="0.55" strokeWidth="0.8" />
            <circle cx="100" cy="100" r={R - 13} fill="none" stroke="#39ff14" strokeOpacity="0.35" strokeWidth="0.8" />
          </svg>
        </motion.div>

        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.3em] text-white/45 uppercase">Token allocation</p>
            <p className="mt-2 font-display text-2xl font-bold uppercase sm:text-3xl">
              {hasData ? "100%" : <span className="text-gradient-green">Coming Soon</span>}
            </p>
          </div>
        </div>
      </div>

      <figcaption className="mt-8 text-center text-sm text-white/50">
        {hasData
          ? "Final, verified token allocation."
          : "Allocation will be published only after it is finalized and verified. No figures are shown until then."}
      </figcaption>

      {hasData && (
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {allocations.map((a) => (
            <li key={a.label} className="glass flex items-center justify-between rounded-xl px-4 py-3 text-sm">
              <span className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: a.color }} />
                {a.label}
              </span>
              <span className="font-mono">{a.percent}%</span>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}

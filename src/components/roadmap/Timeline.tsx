"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type Phase = { id: string; num: string; name: string; tagline: string; items: string[] };

export function Timeline({ phases }: { phases: Phase[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  // Track which phase is in focus to light up its node and the navigator
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const mid = window.innerHeight * 0.5;
      let current = 0;
      let last = 0;
      phases.forEach((p, i) => {
        const el = document.getElementById(p.id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        last = i;
        if (top <= mid) current = i;
      });
      // When the page bottom is reached, focus the final phase
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = last;
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [phases]);

  return (
    <div className="relative">
      {/* Phase navigator */}
      <nav aria-label="Roadmap phases" className="sticky top-20 z-20 -mx-1 mb-14 sm:top-24">
        <ul className="glass mx-auto flex max-w-3xl gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none]">
          {phases.map((p, i) => (
            <li key={p.id} className="relative min-w-fit flex-1">
              <a
                href={`#${p.id}`}
                aria-current={active === i ? "step" : undefined}
                className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 font-display text-[0.65rem] font-semibold tracking-[0.14em] whitespace-nowrap uppercase transition-colors duration-300 sm:text-[0.7rem] ${
                  active === i ? "text-ink" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="font-mono">{p.num}</span>
                <span className="hidden sm:inline">{p.name.replace("The ", "")}</span>
              </a>
              {active === i && (
                <motion.span
                  layoutId="phase-pill"
                  className="absolute inset-0 rounded-full bg-neon shadow-[0_0_24px_-4px_rgb(57_255_20/0.8)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      <ol ref={ref} className="relative">
        {/* Track */}
        <div aria-hidden="true" className="absolute top-0 bottom-0 left-5 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : progress }}
          className="absolute top-0 bottom-0 left-5 w-[2px] origin-top -translate-x-[0.5px] bg-gradient-to-b from-neon via-electric to-gold shadow-[0_0_14px_rgb(57_255_20/0.8)] md:left-1/2 md:-translate-x-1/2"
        />

        {phases.map((p, i) => {
          const right = i % 2 === 1;
          const isActive = active === i;
          return (
            <li key={p.id} id={p.id} className="relative scroll-mt-44 pb-16 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              {/* Node */}
              <span
                aria-hidden="true"
                className={`absolute top-6 left-5 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 transition-all duration-500 md:left-1/2 ${
                  isActive ? "scale-125 border-neon bg-ink shadow-[0_0_0_6px_rgb(57_255_20/0.15),0_0_24px_#39ff14]" : "border-white/25 bg-ink"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full transition-colors ${isActive ? "bg-neon" : "bg-white/30"}`} />
              </span>

              <motion.article
                initial={reduce ? false : { opacity: 0, x: right ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group glass relative overflow-hidden rounded-3xl p-7 transition-[border-color,box-shadow] duration-500 sm:p-9 ${
                  right ? "md:col-start-2" : "md:col-start-1 md:text-right"
                } ${isActive ? "border-neon/35 shadow-[0_30px_80px_-35px_rgb(57_255_20/0.45)]" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -top-6 font-display text-[7rem] leading-none font-extrabold text-white/[0.035] select-none ${
                    right ? "right-4" : "left-4 md:right-4 md:left-auto"
                  }`}
                >
                  {p.num}
                </span>

                <div className={`relative flex items-center gap-3 ${right ? "" : "md:justify-end"}`}>
                  <span className="font-mono text-[0.68rem] tracking-[0.25em] text-neon uppercase">Phase {p.num}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[0.58rem] tracking-[0.18em] text-white/45 uppercase">
                    Proposed
                  </span>
                </div>
                <h2 className="relative mt-4 font-display text-2xl font-bold uppercase sm:text-3xl">{p.name}</h2>
                <p className="relative mt-2 text-white/50">{p.tagline}</p>

                <ul className="relative mt-7 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className={`flex items-start gap-3 ${right ? "" : "md:flex-row-reverse"}`}>
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-neon/80">
                        <rect x="6" y="6" width="8" height="8" rx="1.5" transform="rotate(45 10 10)" fill="none" stroke="currentColor" strokeWidth="1.4" />
                        <circle cx="10" cy="10" r="1.6" fill="currentColor" />
                      </svg>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { ContractAddress } from "@/components/ContractAddress";
import { Coin3D } from "@/components/Coin3D";
import { Particles } from "@/components/Particles";
import { TOKEN } from "@/lib/token";

const ease = [0.22, 1, 0.36, 1] as const;

/** Neon green BUY button — links to TOKEN.BUY_URL when available */
function BuyHeroBtn() {
  const cls = "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon to-electric px-7 py-3.5 font-display text-[0.78rem] font-semibold tracking-[0.16em] text-ink uppercase shadow-[0_0_30px_-6px_rgb(57_255_20/0.8)] transition-all duration-300 hover:shadow-[0_0_44px_-4px_rgb(140_255_0/0.95)] hover:-translate-y-0.5 active:translate-y-0";
  const inner = (
    <>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-md transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="relative h-4 w-4">
        <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.519l.49 3.981H17.5a.75.75 0 0 1 .734.598l.75 4.5a.75.75 0 0 1-.734.902H5.72l.11.886A.25.25 0 0 0 6.078 14h9.422a.75.75 0 0 1 0 1.5H6.078a1.75 1.75 0 0 1-1.742-1.572L2.73 2.5H1.75A.75.75 0 0 1 1 1.75ZM5 17.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm9.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>
      <span className="relative">Buy GREENO</span>
    </>
  );
  if (TOKEN.BUY_URL) {
    return <a href={TOKEN.BUY_URL} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  }
  return (
    <span title="Purchase link coming soon" className={`${cls} cursor-not-allowed opacity-80`}>
      {inner}
    </span>
  );
}

/** Chart button — links to TOKEN.CHART_URL when available */
function ChartBtn() {
  const cls = "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-neon/40 bg-neon/[0.07] px-7 py-3.5 font-display text-[0.78rem] font-semibold tracking-[0.16em] text-neon uppercase backdrop-blur-sm transition-all duration-300 hover:border-neon/70 hover:bg-neon/[0.14] hover:shadow-[0_0_30px_-6px_rgb(57_255_20/0.6)] hover:-translate-y-0.5 active:translate-y-0";
  const inner = (
    <>
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path fillRule="evenodd" d="M1 2.75A.75.75 0 0 1 1.75 2h16.5a.75.75 0 0 1 0 1.5H18v8.75A2.75 2.75 0 0 1 15.25 15h-1.072l.798 3.06a.75.75 0 0 1-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 0 1-1.452-.38L5.823 15H4.75A2.75 2.75 0 0 1 2 12.25V3.5h-.25A.75.75 0 0 1 1 2.75ZM7.373 15l-.54 2.07h6.333L12.627 15H7.373ZM3.5 3.5v8.75c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V3.5h-13Zm3.75 2.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm3.25.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Zm2.5-1a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
      </svg>
      View Chart
    </>
  );
  if (TOKEN.CHART_URL) {
    return <a href={TOKEN.CHART_URL} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  }
  return (
    <span title="Chart coming soon" className={`${cls} cursor-not-allowed opacity-70`}>
      {inner}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const coinY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.9 + delay, ease },
  });

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-24">
      {/* Backdrop */}
      <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute inset-0 -z-10">
        <Image
          src="/brand/greeno-keyart.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.14] blur-[2px] saturate-150"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,transparent_0%,rgb(3_6_4/0.7)_45%,#030604_80%)]" />
        <div className="bg-grid absolute inset-0" />
        <div className="absolute top-1/4 right-[8%] h-[480px] w-[480px] rounded-full bg-neon/[0.14] blur-[130px]" />
        <div className="absolute bottom-0 left-[-10%] h-[420px] w-[620px] rounded-full bg-emerald/80 blur-[120px]" />
      </motion.div>
      <Particles className="-z-10" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <motion.p {...fadeUp(0)} className="eyebrow inline-flex items-center gap-3 rounded-full border border-neon/25 bg-neon/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_#39ff14]" />
            GREENO COIN · Stronger Together
          </motion.p>

          <motion.p
            {...fadeUp(0.08)}
            className="mt-7 font-display text-[3.6rem] leading-none font-extrabold tracking-[-0.02em] sm:text-[5.5rem] lg:text-[6.6rem]"
            aria-hidden="true"
          >
            <span className="text-gradient-green drop-shadow-[0_0_40px_rgb(57_255_20/0.25)]">GREENO</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.16)}
            className="mt-4 font-display text-2xl font-semibold tracking-[0.06em] uppercase sm:text-4xl lg:text-[2.6rem]"
          >
            The future is <span className="text-gradient-gold">green.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.24)} className="mx-auto mt-6 max-w-md text-base text-white/65 sm:text-lg lg:mx-0">
            Stronger Together. Built for the Community.
          </motion.p>

          {/* BUY + CHART buttons */}
          <motion.div {...fadeUp(0.32)} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <BuyHeroBtn />
            <ChartBtn />
          </motion.div>

          {/* Contract address */}
          <motion.div {...fadeUp(0.4)} className="mx-auto mt-6 max-w-lg lg:mx-0">
            <ContractAddress />
          </motion.div>

          <motion.dl
            {...fadeUp(0.48)}
            className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/[0.07] pt-7 text-left lg:mx-0"
          >
            {[
              ["Symbol", "GREENO"],
              ["Network", "TBA"],
              ["Status", "Genesis"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.65rem] tracking-[0.2em] text-white/40 uppercase">{k}</dt>
                <dd className="mt-1.5 font-display text-sm font-semibold text-white">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          style={{ y: coinY }}
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.75, ease }}
          className="relative order-1 mx-auto w-[min(78vw,400px)] lg:order-2 lg:w-[min(42vw,540px)]"
        >
          <div aria-hidden="true" className="spin-slow absolute -inset-[12%] rounded-full border border-dashed border-gold/25" />
          <div aria-hidden="true" className="absolute -inset-[5%] rounded-full border border-neon/15" />
          <div
            aria-hidden="true"
            className="absolute -inset-[22%] rounded-full bg-[conic-gradient(from_180deg,transparent,rgb(57_255_20/0.18),transparent_40%)] blur-2xl"
          />
          <Coin3D priority sizes="(min-width: 1024px) 540px, 78vw" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.6rem] tracking-[0.3em] text-white/35 uppercase md:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[coin-float_2s_ease-in-out_infinite] bg-neon" />
        </span>
      </motion.div>
    </section>
  );
}

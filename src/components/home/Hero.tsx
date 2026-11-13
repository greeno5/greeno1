"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { ContractAddress } from "@/components/ContractAddress";
import { Coin3D } from "@/components/Coin3D";
import { Particles } from "@/components/Particles";
import { Countdown } from "@/components/Countdown";
import { SocialLinks } from "@/components/SocialIcons";
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
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Main Hero Section with Countdown */}
      <section ref={ref} className="relative isolate overflow-hidden pt-16 pb-8 sm:pt-18 sm:pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16">
        {/* Backdrop */}
        <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute inset-0 -z-10">
          <Image
            src="/brand/greeno-keyart.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.12] blur-[2px] saturate-150"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_0%,rgb(3_6_4/0.8)_50%,#030604_85%)]" />
          <div className="bg-grid absolute inset-0 opacity-60" />
        </motion.div>
        <Particles className="-z-10" />

        {/* Countdown Component */}
        <motion.div
          style={{ opacity: fade }}
          className="relative z-10"
        >
          <Countdown />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="container-x relative z-10 mt-6 flex justify-center sm:mt-7 md:mt-8"
        >
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <p className="font-mono text-[0.65rem] tracking-[0.22em] text-white/40 uppercase sm:text-xs sm:tracking-[0.25em]">Follow Us</p>
            <SocialLinks size="lg" />
          </div>
        </motion.div>
      </section>

      {/* Brand Section with Coin - FIXED LAYOUT */}
      <section className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20 lg:min-h-[calc(100vh-24rem)]">
        <div className="container-x mx-auto h-full max-w-7xl">
          <div className="grid h-full items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* LEFT COLUMN - Text Content */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease }}
              className="relative z-10 order-2 flex flex-col justify-center text-center lg:order-1 lg:text-left"
            >
              <p className="eyebrow inline-flex items-center gap-2 self-center rounded-full border border-neon/25 bg-neon/[0.06] px-3 py-1.5 text-[0.65rem] sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-xs md:gap-3 md:px-4 lg:self-start">
                <span className="h-1 w-1 rounded-full bg-neon shadow-[0_0_10px_#39ff14] sm:h-1.5 sm:w-1.5" />
                GREENO COIN · Stronger Together
              </p>

              <h2 
                className="mt-5 font-display font-extrabold leading-[0.9] tracking-[-0.02em] sm:mt-6 md:mt-7"
                style={{ fontSize: "clamp(2.5rem, 10vw, 5.5rem)" }}
              >
                <span className="text-gradient-green drop-shadow-[0_0_40px_rgb(57_255_20/0.25)]">GREENO</span>
              </h2>

              <p 
                className="mt-3 font-display font-semibold tracking-[0.06em] uppercase sm:mt-4"
                style={{ fontSize: "clamp(1.125rem, 4.5vw, 2.2rem)" }}
              >
                The future is <span className="text-gradient-gold">green.</span>
              </p>

              <p className="mx-auto mt-4 max-w-md text-sm text-white/65 sm:mt-5 sm:text-base md:text-lg lg:mx-0">
                Stronger Together. Built for the Community.
              </p>

              {/* BUY + CHART buttons */}
              <div className="mt-6 flex flex-col items-center gap-2.5 sm:mt-7 sm:flex-row sm:justify-center sm:gap-3 md:mt-8 lg:justify-start">
                <BuyHeroBtn />
                <ChartBtn />
              </div>

              {/* Contract address */}
              <div className="mx-auto mt-5 max-w-lg sm:mt-6 lg:mx-0">
                <ContractAddress />
              </div>

              <dl className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-white/[0.07] pt-6 text-left sm:gap-5 sm:pt-7 md:mt-10 lg:mx-0">
                {[
                  ["Symbol", "GREENO"],
                  ["Network", "Solana"],
                  ["Status", "Launching"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[0.6rem] tracking-[0.18em] text-white/40 uppercase sm:text-[0.65rem] sm:tracking-[0.2em]">{k}</dt>
                    <dd className="mt-1 font-display text-xs font-semibold text-white sm:mt-1.5 sm:text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* RIGHT COLUMN - Coin Artwork (FIXED POSITIONING) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.15, ease }}
              className="relative order-1 mx-auto flex w-full max-w-[400px] items-center justify-center self-center lg:order-2 lg:max-w-none lg:self-center"
            >
              {/* Decorative rings */}
              <div aria-hidden="true" className="spin-slow absolute -inset-[12%] rounded-full border border-dashed border-gold/25" />
              <div aria-hidden="true" className="absolute -inset-[5%] rounded-full border border-neon/15" />
              <div
                aria-hidden="true"
                className="absolute -inset-[22%] rounded-full bg-[conic-gradient(from_180deg,transparent,rgb(57_255_20/0.18),transparent_40%)] blur-2xl"
              />
              
              {/* Coin Image - Properly sized and centered */}
              <div className="relative aspect-square w-full">
                <Coin3D priority sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 400px" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

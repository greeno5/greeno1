import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Shared header used at the top of inner pages for a consistent identity. */
export function PageHero({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald/70 blur-[120px]"
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-white/40">{index}</span>
            <span className="h-px w-10 bg-neon/60" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.02] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {children && (
          <Reveal delay={0.16}>
            <div className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

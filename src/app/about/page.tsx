import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Coin3D } from "@/components/Coin3D";
import { CommunityCTA } from "@/components/CommunityCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of GREENO: born from the belief that strength is measured by how far a community can move together.",
  alternates: { canonical: "/about" },
};

const symbols = [
  {
    k: "The Rabbit",
    title: "More than a mascot",
    body: "The rabbit symbolizes confidence, ambition, and the courage to move forward.",
  },
  {
    k: "The Green",
    title: "Growth & life",
    body: "Green represents growth, life and new opportunities.",
  },
  {
    k: "The Community",
    title: "Built together",
    body: "The future belongs to communities that build together, support one another and embrace innovation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="About GREENO"
        title={
          <>
            Every great movement begins with an <span className="text-gradient-green">idea.</span>
          </>
        }
      />

      {/* Chapter 1: The belief */}
      <section aria-labelledby="belief" className="container-x py-10 sm:py-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-neon/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-neon/20 shadow-[0_40px_100px_-40px_rgb(57_255_20/0.5)]">
              <Image
                src="/brand/greeno-keyart.webp"
                alt="The muscular GREENO rabbit flexing at the centre of the golden GREENO coin"
                width={1280}
                height={1229}
                sizes="(min-width: 1024px) 520px, 92vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Chapter I · The belief</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="belief" className="mt-5 font-display text-3xl leading-tight font-bold uppercase sm:text-4xl">
                Strength, measured differently.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <blockquote className="mt-8 border-l-2 border-neon pl-6 text-xl leading-relaxed text-white/85 sm:text-2xl">
                GREENO was born from a simple belief: strength is not measured by how far one individual can go, but by
                how far a <span className="text-neon">community</span> can move together.
              </blockquote>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 text-lg leading-relaxed text-white/60">
                Inspired by the energy, determination and resilience of the green rabbit, GREENO represents a new spirit in
                the digital world.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Chapter 2: Symbols */}
      <section aria-labelledby="symbols" className="relative py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald/25 to-transparent" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow text-center">Chapter II · What we stand for</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="symbols" className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl leading-tight font-bold uppercase sm:text-5xl">
              A symbol with a <span className="text-gradient-gold">purpose.</span>
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-5 md:grid-cols-3">
            {symbols.map((s, i) => (
              <Reveal as="li" key={s.k} delay={i * 0.1}>
                <article className="glass group relative h-full rounded-3xl p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-gold/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.68rem] tracking-[0.25em] text-gold uppercase">{s.k}</span>
                    <span className="font-display text-4xl font-bold text-white/[0.06] transition-colors group-hover:text-neon/20">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold uppercase">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-white/65">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Chapter 3: The coin */}
      <section aria-labelledby="coin" className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow">Chapter III · The coin</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="coin" className="mt-5 font-display text-3xl leading-tight font-bold uppercase sm:text-5xl">
                Forged in <span className="text-gradient-gold">gold.</span>
                <br />
                Powered by <span className="text-gradient-green">green.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
                The GREENO coin carries the rabbit at its heart, surrounded by circuitry that connects every member of the
                community. It is the emblem of everything we are building together.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10">
                <Button href="/tokenomics" variant="secondary">
                  View tokenomics
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative mx-auto w-[min(76vw,440px)]">
            <div aria-hidden="true" className="spin-slow absolute -inset-[10%] rounded-full border border-dashed border-neon/20" />
            <Coin3D sizes="(min-width: 1024px) 440px, 76vw" />
          </Reveal>
        </div>
      </section>

      {/* Closing statement */}
      <section aria-labelledby="closing" className="relative overflow-hidden py-28 sm:py-40">
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/70 blur-[120px]"
        />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow">The GREENO promise</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="closing" className="mt-8 font-display text-5xl leading-[0.95] font-extrabold uppercase sm:text-7xl lg:text-8xl">
              We are <span className="text-gradient-green">GREENO.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 font-display text-2xl font-semibold tracking-[0.08em] text-white/80 uppercase sm:text-4xl">
              We are stronger together.
            </p>
          </Reveal>
        </div>
      </section>

      <CommunityCTA />
    </>
  );
}

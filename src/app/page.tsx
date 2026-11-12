import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CommunityCTA } from "@/components/CommunityCTA";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "Community Driven",
    body: "Built by and for the people who believe in it. Every step forward is a step we take together.",
    icon: (
      <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-2.7 0-6 1.3-6 3.5V19h12v-2.5C14 14.3 10.7 13 8 13Zm8 0c-.3 0-.7 0-1.1.1 1.3.9 2.1 2 2.1 3.4V19h5v-2.5c0-2.2-3.3-3.5-6-3.5Z" />
    ),
  },
  {
    title: "Built for the Future",
    body: "A long-term vision grounded in steady, careful development, not short-lived hype.",
    icon: <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3L18.7 8 12 11.7 5.3 8 12 4.3ZM5 9.7l6 3.3v6.6l-6-3.3V9.7Zm8 9.9V13l6-3.3v6.6l-6 3.3Z" />,
  },
  {
    title: "Transparency First",
    body: "Clear communication at every stage. We only publish details once they are final and verified.",
    icon: (
      <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3Z" />
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Feature cards */}
      <section aria-labelledby="pillars" className="container-x relative py-16 sm:py-20 md:py-24 lg:py-28">
        <h2 id="pillars" className="sr-only">
          What GREENO stands for
        </h2>
        <ul className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 0.1}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-neon/30 hover:shadow-[0_30px_80px_-30px_rgb(57_255_20/0.35)] sm:rounded-3xl sm:p-7 md:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-neon/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:-top-24 sm:-right-24 sm:h-48 sm:w-48 md:opacity-0"
                />
                <span className="font-mono text-[0.65rem] text-white/30 sm:text-xs">0{i + 1}</span>
                <div className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-neon/25 bg-gradient-to-br from-emerald to-ink text-neon shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-transform duration-500 group-hover:scale-110 sm:mt-6 sm:h-14 sm:w-14">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-base font-semibold tracking-wide uppercase sm:mt-7 sm:text-lg">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60 sm:mt-3 sm:text-base">{f.body}</p>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-neon to-transparent transition-transform duration-700 group-hover:scale-x-100 sm:inset-x-7 md:inset-x-8"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Introduction */}
      <section aria-labelledby="intro" className="container-x py-12 sm:py-16 md:py-20">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] lg:rounded-[2rem]">
              <Image
                src="/brand/greeno-keyart.webp"
                alt="The GREENO rabbit flexing on the golden GREENO coin, set on a glowing green pedestal"
                width={1280}
                height={1229}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="h-auto w-full transition-transform duration-[1.2s] ease-premium hover:scale-[1.03]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[0.6rem] tracking-[0.22em] text-white/70 uppercase sm:bottom-5 sm:left-6 sm:text-[0.65rem] sm:tracking-[0.25em]">
                Official mascot · The Green Rabbit
              </p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow text-[0.65rem] sm:text-xs">Meet GREENO</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="intro" 
                className="mt-4 font-display font-bold leading-tight uppercase sm:mt-5"
                style={{ fontSize: "clamp(1.75rem, 6vw, 3rem)" }}
              >
                Strength is a <span className="text-gradient-green">team sport.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-white/65 sm:mt-6 sm:text-lg">
                GREENO is a community-first project led by a powerful green rabbit, a symbol of confidence, ambition and
                the courage to move forward. We are at the very beginning, building the identity, the community and the
                foundation the right way.
              </p>
              <p className="mt-4 font-display text-xs font-semibold tracking-[0.18em] text-gold-light uppercase sm:mt-5 sm:text-sm sm:tracking-[0.2em] md:mt-6">{site.tagline}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-9 sm:gap-4 md:mt-10">
                <Button href="/about" variant="secondary">
                  Read our story
                </Button>
                <Button href="/tokenomics" variant="ghost" className="!px-2">
                  Tokenomics
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CommunityCTA id="community" />
    </>
  );
}

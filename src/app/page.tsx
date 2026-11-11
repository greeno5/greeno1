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
      <section aria-labelledby="pillars" className="container-x relative py-20 sm:py-28">
        <h2 id="pillars" className="sr-only">
          What GREENO stands for
        </h2>
        <ul className="grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 0.1}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-neon/30 hover:shadow-[0_30px_80px_-30px_rgb(57_255_20/0.35)]">
                <div
                  aria-hidden="true"
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-neon/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
                />
                <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-neon/25 bg-gradient-to-br from-emerald to-ink text-neon shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-transform duration-500 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-7 font-display text-lg font-semibold tracking-wide uppercase">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{f.body}</p>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-neon to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Introduction */}
      <section aria-labelledby="intro" className="container-x py-12 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08]">
              <Image
                src="/brand/greeno-keyart.webp"
                alt="The GREENO rabbit flexing on the golden GREENO coin, set on a glowing green pedestal"
                width={1280}
                height={1229}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="h-auto w-full transition-transform duration-[1.2s] ease-premium hover:scale-[1.03]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 font-mono text-[0.65rem] tracking-[0.25em] text-white/70 uppercase">
                Official mascot · The Green Rabbit
              </p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">Meet GREENO</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="intro" className="mt-5 font-display text-3xl leading-tight font-bold uppercase sm:text-5xl">
                Strength is a <span className="text-gradient-green">team sport.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-white/65">
                GREENO is a community-first project led by a powerful green rabbit, a symbol of confidence, ambition and
                the courage to move forward. We are at the very beginning, building the identity, the community and the
                foundation the right way.
              </p>
              <p className="mt-6 font-display text-sm font-semibold tracking-[0.2em] text-gold-light uppercase">{site.tagline}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-4">
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

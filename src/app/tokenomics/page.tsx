import type { Metadata } from "next";
import { CommunityCTA } from "@/components/CommunityCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AllocationDonut } from "@/components/tokenomics/AllocationDonut";

export const metadata: Metadata = {
  title: "Tokenomics",
  description:
    "GREENO COIN token details. Blockchain, total supply, allocation and contract address will be published once finalized and verified.",
  alternates: { canonical: "/tokenomics" },
};

/**
 * Single source of truth for token facts. Keep `confirmed: false` until a detail
 * is final and verified; unconfirmed values render with a "Coming Soon" badge.
 */
const tokenFacts = [
  { label: "Token Name", value: "GREENO", confirmed: true },
  { label: "Token Symbol", value: "GREENO", confirmed: true },
  { label: "Blockchain", value: "To Be Announced", confirmed: false },
  { 
    label: "Total Supply", 
    value: "1,000,000,000", 
    subtitle: "100 Billion GREENO",
    confirmed: true,
    highlight: true 
  },
  { label: "Contract Address", value: "Not Yet Deployed", confirmed: false, mono: true },
];

const principles = [
  {
    title: "Verified before published",
    body: "Supply, allocation and network details are announced only when final. No placeholders dressed up as facts.",
  },
  {
    title: "Security reviewed",
    body: "Smart contract development is followed by a security review before any launch, as outlined in our roadmap.",
  },
  {
    title: "One official source",
    body: "The contract address will appear on this page first. Never trust addresses shared anywhere else.",
  },
  {
    title: "Built for the long run",
    body: "Responsible token design favours a healthy, lasting community over short-term speculation.",
  },
];

function Badge({ confirmed }: { confirmed: boolean }) {
  return confirmed ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-neon/30 bg-neon/10 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.18em] text-neon uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-neon" />
      Confirmed
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.18em] text-gold-light uppercase">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
      Coming Soon
    </span>
  );
}

export default function TokenomicsPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Tokenomics"
        title={
          <>
            Clarity at the <span className="text-gradient-green">core.</span>
          </>
        }
      >
        GREENO COIN is in its foundation stage. Details below are marked clearly as confirmed or coming soon. We will never
        publish figures before they are final.
      </PageHero>

      {/* Dashboard */}
      <section aria-labelledby="dashboard" className="container-x py-8 sm:py-12">
        <h2 id="dashboard" className="sr-only">
          Token dashboard
        </h2>
        <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-10">
          <div aria-hidden="true" className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-neon/10 blur-[100px]" />
          <div className="relative mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-6">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_#d8b45a]" />
              <p className="font-mono text-xs tracking-[0.22em] text-white/60 uppercase">Status · Pre-launch</p>
            </div>
            <p className="font-mono text-xs tracking-[0.22em] text-white/40 uppercase">GREENO / Token overview</p>
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <dl className="grid gap-3 sm:grid-cols-2">
              {tokenFacts.map((f, i) => (
                <Reveal
                  key={f.label}
                  delay={i * 0.06}
                  className={`group rounded-2xl border border-white/[0.07] bg-ink/60 p-5 transition-colors duration-300 hover:border-neon/25 ${
                    f.mono ? "sm:col-span-2" : ""
                  } ${f.highlight ? "sm:col-span-2 border-neon/20 bg-gradient-to-br from-neon/[0.08] to-ink/60" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <dt className="font-mono text-[0.65rem] tracking-[0.22em] text-white/45 uppercase">{f.label}</dt>
                    <Badge confirmed={f.confirmed} />
                  </div>
                  <dd
                    className={`mt-4 font-display font-semibold ${f.confirmed ? "text-white" : "text-white/55"} ${
                      f.mono ? "font-mono text-base tracking-wide sm:text-lg" : f.highlight ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {f.value}
                  </dd>
                  {f.subtitle && (
                    <dd className="mt-2 font-display text-sm font-medium text-neon sm:text-base">
                      {f.subtitle}
                    </dd>
                  )}
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.15}>
              <AllocationDonut />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section aria-labelledby="transparency" className="container-x py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow">Our commitment</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="transparency" className="mt-5 font-display text-3xl leading-tight font-bold uppercase sm:text-5xl">
                Transparency is <span className="text-gradient-gold">non-negotiable.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Trust is earned through honesty. Responsible token development means building carefully, reviewing
                thoroughly and communicating openly, so every member of the community can make informed decisions.
              </p>
            </Reveal>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08}>
                <article className="glass h-full rounded-3xl p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-neon/25">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neon/25 bg-emerald/60 font-mono text-sm text-neon">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-base font-semibold tracking-wide uppercase">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-gold/25 bg-gold/[0.05] p-6 sm:flex-row sm:items-center sm:p-8">
            <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-gold" fill="currentColor" aria-hidden="true">
              <path d="M12 2 1 21h22L12 2Zm1 15h-2v-2h2v2Zm0-4h-2V9h2v4Z" />
            </svg>
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              <strong className="font-semibold text-gold-light">Security notice:</strong> GREENO COIN has not launched and no
              contract has been deployed. Any token, presale or address claiming to be GREENO before an announcement on this
              website is not official.
            </p>
          </div>
        </Reveal>
      </section>

      <CommunityCTA />
    </>
  );
}

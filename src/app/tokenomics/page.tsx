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
  { label: "Blockchain", value: "Solana", confirmed: true },
  { 
    label: "Total Supply", 
    value: "100,000,000,000", 
    subtitle: "100 Billion GREENO",
    confirmed: true,
    highlight: true 
  },
  { 
    label: "Contract Address", 
    value: "8gsarhd6heZDPkAkbadjLLnpihzZMaHpiBNXBE5tpump", 
    confirmed: true, 
    mono: true
  },
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
        GREENO token is now live on Solana! All details are confirmed and verified. Check the contract address below and always verify on this official website.
      </PageHero>

      {/* Dashboard */}
      <section aria-labelledby="dashboard" className="container-x py-8 sm:py-12">
        <h2 id="dashboard" className="sr-only">
          Token dashboard
        </h2>
        <div className="glass relative overflow-hidden rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-10">
          <div aria-hidden="true" className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-neon/10 blur-[100px]" />
          <div className="relative mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-white/[0.07] pb-4 sm:pb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-neon shadow-[0_0_12px_#39ff14]" />
              </span>
              <p className="font-mono text-[0.65rem] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] text-neon uppercase">Status · Live</p>
            </div>
            <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] text-white/40 uppercase">GREENO / Token overview</p>
          </div>

          <div className="relative grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.15fr_1fr]">
            <dl className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
              {tokenFacts.map((f, i) => (
                <Reveal
                  key={f.label}
                  delay={i * 0.06}
                  className={`group rounded-xl sm:rounded-2xl border border-white/[0.07] bg-ink/60 p-4 sm:p-5 transition-colors duration-300 hover:border-neon/25 ${
                    f.mono ? "sm:col-span-2" : ""
                  } ${f.highlight ? "sm:col-span-2 border-neon/20 bg-gradient-to-br from-neon/[0.08] to-ink/60" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <dt className="font-mono text-[0.65rem] tracking-[0.22em] text-white/45 uppercase">{f.label}</dt>
                    <Badge confirmed={f.confirmed} />
                  </div>
                  <dd
                    className={`mt-3 sm:mt-4 font-display font-semibold ${f.confirmed ? "text-white" : "text-white/55"} ${
                      f.mono ? "font-mono text-sm sm:text-base md:text-lg tracking-wide break-all" : f.highlight ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl" : "text-lg sm:text-xl md:text-2xl"
                    }`}
                  >
                    {f.value}
                  </dd>
                  {f.subtitle && (
                    <dd className="mt-1.5 sm:mt-2 font-display text-xs sm:text-sm md:text-base font-medium text-neon">
                      {f.subtitle}
                    </dd>
                  )}
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.15}>
              <AllocationDonut 
                allocations={[
                  { label: "Community & Rewards", percent: 40, color: "#39ff14" },
                  { label: "Liquidity Pool", percent: 30, color: "#8cff00" },
                  { label: "Development", percent: 15, color: "#d8b45a" },
                  { label: "Marketing", percent: 10, color: "#ffd700" },
                  { label: "Team", percent: 5, color: "#4ade80" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section aria-labelledby="transparency" className="container-x py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-[1fr_1.4fr] xl:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow">Our commitment</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="transparency" className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold uppercase">
                Transparency is <span className="text-gradient-gold">non-negotiable.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg leading-relaxed text-white/60">
                Trust is earned through honesty. Responsible token development means building carefully, reviewing
                thoroughly and communicating openly, so every member of the community can make informed decisions.
              </p>
            </Reveal>
          </div>

          <ol className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08}>
                <article className="glass h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-neon/25">
                  <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-neon/25 bg-emerald/60 font-mono text-xs sm:text-sm text-neon">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 sm:mt-5 md:mt-6 font-display text-sm sm:text-base font-semibold tracking-wide uppercase">{p.title}</h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-white/60">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-neon/25 bg-neon/[0.05] p-4 sm:p-6 md:flex-row md:items-center md:p-8">
            <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 text-neon" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/70">
              <strong className="font-semibold text-neon">Official Launch:</strong> GREENO is now live on Solana! The official
              contract address is verified and displayed above. Always verify the contract address on this website before any transaction.
            </p>
          </div>
        </Reveal>
      </section>

      <CommunityCTA />
    </>
  );
}

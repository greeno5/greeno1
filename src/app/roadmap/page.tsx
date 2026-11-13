import type { Metadata } from "next";
import Image from "next/image";
import { CommunityCTA } from "@/components/CommunityCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How to Buy",
  description: "Learn how to buy GREENO tokens. Simple step-by-step guide to join the GREENO community on Solana.",
  alternates: { canonical: "/roadmap" },
};

const steps = [
  {
    num: "01",
    title: "Get a Solana Wallet",
    description: "Create a compatible Solana wallet and make sure you control your recovery phrase. Never share it with anyone.",
    icon: "wallet",
  },
  {
    num: "02",
    title: "Add SOL",
    description: "Add SOL to your wallet to cover the token purchase and network fees.",
    icon: "coin",
  },
  {
    num: "03",
    title: "Connect to a Supported Platform",
    description: "Once GREENO is officially launched and its verified contract address is published, use a supported Solana trading platform.",
    icon: "link",
  },
  {
    num: "04",
    title: "Swap for GREENO",
    description: "Find GREENO using its verified contract address, carefully check the token details, enter the amount, and review the transaction before confirming.",
    icon: "swap",
  },
];

function StepIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    wallet: (
      <>
        <rect x="2" y="6" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10h20M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="14" r="1.5" fill="currentColor" />
      </>
    ),
    coin: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    swap: (
      <>
        <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="7" cy="16" r="1.5" fill="currentColor" />
        <circle cx="17" cy="8" r="1.5" fill="currentColor" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}



export default function HowToBuyPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="How to Buy"
        title={
          <>
            Get ready to <span className="text-gradient-green">join us.</span>
          </>
        }
      >
        Follow these simple steps to join the GREENO community. Always verify official information before making any transaction.
      </PageHero>

      {/* Steps Section */}
      <section aria-labelledby="steps-title" className="container-x py-12 sm:py-16 md:py-20">
        <h2 id="steps-title" className="sr-only">
          Steps to buy GREENO
        </h2>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {steps.map((step, i) => (
              <Reveal
                key={step.num}
                delay={i * 0.1}
                className="group relative"
              >
                <article className="glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-premium hover:-translate-y-2 hover:border-neon/30 hover:shadow-[0_30px_80px_-30px_rgb(57_255_20/0.4)] sm:p-8">
                  {/* Background glow effect */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-neon/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Large step number background */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 right-4 font-display text-[8rem] leading-none font-extrabold text-white/[0.03] select-none"
                  >
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-neon/25 bg-gradient-to-br from-emerald to-ink text-neon shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
                    <StepIcon icon={step.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>

                  {/* Step number badge */}
                  <div className="relative mt-6 flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.2em] text-neon uppercase">
                      Step {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 font-display text-xl font-bold tracking-wide uppercase sm:text-2xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 leading-relaxed text-white/70 sm:text-lg">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-neon to-transparent transition-transform duration-700 group-hover:scale-x-100 sm:inset-x-8"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Important Security Notice */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <div className="glass mx-auto max-w-4xl overflow-hidden rounded-2xl border-gold/25 bg-gold/[0.05]">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 sm:h-14 sm:w-14">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
                      <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-gold-light sm:text-xl">
                    Security First — Always Verify
                  </h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70 sm:text-base">
                    <p>
                      <strong className="font-semibold text-white">Official contract address:</strong> The verified GREENO contract address will only be published on this official website once the token is launched. Never trust addresses from any other source.
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Protect your wallet:</strong> Never share your recovery phrase, private keys, or wallet passwords with anyone. GREENO team members will never ask for this information.
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Do your research:</strong> Cryptocurrency investments carry risk. Only invest what you can afford to lose. This guide is for informational purposes and does not constitute financial advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="border-t border-gold/20 bg-gold/[0.03] px-6 py-4 sm:px-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold shadow-[0_0_8px_#d8b45a]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-gold-light uppercase sm:text-sm">
                    Pre-Launch
                  </span>
                </div>
                <p className="font-mono text-xs text-white/50 sm:text-sm">
                  Official launch details coming soon
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Recommended Wallets Section */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Recommended Wallets</p>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase sm:text-3xl md:text-4xl">
              Popular <span className="text-gradient-green">Solana</span> Wallets
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
              Choose from trusted Solana wallet providers. Always download wallets from official sources and verify authenticity.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {[
                { name: "Phantom", description: "User-friendly and secure", logo: "/brand/wallets/phantom.png" },
                { name: "Solflare", description: "Feature-rich experience", logo: "/brand/wallets/solflare.png" },
                { name: "Backpack", description: "Modern and intuitive", logo: "/brand/wallets/backpack.png" },
              ].map((wallet, i) => (
                <Reveal key={wallet.name} delay={0.1 + i * 0.05}>
                  <div className="glass group relative overflow-hidden rounded-2xl border-white/10 p-6 transition-all duration-300 hover:border-neon/25 hover:shadow-[0_20px_50px_-20px_rgb(57_255_20/0.3)] sm:p-7">
                    <div className="relative">
                      {/* Wallet Logo */}
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                        <Image
                          src={wallet.logo}
                          alt={`${wallet.name} wallet logo`}
                          width={80}
                          height={80}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      
                      {/* Wallet Name */}
                      <h3 className="mt-5 font-display text-base font-semibold uppercase sm:text-lg">
                        {wallet.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="mt-2 text-sm text-white/50 sm:text-base">
                        {wallet.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-xs text-white/40 sm:text-sm">
              This is not an endorsement. Research and choose the wallet that best fits your needs.
            </p>
          </div>
        </Reveal>
      </section>

      <CommunityCTA />
    </>
  );
}

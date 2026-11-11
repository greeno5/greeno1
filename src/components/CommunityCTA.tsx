import Image from "next/image";
import { SOCIAL } from "@/lib/token";
import { Reveal } from "./Reveal";

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.84 4.84 0 0 1-1-.07Z" />
    </svg>
  );
}

function XIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

type Channel = {
  key: "x" | "tiktok";
  label: string;
  url: string | null;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
};

const channels: Channel[] = [
  {
    key: "x",
    label: "Follow on X",
    url: SOCIAL.X_URL,
    icon: <XIcon />,
    gradient: "from-white/10 to-white/5 hover:from-white/20 hover:to-white/10",
    glow: "hover:shadow-[0_0_30px_-6px_rgba(255,255,255,0.4)]",
  },
  {
    key: "tiktok",
    label: "Follow on TikTok",
    url: SOCIAL.TIKTOK_URL,
    icon: <TikTokIcon />,
    gradient: "from-neon/15 to-electric/10 hover:from-neon/25 hover:to-electric/20",
    glow: "hover:shadow-[0_0_30px_-6px_rgb(57_255_20/0.5)]",
  },
];

/** Community CTA shown at the bottom of every page. Only X and TikTok. */
export function CommunityCTA({ id }: { id?: string }) {
  return (
    <section id={id} className="container-x scroll-mt-28 py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-neon/20 bg-gradient-to-br from-emerald/80 via-ink-2 to-ink px-6 py-14 sm:px-14 sm:py-20">
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
          <div aria-hidden="true" className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-neon/25 blur-[100px]" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="eyebrow">Join the movement</p>
              <h2 className="mt-5 font-display text-3xl leading-tight font-bold uppercase sm:text-5xl">
                Stronger Together<span className="text-neon">.</span>
              </h2>
              <p className="mt-5 max-w-lg text-white/65">
                GREENO is being built in the open, with the community at its core. Official channels open soon.
                Follow this page for verified links — only trust what is published here.
              </p>

              <ul className="mt-8 flex flex-wrap gap-4">
                {channels.map((ch) =>
                  ch.url ? (
                    <li key={ch.key}>
                      <a
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={ch.label}
                        className={`group inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r ${ch.gradient} px-6 py-3.5 font-display text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:-translate-y-0.5 ${ch.glow}`}
                      >
                        <span className="text-neon">{ch.icon}</span>
                        {ch.label}
                      </a>
                    </li>
                  ) : (
                    <li key={ch.key}>
                      <span
                        title={`${ch.label} — coming soon`}
                        aria-label={`${ch.label}: coming soon`}
                        className="group relative inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 font-display text-sm font-semibold tracking-wide text-white/50 uppercase"
                      >
                        <span className="text-neon/60">{ch.icon}</span>
                        {ch.label}
                        <span className="ml-1 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 font-mono text-[0.58rem] tracking-[0.18em] text-gold-light uppercase">
                          Soon
                        </span>
                      </span>
                    </li>
                  )
                )}
              </ul>

              <p className="mt-5 text-xs text-white/35">
                Only trust links published on this website. Never share your wallet seed phrase or private key.
              </p>
            </div>

            <div className="relative mx-auto hidden w-56 md:block">
              <div aria-hidden="true" className="spin-slow absolute -inset-6 rounded-full border border-dashed border-gold/30" />
              <Image
                src="/brand/greeno-coin.webp"
                alt=""
                width={224}
                height={224}
                sizes="224px"
                className="coin-float relative rounded-full drop-shadow-[0_20px_50px_rgb(57_255_20/0.4)]"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

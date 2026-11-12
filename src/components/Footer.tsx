import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { SOCIAL } from "@/lib/token";
import { Logo } from "./Logo";

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.84 4.84 0 0 1-1-.07Z" />
    </svg>
  );
}

const footerSocials = [
  { key: "x" as const, label: "X (Twitter)", url: SOCIAL.X_URL, Icon: XIcon },
  { key: "tiktok" as const, label: "TikTok", url: SOCIAL.TIKTOK_URL, Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/[0.06] bg-ink-2/60 sm:mt-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent"
      />
      <div className="container-x grid gap-10 py-12 sm:gap-12 sm:py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 font-display text-xs font-semibold tracking-[0.18em] text-white sm:mt-5 sm:text-sm sm:tracking-[0.2em]">{site.slogan}</p>
          <p className="mt-2 text-xs leading-relaxed text-white/55 sm:text-sm">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="md:ml-auto">
          <p className="eyebrow mb-4 !text-[0.65rem] !text-white/40 sm:mb-5 sm:!text-xs">Explore</p>
          <ul className="space-y-2.5 sm:space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-white/70 transition-colors hover:text-neon sm:text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-4 !text-[0.65rem] !text-white/40 sm:mb-5 sm:!text-xs">Community</p>
          <ul className="flex items-center gap-2.5 sm:gap-3" aria-label="Official GREENO channels">
            {footerSocials.map(({ key, label, url, Icon }) => (
              <li key={key}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GREENO on ${label}`}
                    className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon hover:shadow-[0_0_24px_-4px_rgb(57_255_20/0.6)] sm:h-10 sm:w-10"
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                ) : (
                  <span
                    title={`${label} — coming soon`}
                    aria-label={`${label}: coming soon`}
                    className="group relative inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 opacity-60 sm:h-10 sm:w-10"
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-emerald px-2 py-1 font-mono text-[9px] tracking-wider text-neon opacity-0 transition-opacity group-hover:opacity-100 sm:-top-8 sm:text-[10px]">
                      SOON
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-3.5 text-[0.65rem] leading-relaxed text-white/40 sm:mt-4 sm:text-xs">
            Official channels will be announced here. Only trust links published on this website.
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="container-x flex flex-col gap-2.5 py-5 text-[0.65rem] text-white/40 sm:gap-3 sm:py-6 sm:text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GREENO. All rights reserved.</p>
          <p className="max-w-2xl leading-relaxed md:text-right">
            GREENO COIN is not yet launched. Nothing on this website is financial advice or an offer to sell any asset.
            Roadmap items are proposed milestones and may change.
          </p>
        </div>
      </div>
    </footer>
  );
}

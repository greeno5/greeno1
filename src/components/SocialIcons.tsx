import type { SocialKey } from "@/lib/site";
import { SOCIAL } from "@/lib/token";

// Only X and TikTok are official channels for GREENO
export type OfficialSocial = "x" | "tiktok";

const svgPaths: Record<OfficialSocial | SocialKey, string> = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  tiktok:
    "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.84 4.84 0 0 1-1-.07Z",
  telegram:
    "M21.94 4.3a1.5 1.5 0 0 0-1.6-.24L2.9 11.03a1.13 1.13 0 0 0 .07 2.12l4.15 1.37 1.6 5.03a1 1 0 0 0 1.66.4l2.36-2.32 4.38 3.2a1.5 1.5 0 0 0 2.36-.88L22.4 5.8a1.5 1.5 0 0 0-.46-1.5ZM9.9 14.6l-.55 3.23-1.12-3.6 9.7-6.1-8.03 6.47Z",
  discord:
    "M20.32 4.37A19.8 19.8 0 0 0 15.4 2.84a13.8 13.8 0 0 0-.63 1.29 18.4 18.4 0 0 0-5.53 0 13 13 0 0 0-.64-1.29 19.7 19.7 0 0 0-4.92 1.53C.54 9.06-.3 13.62.12 18.12a19.9 19.9 0 0 0 6.04 3.04 14.7 14.7 0 0 0 1.29-2.1 12.9 12.9 0 0 1-2.04-.97c.17-.12.34-.25.5-.38a14.2 14.2 0 0 0 12.18 0c.17.14.33.27.5.38-.65.39-1.33.71-2.04.98.37.74.8 1.44 1.29 2.1a19.8 19.8 0 0 0 6.04-3.05c.5-5.22-.84-9.74-3.56-13.75ZM8.02 15.36c-1.18 0-2.16-1.09-2.16-2.42s.95-2.42 2.16-2.42 2.18 1.1 2.16 2.42c0 1.33-.95 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.16-1.09-2.16-2.42s.95-2.42 2.16-2.42 2.18 1.1 2.16 2.42c0 1.33-.95 2.42-2.16 2.42Z",
};

export function SocialIcon({ name, className = "h-4 w-4" }: { name: OfficialSocial | SocialKey; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={svgPaths[name]} />
    </svg>
  );
}

const officialSocials: { key: OfficialSocial; label: string; url: string | null }[] = [
  { key: "x", label: "X (Twitter)", url: SOCIAL.X_URL },
  { key: "tiktok", label: "TikTok", url: SOCIAL.TIKTOK_URL },
];

export function SocialLinks({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const icon = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const base = `${box} group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300`;

  return (
    <ul className="flex items-center gap-3" aria-label="Official GREENO channels">
      {officialSocials.map((s) => (
        <li key={s.key}>
          {s.url ? (
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GREENO on ${s.label}`}
              className={`${base} hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon hover:shadow-[0_0_24px_-4px_rgb(57_255_20/0.6)]`}
            >
              <SocialIcon name={s.key} className={icon} />
            </a>
          ) : (
            <span
              role="img"
              aria-label={`${s.label}: official channel coming soon`}
              title={`${s.label} — coming soon`}
              className={`${base} cursor-not-allowed opacity-60`}
            >
              <SocialIcon name={s.key} className={icon} />
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-emerald px-2 py-1 font-mono text-[10px] tracking-wider text-neon opacity-0 transition-opacity group-hover:opacity-100">
                SOON
              </span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

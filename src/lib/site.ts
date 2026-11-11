export const site = {
  name: "GREENO",
  token: "GREENO COIN",
  symbol: "GREENO",
  slogan: "STRONGER TOGETHER.",
  tagline: "Think Green. Move Strong. Grow Together.",
  description:
    "GREENO is a community-driven Web3 project led by the green rabbit. Stronger together, built for the community, transparency first.",
  // Set NEXT_PUBLIC_SITE_URL in production so canonical and Open Graph URLs resolve correctly.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/roadmap", label: "Roadmap" },
] as const;

export type SocialKey = "x" | "telegram" | "discord";

/**
 * Official channels. URLs are intentionally null until the team publishes verified links.
 * Add a URL here and every social button across the site becomes a live link.
 */
export const socials: { key: SocialKey; label: string; url: string | null }[] = [
  { key: "x", label: "X (Twitter)", url: null },
  { key: "telegram", label: "Telegram", url: null },
  { key: "discord", label: "Discord", url: null },
];

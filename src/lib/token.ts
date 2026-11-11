/**
 * GREENO — central token & social configuration.
 * Update values here once and every button/link across the site updates automatically.
 *
 * Rules:
 *   - Leave a field `null` if the official value is not yet published.
 *   - `null` values render placeholder UI; they never redirect visitors anywhere.
 *   - Never commit a real contract address or trading link before it is verified.
 */

export const TOKEN = {
  /** Official on-chain contract address. Set once deployed and verified. */
  CONTRACT_ADDRESS: null as string | null,

  /** Direct DEX / purchase page URL. e.g. "https://raydium.io/swap/?outputCurrency=..." */
  BUY_URL: null as string | null,

  /** Chart page URL. e.g. "https://dexscreener.com/solana/..." */
  CHART_URL: null as string | null,
} as const;

export const SOCIAL = {
  /** Official X (Twitter) profile URL. e.g. "https://x.com/GreenoCoin" */
  X_URL: null as string | null,

  /** Official TikTok profile URL. e.g. "https://www.tiktok.com/@greenocoin" */
  TIKTOK_URL: null as string | null,
} as const;

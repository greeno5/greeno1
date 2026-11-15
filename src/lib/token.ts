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
  CONTRACT_ADDRESS: "8gsarhd6heZDPkAkbadjLLnpihzZMaHpiBNXBE5tpump" as string | null,

  /** Direct DEX / purchase page URL. e.g. "https://raydium.io/swap/?outputCurrency=..." */
  BUY_URL: `https://raydium.io/swap/?outputCurrency=8gsarhd6heZDPkAkbadjLLnpihzZMaHpiBNXBE5tpump` as string | null,

  /** Chart page URL. e.g. "https://dexscreener.com/solana/..." */
  CHART_URL: "https://dexscreener.com/solana/5fbtaz1azi4cjsagzub6kuyxkud8gvkuxn3rx5dspqrd" as string | null,
} as const;

export const SOCIAL = {
  /** Official X (Twitter) profile URL */
  X_URL: "https://x.com/greeno_solana?s=11" as string,

  /** Official TikTok profile URL */
  TIKTOK_URL: "https://vm.tiktok.com/ZN8Pq8TrS/" as string,

  /** Official website URL */
  WEBSITE_URL: "https://www.greeno.fit" as string,
} as const;

/**
 * GREENO TOKEN LAUNCH CONFIGURATION
 * 
 * Central configuration for the official token launch countdown.
 * All times automatically convert to visitor timezones.
 */

export const LAUNCH_CONFIG = {
  /**
   * Official launch timestamp (UTC)
   * Sunday, November 15, 2026 at 09:00 PM Dubai time (GST)
   * This is 5:00 PM UTC (Dubai is UTC+4)
   */
  LAUNCH_DATE_UTC: '2026-11-15T17:00:00Z',

  /**
   * Featured timezones displayed on the countdown
   * Using proper IANA timezone identifiers for accurate conversion
   */
  FEATURED_TIMEZONES: [
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      timezone: 'Asia/Dubai',
      flag: '🇦🇪',
      abbreviation: 'GST',
    },
    {
      city: 'Casablanca',
      country: 'Morocco',
      timezone: 'Africa/Casablanca',
      flag: '🇲🇦',
      abbreviation: 'WET',
    },
    {
      city: 'Paris',
      country: 'Europe',
      timezone: 'Europe/Paris',
      flag: '🇪🇺',
      abbreviation: 'CET',
    },
    {
      city: 'New York',
      country: 'United States',
      timezone: 'America/New_York',
      flag: '🇺🇸',
      abbreviation: 'EST',
    },
  ],

  /**
   * Launch messaging
   */
  TITLE: 'GREENO',
  SUBTITLE: 'THE FUTURE IS GREEN.',
  TAGLINE: 'STRONGER TOGETHER. BUILT FOR THE COMMUNITY.',
  DESCRIPTION: 'The wait is almost over! Get ready for the official launch of GREENO ($GREENO). Join the community and be part of the journey.',
  
  /**
   * Post-launch configuration
   */
  CELEBRATION_MESSAGE: '🚀 GREENO IS LIVE!',
  CELEBRATION_SUBTITLE: 'THE FUTURE IS GREEN.',
} as const;

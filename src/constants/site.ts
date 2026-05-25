/** Public contact and booking details (safe to ship in the client bundle). */
export const BRAND_EMAIL = 'info@indievibehouseparty.live';
export const TAGLINE = 'The music will guide you home';

export const WHATSAPP_DISPLAY = '+353 83 312 5749';
/** E.164 without + for wa.me */
export const WHATSAPP_E164 = '353833125749';

export const HERO_SHORT_DESCRIPTION =
  'Indie Vibe House Party is a live music collective that curates intimate events, supports independent artists, and creates music through recording camps and collaborative retreats. It also develops collective projects and partners with brands to deliver authentic, culture-driven experiences across Africa and the diaspora.';

export const BOOKING_AVAILABILITY =
  'Mon–Fri: 1–2pm WAT · Sat–Sun: 10am–6pm WAT';

export const CONSULTATION_OPTIONS = [
  { duration: '30 minutes', priceUsd: 80 },
  { duration: '60 minutes', priceUsd: 150 },
] as const;

export function getWhatsAppHref(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_E164}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

/** Cities where IVHP operates. */
export const OPERATING_LOCATIONS = ['Dublin', 'Lagos', 'Abuja'] as const;

/** Official profiles (canonical URLs without tracking params). */
export const SOCIAL_LINKS = {
  twitter: 'https://x.com/indievibehparty',
  instagram: 'https://www.instagram.com/indievibehouseparty',
  tiktok: 'https://www.tiktok.com/@indievibehouseparty',
} as const;

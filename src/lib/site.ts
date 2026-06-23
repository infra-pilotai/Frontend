export const SITE_NAME = "Infra-PilotAI";
export const COMPANY_NAME = "Infra Pilot AI";
export const SITE_URL = "https://infra-pilotai.com";
export const SITE_DOMAIN = "Infra-PilotAI.com";
export const SITE_LOGO_URL = "/logo.png";
export const SITE_FAVICON_URL = "/favicon.png";
export const HERO_SIDE_IMAGE_URL = "/hero-side.png";
export const WHY_SECTION_IMAGE_URL = "/why-section.png";
export const TESTIMONIAL_IMAGE_URLS = [
  "/testimonial-1.png",
  "/testimonial-2.png",
  "/testimonial-3.png",
  "/testimonial-4.png",
] as const;
export const SUPPORT_EMAIL = "support@infra-pilotai.com";
export const FOUNDER_NAME = "Olivia Martinez";
export const FOUNDER_TITLE = "Founder & CEO";
export const COMPANY_FOUNDED = "6 March 2023";
export const SITE_LOCATION = "350 5th Ave, New York, NY 10118, United States";
export const SITE_POSTAL_CODE = "10118";
export const SITE_LOCATION_SHORT = "New York, NY 10118";
export const SITE_COUNTRY = "New York, United States";
export const SITE_PHONE = "+1 (212) 947-6183";
export const SITE_PHONE_TEL = "+12129476183";
export const FORMSPREE_URL = "https://formspree.io/f/xjgdqdgn";
export const RECAPTCHA_SITE_KEY = "6LeMhictAAAAAOjvex3bNHCqzAljexrJ313H6bef";
export const TAWK_EMBED_SRC = "https://embed.tawk.to/6a34c0fc0f767c1d422241eb/1jrf13nae";
export const STRIPE_STARTER_MONTHLY_URL = "https://buy.stripe.com/test_eVq8wIeL67QSgoPcv4gjC00";
export const STRIPE_PRO_MONTHLY_URL = "https://buy.stripe.com/test_dRm6oAbyU6MOfkL9iSgjC01";

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "Solutions", id: "solutions" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
] as const;

export function homeSectionHref(id: string) {
  return id === "home" ? "/" : `/#${id}`;
}

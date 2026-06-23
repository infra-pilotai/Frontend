import { Link } from "@tanstack/react-router";
import { SITE_LOGO_URL, SITE_NAME } from "@/lib/site";

type SiteLogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  imageClassName?: string;
};

const variantStyles = {
  nav: {
    link: "h-9 overflow-visible",
    image: "h-12 w-auto max-w-[300px] origin-left scale-110 sm:max-w-[340px] sm:scale-[1.15]",
  },
  footer: {
    link: "",
    image: "h-14 w-auto max-w-[320px] sm:h-16 sm:max-w-[360px]",
  },
} as const;

export function SiteLogo({
  variant = "nav",
  className = "",
  imageClassName,
}: SiteLogoProps) {
  const styles = variantStyles[variant];

  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${styles.link} ${className}`}>
      <img
        src={SITE_LOGO_URL}
        alt={SITE_NAME}
        width={320}
        height={80}
        className={`object-contain ${imageClassName ?? styles.image}`}
      />
    </Link>
  );
}

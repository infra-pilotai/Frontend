type FeatureIconProps = {
  src: string;
  className?: string;
};

export function FeatureIcon({ src, className = "h-10 w-10" }: FeatureIconProps) {
  return <img src={src} alt="" aria-hidden="true" className={`object-contain ${className}`} />;
}

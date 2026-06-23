import type { ReactNode } from "react";

export function SectionHeader({
  headingId,
  eyebrow,
  title,
  description,
  align = "center",
  descriptionClassName,
  titleClassName,
}: {
  headingId: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  descriptionClassName?: string;
  titleClassName?: string;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-3 font-display text-sm tracking-[0.3em] text-primary">{eyebrow}</p>
      )}
      <h2 id={headingId} className={`font-display text-4xl uppercase tracking-wider sm:text-5xl ${titleClassName ?? ""}`}>
        {title}
      </h2>
      {description && (
        <p
          className={
            descriptionClassName ??
            `mt-4 max-w-xl text-muted-foreground ${align === "center" ? "mx-auto" : ""}`
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

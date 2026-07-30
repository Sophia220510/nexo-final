import { cn } from "@/lib/utils";
import nexoStarLogo from "@/assets/nexo-star-logo.png";
import nexoWordmarkText from "@/assets/nexo-wordmark-text.png";

/**
 * NEXO star mark — official brand logo asset.
 */
export function Star({ className }: { className?: string }) {
  return (
    <img
      src={nexoStarLogo}
      alt=""
      aria-hidden="true"
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

/**
 * NEXO wordmark: logo mark + the official "NEXO" lettering, both used as
 * image assets so they always match the brand exactly (the lettering is
 * hand-drawn line art, not a regular font, so it can't be recreated with
 * live text).
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 md:gap-3", className)}>
      <Star className="h-8 w-8 md:h-9 md:w-9" />
      <img
        src={nexoWordmarkText}
        alt="NEXO"
        className="h-[1.1rem] w-auto object-contain md:h-[1.3rem]"
      />
    </span>
  );
}

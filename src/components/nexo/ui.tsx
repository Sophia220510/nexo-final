import type { ComponentType, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type IconType = ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;

/** Consistent minimal icon: same size + stroke weight everywhere. */
export function Icon({ icon: I, className }: { icon: IconType; className?: string }) {
  return <I className={cn("h-[18px] w-[18px]", className)} strokeWidth={1.5} />;
}

export function IconChip({ icon }: { icon: IconType }) {
  return (
    <span className="icon-chip">
      <Icon icon={icon} />
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <p className="eyebrow">
        <span className="h-px w-6 bg-accent-brand" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-[1.75rem] font-medium leading-[1.12] tracking-tight md:text-[2.75rem]">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "surface surface-hover group h-full p-6 md:p-8",
        "[&:hover_.icon-chip]:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function BrandButton({
  href,
  children,
  size = "md",
  external = true,
  className,
}: {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "btn-brand group",
        size === "lg" ? "px-8 py-4.5 text-base" : "px-6 py-3.5 text-sm",
        className,
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        <ArrowUpRight
          size={17}
          strokeWidth={1.75}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}

export function GhostButton({
  href,
  children,
  size = "md",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "btn-ghost",
        size === "lg" ? "px-8 py-4.5 text-base" : "px-6 py-3.5 text-sm",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Small monogram avatar used for testimonials — no stock photography, just initials. */
export function Monogram({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-medium",
        "bg-gradient-to-br from-accent-brand/25 to-accent-brand/5 text-foreground",
        "ring-1 ring-inset ring-accent-brand/25",
        className,
      )}
    >
      {initials}
    </span>
  );
}

/**
 * Floating glass card used to decorate the hero. Uses Framer Motion for a
 * gentle spring entrance plus a slow, continuous idle float — the kind of
 * subtle motion you see in Linear / Stripe hero sections.
 */
export function FloatingBadge({
  children,
  delay = 0,
  duration = 5,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("pointer-events-none", className)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: delay / 1000 }}
        className="surface pointer-events-auto flex items-center gap-3 rounded-2xl px-4 py-3"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Compact key/value stat used in the hero trust strip and results section. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">{value}</p>
      <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

import type { ComponentType, MouseEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type IconType = ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;

/**
 * Subtle "magnetic" hover: the element nudges toward the cursor within its
 * own bounds and springs back on leave — the same micro-interaction used on
 * CTAs in Linear / Vercel / Framer. Disabled automatically for touch/coarse
 * pointers and reduced-motion users.
 */
function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * strength, y: relY * strength });
  };

  const onMouseLeave = () => setPos({ x: 0, y: 0 });

  return { ref, x: pos.x, y: pos.y, onMouseMove, onMouseLeave };
}

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
        "[&:hover_.icon-chip]:-translate-y-0.5 [&:hover_.icon-chip]:scale-105",
        className,
      )}
    >
      {children}
    </article>
  );
}

/** Compact pill used to label a section, a stat, or a feature — not the eyebrow. */
export function Badge({
  icon,
  children,
  className,
}: {
  icon?: IconType;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("badge-chip", className)}>
      {icon ? <Icon icon={icon} className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}

/** Thin gradient hairline used to separate content blocks without a hard border. */
export function Divider({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("divider-fade", className)} />;
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
  const magnetic = useMagnetic(0.28);

  return (
    <motion.a
      ref={magnetic.ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      animate={{ x: magnetic.x, y: magnetic.y }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
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
    </motion.a>
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
  const magnetic = useMagnetic(0.22);

  return (
    <motion.a
      ref={magnetic.ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      animate={{ x: magnetic.x, y: magnetic.y }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={cn(
        "btn-ghost",
        size === "lg" ? "px-8 py-4.5 text-base" : "px-6 py-3.5 text-sm",
        className,
      )}
    >
      {children}
    </motion.a>
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

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Wraps a grid of cards so children animate in as a true Framer Motion
 * stagger sequence when scrolled into view — and animate back out and
 * re-trigger when scrolling back up past the section, matching the
 * bidirectional feel of the rest of the site.
 */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15, margin: "0px 0px -10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

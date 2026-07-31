import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const HIDDEN: Record<Direction, string> = {
  up: "translate-y-9",
  down: "-translate-y-9",
  left: "-translate-x-9",
  right: "translate-x-9",
  scale: "scale-[0.94]",
  none: "",
};

/**
 * Scroll-triggered reveal used across every section.
 *
 * Unlike a "play once" reveal, this re-arms itself every time the element
 * leaves the viewport — so content animates back in both when scrolling
 * down *and* when scrolling back up past it, the way Linear / Stripe /
 * Framer sections behave. The element only resets once it's fully out of
 * view (rootMargin below), so it never flickers mid-scroll.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  blur = true,
  once = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  blur?: boolean;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: shown ? `${delay}ms` : "0ms",
        transitionTimingFunction: shown
          ? "cubic-bezier(0.16, 1, 0.3, 1)"
          : "cubic-bezier(0.4, 0, 1, 1)",
        transitionDuration: shown ? "900ms" : "500ms",
      }}
      className={`transition-all will-change-transform motion-reduce:transition-none ${
        shown
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
          : `opacity-0 ${HIDDEN[direction]} ${blur ? "blur-[6px]" : ""}`
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

/** Subtle vertical parallax driven by scroll position. */
export function Parallax({
  children,
  strength = 40,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setOffset(Math.max(-1, Math.min(1, progress)) * strength);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
      {children}
    </div>
  );
}

/** Thin progress bar showing how far the page is scrolled. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight || 1;
        setProgress(Math.min(1, window.scrollY / max));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent-brand transition-transform duration-150"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}

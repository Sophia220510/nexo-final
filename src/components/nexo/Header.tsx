import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Star";
import { WA } from "@/lib/nexo";

const NAV = [
  { label: "Início", href: "/#inicio" },
  { label: "Por que ter um site", href: "/#por-que-site" },
  { label: "Demonstrações", href: "/demonstracoes" },
  { label: "Como funciona", href: "/#processo" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border/70 bg-background/90 shadow-sm backdrop-blur-xl" : "border-transparent bg-background/65 backdrop-blur-md"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 md:px-8">
        <a href="/" aria-label="NEXO — início">
          <Wordmark />
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WA.project}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <span className="relative z-10">Falar com a NEXO</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border xl:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
            aria-label="Navegação mobile"
          >
            <div className="px-5 pb-6 pt-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 text-base"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WA.project}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand mt-5 w-full px-6 py-4"
              >
                <span className="relative z-10">Falar com a NEXO</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

import { ArrowUp, Instagram, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Wordmark } from "./Star";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WA } from "@/lib/nexo";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem somos", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Sites", href: "#sites" },
  { label: "Transformações", href: "#transformacoes" },
  { label: "Método NEXO", href: "#metodo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const SERVICOS = [
  "Presença digital",
  "Identidade visual",
  "WhatsApp Business",
  "Desenvolvimento de sites",
  "Diagnóstico gratuito",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <div
        aria-hidden="true"
        className="aurora -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-accent-brand/20"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Conectando negócios ao crescimento digital com estratégia, organização e tecnologia.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da NEXO"
                className="btn-ghost h-11 w-11 p-0"
              >
                <Instagram size={17} strokeWidth={1.5} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Enviar e-mail para a NEXO"
                className="btn-ghost h-11 w-11 p-0"
              >
                <Mail size={17} strokeWidth={1.5} />
              </a>
              <a
                href={WA.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand px-5 py-3 text-sm"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp
                </span>
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-5 grid gap-3 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Soluções</p>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              {SERVICOS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="eyebrow">Contato</p>
            <div className="mt-5 grid gap-3 text-sm">
              <a
                href={WA.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle size={15} strokeWidth={1.5} /> {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-w-0 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={15} strokeWidth={1.5} />
                <span className="truncate">{EMAIL}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram size={15} strokeWidth={1.5} /> {INSTAGRAM_HANDLE}
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NEXO. Todos os direitos reservados.</span>
          <div className="flex items-center gap-5">
            <span>Estratégia digital · São Paulo, Brasil</span>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              Voltar ao topo <ArrowUp size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Wordmark } from "./Star";
import { EMAIL, INSTAGRAM_URL, WA } from "@/lib/nexo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#11120f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Sites profissionais e personalizados para apresentar empresas com clareza, organização
              e identidade.
            </p>
          </div>
          <nav className="grid content-start gap-3 text-sm text-white/65" aria-label="Rodapé">
            <p className="mb-1 text-xs uppercase tracking-[.2em] text-white">Navegação</p>
            <a href="/">Início</a>
            <a href="/demonstracoes">Demonstrações</a>
            <a href="/#servicos">Serviços</a>
            <a href="/#contato">Contato</a>
          </nav>
          <div className="grid content-start gap-3 text-sm text-white/65">
            <p className="mb-1 text-xs uppercase tracking-[.2em] text-white">Conecte-se</p>
            <a
              className="inline-flex items-center gap-2"
              href={WA.general}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-2"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={15} /> Instagram
            </a>
            <a className="inline-flex items-center gap-2" href={`mailto:${EMAIL}`}>
              <Mail size={15} /> {EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} NEXO.</span>
          <span>Sites profissionais para empresas.</span>
        </div>
      </div>
    </footer>
  );
}

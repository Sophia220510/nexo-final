import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import { Header } from "@/components/nexo/Header";
import { Footer } from "@/components/nexo/Footer";
import { Reveal, ScrollProgress } from "@/components/nexo/Reveal";
import { BrandButton } from "@/components/nexo/ui";
import { demonstrations } from "@/data/demonstrations";
import { WA } from "@/lib/nexo";

export const Route = createFileRoute("/demonstracoes")({
  head: () => ({
    meta: [
      { title: "Demonstrações de sites profissionais — NEXO" },
      {
        name: "description",
        content:
          "Explore demonstrações de sites criados pela NEXO para imobiliárias, pizzarias, nutricionistas, salões e barbearias.",
      },
    ],
  }),
  component: DemonstrationsPage,
});

function DemonstrationsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="aurora left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-accent-brand/25" />
          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft size={15} /> Voltar para o início
              </a>
              <p className="mt-10 text-xs uppercase tracking-[.22em] text-accent-brand">
                Projetos demonstrativos NEXO
              </p>
              <h1 className="mt-6 text-[2.7rem] font-semibold leading-[1.05] tracking-[-.05em] md:text-7xl">
                Veja como diferentes negócios podem se apresentar online.
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Criamos experiências personalizadas para cada segmento. Explore algumas
                demonstrações e imagine o que podemos desenvolver para sua empresa.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-7 md:grid-cols-2">
              {demonstrations.map((d, i) => (
                <Reveal key={d.segment} delay={(i % 2) * 90}>
                  <article
                    className={`group overflow-hidden rounded-[2rem] border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:border-accent-brand/45 hover:shadow-2xl hover:shadow-black/10 ${i === 0 ? "md:col-span-2" : ""}`}
                  >
                    <div className={`overflow-hidden bg-[#121310] p-3 ${i === 0 ? "md:p-5" : ""}`}>
                      <img
                        src={d.image}
                        alt={`Mockup demonstrativo de site para ${d.segment}`}
                        className={`w-full rounded-[1.25rem] object-cover transition-transform duration-700 group-hover:scale-[1.02] ${i === 0 ? "aspect-[16/7]" : "aspect-[16/10]"}`}
                      />
                    </div>
                    <div className="p-7 md:p-9">
                      <div className="flex flex-wrap items-start justify-between gap-5">
                        <div className="max-w-2xl">
                          <p className="text-xs uppercase tracking-[.2em] text-accent-brand">
                            Site para
                          </p>
                          <h2 className="mt-3 text-3xl font-semibold">{d.segment}</h2>
                          <p className="mt-4 leading-relaxed text-muted-foreground">
                            {d.description}
                          </p>
                        </div>
                        {d.url ? (
                          <a
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-brand px-6 py-3.5 text-sm"
                          >
                            <span className="relative z-10 inline-flex items-center gap-2">
                              Ver demonstração <ArrowUpRight size={15} />
                            </span>
                          </a>
                        ) : (
                          <span
                            aria-disabled="true"
                            title="Link será adicionado em breve"
                            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3.5 text-sm text-muted-foreground"
                          >
                            Ver demonstração <span className="text-xs">em breve</span>
                          </span>
                        )}
                      </div>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {d.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-brand" />
                <p>
                  Os projetos apresentados nesta página foram desenvolvidos pela NEXO para fins de
                  demonstração de design, estrutura e experiência. Nomes, imagens, empresas e
                  informações utilizadas nos projetos demonstrativos são ilustrativos.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#11120f] px-5 py-24 text-white md:px-8 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                Projetos sob medida
              </p>
              <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
                Não encontrou o seu tipo de negócio?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                Sem problema. As demonstrações mostram apenas algumas possibilidades. Antes de
                começar, entendemos seu negócio, sua identidade, seus serviços e como seus clientes
                entram em contato.
              </p>
              <div className="mt-9">
                <BrandButton href={WA.project} size="lg">
                  Quero falar sobre meu projeto
                </BrandButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

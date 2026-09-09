import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronRight, Info } from "lucide-react";
import { Header } from "@/components/nexo/Header";
import { Footer } from "@/components/nexo/Footer";
import { Reveal, ScrollProgress } from "@/components/nexo/Reveal";
import { BrandButton } from "@/components/nexo/ui";
import { demonstrations, realProjects } from "@/data/projects";
import { WA } from "@/lib/nexo";

export const Route = createFileRoute("/demonstracoes")({
  head: () => ({
    meta: [
      { title: "Projetos e demonstrações de sites — NEXO" },
      {
        name: "description",
        content:
          "Conheça projetos reais desenvolvidos pela NEXO e explore demonstrações de sites para empresas de diferentes segmentos.",
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
        <section className="relative overflow-hidden px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
          <div className="aurora left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-accent-brand/25" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
                <a
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Início
                </a>
                <ChevronRight size={14} className="text-muted-foreground/60" />
                <span aria-current="page" className="font-medium text-foreground">
                  Demonstrações
                </span>
              </nav>
            </Reveal>
            <div className="mx-auto mt-14 max-w-5xl text-center">
              <Reveal>
                <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                  Portfólio e demonstrações
                </p>
                <h1 className="mt-6 text-[2.7rem] font-semibold leading-[1.05] tracking-[-.05em] md:text-7xl">
                  Veja o nível de experiência que podemos criar para o seu negócio.
                </h1>
                <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  Conheça projetos reais desenvolvidos pela NEXO e explore demonstrações criadas
                  para diferentes segmentos.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[#11120f] px-5 py-24 text-white md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                Projetos reais · Clientes NEXO
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold md:text-5xl">
                Desenvolvidos para empresas reais.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-white/60">
                Trabalho aplicado a negócios que confiaram na NEXO para construir sua presença
                online. Sem números inventados: aqui, o próprio projeto é a prova.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-7">
              {realProjects.map((project, index) => (
                <Reveal key={project.name} delay={index * 100}>
                  <article className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] lg:grid-cols-[.8fr_1.2fr]">
                    <div className="relative flex min-h-64 items-end overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_25%_20%,rgba(191,246,69,.18),transparent_45%)] p-8 lg:border-b-0 lg:border-r md:p-12">
                      <div>
                        <span className="inline-flex rounded-full border border-accent-brand/30 bg-accent-brand/10 px-3 py-1.5 text-xs uppercase tracking-[.16em] text-accent-brand">
                          Cliente NEXO
                        </span>
                        <p className="mt-12 text-xs uppercase tracking-[.2em] text-white/35">
                          Prévia visual em breve
                        </p>
                        <p className="mt-2 text-3xl font-semibold">{project.name}</p>
                      </div>
                    </div>
                    <div className="p-8 md:p-12">
                      <p className="text-xs uppercase tracking-[.2em] text-accent-brand">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold md:text-4xl">{project.name}</h3>
                      <p className="mt-5 max-w-2xl leading-relaxed text-white/60">
                        {project.description}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 inline-flex items-center gap-2 text-sm font-medium"
                      >
                        Ver projeto <ArrowUpRight size={16} className="text-accent-brand" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                Outras possibilidades
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">
                Imagine alguém conhecendo sua empresa por uma experiência desse nível.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Projetos demonstrativos criados para mostrar como necessidades de diferentes
                segmentos podem ganhar uma apresentação própria.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {demonstrations.map((project, index) => (
                <Reveal key={project.segment} delay={(index % 2) * 80}>
                  <article
                    className={`group h-full overflow-hidden rounded-[2rem] border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:border-accent-brand/45 hover:shadow-2xl hover:shadow-black/10 ${index === 0 ? "md:col-span-2" : ""}`}
                  >
                    <div className="bg-[#121310] p-2.5">
                      <div className="flex h-8 items-center gap-1.5 px-2">
                        <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <i className="h-2.5 w-2.5 rounded-full bg-accent-brand/70" />
                        <span className="ml-3 truncate text-[10px] text-white/35">
                          {project.url}
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-[1.2rem] bg-white">
                        <img
                          src={project.image}
                          alt={`Homepage real da demonstração para ${project.segment}`}
                          className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015] ${index === 0 ? "aspect-[16/7]" : "aspect-[16/10]"}`}
                        />
                      </div>
                    </div>
                    <div className="p-7 md:p-9">
                      <p className="text-xs uppercase tracking-[.2em] text-accent-brand">
                        Projeto demonstrativo
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold">{project.segment}</h3>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
                      >
                        Ver demonstração <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-brand" />
                <p>
                  Os projetos desta seção foram desenvolvidos pela NEXO para fins de demonstração de
                  design, estrutura e experiência. Nomes, imagens, empresas e informações são
                  ilustrativos e não representam clientes da NEXO.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-accent-brand-soft/50 px-5 py-24 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                O próximo pode ser o seu
              </p>
              <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
                Agora imagine essa atenção aplicada à sua empresa.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Seu negócio tem identidade, produtos, serviços e clientes diferentes. Por isso, cada
                projeto da NEXO é pensado de acordo com a realidade da empresa.
              </p>
              <div className="mt-9">
                <BrandButton href={WA.project} size="lg">
                  Quero um projeto para minha empresa
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

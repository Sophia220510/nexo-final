import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/nexo/Header";
import { Footer } from "@/components/nexo/Footer";
import { Reveal, ScrollProgress } from "@/components/nexo/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrandButton, GhostButton, SectionHead } from "@/components/nexo/ui";
import { demonstrations, realProjects } from "@/data/projects";
import { WA } from "@/lib/nexo";
import heroMockups from "@/assets/hero-mockups.jpg";
import sitesShowcase from "@/assets/sites-showcase.png";

const FAQ = [
  {
    q: "Vocês trabalham apenas com os segmentos das demonstrações?",
    a: "Não. As demonstrações representam apenas algumas possibilidades. Cada projeto é desenvolvido de acordo com o negócio, o público e a identidade do cliente.",
  },
  {
    q: "Meu negócio já possui Instagram. Ainda faz sentido ter um site?",
    a: "Sim. O Instagram ajuda a chamar atenção, enquanto o site organiza produtos, serviços, informações e formas de contato em uma experiência própria da sua empresa.",
  },
  {
    q: "O site funciona no celular?",
    a: "Sim. Todos os projetos são responsivos e pensados para funcionar corretamente em celulares, tablets e computadores.",
  },
  {
    q: "Posso direcionar os visitantes para meu WhatsApp?",
    a: "Sim. Posicionamos chamadas estratégicas para levar o visitante diretamente ao WhatsApp, agendamento ou outro canal de contato.",
  },
  {
    q: "Vocês usam o mesmo modelo para todas as empresas?",
    a: "Não. A estrutura, a identidade e o conteúdo são adaptados à realidade de cada projeto.",
  },
  {
    q: "Como começo?",
    a: "O primeiro passo é conversar conosco. Entendemos sua empresa, seus serviços e o que o site precisa apresentar antes de definir a estrutura.",
  },
];

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Apresentação profissional",
    text: "Uma imagem mais sólida, clara e organizada para quem está conhecendo sua empresa.",
  },
  {
    icon: Layers3,
    title: "Tudo em um só lugar",
    text: "Produtos, serviços, preços, diferenciais, horários e informações em uma única experiência.",
  },
  {
    icon: Smartphone,
    title: "Feito para celular",
    text: "Navegação confortável no dispositivo que acompanha seu cliente durante todo o dia.",
  },
  {
    icon: MessageCircle,
    title: "Contato direto",
    text: "Botões bem posicionados levam o visitante ao WhatsApp, contato ou agendamento.",
  },
  {
    icon: Palette,
    title: "Identidade personalizada",
    text: "Visual construído para representar sua marca — sem aparência genérica de template.",
  },
  {
    icon: MonitorSmartphone,
    title: "Estrutura para o negócio",
    text: "A experiência acompanha o que sua empresa vende e como seu cliente decide.",
  },
];

const PROCESS = [
  [
    "01",
    "Entendemos seu negócio",
    "Conhecemos seus serviços, produtos, público, identidade e objetivos.",
  ],
  [
    "02",
    "Definimos a estrutura",
    "Organizamos as informações e o caminho que o visitante deve percorrer.",
  ],
  [
    "03",
    "Criamos o projeto",
    "Desenvolvemos uma experiência moderna, responsiva e alinhada à empresa.",
  ],
  [
    "04",
    "Revisamos com você",
    "Você acompanha o projeto e solicita os ajustes previstos no processo.",
  ],
  ["05", "Publicamos", "Colocamos o site no ar com os principais canais de contato integrados."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXO — Sites profissionais para empresas" },
      {
        name: "description",
        content:
          "Sites profissionais e personalizados para apresentar sua empresa, organizar informações e facilitar o contato com seus clientes.",
      },
      { property: "og:title", content: "NEXO — Sites profissionais para empresas" },
      {
        property: "og:description",
        content:
          "Sua empresa apresentada online com clareza, identidade e uma experiência criada para o seu negócio.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <section
          id="inicio"
          className="relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24"
        >
          <div className="aurora -left-24 top-0 h-96 w-96 bg-accent-brand/25" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
            <div className="relative z-10">
              <Reveal>
                <span className="badge-chip">
                  <Globe2 size={14} /> Sites profissionais para empresas
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 max-w-3xl text-[2.65rem] font-semibold leading-[1.01] tracking-[-.055em] sm:text-6xl lg:text-[4.7rem]">
                  Sua empresa pode causar uma impressão profissional{" "}
                  <span className="text-accent-brand">antes do primeiro contato.</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  A NEXO desenvolve sites profissionais e personalizados para apresentar seus
                  produtos, serviços e diferenciais de forma atrativa, organizar as informações que
                  seu cliente procura e conduzi-lo diretamente ao contato.
                </p>
              </Reveal>
              <Reveal delay={210}>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  De restaurantes e imobiliárias a profissionais da saúde, beleza e serviços: cada
                  projeto acompanha a identidade e as necessidades do negócio.
                </p>
              </Reveal>
              <Reveal delay={270}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <BrandButton href={WA.site} size="lg">
                    Quero um site para minha empresa
                  </BrandButton>
                  <GhostButton href="/demonstracoes" size="lg">
                    Ver nossos projetos
                  </GhostButton>
                </div>
              </Reveal>
              <Reveal delay={330}>
                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  {["Projeto personalizado", "Responsivo", "WhatsApp integrado"].map((x) => (
                    <span key={x} className="flex items-center gap-2">
                      <Check size={15} className="text-accent-brand" />
                      {x}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} direction="scale">
              <div className="relative rounded-[2rem] border border-border bg-[#11120f] p-3 shadow-2xl shadow-black/15">
                <img
                  src={heroMockups}
                  alt="Mockups de sites profissionais desenvolvidos pela NEXO em computador e celular"
                  className="aspect-[4/3] w-full rounded-[1.45rem] object-cover"
                  fetchPriority="high"
                />
                <div className="absolute -bottom-5 left-5 rounded-2xl border border-white/15 bg-[#171914]/95 px-5 py-4 text-white shadow-xl backdrop-blur">
                  <p className="text-xs uppercase tracking-[.18em] text-accent-brand">
                    Seu negócio, bem apresentado
                  </p>
                  <p className="mt-1 text-sm text-white/65">Desktop + mobile + contato direto</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="por-que-site" className="bg-[#11120f] px-5 py-24 text-white md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                Uma estrutura própria
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Seu cliente não deveria precisar investigar sua empresa.{" "}
                <span className="text-white/45">Seu site organiza a decisão.</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
              <Reveal>
                <p className="max-w-xl text-lg leading-relaxed text-white/60">
                  Antes de mandar uma mensagem, o cliente já está formando uma opinião. Não deixe
                  que ele monte sozinho o quebra-cabeça da sua empresa entre posts, destaques e
                  mensagens. Reúna o que ele precisa saber em uma experiência criada para o seu
                  negócio.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid gap-3 sm:grid-cols-4">
                  {[
                    "Instagram / Google",
                    "Site profissional",
                    "Produtos e diferenciais",
                    "WhatsApp / contato",
                  ].map((x, i) => (
                    <div
                      key={x}
                      className="relative rounded-2xl border border-white/10 bg-white/[.04] p-5"
                    >
                      <span className="text-xs text-accent-brand">0{i + 1}</span>
                      <p className="mt-3 text-sm font-medium">{x}</p>
                      {i < 3 && (
                        <ChevronRight className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-accent-brand sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                eyebrow="Muito além de estar online"
                title={
                  <>
                    Não criamos apenas uma página. Criamos a{" "}
                    <span className="text-accent-brand">experiência da sua empresa.</span>
                  </>
                }
                text="Cada escolha ajuda o visitante a entender o negócio, encontrar o que procura e chegar ao contato com mais clareza."
              />
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group bg-background p-7 transition-colors hover:bg-accent-brand-soft/40 md:p-9"
                >
                  <Icon className="h-6 w-6 text-accent-brand" />
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projetos-reais"
          className="bg-[#11120f] px-5 py-24 text-white md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                Projetos reais · Clientes NEXO
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Projetos que saíram da tela e foram para{" "}
                <span className="text-white/45">negócios reais.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                Empresas que confiaram na NEXO para construir uma presença online própria,
                profissional e alinhada ao que oferecem.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {realProjects.map((project, index) => (
                <Reveal key={project.name} delay={index * 100}>
                  <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] p-7 transition-colors hover:border-accent-brand/40 md:p-10">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent-brand/10 blur-3xl" />
                    <span className="inline-flex rounded-full border border-accent-brand/30 bg-accent-brand/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[.16em] text-accent-brand">
                      Cliente NEXO
                    </span>
                    <p className="mt-10 text-xs uppercase tracking-[.18em] text-white/40">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{project.name}</h3>
                    <p className="mt-5 max-w-xl leading-relaxed text-white/60">
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
                      className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-white"
                    >
                      Ver projeto <ArrowRight size={15} className="text-accent-brand" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:flex-row sm:items-center">
                <p className="max-w-2xl text-lg text-white/70">
                  Agora imagine essa atenção aplicada à identidade e às necessidades da sua empresa.
                </p>
                <BrandButton href={WA.project}>Quero um projeto nesse nível</BrandButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="demonstracoes"
          className="border-y border-border bg-secondary/40 px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <SectionHead
                  eyebrow="Projetos demonstrativos"
                  title={
                    <>
                      Imagine sua empresa com um site{" "}
                      <span className="text-accent-brand">desse nível.</span>
                    </>
                  }
                  text="Projetos conceituais criados pela NEXO para demonstrar possibilidades em diferentes segmentos."
                />
              </Reveal>
              <Reveal delay={100}>
                <GhostButton href="/demonstracoes">Ver todos os projetos</GhostButton>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {demonstrations.slice(0, 3).map((d, i) => (
                <Reveal key={d.segment} delay={i * 80}>
                  <article className="surface surface-hover overflow-hidden">
                    <div className="overflow-hidden bg-[#151613] p-3">
                      <img
                        src={d.image}
                        alt={`Demonstração de site para ${d.segment}`}
                        className="aspect-[16/10] w-full rounded-xl object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[.18em] text-accent-brand">
                        Projeto demonstrativo
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold">{d.segment}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {d.description}
                      </p>
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                      >
                        Ver demonstração <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-10 text-center">
                <BrandButton href={WA.project}>Quero um projeto para minha empresa</BrandButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="processo" className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                eyebrow="Como criamos seu site"
                title="Um processo claro, do primeiro contato à publicação."
                text="Você entende o que está acontecendo em cada etapa e participa das decisões importantes."
              />
            </Reveal>
            <div className="relative mt-16 grid gap-4 lg:grid-cols-5">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
              {PROCESS.map(([n, title, text], i) => (
                <Reveal key={n} delay={i * 70}>
                  <article className="relative">
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-accent-brand/40 bg-background text-sm font-semibold text-accent-brand shadow-[0_0_0_7px_var(--background)]">
                      {n}
                    </span>
                    <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent-brand-soft/50 px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Feito para diferentes negócios</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Cada negócio tem uma forma diferente de vender.{" "}
                <span className="text-accent-brand">O site também deveria ter.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Um cardápio precisa destacar produtos. Uma imobiliária precisa valorizar imóveis. Um
                profissional precisa transmitir confiança. O projeto acompanha a realidade de cada
                negócio.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-3">
                {[
                  "Restaurantes",
                  "Pizzarias",
                  "Salões",
                  "Barbearias",
                  "Imobiliárias",
                  "Clínicas",
                  "Nutricionistas",
                  "Laboratórios",
                  "Serviços",
                  "Empresas B2B",
                ].map((x, i) => (
                  <span
                    key={x}
                    className={`rounded-full border px-5 py-3 text-sm ${i % 3 === 0 ? "border-accent-brand bg-accent-brand text-accent-brand-foreground" : "border-border bg-background"}`}
                  >
                    {x}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                eyebrow="Uma experiência mais clara"
                title="Do interesse ao contato, sem deixar o cliente perdido."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {[
                {
                  title: "Sem uma estrutura própria",
                  items: [
                    "Encontra o Instagram",
                    "Procura informações nos posts",
                    "Abre destaques e busca preços",
                    "Pergunta tudo pelo WhatsApp",
                  ],
                },
                {
                  title: "Com um site NEXO",
                  items: [
                    "Entende a empresa",
                    "Visualiza produtos ou serviços",
                    "Conhece diferenciais e encontra respostas",
                    "Chama no WhatsApp mais preparado",
                  ],
                },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <article
                    className={`rounded-[2rem] border p-7 md:p-10 ${i === 1 ? "border-accent-brand/45 bg-[#11120f] text-white" : "border-border bg-secondary/40"}`}
                  >
                    <p
                      className={`text-xs uppercase tracking-[.2em] ${i === 1 ? "text-accent-brand" : "text-muted-foreground"}`}
                    >
                      {c.title}
                    </p>
                    <ol className="mt-8 grid gap-5">
                      {c.items.map((x, j) => (
                        <li key={x} className="flex items-center gap-4">
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs ${i === 1 ? "bg-accent-brand text-accent-brand-foreground" : "bg-background"}`}
                          >
                            {j + 1}
                          </span>
                          <span className={i === 1 ? "text-white/75" : "text-muted-foreground"}>
                            {x}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servicos"
          className="border-y border-border bg-secondary/40 px-5 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                eyebrow="Serviços complementares"
                title="Seu projeto pode ir além do site."
                text="Quando fizer sentido, a NEXO também ajuda a manter os outros pontos da presença digital coerentes com o novo projeto."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Identidade visual",
                "WhatsApp Business",
                "Presença digital",
                "Materiais para redes sociais",
                "Integrações simples",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-border bg-background p-5 text-sm font-medium"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Por que NEXO</p>
              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
                Seu site é uma extensão da sua empresa.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Não queremos apenas colocar algo no ar. Criamos uma estrutura que representa
                profissionalmente seu negócio e facilita a experiência de quem chega até ele.
              </p>
              <div className="mt-8">
                <BrandButton href={WA.project}>Quero conversar sobre meu projeto</BrandButton>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <img
                src={sitesShowcase}
                alt="Conjunto de interfaces de sites criados pela NEXO"
                className="w-full rounded-[2rem] border border-border bg-[#11120f] p-3 shadow-xl"
              />
            </Reveal>
          </div>
        </section>

        <section id="faq" className="bg-secondary/40 px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.65fr_1fr]">
            <Reveal>
              <SectionHead eyebrow="Perguntas frequentes" title="Antes de começar seu projeto." />
            </Reveal>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="border-t border-border">
                {FAQ.map((f, i) => (
                  <AccordionItem value={`faq-${i}`} key={f.q}>
                    <AccordionTrigger className="py-5 text-left text-base">{f.q}</AccordionTrigger>
                    <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        <section
          id="contato"
          className="relative overflow-hidden bg-[#11120f] px-5 py-24 text-white md:px-8 md:py-32"
        >
          <div className="aurora left-1/2 top-0 h-80 w-80 -translate-x-1/2 bg-accent-brand/30" />
          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[.22em] text-accent-brand">
                Vamos apresentar sua empresa como ela merece
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Sua empresa já existe. Agora faça ela parecer tão profissional online quanto merece.
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/60">
                Conte para a NEXO sobre o seu negócio e vamos entender qual estrutura faz sentido
                para apresentá-lo com clareza e identidade.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <BrandButton href={WA.project} size="lg">
                  Quero conversar sobre meu site
                </BrandButton>
                <a
                  href="/demonstracoes"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4.5 font-medium text-white transition-colors hover:bg-white/10"
                >
                  Ver demonstrações
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

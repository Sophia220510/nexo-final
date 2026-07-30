import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarCheck,
  Check,
  Clock,
  Code2,
  Compass,
  Eye,
  Flag,
  Handshake,
  HeartHandshake,
  HelpCircle,
  Instagram,
  LayoutGrid,
  LineChart,
  Mail,
  MessageSquareText,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";
import { Header } from "@/components/nexo/Header";
import { Footer } from "@/components/nexo/Footer";
import { Parallax, Reveal, ScrollProgress } from "@/components/nexo/Reveal";
import { Star } from "@/components/nexo/Star";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BrandButton,
  Card,
  FloatingBadge,
  GhostButton,
  Icon,
  IconChip,
  SectionHead,
  Stat,
} from "@/components/nexo/ui";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WA } from "@/lib/nexo";
import heroMockups from "@/assets/hero-mockups.jpg";
import caseBella from "@/assets/case-bella.png";
import caseVitalab from "@/assets/case-vitalab.jpg";

const TITLE = "NEXO — Organização, estratégia e crescimento digital";
const DESCRIPTION =
  "A NEXO transforma a presença digital da sua empresa em ferramenta de crescimento: Instagram, WhatsApp Business, identidade, estratégia e desenvolvimento de sites. Diagnóstico gratuito.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const PILARES = ["Estratégia", "Conteúdo", "Tecnologia", "Comunicação"];

const VMV = [
  {
    icon: Eye,
    label: "Visão",
    text: "Acreditamos que toda empresa merece uma presença digital capaz de transmitir valor, gerar confiança e aproximar clientes.",
  },
  {
    icon: Flag,
    label: "Missão",
    text: "Tornar o marketing e a organização digital acessíveis para pequenas e médias empresas, ajudando cada negócio a crescer de forma consistente.",
  },
  {
    icon: HeartHandshake,
    label: "Valores",
    text: "Estratégia antes da execução, criatividade com propósito, transparência e evolução constante.",
  },
];

const DESAFIOS = [
  {
    icon: Instagram,
    title: "Instagram parado ou sem estratégia",
    text: "Um perfil desatualizado reduz oportunidades.",
  },
  {
    icon: Palette,
    title: "Comunicação visual inconsistente",
    text: "A empresa perde reconhecimento.",
  },
  {
    icon: MessageSquareText,
    title: "Atendimento desorganizado",
    text: "Clientes desistem antes de fechar.",
  },
  {
    icon: Handshake,
    title: "Pouca conexão com clientes",
    text: "Diminui confiança e engajamento.",
  },
  {
    icon: Clock,
    title: "Falta de tempo para cuidar do digital",
    text: "O marketing acaba sendo deixado de lado.",
  },
];

const GANHOS = [
  {
    icon: Handshake,
    title: "Mais confiança",
    text: "Identidade visual profissional e credibilidade.",
  },
  {
    icon: Smartphone,
    title: "Presença digital organizada",
    text: "Comunicação clara e consistente.",
  },
  {
    icon: MessageSquareText,
    title: "Atendimento mais eficiente",
    text: "WhatsApp Business estruturado.",
  },
  {
    icon: Clock,
    title: "Mais tempo para focar no negócio",
    text: "Nós cuidamos do digital enquanto você cuida da empresa.",
  },
  {
    icon: Target,
    title: "Estratégia personalizada",
    text: "Planejamento feito para a realidade do seu negócio.",
  },
];

const SOLUCOES = [
  {
    icon: Instagram,
    title: "Presença Digital",
    items: [
      "Organização do Instagram",
      "Planejamento de conteúdo",
      "Calendário de publicações",
      "Reels e Stories",
    ],
  },
  {
    icon: LineChart,
    title: "Crescimento",
    items: ["Estratégia", "Diagnóstico", "Planejamento", "Relatórios"],
  },
  {
    icon: CalendarCheck,
    title: "Organização",
    items: [
      "WhatsApp Business",
      "Padronização do atendimento",
      "Catálogo",
      "Mensagens automáticas",
    ],
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Sites",
    items: ["Sites institucionais", "Landing pages", "Portfólios", "Integração com WhatsApp"],
  },
];

const METODO = [
  { letra: "N", title: "Norte", text: "Encontramos a direção ideal para a marca." },
  { letra: "E", title: "Estratégia", text: "Criamos um plano baseado nos objetivos do negócio." },
  {
    letra: "X",
    title: "eXperiência",
    text: "Melhoramos a forma como clientes percebem e interagem com a empresa.",
  },
  { letra: "O", title: "Organização", text: "Estruturamos processos e comunicação." },
];

const ETAPAS = [
  { n: "01", title: "Diagnóstico", text: "Entendemos o negócio, público e necessidades." },
  { n: "02", title: "Estratégia", text: "Definimos as melhores soluções para a empresa." },
  { n: "03", title: "Planejamento", text: "Organizamos conteúdos, comunicação e processos." },
  { n: "04", title: "Execução", text: "Criamos e implementamos as soluções." },
  { n: "05", title: "Acompanhamento", text: "Ajustamos e evoluímos conforme os objetivos." },
];

const ANALISE = [
  "Instagram",
  "WhatsApp Business",
  "Identidade visual",
  "Comunicação",
  "Posicionamento",
  "Oportunidades de melhoria",
];

const DIFERENCIAIS = [
  "Atendimento próximo e transparente",
  "Estratégia antes da execução",
  "Soluções personalizadas",
  "Organização acima da quantidade",
  "Evolução contínua",
  "Uso inteligente de tecnologia",
  "Comunicação pensada para gerar confiança",
];

const SITE_BENEFICIOS = [
  {
    icon: Sparkles,
    title: "Sites modernos e personalizados",
    text: "Layout premium construído a partir da identidade da sua marca.",
  },
  {
    icon: Smartphone,
    title: "Design responsivo",
    text: "Experiência impecável em celular, tablet e computador.",
  },
  {
    icon: MessageSquareText,
    title: "Integração com WhatsApp",
    text: "Contato rápido e direto para os seus clientes.",
  },
];

const SITE_TIPOS = [
  { icon: LayoutGrid, label: "Sites institucionais" },
  { icon: Target, label: "Landing pages" },
  { icon: Palette, label: "Portfólios" },
  { icon: Compass, label: "Páginas para empresas" },
];

const CASES = [
  {
    src: caseBella,
    alt: "Comparativo antes e depois do perfil de Instagram do Studio Bella Mulher, com bio, destaques e feed reorganizados pela NEXO",
    segmento: "Beleza e estética",
    nome: "Studio Bella Mulher",
    resumo:
      "Perfil desorganizado e sem estratégia transformado em uma comunicação clara, com bio otimizada, destaques padronizados e feed planejado.",
  },
  {
    src: caseVitalab,
    alt: "Comparativo antes e depois do perfil de Instagram do Laboratório VitaLab, com identidade visual e informações reorganizadas pela NEXO",
    segmento: "Saúde e análises clínicas",
    nome: "Laboratório VitaLab",
    resumo:
      "Comunicação genérica substituída por identidade visual consistente, informações essenciais acessíveis e agendamento direto pelo WhatsApp.",
  },
];

const PROVA = [
  {
    icon: LineChart,
    title: "Crescimento da presença digital",
    text: "Perfis passam a ser atualizados com constância e propósito, ampliando o alcance da marca entre as pessoas certas.",
  },
  {
    icon: Palette,
    title: "Melhoria visual",
    text: "Feed, destaques e materiais ganham padrão estético coerente, com design profissional em cada ponto de contato.",
  },
  {
    icon: LayoutGrid,
    title: "Organização da marca",
    text: "Conteúdos, atendimento e informações essenciais deixam de ser improviso e passam a seguir um processo definido.",
  },
  {
    icon: BadgeCheck,
    title: "Fortalecimento da identidade",
    text: "A empresa passa a comunicar seu valor com clareza, transmitindo confiança antes mesmo do primeiro atendimento.",
  },
];

const HERO_STATS = [
  { value: "05", label: "etapas no método NEXO" },
  { value: "04", label: "pilares: estratégia, conteúdo, tecnologia, comunicação" },
  { value: "100%", label: "propostas personalizadas por negócio" },
];

const FAQ = [
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "Conversamos com você pelo WhatsApp para entender o negócio, o público e os objetivos. A partir disso, analisamos Instagram, WhatsApp Business, identidade visual e comunicação, e devolvemos um panorama claro com oportunidades de melhoria — sem compromisso.",
  },
  {
    q: "Quanto tempo leva para ver os primeiros resultados?",
    a: "Depende do ponto de partida e do volume de trabalho combinado. Depois do diagnóstico e da estratégia, a organização inicial (bio, destaques, feed, WhatsApp Business) costuma ser implementada nas primeiras semanas de parceria; o restante segue o cronograma definido juntos.",
  },
  {
    q: "A NEXO atende qualquer segmento de negócio?",
    a: "Trabalhamos principalmente com pequenas e médias empresas que já entregam um bom serviço, mas sentem que sua presença digital não comunica esse valor — de clínicas e salões a laboratórios, comércios e prestadores de serviço.",
  },
  {
    q: "Vocês cuidam só do Instagram ou também de site e WhatsApp?",
    a: "Cuidamos do ecossistema digital completo: organização do Instagram, estruturação do WhatsApp Business, identidade visual, comunicação e, quando faz sentido para o negócio, desenvolvimento de sites e landing pages.",
  },
  {
    q: "Como são definidos os valores da parceria?",
    a: "Cada proposta é construída sob medida, considerando os objetivos do negócio, as necessidades atuais e o volume de trabalho necessário. Por isso preferimos conversar antes de falar em valores fechados.",
  },
  {
    q: "Preciso ter uma equipe de marketing para trabalhar com a NEXO?",
    a: "Não. Grande parte dos nossos parceiros não tem equipe de marketing — é exatamente por isso que buscam a NEXO. Cuidamos da estratégia e da execução para que você possa focar em tocar o negócio.",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section
          id="inicio"
          className="relative overflow-hidden px-5 pb-24 pt-14 md:px-8 md:pb-36 md:pt-24"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="aurora -left-24 top-[-6rem] h-[26rem] w-[26rem] bg-accent-brand/25" />
            <div className="aurora right-[-8rem] top-24 h-[22rem] w-[22rem] bg-accent-brand/15" />
            <div
              className="absolute inset-0 opacity-[0.55]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 75%)",
              }}
            />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.08fr_1fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                  <Star className="h-3.5 w-3.5" />
                  Organização · Estratégia · Crescimento
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-8 text-[2.5rem] font-medium leading-[1.02] tracking-[-0.035em] md:text-[4.25rem]">
                  Sua empresa entrega excelência. Sua presença digital precisa dizer{" "}
                  <span className="relative whitespace-nowrap text-accent-brand">
                    isso
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-accent-brand/20 blur-[6px]"
                    />
                  </span>
                  .
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  A NEXO transforma Instagram, WhatsApp e identidade visual em uma presença
                  digital organizada, estratégica e feita para gerar confiança — para que sua
                  empresa pare de perder clientes por causa de uma primeira impressão desorganizada.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <BrandButton href={WA.presence} size="lg">
                    Quero fortalecer minha presença digital
                  </BrandButton>
                  <GhostButton href="#sobre" size="lg">
                    Conheça a NEXO
                  </GhostButton>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                  {["Instagram", "WhatsApp Business", "Identidade visual", "Sites"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent-brand" strokeWidth={1.5} />
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={380}>
                <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
                  {HERO_STATS.map((s) => (
                    <Stat key={s.label} value={s.value} label={s.label} />
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} direction="scale" className="relative">
              <Parallax strength={22}>
                <div className="surface relative overflow-hidden rounded-[2rem] p-3">
                  <img
                    src={heroMockups}
                    width={1200}
                    height={1200}
                    alt="Perfil de Instagram organizado e atendimento no WhatsApp Business em dois smartphones"
                    className="w-full rounded-[1.5rem]"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <FloatingBadge
                  delay={500}
                  duration={5.5}
                  className="absolute -bottom-6 -left-4 hidden sm:block"
                >
                  <Star className="h-6 w-6" />
                  <span className="text-sm font-medium">Presença digital organizada</span>
                </FloatingBadge>

                <FloatingBadge
                  delay={750}
                  duration={6.5}
                  className="absolute -right-5 top-8 hidden md:block"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-brand/15 text-accent-brand">
                    <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium">Diagnóstico gratuito</span>
                </FloatingBadge>
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section
          id="sobre"
          className="border-t border-border bg-secondary/30 px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal direction="left">
              <SectionHead
                eyebrow="Quem somos"
                title={
                  <>
                    Serviços excelentes merecem ser{" "}
                    <span className="text-accent-brand">percebidos</span>.
                  </>
                }
                text="A NEXO nasceu da ideia de que muitas empresas oferecem serviços excelentes, mas não conseguem transmitir isso no ambiente digital."
              />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Nosso objetivo é aproximar negócios de seus clientes por meio de estratégia,
                organização, comunicação e tecnologia.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {PILARES.map((p, i) => (
                <Reveal key={p} delay={i * 90} direction="right">
                  <div className="surface surface-hover flex items-center gap-3 px-5 py-6">
                    <Star className="h-4 w-4 shrink-0" />
                    <span className="text-base font-medium">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VISÃO / MISSÃO / VALORES */}
        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead eyebrow="Nossos princípios" title="Visão, missão e valores." />
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {VMV.map((v, i) => (
                <Reveal key={v.label} delay={i * 100}>
                  <Card>
                    <IconChip icon={v.icon} />
                    <h3 className="mt-6 text-xl font-medium">{v.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DESAFIOS */}
        <section className="border-y border-border bg-secondary/30 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead
                eyebrow="Desafios"
                title="O que impede muitas empresas de crescer no ambiente digital."
                text="Muitos negócios oferecem excelentes serviços, mas sua presença digital não transmite esse valor."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DESAFIOS.map((d, i) => (
                <Reveal key={d.title} delay={i * 80} direction="up">
                  <Card>
                    <IconChip icon={d.icon} />
                    <h3 className="mt-6 text-base font-medium">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GANHOS */}
        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead eyebrow="Benefícios" title="O que sua empresa ganha com a NEXO." />
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {GANHOS.map((g, i) => (
                <Reveal key={g.title} delay={i * 80} direction="up">
                  <Card>
                    <IconChip icon={g.icon} />
                    <h3 className="mt-6 text-base font-medium">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section
          id="solucoes"
          className="border-y border-border bg-secondary/30 px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead
                eyebrow="Soluções NEXO"
                title="Como podemos fortalecer sua presença digital?"
              />
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SOLUCOES.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <Card>
                    <IconChip icon={s.icon} />
                    <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
                    <ul className="mt-5 grid gap-3">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent-brand"
                            strokeWidth={1.5}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Cada proposta é construída de forma personalizada após entendermos os objetivos, as
                necessidades atuais e o volume de trabalho de cada empresa.
              </p>
            </Reveal>
          </div>
        </section>

        {/* DESENVOLVIMENTO DE SITES */}
        <section id="sites" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
          <div
            aria-hidden="true"
            className="aurora right-[-10rem] top-10 h-[24rem] w-[24rem] bg-accent-brand/15"
          />
          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <SectionHead
                eyebrow="Desenvolvimento de sites"
                title={
                  <>
                    Um site profissional que trabalha pela sua{" "}
                    <span className="text-accent-brand">marca</span>.
                  </>
                }
                text="Criamos sites institucionais, landing pages e portfólios com ferramentas modernas de IA — rápidos, bonitos e alinhados à estratégia da sua marca."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SITE_BENEFICIOS.map((b, i) => (
                <Reveal key={b.title} delay={i * 80} direction="up">
                  <Card>
                    <IconChip icon={b.icon} />
                    <h3 className="mt-6 text-base font-medium">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="surface mt-8 grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
                <div>
                  <p className="eyebrow">O que desenvolvemos</p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {SITE_TIPOS.map((t) => (
                      <span
                        key={t.label}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-accent-brand hover:text-foreground"
                      >
                        <Icon icon={t.icon} className="h-4 w-4 text-accent-brand" />
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Sites criados com ferramentas modernas de IA, com layout premium e foco em
                    converter visitantes em clientes.
                  </p>
                </div>
                <BrandButton href={WA.site} size="lg" className="w-full md:w-auto">
                  Quero um site profissional
                </BrandButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section
          id="transformacoes"
          className="border-y border-border bg-secondary/30 px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead
                eyebrow="Antes e depois"
                title="Da estratégia à prática."
                text="Projetos conceituais desenvolvidos pela NEXO para demonstrar, na prática, como aplicamos estratégia, organização e identidade visual em uma presença digital."
              />
            </Reveal>

            <div className="mt-14 grid gap-8">
              {CASES.map((c, i) => (
                <Reveal key={c.nome} delay={i * 100} direction="up">
                  <figure className="surface surface-hover overflow-hidden p-0">
                    <div className="grid gap-6 border-b border-border p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-8">
                      <div className="min-w-0">
                        <p className="eyebrow">{c.segmento}</p>
                        <h3 className="mt-3 text-xl font-medium md:text-2xl">{c.nome}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                          {c.resumo}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2 text-xs">
                        <span className="rounded-full border border-border px-3 py-1.5 text-muted-foreground">
                          Antes
                        </span>
                        <span className="h-px w-5 bg-border" aria-hidden="true" />
                        <span className="rounded-full bg-accent-brand px-3 py-1.5 font-medium text-accent-brand-foreground">
                          Depois
                        </span>
                      </div>
                    </div>
                    <img
                      src={c.src}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full bg-background object-cover"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mt-8 text-xs text-muted-foreground">
                Projetos conceituais desenvolvidos pela NEXO com empresas fictícias, criados apenas
                para demonstração do método de trabalho.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PROVA SOCIAL / RESULTADOS */}
        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead
                eyebrow="Resultados"
                title="O impacto de uma presença digital bem construída."
                text="Não trabalhamos com promessas de números. Trabalhamos com clareza, consistência e percepção de valor — os fundamentos que sustentam qualquer crescimento."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {PROVA.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} direction="up">
                  <Card>
                    <IconChip icon={p.icon} />
                    <h3 className="mt-6 text-lg font-medium">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MÉTODO NEXO */}
        <section
          id="metodo"
          className="border-y border-border bg-secondary/30 px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead
                eyebrow="Método NEXO"
                title="Quatro letras, um processo."
                text="Todo projeto segue esse processo para garantir organização e consistência."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {METODO.map((m, i) => (
                <Reveal key={m.letra} delay={i * 110} direction="up">
                  <Card>
                    <span className="text-4xl font-medium tracking-tight text-accent-brand">
                      {m.letra}
                    </span>
                    <h3 className="mt-5 text-lg font-medium">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="surface relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-14 md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="aurora -right-20 -top-20 h-[20rem] w-[20rem] bg-accent-brand/20"
            />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <Reveal direction="left">
                <SectionHead
                  eyebrow="Diagnóstico gratuito"
                  title="Boas soluções começam com um bom diagnóstico."
                  text="Antes de qualquer proposta, buscamos entender profundamente o seu negócio, seus objetivos e seus desafios."
                />
                <BrandButton href={WA.diagnostico} size="lg" className="mt-9 w-full sm:w-auto">
                  Solicitar diagnóstico gratuito
                </BrandButton>
              </Reveal>

              <Reveal delay={120} direction="right">
                <ul className="grid gap-3 rounded-3xl border border-border bg-background p-6 md:p-8">
                  {ANALISE.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-accent-brand" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA A PARCERIA */}
        <section
          id="como-funciona"
          className="border-y border-border bg-secondary/30 px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead
                eyebrow="Como funciona a parceria"
                title="Um processo claro, do diagnóstico ao acompanhamento."
              />
            </Reveal>

            <div className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
              <div className="absolute left-[7px] top-2 hidden h-px w-full bg-gradient-to-r from-accent-brand/60 via-border to-transparent md:block" />
              {ETAPAS.map((e, i) => (
                <Reveal key={e.n} delay={i * 100} className="relative">
                  <span className="block h-[15px] w-[15px] rounded-full bg-accent-brand ring-4 ring-accent-brand/15" />
                  <p className="mt-6 text-sm text-muted-foreground">{e.n}</p>
                  <h3 className="mt-2 text-lg font-medium">{e.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {e.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHead eyebrow="Nossos diferenciais" title="Por que escolher a NEXO?" />
            </Reveal>
            <div className="mt-12 flex flex-wrap gap-3">
              {DIFERENCIAIS.map((d, i) => (
                <Reveal key={d} delay={i * 60} direction="scale">
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-brand">
                    <Star className="h-3 w-3" />
                    {d}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADO */}
        <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="text-[1.75rem] font-medium leading-[1.12] tracking-tight md:text-[2.75rem]">
                Não é só sobre deixar bonito.
              </h2>
              <p className="mt-5 text-base text-muted-foreground md:text-lg">
                É sobre comunicar com clareza, transmitir confiança e gerar resultados.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
                {["Instagram", "WhatsApp Business", "Identidade", "Site"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-5 py-3 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mx-auto mt-6 h-10 w-px bg-gradient-to-b from-transparent to-accent-brand" />
              <div className="btn-brand mx-auto px-7 py-4 text-base">
                <span className="relative z-10 inline-flex items-center gap-2">
                  <BadgeCheck size={18} strokeWidth={1.5} /> Sua marca
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-12 text-lg leading-relaxed md:text-2xl">
                Mais confiança.
                <br />
                Mais clareza.
                <br />
                Mais oportunidades.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="border-t border-border bg-secondary/30 px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHead
                align="center"
                eyebrow="Perguntas frequentes"
                title="Ainda com dúvidas? Provavelmente já respondemos."
                className="mx-auto"
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="surface mt-12 px-6 md:px-10">
                <Accordion type="single" collapsible className="w-full">
                  {FAQ.map((item, i) => (
                    <AccordionItem
                      key={item.q}
                      value={`item-${i}`}
                      className={i === FAQ.length - 1 ? "border-b-0" : undefined}
                    >
                      <AccordionTrigger className="gap-4 py-6 text-left text-base font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="surface surface-hover mt-6 flex flex-col items-center gap-4 px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
                <div className="flex items-center gap-3">
                  <IconChip icon={HelpCircle} />
                  <p className="text-sm text-muted-foreground">
                    Não encontrou sua resposta? Fale direto com a gente pelo WhatsApp.
                  </p>
                </div>
                <GhostButton href={WA.general} external size="md" className="w-full sm:w-auto">
                  Tirar dúvida agora
                </GhostButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          id="contato"
          className="relative overflow-hidden border-t border-border px-5 py-28 md:px-8 md:py-40"
        >
          <div
            aria-hidden="true"
            className="aurora left-1/2 top-0 h-[22rem] w-[38rem] -translate-x-1/2 bg-accent-brand/20"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <Star className="mx-auto h-9 w-9" />
              <p className="eyebrow mt-8 justify-center">Vamos conversar?</p>
              <h2 className="mt-5 text-[2rem] font-medium leading-[1.06] tracking-[-0.03em] md:text-[3.25rem]">
                Conectando negócios ao{" "}
                <span className="text-accent-brand">crescimento digital</span>.
              </h2>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">
                Toda empresa possui desafios diferentes. Será um prazer conhecer o seu negócio e
                desenvolver uma estratégia personalizada.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BrandButton href={WA.general} size="lg" className="w-full sm:w-auto">
                  Falar com a NEXO
                </BrandButton>
                <GhostButton href={WA.site} size="lg" external className="w-full sm:w-auto">
                  Solicitar orçamento para meu site
                </GhostButton>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                <a
                  href={WA.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface surface-hover flex items-center justify-center gap-2 px-4 py-4 text-sm"
                >
                  <MessageSquareText size={16} strokeWidth={1.5} className="text-accent-brand" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="surface surface-hover flex min-w-0 items-center justify-center gap-2 px-4 py-4 text-sm"
                >
                  <Mail size={16} strokeWidth={1.5} className="text-accent-brand" />
                  <span className="truncate">{EMAIL}</span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface surface-hover flex items-center justify-center gap-2 px-4 py-4 text-sm"
                >
                  <Instagram size={16} strokeWidth={1.5} className="text-accent-brand" />
                  {INSTAGRAM_HANDLE}
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

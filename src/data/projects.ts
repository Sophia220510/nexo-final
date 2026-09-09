import demoPizzaria from "@/assets/demo-pizzaria.png";
import demoImobiliaria from "@/assets/demo-imobiliaria.png";
import demoSalao from "@/assets/demo-salao.png";
import demoOdontologia from "@/assets/demo-odontologia.png";
import demoNutricionista from "@/assets/demo-nutricionista.png";

export const realProjects = [
  {
    name: "Laboratório Santa Helena",
    subtitle: "Análises clínicas",
    description:
      "Site institucional desenvolvido para apresentar o Laboratório Santa Helena, seus serviços, áreas de atuação e formas de contato em uma experiência profissional e acessível.",
    features: ["Site institucional", "Serviços", "Contato", "Experiência responsiva"],
    url: "https://laboratoriosantahelena.vercel.app",
    preview: "",
  },
  {
    name: "TEPAC",
    subtitle: "Prática em Análises Clínicas",
    description:
      "Projeto digital desenvolvido para apresentar o programa TEPAC, organizando informações sobre a experiência, a proposta e o contato em uma estrutura profissional.",
    features: ["Projeto de estágio", "Apresentação do programa", "Informações", "Contato"],
    url: "https://tepacsantahelena.vercel.app",
    preview: "",
  },
] as const;

/** Adicione ou altere projetos, URLs e imagens somente neste arquivo. */
export const demonstrations = [
  {
    segment: "Imobiliária",
    description:
      "Uma vitrine digital para valorizar cada imóvel com imagens, informações e diferenciais e aproximar o visitante do corretor responsável.",
    tags: ["Imóveis", "Galeria", "Filtros", "WhatsApp"],
    image: demoImobiliaria,
    url: "https://imobili-five.vercel.app",
  },
  {
    segment: "Pizzaria",
    description:
      "Um cardápio visual e envolvente para apresentar pizzas, sabores, preços e combos e levar o cliente ao WhatsApp quando estiver pronto para pedir.",
    tags: ["Cardápio", "Combos", "Promoções", "WhatsApp"],
    image: demoPizzaria,
    url: "https://artisan-oven.vercel.app",
  },
  {
    segment: "Nutricionista",
    description:
      "Uma presença profissional para transmitir confiança, apresentar especialidades e facilitar o caminho até o agendamento.",
    tags: ["Serviços", "Especialidades", "Sobre", "Agendamento"],
    image: demoNutricionista,
    url: "https://nutridemonstracao.vercel.app",
  },
  {
    segment: "Salão de beleza",
    description:
      "Uma experiência visual pensada para valorizar serviços, procedimentos e resultados antes mesmo do primeiro contato.",
    tags: ["Serviços", "Galeria", "Procedimentos", "Agendamento"],
    image: demoSalao,
    url: "https://exemplosaloes.vercel.app",
  },
  {
    segment: "Clínica odontológica",
    description:
      "Uma apresentação clara e acolhedora para explicar tratamentos, diferenciais e tecnologia e facilitar o agendamento.",
    tags: ["Tratamentos", "Tecnologia", "Equipe", "Agendamento"],
    image: demoOdontologia,
    url: "https://exemploodonto.vercel.app",
  },
] as const;

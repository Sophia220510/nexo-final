import heroMockups from "@/assets/hero-mockups.jpg";
import sitesShowcase from "@/assets/sites-showcase.png";
import caseBella from "@/assets/case-bella.png";
import caseVitalab from "@/assets/case-vitalab.jpg";
import ecosystem from "@/assets/ecosistema-nexo.png";

/** Edite apenas `url` quando cada demonstração estiver publicada. */
export const demonstrations = [
  {
    segment: "Imobiliária",
    description:
      "Imóveis apresentados com imagens, informações, diferenciais e acesso rápido ao corretor responsável.",
    tags: ["Imóveis", "Galeria", "Filtros", "WhatsApp"],
    image: sitesShowcase,
    url: "",
  },
  {
    segment: "Pizzaria",
    description:
      "Sabores, preços, combos e promoções organizados para levar o cliente diretamente ao pedido pelo WhatsApp.",
    tags: ["Cardápio", "Combos", "Promoções", "WhatsApp"],
    image: heroMockups,
    url: "",
  },
  {
    segment: "Nutricionista",
    description:
      "Uma apresentação profissional para fortalecer a confiança, explicar atendimentos e facilitar o agendamento.",
    tags: ["Serviços", "Especialidades", "Sobre", "Agendamento"],
    image: caseVitalab,
    url: "",
  },
  {
    segment: "Salão de beleza",
    description:
      "Serviços, procedimentos, resultados e informações em uma experiência visual moderna e profissional.",
    tags: ["Serviços", "Galeria", "Procedimentos", "Agendamento"],
    image: caseBella,
    url: "",
  },
  {
    segment: "Barbearia",
    description:
      "Uma experiência alinhada à identidade da barbearia, com serviços, valores, profissionais e agendamento.",
    tags: ["Serviços", "Equipe", "Valores", "Agendamento"],
    image: ecosystem,
    url: "",
  },
] as const;

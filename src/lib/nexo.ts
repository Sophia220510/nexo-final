// Central place for NEXO contact details.
export const WHATSAPP_NUMBER = "5511926382560";
export const PHONE_DISPLAY = "(11) 92638-2560";
export const EMAIL = "nexoempresa2026@gmail.com";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general: whatsappLink("Olá, NEXO! Gostaria de falar com vocês."),
  presence: whatsappLink("Olá, NEXO! Quero fortalecer a presença digital da minha empresa."),
  diagnostico: whatsappLink(
    "Olá, NEXO! Quero solicitar o diagnóstico gratuito da minha presença digital.",
  ),
  site: whatsappLink("Olá, NEXO! Quero um site profissional. Podem me enviar um orçamento?"),
};

export const INSTAGRAM_URL = "https://www.instagram.com/gonexo.br/";
export const INSTAGRAM_HANDLE = "@gonexo.br";

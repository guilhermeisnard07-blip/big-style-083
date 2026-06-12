/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  CONFIGURAÇÃO CENTRAL DA MARCA — BIG STYLE 083                   ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Este é o ÚNICO lugar onde você precisa editar para mudar:       ║
 * ║  → Número do WhatsApp                                            ║
 * ║  → Links das redes sociais                                       ║
 * ║  → E-mail e telefone de contato                                  ║
 * ║  → Nome da cidade / região                                       ║
 * ║  → Horário de atendimento                                        ║
 * ║                                                                  ║
 * ║  Após editar aqui, as mudanças aparecem em TODO o site.          ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

/** Informações gerais da marca */
export const MARCA = {
  nome: "BIG STYLE 083",
  slogan: "Moda street para quem cria tendencia.",
  descricao:
    "Moda street para quem cria tendencia. Nascidos das ruas de Santa Luzia da Paraiba, representamos a cultura urbana com atitude e exclusividade.",
  cidade: "Santa Luzia - PB",
  anoFundacao: 2020,
  email: "contato@bigstyle083.com",
  telefone: "(83) 99999-9999",        // ← Atualize aqui
  horarioAtendimento: "Seg a Sab — 8h às 19h",
} as const;

/** Links das redes sociais e canais de atendimento */
export const REDES_SOCIAIS = {
  instagram: {
    usuario: "@bigstyle.083",
    url: "https://www.instagram.com/bigstyle.083",
  },
  whatsapp: {
    /**
     * Formato: código do país (55) + DDD + número, sem espaços ou símbolos.
     * Exemplo: Brasil (55) + DDD 83 + número = "5583999999999"
     */
    numero: "5598999999999",          // ← Atualize aqui
    url: "https://wa.me/5598999999999", // ← Atualize aqui
  },
  facebook: {
    url: "#",                          // ← Adicione o link real quando tiver
  },
  twitter: {
    url: "#",                          // ← Adicione o link real quando tiver
  },
} as const;

/** Links do menu de navegação exibidos no Header */
export const NAV_LINKS = [
  { label: "Inicio",     href: "#inicio" },
  { label: "Produtos",   href: "#produtos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Novidades",  href: "#novidades" },
  { label: "Sobre Nos",  href: "#sobre" },
  { label: "Contato",    href: "#contato" },
] as const;

/** Estatísticas exibidas no Hero e na seção Sobre Nós */
export const ESTATISTICAS_HERO = [
  { valor: "+5.000", rotulo: "Clientes" },
  { valor: "4.9",    rotulo: "Avaliacao" },
  { valor: "083",    rotulo: "Santa Luzia - PB" },
] as const;

/** Condições de frete grátis exibidas no PromoBanner */
export const FRETE_GRATIS = {
  cidade: "Santa Luzia - PB",
  valorMinimo: "R$ 200,00",
} as const;

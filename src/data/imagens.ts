/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  FOTOS DA LOJA — BIG STYLE 083                                   ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Para trocar uma foto:                                           ║
 * ║  1. Coloque o novo arquivo de imagem dentro da pasta /assets     ║
 * ║  2. Atualize o import correspondente abaixo (foto1, foto2, ...)  ║
 * ║  A mudança reflete automaticamente em:                           ║
 * ║    → Seção "Novidades"                                           ║
 * ║    → Seção "Mais Vendidos"                                       ║
 * ║    → Feed do Instagram                                           ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

// Importação direta das fotos reais da loja (tiradas do Instagram @bigstyle.083)
// O Vite processa esses imports e otimiza as imagens automaticamente no build.
import foto1 from "@assets/SnapInsta.to_714716821_17952309597168548_4571602754247314000_n_1780926178179.jpg";
import foto2 from "@assets/SnapInsta.to_713685120_17952310812168548_2042448722394658366_n_1780926178191.jpg";
import foto3 from "@assets/SnapInsta.to_713685120_17952309648168548_4803470392856816969_n_1780926178192.jpg";
import foto4 from "@assets/SnapInsta.to_712743927_17952310803168548_3502243312620099095_n_1780926178192.jpg";
import foto5 from "@assets/SnapInsta.to_712743927_17952310506168548_1167144220191457514_n_1780926178192.jpg";
import foto6 from "@assets/SnapInsta.to_700134684_17949417570168548_5692840455085208716_n_1780926178192.jpg";
import foto7 from "@assets/SnapInsta.to_698425939_17949417552168548_8166719600906338229_n_1780926178193.jpg";
import foto8 from "@assets/SnapInsta.to_698409491_17949418107168548_7858880327444153199_n_1780926178193.jpg";
import foto9 from "@assets/SnapInsta.to_656574191_17942057031168548_8305075107224488736_n_1780926178193.jpg";

/** Tipo que descreve uma foto da loja */
export interface FotoLoja {
  id: number;
  /** Caminho processado pelo Vite (use como src de <img>) */
  src: string;
  /** Texto alternativo para acessibilidade e SEO */
  descricao: string;
}

/**
 * Lista completa das 9 fotos da loja, em ordem de exibição.
 * Usada pelo InstagramFeed, Novidades e Mais Vendidos.
 */
export const FOTOS_LOJA: FotoLoja[] = [
  { id: 1, src: foto1, descricao: "Camiseta Big Style 083 - estilo urbano" },
  { id: 2, src: foto2, descricao: "Look Big Style 083 - camiseta graffiti" },
  { id: 3, src: foto3, descricao: "Big Style 083 - camiseta streetwear" },
  { id: 4, src: foto4, descricao: "Big Style 083 - look completo anjo" },
  { id: 5, src: foto5, descricao: "Big Style 083 - camiseta off white" },
  { id: 6, src: foto6, descricao: "Big Style 083 - calca wide leg" },
  { id: 7, src: foto7, descricao: "Big Style 083 - calca e camiseta gorila" },
  { id: 8, src: foto8, descricao: "Big Style 083 - looks masculinos streetwear" },
  { id: 9, src: foto9, descricao: "Big Style 083 - bermuda cargo stone" },
];

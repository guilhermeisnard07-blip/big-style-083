/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  DADOS DOS PRODUTOS — BIG STYLE 083                              ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Para adicionar ou editar um produto:                            ║
 * ║  1. Coloque a foto em /assets e registre em src/data/imagens.ts  ║
 * ║  2. Edite o array `products` abaixo                              ║
 * ║                                                                  ║
 * ║  Campos obrigatórios: id, name, price, installments, image       ║
 * ║  Para destacar em "Mais Vendidos": bestSeller: true              ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

// As fotos são importadas de um arquivo centralizado.
// Adicionar uma foto nova? → Edite src/data/imagens.ts primeiro.
import { FOTOS_LOJA } from "./imagens";

/** Forma de um produto no catálogo */
export interface Product {
  id: number;
  name: string;
  /** Preço em reais (número, ex: 89.90) */
  price: number;
  /** Texto do parcelamento exibido no card (ex: "6x de R$ 14,98") */
  installments: string;
  /** Caminho da imagem processado pelo Vite */
  image: string;
  /** Badge exibida no canto do card (ex: "NOVO", "SALE") */
  badge?: string;
  /** Categoria para filtragem futura */
  category: string;
  /** Se true, aparece na seção "Mais Vendidos" */
  bestSeller?: boolean;
}

// Atalho para as fotos — as 9 fotos reais da loja
const [f1, f2, f3, f4, f5, f6, f7, f8, f9] = FOTOS_LOJA.map((f) => f.src);

/**
 * Catálogo completo de produtos.
 * Os 4 primeiros marcados com bestSeller: true aparecem em "Mais Vendidos".
 */
export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Big Monkey Preta",
    price: 89.90,
    installments: "6x de R$ 14,98",
    image: f1,
    badge: "NOVO",
    category: "Camisetas",
    bestSeller: true,
  },
  {
    id: 2,
    name: "Camiseta Tag Graffiti Preta",
    price: 89.90,
    installments: "6x de R$ 14,98",
    image: f2,
    badge: "NOVO",
    category: "Camisetas",
    bestSeller: false,
  },
  {
    id: 3,
    name: "Camiseta Wildstyle Preta",
    price: 89.90,
    installments: "6x de R$ 14,98",
    image: f3,
    badge: "NOVO",
    category: "Camisetas",
    bestSeller: true,
  },
  {
    id: 4,
    name: "Camiseta Anjo Preta",
    price: 99.90,
    installments: "6x de R$ 16,65",
    image: f4,
    badge: "NOVO",
    category: "Camisetas",
    bestSeller: true,
  },
  {
    id: 5,
    name: "Camiseta Off White Graffiti",
    price: 89.90,
    installments: "6x de R$ 14,98",
    image: f5,
    badge: "NOVO",
    category: "Camisetas",
    bestSeller: false,
  },
  {
    id: 6,
    name: "Calca Jeans Wide Cinza",
    price: 149.90,
    installments: "6x de R$ 24,98",
    image: f6,
    badge: "NOVO",
    category: "Calcas",
    bestSeller: true,
  },
  {
    id: 7,
    name: "Look Gorila + Calca Wide",
    price: 229.90,
    installments: "6x de R$ 38,32",
    image: f7,
    badge: "NOVO",
    category: "Calcas",
    bestSeller: false,
  },
  {
    id: 8,
    name: "Look Street Duplo",
    price: 199.90,
    installments: "6x de R$ 33,32",
    image: f8,
    badge: "NOVO",
    category: "Calcas",
    bestSeller: false,
  },
  {
    id: 9,
    name: "Bermuda Cargo Stone",
    price: 129.90,
    installments: "6x de R$ 21,65",
    image: f9,
    badge: "NOVO",
    category: "Bermudas",
    bestSeller: false,
  },
];

/** Lista de categorias — usada pela seção "Categorias" */
export const categories = [
  { id: 1, name: "Camisetas",  icon: "Shirt",   count: 24 },
  { id: 2, name: "Bermudas",   icon: "Package", count: 12 },
  { id: 3, name: "Calcas",     icon: "Layers",  count: 8  },
  { id: 4, name: "Bones",      icon: "Crown",   count: 15 },
  { id: 5, name: "Acessorios", icon: "Watch",   count: 20 },
  { id: 6, name: "Jaquetas",   icon: "Zap",     count: 6  },
  { id: 7, name: "Outlet",     icon: "Tag",     count: 30 },
];

/** Depoimentos de clientes — usados pela seção "Avaliações" */
export const testimonials = [
  {
    id: 1,
    name: "Lucas M.",
    avatar: "L",
    rating: 5,
    text: "Produto incrivel! Chegou rapido e a qualidade e top demais. Ja comprei 3 camisetas e vou voltar com certeza!",
    city: "Santa Luzia - PB",
  },
  {
    id: 2,
    name: "Amanda S.",
    avatar: "A",
    rating: 5,
    text: "Melhor loja street de Santa Luzia! Atendimento excelente, entrega rapida e produto de qualidade. Recomendo demais!",
    city: "Santa Luzia - PB",
  },
  {
    id: 3,
    name: "Rafael C.",
    avatar: "R",
    rating: 5,
    text: "A camiseta Big Monkey e demais! Recebi varios elogios. Big Style representa demais o nosso street!",
    city: "Santa Luzia - PB",
  },
];

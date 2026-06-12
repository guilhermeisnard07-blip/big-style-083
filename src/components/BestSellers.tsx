/**
 * Seção "Mais Vendidos" (grade 4 colunas) — BIG STYLE 083
 *
 * Filtra os produtos com `bestSeller: true` e exibe os 4 primeiros
 * em uma grade responsiva (2 colunas no mobile, 4 no desktop).
 *
 * Para alterar quais produtos aparecem aqui, mude o campo
 * `bestSeller` em src/data/products.ts.
 */

import { motion } from "framer-motion";
import { Plus, TrendingUp } from "lucide-react";
import { products } from "@/data/products";
import { formatarPreco } from "@/utils/formatPrice";

/** URL de fallback caso a imagem falhe ao carregar */
const IMAGEM_FALLBACK =
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&q=80";

// Pega apenas os produtos marcados como destaque (máx. 4)
const maisvVendidos = products.filter((p) => p.bestSeller).slice(0, 4);

// Animação escalonada do container de cards
const variantesContainer = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.1 } },
};

// Animação de cada card: sobe e aparece
const variantesCard = {
  oculto:  { opacity: 0, y: 40, scale: 0.95 },
  visivel: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function BestSellers() {
  return (
    <section
      id="produtos"
      data-testid="best-sellers-section"
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho da seção ──────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: "#A855F7" }}>
            Os Favoritos
          </p>
          <h2
            className="text-5xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}
          >
            MAIS VENDIDOS
          </h2>
          {/* Divisor com ícone de tendência */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ backgroundColor: "#2A2A2A" }} />
            <TrendingUp size={20} style={{ color: "#7B2EFF" }} />
            <div className="h-px w-16" style={{ backgroundColor: "#2A2A2A" }} />
          </div>
        </motion.div>

        {/* ── Grade de produtos ────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={variantesContainer}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: "-60px" }}
        >
          {maisvVendidos.map((produto) => (
            <motion.div
              key={produto.id}
              data-testid={`best-seller-card-${produto.id}`}
              className="relative rounded-2xl overflow-hidden border group cursor-pointer"
              style={{ backgroundColor: "#111111", borderColor: "#2A2A2A" }}
              variants={variantesCard}
              whileHover={{
                y: -8,
                borderColor: "rgba(168,85,247,0.5)",
                boxShadow: "0 0 30px rgba(168,85,247,0.35)",
              }}
            >
              {/* Faixa "Top Vendas" no canto superior direito */}
              <div className="absolute top-0 right-0 z-10 overflow-hidden" style={{ width: "80px", height: "80px" }}>
                <div
                  className="absolute text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center"
                  style={{
                    backgroundColor: "#7B2EFF",
                    width: "120px",
                    height: "26px",
                    top: "18px",
                    right: "-28px",
                    transform: "rotate(45deg)",
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                  }}
                >
                  Top Vendas
                </div>
              </div>

              {/* Foto do produto */}
              <div className="relative overflow-hidden" style={{ height: "200px", backgroundColor: "#0d0d0d" }}>
                <motion.img
                  src={produto.image}
                  alt={produto.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = IMAGEM_FALLBACK;
                  }}
                />
              </div>

              {/* Corpo: nome, preço e botão */}
              <div className="p-4">
                <p className="text-white font-semibold text-sm mb-2 leading-snug">{produto.name}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "'Bebas Neue', cursive" }}
                    >
                      {formatarPreco(produto.price)}
                    </p>
                    <p className="text-gray-500 text-xs">{produto.installments}</p>
                  </div>

                  <motion.button
                    data-testid={`best-seller-add-${produto.id}`}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#7B2EFF" }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 14px rgba(168,85,247,0.7)" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Adicionar ${produto.name}`}
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Seção "Novidades" (carrossel horizontal) — BIG STYLE 083
 *
 * Exibe TODOS os produtos em um carrossel deslizável horizontalmente.
 * Os botões ◀ ▶ do cabeçalho rolam 280px por clique.
 *
 * Cada item do carrossel é renderizado pelo componente <ProductCard>.
 * Para editar os produtos, veja src/data/products.ts.
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  // Referência do container scrollável para controlar a rolagem programaticamente
  const scrollRef = useRef<HTMLDivElement>(null);

  /** Rola o carrossel 280px para a esquerda ou direita */
  const rolarCarrossel = (direcao: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direcao === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="novidades"
      data-testid="new-arrivals-section"
      className="py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho: título + controles do carrossel ────────── */}
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-2" style={{ color: "#A855F7" }}>
              Confira os Lancamentos
            </p>
            <h2
              className="text-5xl lg:text-7xl font-bold text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              NOVIDADES
            </h2>
          </motion.div>

          {/* Botões de navegação do carrossel */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              data-testid="carousel-prev"
              className="w-10 h-10 rounded-full flex items-center justify-center border text-gray-400 hover:text-white transition-all"
              style={{ borderColor: "#2A2A2A", backgroundColor: "#111111" }}
              whileHover={{ borderColor: "#7B2EFF", color: "#A855F7", scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => rolarCarrossel("left")}
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <motion.button
              data-testid="carousel-next"
              className="w-10 h-10 rounded-full flex items-center justify-center border text-gray-400 hover:text-white transition-all"
              style={{ borderColor: "#2A2A2A", backgroundColor: "#111111" }}
              whileHover={{ borderColor: "#7B2EFF", color: "#A855F7", scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => rolarCarrossel("right")}
              aria-label="Proximo"
            >
              <ChevronRight size={18} />
            </motion.button>

            <motion.button
              data-testid="ver-todos"
              className="px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border transition-all"
              style={{ borderColor: "#7B2EFF", color: "#A855F7" }}
              whileHover={{
                backgroundColor: "#7B2EFF",
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(123,46,255,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Ver Todos
            </motion.button>
          </motion.div>
        </div>

        {/* ── Carrossel de produtos (rolagem horizontal) ──────────── */}
        {/* scrollbar-hide oculta a barra de rolagem nativa do navegador */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-5 overflow-x-auto scrollbar-hide pb-4"
        >
          {products.map((produto, i) => (
            <ProductCard key={produto.id} produto={produto} indice={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

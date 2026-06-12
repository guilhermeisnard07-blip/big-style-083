/**
 * Seção "Banner Promocional" (PromoBanner) — BIG STYLE 083
 *
 * Banner de alto impacto com fundo roxo animado.
 * Anuncia o frete grátis a partir de R$ 200,00.
 *
 * Para editar os valores e a cidade, veja FRETE_GRATIS em src/config/site.ts.
 */

import { motion } from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";
import { FRETE_GRATIS } from "@/config/site";

export default function PromoBanner() {
  return (
    <section
      data-testid="promo-banner"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Fundo: gradiente roxo animado que se move suavemente */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #4C1D95 0%, #7B2EFF 40%, #A855F7 70%, #4C1D95 100%)",
          backgroundSize: "300% 300%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grade decorativa sobre o fundo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orbes de luz para profundidade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,0,0,0.2) 0%, transparent 60%)",
        }}
      />

      {/* ── Conteúdo central ────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Truck size={28} className="text-white opacity-80" />
            <p className="text-white text-sm font-semibold uppercase tracking-[0.3em] opacity-80">
              Oferta Especial
            </p>
          </div>

          {/* Título principal */}
          <h2
            className="text-white leading-none mb-4"
            style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(60px, 12vw, 160px)" }}
          >
            FRETE GRATIS
          </h2>

          {/* Cidade e valor mínimo — editáveis em src/config/site.ts */}
          <p className="text-white text-lg lg:text-2xl font-medium mb-2 opacity-90">
            {FRETE_GRATIS.cidade} nas compras acima de
          </p>
          <p
            className="font-bold mb-10 text-white"
            style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            {FRETE_GRATIS.valorMinimo}
          </p>

          {/* Botão de ação — rola para a seção de novidades */}
          <motion.a
            href="#novidades"
            data-testid="promo-cta"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-none font-bold uppercase tracking-widest text-sm transition-all duration-300"
            style={{ backgroundColor: "#ffffff", color: "#7B2EFF" }}
            whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            Aproveitar Agora
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

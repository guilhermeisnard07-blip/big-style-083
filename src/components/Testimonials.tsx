/**
 * Seção "Depoimentos" (Testimonials) — BIG STYLE 083
 *
 * Exibe 3 avaliações de clientes em cards lado a lado.
 * Os depoimentos vêm de src/data/products.ts (array `testimonials`).
 *
 * Para editar, adicionar ou remover depoimentos, veja
 * o array `testimonials` em src/data/products.ts.
 */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/products";

// Animação escalonada: os cards aparecem um após o outro
const variantesContainer = {
  oculto:  {},
  visivel: { transition: { staggerChildren: 0.12 } },
};

const variantesCard = {
  oculto:  { opacity: 0, y: 40 },
  visivel: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho ──────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: "#A855F7" }}>
            Avaliações
          </p>
          <h2
            className="text-5xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.04em" }}
          >
            O QUE DIZEM OS CLIENTES
          </h2>
        </motion.div>

        {/* ── Cards de depoimento ─────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={variantesContainer}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((depoimento) => (
            <motion.div
              key={depoimento.id}
              data-testid={`testimonial-${depoimento.id}`}
              className="relative rounded-2xl border p-8 flex flex-col gap-5"
              style={{ backgroundColor: "#111111", borderColor: "#2A2A2A" }}
              variants={variantesCard}
              whileHover={{
                borderColor: "rgba(168,85,247,0.4)",
                boxShadow: "0 0 24px rgba(168,85,247,0.18)",
              }}
            >
              {/* Ícone de aspas decorativo */}
              <Quote size={32} className="opacity-30" style={{ color: "#7B2EFF" }} />

              {/* Estrelas de avaliação (preenchidas em amarelo) */}
              <div className="flex gap-1">
                {Array.from({ length: depoimento.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" style={{ color: "#F59E0B" }} />
                ))}
              </div>

              {/* Texto do depoimento */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                "{depoimento.text}"
              </p>

              {/* Autor: avatar com inicial + nome e cidade */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#2A2A2A" }}>
                {/* Avatar: círculo roxo com a inicial do nome */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#7B2EFF" }}
                >
                  {depoimento.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{depoimento.name}</p>
                  <p className="text-gray-500 text-xs">{depoimento.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Seção "Feed do Instagram" (@bigstyle.083) — BIG STYLE 083
 *
 * Exibe as 9 fotos reais da loja em uma grade 3×3.
 * Cada foto tem um overlay roxo no hover com o ícone do Instagram
 * e leva para o perfil @bigstyle.083 ao clicar.
 *
 * As fotos vêm de src/data/imagens.ts — edite lá para trocar as imagens.
 * Para editar o link do Instagram, veja src/config/site.ts.
 */

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { FOTOS_LOJA } from "@/data/imagens";
import { REDES_SOCIAIS } from "@/config/site";

// Variantes de animação da grade — aplica escalonamento entre os filhos
const variantesContainer = {
  oculto:  {},
  visivel: { transition: { staggerChildren: 0.06 } },
};

// Variantes de animação de cada foto — aparece e cresce
const variantesItem = {
  oculto:  { opacity: 0, scale: 0.85 },
  visivel: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function InstagramFeed() {
  return (
    <section
      data-testid="instagram-section"
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho ──────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={28} style={{ color: "#A855F7" }} />
            <h2
              className="text-4xl lg:text-6xl font-bold text-white"
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.08em" }}
            >
              @BIGSTYLE.083
            </h2>
          </div>
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] font-medium">
            No Instagram
          </p>
        </motion.div>

        {/* ── Grade 3×3 de fotos ──────────────────────────────────── */}
        {/*
          As fotos vêm de FOTOS_LOJA (src/data/imagens.ts).
          Para trocar uma foto: edite o import correspondente em imagens.ts.
        */}
        <motion.div
          className="grid grid-cols-3 gap-1 lg:gap-2 mb-10"
          variants={variantesContainer}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FOTOS_LOJA.map((foto) => (
            <motion.a
              key={foto.id}
              href={REDES_SOCIAIS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`instagram-image-${foto.id}`}
              className="relative overflow-hidden rounded-md cursor-pointer group block"
              style={{ aspectRatio: "1" }} // Força proporção quadrada
              variants={variantesItem}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={foto.src}
                alt={foto.descricao}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay roxo com ícone que aparece no hover */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(123,46,255,0.65)" }}
              >
                <FaInstagram className="text-white text-3xl drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── Botão "Ver Instagram" ────────────────────────────────── */}
        <div className="text-center">
          <motion.a
            href={REDES_SOCIAIS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-follow-button"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300"
            style={{ backgroundColor: "#7B2EFF", color: "#ffffff" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            <FaInstagram size={18} />
            Ver Instagram
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/**
 * Seção "Nossa História" (BrandStory) — BIG STYLE 083
 *
 * Conta a história e a identidade da marca.
 * Layout: duas colunas — texto à esquerda, estatísticas à direita.
 *
 * Para editar o texto da história, altere os parágrafos abaixo.
 * Para editar o link do Instagram, veja src/config/site.ts.
 */

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { REDES_SOCIAIS } from "@/config/site";

/** Estatísticas exibidas nos cards da coluna direita */
const estatisticas = [
  { valor: "+5.000", rotulo: "Clientes Satisfeitos" },
  { valor: "2020",   rotulo: "Ano de Fundacao"      },
  { valor: "100%",   rotulo: "Estilo Autêntico"     },
  { valor: "083",    rotulo: "Sao Luis - MA"         },
];

export default function BrandStory() {
  return (
    <section
      id="sobre"
      data-testid="brand-story-section"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Borda superior com gradiente roxo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #7B2EFF, transparent)" }}
      />

      {/* Número "083" fantasma no fundo */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
        <span
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(200px, 35vw, 500px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(123,46,255,0.08)",
            userSelect: "none",
            lineHeight: 1,
            marginRight: "-60px",
          }}
        >
          083
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Coluna esquerda: texto ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-6" style={{ color: "#A855F7" }}>
              Nossa Historia
            </p>

            {/* Título principal com gradiente */}
            <h2
              className="leading-none mb-8 text-white"
              style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(50px, 7vw, 96px)" }}
            >
              MAIS QUE ROUPA.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #A855F7 0%, #7B2EFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                UMA IDENTIDADE.
              </span>
            </h2>

            {/* Parágrafos da história — edite aqui */}
            <div className="space-y-4 text-gray-400 text-base lg:text-lg leading-relaxed mb-10">
              <p>
                BIG STYLE 083 nasceu das ruas de Santa Luzia da Paraiba. Mais do que uma marca,
                somos um movimento — para quem vive o hip-hop, o street e a cultura urbana.
              </p>
              <p>
                Cada peca carrega atitude, exclusividade e o orgulho de ser 083. Nosso estilo
                e reflexo da nossa identidade: forte, autentica e sem compromisos.
              </p>
              <p style={{ color: "#A855F7", fontWeight: 600 }}>
                Veste o street. Representa o 083.
              </p>
            </div>

            {/* Botão para o Instagram */}
            <motion.a
              href={REDES_SOCIAIS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="brand-instagram-button"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-none border font-bold uppercase tracking-widest text-sm transition-all duration-300"
              style={{ borderColor: "#A855F7", color: "#A855F7" }}
              whileHover={{
                backgroundColor: "#7B2EFF",
                borderColor: "#7B2EFF",
                color: "#ffffff",
                boxShadow: "0 0 24px rgba(168,85,247,0.5)",
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FaInstagram size={18} />
              Seguir no Instagram
            </motion.a>
          </motion.div>

          {/* ── Coluna direita: grade de estatísticas ───────────── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {estatisticas.map((stat, i) => (
                <motion.div
                  key={stat.rotulo}
                  data-testid={`stat-${i}`}
                  className="rounded-2xl border p-6 text-center"
                  style={{ backgroundColor: "#111111", borderColor: "#2A2A2A" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  whileHover={{
                    borderColor: "rgba(168,85,247,0.4)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.2)",
                  }}
                >
                  <p
                    className="font-bold text-3xl lg:text-4xl mb-1"
                    style={{ fontFamily: "'Bebas Neue', cursive", color: "#A855F7" }}
                  >
                    {stat.valor}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.rotulo}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Borda inferior com gradiente roxo */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #7B2EFF, transparent)" }}
      />
    </section>
  );
}

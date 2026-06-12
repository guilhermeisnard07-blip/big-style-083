/**
 * Seção Hero (apresentação principal) — BIG STYLE 083
 *
 * É a primeira seção visível ao abrir o site.
 * Contém:
 *  - Título principal com efeito de gradiente roxo
 *  - Subtítulo e dois botões de ação (Ver Coleção / WhatsApp)
 *  - Barra de estatísticas (clientes, avaliação, cidade)
 *  - Mascote (gorila urbano) com parallax ao rolar e animação flutuante
 *  - Fundo com grade urbana e brilho radial roxo
 *
 * Para editar os textos e links, veja src/config/site.ts.
 * Para trocar o mascote, substitua o arquivo em /assets e atualize o import abaixo.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { REDES_SOCIAIS, ESTATISTICAS_HERO } from "@/config/site";

// ─── Para trocar o mascote: substitua o arquivo e atualize este import ───
import mascotImg from "@assets/file_000000006b5c71f5bb57b9c145dd891d_1780879066775.png";

export default function Hero() {
  // Referência da seção para calcular o progresso do scroll
  const ref = useRef<HTMLDivElement>(null);

  // useScroll rastreia quanto desta seção já foi rolada
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax: o mascote se move mais devagar que o texto ao rolar
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY   = useTransform(scrollYProgress, [0, 1], [0, 40]);
  // O fundo vai sumindo conforme o usuário rola
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Fundo: grade urbana de linhas roxas sutis */}
      <div className="absolute inset-0 urban-grid-bg" />

      {/* Fundo: brilho radial roxo centralizado no lado direito */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(123,46,255,0.18) 0%, rgba(76,29,149,0.08) 50%, transparent 100%)",
        }}
      />

      {/* Número "083" fantasma no fundo (some ao rolar) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none overflow-hidden"
        style={{ opacity: bgOpacity }}
      >
        <span
          className="select-none"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(180px, 30vw, 420px)",
            color: "transparent",
            WebkitTextStroke: "2px rgba(123,46,255,0.15)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          083
        </span>
      </motion.div>

      {/* Linhas diagonais decorativas (canto superior direito) */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 600 800"
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="600" y1="0" x2="0"    y2="800" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="8 16" />
          <line x1="700" y1="0" x2="100"  y2="800" stroke="#A855F7" strokeWidth="1"   strokeDasharray="4 20" />
          <line x1="500" y1="0" x2="-100" y2="800" stroke="#7B2EFF" strokeWidth="0.8" />
        </svg>
      </div>

      {/* ── Conteúdo principal: duas colunas ──────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Coluna esquerda: texto e botões ───────────────────── */}
          <motion.div style={{ y: textY }} className="text-left">

            {/* Linha acima do título (eyebrow) */}
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
              style={{ color: "#A855F7" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Moda Street — Colecao 2024
            </motion.p>

            {/* Título principal em dois blocos */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h1
                className="leading-none mb-2"
                style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(60px, 10vw, 120px)" }}
              >
                <span className="text-white block">SEU ESTILO.</span>
                {/* Segunda linha com gradiente roxo e brilho */}
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(90deg, #A855F7 0%, #7B2EFF 60%, #4C1D95 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                    filter: "drop-shadow(0 0 30px rgba(168,85,247,0.5))",
                  }}
                >
                  STREETWEAR.
                </span>
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.p
              className="text-gray-400 text-lg lg:text-xl font-medium mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Moda street para quem cria tendencia.
            </motion.p>

            {/* Botões de ação */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {/* Botão primário: leva para a seção de novidades */}
              <motion.a
                href="#novidades"
                data-testid="hero-cta-colecao"
                className="flex items-center gap-2 px-7 py-3.5 rounded-none text-white font-bold uppercase tracking-widest text-sm transition-all duration-300"
                style={{ backgroundColor: "#7B2EFF", border: "2px solid #7B2EFF" }}
                whileHover={{ boxShadow: "0 0 30px rgba(168,85,247,0.6), 0 0 60px rgba(123,46,255,0.3)", scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver Colecao
                <ArrowRight size={16} />
              </motion.a>

              {/* Botão secundário: abre o WhatsApp */}
              <motion.a
                href={REDES_SOCIAIS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-whatsapp"
                className="flex items-center gap-2 px-7 py-3.5 rounded-none font-bold uppercase tracking-widest text-sm transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid rgba(168,85,247,0.5)",
                  color: "#A855F7",
                }}
                whileHover={{
                  borderColor: "#A855F7",
                  boxShadow: "0 0 20px rgba(168,85,247,0.3)",
                  color: "#ffffff",
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp size={16} />
                Falar no WhatsApp
              </motion.a>
            </motion.div>

            {/* Barra de estatísticas */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t"
              style={{ borderColor: "#2A2A2A" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {ESTATISTICAS_HERO.map((stat) => (
                <div key={stat.rotulo} className="text-center">
                  <p
                    className="font-bold text-2xl"
                    style={{ fontFamily: "'Bebas Neue', cursive", color: "#A855F7" }}
                  >
                    {stat.valor}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.rotulo}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Coluna direita: mascote com parallax e float ──────── */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ y: mascotY }}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Aura roxa atrás do mascote */}
            <div
              className="absolute rounded-full"
              style={{
                width: "min(480px, 90vw)",
                height: "min(480px, 90vw)",
                background: "radial-gradient(circle, rgba(123,46,255,0.3) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Mascote com animação de flutuação suave */}
            <motion.img
              src={mascotImg}
              alt="BIG STYLE 083 mascote - gorila urbano com coroa"
              className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
              style={{ filter: "drop-shadow(0 0 40px rgba(168,85,247,0.4))" }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              data-testid="hero-mascot"
            />
          </motion.div>
        </div>
      </div>

      {/* Gradiente de transição para a próxima seção */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
      />
    </section>
  );
}

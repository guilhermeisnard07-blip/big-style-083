/**
 * Seção de Categorias — BIG STYLE 083
 *
 * Exibe os tipos de produto disponíveis na loja em círculos clicáveis.
 * Layout: flex-wrap centralizado — de 3 a 7 itens por linha conforme a tela.
 *
 * Para adicionar ou remover categorias, edite o array `categorias` abaixo.
 */

import { motion } from "framer-motion";
import { Shirt, Package, Layers, Crown, Watch, Zap, Tag } from "lucide-react";

/** Cada categoria tem um nome, ícone e um id único */
const categorias = [
  { nome: "Camisetas",  Icone: Shirt,   id: "camisetas"  },
  { nome: "Bermudas",   Icone: Package, id: "bermudas"   },
  { nome: "Calcas",     Icone: Layers,  id: "calcas"     },
  { nome: "Bones",      Icone: Crown,   id: "bones"      },
  { nome: "Acessorios", Icone: Watch,   id: "acessorios" },
  { nome: "Jaquetas",   Icone: Zap,     id: "jaquetas"   },
  { nome: "Outlet",     Icone: Tag,     id: "outlet"     },
];

// Variantes de animação do container — aplica escalonamento entre os filhos
const variantesContainer = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.08 } },
};

// Variantes de animação de cada item — sobe e aparece
const variantesItem = {
  oculto:  { opacity: 0, y: 30, scale: 0.85 },
  visivel: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Categories() {
  return (
    <section
      id="categorias"
      data-testid="categories-section"
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
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: "#A855F7" }}>
            Explore
          </p>
          <h2
            className="text-5xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}
          >
            CATEGORIAS
          </h2>
          {/* Divisor decorativo */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ backgroundColor: "#2A2A2A" }} />
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: "#7B2EFF" }} />
            <div className="h-px w-16" style={{ backgroundColor: "#2A2A2A" }} />
          </div>
        </motion.div>

        {/* ── Grade de categorias ─────────────────────────────────── */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 lg:gap-10"
          variants={variantesContainer}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categorias.map((cat) => {
            const Icone = cat.Icone;
            return (
              <motion.button
                key={cat.id}
                data-testid={`category-${cat.id}`}
                className="flex flex-col items-center gap-3 group"
                variants={variantesItem}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                aria-label={cat.nome}
              >
                {/* Círculo com ícone */}
                <div
                  className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center transition-all duration-300 border-2"
                  style={{ backgroundColor: "#111111", borderColor: "#2A2A2A" }}
                >
                  {/* Brilho roxo que aparece no hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
                      boxShadow: "0 0 30px rgba(168,85,247,0.5), inset 0 0 20px rgba(123,46,255,0.1)",
                    }}
                  />
                  <Icone
                    size={28}
                    className="relative z-10 transition-colors duration-300"
                    style={{ color: "#A855F7" }}
                  />
                </div>

                {/* Nome da categoria */}
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-200">
                  {cat.nome}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

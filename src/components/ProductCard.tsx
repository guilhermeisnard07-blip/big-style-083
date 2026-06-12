/**
 * Componente reutilizável de cartão de produto — BIG STYLE 083
 *
 * Exibe a foto, nome, preço, parcelas e o botão de adicionar.
 * Usado na seção "Novidades" (carrossel horizontal).
 *
 * Props:
 *  - produto: dados do produto (nome, imagem, preço, badge)
 *  - indice:  posição na lista (controla o atraso da animação de entrada)
 */

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { formatarPreco } from "@/utils/formatPrice";

/** URL de fallback caso a imagem do produto falhe ao carregar */
const IMAGEM_FALLBACK =
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&q=80";

interface ProductCardProps {
  produto: Product;
  indice: number;
}

export default function ProductCard({ produto, indice }: ProductCardProps) {
  return (
    <motion.div
      data-testid={`product-card-${produto.id}`}
      className="relative flex-shrink-0 w-56 sm:w-64 rounded-2xl overflow-hidden border cursor-pointer group"
      style={{ backgroundColor: "#111111", borderColor: "#2A2A2A" }}
      // Animação de entrada: sobe e aparece com pequeno atraso por ordem
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: indice * 0.07 }}
      // Hover: sobe e acende brilho neon roxo
      whileHover={{
        y: -8,
        boxShadow: "0 0 30px rgba(168,85,247,0.45), 0 0 60px rgba(123,46,255,0.15)",
        borderColor: "rgba(168,85,247,0.4)",
      }}
    >
      {/* Badge "NOVO" (ou qualquer outra tag) */}
      {produto.badge && (
        <div
          className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white"
          style={{ backgroundColor: "#7B2EFF" }}
        >
          {produto.badge}
        </div>
      )}

      {/* Foto do produto */}
      <div
        className="relative overflow-hidden"
        style={{ height: "220px", backgroundColor: "#0d0d0d" }}
      >
        <motion.img
          src={produto.image}
          alt={produto.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          onError={(e) => {
            // Se a imagem falhar, exibe o placeholder
            (e.target as HTMLImageElement).src = IMAGEM_FALLBACK;
          }}
        />
        {/* Gradiente que suaviza a transição da foto para o corpo do card */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Corpo do card: nome, preço e botão */}
      <div className="p-4">
        <p className="text-white font-semibold text-sm mb-1 leading-tight">{produto.name}</p>

        <div className="flex items-end justify-between mt-2">
          {/* Preço e parcelamento */}
          <div>
            <p
              className="text-xl font-bold"
              style={{ fontFamily: "'Bebas Neue', cursive", color: "#ffffff", letterSpacing: "0.05em" }}
            >
              {formatarPreco(produto.price)}
            </p>
            <p className="text-gray-500 text-xs">{produto.installments}</p>
          </div>

          {/* Botão adicionar ao carrinho */}
          <motion.button
            data-testid={`add-to-cart-${produto.id}`}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
            style={{ backgroundColor: "#7B2EFF" }}
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 16px rgba(168,85,247,0.7)",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Adicionar ${produto.name} ao carrinho`}
          >
            <Plus size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Barra de Benefícios (FeaturesBar) — BIG STYLE 083
 *
 * Exibida logo abaixo do Hero. Mostra os 4 diferenciais da loja
 * em formato de grade: 2 colunas no mobile, 4 no desktop.
 *
 * Para editar os textos dos benefícios, altere o array `beneficios` abaixo.
 */

import { motion } from "framer-motion";
import { Truck, ShieldCheck, CreditCard, RefreshCw } from "lucide-react";

/** Cada item da barra de benefícios */
const beneficios = [
  {
    id: "envio",
    icone: Truck,
    titulo: "Envio Rapido",
    subtitulo: "Para Santa Luzia - PB",
  },
  {
    id: "segura",
    icone: ShieldCheck,
    titulo: "Compra Segura",
    subtitulo: "Ambiente 100% seguro",
  },
  {
    id: "parcelamento",
    icone: CreditCard,
    titulo: "Parcelamento 6x",
    subtitulo: "Em ate 6x sem juros",
  },
  {
    id: "troca",
    icone: RefreshCw,
    titulo: "Troca Facil",
    subtitulo: "Trocas e devolucoes",
  },
];

export default function FeaturesBar() {
  return (
    <section
      data-testid="features-bar"
      className="py-8 border-t border-b"
      style={{ backgroundColor: "#111111", borderColor: "#2A2A2A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {beneficios.map((item, i) => {
            const Icone = item.icone;
            return (
              <motion.div
                key={item.id}
                data-testid={`feature-${item.id}`}
                className="flex items-center gap-3 p-4 rounded-lg cursor-default border"
                style={{ borderColor: "transparent", backgroundColor: "transparent" }}
                // Entrada animada com leve atraso entre os itens
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                // Hover: leve fundo roxo e borda iluminada
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(123,46,255,0.08)",
                  borderColor: "rgba(168,85,247,0.3)",
                  boxShadow: "0 0 20px rgba(168,85,247,0.2)",
                }}
              >
                {/* Ícone em círculo roxo translúcido */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(123,46,255,0.15)" }}
                >
                  <Icone size={18} style={{ color: "#A855F7" }} />
                </div>

                {/* Texto */}
                <div>
                  <p className="text-white font-semibold text-sm">{item.titulo}</p>
                  <p className="text-gray-500 text-xs">{item.subtitulo}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

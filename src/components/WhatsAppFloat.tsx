/**
 * Botão Flutuante do WhatsApp (WhatsAppFloat) — BIG STYLE 083
 *
 * Sempre visível no canto inferior direito da tela (fixed, z-50).
 * Pulsa suavemente para chamar atenção.
 *
 * Para editar o número do WhatsApp, veja src/config/site.ts.
 * Para desativar este botão, remova <WhatsAppFloat /> de src/pages/home.tsx.
 */

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { REDES_SOCIAIS } from "@/config/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={REDES_SOCIAIS.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl"
      style={{ backgroundColor: "#7B2EFF" }}
      // Animação de pulso contínuo — chama atenção sem ser intrusivo
      animate={{
        scale: [1, 1.08, 1],
        boxShadow: [
          "0 0 20px rgba(168,85,247,0.5)",
          "0 0 40px rgba(168,85,247,0.9)",
          "0 0 20px rgba(168,85,247,0.5)",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </motion.a>
  );
}

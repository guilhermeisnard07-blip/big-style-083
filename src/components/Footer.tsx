/**
 * Rodapé (Footer) — BIG STYLE 083
 *
 * Contém:
 *  - Coluna da marca: logo, descrição e ícones das redes sociais
 *  - Colunas de links: Institucional, Categorias, Atendimento
 *  - Coluna de contato: telefone, e-mail, endereço, botão WhatsApp
 *  - Barra inferior: copyright e créditos
 *
 * Para editar links sociais e contato, veja src/config/site.ts.
 * Para editar os grupos de links, altere `gruposDeLinks` abaixo.
 */

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import { MARCA, REDES_SOCIAIS } from "@/config/site";

/** Links agrupados por coluna */
const gruposDeLinks: Record<string, string[]> = {
  Institucional: ["Sobre Nos", "Nossa Historia", "Blog", "Trabalhe Conosco"],
  Categorias:    ["Camisetas", "Bermudas", "Calcas", "Bones", "Jaquetas", "Outlet"],
  Atendimento:   ["Politica de Troca", "Frete e Entrega", "Pagamentos", "FAQ"],
};

/** Ícones e links das redes sociais */
const redesSociais = [
  { Icone: FaInstagram, href: REDES_SOCIAIS.instagram.url, rotulo: "Instagram" },
  { Icone: FaWhatsapp,  href: REDES_SOCIAIS.whatsapp.url,  rotulo: "WhatsApp"  },
  { Icone: FaFacebook,  href: REDES_SOCIAIS.facebook.url,  rotulo: "Facebook"  },
  { Icone: FaTwitter,   href: REDES_SOCIAIS.twitter.url,   rotulo: "Twitter"   },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      data-testid="footer"
      className="border-t"
      style={{ backgroundColor: "#050505", borderColor: "#2A2A2A" }}
    >
      {/* ── Grade principal do rodapé ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Coluna da marca (ocupa 2 colunas no lg) ─────────── */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-baseline gap-1 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="font-bold text-2xl text-white tracking-widest"
                style={{ fontFamily: "'Bebas Neue', cursive" }}>
                BIG STYLE
              </span>
              <span className="font-bold text-2xl tracking-widest"
                style={{ fontFamily: "'Bebas Neue', cursive", color: "#A855F7" }}>
                083
              </span>
            </motion.div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {MARCA.descricao}
            </p>

            {/* Ícones de redes sociais */}
            <div className="flex gap-3">
              {redesSociais.map(({ Icone, href, rotulo }) => (
                <motion.a
                  key={rotulo}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${rotulo.toLowerCase()}`}
                  aria-label={rotulo}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white border transition-all duration-200"
                  style={{ borderColor: "#2A2A2A" }}
                  whileHover={{
                    borderColor: "#7B2EFF",
                    color: "#A855F7",
                    backgroundColor: "rgba(123,46,255,0.1)",
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icone size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Colunas de links (Institucional, Categorias, Atendimento) */}
          {Object.entries(gruposDeLinks).map(([titulo, links]) => (
            <div key={titulo}>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: "#A855F7" }}>
                {titulo}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Coluna de contato ───────────────────────────────── */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: "#A855F7" }}>
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#7B2EFF" }} />
                <div>
                  <p className="text-gray-300 text-sm">{MARCA.telefone}</p>
                  <p className="text-gray-500 text-xs">{MARCA.horarioAtendimento}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#7B2EFF" }} />
                <p className="text-gray-300 text-sm">{MARCA.email}</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#7B2EFF" }} />
                <div>
                  <p className="text-gray-300 text-sm">{MARCA.cidade}</p>
                  <p className="text-gray-500 text-xs">Brasil, 083</p>
                </div>
              </li>
            </ul>

            {/* Botão WhatsApp */}
            <motion.a
              href={REDES_SOCIAIS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold uppercase tracking-wider"
              style={{ backgroundColor: "#7B2EFF" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              <FaWhatsapp />
              Chamar no Zap
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── Barra inferior ──────────────────────────────────────── */}
      <div className="border-t" style={{ borderColor: "#2A2A2A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>© 2024 Big Style 083 — Todos os direitos reservados.</p>
            <p>
              Desenvolvido com{" "}
              <span style={{ color: "#A855F7" }}>♥</span>{" "}
              para o street.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Cabeçalho fixo (Header) — BIG STYLE 083
 *
 * Comportamento:
 *  - Sempre fixo no topo da página (position: fixed, z-index: 40)
 *  - Transparente quando no topo; sólido com blur ao rolar > 40px
 *  - Menu hamburger no mobile (< 1024px), menu horizontal no desktop
 *
 * Para editar os links de navegação, edite NAV_LINKS em src/config/site.ts.
 * Para editar o número do WhatsApp, edite REDES_SOCIAIS em src/config/site.ts.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, REDES_SOCIAIS } from "@/config/site";

export default function Header() {
  // Controla se o usuário rolou a página (ativa o fundo sólido)
  const [scrolled, setScrolled] = useState(false);
  // Controla se o menu mobile está aberto
  const [mobileOpen, setMobileOpen] = useState(false);
  // Contador de itens no carrinho (futuro: integrar com estado global)
  const [cartCount] = useState(0);

  // Escuta o scroll da página e atualiza o estado
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      data-testid="header"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        // Fundo: transparente no topo, escuro com blur ao rolar
        backgroundColor: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,42,42,0.8)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ──────────────────────────────────────────────── */}
          <motion.a
            href="#inicio"
            data-testid="logo"
            className="flex items-center gap-1 select-none"
            whileHover={{ scale: 1.03 }}
          >
            <span
              className="font-bebas text-2xl lg:text-3xl text-white tracking-widest"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              BIG STYLE
            </span>
            <span
              className="font-bebas text-2xl lg:text-3xl tracking-widest"
              style={{ color: "#A855F7", fontFamily: "'Bebas Neue', cursive" }}
            >
              083
            </span>
          </motion.a>

          {/* ── Navegação desktop (≥ 1024px) ──────────────────────── */}
          <nav className="hidden lg:flex items-center gap-6" data-testid="desktop-nav">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest transition-colors duration-200"
                whileHover={{ color: "#A855F7" }}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* ── Ações: busca, carrinho, WhatsApp, menu mobile ─────── */}
          <div className="flex items-center gap-3">
            <motion.button
              data-testid="search-button"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Buscar"
            >
              <Search size={20} />
            </motion.button>

            <motion.button
              data-testid="cart-button"
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Carrinho"
            >
              <ShoppingCart size={20} />
              {/* Badge de contagem — só aparece quando cartCount > 0 */}
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#7B2EFF" }}
                >
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Botão "Fale Conosco" — redireciona para o WhatsApp */}
            <motion.a
              href={REDES_SOCIAIS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-nav-button"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              style={{ backgroundColor: "#7B2EFF" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
              whileTap={{ scale: 0.97 }}
            >
              <FaWhatsapp />
              <span className="hidden md:block">Fale Conosco</span>
            </motion.a>

            {/* Ícone hambúrguer — só aparece no mobile */}
            <motion.button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Menu mobile (dropdown animado) ────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            className="lg:hidden border-t"
            style={{ backgroundColor: "#111111", borderColor: "#2A2A2A" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)} // Fecha o menu ao clicar
                  data-testid={`mobile-nav-link-${i}`}
                  className="py-3 text-gray-300 hover:text-white uppercase tracking-widest text-sm font-medium border-b transition-colors"
                  style={{ borderColor: "#2A2A2A" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href={REDES_SOCIAIS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold uppercase tracking-wider"
                style={{ backgroundColor: "#7B2EFF" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <FaWhatsapp />
                Falar no WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

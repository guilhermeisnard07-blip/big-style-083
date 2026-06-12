/**
 * Página inicial (Home) — BIG STYLE 083
 *
 * Esta página monta todas as seções do site em ordem.
 * Para reordenar, ocultar ou adicionar uma seção, edite aqui.
 *
 * Ordem das seções:
 *  1.  Header        — Navegação fixa no topo
 *  2.  Hero          — Apresentação principal com mascote
 *  3.  FeaturesBar   — Barra de benefícios (frete, segurança, parcelas, troca)
 *  4.  Categories    — Grade de categorias de produtos
 *  5.  NewArrivals   — Carrossel de novidades
 *  6.  BestSellers   — Grade dos mais vendidos
 *  7.  BrandStory    — História e identidade da marca
 *  8.  InstagramFeed — Feed do @bigstyle.083
 *  9.  Testimonials  — Depoimentos de clientes
 *  10. PromoBanner   — Banner de frete grátis
 *  11. Footer        — Rodapé com links e contato
 *  12. WhatsAppFloat — Botão flutuante do WhatsApp
 */

import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturesBar from "../components/FeaturesBar";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import BrandStory from "../components/BrandStory";
import InstagramFeed from "../components/InstagramFeed";
import Testimonials from "../components/Testimonials";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#050505" }}>
      {/* Navegação fixa — sempre visível, transparente e depois sólida ao rolar */}
      <Header />

      <main>
        <Hero />
        <FeaturesBar />
        <Categories />
        <NewArrivals />
        <BestSellers />
        <BrandStory />
        <InstagramFeed />
        <Testimonials />
        <PromoBanner />
      </main>

      {/* Rodapé com links, contato e redes sociais */}
      <Footer />

      {/* Botão flutuante do WhatsApp — sempre visível no canto inferior direito */}
      <WhatsAppFloat />
    </div>
  );
}

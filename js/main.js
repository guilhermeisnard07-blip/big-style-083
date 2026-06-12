/**
 * ============================================================
 *  MAIN — BIG STYLE 083
 * ============================================================
 *  Ponto de entrada principal do JavaScript.
 *  Inicializa todas as funcionalidades do site:
 *
 *  → Header: efeito de scroll (transparente → sólido com blur)
 *  → Menu Mobile: abre/fecha ao clicar no hambúrguer
 *  → Carrossel: botões de navegação esquerda/direita
 *  → Animações: IntersectionObserver para efeitos de entrada
 *  → Parallax: mascote do Hero se move ao rolar
 *
 *  Este arquivo depende (deve ser carregado após):
 *    → whatsapp.js  (variáveis WHATSAPP_URL, INSTAGRAM_URL)
 *    → products.js  (funções de renderização)
 *    → animations.js (funções de animação)
 * ============================================================
 */

/* Aguarda o DOM estar completamente carregado */
document.addEventListener("DOMContentLoaded", function() {

  /* ── 1. RENDERIZAR CONTEÚDO DINÂMICO ──────────────────── */
  /*
   * Os produtos, depoimentos e feed do Instagram são
   * gerados via JavaScript (definidos em products.js).
   * Isso facilita editar os dados sem tocar no HTML.
   */
  renderizarCarrossel();
  renderizarMaisVendidos();
  renderizarInstagram();
  renderizarDepoimentos();


  /* ── 2. INICIALIZAR ANIMAÇÕES DE ENTRADA ──────────────── */
  /*
   * Observa os elementos com classes .anim-* e adiciona
   * .visivel quando eles aparecem na tela.
   */
  iniciarAnimacoesDeEntrada();


  /* ── 3. HEADER: EFEITO DE SCROLL ─────────────────────── */
  /*
   * O header começa transparente e, ao rolar mais de 40px,
   * ganha fundo escuro com efeito de desfoque (blur).
   */
  var header = document.getElementById("header");

  function atualizarHeader() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("header--rolado");
    } else {
      header.classList.remove("header--rolado");
    }
  }

  /* Chama uma vez para o estado inicial */
  atualizarHeader();


  /* ── 4. MENU MOBILE ───────────────────────────────────── */
  /*
   * O botão hambúrguer abre/fecha o menu mobile.
   * Ao clicar em qualquer link do menu, ele fecha automaticamente.
   */
  var btnMenu    = document.getElementById("btn-menu-mobile");
  var menuMobile = document.getElementById("menu-mobile");
  var iconMenu   = document.getElementById("icone-menu");
  var iconFechar = document.getElementById("icone-fechar");
  var menuAberto = false;

  function abrirMenu() {
    menuAberto = true;
    menuMobile.classList.add("menu-mobile--aberto");
    iconMenu.style.display   = "none";
    iconFechar.style.display = "block";
    btnMenu.setAttribute("aria-label", "Fechar menu");
  }

  function fecharMenu() {
    menuAberto = false;
    menuMobile.classList.remove("menu-mobile--aberto");
    iconMenu.style.display   = "block";
    iconFechar.style.display = "none";
    btnMenu.setAttribute("aria-label", "Abrir menu");
  }

  if (btnMenu) {
    btnMenu.addEventListener("click", function() {
      if (menuAberto) { fecharMenu(); } else { abrirMenu(); }
    });
  }

  /* Fechar o menu ao clicar em qualquer link */
  var linksMenu = document.querySelectorAll(".menu-mobile__link");
  linksMenu.forEach(function(link) {
    link.addEventListener("click", fecharMenu);
  });


  /* ── 5. CARROSSEL DE NOVIDADES ───────────────────────── */
  /*
   * Os botões ◀ e ▶ rolam o carrossel 280px por clique.
   */
  var carrossel   = document.getElementById("carrossel-produtos");
  var btnAnterior = document.getElementById("btn-carrossel-anterior");
  var btnProximo  = document.getElementById("btn-carrossel-proximo");

  if (btnAnterior && carrossel) {
    btnAnterior.addEventListener("click", function() {
      carrossel.scrollBy({ left: -280, behavior: "smooth" });
    });
  }

  if (btnProximo && carrossel) {
    btnProximo.addEventListener("click", function() {
      carrossel.scrollBy({ left: 280, behavior: "smooth" });
    });
  }


  /* ── 6. PREENCHER LINKS DO WHATSAPP ─────────────────── */
  /*
   * Todos os elementos com data-whatsapp="true" recebem
   * o link do WhatsApp automaticamente (de whatsapp.js).
   */
  var botoesWhatsApp = document.querySelectorAll("[data-whatsapp]");
  botoesWhatsApp.forEach(function(btn) {
    btn.setAttribute("href", linkWhatsApp());
  });

  /* Botões do Instagram */
  var botoesInstagram = document.querySelectorAll("[data-instagram]");
  botoesInstagram.forEach(function(btn) {
    btn.setAttribute("href", INSTAGRAM_URL);
  });


  /* ── 7. SCROLL: PARALLAX + HEADER ────────────────────── */
  /*
   * Um único listener de scroll cuida de tudo que depende
   * da posição de rolagem da página.
   */
  window.addEventListener("scroll", function() {
    atualizarHeader();
    aplicarParallaxHero();
  }, { passive: true });

});

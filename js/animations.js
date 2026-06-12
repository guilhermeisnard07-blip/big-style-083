/**
 * ============================================================
 *  ANIMAÇÕES — BIG STYLE 083
 * ============================================================
 *  Utilitários de animação que usam apenas CSS e JavaScript
 *  puro, sem nenhuma dependência externa.
 *
 *  COMO FUNCIONA:
 *  1. Elementos com classe .anim-* começam invisíveis (via CSS)
 *  2. O IntersectionObserver monitora quando eles aparecem na tela
 *  3. Quando entram na janela, recebem a classe .visivel
 *  4. O CSS aplica a transição suavemente
 *
 *  COMO ADICIONAR ANIMAÇÃO A UM ELEMENTO NO HTML:
 *  Adicione uma dessas classes ao elemento:
 *    .anim-subir    → aparece subindo (padrão)
 *    .anim-esquerda → aparece vindo da esquerda
 *    .anim-direita  → aparece vindo da direita
 *    .anim-escalar  → aparece crescendo
 *  Opcionalmente, adicione .atraso-1 a .atraso-9 para escalonar.
 * ============================================================
 */


/* ── INTERSECTION OBSERVER (animações ao rolar) ──────────── */

/**
 * Inicializa o observador de visibilidade.
 * Chamado em main.js após o DOM estar pronto.
 */
function iniciarAnimacoesDeEntrada() {
  /* Seleciona todos os elementos animáveis */
  var elementos = document.querySelectorAll(
    ".anim-subir, .anim-esquerda, .anim-direita, .anim-escalar"
  );

  /* Opções: dispara quando 10% do elemento fica visível */
  var opcoes = {
    threshold: 0.1,
    rootMargin: "-60px 0px"
  };

  var observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        /* Para de observar após animar (animação única) */
        observador.unobserve(entrada.target);
      }
    });
  }, opcoes);

  /* Começa a observar cada elemento */
  elementos.forEach(function(el) {
    observador.observe(el);
  });
}


/* ── PARALLAX DO HERO ─────────────────────────────────────── */

/**
 * Aplica efeito de parallax ao mascote e ao texto do Hero.
 * O mascote se move mais devagar que a página ao rolar.
 * Chamado em main.js no evento de scroll.
 */
function aplicarParallaxHero() {
  var secaoHero    = document.getElementById("inicio");
  var mascoteWrap  = document.querySelector(".hero__mascote-wrapper");
  var textoHero    = document.querySelector(".hero__texto");
  var ghost083     = document.querySelector(".hero__ghost-083");

  if (!secaoHero || !mascoteWrap) return;

  var scrollY     = window.scrollY;
  var alturaHero  = secaoHero.offsetHeight;
  var progresso   = Math.min(scrollY / alturaHero, 1);

  /* Mascote sobe 80px mais devagar que a página */
  mascoteWrap.style.transform = "translateY(" + (progresso * 80) + "px)";

  /* Texto sobe 40px */
  if (textoHero) {
    textoHero.style.transform = "translateY(" + (progresso * 40) + "px)";
  }

  /* Número "083" fantasma some ao rolar */
  if (ghost083) {
    ghost083.style.opacity = Math.max(0, 1 - progresso * 1.25);
  }
}

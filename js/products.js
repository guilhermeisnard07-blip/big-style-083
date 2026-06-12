/**
 * ============================================================
 *  PRODUTOS — BIG STYLE 083
 * ============================================================
 *  Este arquivo contém:
 *  → Dados de todos os produtos do catálogo
 *  → Dados das categorias
 *  → Dados dos depoimentos
 *  → Funções para renderizar os produtos na página
 *
 *  COMO ADICIONAR UM PRODUTO:
 *  1. Coloque a foto em assets/images/ (ex: foto10.jpg)
 *  2. Copie um bloco do array `produtos` abaixo e edite
 *  3. Para aparecer em "Mais Vendidos": destaque: true
 *
 *  COMO EDITAR UM PRODUTO EXISTENTE:
 *  Encontre o produto pelo nome e altere os campos desejados.
 *
 *  COMO TROCAR PREÇO:
 *  Altere o campo `preco` (número) e `parcelas` (texto).
 * ============================================================
 */


/* ── DADOS DOS PRODUTOS ───────────────────────────────────── */
/*
 * Campos obrigatórios: id, nome, preco, parcelas, imagem, categoria
 * Campos opcionais:    badge ("NOVO", "SALE", etc.), destaque (true/false)
 */
var produtos = [
  {
    id: 1,
    nome: "Camiseta Big Monkey Preta",
    preco: 89.90,
    parcelas: "6x de R$ 14,98",
    imagem: "assets/images/foto1.jpg",
    badge: "NOVO",
    categoria: "Camisetas",
    destaque: true
  },
  {
    id: 2,
    nome: "Camiseta Tag Graffiti Preta",
    preco: 89.90,
    parcelas: "6x de R$ 14,98",
    imagem: "assets/images/foto2.jpg",
    badge: "NOVO",
    categoria: "Camisetas",
    destaque: false
  },
  {
    id: 3,
    nome: "Camiseta Wildstyle Preta",
    preco: 89.90,
    parcelas: "6x de R$ 14,98",
    imagem: "assets/images/foto3.jpg",
    badge: "NOVO",
    categoria: "Camisetas",
    destaque: true
  },
  {
    id: 4,
    nome: "Camiseta Anjo Preta",
    preco: 99.90,
    parcelas: "6x de R$ 16,65",
    imagem: "assets/images/foto4.jpg",
    badge: "NOVO",
    categoria: "Camisetas",
    destaque: true
  },
  {
    id: 5,
    nome: "Camiseta Off White Graffiti",
    preco: 89.90,
    parcelas: "6x de R$ 14,98",
    imagem: "assets/images/foto5.jpg",
    badge: "NOVO",
    categoria: "Camisetas",
    destaque: false
  },
  {
    id: 6,
    nome: "Calca Jeans Wide Cinza",
    preco: 149.90,
    parcelas: "6x de R$ 24,98",
    imagem: "assets/images/foto6.jpg",
    badge: "NOVO",
    categoria: "Calcas",
    destaque: true
  },
  {
    id: 7,
    nome: "Look Gorila + Calca Wide",
    preco: 229.90,
    parcelas: "6x de R$ 38,32",
    imagem: "assets/images/foto7.jpg",
    badge: "NOVO",
    categoria: "Calcas",
    destaque: false
  },
  {
    id: 8,
    nome: "Look Street Duplo",
    preco: 199.90,
    parcelas: "6x de R$ 33,32",
    imagem: "assets/images/foto8.jpg",
    badge: "NOVO",
    categoria: "Calcas",
    destaque: false
  },
  {
    id: 9,
    nome: "Bermuda Cargo Stone",
    preco: 129.90,
    parcelas: "6x de R$ 21,65",
    imagem: "assets/images/foto9.jpg",
    badge: "NOVO",
    categoria: "Bermudas",
    destaque: false
  }
];


/* ── DADOS DAS FOTOS (Instagram / Feed) ─────────────────── */
/*
 * As mesmas 9 fotos usadas nos produtos aparecem no feed do Instagram.
 * Para trocar uma foto: altere o campo `src` com o caminho da nova imagem.
 */
var fotosLoja = [
  { id: 1, src: "assets/images/foto1.jpg", descricao: "Camiseta Big Style 083 - estilo urbano" },
  { id: 2, src: "assets/images/foto2.jpg", descricao: "Look Big Style 083 - camiseta graffiti" },
  { id: 3, src: "assets/images/foto3.jpg", descricao: "Big Style 083 - camiseta streetwear" },
  { id: 4, src: "assets/images/foto4.jpg", descricao: "Big Style 083 - look completo anjo" },
  { id: 5, src: "assets/images/foto5.jpg", descricao: "Big Style 083 - camiseta off white" },
  { id: 6, src: "assets/images/foto6.jpg", descricao: "Big Style 083 - calca wide leg" },
  { id: 7, src: "assets/images/foto7.jpg", descricao: "Big Style 083 - calca e camiseta gorila" },
  { id: 8, src: "assets/images/foto8.jpg", descricao: "Big Style 083 - looks masculinos streetwear" },
  { id: 9, src: "assets/images/foto9.jpg", descricao: "Big Style 083 - bermuda cargo stone" }
];


/* ── DEPOIMENTOS DE CLIENTES ─────────────────────────────── */
/*
 * Para adicionar um depoimento: copie um bloco e edite.
 * Para remover: delete o bloco do produto indesejado.
 */
var depoimentos = [
  {
    id: 1,
    nome: "Lucas M.",
    avatar: "L",
    avaliacao: 5,
    texto: "Produto incrivel! Chegou rapido e a qualidade e top demais. Ja comprei 3 camisetas e vou voltar com certeza!",
    cidade: "Santa Luzia - PB"
  },
  {
    id: 2,
    nome: "Amanda S.",
    avatar: "A",
    avaliacao: 5,
    texto: "Melhor loja street de Santa Luzia! Atendimento excelente, entrega rapida e produto de qualidade. Recomendo demais!",
    cidade: "Santa Luzia - PB"
  },
  {
    id: 3,
    nome: "Rafael C.",
    avatar: "R",
    avaliacao: 5,
    texto: "A camiseta Big Monkey e demais! Recebi varios elogios. Big Style representa demais o nosso street!",
    cidade: "Santa Luzia - PB"
  }
];


/* ── UTILITÁRIOS ─────────────────────────────────────────── */

/**
 * Formata um número para o padrão monetário brasileiro.
 * @param {number} valor - Preço em número (ex: 89.90)
 * @returns {string} Preço formatado (ex: "R$ 89,90")
 */
function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

/** URL de fallback caso uma imagem não carregue */
var IMAGEM_FALLBACK = "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&q=80";


/* ── RENDERIZAÇÃO: CARROSSEL DE NOVIDADES ─────────────────── */

/**
 * Cria o HTML de um card de produto para o carrossel.
 * @param {Object} produto - Objeto do array `produtos`
 * @param {number} indice  - Posição na lista (para atraso da animação)
 * @returns {string} HTML do card
 */
function criarCardProduto(produto, indice) {
  var badge = produto.badge
    ? '<div class="product-card__badge">' + produto.badge + '</div>'
    : "";

  var atrasoClasse = indice < 9 ? " atraso-" + (indice + 1) : "";

  return (
    '<div class="product-card anim-subir' + atrasoClasse + '" data-id="' + produto.id + '">' +
      badge +
      '<div class="product-card__imagem-wrapper">' +
        '<img class="product-card__imagem" src="' + produto.imagem + '" alt="' + produto.nome + '" ' +
          'onerror="this.src=\'' + IMAGEM_FALLBACK + '\'">' +
        '<div class="product-card__imagem-overlay"></div>' +
      '</div>' +
      '<div class="product-card__corpo">' +
        '<p class="product-card__nome">' + produto.nome + '</p>' +
        '<div class="product-card__rodape">' +
          '<div>' +
            '<p class="product-card__preco">' + formatarPreco(produto.preco) + '</p>' +
            '<p class="product-card__parcelas">' + produto.parcelas + '</p>' +
          '</div>' +
          '<button class="product-card__btn-add" ' +
            'onclick="abrirWhatsAppProduto(\'' + produto.nome + '\', \'' + formatarPreco(produto.preco) + '\')" ' +
            'aria-label="Adicionar ' + produto.nome + '">' +
            /* Ícone de + */
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

/**
 * Renderiza todos os produtos no carrossel de Novidades.
 * Chamado em main.js após o DOM estar pronto.
 */
function renderizarCarrossel() {
  var container = document.getElementById("carrossel-produtos");
  if (!container) return;

  var html = "";
  produtos.forEach(function(produto, i) {
    html += criarCardProduto(produto, i);
  });
  container.innerHTML = html;
}


/* ── RENDERIZAÇÃO: MAIS VENDIDOS ─────────────────────────── */

/**
 * Cria o HTML de um card para a seção "Mais Vendidos".
 * @param {Object} produto - Objeto do array `produtos`
 * @param {number} indice  - Posição para atraso de animação
 * @returns {string} HTML do card
 */
function criarCardDestaque(produto, indice) {
  var atrasoClasse = " atraso-" + (indice + 1);

  return (
    '<div class="destaque-card anim-subir' + atrasoClasse + '">' +
      '<div class="destaque-card__ribbon">Top Vendas</div>' +
      '<div class="destaque-card__imagem-wrapper">' +
        '<img class="destaque-card__imagem" src="' + produto.imagem + '" alt="' + produto.nome + '" ' +
          'onerror="this.src=\'' + IMAGEM_FALLBACK + '\'">' +
      '</div>' +
      '<div class="destaque-card__corpo">' +
        '<p class="destaque-card__nome">' + produto.nome + '</p>' +
        '<div class="destaque-card__rodape">' +
          '<div>' +
            '<p class="destaque-card__preco">' + formatarPreco(produto.preco) + '</p>' +
            '<p class="destaque-card__parcelas">' + produto.parcelas + '</p>' +
          '</div>' +
          '<button class="destaque-card__btn-add" ' +
            'onclick="abrirWhatsAppProduto(\'' + produto.nome + '\', \'' + formatarPreco(produto.preco) + '\')" ' +
            'aria-label="Adicionar ' + produto.nome + '">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

/**
 * Renderiza os 4 primeiros produtos marcados como destaque.
 * Chamado em main.js após o DOM estar pronto.
 */
function renderizarMaisVendidos() {
  var container = document.getElementById("grid-mais-vendidos");
  if (!container) return;

  var destaques = produtos.filter(function(p) { return p.destaque; }).slice(0, 4);
  var html = "";
  destaques.forEach(function(produto, i) {
    html += criarCardDestaque(produto, i);
  });
  container.innerHTML = html;
}


/* ── RENDERIZAÇÃO: FEED DO INSTAGRAM ─────────────────────── */

/**
 * Renderiza a grade 3×3 de fotos do Instagram.
 * Chamado em main.js após o DOM estar pronto.
 */
function renderizarInstagram() {
  var container = document.getElementById("grade-instagram");
  if (!container) return;

  var html = "";
  fotosLoja.forEach(function(foto, i) {
    var atrasoClasse = " atraso-" + Math.min(i + 1, 9);
    html += (
      '<a href="' + INSTAGRAM_URL + '" target="_blank" rel="noopener noreferrer" ' +
        'class="instagram-item anim-escalar' + atrasoClasse + '">' +
        '<img src="' + foto.src + '" alt="' + foto.descricao + '">' +
        '<div class="instagram-item__overlay">' +
          '<svg class="instagram-item__icone" viewBox="0 0 24 24" fill="currentColor">' +
            '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>' +
          '</svg>' +
        '</div>' +
      '</a>'
    );
  });
  container.innerHTML = html;
}


/* ── RENDERIZAÇÃO: DEPOIMENTOS ───────────────────────────── */

/**
 * Cria as estrelas de avaliação em HTML.
 * @param {number} quantidade - Número de estrelas (1-5)
 * @returns {string} HTML das estrelas
 */
function criarEstrelas(quantidade) {
  var html = "";
  for (var i = 0; i < quantidade; i++) {
    html += '<svg class="estrela" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>';
  }
  return html;
}

/**
 * Renderiza os depoimentos de clientes.
 * Chamado em main.js após o DOM estar pronto.
 */
function renderizarDepoimentos() {
  var container = document.getElementById("grid-depoimentos");
  if (!container) return;

  var html = "";
  depoimentos.forEach(function(dep, i) {
    var atrasoClasse = " atraso-" + (i + 1);
    html += (
      '<div class="depoimento-card anim-subir' + atrasoClasse + '">' +
        /* Ícone de aspas */
        '<svg class="depoimento-card__aspas" viewBox="0 0 24 24" fill="none" stroke="#7B2EFF" stroke-width="1.5">' +
          '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>' +
          '<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>' +
        '</svg>' +
        '<div class="depoimento-card__estrelas">' + criarEstrelas(dep.avaliacao) + '</div>' +
        '<p class="depoimento-card__texto">"' + dep.texto + '"</p>' +
        '<div class="depoimento-card__autor">' +
          '<div class="depoimento-card__avatar">' + dep.avatar + '</div>' +
          '<div>' +
            '<p class="depoimento-card__nome">' + dep.nome + '</p>' +
            '<p class="depoimento-card__cidade">' + dep.cidade + '</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  });
  container.innerHTML = html;
}


/* ── AÇÃO DO BOTÃO "+" DOS PRODUTOS ─────────────────────── */

/**
 * Abre o WhatsApp com uma mensagem sobre o produto selecionado.
 * Chamado pelo onclick dos botões "+" nos cards.
 *
 * @param {string} nomeProduto - Nome do produto
 * @param {string} preco       - Preço formatado
 */
function abrirWhatsAppProduto(nomeProduto, preco) {
  var url = linkPedidoProduto(nomeProduto, preco);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * ============================================================
 *  WHATSAPP — BIG STYLE 083
 * ============================================================
 *  Centraliza as configurações do WhatsApp e funções para
 *  gerar links com mensagens pré-formatadas.
 *
 *  COMO TROCAR O NÚMERO DO WHATSAPP:
 *  1. Altere WHATSAPP_NUMERO abaixo (formato: 55 + DDD + número)
 *  2. Salve o arquivo — a mudança reflete em todo o site
 *
 *  COMO TROCAR O INSTAGRAM:
 *  Altere INSTAGRAM_URL e INSTAGRAM_USUARIO abaixo.
 * ============================================================
 */

/* ── CONFIGURAÇÃO CENTRAL DA MARCA ──────────────────────── */
/* ↓ EDITE AQUI para mudar o número do WhatsApp             */
var WHATSAPP_NUMERO = "5598999999999";
var WHATSAPP_URL    = "https://wa.me/" + WHATSAPP_NUMERO;

/* ↓ EDITE AQUI para mudar o Instagram */
var INSTAGRAM_USUARIO = "@bigstyle.083";
var INSTAGRAM_URL     = "https://www.instagram.com/bigstyle.083";

/* ↓ EDITE AQUI para mudar o Facebook e Twitter */
var FACEBOOK_URL = "#";
var TWITTER_URL  = "#";


/* ── FUNÇÕES DE LINK ─────────────────────────────────────── */

/**
 * Retorna o link base do WhatsApp (sem mensagem).
 * Usado nos botões "Fale Conosco" e no rodapé.
 */
function linkWhatsApp() {
  return WHATSAPP_URL;
}

/**
 * Retorna um link do WhatsApp com mensagem pré-preenchida.
 * O texto já aparece digitado quando o cliente abre o chat.
 *
 * @param {string} mensagem - Texto que aparece no chat
 * @returns {string} URL completa do WhatsApp
 *
 * Exemplo:
 *   linkWhatsAppComMensagem("Olá! Quero saber mais.")
 *   → "https://wa.me/5598999999999?text=Ol%C3%A1!%20Quero..."
 */
function linkWhatsAppComMensagem(mensagem) {
  return WHATSAPP_URL + "?text=" + encodeURIComponent(mensagem);
}

/**
 * Gera um link para perguntar sobre um produto específico.
 * Usado quando o cliente clica no botão "+" de um produto.
 *
 * @param {string} nomeProduto - Nome do produto (ex: "Camiseta Big Monkey Preta")
 * @param {string} preco       - Preço formatado (ex: "R$ 89,90")
 * @returns {string} URL do WhatsApp com mensagem sobre o produto
 */
function linkPedidoProduto(nomeProduto, preco) {
  var mensagem = "Olá! Tenho interesse no produto: *" + nomeProduto + "* — " + preco + ". Ainda está disponível?";
  return linkWhatsAppComMensagem(mensagem);
}

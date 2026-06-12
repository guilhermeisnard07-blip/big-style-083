/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  SERVIÇO DE WHATSAPP — BIG STYLE 083                             ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Centraliza a geração de links do WhatsApp com mensagens         ║
 * ║  pré-formatadas. Quando quiser mudar o número, edite apenas      ║
 * ║  src/config/site.ts — aqui não é necessário alterar nada.        ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import { REDES_SOCIAIS } from "@/config/site";

/**
 * Retorna o link base do WhatsApp (sem mensagem).
 * Usado nos botões "Fale Conosco" e "Falar no WhatsApp".
 */
export function linkWhatsApp(): string {
  return REDES_SOCIAIS.whatsapp.url;
}

/**
 * Retorna um link do WhatsApp com uma mensagem pré-preenchida.
 * O texto aparece automaticamente no chat quando o usuário abre o link.
 *
 * @example
 * linkWhatsAppComMensagem("Olá! Vi o site e quero saber mais.")
 * → "https://wa.me/5598999999999?text=Ol%C3%A1!%20Vi%20o%20site..."
 */
export function linkWhatsAppComMensagem(mensagem: string): string {
  return `${REDES_SOCIAIS.whatsapp.url}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Gera um link do WhatsApp para perguntar sobre um produto específico.
 * Usado quando o cliente clica no botão "+" de um produto.
 *
 * @example
 * linkPedidoProduto("Camiseta Big Monkey Preta", "R$ 89,90")
 */
export function linkPedidoProduto(nomeProduto: string, preco: string): string {
  const mensagem = `Olá! Tenho interesse no produto: *${nomeProduto}* — ${preco}. Ainda está disponível?`;
  return linkWhatsAppComMensagem(mensagem);
}

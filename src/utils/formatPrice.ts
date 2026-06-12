/**
 * Utilitários de formatação de preços e texto — BIG STYLE 083
 *
 * Centralizados aqui para que qualquer mudança na formatação
 * seja feita em um único lugar e reflita em todo o site.
 */

/**
 * Formata um número para o padrão monetário brasileiro.
 * @example formatarPreco(89.90) → "R$ 89,90"
 * @example formatarPreco(229.9) → "R$ 229,90"
 */
export function formatarPreco(valor: number): string {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

/**
 * Gera o texto de parcelamento padrão.
 * @example gerarParcelamento(89.90, 6) → "6x de R$ 14,98"
 */
export function gerarParcelamento(valor: number, parcelas: number): string {
  const valorParcela = valor / parcelas;
  return `${parcelas}x de ${formatarPreco(valorParcela)}`;
}

/**
 * Barra de Anúncios em Loop (AnnouncementBar) — BIG STYLE 083
 *
 * Faixa superior com texto que rola em loop infinito (animação marquee).
 * Atualmente NÃO está visível no site — não é renderizada em home.tsx.
 *
 * Para reativar: adicione <AnnouncementBar /> no início de <main>
 * dentro de src/pages/home.tsx.
 *
 * Para editar o texto do anúncio, altere a variável `mensagem` abaixo.
 */

/** Texto exibido em loop. Repete 4× para preencher qualquer largura de tela. */
const mensagem =
  "🎁 FRETE GRATIS PARA SANTA LUZIA - PB NAS COMPRAS ACIMA DE R$ 200,00   •   COMPRA SEGURA   •   PARCELAMENTO EM 6X SEM JUROS   •   TROCA FACIL EM ATE 7 DIAS   •   ";

export default function AnnouncementBar() {
  // Repete a mensagem 4× para garantir continuidade visual no loop
  const mensagemRepetida = mensagem.repeat(4);

  return (
    <div
      data-testid="announcement-bar"
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#4C1D95" }}
    >
      {/* Dois spans idênticos criam a ilusão de loop infinito via CSS */}
      <div className="flex whitespace-nowrap animate-marquee py-2">
        <span className="text-white text-xs font-medium tracking-widest uppercase">
          {mensagemRepetida}
        </span>
        {/* aria-hidden: o segundo span é só visual — leitores de tela ignoram */}
        <span
          className="text-white text-xs font-medium tracking-widest uppercase"
          aria-hidden="true"
        >
          {mensagemRepetida}
        </span>
      </div>
    </div>
  );
}

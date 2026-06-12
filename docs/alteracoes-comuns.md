# Alterações Comuns — BIG STYLE 083

> Receitas prontas para as edições mais frequentes.
> Copie, cole e adapte.

---

## Receita 1: Adicionar um Produto Novo

**Arquivo:** `js/products.js`

```js
// Encontre o array `produtos` e adicione um novo bloco no final:
var produtos = [
  // ... produtos existentes ...
  {
    id: 10,                               // próximo número disponível
    nome: "Moletom Big 083 Preto",        // nome do produto
    preco: 179.90,                        // preço em número
    parcelas: "6x de R$ 29,98",          // texto de parcelamento
    imagem: "assets/images/foto10.jpg",   // foto em assets/images/
    badge: "NOVO",                        // badge visível no card ("NOVO", "SALE", "" para nenhum)
    categoria: "Jaquetas",               // categoria
    destaque: true                        // true = aparece em "Mais Vendidos"
  }
];
```

**Resultado:** O produto aparece no carrossel "Novidades" e, se `destaque: true`, também em "Mais Vendidos".

---

## Receita 2: Mudar o Número do WhatsApp

**Arquivo:** `js/whatsapp.js`

```js
// Antes:
var WHATSAPP_NUMERO = "5598999999999";

// Depois (exemplo — número fictício):
var WHATSAPP_NUMERO = "5583987654321";
```

**Resultado:** Todos os botões do site apontam para o novo número.

---

## Receita 3: Adicionar uma Promoção de Desconto

**Arquivo 1:** `js/products.js` — adicione o badge "SALE" ao produto:

```js
badge: "SALE",
preco: 59.90,              // preço com desconto
parcelas: "3x de R$ 19,97",
```

**Arquivo 2:** `css/components.css` — para deixar o badge "SALE" vermelho:

Encontre:
```css
.product-card__badge {
  ...
  background-color: var(--cor-primaria);
}
```

Adicione uma variação de cor após:
```css
.product-card__badge--sale {
  background-color: #EF4444;  /* vermelho */
}
```

Depois, no JS, adicione a classe dinamicamente ao criar o badge.

---

## Receita 4: Alterar as Estatísticas da Seção "Nossa História"

**Arquivo:** `index.html`, seção `#sobre`

Encontre:
```html
<div class="brand-story__stats-grid anim-escalar">
  <div class="stat-card atraso-1">
    <p class="stat-card__valor bebas">+5.000</p>    ← altere o número
    <p class="stat-card__rotulo">Clientes Satisfeitos</p>  ← altere o texto
  </div>
  <div class="stat-card atraso-2">
    <p class="stat-card__valor bebas">2020</p>       ← altere
    <p class="stat-card__rotulo">Ano de Fundacao</p> ← altere
  </div>
  <!-- mais 2 cards -->
</div>
```

---

## Receita 5: Trocar o Título Principal do Hero

**Arquivo:** `index.html`, seção `#inicio`

```html
<!-- Antes: -->
<span class="hero__titulo-linha1">SEU ESTILO.</span>
<span class="hero__titulo-linha2">STREETWEAR.</span>

<!-- Depois (exemplo): -->
<span class="hero__titulo-linha1">NOVA</span>
<span class="hero__titulo-linha2">COLECAO 2025.</span>
```

`linha2` tem o gradiente roxo aplicado automaticamente.

---

## Receita 6: Adicionar uma Nova Categoria

**Arquivo:** `index.html`, seção `#categorias`

Copie um bloco existente e cole após o último:

```html
<button class="category-item anim-escalar atraso-8" aria-label="Bonés e Gorros">
  <div class="category-item__circulo">
    <div class="category-item__circulo-brilho"></div>
    <!-- Escolha um ícone SVG do lucide.dev e cole aqui -->
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <!-- path do ícone -->
    </svg>
  </div>
  <span class="category-item__nome">Gorros</span>
</button>
```

> Ícones SVG gratuitos: https://lucide.dev — copie o código SVG e cole dentro do `category-item__circulo`.

---

## Receita 7: Adicionar um Novo Depoimento

**Arquivo:** `js/products.js`

```js
var depoimentos = [
  // ... depoimentos existentes ...
  {
    id: 4,
    nome: "Joao P.",          // nome do cliente
    avatar: "J",              // inicial — aparece no círculo roxo
    avaliacao: 5,             // 1 a 5 estrelas
    texto: "Melhor loja da cidade! Chegou no prazo e a qualidade e impecavel.",
    cidade: "Santa Luzia - PB"
  }
];
```

---

## Receita 8: Mudar a Cor Roxa para Outra Cor

**Arquivo:** `css/style.css`, seção `:root`

```css
:root {
  /* Exemplo: mudar para azul elétrico */
  --cor-primaria:   #2563EB;   /* azul principal */
  --cor-destaque:   #3B82F6;   /* azul mais claro */
  --cor-primaria-escura: #1D4ED8; /* azul escuro */
}
```

---

## Receita 9: Trocar o Subtítulo do Hero

**Arquivo:** `index.html`

```html
<!-- Antes: -->
<p class="hero__subtitulo">Moda street para quem cria tendencia.</p>

<!-- Depois: -->
<p class="hero__subtitulo">Colecao exclusiva direto de Santa Luzia para o Brasil.</p>
```

---

## Receita 10: Editar o Texto do Banner de Frete Grátis

**Arquivo:** `index.html`, seção `.promo-banner`

```html
<!-- Antes: -->
<h2 class="promo-banner__titulo">FRETE GRATIS</h2>
<p class="promo-banner__cidade">Santa Luzia - PB nas compras acima de</p>
<p class="promo-banner__valor bebas">R$ 200,00</p>

<!-- Depois: -->
<h2 class="promo-banner__titulo">20% OFF</h2>
<p class="promo-banner__cidade">Em toda a colecao de camisetas</p>
<p class="promo-banner__valor bebas">USE: BIG083</p>
```

---

## Receita 11: Alterar Links dos Botões de Categoria

Os botões de categoria atualmente funcionam como scroll suave para a seção de produtos.
Para adicionar uma ação específica, edite o `onclick` no `index.html`:

```html
<!-- Exemplo: ao clicar em "Camisetas", rola para #novidades e filtra -->
<button class="category-item ..."
  onclick="document.getElementById('novidades').scrollIntoView({behavior:'smooth'})">
```

---

## Receita 12: Adicionar uma Seção Nova

1. **No HTML** (`index.html`): adicione o HTML da nova seção entre as seções existentes
2. **No CSS** (`css/components.css`): adicione os estilos com um comentário `/* ── NOME DA SEÇÃO ──── */`
3. **No CSS responsivo** (`css/responsive.css`): adicione os media queries necessários
4. **No menu** (`index.html`, `.nav-desktop` e `.menu-mobile__nav`): adicione o link de navegação

```html
<!-- Exemplo de nova seção simples -->
<section id="lancamentos" class="nova-secao">
  <div class="container">
    <div class="nova-secao__cabecalho anim-subir">
      <span class="secao-eyebrow">Novo</span>
      <h2 class="secao-titulo bebas" style="font-size: clamp(3rem, 7vw, 4.5rem);">
        LANCAMENTOS
      </h2>
    </div>
    <!-- conteúdo -->
  </div>
</section>
```

---

## Dicas Gerais

### Formatar preços corretamente

```js
preco: 89.90,           // correto (ponto decimal)
preco: 89,90,           // errado (vírgula causa erro de sintaxe JS)
preco: "89.90",         // errado (string, não número)
```

### Tamanhos de imagem recomendados

| Uso | Tamanho ideal | Formato |
|---|---|---|
| Foto de produto (card) | 400×400px | `.jpg` (menor arquivo) |
| Mascote do Hero | 800×800px | `.png` (transparência) |
| Feed Instagram | 400×400px | `.jpg` |

### Como encontrar um elemento no HTML

Use `Ctrl+F` no editor e busque por:
- O texto visível da seção (ex: "MAIS VENDIDOS")
- O `id` ou `class` (ex: `id="produtos"` ou `class="brand-story"`)
- O comentário da seção (ex: `<!-- 5. MAIS VENDIDOS`)

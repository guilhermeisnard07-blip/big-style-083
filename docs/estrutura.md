# Estrutura do Código — BIG STYLE 083

> Documentação técnica da arquitetura do site.

---

## Visão Geral

O site é composto por 4 tipos de arquivo:

| Tipo | Localização | Responsabilidade |
|---|---|---|
| HTML | `index.html` | Estrutura e conteúdo estático |
| CSS | `css/` | Visual: cores, layout, animações |
| JavaScript | `js/` | Dados, renderização dinâmica, interatividade |
| Imagens | `assets/images/` | Fotos de produtos e mascote |

---

## Arquivo: `index.html`

Contém toda a estrutura HTML do site em um único arquivo.

### Seções (em ordem de aparição)

| Seção | ID/Classe | Conteúdo |
|---|---|---|
| Header | `#header` | Logo, navegação, botões de ação |
| Hero | `#inicio` | Título principal, mascote, botões CTA |
| Barra de Benefícios | `.features-bar` | 4 diferenciais da loja |
| Categorias | `#categorias` | 7 círculos clicáveis com ícones |
| Novidades | `#novidades` | Carrossel de produtos (container vazio, preenchido por JS) |
| Mais Vendidos | `#produtos` | Grade 2×2 → 4×1 (container vazio, preenchido por JS) |
| Nossa História | `#sobre` | Texto da marca e grade de estatísticas |
| Instagram | `.instagram-feed` | Grade 3×3 de fotos (container vazio, preenchido por JS) |
| Depoimentos | `.testimonials` | Cards de avaliações (container vazio, preenchido por JS) |
| Banner Promo | `.promo-banner` | Fundo gradiente roxo, oferta de frete |
| Rodapé | `#contato` | Links, contato, redes sociais |
| WhatsApp Float | `.whatsapp-float` | Botão fixo no canto inferior direito |

### Containers Dinâmicos

Os seguintes elementos são **vazios no HTML** e preenchidos pelo JavaScript:

```html
<div id="carrossel-produtos">   <!-- preenchido por renderizarCarrossel() -->
<div id="grid-mais-vendidos">  <!-- preenchido por renderizarMaisVendidos() -->
<div id="grade-instagram">     <!-- preenchido por renderizarInstagram() -->
<div id="grid-depoimentos">    <!-- preenchido por renderizarDepoimentos() -->
```

---

## Arquivo: `css/style.css`

### Seções

1. **Importação de fontes** (Google Fonts: Bebas Neue + Inter)
2. **Variáveis CSS** (`:root`) — cores, fontes, medidas
3. **Reset** — zera margens/paddings inconsistentes entre navegadores
4. **Utilitários globais** — `.container`, `.bebas`, `.texto-gradiente`, etc.
5. **Animações** (`@keyframes`) — `flutuar`, `pulso-brilho`, `marquee`, `gradiente-animado`, `entrar-topo`
6. **Classes de entrada** — `.anim-subir`, `.anim-esquerda`, `.anim-direita`, `.anim-escalar` + `.visivel`

### Sistema de Animações de Entrada

```
Elemento no HTML:
  <div class="anim-subir atraso-2">...</div>
       ↓ começa com opacity: 0 + translateY(40px)
  
JS detecta que entrou na tela:
  elemento.classList.add("visivel")
       ↓ CSS transition ativa:
  opacity: 1 + translateY(0)
       ↓ resultado:
  elemento aparece suavemente subindo
```

Variantes disponíveis:
- `.anim-subir` → sobe (padrão, mais usado)
- `.anim-esquerda` → vem da esquerda
- `.anim-direita` → vem da direita
- `.anim-escalar` → cresce a partir do centro

Atrasos escalonados: `.atraso-1` até `.atraso-9` (passos de 80ms)

---

## Arquivo: `css/components.css`

Contém todos os estilos específicos de cada seção, organizados em 13 blocos numerados e comentados.

### Metodologia de nomes (BEM simplificado)

```
.nome-componente                → bloco principal
.nome-componente__elemento      → parte interna
.nome-componente--modificador   → variação de estado
```

Exemplos:
- `.header` → o header em si
- `.header__logo` → o logo dentro do header
- `.header--rolado` → estado do header após rolar a página

---

## Arquivo: `css/responsive.css`

Usa **Mobile First**: os estilos base em `components.css` são para mobile.
Este arquivo **expande** para telas maiores.

### Breakpoints

| Nome | Largura | Equivalente |
|---|---|---|
| sm | 640px | Celular grande / tablet pequeno |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Desktop grande |

### Mudanças principais por breakpoint

**sm (640px+):**
- Botão WhatsApp aparece no header
- Rodapé passa para layout em linha

**md (768px+):**
- Barra de benefícios: 2 colunas → 4 colunas
- Grade Mais Vendidos: 2 colunas → 4 colunas
- Depoimentos: 1 coluna → 3 colunas

**lg (1024px+):**
- Hero: 1 coluna → 2 colunas (texto | mascote)
- Header: mostra navegação desktop, esconde hambúrguer
- Nossa História: 1 coluna → 2 colunas
- Rodapé: 2 colunas → 5 colunas

---

## Arquivo: `js/whatsapp.js`

Centraliza toda a configuração de contato da marca.

```js
var WHATSAPP_NUMERO = "5598999999999";
var WHATSAPP_URL    = "https://wa.me/" + WHATSAPP_NUMERO;
var INSTAGRAM_URL   = "https://www.instagram.com/bigstyle.083";
```

**Funções exportadas (globais):**
- `linkWhatsApp()` → retorna a URL base
- `linkWhatsAppComMensagem(texto)` → retorna URL com mensagem pré-preenchida
- `linkPedidoProduto(nome, preco)` → mensagem formatada para solicitar produto

---

## Arquivo: `js/products.js`

Contém todos os dados estáticos do site e as funções que geram o HTML dos componentes dinâmicos.

### Dados

```js
var produtos   = [...];    // 9 produtos do catálogo
var fotosLoja  = [...];    // 9 fotos para o feed do Instagram
var depoimentos = [...];   // 3 avaliações de clientes
```

### Funções de renderização

| Função | Container alvo | O que renderiza |
|---|---|---|
| `renderizarCarrossel()` | `#carrossel-produtos` | Cards do carrossel de novidades |
| `renderizarMaisVendidos()` | `#grid-mais-vendidos` | Cards dos destaques (destaque: true) |
| `renderizarInstagram()` | `#grade-instagram` | Grade 3×3 de fotos |
| `renderizarDepoimentos()` | `#grid-depoimentos` | Cards de avaliações |

### Utilitários

```js
function formatarPreco(valor)  // 89.90 → "R$ 89,90"
function criarEstrelas(qtd)    // 5 → 5 ícones de estrela em HTML
function abrirWhatsAppProduto(nome, preco)  // abre WhatsApp com mensagem do produto
```

---

## Arquivo: `js/animations.js`

### `iniciarAnimacoesDeEntrada()`

Cria um `IntersectionObserver` que monitora todos os elementos `.anim-*`.
Quando um elemento entra em 10% da janela, adiciona a classe `.visivel`.
O CSS faz a transição suavemente.

### `aplicarParallaxHero()`

Chamado a cada evento de `scroll`. Calcula o progresso de rolagem dentro do Hero
e aplica `translateY` proporcional ao mascote e ao texto, criando o efeito de profundidade.

---

## Arquivo: `js/main.js`

Ponto de entrada. Executa após o DOM estar pronto (`DOMContentLoaded`).

### Inicializações

1. **Renderização** — chama as 4 funções de `products.js`
2. **Animações** — chama `iniciarAnimacoesDeEntrada()` de `animations.js`
3. **Header scroll** — monitora `window.scrollY` e aplica `.header--rolado`
4. **Menu mobile** — toggle do menu hambúrguer com `classList.add/remove`
5. **Carrossel** — `scrollBy` nos botões ◀ ▶
6. **Links dinâmicos** — preenche `href` em `[data-whatsapp]` e `[data-instagram]`
7. **Scroll listener** — um único listener para header + parallax

---

## Ordem de Carregamento dos Scripts

Os scripts são carregados no final do `<body>`, garantindo que o DOM já existe quando executam.

```html
<!-- index.html — final do <body> -->
<script src="js/whatsapp.js"></script>   <!-- 1. Define variáveis de contato -->
<script src="js/products.js"></script>   <!-- 2. Define dados e funções de render -->
<script src="js/animations.js"></script> <!-- 3. Define funções de animação -->
<script src="js/main.js"></script>       <!-- 4. Inicializa tudo (usa o que os anteriores definiram) -->
```

**Importante:** Não mude a ordem dos scripts. `main.js` depende de funções definidas nos anteriores.

---

## Sistema de Links Automáticos

Qualquer elemento com `data-whatsapp` recebe o link correto automaticamente:

```html
<!-- No HTML: -->
<a href="#" data-whatsapp>Falar no WhatsApp</a>

<!-- Resultado após main.js executar: -->
<a href="https://wa.me/5598999999999" data-whatsapp>Falar no WhatsApp</a>
```

O mesmo funciona para `data-instagram`.

Isso significa que trocar o número em `js/whatsapp.js` atualiza **todos** os botões do site de uma vez.

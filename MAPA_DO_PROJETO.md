# MAPA DO PROJETO — BIG STYLE 083

> Lista completa de todos os arquivos do projeto, o que cada um faz e de quem dependem.

---

## src/config/

### `src/config/site.ts`
**O que faz:** Configuração central da marca. Contém todas as informações de contato, links e textos que se repetem no site.

**Dependem dele:**
- `src/components/Header.tsx` — links de navegação e WhatsApp
- `src/components/Hero.tsx` — botão WhatsApp e estatísticas
- `src/components/BrandStory.tsx` — link do Instagram
- `src/components/InstagramFeed.tsx` — link do Instagram
- `src/components/PromoBanner.tsx` — cidade e valor do frete
- `src/components/Footer.tsx` — contato, redes sociais
- `src/components/WhatsAppFloat.tsx` — link do WhatsApp
- `src/services/whatsapp.ts` — base para geração de links

**Não depende de nenhum outro arquivo do projeto.**

---

## src/data/

### `src/data/imagens.ts`
**O que faz:** Importa e exporta as 9 fotos reais da loja como um array `FOTOS_LOJA`. Centraliza todos os imports de imagem.

**Dependem dele:**
- `src/data/products.ts` — usa as fotos nos produtos
- `src/components/InstagramFeed.tsx` — usa as fotos na grade 3×3

**Não depende de nenhum outro arquivo do projeto** (além dos assets em `/assets`).

---

### `src/data/products.ts`
**O que faz:** Define e exporta o catálogo completo de produtos (`products`), as categorias (`categories`) e os depoimentos de clientes (`testimonials`). Importa as fotos de `imagens.ts`.

**Dependem dele:**
- `src/components/NewArrivals.tsx` — importa `products`
- `src/components/BestSellers.tsx` — importa `products` (filtra os `bestSeller: true`)
- `src/components/Testimonials.tsx` — importa `testimonials`

**Depende de:**
- `src/data/imagens.ts` — fotos dos produtos

---

## src/styles/

### `src/styles/marca.css`
**O que faz:** Contém todos os estilos específicos da identidade visual da marca: fonte Bebas Neue, efeitos neon, fundo de grade urbana e as animações (marquee, pulse-glow, float).

**Dependem dele:**
- Qualquer componente que use as classes: `.font-bebas`, `.neon-glow`, `.urban-grid-bg`, `.card-hover-glow`, `.animate-marquee`, `.animate-pulse-glow`, `.animate-float`, `.scrollbar-hide`

**Depende de:** `src/index.css` (que o importa via `@import`)

---

## src/utils/

### `src/utils/formatPrice.ts`
**O que faz:** Exporta `formatarPreco(valor)` — formata número para "R$ 89,90" — e `gerarParcelamento(valor, parcelas)`.

**Dependem dele:**
- `src/components/ProductCard.tsx`
- `src/components/BestSellers.tsx`

**Não depende de nenhum outro arquivo do projeto.**

---

## src/services/

### `src/services/whatsapp.ts`
**O que faz:** Centraliza a geração de links do WhatsApp. Exporta `linkWhatsApp()`, `linkWhatsAppComMensagem(msg)` e `linkPedidoProduto(nome, preco)`.

**Depende de:**
- `src/config/site.ts` — usa o número do WhatsApp configurado

**Não é usado por nenhum componente atualmente** — disponível para uso futuro (ex: botão de pedido de produto específico via WhatsApp).

---

## src/components/

### `src/components/Header.tsx`
**O que faz:** Cabeçalho fixo no topo. Transparente no topo, sólido ao rolar. Menu desktop + menu mobile com animação.

**Depende de:**
- `src/config/site.ts` — `NAV_LINKS`, `REDES_SOCIAIS`

---

### `src/components/Hero.tsx`
**O que faz:** Seção principal. Título animado, mascote com parallax e float, botões de ação, barra de estatísticas.

**Depende de:**
- `src/config/site.ts` — `REDES_SOCIAIS`, `ESTATISTICAS_HERO`
- `/assets/file_000...png` — imagem do mascote

---

### `src/components/FeaturesBar.tsx`
**O que faz:** Barra de 4 benefícios (Envio Rápido, Compra Segura, Parcelamento, Troca Fácil). Dados internos ao arquivo.

**Não depende de nenhum arquivo do projeto.**

---

### `src/components/Categories.tsx`
**O que faz:** Seção de categorias com 7 círculos clicáveis animados. Dados internos ao arquivo.

**Não depende de nenhum arquivo do projeto.**

---

### `src/components/ProductCard.tsx`
**O que faz:** Card de produto reutilizável (foto, badge, nome, preço, botão +). Usado pelo carrossel de Novidades.

**Depende de:**
- `src/data/products.ts` — tipo `Product`
- `src/utils/formatPrice.ts` — `formatarPreco()`

---

### `src/components/NewArrivals.tsx`
**O que faz:** Carrossel horizontal com todos os produtos. Botões ◀ ▶ controlam a rolagem via `useRef`.

**Depende de:**
- `src/data/products.ts` — array `products`
- `src/components/ProductCard.tsx` — renderiza cada produto

---

### `src/components/BestSellers.tsx`
**O que faz:** Grade 4 colunas com os produtos `bestSeller: true`. Card com faixa "Top Vendas".

**Depende de:**
- `src/data/products.ts` — array `products` (filtrado)
- `src/utils/formatPrice.ts` — `formatarPreco()`

---

### `src/components/BrandStory.tsx`
**O que faz:** Seção "Nossa História". Texto da marca + grid de 4 estatísticas.

**Depende de:**
- `src/config/site.ts` — `REDES_SOCIAIS` (link do Instagram)

---

### `src/components/InstagramFeed.tsx`
**O que faz:** Grade 3×3 das fotos reais da loja. Cada foto leva ao perfil do Instagram com hover roxo.

**Depende de:**
- `src/data/imagens.ts` — `FOTOS_LOJA`
- `src/config/site.ts` — `REDES_SOCIAIS.instagram.url`

---

### `src/components/Testimonials.tsx`
**O que faz:** Três cards de depoimentos de clientes com estrelas e avatar.

**Depende de:**
- `src/data/products.ts` — array `testimonials`

---

### `src/components/PromoBanner.tsx`
**O que faz:** Banner de alto impacto com fundo roxo animado. Anuncia o frete grátis.

**Depende de:**
- `src/config/site.ts` — `FRETE_GRATIS`

---

### `src/components/Footer.tsx`
**O que faz:** Rodapé completo com colunas de links, informações de contato e ícones de redes sociais.

**Depende de:**
- `src/config/site.ts` — `MARCA`, `REDES_SOCIAIS`

---

### `src/components/WhatsAppFloat.tsx`
**O que faz:** Botão fixo no canto inferior direito. Pulsa continuamente. Abre o WhatsApp ao clicar.

**Depende de:**
- `src/config/site.ts` — `REDES_SOCIAIS.whatsapp.url`

---

### `src/components/AnnouncementBar.tsx`
**O que faz:** Faixa com texto em loop infinito (marquee). **Atualmente inativa** — não é renderizada em `home.tsx`.

**Não depende de nenhum arquivo do projeto.**

---

### `src/components/ui/` (pasta completa)
**O que faz:** ~60 componentes base gerados pelo shadcn/ui (Button, Card, Dialog, Toast...). Não edite manualmente.

**Depende de:**
- `src/lib/utils.ts` — função `cn()`

---

## src/pages/

### `src/pages/home.tsx`
**O que faz:** Página inicial. Importa e monta todas as seções em ordem.

**Depende de:** todos os componentes em `src/components/` (exceto `AnnouncementBar` e `ui/`)

---

### `src/pages/not-found.tsx`
**O que faz:** Página 404 exibida quando uma rota não existe.

**Não depende de nenhum arquivo do projeto.**

---

## src/hooks/

### `src/hooks/use-mobile.tsx`
**O que faz:** Hook `useIsMobile()` — retorna `true` se a largura da tela for menor que 768px.

**Usado por:** componentes que precisam adaptar o comportamento para mobile.

---

### `src/hooks/use-toast.ts`
**O que faz:** Sistema de gerenciamento de notificações toast. Usado pelos componentes `ui/toast` e `ui/toaster`.

---

## src/lib/

### `src/lib/utils.ts`
**O que faz:** Exporta a função `cn()` que combina classes Tailwind sem conflitos (`clsx` + `tailwind-merge`).

**Depende de:** todos os componentes em `src/components/ui/`

---

## Raiz de src/

### `src/main.tsx`
**O que faz:** Ponto de entrada do React. Monta `<App />` no `<div id="root">` do HTML.

**Depende de:**
- `src/App.tsx`
- `src/index.css`

---

### `src/App.tsx`
**O que faz:** Componente raiz. Configura `QueryClientProvider` e `Toaster`. Renderiza `<HomePage />`.

**Depende de:**
- `src/pages/home.tsx`
- `src/components/ui/toaster.tsx`

---

### `src/index.css`
**O que faz:** Estilos globais. Importa fontes, Tailwind, variáveis de tema (:root) e `src/styles/marca.css`.

**Depende de:**
- `src/styles/marca.css`

---

## Raiz do projeto

### `README.md`
**O que faz:** Documentação completa do projeto (guia de manutenção).

### `MAPA_DO_PROJETO.md`
**O que faz:** Este arquivo. Lista todos os arquivos e suas dependências.

### `vite.config.ts`
**O que faz:** Configuração do Vite. Define o alias `@assets` (para a pasta `/assets`) e `@` (para `src/`).

### `package.json`
**O que faz:** Dependências e scripts npm do projeto.

### `tsconfig.json`
**O que faz:** Configuração do TypeScript.

---

## Diagrama de Dependências Simplificado

```
config/site.ts ─────────────────────────────────────────────────────────┐
data/imagens.ts ────────────────────────────────────┐                   │
data/products.ts (usa imagens.ts) ─────────────┐    │                   │
utils/formatPrice.ts ────────────────────┐     │    │                   │
                                          ↓     ↓    ↓                   ↓
                              ProductCard.tsx   NewArrivals.tsx    Header.tsx
                              BestSellers.tsx   InstagramFeed.tsx  Hero.tsx
                              Testimonials.tsx                     BrandStory.tsx
                                                                   PromoBanner.tsx
                                                                   Footer.tsx
                                                                   WhatsAppFloat.tsx
                                    ↓ (todos importados por)
                                 pages/home.tsx
                                    ↓
                                 App.tsx
                                    ↓
                                 main.tsx
                                    ↓
                               Navegador
```

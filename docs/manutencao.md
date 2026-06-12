# Guia de Manutenção — BIG STYLE 083

> Todas as tarefas do dia a dia explicadas em linguagem simples.

---

## 1. Trocar o Número do WhatsApp

**Arquivo:** `js/whatsapp.js`

```js
// Linha 14 — substitua pelo número no formato: 55 + DDD + número (sem espaços, traços ou parênteses)
var WHATSAPP_NUMERO = "5598999999999";
//                     ↑↑ DDI (Brasil = 55)
//                       ↑↑ DDD
//                         ↑↑↑↑↑↑↑ Número com 9 dígitos
```

**Exemplos válidos:**
- `"5583987654321"` → São Paulo
- `"5598912345678"` → Maranhão
- `"5583912345678"` → Paraíba

**Após a mudança:** O botão "Falar no WhatsApp", o WhatsApp do rodapé, o botão flutuante e todos os botões dos produtos apontarão para o novo número automaticamente.

---

## 2. Trocar o Link do Instagram

**Arquivo:** `js/whatsapp.js`

```js
var INSTAGRAM_USUARIO = "@bigstyle.083";        // nome de exibição
var INSTAGRAM_URL     = "https://www.instagram.com/bigstyle.083"; // link real
```

---

## 3. Adicionar um Novo Produto

**Arquivo:** `js/products.js`, array `produtos`

**Passo a passo:**

1. Coloque a foto do produto em `assets/images/` (ex: `foto10.jpg`)
2. Abra `js/products.js`
3. Copie um bloco existente e cole após o último produto:

```js
{
  id: 10,                               // número único (não repetir)
  nome: "Nome do Produto Aqui",         // nome que aparece no card
  preco: 89.90,                         // preço em número (use ponto, não vírgula)
  parcelas: "6x de R$ 14,98",          // texto de parcelamento
  imagem: "assets/images/foto10.jpg",   // caminho da foto
  badge: "NOVO",                        // badge opcional: "NOVO", "SALE", "" (vazio = sem badge)
  categoria: "Camisetas",               // categoria para filtragem futura
  destaque: false                       // true = aparece em "Mais Vendidos"
}
```

4. Não esqueça a vírgula após o `}` do produto anterior!

---

## 4. Remover um Produto

**Arquivo:** `js/products.js`, array `produtos`

Encontre o bloco do produto pelo campo `nome` e delete o bloco inteiro (do `{` até o `}` incluindo a vírgula).

---

## 5. Alterar Preço de um Produto

**Arquivo:** `js/products.js`

```js
preco: 89.90,             // ← altere o número (use ponto como separador decimal)
parcelas: "6x de R$ 14,98", // ← altere o texto de parcelamento
```

**Dica:** Para calcular a parcela: `preco / numero_parcelas`. Exemplo: 89,90 ÷ 6 = 14,98.

---

## 6. Mudar qual produto aparece em "Mais Vendidos"

**Arquivo:** `js/products.js`

- Para **incluir** um produto em Mais Vendidos: mude `destaque: false` para `destaque: true`
- Para **remover** um produto de Mais Vendidos: mude `destaque: true` para `destaque: false`
- Apenas os **4 primeiros** com `destaque: true` são exibidos.

---

## 7. Trocar uma Foto de Produto

**Forma mais simples:** substitua o arquivo em `assets/images/` pelo mesmo nome (`foto1.jpg`, etc.).

**Forma com nome diferente:**
1. Coloque o novo arquivo em `assets/images/` (ex: `foto1-nova.jpg`)
2. Em `js/products.js`, encontre o produto e altere:
   ```js
   imagem: "assets/images/foto1-nova.jpg",
   ```

---

## 8. Trocar o Mascote

Substitua o arquivo `assets/images/mascote.png` por uma nova imagem com o **mesmo nome**.

Formatos suportados: `.png` (recomendado para fundo transparente), `.jpg`, `.webp`.

---

## 9. Alterar Texto do Hero

**Arquivo:** `index.html`, seção `#inicio`

Procure pelas linhas:
```html
<span class="hero__titulo-linha1">SEU ESTILO.</span>
<span class="hero__titulo-linha2">STREETWEAR.</span>
```

A `linha2` tem o gradiente roxo. Altere os textos como desejar.

---

## 10. Editar a História da Marca

**Arquivo:** `index.html`, seção `#sobre`

Encontre:
```html
<div class="brand-story__paragrafos">
  <p>BIG STYLE 083 nasceu das ruas...</p>
  <p>Cada peca carrega atitude...</p>
  <p class="brand-story__destaque">Veste o street. Representa o 083.</p>
</div>
```

Edite os textos dos parágrafos diretamente.

---

## 11. Adicionar/Editar Depoimentos

**Arquivo:** `js/products.js`, array `depoimentos`

```js
{
  id: 4,
  nome: "Carlos M.",       // nome do cliente
  avatar: "C",             // inicial do nome (aparece no círculo)
  avaliacao: 5,            // número de estrelas (1 a 5)
  texto: "Produto incrivel! ...",  // texto do depoimento
  cidade: "Santa Luzia - PB"
}
```

---

## 12. Mudar Cores do Site

**Arquivo:** `css/style.css`, seção `:root` (primeiras linhas)

```css
:root {
  --cor-primaria:   #7B2EFF;  /* Roxo vibrante — botões principais */
  --cor-destaque:   #A855F7;  /* Roxo neon — ícones e destaques */
  --cor-fundo:      #050505;  /* Preto — fundo geral */
  --cor-fundo-card: #111111;  /* Cinza escuro — cards */
  --cor-borda:      #2A2A2A;  /* Cinza borda */
}
```

**Dica:** Use um seletor de cores online (ex: coolors.co) para encontrar bons hexadecimais.

---

## 13. Alterar Informações de Contato do Rodapé

**Arquivo:** `index.html`, seção `#contato`

Procure pelos itens `.footer__contato-item` e altere os textos de telefone, e-mail e endereço.

---

## 14. Mudar o Valor Mínimo do Frete Grátis

**Arquivo:** `index.html`, seção `.promo-banner`

```html
<p class="promo-banner__valor bebas">R$ 200,00</p>
```

---

## Aviso Importante

Após qualquer edição, **salve o arquivo** e **recarregue a página** no navegador para ver as mudanças.

Se o site for servido pelo Vite (modo desenvolvimento), as mudanças em HTML e CSS aplicam automaticamente sem precisar recarregar.

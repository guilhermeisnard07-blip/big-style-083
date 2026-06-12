# BIG STYLE 083 — Site Oficial

> Moda street para quem cria tendência. Santa Luzia - PB, 083.

---

## Visão Geral

Site estático da loja **BIG STYLE 083**, construído em HTML puro, CSS puro e JavaScript vanilla — sem frameworks, sem dependências de Node.js, sem compilação necessária.

O site pode ser aberto diretamente num navegador (`index.html`) ou servido por qualquer servidor HTTP.

---

## Estrutura de Arquivos

```
artifacts/big-style-083/
├── index.html               ← Página principal (toda a estrutura HTML)
│
├── css/
│   ├── style.css            ← Variáveis de cor, reset, fontes, animações
│   ├── components.css       ← Estilos de cada seção e componente
│   └── responsive.css       ← Media queries (mobile → desktop)
│
├── js/
│   ├── whatsapp.js          ← EDITE AQUI: número do WhatsApp e Instagram
│   ├── products.js          ← EDITE AQUI: produtos, depoimentos, fotos
│   ├── animations.js        ← IntersectionObserver e parallax do hero
│   └── main.js              ← Inicialização geral (header, menu, carrossel)
│
├── assets/
│   └── images/
│       ├── foto1.jpg → foto9.jpg   ← Fotos dos produtos
│       └── mascote.png             ← Mascote do Hero
│
└── docs/
    ├── manutencao.md        ← Guia de manutenção do dia a dia
    ├── estrutura.md         ← Arquitetura detalhada do código
    └── alteracoes-comuns.md ← Receitas prontas para edições frequentes
```

---

## Alterações Rápidas

| O que mudar | Arquivo | Campo |
|---|---|---|
| Número do WhatsApp | `js/whatsapp.js` | `WHATSAPP_NUMERO` |
| Link do Instagram | `js/whatsapp.js` | `INSTAGRAM_URL` |
| Adicionar produto | `js/products.js` | array `produtos` |
| Trocar preço | `js/products.js` | campo `preco` |
| Editar depoimento | `js/products.js` | array `depoimentos` |
| Trocar cor roxa | `css/style.css` | `--cor-primaria` |
| Editar texto do Hero | `index.html` | seção `#inicio` |
| Trocar mascote | `assets/images/mascote.png` | substituir arquivo |

---

## Como Rodar

O site é servido pelo Vite em modo de desenvolvimento:

```bash
# Na raiz do monorepo
pnpm --filter @workspace/big-style-083 run dev
```

Ou sem Vite (qualquer servidor HTTP):

```bash
cd artifacts/big-style-083
python3 -m http.server 3000
# Abra: http://localhost:3000
```

---

## Documentação Completa

- [Guia de Manutenção](docs/manutencao.md)
- [Estrutura do Código](docs/estrutura.md)
- [Alterações Comuns](docs/alteracoes-comuns.md)

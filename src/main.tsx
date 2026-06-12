/**
 * Ponto de entrada da aplicação React — BIG STYLE 083
 *
 * Este é o primeiro arquivo executado pelo navegador.
 * Ele monta o componente <App /> dentro do elemento <div id="root">
 * que existe no arquivo public/index.html (ou index.html na raiz).
 *
 * Ordem de execução:
 *  1. Carrega os estilos globais (src/index.css → src/styles/marca.css)
 *  2. Instancia o ReactDOM e renderiza <App />
 *  3. <App /> renderiza <HomePage /> com todas as seções
 */

import { createRoot } from "react-dom/client";
import App from "./App";

// Estilos globais: Tailwind + tema da marca + animações
import "./index.css";

// Seleciona o elemento root do HTML e inicia a árvore React
createRoot(document.getElementById("root")!).render(<App />);

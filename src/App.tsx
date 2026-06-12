/**
 * Componente raiz da aplicação — BIG STYLE 083
 *
 * Responsabilidades:
 *  1. Configura o QueryClient do React Query (necessário mesmo sem
 *     chamadas de API, pois alguns componentes shadcn/ui dependem dele).
 *  2. Renderiza o sistema de notificações (Toaster).
 *  3. Renderiza a única página atual: HomePage.
 *
 * Para adicionar uma nova página no futuro:
 *  → Crie o arquivo em src/pages/
 *  → Adicione uma biblioteca de rotas (ex: React Router)
 *  → Substitua <HomePage /> pelo componente de roteamento
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/home";

// Instância única do cliente de cache — compartilhada por toda a aplicação
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      {/* Sistema de toast (notificações) — aparece no canto da tela */}
      <Toaster />
    </QueryClientProvider>
  );
}

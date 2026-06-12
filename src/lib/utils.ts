/**
 * Utilitário de mesclagem de classes CSS — shadcn/ui
 *
 * Combina `clsx` (condicionais) com `tailwind-merge` (resolve
 * conflitos de classes Tailwind como "p-2 p-4" → "p-4").
 *
 * Usado internamente pelos componentes em src/components/ui/.
 * Para utilitários específicos da loja, veja src/utils/formatPrice.ts.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-purple-600", "hover:bg-purple-700")
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

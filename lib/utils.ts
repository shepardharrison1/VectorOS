import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class strings safely, resolving conflicts.
 * Standard shadcn/ui utility.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

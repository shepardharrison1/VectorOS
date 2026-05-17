"use client";

import { cn } from "@/lib/utils";

/**
 * AnimatedGrid — slow-panning grid lines, fading at edges via radial mask.
 * Pure CSS, no JS overhead.
 */
export function AnimatedGrid({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "dense";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 mask-radial animate-grid-pan",
          variant === "dense" ? "bg-grid-dense" : "bg-grid"
        )}
      />
    </div>
  );
}

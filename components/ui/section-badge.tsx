import { cn } from "@/lib/utils";

/**
 * SectionBadge — tiny uppercase chip used as section eyebrow.
 * Sets the "infrastructure / spec sheet" tone.
 */
export function SectionBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1",
        "text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono",
        className
      )}
    >
      <span className="h-1 w-1 rounded-full bg-foreground/60" />
      {children}
    </div>
  );
}

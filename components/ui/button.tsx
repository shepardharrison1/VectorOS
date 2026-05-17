import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — shadcn/ui style primitive, tuned for VectorOS monochrome system.
 * Variants stay strictly within the gray scale; no color accents.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary — white pill, the marquee CTA
        default:
          "bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_0_1px_hsla(0,0%,100%,0.1),0_8px_24px_-8px_hsla(0,0%,100%,0.25)]",
        // Secondary — glass surface
        secondary:
          "glass text-foreground hover:bg-white/[0.05] hover:border-white/15",
        // Ghost — barely-there
        ghost:
          "text-foreground/80 hover:text-foreground hover:bg-white/[0.04]",
        // Outline — hairline border
        outline:
          "border border-white/10 bg-transparent text-foreground hover:bg-white/[0.04] hover:border-white/20",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-7 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Input — minimal hairline input for newsletter and forms.
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm",
          "text-foreground placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:border-white/25 focus-visible:bg-white/[0.04]",
          "transition-colors duration-200",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

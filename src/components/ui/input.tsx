import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-full border bg-transparent px-4 py-2 text-sm text-primary placeholder:text-secondary shadow-xs transition-colors outline-none",
        "border-border focus-visible:border-theme",
        "selection:bg-theme selection:text-primary",
        "file:text-primary file:border-0 file:bg-transparent file:text-sm file:font-medium file:h-7",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };

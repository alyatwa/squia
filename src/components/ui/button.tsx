import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const buttonVariants = cva(
  "rtl:flex-row-reverse inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50   ",
  {
    variants: {
      variant: {
        default: "bg-[#4DB9D9] px-3 text-white shadow rounded-[10px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border text-typography border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-transparent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
  loading?: boolean;
  leftSection?: React.JSX.Element;
  rightSection?: React.JSX.Element;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      disabled,
      loading = false,
      leftSection,
      rightSection,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "cursor-pointer",
          buttonVariants({ variant, size, className })
        )}
        disabled={loading || disabled}
        ref={ref}
        {...props}
      >
        <>
          {((leftSection && loading) ||
            (!leftSection && !rightSection && loading)) && (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          )}
          {!loading && leftSection && <div className="mr-2">{leftSection}</div>}
          {children}
          {!loading && rightSection && (
            <div className="ml-2">{rightSection}</div>
          )}
          {rightSection && loading && (
            <Loader className="ml-2 h-4 w-4 animate-spin" />
          )}
        </>
      </Comp>
    );
  }
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };

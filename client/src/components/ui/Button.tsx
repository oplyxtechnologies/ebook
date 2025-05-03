"use client";

import { ButtonHTMLAttributes, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // utility to merge classes

// Variant Definitions
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all  disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-green-600 text-white hover:bg-green-700 hover:shadow-2xl ",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "bg-transparent text-green-600 hover:underline",
        error: "bg-red-500 text-white hover:bg-red-600",
        form: "bg-green-600 text-white hover:bg-green-700",
        cta: "bg-green-600 text-white hover:bg-green-700 text-base font-semibold",
        subtle: "bg-red-100 text-red-700 hover:bg-red-200",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// Props Interface
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// Component
const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };

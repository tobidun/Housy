import React from "react";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-6 py-3 rounded-lg font-semibold transition-colors flex items-center",
  {
    variants: {
      variant: {
        primary: "bg-[#C0581B] hover:bg-[#a84615] text-white",
        secondary: "border-2 border-white text-white hover:bg-white hover:text-gray-900",
        outline: "border-2 border-[#C0581B] text-[#C0581B] hover:bg-[#C0581B] hover:text-white",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  showArrow = false,
  className = "",
  ...props
}) => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};

export default Button;

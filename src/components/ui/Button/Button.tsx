import cn from "@/utils/cn";
import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  classname?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

const Button = (props: Proptypes) => {
  const {
    children,
    classname,
    disabled = false,
    onClick,
    type = "button",
    variant = "primary",
  } = props;
  return (
    <button
      type={type}
      className={cn(
        "shadow px-4 py-2 rounded-xl hover:scale-[101%] transition-all duration-200 ease-in-out cursor-pointer",
        variant === "primary" &&
          "bg-black dark:border dark:text-[var(--color-neon)] text-white dark:bg-[var(--color-secondary-dark)] hover:bg-neutral-700 dark:hover:text-white",
        variant === "secondary" &&
          "bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-700 dark:text-white",
        classname
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

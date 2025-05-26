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
      className={`p-2 border dark:border-white text-sm md:text-base cursor-pointer ${classname} ${
        variant === "primary"
          ? "bg-white text-black dark:bg-neutral-600 dark:text-white hover:bg-black dark:hover:bg-neutral-600 hover:text-neutral-300"
          : "bg-black text-white dark:bg-neutral-600 dark:text-white hover:bg-white hover:text-black dark:hover:bg-neutral-600"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

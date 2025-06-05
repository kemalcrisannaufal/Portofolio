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
      className={`px-3 py-2 shadow rounded-sm text-sm md:text-base cursor-pointer ${classname} ${
        variant === "primary"
          ? "bg-black text-white dark:border dark:border-neutral-300 dark:bg-black dark:text-white hover:bg-neutral-300 hover:text-black  dark:hover:bg-neutral-600"
          : "bg-white border border-neutral-300 text-black dark:bg-transparent  dark:text-neutral-300 hover:bg-neutral-300  dark:hover:bg-neutral-600 "
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

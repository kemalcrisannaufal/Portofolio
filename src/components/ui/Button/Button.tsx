import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  classname?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = (props: Proptypes) => {
  const {
    children,
    classname,
    disabled = false,
    onClick,
    type = "button",
  } = props;
  return (
    <button
      type={type}
      className={`hover:bg-black dark:hover:bg-neutral-600 p-2 border dark:border-white hover:text-neutral-300 text-sm md:text-base cursor-pointer ${classname}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

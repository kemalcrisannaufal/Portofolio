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
      className={`hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer ${classname}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

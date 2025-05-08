import { ReactNode } from "react";

type Proptypes = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  classname?: string;
};

const Button = (props: Proptypes) => {
  const {
    type = "button",
    onClick,
    children,
    disabled = false,
    classname,
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

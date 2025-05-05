import { ReactNode } from "react";

type Proptypes = {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children: ReactNode;
};

const Button = (props: Proptypes) => {
  const { type = "button", onClick, children } = props;
  return (
    <button
      type={type}
      className="hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import cn from "@/utils/cn";
import { Dispatch, SetStateAction } from "react";

interface Proptypes {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = (props: Proptypes) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  return (
    <button
      aria-label="hamburger-menu"
      className="md:hidden relative w-9 h-5"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span
        className={cn(
          "top-0 left-0 absolute bg-[var(--color-primary-dark)] dark:bg-white w-full h-1 transition-all duration-300 ease-in-out",
          isMenuOpen && "rotate-45 top-2.5"
        )}
      ></span>
      <span
        className={cn(
          "bottom-0 left-0 absolute bg-[var(--color-primary-dark)] dark:bg-white w-full h-1 transition-all duration-300 ease-in-out",
          isMenuOpen && "-rotate-45 top-2.5"
        )}
      ></span>
    </button>
  );
};

export default HamburgerMenu;

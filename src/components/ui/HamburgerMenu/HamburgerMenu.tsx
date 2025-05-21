interface Proptypes {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const HamburgerMenu = (props: Proptypes) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  return (
    <button
      className="relative w-5 h-3"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span
        className={`left-0 top-0 absolute bg-black w-full h-0.5 transition-all duration-300 ${
          isMenuOpen && "rotate-45 translate-y-1.5"
        }`}
      />
      <span
        className={`left-0 top-1.5 absolute bg-black w-full h-0.5 transition-all duration-300 ${
          isMenuOpen && "opacity-0"
        }`}
      />
      <span
        className={`left-0 top-3 absolute bg-black w-full h-0.5 transition-all duration-300 ${
          isMenuOpen && "-rotate-45 -translate-y-1.5"
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;

import Image from "next/image";
import NavItem from "./NavbarItem/NavItem";
import Link from "next/link";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import Drawer from "./Drawer/Drawer";
import { NAVBAR_ITEMS } from "./navbar.constants";
import useNavbar from "./useNavbar";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useNavbar();

  return (
    <div className="top-0 z-50 sticky dark:bg-neutral-900 dark:text-white">
      <div className="flex items-center">
        <div className="flex justify-center items-center gap-5 md:gap-10 bg-white dark:bg-neutral-900 md:px-20 lg:px-40 w-full h-20 dark:text-white">
          <div className="hidden md:flex md:gap-10">
            {NAVBAR_ITEMS.slice(0, 2).map((item, index) => {
              return <NavItem key={index} name={item.name} url={item.url} />;
            })}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex justify-center items-center w-1/6">
            <i className="text-gray-600 dark:text-neutral-300 text-lg bx bx-envelope" />
          </div>
          <Link href="/" className="max-w-[200px] md:max-w-[250px]">
            <Image
              src={`/assets/images/logo-white.png`}
              alt="logo"
              width={500}
              height={500}
              priority
              className="hidden dark:block w-full object-contain"
            />
            <Image
              src={`/assets/images/logo-v2.png`}
              alt="logo"
              width={500}
              height={500}
              priority
              className="dark:hidden block w-full object-contain"
            />
          </Link>
          <div className="md:hidden flex justify-center items-center w-1/6">
            <HamburgerMenu
              isMenuOpen={isDrawerOpen}
              setIsMenuOpen={setIsDrawerOpen}
            />
          </div>

          <div className="hidden md:flex md:gap-10">
            {NAVBAR_ITEMS.slice(2, 4).map((item, index) => {
              return <NavItem key={index} name={item.name} url={item.url} />;
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isDrawerOpen && <Drawer setIsDrawerOpen={setIsDrawerOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

import { useRouter } from "next/router";
import { NAVBAR_ITEMS } from "../mainLayout.constants";
import Link from "next/link";
import cn from "@/utils/cn";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import { useEffect, useState } from "react";
import MainLayoutNavbarDrawer from "./MainLayoutNavbarDrawer";
import ThemeToggle from "@/components/common/ThemeToggle";

const MainLayoutNavbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const isActive = (href: string) => {
    return (
      (router.pathname.startsWith(href) && href !== "/") ||
      (router.pathname === "/" && href === "/")
    );
  };

  return (
    <>
      <nav className="top-2 md:top-5 z-50 sticky xl:p-0 px-3">
        <div
          className={cn(
            "flex justify-between items-center gap-10 bg-white dark:bg-[var(--color-secondary-dark)] shadow mb-5 p-3 border border-neutral-200 dark:border-neutral-700 rounded-xl w-full md:w-full xl:w-1/2",
            "sticky md:left-5",
            scrolled && "dark:bg-black/40! bg-white! backdrop-blur-xl"
          )}
        >
          {/* Navbar Brand */}
          <Link href="/">
            <span className="font-bold text-black dark:text-white text-2xl">
              KCR
            </span>
          </Link>

          <div className="flex items-center space-x-3">
            {/* NavItem */}
            <div className="hidden md:flex items-center space-x-4">
              {NAVBAR_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className={cn(
                    "text-neutral-700 hover:text-black dark:hover:text-[var(--color-neon)] dark:text-neutral-300 transition-colors duration-300",
                    isActive(item.url) &&
                      "text-black dark:text-[var(--color-neon)] font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <HamburgerMenu
                isMenuOpen={isDrawerOpen}
                setIsMenuOpen={setIsDrawerOpen}
              />
            </div>
          </div>
        </div>
      </nav>
      {isDrawerOpen && (
        <MainLayoutNavbarDrawer setIsDrawerOpen={setIsDrawerOpen} />
      )}
    </>
  );
};

export default MainLayoutNavbar;

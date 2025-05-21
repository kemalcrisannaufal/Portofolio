/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import NavItem from "./NavbarItem/NavItem";
import Link from "next/link";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import { useState } from "react";
import Drawer from "./Drawer/Drawer";
import { signOut, useSession } from "next-auth/react";
import { NAVBAR_ITEMS } from "./navbar.constant";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const session: any = useSession();
  return (
    <div className="top-0 z-50 sticky">
      {session.status === "authenticated" && (
        <div className="flex justify-end bg-gray-200 pr-5 w-full h-max">
          <button onClick={() => signOut()} className="py-2 cursor-pointer">
            <p className="">Logout</p>
          </button>
        </div>
      )}
      <div className="flex justify-center items-center gap-5 md:gap-10 bg-white md:px-20 lg:px-40 w-full h-20">
        <div className="hidden md:flex md:gap-10">
          {NAVBAR_ITEMS.slice(0, 2).map((item, index) => {
            return <NavItem key={index} name={item.name} url={item.url} />;
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-center items-center w-1/6">
          <i className="text-neutral-600 text-lg bx bx-envelope" />
        </div>
        <Link href="/" className="w-2/3 md:w-1/5">
          <Image
            src={"/assets/images/logo-v2.png"}
            alt="logo"
            width={500}
            height={500}
            priority
            className="w-full object-contain"
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

      {isDrawerOpen && (
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      )}
    </div>
  );
};

export default Navbar;

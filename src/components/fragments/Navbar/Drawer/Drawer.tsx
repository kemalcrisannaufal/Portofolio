import Image from "next/image";
import Link from "next/link";
import { NAVBAR_ITEMS } from "../navbar.constant";

interface Proptypes {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Drawer = (props: Proptypes) => {
  const { isDrawerOpen, setIsDrawerOpen } = props;
  return (
    <div
      className={`lg:hidden left-0 top-0 fixed flex flex-col gap-4 p-5 w-4/5 min-h-screen transform bg-white z-50 ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="flex justify-center items-center mb-5">
        <Link href="/" onClick={() => setIsDrawerOpen(false)}>
          <Image
            src={"/assets/images/logo-v2.png"}
            alt="logo"
            width={500}
            height={500}
            priority
            className="w-full object-contain"
          />
        </Link>
      </div>
      {NAVBAR_ITEMS.map((item, index) => {
        return (
          <Link
            href={item.url}
            key={index}
            className="flex justify-between mb-3 px-5"
            onClick={() => setIsDrawerOpen(false)}
          >
            <p className="font-libre font-light text-2xl">{item.name}</p>
            <i className="bx-chevron-right text-3xl bx" />
          </Link>
        );
      })}
    </div>
  );
};

export default Drawer;

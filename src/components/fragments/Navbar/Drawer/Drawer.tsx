import Image from "next/image";
import Link from "next/link";
import { NAVBAR_ITEMS } from "../navbar.constants";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Proptypes {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Drawer = (props: Proptypes) => {
  const { setIsDrawerOpen } = props;
  const router = useRouter();
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ x: "-100%", transition: { duration: 0.5 } }}
      className="lg:hidden top-0 left-0 z-50 fixed flex flex-col gap-4 bg-white dark:bg-neutral-800 p-5 w-4/5 min-h-screen"
    >
      <div className="flex justify-center items-center mb-5">
        <Link href="/" onClick={() => setIsDrawerOpen(false)}>
          <Image
            src={"/assets/images/logo-v2.png"}
            alt="logo"
            width={500}
            height={500}
            priority
            className="dark:hidden w-full object-contain"
          />
          <Image
            src={"/assets/images/logo-white.png"}
            alt="logo"
            width={500}
            height={500}
            priority
            className="hidden dark:block w-full object-contain"
          />
        </Link>
      </div>
      {NAVBAR_ITEMS.map((item, index) => {
        return (
          <Link
            href={item.url}
            key={index}
            className={`flex justify-between mb-1 px-5 py-2 rounded-md ${
              router.pathname.startsWith(item.url)
                ? "bg-gray-200  dark:bg-neutral-600"
                : ""
            }`}
            onClick={() => setIsDrawerOpen(false)}
          >
            <p className="font-libre font-light text-2xl">{item.name}</p>
            <i className="bx-chevron-right text-3xl bx" />
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Drawer;

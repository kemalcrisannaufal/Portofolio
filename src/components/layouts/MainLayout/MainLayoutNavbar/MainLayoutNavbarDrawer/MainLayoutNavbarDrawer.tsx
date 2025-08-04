import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { NAVBAR_ITEMS } from "../../mainLayout.constants";
import cn from "@/utils/cn";
import { FaChevronRight } from "react-icons/fa";

interface Proptypes {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainLayoutNavbarDrawer = (props: Proptypes) => {
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
      className="lg:hidden top-0 left-0 z-50 fixed flex flex-col gap-4 bg-[var(--color-secondary-dark)] p-7 w-4/5 min-h-screen text-white"
    >
      <div className="flex justify-center items-center mb-5">
        <Link href="/" onClick={() => setIsDrawerOpen(false)}>
          <span className="font-bold text-4xl">
            Kemal <span className="text-neon">Crisannaufal</span>
          </span>
        </Link>
      </div>

      {NAVBAR_ITEMS.map((item) => {
        return (
          <Link
            aria-label={`Link-${item.name}`}
            href={item.url}
            key={`drawer-item-${item.name}`}
            className={cn(
              "flex justify-between items-center mb-1 px-5 py-2 rounded-md",
              router.pathname.startsWith(item.url) &&
                "bg-[var(--color-primary-dark)] text-[var(--color-neon)]"
            )}
            onClick={() => setIsDrawerOpen(false)}
          >
            <p className="text-2xl">{item.name}</p>
            <FaChevronRight className="text-xl" />
          </Link>
        );
      })}
    </motion.div>
  );
};

export default MainLayoutNavbarDrawer;

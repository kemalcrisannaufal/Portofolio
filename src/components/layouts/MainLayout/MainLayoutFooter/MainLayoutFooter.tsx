import Link from "next/link";
import { useRouter } from "next/router";
import { NAVBAR_ITEMS } from "../mainLayout.constants";
import cn from "@/utils/cn";

const MainLayoutFooter = () => {
  const router = useRouter();
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center gap-4 p-5 border-gray-200 dark:border-neutral-700 border-t w-full text-gray-600 dark:text-neutral-200 text-xs sm:text-sm">
        <div className="flex gap-5">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className={cn(
                "hover:underline",
                router.pathname === item.url &&
                  "underline font-semibold text-neon"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <p>Copyright &copy; {year} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default MainLayoutFooter;

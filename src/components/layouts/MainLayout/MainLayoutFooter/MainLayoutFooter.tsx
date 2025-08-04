import Link from "next/link";
import { useRouter } from "next/router";
import { NAVBAR_ITEMS } from "../mainLayout.constants";
import cn from "@/utils/cn";

const MainLayoutFooter = () => {
  const router = useRouter();
  const year = new Date().getFullYear();

  const isActive = (href: string) => {
    return (
      (router.pathname.startsWith(href) && href !== "/") ||
      (router.pathname === "/" && href === "/")
    );
  };

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
                isActive(item.url) &&
                  "underline font-semibold dark:text-[var(--color-neon)] text-black"
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

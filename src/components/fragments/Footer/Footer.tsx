import Link from "next/link";
import { MENU } from "./Footer.constants";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center dark:bg-neutral-900 w-full">
      <div className="flex flex-col items-center gap-4 p-5 border-gray-200 dark:border-neutral-500 border-t w-full md:w-1/2 font-libre text-gray-600 dark:text-neutral-200 text-xs sm:text-sm">
        <div className="flex gap-5">
          {MENU.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`hover:underline ${
                router.pathname.startsWith(item.href)
                  ? "underline font-semibold"
                  : ""
              }`}
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

export default Footer;

import Link from "next/link";
import { useRouter } from "next/router";

interface Proptypes {
  name: string;
  url: string;
}

const NavbarItem = (props: Proptypes) => {
  const { name, url } = props;
  const router = useRouter();
  return (
    <Link href={url} className="p-3 focus:outline-none focus:ring-0">
      <p
        className={`font-pragati text-sm ${
          router.pathname.startsWith(url)
            ? "text-gray-800 dark:text-white font-medium"
            : "text-gray-600 hover:text-black dark:hover:text-gray-200 dark:text-neutral-400 font-light"
        }`}
      >
        {name.toUpperCase()}
      </p>
    </Link>
  );
};

export default NavbarItem;

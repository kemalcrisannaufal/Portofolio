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
        className={`font-pragati font-light  text-sm ${
          router.pathname === url
            ? "text-black dark:text-white font-bold"
            : "text-gray-600 hover:text-black dark:hover:text-gray-200 dark:text-neutral-400"
        }`}
      >
        {name.toUpperCase()}
      </p>
    </Link>
  );
};

export default NavbarItem;

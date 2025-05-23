import Link from "next/link";

interface Proptypes {
  name: string;
  url: string;
}

const NavbarItem = (props: Proptypes) => {
  const { name, url } = props;
  return (
    <Link href={url} className="p-3 focus:outline-none focus:ring-0">
      <p className="font-pragati font-light text-gray-700 hover:text-black dark:hover:text-gray-200 dark:text-neutral-300 text-sm">
        {name.toUpperCase()}
      </p>
    </Link>
  );
};

export default NavbarItem;

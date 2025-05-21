import Link from "next/link";

interface Proptypes {
  name: string;
  url: string;
}

const NavbarItem = (props: Proptypes) => {
  const { name, url } = props;
  return (
    <Link href={url} className="p-3">
      <p className="font-pragati font-light text-default-700 hover:text-black text-sm">
        {name.toUpperCase()}
      </p>
    </Link>
  );
};

export default NavbarItem;

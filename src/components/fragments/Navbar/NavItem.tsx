import Link from "next/link";

type Proptypes = {
  name: string;
  url: string;
};

const NavItem = (props: Proptypes) => {
  const { name, url } = props;
  return (
    <Link href={url} className="p-3 hover:text-neutral-600">
      <p className="font-mono font-thin text-md">{name.toUpperCase()}</p>
    </Link>
  );
};

export default NavItem;

import Link from "next/link";

type Proptypes = {
  name: string;
  url: string;
};

const NavItem = (props: Proptypes) => {
  const { name, url } = props;
  return (
    <Link href={url} className="p-3">
      <p className="font-pragati font-light text-neutral-700 hover:text-black text-sm">
        {name.toUpperCase()}
      </p>
    </Link>
  );
};

export default NavItem;

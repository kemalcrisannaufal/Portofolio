import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

const ProjectBox = ({
  className,
  href,
  image,
  name,
  width = 50,
  height = 50,
}: {
  className?: string;
  href: string;
  image?: string;
  name: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 h-[50px] font-bold text-neutral-600 hover:text-black dark:text-white text-2xl whitespace-nowrap transition-colors duration-300"
      key={"yatta-1"}
    >
      {image && (
        <Image
          src={`/assets/images/projects/${image}`}
          alt={`logo-${name}`}
          width={width}
          height={height}
          className={cn("dark:filter-none invert filter", className)}
        />
      )}
      {name}
    </Link>
  );
};

export const PROJECTS = [
  <ProjectBox
    image="yatta.svg"
    name="Yatta!"
    key={"yatta-1"}
    href="https://yatta-iota.vercel.app/"
  />,
  <ProjectBox
    image="bantuin.webp"
    width={75}
    height={75}
    name="Bantuin"
    key={"bantuin-1"}
    className="filter-none!"
    href="https://bantuin-by-kcr.vercel.app/"
  />,
  <ProjectBox
    image="showpedia.svg"
    name="Showpedia"
    key={"showpedia-1"}
    href="https://showpedia-by-kcr.vercel.app/"
  />,
  <ProjectBox
    image="acara.svg"
    width={75}
    height={75}
    name="Acara"
    key={"acara-1"}
    className="filter-none!"
    href="https://acara-app.vercel.app/"
  />,
  <ProjectBox
    name="Naike"
    key={"naike-1"}
    href="https://naike-by-kcr.vercel.app/"
  />,

  <ProjectBox
    image="yatta.svg"
    name="Yatta!"
    key={"yatta-2"}
    href="https://yatta-iota.vercel.app/"
  />,
  <ProjectBox
    image="bantuin.webp"
    width={75}
    height={75}
    name="Bantuin"
    key={"bantuin-2"}
    className="filter-none!"
    href="https://bantuin-by-kcr.vercel.app/"
  />,
  <ProjectBox
    image="showpedia.svg"
    name="Showpedia"
    key={"showpedia-2"}
    href="https://showpedia-by-kcr.vercel.app/"
  />,
  <ProjectBox
    image="acara.svg"
    width={75}
    height={75}
    name="Acara"
    key={"acara-2"}
    className="filter-none!"
    href="https://acara-app.vercel.app/"
  />,
  <ProjectBox
    name="Naike"
    key={"naike-2"}
    href="https://naike-by-kcr.vercel.app/"
  />,
];

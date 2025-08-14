import Image from "next/image";
import { ProjectBox } from "./project.constants";

const PROJECTS = [
  <ProjectBox image="yatta.svg" name="Yatta!" key={"yatta-1"} />,
  <div className="flex items-center gap-2" key={"yatta-1"}>
    <Image
      src={"/assets/images/projects/yatta.svg"}
      alt=""
      width={50}
      height={50}
      className="dark:filter-none invert filter"
    />
    Yatta!
  </div>,
  <div className="flex items-center gap-2" key={"yatta"}>
    <Image
      src={"/assets/images/projects/bantuin.webp"}
      alt=""
      width={50}
      height={50}
      className="dark:filter-none invert filter"
    />
    Bantuin
  </div>,
  <div className="flex items-center gap-2" key={"yatta"}>
    <Image
      src={"/assets/images/projects/showpedia.svg"}
      alt=""
      width={50}
      height={50}
      className="dark:filter-none invert filter"
    />
    Showpedia!
  </div>,
  <div className="flex items-center gap-2" key={"yatta"}>
    <Image
      src={"/assets/images/projects/acara.svg"}
      alt=""
      width={50}
      height={50}
      className="dark:filter-none invert filter"
    />
    Acara
  </div>,
  "Naike",
  <div className="flex items-center gap-2" key={"yatta"}>
    <Image
      src={"/assets/images/projects/yatta.svg"}
      alt=""
      width={50}
      height={50}
      className="dark:filter-none invert filter"
    />
    Yatta!
  </div>,
  "Bantuin",
  <div className="flex items-center gap-2" key={"yatta"}>
    <Image
      src={"/assets/images/projects/showpedia.svg"}
      alt=""
      width={50}
      height={50}
      className="dark:filter-none invert filter"
    />
    Showpedia!
  </div>,
  <div className="flex items-center gap-2" key={"yatta"}>
    <Image
      src={"/assets/images/projects/showpedia.svg"}
      alt=""
      width={50}
      height={50}
      className="dark:filter-none invert filter"
    />
    Acara
  </div>,
  "Naike",
];

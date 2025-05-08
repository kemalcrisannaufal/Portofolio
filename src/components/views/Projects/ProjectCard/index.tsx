import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Proptypes = {
  project: Project;
};
const ProjectCard = (props: Proptypes) => {
  const { project } = props;
  const { push } = useRouter();
  return (
    <div
      key={project.id}
      className="md:p-2 border-neutral-100 rounded overflow-hidden hover:scale-105 hover:transition duration-300"
    >
      <Link
        href={`/projects/${project.id}`}
        className="group block relative rounded-t w-full h-48 overflow-hidden cursor-pointer"
      >
        <Image
          src={project.thumbnail}
          width={500}
          height={500}
          alt={project.name}
          priority
          className="w-full h-full object-cover"
        />

        <div className="hidden z-10 absolute inset-0 group-hover:flex justify-center items-center bg-black/50 w-full h-full duration-300 group-hover:duration-500 group-hover:transform">
          <h2 className="mr-2 font-libre text-white text-lg">View Project</h2>
          <i className="bx-right-arrow-alt text-white text-2xl bx" />
        </div>
      </Link>

      <div className="flex flex-col mt-2 h-28">
        <div className="flex-grow">
          <h2 className="mb-1 font-libre text-lg">{project.name}</h2>
          <p className="font-libre text-neutral-600 text-xs line-clamp-2 leading-5">
            {project.description}
          </p>
        </div>
        <button
          className="relative flex justify-between items-center mt-3 w-full cursor-pointer"
          onClick={() => push(`/projects/${project.id}`)}
        >
          <span className="font-libre text-sm">See More</span>
          <i className="bx-right-arrow-alt text-xl bx" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

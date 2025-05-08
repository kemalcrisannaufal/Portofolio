import { techStacks } from "@/components/common/constant/techStack";
import { Project } from "@/types/project.type";
import Image from "next/image";
import { useState } from "react";

type Proptypes = {
  project: Project;
  isLoading: boolean;
};

const ProjectDetailView = (props: Proptypes) => {
  const { project } = props;
  const images = [project.thumbnail, ...(project?.images || [])];
  const [showedImage, setShowedImage] = useState(0);
  return (
    <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
      <h1 className="font-libre font-thin text-4xl text-center">
        {project.name && project.name.toUpperCase()}
      </h1>
      <h2 className="mt-3 font-libre font-thin text-neutral-500 text-center">
        {project.category}
      </h2>
      <h3 className="mt-3 font-libre font-thin text-neutral-500 text-center">
        {project.description}
      </h3>

      <div className="flex lg:flex-row flex-col-reverse gap-2 mt-5 lg:h-[75vh]">
        <div className="scrollbar-hidden flex lg:flex-col gap-3 pb-2 w-full lg:w-[15%] overflow-x-auto lg:overflow-y-auto">
          {images.map((image, index) => (
            <button
              key={image}
              onMouseEnter={() => setShowedImage(index)}
              className="flex-shrink-0 shadow border border-neutral-300 rounded w-28 h-28 overflow-hidden"
            >
              <Image
                src={image}
                alt={project.name || ""}
                width={500}
                height={500}
                priority
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center items-center w-full lg:w-[85%] h-[300px] lg:h-full">
          <Image
            src={images[showedImage]}
            alt={project.name || ""}
            width={800}
            height={800}
            priority
            className="rounded w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-10 w-full">
        <div>
          <h3 className="font-libre text-lg">Details</h3>
          <ul className="list-disc">
            {project?.details?.map((detail, index) => (
              <li
                key={index}
                className="mb-1 ml-5 font-libre text-neutral-700 text-sm"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mt-5 font-libre text-lg">Links</h3>
          <div className="flex gap-5 my-3">
            {project.github !== "" && (
              <a
                href={project.github}
                className={`hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer`}
              >
                <div className="flex items-center">
                  <i className="mr-2 bx bxl-github" />
                  <h3 className="font-libre">Github</h3>
                </div>
              </a>
            )}
            {project.link !== "" && (
              <a
                href={project.link}
                className={`hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer `}
              >
                <div className="flex items-center">
                  <i className="mr-2 bx bx-link" />
                  <h3 className="font-libre">Visit Project</h3>
                </div>
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="mt-5 font-libre text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
            {project?.techStacks?.map((stack, index) => {
              const techInfo = techStacks.find((item) => item.name === stack);
              return (
                <div
                  key={index}
                  className="flex items-center bg-neutral-200 px-2 py-1 rounded"
                >
                  {techInfo && (
                    <techInfo.icon className={`${techInfo.className} mr-2`} />
                  )}
                  <span className="font-libre">{techInfo?.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;

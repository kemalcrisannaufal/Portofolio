import { TECH_STACK } from "@/constants/list.constanst";

import Image from "next/image";
import useProjectDetail from "./useProjectDetail";
import ProjectDetailSkeleton from "./ProjectDetailSkeleton";
import Link from "next/link";

const ProjectDetail = () => {
  const { dataProject, isLoadingProject, selectedImage, setSelectedImage } =
    useProjectDetail();
  const images = [dataProject?.thumbnail, ...(dataProject?.images || [])];

  return (
    <>
      {isLoadingProject ? (
        <ProjectDetailSkeleton />
      ) : (
        dataProject && (
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl text-center">
              {dataProject?.name && dataProject?.name.toUpperCase()}
            </h1>
            <h2 className="mt-1 font-medium text-gray-500 dark:text-neutral-300 text-lg text-center">
              {dataProject?.category}
            </h2>
            <h3 className="mt-2.5 text-neutral-800 dark:text-neutral-300 text-center">
              {dataProject?.description}
            </h3>

            <div className="flex lg:flex-row flex-col-reverse gap-2 mt-5 h-[300px] lg:h-[400px]">
              <div className="flex lg:flex-col items-center gap-3 pb-2 w-full lg:w-[15%] overflow-x-auto lg:overflow-y-auto hide-scrollbar">
                {images.map((image, index) => (
                  <button
                    key={image}
                    onMouseEnter={() => setSelectedImage(index)}
                    className="flex-shrink-0 shadow border border-gray-300 dark:border-neutral-700 rounded w-32 h-20 overflow-hidden"
                  >
                    <Image
                      src={image!}
                      alt={dataProject?.name || ""}
                      width={500}
                      height={500}
                      priority
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              <div className="w-full lg:w-[85%] h-[200px] lg:h-full">
                <Image
                  src={images[selectedImage]!}
                  alt={dataProject?.name || ""}
                  width={800}
                  height={800}
                  priority
                  className="rounded w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-10 w-full">
              <div>
                <h3 className="font-semibold text-xl">Details</h3>
                <ul className="list-disc">
                  {dataProject?.details?.map((detail, index) => (
                    <li
                      key={index}
                      className="mb-1 ml-5 text-gray-700 dark:text-neutral-300"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mt-5 font-semibold text-xl">Links</h3>
                <div className="flex gap-5 my-3">
                  {dataProject?.github !== "" && (
                    <Link
                      href={dataProject!.github!}
                      className={`hover:bg-black py-2 px-3 border dark:border-neutral-600 hover:text-white text-sm md:text-base cursor-pointer dark:text-neutral-300 dark:hover:bg-[var(--color-neon)] rounded-lg dark:hover:text-black transition-colors duration-300 ease-in-out`}
                    >
                      <div className="flex items-center">
                        <i className="mr-2 bx bxl-github" />
                        <h3 className="">Github</h3>
                      </div>
                    </Link>
                  )}
                  {dataProject.link !== "" && (
                    <Link
                      href={dataProject!.link!}
                      className={`hover:bg-black py-2 px-3 border dark:border-neutral-600 hover:text-white text-sm md:text-base cursor-pointer dark:text-neutral-300 dark:hover:bg-[var(--color-neon)] rounded-lg dark:hover:text-black transition-colors duration-300 ease-in-out`}
                    >
                      <div className="flex items-center">
                        <i className="mr-2 bx bx-link" />
                        <h3 className="">Visit Project</h3>
                      </div>
                    </Link>
                  )}
                </div>
              </div>

              <div>
                <h3 className="mt-5 font-semibold text-xl">Tech Stack</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
                  {dataProject?.techStacks?.map((stack, index) => {
                    const techInfo = TECH_STACK.find(
                      (item) => item.name === stack
                    );
                    return (
                      <div
                        key={index}
                        className="flex items-center bg-gray-200 dark:bg-[var(--color-secondary-dark)] p-2 border border-neutral-200 dark:border-neutral-700 rounded dark:text-neutral-300"
                      >
                        {techInfo && (
                          <techInfo.icon
                            className={`${techInfo.className} mr-2`}
                          />
                        )}
                        <span className="">{techInfo?.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ProjectDetail;

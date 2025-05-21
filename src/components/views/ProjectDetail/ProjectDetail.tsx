import { TECH_STACK } from "@/constants/list.constanst";

import Image from "next/image";
import useProjectDetail from "./useProjectDetail";
import ProjectDetailSkeleton from "./ProjectDetailSkeleton";

const ProjectDetail = () => {
  const { dataProject, isLoadingProject, selectedImage, setSelectedImage } =
    useProjectDetail();
  const images = [dataProject?.thumbnail, ...(dataProject?.images || [])];

  return (
    <>
      {isLoadingProject ? (
        <ProjectDetailSkeleton />
      ) : (
        <div>
          <h1 className="font-libre font-thin text-2xl lg:text-3xl text-center">
            {dataProject?.name && dataProject?.name.toUpperCase()}
          </h1>
          <h2 className="mt-3 font-libre font-thin text-neutral-500 text-center">
            {dataProject?.category}
          </h2>
          <h3 className="mt-3 font-libre font-thin text-neutral-500 text-center">
            {dataProject?.description}
          </h3>

          <div className="flex lg:flex-row flex-col-reverse gap-2 mt-5 lg:h-[75vh]">
            <div className="scrollbar-hidden flex lg:flex-col gap-3 pb-2 w-full lg:w-[15%] overflow-x-auto lg:overflow-y-auto">
              {images.map((image, index) => (
                <button
                  key={image}
                  onMouseEnter={() => setSelectedImage(index)}
                  className="flex-shrink-0 shadow border border-gray-300 rounded w-28 h-20 overflow-hidden"
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

            <div className="flex justify-center items-center w-full lg:w-[85%] h-[25%] lg:h-full">
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
              <h3 className="font-libre text-lg">Details</h3>
              <ul className="list-disc">
                {dataProject?.details?.map((detail, index) => (
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
                {dataProject?.github !== "" && (
                  <a
                    href={dataProject?.github}
                    className={`hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer`}
                  >
                    <div className="flex items-center">
                      <i className="mr-2 bx bxl-github" />
                      <h3 className="font-libre">Github</h3>
                    </div>
                  </a>
                )}
                {dataProject?.link !== "" && (
                  <a
                    href={dataProject?.link}
                    className={`hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer `}
                  >
                    <div className="flex items-center">
                      <i className="mr-2 bx bx-link" />
                      <h3 className="font-libre">Visit dataProject</h3>
                    </div>
                  </a>
                )}
              </div>
            </div>

            <div>
              <h3 className="mt-5 font-libre text-lg">Tech Stack</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
                {dataProject?.techStacks?.map((stack, index) => {
                  const techInfo = TECH_STACK.find(
                    (item) => item.name === stack
                  );
                  return (
                    <div
                      key={index}
                      className="flex items-center bg-gray-200 px-2 py-1 rounded"
                    >
                      {techInfo && (
                        <techInfo.icon
                          className={`${techInfo.className} mr-2`}
                        />
                      )}
                      <span className="font-libre">{techInfo?.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;

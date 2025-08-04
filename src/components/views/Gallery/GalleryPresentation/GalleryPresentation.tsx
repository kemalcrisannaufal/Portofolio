import { IGallery } from "@/types/gallery";
import useGalleryPresentation from "./useGalleryPresentation";
import PresentationVideo from "./PresentationVideo";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fadeInUp } from "@/lib/animations/motionVariants";
import { motion } from "framer-motion";
const GalleryPresentation = () => {
  const {
    dataGalleryPresentation,
    isLoadingGalleryPresentation,
    idxVideoShow,
    handleChangeVideoShow,
  } = useGalleryPresentation();

  return (
    <>
      <h2 className="font-medium text-lg lg:text-xl">Presentation</h2>
      <p>A collection of my past presentations — from class projects.</p>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3"
      >
        <button
          aria-label="btn-prev"
          onClick={() => handleChangeVideoShow("left")}
          disabled={idxVideoShow[0] === 0}
          className="hidden lg:block text-neutral-600 disabled:text-neutral-300 dark:disabled:text-neutral-800 dark:text-white cursor-pointer disabled:cursor-default"
        >
          <FaChevronLeft className="text-2xl" />
        </button>

        {isLoadingGalleryPresentation ? (
          <div className="gap-4 grid grid-cols-2 mt-3 w-full">
            {Array.from({ length: 2 }).map((_, index) => (
              <PresentationVideo
                key={index}
                videoId=""
                title=""
                isLoading={true}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="hidden gap-4 lg:grid grid-cols-2 mt-3 w-full">
              {dataGalleryPresentation
                ?.slice(idxVideoShow[0], idxVideoShow[1])
                .map((presentation: IGallery) => (
                  <PresentationVideo
                    key={presentation.id}
                    videoId={`${presentation.videoId}`}
                    title={`${presentation.title}`}
                  />
                ))}
            </div>
            <div className="lg:hidden flex gap-3 mt-3 px-1 overflow-x-auto scroll-snap-x snap-mandatory scrollbar-hide">
              {dataGalleryPresentation?.map((presentation: IGallery) => (
                <div key={presentation.id} className="w-64 snap-start shrink-0">
                  <PresentationVideo
                    key={presentation.id}
                    videoId={`${presentation.videoId}`}
                    title={`${presentation.title}`}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <button
          aria-label="btn-next"
          onClick={() => handleChangeVideoShow("right")}
          disabled={idxVideoShow[1] >= dataGalleryPresentation?.length}
          className="hidden lg:block text-neutral-600 disabled:text-neutral-300 dark:disabled:text-neutral-800 dark:text-white cursor-pointer disabled:cursor-default"
        >
          <FaChevronRight className="text-2xl" />
        </button>
      </motion.div>
    </>
  );
};

export default GalleryPresentation;

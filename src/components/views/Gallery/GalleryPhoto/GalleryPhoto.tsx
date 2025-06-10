import Image from "next/image";
import useGalleryPhoto from "./useGalleryPhoto";
import { IGallery } from "@/types/gallery";
import { AnimatePresence, motion } from "framer-motion";

const GalleryPhoto = () => {
  const {
    dataGalleryPhoto,
    isLoadingGalleryPhoto,
    clearPhotoIndex,
    setClearPhotoIndex,
    resetClearPhotoIndex,
  } = useGalleryPhoto();

  return (
    <div className="mt-5">
      <h2 className="font-libre font-semibold">Photos</h2>
      <p className="font-libre">
        Just some snapshots from my life — the serious, the random, and
        everything in between.
      </p>

      <div className="gap-2 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[10px] mt-5">
        {!isLoadingGalleryPhoto
          ? dataGalleryPhoto?.map((item: IGallery, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                key={item.id}
                className={`relative bg-gray-300 dark:bg-neutral-700 rounded-xl overflow-hidden hover:scale-[102%] transition-all duration-300 ease-in-out ${
                  index % 2 === 0 ? "row-span-16" : "row-span-10"
                } ${clearPhotoIndex === index ? "blur-none" : "blur-[1.5px]"} `}
                onMouseEnter={() => setClearPhotoIndex(index)}
                onMouseLeave={resetClearPhotoIndex}
              >
                <Image
                  src={`${item.imageUrl}`}
                  width={500}
                  height={500}
                  alt={""}
                  className="w-full h-full object-cover"
                />
                <AnimatePresence>
                  {clearPhotoIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      }}
                      exit={{ opacity: 0 }}
                      className="bottom-0 left-0 z-10 absolute bg-gradient-to-t from-black/50 to-black/75 p-3 w-full text-white"
                    >
                      <p className="font-semibold text-sm md:text-lg line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs md:text-sm line-clamp-2">
                        {item.location}
                      </p>
                      <p className="text-xs md:text-sm line-clamp-1">
                        {item.date}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="hidden dark:block top-0 left-0 z-10 absolute bg-gradient-to-b from-black/5 via-black/15 to-black/45 rounded-xl w-full h-full" />
              </motion.div>
            ))
          : Array(9)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`bg-gray-300 dark:bg-neutral-700 rounded-xl overflow-hidden ${
                    index % 2 === 0 ? "row-span-16" : "row-span-10"
                  }`}
                />
              ))}
      </div>
    </div>
  );
};

export default GalleryPhoto;

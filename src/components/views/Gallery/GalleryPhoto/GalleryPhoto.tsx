import Image from "next/image";
import useGalleryPhoto from "./useGalleryPhoto";
import { IGallery } from "@/types/gallery";
import { motion } from "framer-motion";

const GalleryPhoto = () => {
  const { dataGalleryPhoto, isLoadingGalleryPhoto } = useGalleryPhoto();
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
                className={`relative bg-gray-300 dark:bg-neutral-700 rounded-xl overflow-hidden ${
                  index % 2 === 0 ? "row-span-16" : "row-span-10"
                }`}
              >
                <Image
                  src={`${item.imageUrl}`}
                  width={500}
                  height={500}
                  alt={""}
                  className="w-full h-full object-cover"
                />
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

import galleryServices from "@/services/gallery/gallery.services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useGalleryPhoto = () => {
  const [clearPhotoIndex, setClearPhotoIndex] = useState(-1);

  const resetClearPhotoIndex = () => {
    setClearPhotoIndex(-1);
  };
  const getGallery = async () => {
    const { data } = await galleryServices.getGalleryByCategory("photo");
    return data.data;
  };

  const { data: dataGalleryPhoto, isLoading: isLoadingGalleryPhoto } = useQuery(
    {
      queryKey: ["GalleryPhoto"],
      queryFn: getGallery,
      enabled: true,
    }
  );

  return {
    dataGalleryPhoto,
    isLoadingGalleryPhoto,
    clearPhotoIndex,
    setClearPhotoIndex,
    resetClearPhotoIndex,
  };
};

export default useGalleryPhoto;

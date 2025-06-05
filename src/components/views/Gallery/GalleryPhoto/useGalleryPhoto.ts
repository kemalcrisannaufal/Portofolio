import galleryServices from "@/services/gallery/gallery.services";
import { useQuery } from "@tanstack/react-query";

const useGalleryPhoto = () => {
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

  return { dataGalleryPhoto, isLoadingGalleryPhoto };
};

export default useGalleryPhoto;

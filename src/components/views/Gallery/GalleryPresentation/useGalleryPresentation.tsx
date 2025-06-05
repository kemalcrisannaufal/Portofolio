import galleryServices from "@/services/gallery/gallery.services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useGalleryPresentation = () => {
  const [idxVideoShow, setIdxVideoShow] = useState([0, 2]);

  const getGallery = async () => {
    const { data } = await galleryServices.getGalleryByCategory("presentation");
    return data.data;
  };

  const {
    data: dataGalleryPresentation,
    isLoading: isLoadingGalleryPresentation,
  } = useQuery({
    queryKey: ["GalleryPresentation"],
    queryFn: getGallery,
    enabled: true,
  });

  const handleChangeVideoShow = (direction: "left" | "right") => {
    if (direction === "left") {
      if (idxVideoShow[0] < 2) return;
      setIdxVideoShow([idxVideoShow[0] - 2, idxVideoShow[1] - 2]);
    } else if (direction === "right") {
      if (idxVideoShow[1] + 2 >= dataGalleryPresentation.length + 2) return;
      setIdxVideoShow([idxVideoShow[0] + 2, idxVideoShow[1] + 2]);
    }
  };

  return {
    dataGalleryPresentation,
    isLoadingGalleryPresentation,
    idxVideoShow,
    setIdxVideoShow,
    handleChangeVideoShow,
  };
};

export default useGalleryPresentation;

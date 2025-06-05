import instance from "@/lib/axios/instance";
import endpoint from "../endpoint.constants";

const galleryServices = {
  getGalleryByCategory: (category: string) =>
    instance.get(`${endpoint.GALLERY}/${category}`),
};

export default galleryServices;

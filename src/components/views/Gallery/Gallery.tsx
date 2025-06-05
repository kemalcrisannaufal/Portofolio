import Title from "@/components/ui/Title";
import GalleryPresentation from "./GalleryPresentation";
import GalleryPhoto from "./GalleryPhoto";

const Gallery = () => {
  return (
    <div className="dark:text-neutral-300">
      <Title>Gallery</Title>
      <GalleryPresentation />
      <GalleryPhoto />
    </div>
  );
};

export default Gallery;

import GalleryPresentation from "./GalleryPresentation";
import GalleryPhoto from "./GalleryPhoto";

const Gallery = () => {
  return (
    <div className="dark:text-neutral-300">
      <h1 className="font-semibold dark:text-white text-2xl">Gallery</h1>
      <GalleryPresentation />
      <GalleryPhoto />
    </div>
  );
};

export default Gallery;

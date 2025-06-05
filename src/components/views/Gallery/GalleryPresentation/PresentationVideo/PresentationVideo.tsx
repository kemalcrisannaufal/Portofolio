import usePresentationVideo from "./usePresentationVideo";
import { AiFillPlayCircle } from "react-icons/ai";

interface Proptypes {
  videoId: string;
  title: string;
  isLoading?: boolean;
}

const PresentationVideo = (props: Proptypes) => {
  const { videoId, title, isLoading = false } = props;
  const { playVideo, setPlayVideo } = usePresentationVideo();
  return (
    <div className="shadow-md rounded-xl h-74 overflow-hidden">
      {isLoading ? (
        <div className="flex justify-center items-center bg-gray-200 dark:bg-neutral-300 w-full h-full animate-pulse">
          <div className="border-4 border-t-transparent border-black rounded-full w-8 lg:w-10 h-8 lg:h-10 animate-spin" />
        </div>
      ) : playVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-full"
        />
      ) : (
        <div
          className="relative flex justify-center items-center bg-gradient-to-b from-neutral-900 to-neutral-700 w-full h-full cursor-pointer"
          onClick={() => setPlayVideo(true)}
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <AiFillPlayCircle className="text-white text-3xl lg:text-4xl" />
            <h4 className="font-libre text-md text-white md:text-lg lg:text-xl tracking-wider">
              KCR PRESENTATION
            </h4>
          </div>
          <div className="bottom-0 left-0 absolute flex items-center bg-black/50 p-5 w-full h-[25%] text-white">
            <p className="font-libre line-clamp-2">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresentationVideo;

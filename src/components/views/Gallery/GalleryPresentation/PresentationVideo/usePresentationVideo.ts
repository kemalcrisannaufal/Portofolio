import { useState } from "react";

const usePresentationVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return { playVideo, setPlayVideo };
};

export default usePresentationVideo;

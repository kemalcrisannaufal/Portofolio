import { useState } from "react";

const useCarouselProject = () => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const setPrev = (dataLength: number) => {
    setIdx((idx - 1 + dataLength) % dataLength);
    setDirection("left");
  };
  const setNext = (dataLength: number) => {
    setIdx((idx + 1) % dataLength);
    setDirection("right");
  };

  return { idx, setIdx, setPrev, setNext, direction };
};
export default useCarouselProject;

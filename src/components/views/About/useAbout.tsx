import { useState } from "react";

const useAbout = () => {
  const [isDetailOpen, setIsDetailOpen] = useState("");

  const handleOpenDetail = (id: string) => {
    if (id !== "") {
      setIsDetailOpen("loading");
      const timeout = setTimeout(() => {
        setIsDetailOpen(id);
      }, 300);
      return () => clearTimeout(timeout);
    }

    setIsDetailOpen("");
  };

  return { isDetailOpen, handleOpenDetail };
};

export default useAbout;

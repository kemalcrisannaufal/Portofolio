import { useState } from "react";

const useAbout = () => {
  const [openDetail, setOpenDetail] = useState("");

  return { openDetail, setOpenDetail };
};

export default useAbout;

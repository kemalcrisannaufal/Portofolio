import { useState } from "react";

const useNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return { isDrawerOpen, setIsDrawerOpen };
};

export default useNavbar;

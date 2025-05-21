import { useState } from "react";

const useBlogCard = () => {
  const [showProfileImage, setProfileImage] = useState(false);

  return { showProfileImage, setProfileImage };
};

export default useBlogCard;

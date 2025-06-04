import { useState } from "react";

const useAbout = () => {
  const [credentialUrl, setCredentialUrl] = useState("");

  const handleOpenDetail = (crendetialUrl: string) => {
    if (crendetialUrl !== "") {
      setCredentialUrl("loading");
      const timeout = setTimeout(() => {
        setCredentialUrl(crendetialUrl);
      }, 300);
      return () => clearTimeout(timeout);
    }

    setCredentialUrl("");
  };

  return { credentialUrl, handleOpenDetail };
};

export default useAbout;

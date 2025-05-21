import Image from "next/image";
import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  image?: string;
}

const AboutSubsectionBlock = (props: Proptypes) => {
  const { children, image } = props;
  return (
    <div>
      {image ? (
        <div className="flex items-center gap-3 mt-3 p-2 rounded">
          <div className="w-1/5">
            <Image
              src={image}
              width={500}
              height={500}
              alt={"image"}
              priority
              className="w-full"
            />
          </div>
          <div className="w-4/5">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default AboutSubsectionBlock;

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
          <div className="max-w-1/3 overflow-hidden">
            <div className="dark:bg-white rounded-full w-20 md:w-24 h-20 md:h-24 overflow-hidden">
              <Image
                src={image}
                width={500}
                height={500}
                alt={"image"}
                priority
                className="w-full h-full object-contain scale-75"
              />
            </div>
          </div>
          <div className="w-2/3">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default AboutSubsectionBlock;

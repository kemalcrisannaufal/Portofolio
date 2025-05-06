import Image from "next/image";
import { ReactNode } from "react";

type Proptypes = {
  image?: string;
  children: ReactNode;
};

const SubsectionBlock = (props: Proptypes) => {
  const { image, children } = props;
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

export default SubsectionBlock;

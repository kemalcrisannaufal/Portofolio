import PageHead from "@/components/common/PageHead";
import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  title: string;
}

const MainLayout = (props: Proptypes) => {
  const { children, title } = props;
  return (
    <>
      <PageHead title={title} />
      <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20 3xl:container">
        {children}
      </div>
    </>
  );
};

export default MainLayout;

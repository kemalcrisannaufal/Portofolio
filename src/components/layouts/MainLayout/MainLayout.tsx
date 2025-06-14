import PageHead from "@/components/common/PageHead";
import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  description?: string;
  title: string;
}

const MainLayout = (props: Proptypes) => {
  const { children, description, title } = props;
  return (
    <>
      <PageHead title={title} description={description} />
      <div className="dark:bg-neutral-900 px-10 md:px-20 lg:px-24 xl:px-48 pb-10 xl:pb-16 animate-gradient-x -900 3xl:container">
        {children}
      </div>
    </>
  );
};

export default MainLayout;

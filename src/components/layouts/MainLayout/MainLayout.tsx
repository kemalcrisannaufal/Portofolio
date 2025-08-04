import PageHead from "@/components/common/PageHead";
import { ReactNode } from "react";
import MainLayoutNavbar from "./MainLayoutNavbar";
import MainLayoutFooter from "./MainLayoutFooter";
import MainLayoutSideContact from "./MainLayoutSideContact";

interface Proptypes {
  children: ReactNode;
  description?: string;
  hideFooter?: boolean;
  hideNavbar?: boolean;
  hideSideContact?: boolean;
  title: string;
}

const MainLayout = (props: Proptypes) => {
  const {
    children,
    description,
    hideFooter = false,
    hideNavbar = false,
    hideSideContact = false,
    title,
  } = props;
  return (
    <>
      <PageHead title={title} description={description} />

      <div className="relative dark:bg-neutral-900 w-full min-h-screen dark:text-white">
        {!hideNavbar && <MainLayoutNavbar />}
        <div className="px-10 md:px-20 lg:px-24 xl:px-48 pb-10 xl:pb-16">
          {children}
        </div>
        {!hideFooter && <MainLayoutFooter />}
        {!hideSideContact && <MainLayoutSideContact />}
      </div>
    </>
  );
};

export default MainLayout;

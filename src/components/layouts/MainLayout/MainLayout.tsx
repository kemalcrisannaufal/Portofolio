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

      <section className="relative flex flex-col dark:bg-neutral-900 w-full min-h-screen dark:text-white">
        {!hideNavbar && <MainLayoutNavbar />}
        <section className="flex-grow mt-5 md:mt-10 px-10 md:px-20 lg:px-24 xl:px-48 pb-10 xl:pb-16">
          {children}
        </section>
        <section id="side-contact">
          {!hideSideContact && <MainLayoutSideContact />}
        </section>
        {!hideFooter && <MainLayoutFooter />}
      </section>
    </>
  );
};

export default MainLayout;

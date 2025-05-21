import ContactSideBar from "@/components/fragments/ContactSidebar";
import Navbar from "@/components/fragments/Navbar";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const DISABLED_CONTACT_SIDEBAR = ["/contact"];
const DISABLED_NAVBAR = ["/auth/login"];

interface Proptypes {
  children: ReactNode;
}

const AppShell = (props: Proptypes) => {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      {!DISABLED_NAVBAR.includes(router.pathname) && <Navbar />}
      {!DISABLED_CONTACT_SIDEBAR.includes(router.pathname) && (
        <ContactSideBar />
      )}
      <div className="mt-5">{children}</div>
    </>
  );
};
export default AppShell;

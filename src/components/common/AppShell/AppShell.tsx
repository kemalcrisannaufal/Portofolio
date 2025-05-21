import ContactSideBar from "@/components/fragments/ContactSidebar";
import Navbar from "@/components/fragments/Navbar";
import Toaster from "@/components/ui/Toaster";
import { ToasterContext } from "@/contexts/ToasterContext";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect } from "react";

const DISABLED_CONTACT_SIDEBAR = ["/contact"];
const DISABLED_NAVBAR = ["/auth/login"];

interface Proptypes {
  children: ReactNode;
}

const AppShell = (props: Proptypes) => {
  const { children } = props;
  const router = useRouter();
  const { toaster, setToaster } = useContext(ToasterContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToaster({ type: "", message: "" });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [toaster, setToaster]);

  return (
    <main>
      {!DISABLED_NAVBAR.includes(router.pathname) && <Navbar />}
      {!DISABLED_CONTACT_SIDEBAR.includes(router.pathname) && (
        <ContactSideBar />
      )}
      <div className="mt-5">
        {children}
        {toaster.type !== "" && (
          <Toaster type={toaster.type} message={toaster.message} />
        )}
      </div>
    </main>
  );
};
export default AppShell;

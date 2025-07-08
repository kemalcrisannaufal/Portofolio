import ContactSideBar from "@/components/fragments/ContactSidebar";
import Footer from "@/components/fragments/Footer";
import Navbar from "@/components/fragments/Navbar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Toaster from "@/components/ui/Toaster";
import { ToasterContext } from "@/contexts/ToasterContext";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect } from "react";

const DISABLED_CONTACT_SIDEBAR = ["/contact", "/auth/login", "/admin/projects"];
const DISABLED_NAVBAR = ["/auth/login", "/admin", "/admin/projects"];
const DISABLED_FOOTER = ["/auth/login", "/admin", "/admin/projects"];

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
    <main className="flex flex-col bg-white dark:bg-neutral-900 min-h-screen">
      {!DISABLED_NAVBAR.includes(router.pathname) && <Navbar />}
      {!DISABLED_CONTACT_SIDEBAR.includes(router.pathname) && (
        <ContactSideBar />
      )}
      <div className="flex-grow mt-5">
        {children}
        {toaster.type !== "" && (
          <Toaster type={toaster.type} message={toaster.message} />
        )}
      </div>
      {!DISABLED_FOOTER.includes(router.pathname) && <Footer />}

      <ThemeToggle />
    </main>
  );
};
export default AppShell;

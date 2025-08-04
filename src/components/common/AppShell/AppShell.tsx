import Toaster from "@/components/ui/Toaster";
import { ToasterContext } from "@/contexts/ToasterContext";
import { ReactNode, useContext, useEffect } from "react";
import { Inter } from "next/font/google";
import cn from "@/utils/cn";

interface Proptypes {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const AppShell = (props: Proptypes) => {
  const { children } = props;
  const { toaster, setToaster } = useContext(ToasterContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToaster({ type: "", message: "" });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [toaster, setToaster]);

  return (
    <main className={cn(inter.className)}>
      {children}
      {toaster.type !== "" && (
        <Toaster type={toaster.type} message={toaster.message} />
      )}
    </main>
  );
};
export default AppShell;

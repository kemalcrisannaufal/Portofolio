import Navbar from "@/components/fragments/Navbar";
import SocialSideBar from "@/components/fragments/SocialSideBar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const withoutSocialSideBarPages = ["/contact"];
const withoutNavbar = ["/auth/login"];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <SessionProvider session={pageProps.session}>
      {!withoutNavbar.includes(router.pathname) && <Navbar />}

      {!withoutSocialSideBarPages.includes(router.pathname) && (
        <SocialSideBar />
      )}

      <div className="mt-5">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

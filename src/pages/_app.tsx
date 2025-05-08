import Navbar from "@/components/fragments/Navbar";
import SocialSideBar from "@/components/fragments/SocialSideBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const withoutSocialSideBarPages = ["/contact"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      {!withoutSocialSideBarPages.includes(router.pathname) && (
        <SocialSideBar />
      )}

      <div className="mt-5">
        <Component {...pageProps} />
      </div>
    </>
  );
}

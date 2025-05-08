import Navbar from "@/components/fragments/Navbar";
import SocialSideBar from "@/components/fragments/SocialSideBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SocialSideBar />
      <div className="mt-5">
        <Component {...pageProps} />
      </div>
    </>
  );
}

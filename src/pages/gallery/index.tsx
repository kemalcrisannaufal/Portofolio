import MainLayout from "@/components/layouts/MainLayout";
import Gallery from "@/components/views/Gallery";
import { PAGE_DESCRIPTION } from "@/constants/list.constanst";
import Head from "next/head";

const GalleryPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <MainLayout title="Gallery" description={PAGE_DESCRIPTION.GALLERY}>
        <Gallery />
      </MainLayout>
    </>
  );
};

export default GalleryPage;

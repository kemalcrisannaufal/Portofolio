import MainLayout from "@/components/layouts/MainLayout";
import About from "@/components/views/About";
import { PAGE_DESCRIPTION } from "@/constants/list.constanst";

const AboutPage = () => {
  return (
    <MainLayout title="About" description={PAGE_DESCRIPTION.ABOUT}>
      <About />
    </MainLayout>
  );
};

export default AboutPage;

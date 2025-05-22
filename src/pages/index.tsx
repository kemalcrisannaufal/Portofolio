import MainLayout from "@/components/layouts/MainLayout";
import Home from "@/components/views/Home";
import { PAGE_DESCRIPTION } from "@/constants/list.constanst";

const HomePage = () => {
  return (
    <MainLayout title="Kemal Crisannaufal" description={PAGE_DESCRIPTION.HOME}>
      <Home />
    </MainLayout>
  );
};

export default HomePage;

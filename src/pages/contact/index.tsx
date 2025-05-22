import MainLayout from "@/components/layouts/MainLayout";
import Contact from "@/components/views/Contact";
import { PAGE_DESCRIPTION } from "@/constants/list.constanst";

const ContactPage = () => {
  return (
    <MainLayout title="Contact" description={PAGE_DESCRIPTION.CONTACT}>
      <Contact />
    </MainLayout>
  );
};

export default ContactPage;

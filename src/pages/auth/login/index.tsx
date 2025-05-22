import MainLayout from "@/components/layouts/MainLayout";
import LoginAdmin from "@/components/views/Login";

const LoginAdminPage = () => {
  return (
    <MainLayout title="Admin | Login">
      <LoginAdmin />
    </MainLayout>
  );
};

export default LoginAdminPage;

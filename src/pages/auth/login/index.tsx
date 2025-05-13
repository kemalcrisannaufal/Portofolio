import LoginAdminView from "@/components/views/Login";
import Head from "next/head";

const LoginAdminPage = () => {
  return (
    <>
      <Head>
        <title>Admin | Login</title>
      </Head>
      <LoginAdminView />
    </>
  );
};

export default LoginAdminPage;

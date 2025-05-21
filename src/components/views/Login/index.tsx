import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const LoginAdminView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const callbackUrl =
    typeof query.callbackUrl === "string" ? query.callbackUrl : "/";
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    if (form.email.value && form.password.value) {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: form.email.value,
          password: form.password.value,
          callbackUrl,
        });

        if (!res?.error) {
          setIsLoading(false);
          push(callbackUrl);
          form.reset();
          alert("Login success!");
        } else {
          alert("Email or password is incorrect!");
          setIsLoading(false);
          console.log(res.error);
        }
      } catch (error) {
        alert("Email or password is incorrect!");
        setIsLoading(false);
        console.log(error);
      }
    } else {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center px-10 md:px-20 lg:px-48 pb-10 lg:pb-20 w-full min-h-screen">
      <div className="shadow p-5 border border-gray-200 rounded w-full max-w-md">
        <h1 className="mb-2 font-libre font-semibold text-2xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="johndoe@example"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="password"
          />

          <Button type="submit" classname="w-full">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdminView;

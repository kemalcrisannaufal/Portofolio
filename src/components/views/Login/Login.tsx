import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useLogin from "./useLogin";
import { Controller } from "react-hook-form";

const LoginAdminView = () => {
  const { control, errors, handleSubmit, handleLogin, isPendingLogin } =
    useLogin();

  return (
    <div className="flex justify-center items-center w-full min-h-screen dark:text-white">
      <div className="shadow p-5 border border-gray-200 rounded w-full max-w-md">
        <h1 className="mb-2 font-libre font-semibold text-2xl">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Email"
                placeholder="johndoe@example"
                type="email"
                isInvalid={errors.email !== undefined}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Password"
                type="password"
                placeholder="password"
                isInvalid={errors.password !== undefined}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button type="submit" classname="w-full">
            {isPendingLogin ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdminView;

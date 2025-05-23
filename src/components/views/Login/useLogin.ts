import { ToasterContext } from "@/contexts/ToasterContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useLogin = () => {
  const { push, query } = useRouter();
  const callbackUrl =
    typeof query.callbackUrl === "string" ? query.callbackUrl : "/";
  const { setToaster } = useContext(ToasterContext);

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const login = async (payload: { email: string; password: string }) => {
    const result = await signIn("credentials", {
      redirect: false,
      ...payload,
      callbackUrl,
    });

    if (result?.error) throw new Error("Email or password is incorrect!");
    return result;
  };

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: login,
    onError: (error) => {
      setToaster({ type: "Error", message: error.message });
    },
    onSuccess: () => {
      reset();
      push(callbackUrl);
      setToaster({ type: "Success", message: "Login success!" });
    },
  });

  const handleLogin = (data: { email: string; password: string }) => {
    mutateLogin(data);
  };

  return { control, errors, handleSubmit, handleLogin, isPendingLogin };
};

export default useLogin;

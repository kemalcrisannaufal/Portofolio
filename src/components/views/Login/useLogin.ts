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

// const [isLoading, setIsLoading] = useState(false);
// const { push, query } = useRouter();
// const callbackUrl =
//   typeof query.callbackUrl === "string" ? query.callbackUrl : "/";
// const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   setIsLoading(true);
//   const form = event.target as HTMLFormElement;
//   if (form.email.value && form.password.value) {
//     try {
//       const res = await signIn("credentials", {
//         redirect: false,
//         email: form.email.value,
//         password: form.password.value,
//         callbackUrl,
//       });

//       if (!res?.error) {
//         setIsLoading(false);
//         push(callbackUrl);
//         form.reset();
//         alert("Login success!");
//       } else {
//         alert("Email or password is incorrect!");
//         setIsLoading(false);
//         console.log(res.error);
//       }
//     } catch (error) {
//       alert("Email or password is incorrect!");
//       setIsLoading(false);
//       console.log(error);
//     }
//   } else {
//     setIsLoading(false);
//   }
// };

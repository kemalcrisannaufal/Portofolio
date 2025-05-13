import { retreiveDataByField } from "@/lib/firebase/service";

export async function signIn(email: string) {
  const data = await retreiveDataByField("user", "email", email);
  

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

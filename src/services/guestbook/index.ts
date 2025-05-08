/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";

const endpoint = "/api/guestbook";

const guestbookServices = {
  addMessage: (data: any) => instance.post(endpoint, { data }),
  getAllMessages: () => instance.get(endpoint),
};

export default guestbookServices;

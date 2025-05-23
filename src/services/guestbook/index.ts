import instance from "@/lib/axios/instance";
import endpoint from "../endpoint.constants";
import { Message } from "@/types/message";

const guestbookServices = {
  addMessage: (data: Message) => instance.post(endpoint.GUESTBOOK, { data }),
  getAllMessages: () => instance.get(endpoint.GUESTBOOK),
};

export default guestbookServices;

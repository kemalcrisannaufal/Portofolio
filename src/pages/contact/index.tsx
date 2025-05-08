import ContactView from "@/components/views/Contact";
import guestbookServices from "@/services/guestbook";
import { Message } from "@/types/message.type";
import { sortDataByDate } from "@/utils/sortData";
import Head from "next/head";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      const { data } = await guestbookServices.getAllMessages();
      if (data) {
        const sortedMessages = sortDataByDate(data.data, "createdAt");
        setMessages(sortedMessages);
        setIsLoading(false);
      }
    };
    getMessages();
  }, []);
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactView
        messages={messages}
        setMessages={setMessages}
        isLoading={isLoading}
      />
    </>
  );
};

export default ContactPage;

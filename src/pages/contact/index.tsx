import ContactView from "@/components/views/Contact";
import guestbookServices from "@/services/guestbook";
import Head from "next/head";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [messages, setMessages] = useState<
    { name: string; message: string; created_at: Date }[]
  >([]);
  useEffect(() => {
    const getMessages = async () => {
      const { data } = await guestbookServices.getAllMessages();
      if (data) {
        const sortedMessages = data.data.sort(
          (
            a: { name: string; message: string; created_at: Date },
            b: { name: string; message: string; created_at: Date }
          ) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateB.getTime() - dateA.getTime();
          }
        );
        setMessages(sortedMessages);
      }
    };
    getMessages();
  }, []);
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactView messages={messages} setMessages={setMessages} />
    </>
  );
};

export default ContactPage;

import { socialItem } from "@/components/common/constant/socialItem";
import guestbookServices from "@/services/guestbook";
import { Message } from "@/types/message.type";
import { sortDataByDate } from "@/utils/sortData";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Guestbook from "./Guestbook";

type Proptypes = {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  isLoading: boolean;
};

const ContactView = (props: Proptypes) => {
  const { messages, setMessages, isLoading: messageFetchLoading } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      name: form.username.value,
      message: form.message.value,
      createdAt: new Date(),
    };

    if (!data.name || !data.message) {
      setIsLoading(false);
      alert("Please fill all fields!");
    } else {
      const result = await guestbookServices.addMessage(data);
      if (result.status === 200) {
        form.reset();
        const { data } = await guestbookServices.getAllMessages();
        const sortedData = sortDataByDate(data.data, "createdAt");
        setMessages(sortedData);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
      <div>
        <h1 className="font-libre text-xl lg:text-2xl">Let&apos;s connect. </h1>
        <p className="font-libre text-xs md:text-sm lg:text-base">
          Interested in collaborating or have any questions? Feel free to reach
          out to me! I&apos;m always open to new opportunities and projects
        </p>

        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-3">
          {socialItem.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center hover:bg-black mt-1 md:mt-5 p-2 border border-neutral-200 rounded w-full overflow-hidden hover:text-white hover:transition-all hover:duration-300 cursor-pointer"
              >
                <i className={`bx ${item.icon} text-xl md:text-2xl mr-2`} />
                <span
                  className={`font-libre md:text-md text-sm ${
                    item.name === "LinkedIn" ||
                    (item.name === "Email" && "mt-1")
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <Guestbook
        messages={messages}
        isSubmitting={isLoading}
        handleSubmit={handleSubmit}
        isLoading={messageFetchLoading}
      />
    </div>
  );
};

export default ContactView;

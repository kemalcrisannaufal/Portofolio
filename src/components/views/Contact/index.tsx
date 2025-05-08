import { socialItem } from "@/components/common/constant/socialItem";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import Input from "@/components/ui/Input";
import guestbookServices from "@/services/guestbook";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type Proptypes = {
  messages: { name: string; message: string; created_at: Date }[];
  setMessages: Dispatch<
    SetStateAction<{ name: string; message: string; created_at: Date }[]>
  >;
};

const ContactView = (props: Proptypes) => {
  const { messages, setMessages } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      name: form.username.value,
      message: form.message.value,
      created_at: new Date(),
    };

    const result = await guestbookServices.addMessage(data);
    if (result.status === 200) {
      form.reset();
      const { data } = await guestbookServices.getAllMessages();
      setMessages(data.data);
    }
    setIsLoading(false);
  };

  return (
    <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
      <div>
        <h1 className="font-libre text-xl lg:text-2xl">Let&apos;s connect. </h1>
        <p className="font-libre text-xs md:text-sm lg:text-base">
          Interested in collaborating or have any questions? Feel free to reach
          out to me! I&apos;m always open to new opportunities and projects
        </p>

        <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {socialItem.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center hover:bg-black mt-5 p-2 border border-neutral-200 rounded w-full overflow-hidden hover:text-white hover:transition-all hover:duration-300 cursor-pointer"
              >
                <i className={`bx ${item.icon} text-xl md:text-2xl mr-2`} />
                <span className="font-libre md:text-md text-sm">
                  {" "}
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-libre text-xl lg:text-2xl">Guestbook</h1>
        <p className="font-libre text-xs md:text-sm lg:text-base">
          Drop your thoughts, feedback, or just say hi!
        </p>
        <Divider />
        <div>
          <div className="flex flex-col py-2 md:py-5 border border-neutral-200 rounded w-full">
            <div className="flex-grow p-5 h-[50vh] overflow-y-auto">
              {messages.map(
                (item: { name: string; message: string }, index) => {
                  return (
                    <div key={index} className="flex items-start mb-3">
                      <div>
                        <div className="flex justify-center items-center bg-black mr-3 rounded-full w-10 md:w-12 h-10 md:h-12">
                          <span className="block font-libre text-white text-lg md:text-xl">
                            {item && item.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <div className="bg-neutral-200 px-4 py-2 rounded-xl">
                        <p className="font-libre font-semibold text-xs md:text-sm">
                          {item.name}
                        </p>
                        <p className="font-libre text-xs md:text-sm">
                          {item.message}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="px-5">
              <form
                onSubmit={handleSubmit}
                className="flex md:flex-row flex-col md:items-end gap-2 bg-slate-200 px-3 py-2 rounded w-full"
              >
                <Input
                  label="Name"
                  name="username"
                  type="text"
                  disabled={isLoading}
                  placeholder="Type your name..."
                  maxLength={20}
                />

                <div className="flex md:flex-row flex-col flex-grow md:items-end gap-2 w-full">
                  <div className="flex-grow">
                    <Input
                      label="Message"
                      name="message"
                      type="text"
                      disabled={isLoading}
                      placeholder="Type a message..."
                      maxLength={120}
                      classname=" w-full"
                    />
                  </div>
                  <div>
                    <Button
                      classname="bg-black text-white block mb-3 w-full"
                      type="submit"
                      disabled={isLoading}
                    >
                      <div>
                        <div className="md:hidden flex justify-center items-center">
                          <p className="md:hidden mr-2">
                            {isLoading ? "Sending..." : "Send"}
                          </p>
                          <i className="bx bx-send" />
                        </div>
                        <div className="hidden md:block">
                          <i className="bx bx-send" />
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;

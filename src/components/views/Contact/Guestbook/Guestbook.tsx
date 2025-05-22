import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import Input from "@/components/ui/Input";
import { Message } from "@/types/message.type";
import useGuestbook from "./useGuestbook";
import { Controller } from "react-hook-form";

const Guestbook = () => {
  const {
    dataMessages,
    isLoadingMessages,

    control,
    errors,
    handleSubmitForm,

    handleAddMessage,
    isPendingAddMessage,
  } = useGuestbook();

  return (
    <div className="mt-10 dark:text-neutral-300">
      <h1 className="font-libre text-xl lg:text-2xl">Guestbook</h1>
      <p className="font-libre text-xs md:text-sm lg:text-base">
        Drop your thoughts, feedback, or just say hi!
      </p>
      <Divider />
      <div>
        <div className="flex flex-col pt-2 md:pt-5 border border-gray-200 rounded w-full">
          <div className="flex-grow p-5 w-full h-[50vh] overflow-y-auto">
            {isLoadingMessages
              ? Array(5)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <div key={index} className="flex items-start mb-3">
                        <div>
                          <div className="bg-black mr-3 rounded-full w-10 md:w-12 h-10 md:h-12 animate-pulse" />
                        </div>
                        <div className="px-4 py-2 rounded-xl w-full">
                          <div className="bg-gray-200 dark:bg-neutral-600 w-1/2 h-6 animate-pulse" />
                          <div className="bg-gray-200 dark:bg-neutral-600 mt-2 w-full h-10 animate-pulse" />
                        </div>
                      </div>
                    );
                  })
              : dataMessages!.map((item: Message, index: number) => {
                  return (
                    <div key={index} className="flex items-start mb-3">
                      <div>
                        <div className="flex justify-center items-center bg-black mr-3 rounded-full w-10 md:w-12 h-10 md:h-12">
                          <span className="block font-libre text-white text-lg md:text-xl">
                            {item && item.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-200 dark:bg-neutral-600 px-4 py-2 rounded-xl dark:text-neutral-200">
                        <div className="flex items-center mb-0.5">
                          <span className="mr-2 font-libre font-semibold text-xs md:text-sm">
                            {item.name}
                          </span>

                          {item.role === "admin" && (
                            <span className="bg-amber-500 mr-2 px-2 py-0.5 rounded-full font-libre text-white text-xs">
                              Admin
                            </span>
                          )}
                        </div>
                        <p className="font-libre text-xs md:text-sm">
                          {item.message}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>

          <form
            onSubmit={handleSubmitForm(handleAddMessage)}
            className="flex md:flex-row flex-col md:items-start gap-2 bg-slate-200 dark:bg-neutral-600 px-3 py-2 rounded w-full"
          >
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  {...field}
                  // label="Name"
                  type="text"
                  disabled={isPendingAddMessage}
                  placeholder="Type your name..."
                  maxLength={20}
                  isInvalid={errors.name !== undefined}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <div className="flex md:flex-row flex-col flex-grow md:items-start gap-2 w-full">
              <div className="flex-grow">
                <Controller
                  control={control}
                  name="message"
                  render={({ field }) => (
                    <Input
                      {...field}
                      // label="Message"
                      type="text"
                      disabled={isPendingAddMessage}
                      placeholder="Type a message..."
                      maxLength={120}
                      classname=" w-full"
                      isInvalid={errors.message !== undefined}
                      errorMessage={errors.message?.message}
                    />
                  )}
                />
              </div>

              <Button
                classname="bg-black text-white block w-full md:max-w-10"
                type="submit"
                disabled={isPendingAddMessage}
              >
                <div>
                  <div className="md:hidden flex justify-center items-center">
                    <p className="md:hidden mr-2">
                      {isPendingAddMessage ? "Sending..." : "Send"}
                    </p>
                    <i className="bx bx-send" />
                  </div>
                  <div className="hidden md:block">
                    {isPendingAddMessage ? (
                      <i className="bx bx-loader" />
                    ) : (
                      <i className="bx bx-send" />
                    )}
                  </div>
                </div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Guestbook;

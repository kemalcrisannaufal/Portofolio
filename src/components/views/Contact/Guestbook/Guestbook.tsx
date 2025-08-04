import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import Input from "@/components/ui/Input";
import { Message } from "@/types/message";
import useGuestbook from "./useGuestbook";
import { Controller } from "react-hook-form";
import { AVATAR_COLORS } from "@/constants/list.constanst";

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
    <div className="mt-10 dark:text-white">
      <h2 className="font-medium text-2xl">Guestbook</h2>
      <p>Drop your thoughts, feedback, or just say hi!</p>
      <Divider />

      <div>
        <div className="flex flex-col dark:bg-[var(--color-secondary-dark)] pt-2 md:pt-5 border border-neutral-200 dark:border-neutral-800 rounded w-full">
          <div className="flex-grow p-5 w-full h-[50vh] overflow-y-auto hide-scrollbar">
            {isLoadingMessages
              ? Array(9)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <div key={index} className="flex items-start mb-3">
                        <div>
                          <div className="bg-black mr-3 rounded-full w-10 md:w-12 h-10 md:h-12" />
                        </div>
                        <div className="bg-gray-300 dark:bg-neutral-700 rounded-xl w-full h-16 animate-pulse" />
                      </div>
                    );
                  })
              : dataMessages!.map((item: Message, index: number) => {
                  return (
                    <div key={index} className="flex items-start mb-3">
                      <div>
                        <div
                          className={`flex justify-center items-center mr-3 rounded-full w-10 md:w-12 h-10 md:h-12 ${
                            AVATAR_COLORS[index % AVATAR_COLORS.length]
                          }`}
                        >
                          <span className="block text-white text-lg md:text-xl">
                            {item && item.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-200 dark:bg-neutral-700 px-4 py-2 rounded-xl dark:text-neutral-200">
                        <div className="flex items-center mb-0.5">
                          <span className="mr-2 font-semibold text-sm md:text-base">
                            {item.name}
                          </span>

                          {item.role === "admin" && (
                            <span className="bg-amber-500 mr-2 px-2 py-0.5 rounded-full text-white text-xs">
                              Admin
                            </span>
                          )}
                        </div>
                        <p className="text-sm md:text-base">{item.message}</p>
                      </div>
                    </div>
                  );
                })}
          </div>

          <form
            onSubmit={handleSubmitForm(handleAddMessage)}
            className="flex md:flex-row flex-col md:items-start gap-2 bg-slate-200 dark:bg-neutral-800 px-3 py-2 rounded w-full"
          >
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  {...field}
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
                classname="w-full md:w-10 border-none"
                type="submit"
                disabled={isPendingAddMessage}
              >
                <div className="flex justify-center items-center">
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

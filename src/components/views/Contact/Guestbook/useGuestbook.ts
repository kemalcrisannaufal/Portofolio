import { sortDataByDate } from "@/utils/sortData";
import guestbookServices from "@/services/guestbook";
import { Message } from "@/types/message.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useGuestbook = () => {
  const messageSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    message: yup.string().required("Please enter your message"),
  });

  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues: { name: "", message: "" },
  });

  const addMessage = async (data: Message) => {
    const result = await guestbookServices.addMessage(data);
    return result;
  };

  const {
    mutate: mutateAddMessage,
    isPending: isPendingAddMessage,
    isSuccess: isSuccessAddMessage,
  } = useMutation({
    mutationFn: addMessage,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      reset();
      refetchMessages();
    },
  });

  const handleAddMessage = (data: Message) =>
    mutateAddMessage({ ...data, role: "guest", createdAt: new Date() });

  const getAllMessages = async () => {
    const { data } = await guestbookServices.getAllMessages();
    const sortedData = sortDataByDate(data.data, "createdAt");
    return sortedData;
  };

  const {
    data: dataMessages,
    isLoading: isLoadingMessages,
    refetch: refetchMessages,
  } = useQuery({
    queryKey: ["Guestbook"],
    queryFn: getAllMessages,
  });

  return {
    dataMessages,
    isLoadingMessages,
    refetchMessages,

    control,
    handleSubmitForm,
    errors,

    handleAddMessage,
    isPendingAddMessage,
    isSuccessAddMessage,
  };
};

export default useGuestbook;

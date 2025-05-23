import { yupResolver } from "@hookform/resolvers/yup";
import blogsServices from "@/services/blogs";
import { Blog } from "@/types/blog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BlogComment } from "@/types/comment";
import { ToasterContext } from "@/contexts/ToasterContext";

const useBlogDetail = () => {
  const { setToaster } = useContext(ToasterContext);
  const { query, isReady } = useRouter();
  const [isAddCommentOpen, setIsAddCommentOpen] = useState(false);

  const toggleAddComment = () => setIsAddCommentOpen(!isAddCommentOpen);

  const getBlogBySlug = async (): Promise<Blog> => {
    const { data } = await blogsServices.getBlogBySlug(query.slug as string);
    return data.data;
  };

  const blogCommentSchema = yup.object().shape({
    name: yup.string().required("Please enter your name!"),
    comment: yup.string().required("Please enter your message!"),
  });

  const {
    data: dataBlog,
    isLoading: isLoadingBlog,
    refetch: refetchBlog,
  } = useQuery({
    queryKey: ["BlogDetail", query.slug],
    queryFn: getBlogBySlug,
    enabled: isReady,
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(blogCommentSchema),
    defaultValues: {
      name: "",
      comment: "",
    },
  });

  const addComment = async (payload: BlogComment) => {
    const newComments = [payload, ...(dataBlog?.comments ?? [])];
    const result = await blogsServices.addComment(dataBlog?.id as string, {
      comments: newComments,
    });

    return result;
  };

  const { mutate: mutateAddComment, isPending: isPendingAddComment } =
    useMutation({
      mutationFn: addComment,
      onError: () => {
        setToaster({ type: "Error", message: "Failed to add comment" });
      },
      onSuccess: () => {
        reset();
        refetchBlog();
        toggleAddComment();
        setToaster({ type: "Success", message: "Comment added successfully!" });
      },
    });

  const handleAddComment = (payload: BlogComment) =>
    mutateAddComment({ ...payload, createdAt: new Date() });

  return {
    control,
    dataBlog,
    errors,
    handleSubmit,
    handleAddComment,
    isAddCommentOpen,
    isPendingAddComment,
    isLoadingBlog,
    toggleAddComment,
  };
};

export default useBlogDetail;

import MarkdownText from "@/components/ui/MarkdownText";
import { getEstimatedReadingTime } from "@/utils/blog";
import { getDate } from "@/utils/date";
import Image from "next/image";
import useBlogDetail from "./useBlogDetail";
import BlogDetailSkeleton from "./BlogDetailSkeleton";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { BlogComment } from "@/types/comment";
import { CiSquarePlus, CiSquareRemove } from "react-icons/ci";
import Button from "@/components/ui/Button";
import { Controller } from "react-hook-form";
import { AVATAR_COLORS } from "@/constants/list.constanst";
import { AnimatePresence, motion } from "framer-motion";

const BlogDetailView = () => {
  const {
    control,
    dataBlog,
    errors,
    handleSubmit,
    handleAddComment,
    isAddCommentOpen,
    isPendingAddComment,
    isLoadingBlog,
    toggleAddComment,
  } = useBlogDetail();

  return (
    <>
      {isLoadingBlog ? (
        <BlogDetailSkeleton />
      ) : (
        dataBlog && (
          <>
            <div className="dark:text-neutral-300">
              <h1 className="font-libre font-thin dark:text-neutral-200 text-2xl lg:text-3xl text-center">
                {dataBlog!.title && dataBlog!.title.toUpperCase()}
              </h1>
              <div className="flex justify-center items-center gap-5 lg:gap-10 mt-2">
                <h2 className="font-libre font-thin text-gray-600 dark:text-neutral-300 text-xs text-center">
                  {getDate(new Date(dataBlog!.createdAt))}
                </h2>
                <span className="text-gray-600 dark:text-neutral-300">|</span>
                <h2 className="font-libre font-thin text-gray-600 dark:text-neutral-300 text-xs text-center">
                  {dataBlog!.category}
                </h2>
                <span className="text-gray-600 dark:text-neutral-300">|</span>
                <h2 className="font-libre font-thin text-gray-600 dark:text-neutral-300 text-xs text-center">
                  {dataBlog!.content &&
                    getEstimatedReadingTime(dataBlog!.content)}{" "}
                  Min Read
                </h2>
              </div>

              <div className="lg:px-20">
                <div className="relative mt-5 w-full h-[250px] md:h-[350px] lg:h-[500px]">
                  <Image
                    src={dataBlog!.thumbnail}
                    width={500}
                    height={500}
                    alt={dataBlog!.title}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <MarkdownText
                content={dataBlog!.content}
                classname="mt-5 first-letter:text-4xl text-justify"
              />
            </div>

            {/* COMMENT */}
            <div className="mt-10 lg:mt-16 dark:text-neutral-300">
              <div className="flex justify-between">
                <h3 className="mb-5 font-libre font-semibold text-md md:text-xl">
                  Comments
                </h3>
                <button onClick={toggleAddComment} className="cursor-pointer">
                  {isAddCommentOpen ? (
                    <CiSquareRemove className="text-2xl lg:text-3xl" />
                  ) : (
                    <CiSquarePlus className="text-2xl lg:text-3xl" />
                  )}
                </button>
              </div>
              <AnimatePresence>
                {isAddCommentOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    exit={{
                      y: 20,
                      opacity: 0,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="bg-white dark:bg-neutral-800 shadow-md mb-5 p-4 rounded-xl"
                  >
                    <form
                      onSubmit={handleSubmit(handleAddComment)}
                      className="flex flex-col gap-2"
                    >
                      <Controller
                        control={control}
                        name="name"
                        render={({ field }) => (
                          <Input
                            {...field}
                            label="Name"
                            maxLength={18}
                            placeholder="Write your name here"
                            isInvalid={errors.name !== undefined}
                            errorMessage={errors.name?.message}
                          />
                        )}
                      />

                      <Controller
                        control={control}
                        name="comment"
                        render={({ field }) => (
                          <TextArea
                            {...field}
                            label="Comment"
                            maxLength={500}
                            placeholder="Write your comment here"
                            isInvalid={errors.comment !== undefined}
                            errorMessage={errors.comment?.message}
                          />
                        )}
                      />

                      <Button type="submit" disabled={isPendingAddComment}>
                        {isPendingAddComment ? "Loading..." : "Submit"}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {dataBlog.comments.length === 0 ? (
                <div className="bg-gray-200 dark:bg-neutral-700 p-2 rounded text-center">
                  <p className="font-libre text-neutral-600 dark:text-neutral-300">
                    No comments yet
                  </p>
                </div>
              ) : (
                dataBlog.comments.map((comment: BlogComment, index) => {
                  return (
                    <div
                      key={index}
                      className={`mb-5 flex gap-2 lg:gap-5 items-center ${
                        index % 2 === 1 && "flex-row-reverse justify-end"
                      }`}
                    >
                      <div>
                        <div
                          className={`flex justify-center items-center mr-3 rounded-full w-10 md:w-12 h-10 md:h-12 ${
                            AVATAR_COLORS[index % AVATAR_COLORS.length]
                          }`}
                        >
                          <span className="block font-libre text-white text-lg md:text-xl">
                            {comment.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <p className="font-libre font-semibold">
                            {comment.name}
                          </p>
                          <p className="hidden md:block font-libre text-xs">
                            {getDate(comment.createdAt!)}
                          </p>
                        </div>
                        <p className="font-libre text-xs break-words">
                          {comment.comment}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )
      )}
    </>
  );
};

export default BlogDetailView;

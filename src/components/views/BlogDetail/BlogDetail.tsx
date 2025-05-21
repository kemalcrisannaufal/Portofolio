import MarkdownText from "@/components/ui/MarkdownText";
import { getEstimatedReadingTime } from "@/utils/blog";
import { getDate } from "@/utils/date";
import Image from "next/image";
import useBlogDetail from "./useBlogDetail";
import BlogDetailSkeleton from "./BlogDetailSkeleton";

const BlogDetailView = () => {
  const { dataBlog, isLoadingBlog } = useBlogDetail();

  return (
    <>
      {isLoadingBlog ? (
        <BlogDetailSkeleton />
      ) : (
        dataBlog && (
          <div>
            <h1 className="font-libre font-thin text-2xl lg:text-3xl text-center">
              {dataBlog!.title && dataBlog!.title.toUpperCase()}
            </h1>
            <div className="flex justify-center items-center gap-5 lg:gap-10 mt-2">
              <h2 className="font-libre font-thin text-default-600 text-xs text-center">
                {getDate(new Date(dataBlog!.createdAt))}
              </h2>
              <span className="text-default-600">|</span>
              <h2 className="font-libre font-thin text-default-600 text-xs text-center">
                {dataBlog!.category}
              </h2>
              <span className="text-default-600">|</span>
              <h2 className="font-libre font-thin text-default-600 text-xs text-center">
                {dataBlog!.content &&
                  getEstimatedReadingTime(dataBlog!.content)}{" "}
                Min Read
              </h2>
            </div>

            <div className="lg:px-20">
              <div className="mt-5 w-full h-[25vh] md:h-[45vh] lg:h-[70vh]">
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
        )
      )}
    </>
  );
};

export default BlogDetailView;

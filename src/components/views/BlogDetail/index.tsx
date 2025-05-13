import MarkdownText from "@/components/ui/MarkdownText";
import { Blog } from "@/types/blog.type";
import { getEstimatedReadingTime } from "@/utils/blog";
import { getDate } from "@/utils/date";
import Image from "next/image";

type Proptypes = {
  blog: Blog;
};

const BlogDetailView = (props: Proptypes) => {
  const { blog } = props;

  return (
    <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
      <h1 className="font-libre font-thin text-2xl lg:text-3xl text-center">
        {blog.title && blog.title.toUpperCase()}
      </h1>
      <div className="flex justify-center items-center gap-5 lg:gap-10 mt-2">
        <h2 className="font-libre font-thin text-neutral-600 text-xs text-center">
          {getDate(new Date(blog.createdAt))}
        </h2>
        <span className="text-neutral-600">|</span>
        <h2 className="font-libre font-thin text-neutral-600 text-xs text-center">
          {blog.category}
        </h2>
        <span className="text-neutral-600">|</span>
        <h2 className="font-libre font-thin text-neutral-600 text-xs text-center">
          {blog.content && getEstimatedReadingTime(blog.content)} Min Read
        </h2>
      </div>

      <div className="lg:px-20">
        <div className="mt-5 w-full h-[25vh] md:h-[45vh] lg:h-[70vh]">
          <Image
            src={blog.thumbnail}
            width={500}
            height={500}
            alt={blog.title}
            priority
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <MarkdownText
        content={blog.content}
        classname="mt-5 first-letter:text-4xl text-justify"
      />
    </div>
  );
};

export default BlogDetailView;

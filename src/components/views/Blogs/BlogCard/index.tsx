import Button from "@/components/ui/Button";
import MarkdownText from "@/components/ui/MarkdownText";
import { Blog } from "@/types/blog.type";
import { getEstimatedReadingTime, getShortDescription } from "@/utils/blog";
import { getDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type Proptypes = {
  blog: Blog;
};
const BlogCard = (props: Proptypes) => {
  const { blog } = props;
  const { push } = useRouter();
  const [showProfileImage, setProfileImage] = useState(false);

  return (
    <div className="p-3 rounded-xl hover:scale-105 hover:transition hover:duration-300">
      <h2 className="lg:hidden block mb-3 font-libre text-lg text-center line-clamp-2">
        {blog.title}
      </h2>
      <Link
        href={`/blogs/${blog.slug}`}
        className="block shadow h-[20vh] md:h-[45vh] overflow-hidden cursor-pointer"
      >
        <Image
          className="w-full h-full object-cover"
          src={blog.thumbnail}
          width={500}
          height={500}
          alt={blog.title}
          priority
        />
      </Link>

      <div className="mt-5">
        <h2 className="hidden lg:block font-libre text-lg line-clamp-2">
          {blog.title}
        </h2>
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-2">
            {blog.category.map((item, index) => {
              return (
                <span
                  key={index}
                  className="block bg-neutral-200 px-3 py-1 w-max font-libre text-xs"
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div>
            <span className="font-libre font-semibold text-neutral-600 text-xs">
              {getEstimatedReadingTime(blog.content)} Min Read
            </span>
          </div>
        </div>

        <MarkdownText
          content={getShortDescription(blog.content)}
          classname="mt-3 text-justify  line-clamp-3"
        />

        <div className="hidden md:flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div
              className="flex justify-center items-center bg-neutral-200 mr-3 border border-neutral-200 rounded-full w-12 h-12 overflow-hidden cursor-pointer"
              onMouseEnter={() => setProfileImage(true)}
              onMouseLeave={() => setProfileImage(false)}
            >
              {showProfileImage ? (
                <Image
                  className="w-full"
                  src={"/assets/images/home/foto_fix.jpg"}
                  width={500}
                  height={500}
                  alt={"Kemal Crisannaufal"}
                  priority
                />
              ) : (
                <span className="font-libre text-xl">K</span>
              )}
            </div>
            <div>
              <h5 className="font-libre text-xs">Kemal Crisannaufal</h5>
              <h6 className="font-libre text-xs">
                {getDate(new Date(blog.createdAt))}
              </h6>
            </div>
          </div>

          <div>
            <button
              className="p-2 cursor-pointer"
              onClick={() => push(`/blogs/${blog.slug}`)}
            >
              <i className="bx-right-arrow-alt text-xl bx" />
            </button>
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-5 w-full">
          <Button onClick={() => push(`/blogs/${blog.slug}`)}>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

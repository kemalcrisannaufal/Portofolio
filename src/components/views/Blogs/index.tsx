import { Blog } from "@/types/blog.type";
import BlogCard from "./BlogCard";

type Proptypes = {
  blogs: Blog[];
};

const BlogsView = (props: Proptypes) => {
  const { blogs } = props;
  return (
    <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog.id} />;
        })}
      </div>
    </div>
  );
};

export default BlogsView;

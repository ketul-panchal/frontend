import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, posts } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {posts.map((post) => (
            <BlogCard
              id={post.id}
              authorName={post.author.name || "Anonymous"} // Fallback to "Unknown" if the author's name is null
              title={post.title}
              content={post.content} // Use the actual blog content
              published={"Date not provided"} // If there's a publication date, use it here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

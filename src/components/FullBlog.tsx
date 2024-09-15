import { Post } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ post }: { post: Post }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Appbar />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-lg text-gray-500">Posted on December 2, 2023</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              {/* Rendering content with paragraphs and preserving extra spacing */}
              <div className="prose prose-lg max-w-none whitespace-pre-line">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">{paragraph.split('\n').join(' ')}</p>
                ))}
              </div>
            </div>
            
            <aside className="md:col-span-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">About the Author</h2>
                <div className="flex items-center">
                  <Avatar size="big" name={post.author.name || "Anonymous"} />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{post.author.name || "Anonymous"}</h3>
                    <p className="text-gray-600 mt-1">
                      Passionate writer and storyteller. Sharing insights on technology and culture.
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-gray-700">
                  This is a brief author bio. We'll add more details about the author's background, expertise, and interests in the future.
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
};

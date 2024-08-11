import { Post } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ post }: { post: Post }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 pt-12 max-w-screen-xl ">
          <div className="col-span-8">
            <div className="text-3xl font-extrabold">{post.title}</div>
            <div className="text-slate-400 pt-2">Post on 2nd December 2023</div>
            <div className="pt-4">{post.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">
                Author
            </div>
            <div className="flex w-full">
                <div className="pr-2 flex flex-col justify-center">
                <Avatar size="big" name={post.author.name || "Anonymous"}/>
                </div>
              <div>
                <div className="text-xl font-bold">
                  {post.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                    This is Random Content For Auther Detail We will Add soon in future
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

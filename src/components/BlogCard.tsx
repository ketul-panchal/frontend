import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  published: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  published,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 p-6 md:p-8 w-full max-w-screen-md cursor-pointer hover:bg-gradient-to-r from-slate-50 to-white transition-all duration-300 shadow-sm hover:shadow-md rounded-lg mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar size="small" name={authorName} />
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-sm text-slate-800">{authorName}</span>
            <Circle />
            <span className="text-sm text-slate-500">{published}</span>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 leading-tight">{title}</h2>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          {content.slice(0, 100) + "..."}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
            {`${Math.ceil(content.length / 100)} minute${Math.ceil(content.length / 100) !== 1 ? 's' : ''} read`}
          </div>
          <div className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
            Read more →
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-300"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden
     bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white shadow-lg ${
       size === "small" ? "w-10 h-10" : "w-14 h-14"
     }`}
    >
      <span
        className={`${
          size === "small" ? "text-sm" : "text-lg"
        } font-bold`}
      >
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
import Link from "next/link";
import blogData from "../../_data/blogData.json";

const Blog = () => {
  return (
    <div className="mx-5">
      <h1 className="text-3xl mt-12 mb-6 font-semibold">Blog</h1>
      <ul className="bg-teal-100 w-full p-4 rounded-xl shadow-2xl list-disc list-inside">
        {blogData.map((post) => (
          <li
            key={post.id}
            className={`py-2 hover:bg-white rounded px-2 ${
              post.id !== blogData[blogData.length - 1].id ? "border-b-2 border-slate-400" : ""
            }`}
          >
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

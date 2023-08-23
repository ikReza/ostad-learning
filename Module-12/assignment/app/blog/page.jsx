import Link from "next/link";
import blogData from "../../_data/blogData.json";

const Blog = () => {
  return (
    <div className="mx-5">
      <h1 className="text-3xl mt-12 mb-6">Blog</h1>
      <ul className="bg-base-200 w-full rounded-box">
        {blogData.map((post) => (
          <li
            key={post.id}
            className={`py-2 ${
              post.id !== blogData[blogData.length - 1].id ? "border-b" : ""
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

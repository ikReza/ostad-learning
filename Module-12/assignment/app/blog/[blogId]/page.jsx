"use client";

import { useEffect, useState } from "react";
import blogData from "@/_data/blogData.json";
import Link from "next/link";

const Blog = ({ params: { blogId } }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const singleBlog = blogData.find((blog) => blog.id == blogId);
    if (singleBlog) {
      setBlog(singleBlog);
    }
  }, [blogId]);
  return !blog ? (
    <div className="text-center text-white">Not Found</div>
  ) : (
    <div className="mx-5">
      <p className=" mt-6 mb-2 text-xl text-cyan-500">{blog.title}</p>
      <p className="text-black text-justify">{blog.content}</p>
      <p className="text-slate-400 text-sm text-right mt-4">{blog.date}</p>
      <button className="btn btn-info">
        <Link href="/blog" className="font-bold ">
          Back
        </Link>
      </button>
    </div>
  );
};

export default Blog;

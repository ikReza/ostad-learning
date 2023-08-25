"use client";

import { useEffect, useState } from "react";
import blogData from "@/_data/blogData.json";

import { PiHandsClappingThin } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";

const Blog = ({ params: { blogId } }) => {
  const [blog, setBlog] = useState(null);
  const [clap, setClap] = useState(99);
  const [comment, setComment] = useState(false);
  const [commentCount, setCommentCount] = useState(9);

  useEffect(() => {
    const singleBlog = blogData.find((blog) => blog.id == blogId);
    if (singleBlog) {
      setBlog(singleBlog);
    }
  }, [blogId]);

  const handleComment = () => {
    setComment(false);
    setCommentCount(commentCount + 1);
  };

  return !blog ? (
    <div className="text-center text-white text-2xl">Not Found</div>
  ) : (
    <div className="max-w-md mx-auto max-md:px-8">
      <p className=" mt-8 mb-4 text-2xl text-cyan-500 font-semibold">
        {blog.title}
      </p>
      <p className="text-black">{blog.content}</p>
      <p className="text-slate-400 text-sm text-right mt-4">{blog.date}</p>
      <p className="flex gap-4 text-slate-500">
        <span className="flex items-center gap-2 text-sm hover:text-slate-800">
          <button
            className="cursor:pointer text-lg"
            onClick={() => setClap(clap + 1)}
          >
            <PiHandsClappingThin />
          </button>{" "}
          {clap}
        </span>
        <span className="flex items-center gap-2 text-sm hover:text-slate-800">
          <button
            className="cursor:pointer text-lg"
            onClick={() => setComment(!comment)}
          >
            <FaRegComment />
          </button>{" "}
          {commentCount}
        </span>
      </p>
      {comment && (
        <div className="w-full mt-4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <textarea
            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Write your thoughts here..."
            rows="4"
          ></textarea>

          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              onClick={handleComment}
            >
              Post comment
            </button>
            <div class="flex pl-0 space-x-1 sm:pl-2">
              <button
                type="button"
                className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <CgAttachment />
              </button>
              <button
                type="button"
                className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <BsImage />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

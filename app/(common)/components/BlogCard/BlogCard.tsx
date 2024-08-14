import { Post } from "@/graphql/generated/hygraph-schema";
import Image from "next/image";
import React from "react";
export type Blog = Pick<
  Post,
  "id" | "coverImage" | "title" | "excerpt" | "slug"
>;
interface BlogCardProps {
  blog: Blog;
}
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div
      className="max-w-sm bg-offwhite rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 z-10"
      key={blog.id}
    >
      <div className="rounded-t-lg w-full h-80 overflow-hidden object-cover relative">
        {blog.coverImage && <Image src={blog.coverImage.url} alt="" fill />}
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:white">
            {blog.title}
          </h5>
        </a>
        {blog.excerpt && (
          <p className="mb-3 font-normal  text-black dark:text-lightwhite-400">
            {blog.excerpt.substring(0, 130)}
          </p>
        )}
        <a
          href={`/blogs/${blog.slug}`}
          className="inline-flex blog-center px-3 py-2 navbutton text-sm font-medium text-center text-white rounded-lg bg-darkblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

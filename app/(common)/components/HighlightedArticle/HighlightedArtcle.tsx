"use client";
import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";
import { Post, useLatestPostQuery } from "@/graphql/generated/hygraph-schema";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import PTag from "../Tags/PTag";

interface LinkTagProps {
  children: React.ReactNode;
  href?: string;
}

const HighlightedArticle = () => {
  const { loading, error, data } = useLatestPostQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.posts) <p>No Data: </p>;
  console.log(data?.posts[0]);
  const post = data?.posts[0] as Partial<Post>;

  const MyParagraph = ({ children }: { children: React.ReactElement }) => (
    <div className="text-red">{children}</div>
  );

  const LinkTag = ({ children, href }: LinkTagProps) => {
    if (!href) {
      return null;
    }
    return (
      <a href={href} className="text-green">
        {children}
      </a>
    );
  };

  return (
    <div className="bg-offwhite rounded-3xl relative min-h-60 flex md:flex-row flex-col w-full p-4 md:p-6 gap-5 mb-10">
      <div className="md:w-1/2 lg:w-1/2 flex md:flex-col flex-row w-full">
        <div className="rounded-lg w-full md:w-auto h-80 overflow-hidden object-cover relative p-4">
          {post?.coverImage?.url && (
            <Image
              className="pl-0 h-screen-md"
              src={post?.coverImage?.url}
              fill
              alt=""
            />
          )}
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2">
        <h1 className="text-2xl mb-5">{post?.title}</h1>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: (props) => {
              return <LinkTag href={props.href}>{props.children}</LinkTag>;
            },
            p: (props) => {
              return <PTag>{props.children}</PTag>;
            },
          }}
        >
          {`${post.content && post?.content.markdown.substring(0, 300)}.......`}
        </Markdown>
        <Link
          href={`/blogs/${post.slug}`}
          className="inline-flex items-center mt-2 px-3 py-2 navbutton text-sm font-medium text-center text-white rounded-lg bg-darkblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </Link>
      </div>
    </div>
  );
};

export default HighlightedArticle;

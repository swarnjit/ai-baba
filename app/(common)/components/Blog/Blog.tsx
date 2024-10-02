"use client";
import { usePostBySlugQuery } from "@/graphql/generated/hygraph-schema";
import { useSearchParams } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import CodeTag from "../Tags/CodeTag";
import PTag from "../Tags/PTag";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import H3Tag from "../Tags/H3Tag";
import H2Tag from "../Tags/H2Tag";

interface LinkTagProps {
  children: React.ReactNode;
  href?: string;
}

type Params = {
  params: {
    blogSlug: string;
  };
};
const Blog = ({ params }: Params) => {
  const { loading, error, data } = usePostBySlugQuery({
    variables: { slug: params.blogSlug },
  });

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.post) <p>No Data: </p>;

  const post = data?.post;
  if (post === undefined || post == null) return <p>No data</p>;
  console.log("as path", post?.author?.name);
  return (
    <div className="pr-3">
      <h3 className="text-black text-3xl md:text-4xl font-bold mb-3">
        {post?.title}
      </h3>
      <div className="h-12 flex flex-row justify-center align-middle">
        <Avatar className="h-8 w-8 overflow-hidden mr-4">
          <AvatarImage
            src={
              post.author?.picture?.authorAvatar[0].picture?.url !== undefined
                ? post.author.picture.authorAvatar[0].picture?.url
                : "/images/avatar.webp"
            }
            alt="avatar"
          />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>

        <h4 className="text-darkblue text-2xl md:text-2xl mb-3">
          {post?.author?.name}
        </h4>
        <div className="">.</div>
        <div className="ml-4 h-full w-auto flex flex-row justify-center align-middle">
          <p className="text-lg">{`23th April, 2024`}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-navyblue w-full sm:h-96 h-60 object-cover relative mb-5">
        <Image
          src={
            post?.coverImage?.url !== undefined
              ? post.coverImage?.url
              : "poster image"
          }
          fill
          alt="l"
        />
      </div>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => {
            return <LinkTag href={props.href}>{props.children}</LinkTag>;
          },
          h2: (props) => {
            return <H2Tag>{props.children}</H2Tag>;
          },
          h3: (props) => {
            return <H3Tag>{props.children}</H3Tag>;
          },
          code: (props) => {
            return <CodeTag>{props.children}</CodeTag>;
          },
          p: (props) => {
            return <PTag>{props.children}</PTag>;
          },
        }}
      >
        {post?.content && post?.content.markdown}
      </Markdown>
    </div>
  );
};

export default Blog;

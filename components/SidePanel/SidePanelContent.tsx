"use client";
import React from "react";
import Image from "next/image";
import { Post, useLatestPostQuery } from "@/graphql/generated/hygraph-schema";
import Link from "next/link";

const SidePanelContent = () => {
  const { loading, error, data } = useLatestPostQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.posts) <p>No Data: </p>;
  console.log(data?.posts[0]);
  const post = data?.posts[0] as Partial<Post>;

  return (
    <div className="bg-offwhite rounded-3xl relative min-h-60 flex flex-col w-full p-2 gap-5">
      <Link href={`/blogs/${post.slug}`} className="">
        <>
          <div className="flex flex-col">
            <div className="rounded-lg w-auto h-80 overflow-hidden object-cover relative p-4">
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
          <h1 className="text-2xl mb-5">{post?.title}</h1>
        </>
      </Link>
    </div>
  );
};

export default SidePanelContent;

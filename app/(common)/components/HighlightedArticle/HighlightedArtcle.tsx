"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLatestPostQuery } from "@/graphql/generated/hygraph-schema";

const HighlightedArticle = () => {
  const { loading, error, data } = useLatestPostQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.posts) <p>No Data: </p>;
  console.log(data?.posts[0]);
  const post = data?.posts[0];
  return (
    <div className="bg-offwhite rounded-3xl relative min-h-60 flex flex-row w-full p-6 gap-5">
      <div className="w-1/2 flex flex-col">
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
      <div className="w-1/2">
        <h1 className="text-2xl mb-5">{post?.title}</h1>
      </div>
    </div>
  );
};

export default HighlightedArticle;

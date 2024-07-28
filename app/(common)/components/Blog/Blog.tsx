"use client";
import { usePostBySlugQuery } from "@/graphql/generated/hygraph-schema";
import { useSearchParams } from "next/navigation";
import React from "react";
type Params = {
  params: {
    blogSlug: string;
  };
};
const Blog = ({ params }: Params) => {
  const router = useSearchParams();
  const { loading, error, data } = usePostBySlugQuery({
    variables: { slug: params.blogSlug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.post) <p>No Data: </p>;

  const post = data?.post;
  console.log("as path", post?.author?.name);
  return (
    <div className="pt-16">
      <h3 className="text-black text-3xl md:text-4xl font-bold mb-3">
        {post?.title}
      </h3>
      <h4 className="text-darkblue text-2xl md:text-2xl mb-3">
        Author: {post?.author?.name}
      </h4>
    </div>
  );
};

export default Blog;

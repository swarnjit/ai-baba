"use client";
import React from "react";
import Image from "next/image";
import {
  Post,
  useGetPostsByCategoryQuery,
  useLatestPostQuery,
  usePostBySlugQuery,
} from "@/graphql/generated/hygraph-schema";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidePanelContent = () => {
  //const { loading, error, data } = useLatestPostQuery();
  const pathname = usePathname();
  const { loading, error, data } = usePostBySlugQuery({
    variables: { slug: pathname.split("/")[2] },
  });
  const categoryData = data?.post?.category;
  const categories = categoryData?.map((category) => category.name);
  const {
    loading: loadingPosts,
    error: errorPosts,
    data: dataPosts,
  } = useGetPostsByCategoryQuery({
    variables: {
      category: { name_in: categories ?? ["Artificial Intelligence"] },
    },
  });
  if (loadingPosts) return <p>Loading...</p>;
  if (errorPosts) return <p>Error :</p>;
  if (!dataPosts?.posts) <p>No Data: </p>;
  const posts = dataPosts?.posts as Partial<Post>[];

  return (
    <div className="bg-offwhite rounded-xl relative min-h-60 flex flex-col w-full p-2 gap-5">
      <div>
        <h3 className="text-black text-xl md:text-3xl font-bold mb-3">
          Related Posts
        </h3>
      </div>
      {posts.map((post, i) => (
        <Link href={`/blogs/${post.slug}`} className="" key={i}>
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
            <h1 className="text-xl mb-5 mt-4">{post?.title}</h1>
          </>
        </Link>
      ))}
    </div>
  );
};

export default SidePanelContent;

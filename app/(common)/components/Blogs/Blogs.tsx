"use client";
import Image from "next/image";
import {
  PostOrderByInput,
  useAllPostsQuery,
} from "@/graphql/generated/hygraph-schema";
import Link from "next/link";
import BlogCard, { Blog } from "../BlogCard/BlogCard";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const AllBlogs = () => {
  const { loading, error, data } = useAllPostsQuery({
    variables: { orderBy: PostOrderByInput.PublishedAtAsc },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.posts) <p>No Data: </p>;
  const posts = data?.posts as unknown as Blog[];
  return (
    <div>
      <div className="mx-auto max-w-7xl pt-16 mt-16 px-6 mb-10 relative">
        <div className="text-center">
          <h3 className="text-black text-3xl md:text-5xl font-bold mb-10">
            Read about the latest in AI
          </h3>
        </div>
        <div className="h-1 bg-white w-full"></div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-y-20 gap-x-5">
          {posts.map((item, i) => (
            <BlogCard blog={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;

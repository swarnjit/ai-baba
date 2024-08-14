"use client";
import Image from "next/image";
import {
  PostOrderByInput,
  useAllPostsQuery,
} from "@/graphql/generated/hygraph-schema";
import BlogCard, { Blog } from "../BlogCard/BlogCard";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const RecentPosts = () => {
  const { loading, error, data } = useAllPostsQuery({
    variables: { orderBy: PostOrderByInput.PublishedAtAsc },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.posts) <p>No Data: </p>;
  const posts = data?.posts as unknown as Blog[];
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-16 mb-20 relative">
        <div className="text-start mb-6">
          <h3 className="text-black text-3xl md:text-5xl font-bold mb-3">
            Recent Posts
          </h3>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-y-20 gap-x-5 mt-10">
          {posts.map((item, i) => (
            <BlogCard blog={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetAllCategoriesQuery } from "@/graphql/generated/hygraph-schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const data = [
  {
    id: 1,
    slug: "first",
    title: "first",
  },
  {
    id: 1,
    slug: "first",
    title: "first",
  },
  {
    id: 1,
    slug: "first",
    title: "first",
  },
  {
    id: 1,
    slug: "first",
    title: "first",
  },
];
const Colors = {
  chatGpt: "#57c4ff31",
  image: "#da85c731",
  video: "#7fb88133",
  others: "#ff795736",
};
const CategoryList = () => {
  const { loading, error, data: dataServer } = useGetAllCategoriesQuery();
  const categories = dataServer?.categories;
  return (
    <div className="">
      <h1 className="text-black text-3xl md:text-5xl font-bold mb-8">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between gap-6">
        {categories?.map((item) => (
          <Link
            href="/blog?cat=style"
            className="rounded-xl overflow-hidden py-4 px-6 lg:px-12 mr-6 w-3/12 h-24 flex justify-center text-black bg-[#ecf2ff;]"
            key={item?.name}
          >
            <div className="flex flex-col justify-center align-middle">
              <Avatar className="h-8 w-8 overflow-hidden mr-4">
                <AvatarImage src="/images/avatar.webp" alt="avatar" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col justify-center align-middle">
              {item?.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

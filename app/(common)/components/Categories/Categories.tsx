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
            className="rounded-xl overflow-hidden w-1/5 h-40 flex flex-col justify-center bg-[#ecf2ff;]"
            key={item?.name}
          >
            {/* <div className="flex flex-row justify-center align-middle w-full">
              <Avatar className="h-8 w-8 overflow-hidden">
                <AvatarImage src="/images/avatar.webp" alt="avatar" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
            </div> */}
            <div className="w-full flex flex-row justify-center align-middle">
              <p className="text-xl font-bold text-justify text-[#2D6ADE]">
                {item?.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

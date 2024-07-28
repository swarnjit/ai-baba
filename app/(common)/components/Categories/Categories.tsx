import React from "react";
import Link from "next/link";
import Image from "next/image";
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
const CategoryList = async () => {
  return (
    <div className="">
      <h1 className="text-black text-3xl md:text-5xl font-bold mb-8">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between gap-6">
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className="py-4 px-6 lg:px-12 categoryCard mr-6 w-3/12 h-24 flex justify-center text-black hover:text-white hover-underline-category"
            key={item.id}
          >
            <div className="text-3xl font-semibold capitalize">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

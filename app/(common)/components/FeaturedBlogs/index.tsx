"use client";
import Image from "next/image";
import {
  PostOrderByInput,
  useAllPostsQuery,
} from "@/graphql/generated/hygraph-schema";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Introduction about AI Baba",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and ",
    hiddenpara:
      "standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...",
  },
  {
    imgSrc: "/images/Work/two.jpg",
    heading: "Second Blog",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing his um is simply dummy text of the printing hisum is simply dummy text of the printing his",
    hiddenpara:
      "standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...",
  },
  {
    imgSrc: "/images/Work/one.jpg",
    heading: "Second Blog",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing his um is simply dummy text of the printing hisum is simply dummy text of the printing hisum is simply dummy text of the printing hisum is simply dummy text of the printing his",
    hiddenpara:
      "standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...",
  },
];

const Work = () => {
  const { loading, error, data } = useAllPostsQuery({
    variables: { orderBy: PostOrderByInput.PublishedAtAsc },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data?.posts) <p>No Data: </p>;
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-black text-3xl md:text-5xl font-bold mb-3">
            Featured Blogs
          </h3>
          <p className="text-darkblue md:text-lg font-normal leading-8">
            Check some of the featured blogs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {data?.posts.map((items, i) => (
            // <div className='card-b p-2' key={i}>
            //     <div>
            //         <Image src={'/images/Banner/intro.jpg'} alt="arrow-bg" width={0} height={0} sizes="100vw" className="w-full object-cover h-40 rounded-lg" />
            //     </div>
            //     <h3 className='md:text-2xl text-lg text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
            //     <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
            //     <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
            // </div>
            <div
              className="max-w-sm bg-card-bg border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 z-10"
              key={i}
            >
              <div className="rounded-t-lg w-full h-80 overflow-hidden object-cover relative">
                {items.coverImage && (
                  <Image src={items.coverImage.url} alt="" fill />
                )}
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-offwhite dark:white">
                    {items.title}
                  </h5>
                </a>
                {items.excerpt && (
                  <p className="mb-3 font-normal  text-lightwhite dark:text-gray-400">
                    {items.excerpt.substring(0, 130)}
                  </p>
                )}
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 navbutton text-sm font-medium text-center text-white rounded-lg bg-darkblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

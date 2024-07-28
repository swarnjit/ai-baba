import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-image relative" id="home-section">
      <div className="shapes md:block hidden"></div>
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      <div className="mx-auto h-screen max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6 max-h-[960px]">
        <div className="height-work">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-16">
            {/* <div className='arrowTwo'></div> */}
            <div className="col-span-7">
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-black md:4px md:text-start">
                All About Artificial Intelligence <br /> Blog By Blog
              </h1>
              <p className="text-black md:text-lg font-normal mb-10 md:text-start">
                Unleashing the Power of Artificial Intelligence: Exploring the
                Frontiers of Intelligent Technology
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <Link href="/blogs">
                  <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6">
                    Get to know AI
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-span-5 lg:-m-48">
              <div className="arrowThree"></div>
              <Image
                className="md:pl-20 pl-0 h-screen-md"
                src="/images/Banner/image.png"
                alt="nothing"
                width={1013}
                height={760}
              />
              <div className="arrowSix"></div>
              <div className="arrowSeven"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

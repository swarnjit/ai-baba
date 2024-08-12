import Image from "next/image";
import Link from "next/link";

interface Social {
  imgsrc: string;
  href: string;
}

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/insta.svg", href: "https://instagram.com/" },
  { imgsrc: "/images/Footer/dribble.svg", href: "https://dribble.com/" },
  { imgsrc: "/images/Footer/twitter.svg", href: "https://twitter.com/" },
  { imgsrc: "/images/Footer/youtube.svg", href: "https://youtube.com/" },
];

const Footer = () => {
  return (
    <div className="bg-lightblue relative pt-8 bottom-0">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="col-span-6">
            <img
              className="hidden h-8 w-auto lg:block"
              src={"/images/Logo/logo_v1.png"}
              alt="AI-Baba-Logo"
            />
            <h3 className="text-darkblue text-sm font-normal leading-9 mb-4 lg:mb-16">
              {`This blog's purpose is to cover what is happening in the world of Aartificial Intelligence`}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="py-8 px-4 border-t border-t-lightblue">
        <h3 className="text-center text-offwhite">
          @2024 - All Rights Reserved by{" "}
          <Link href="https://adminmart.com/" target="_blank">
            {" "}
            AI-Baba
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;

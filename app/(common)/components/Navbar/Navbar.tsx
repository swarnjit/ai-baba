"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "All Blogs", href: "blogs", current: false },
  { name: "Featured", href: "/#recent_posts", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-10 w-20px lg:hidden"
                  src={"/images/Logo/logo_v1.png"}
                  alt="Crypto-Logo"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src={"/images/Logo/logo_v1.png"}
                  alt="AI-Baba-Logo"
                />
                <p className="pl-4 font-bold text-2xl text-white">AI Baba</p>
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks text-white hover:text-offwhite hover-underline",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger
                        className={classNames(
                          "navlinks text-white hover:text-offwhite hover-underline",
                          "px-3 py-4 rounded-md text-lg font-normal"
                        )}
                      >
                        Categories
                      </MenubarTrigger>
                      <MenubarContent className="menubar-bg">
                        <MenubarItem className="text-white hover:text-offwhite hover-underline rounded-md text-lg font-normal">
                          Smartphones
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="text-white hover:text-offwhite hover-underline rounded-md text-lg font-normal">
                          Computers
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="text-white hover:text-offwhite hover-underline rounded-md text-lg font-normal">
                          Artificial Intelligence
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;

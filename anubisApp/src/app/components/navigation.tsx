"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@fontsource/michroma";
import "@fontsource/poppins";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  { title: "Discover", path: "/" },
  { title: "VIP", path: "/purchase" },
  { title: "Gallery", path: "/gallery" },
  { title: "Test Drive", path: "/testdrive" },
  { title: "Contact", path: "/contact" },
];

function processPage(page: Page, pathname: string, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  const activeClass =
    page.path === "/"
      ? pathname === page.path
        ? "font-extrabold text-[#519078]"
        : ""
      : pathname.startsWith(page.path)
      ? "font-extrabold text-[#519078]"
      : "";
  return (
    <li key={page.path} className="py-2">
      <Link href={page.path} className={`block ${activeClass}`}
        onClick={() => setMenuOpen(false)}>
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center my-4 mx-[2rem]">
      {/* Logo Section */}
      <div className="flex items-center justify-center sm:justify-start sm:flex-row flex-col">
      <img
        src="/img/logo.jpg"
        alt="Logo"
        className="h-14 sm:h-10 mr-4"
      />
      <p className="font-michroma text-4xl sm:text-3xl max-sm:hidden">
        A N U B I S
      </p>
    </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden flex flex-col items-end justify-center space-y-2 rounded-md focus:outline-none">
        <span className="h-0.5 w-12 bg-black rounded"></span>
        <span className="h-0.5 w-10 bg-[#519078] rounded"></span>
        <span className="h-0.5 w-8 bg-black rounded"></span>
      </button>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"} 
          sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 absolute sm:static top-16 left-0 bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg p-6 sm:p-0 z-10 w-full sm:w-auto`}>
        {pages.map((page) => processPage(page, pathname, setMenuOpen))}
      </ul>
    </div>
  );
}

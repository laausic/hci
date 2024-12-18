"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { act, use } from "react";

type Page = {
  title: string;
  path: `/${string}`;
  };

// We hardcode pages here, but you could get this information from some external source (e.g. CMS, DB, config file, etc).
const pages: Page [] = [

  { title: "Discover", 
    path: "/", 
  },
  {
    title: "VIP",
    path: "/vip",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Test Drive",
    path: "/testdrive",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function processPage(page: Page, pathname: string){
  const activeClass =  page.path === "/"
  ? pathname === page.path
    ? "font-extrabold text-[#519078]"
    : ""
  : pathname.startsWith(page.path)
  ? "font-extrabold text-[#519078]"
  : "";
  return(
  <li key={page.path}>
    <Link href={page.path} className={activeClass}>{page.title}</Link>
  </li>
  );
}

export function Navigation(){
  const pathname = usePathname();
  console.log(pathname);
  return(
  <div className="flex justify-between items-center my-4 mx-[2rem]">
    <p className="font-michroma text-3xl">A N U B I S</p>
      <ul className="flex space-x-6">
      {pages.map((page) => processPage(page, pathname))}
      </ul>
  </div>
  )
}

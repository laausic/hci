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
    title: "VIP Services",
    path: "/vip",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Schedule a Test Drive",
    path: "/testdrive",
  },
  {
    title: "Purchase Inquiry",
    path: "/purchase",
  },
  {
    title: "Contact us",
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
    <ul className="flex space-x-4 my-4 justify-center">
    {pages.map((page)=>processPage(page, pathname))}
    </ul>
  )
}

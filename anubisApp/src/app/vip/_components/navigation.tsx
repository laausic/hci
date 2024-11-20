"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Page = {
  title: string;
  path: `/${string}`;
};
// We hardcode pages here, but you could get this information from some external source (e.g. CMS, DB, config file, etc).
const pages: Page[] = [
  {
    title: "Concierge Support",
    path: "/vip/support",
  },
  {
    title: "Warranty & Maintenance",
    path: "/vip/warranty",
  },
  {
    title: "Future upgrades",
    path: "/vip/upgrades",
  },
];
function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          pathname === page.path ? "font-extrabold text-slate-600 text-[#519078]" : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}
export function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="flex justify-center space-x-4 mt-8">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}
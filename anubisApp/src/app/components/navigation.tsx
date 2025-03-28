"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import "@fontsource/michroma";
import "@fontsource/poppins";
import { supabase } from "@/lib/auth-client";
import { LogOut } from "lucide-react"; // Import the logout icon


type Page = {
  title: string;
  path: `/${string}`;
  protected?: boolean; // Add a `protected` flag for private routes
  hidden?: boolean;
};

export const pages: Page[] = [
  { title: "Discover", path: "/" },
  { title: "VIP", path: "/purchase", hidden: true },
  { title: "Gallery", path: "/gallery" },
  { title: "Test Drive", path: "/testdrive" },
  { title: "Contact", path: "/contact" },
  { title: "VIP", path: "/vip", hidden: true }, //zbog hidden se ne boldira VIP kad upren Join Now
];

function processPage(
  page: Page,
  pathname: string,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isLoggedIn: boolean
) {
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
      <Link
        href={page.path}
        className={`block ${activeClass}`}
        onClick={() => setMenuOpen(false)}
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    checkAuth();

    // Listen for auth changes (e.g., sign in or sign out)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event: string, session: Session | null) => {
        setIsLoggedIn(!!session);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex justify-between items-center my-4 mx-[2rem]">
      {/* Logo Section */}
      <Link href="../">
        <div className="flex items-center justify-center sm:justify-start sm:flex-row flex-col">
          <img src="/img/logo.png" alt="Logo" className="h-14 sm:h-10 mr-4" />
          <p className="font-michroma text-4xl sm:text-3xl max-sm:hidden">
            A N U B I S
          </p>
        </div>
      </Link>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden flex flex-col items-end justify-center space-y-2 rounded-md focus:outline-none"
      >
        <span className="h-0.5 w-12 bg-black rounded"></span>
        <span className="h-0.5 w-10 bg-[#519078] rounded"></span>
        <span className="h-0.5 w-8 bg-black rounded"></span>
      </button>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 absolute sm:static top-16 left-0 bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg p-6 sm:p-0 z-10 w-full sm:w-auto`}
      >
        {processPage(pages[0], pathname, setMenuOpen, isLoggedIn)}
        {/* Render public pages */}
        {!isLoggedIn &&
          processPage(
            pages.find(
              (page) => page.title === "VIP" && page.path === "/purchase"
            )!,
            pathname,
            setMenuOpen,
            isLoggedIn
          )}

        {/* Render "Private" link only if logged in */}
        {isLoggedIn && (
          <li key="private" className="py-2">
            <Link
              href="/vip/private"
              className= {`block ${
                pathname === "/vip/private" ? "font-extrabold text-[#519078]" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Ambassador
            </Link>
          </li>
        )}

        {pages
          .filter((page) => !page.hidden && page.title !== "VIP") // Remove hidden pages & VIP
          .slice(1) // Start from the second page since Discover is already included
          .map((page) => processPage(page, pathname, setMenuOpen, isLoggedIn))}

        {/* If user is logged in, then Sign Out button is shown */}
        {
          isLoggedIn && (
            <li key="sign-out" className="py-2">
              <Link
                href="../"
                onClick={handleSignOut}
                className="block"
              >
              <LogOut className="w-5 h-5" /> {/* Icon here */}
              </Link>
            </li>
          )
          /* : (
          <li key="sign-in" className="py-2">
            <Link
              href="./vip/signin"
              className="block text-[#519078] hover:text-[#3a6b5a]"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </li>)*/
        }
      </ul>
    </div>
  );
}

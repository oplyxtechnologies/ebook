"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/Searchform";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import Clientprofile from "../ClienntProfile/Clientprofile";
import Link from "next/link";

const Navlinks: { label: string; href: string }[] = [
  { label: "Home", href: "/home" },
  { label: "Best Selling", href: "/best" },
  { label: "Novel", href: "/novel" },
  { label: "Features", href: "/features" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <div className="flex flex-col mx-auto px-4 pt-4 pb-0 gap-4">
        {/* Top Row */}
        <div className="flex max-w-7xl justify-between items-center mx-auto gap-4 w-full">
          <Image
            src="/logo.svg"
            alt="Stuzip"
            width={100}
            height={100}
            className="h-10 w-auto"
          />

          <div className="hidden sm:flex max-w-xl flex-1">
            <SearchForm />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Heart className="cursor-pointer text-[#249351] hover:bg-gray-100 p-2 w-[40px] h-[40px] rounded-sm" />
            <ShoppingCart className="cursor-pointer text-[#249351] hover:bg-gray-100 p-2 w-[40px] h-[40px] rounded-sm" />
            <Clientprofile />

            <button
              className="sm:hidden text-[#249351] hover:bg-gray-100 p-2 rounded"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex max-w-7xl justify-center items-center mx-auto gap-6">
          <ul className="flex gap-6">
            {Navlinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#249351] hover:text-[#0a0c16] font-medium transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-4">
            <nav className="w-full">
              <ul className="flex flex-col gap-2 px-4">
                {Navlinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block w-full text-left px-4 py-2 text-[#249351] hover:bg-gray-100 rounded-md transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="px-4">
              <SearchForm />
            </div>
          </div>
        )}
        <hr className="my-2 border-t border-neutral-100" />
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import React, { useState } from "react";
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

  return (
    <div className="flex flex-col mx-auto p-4 gap-4   ">
      {/* Top Row */}
      <div className="flex max-w-7xl justify-between items-center mx-auto gap-4 w-full">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Stuzip"
          width={100}
          height={100}
          className="h-10 w-auto"
        />

        {/* Desktop Search */}
        <div className="hidden sm:flex max-w-xl flex-1">
          <SearchForm />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Heart className="cursor-pointer text-[#249351] hover:bg-gray-100 p-2 w-[40px] h-[40px] rounded-sm" />
          <ShoppingCart className="cursor-pointer text-[#249351] hover:bg-gray-100 p-2 w-[40px] h-[40px] rounded-sm" />
          <Clientprofile />

          {/* Hamburger for mobile */}
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

      <hr className="my-2 border-t border-neutral-100" />

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
    </div>
  );
};

export default Navbar;

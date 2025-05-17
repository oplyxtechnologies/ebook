"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Bell, ChevronDown, Menu, Search, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/browse" },
  { name: "Biography", href: "/browse/biography" },
  { name: "Fantasy", href: "/browse/fantasy" },
  { name: "Latest", href: "/browse/latest" },
  { name: "My List", href: "/browse/my-list" },
  { name: "Browse by Languages", href: "/browse/languages" },
];

const StuzipBrowseNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < 50 || currentY < lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 py-4 backdrop-blur-xl bg-black/20 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo and Nav */}
        <div className="flex items-center gap-4">
          <a href="/browse">
            <Image
              src="/logo.svg"
              alt="Stuzip"
              width={90}
              height={32}
              className="w-auto h-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 text-sm text-white ml-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#4CFFAB] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-white">
          <Search className="w-5 h-5 cursor-pointer block" />
          <div className="relative block">
            <Bell className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              7
            </span>
          </div>
          <div className=" flex items-center gap-1 cursor-pointer">
            <Image
              src="/profile.png"
              alt="User"
              width={28}
              height={28}
              className="rounded"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#141414]/30 px-4  pb-4 pt-2 text-sm space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-white hover:text-[#4CFFAB] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default StuzipBrowseNavbar;

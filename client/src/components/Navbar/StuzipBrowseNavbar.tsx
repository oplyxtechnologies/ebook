"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Bell, ChevronDown, Menu, Search, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/browse" },
  { name: "Genre", href: "/browse/genre" },
  { name: "Latest", href: "/browse/latest" },
  { name: "My List", href: "/browse/my-list" },
  { name: "Browse by Languages", href: "/browse/languages" },
];

const StuzipBrowseNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < 50 || currentY < lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (showSearch) {
      searchRef.current?.focus();
    }
  }, [showSearch]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 py-4 backdrop-blur-xl bg-black/20 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Section: Logo and Navigation */}
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

        {/* Right Section: Actions */}
        <div className="flex items-center gap-4 text-white">
          {/* Search (Desktop) */}
          <div className="relative hidden md:block">
            {!showSearch ? (
              <Search
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowSearch(true)}
              />
            ) : (
              <div className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search books..."
                  className="px-4 py-1 text-white bg-white/10 w-72 rounded-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <X
                  size={18}
                  className="absolute bottom-1.5 right-2 cursor-pointer text-white/60"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                  }}
                />
              </div>
            )}
          </div>

          {/* Bell Notification */}
          <div className="relative">
            <Bell className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              7
            </span>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-1 cursor-pointer">
            <Image
              src="/profile.png"
              alt="User"
              width={28}
              height={28}
              className="rounded"
            />
            <ChevronDown size={16} />
          </div>

          {/* Mobile Toggle */}
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
        <nav className="md:hidden bg-[#141414]/30 px-4 pb-4 pt-2 text-sm space-y-2">
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

          {/* Search (Mobile) */}
          <div className="relative mt-3">
            <input
              type="text"
              ref={searchRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books..."
              className="px-4 py-1 w-full bg-white/10 text-white placeholder-white/60 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <X
              size={18}
              className="absolute top-1.5 right-2 cursor-pointer text-white/60"
              onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
              }}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default StuzipBrowseNavbar;

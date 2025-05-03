"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const links: { label: string; href: string }[] = [
  { label: "My Account", href: "/account" },
  { label: "My Orders", href: "/orders" },
  { label: "My Lists", href: "/lists" },
  { label: "My Wallet", href: "/wallet" },
  { label: "Favourites Items", href: "/favourites" },
  { label: "Vouchers and gift cards", href: "/vouchers" },
  { label: "Service", href: "/service" },
  { label: "My Returns", href: "/returns" },
  { label: "My Reviews", href: "/reviews" },
  { label: "My Guarantees", href: "/guarantees" },
  { label: "Billing Data", href: "/billing" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "Log out", href: "/logout" },
];

const ClientProfile = () => {
  return (
    <div className="relative group inline-block p-4">
      {/* Profile Image */}
      <Image
        src="/profile.webp"
        alt="Profile"
        height={40}
        width={40}
        className="rounded-full h-10 w-10 cursor-pointer object-cover"
      />

      {/* Hover Dropdown */}
      <div className="absolute -translate-y-2 z-50 right-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow w-56">
        <ul className="py-2 text-sm text-gray-700">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientProfile;

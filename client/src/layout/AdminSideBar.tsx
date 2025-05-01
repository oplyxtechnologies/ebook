"use client"; // Needed if you're using App Router
import BookIcon from "@/ui/icons/BookIcon";
import DashboardIcon from "@/ui/icons/DashboardIcon";
import PaymentIcon from "@/ui/icons/PaymentIcon";
import SettingIcon from "@/ui/icons/SettingIcon";
import UserIcon from "@/ui/icons/UserIcon";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import OrderIcon from "@/ui/icons/OrderIcon";

type SidebarItem = {
  name: string;
  link: string;
  icon: ReactNode;
};

const SidebarItems: SidebarItem[] = [
  { name: "Dashboard", link: "/admin", icon: <DashboardIcon /> },
  { name: "Orders", link: "/orders", icon: <OrderIcon /> },
  { name: "Books", link: "/books", icon: <BookIcon /> },
  { name: "Users", link: "/users", icon: <UserIcon /> },
  { name: "Payments", link: "/payments", icon: <PaymentIcon /> },
  { name: "General Setting", link: "/settings", icon: <SettingIcon /> },
];

const AdminSideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-[400px] shadow-xl">
      <h1 className="h-[80px] flex items-center justify-center text-[40px] font-bold">
        e-Book
      </h1>
      <section className="flex flex-col gap-10 justify-center p-5">
        {SidebarItems.map((value, index) => {
          const isActive = pathname === value.link;

          return (
            <Link
              href={`admin/${value.link}`}
              key={index}
              className={`w-full p-3 rounded-md flex gap-3 items-center text-[20px] font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-slate-200 text-black"
                  : "hover:bg-slate-200 text-gray-700"
              }`}
            >
              {value.icon}
              {value.name}
            </Link>
          );
        })}
      </section>
    </aside>
  );
};

export default AdminSideBar;

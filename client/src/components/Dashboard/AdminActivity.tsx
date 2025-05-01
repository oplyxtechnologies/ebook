"use client";
import React from "react";

const activities = [
  {
    date: "2025-04-30 10:45 AM",
    activity: "Added new book: 'Mastering TypeScript'",
  },
  {
    date: "2025-04-29 03:20 PM",
    activity: "Updated user role for user@example.com",
  },
  {
    date: "2025-04-28 11:10 AM",
    activity: "Deleted book: 'Old JavaScript Guide'",
  },
  {
    date: "2025-04-28 09:00 AM",
    activity: "Logged in from IP 192.168.1.101",
  },
];

const AdminActivity = () => {
  return (
    <section className="w-full shadow-xl p-5 h-[430px] rounded-md bg-white ">
      <h1 className="text-xl font-bold mb-4 text-gray-800 ">Admin Activity</h1>
      <div className="overflow-y-auto h-[340px]">
        <table className="min-w-full border border-gray-200 ">
          <thead className="bg-gray-100  text-gray-700 text-left text-sm uppercase">
            <tr>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Activity</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            {activities.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 "
              >
                <td className="py-3 px-4 whitespace-nowrap">{item.date}</td>
                <td className="py-3 px-4">{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminActivity;

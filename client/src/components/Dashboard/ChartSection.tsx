"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import React from "react";

const lineData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 800 },
  { name: "Mar", sales: 600 },
  { name: "Apr", sales: 1400 },
  { name: "May", sales: 1000 },
];

const barData = [
  { name: "Books", sold: 240 },
  { name: "Courses", sold: 456 },
  { name: "E-books", sold: 312 },
];

const pieData = [
  { name: "Admin", value: 2 },
  { name: "User", value: 20 },
  { name: "Super Admin", value: 1 },
];

const COLORS = ["#4f46e5", "#6366f1", "#a78bfa"];

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {/* Line Chart */}
      <div className="bg-white py-5 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4 ">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white  py-5 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4 ">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sold" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white py-5 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4 ">User Roles</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsSection;

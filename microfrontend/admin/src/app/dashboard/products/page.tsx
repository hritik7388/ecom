// src/app/dashboard/products/page.tsx
"use client";

import { useState } from "react";
import { FaProductHunt, FaRegTrashAlt, FaShoppingBag } from "react-icons/fa";
import { FiEdit3, FiSearch } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { PiTrash } from "react-icons/pi";

export default function ProductsPage() {
  const products = [
    { name: "Neptune Long-sleeve", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "out" },
    { name: "Corduroy slim-fit", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Turtleneck knitted T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Wool oversized T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Neptune Long-sleeve", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "out" },
    { name: "Corduroy slim-fit", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Turtleneck knitted T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Wool oversized T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Turtleneck knitted T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Wool oversized T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Turtleneck knitted T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Wool oversized T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Turtleneck knitted T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
    { name: "Wool oversized T-shirt", id: "#7712309", price: "$1,452.500", qty: "1,638", sale: "20", stock: "in" },
  ];

  // ✅ Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(products.length / pageSize);

  return (
    <div className="p-2 md:p-4 lg:p-6 bg-[#f5f6fa] min-h-screen">

      {/* HEADER */}
      <div className="mb-6 md:mb-10">
        <h1 className="text-[20px] md:text-[22px] font-semibold text-gray-800">
          All Products
        </h1>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm">

        {/* TIP */}
        <div className="flex items-start md:items-center gap-3 text-sm text-gray-500 mb-5">
          <FaShoppingBag className="text-orange-500 text-lg" />
          <p className="leading-relaxed bg-gray-50 rounded-2xl">
            Tip search by Product ID: Each product is provided with a unique ID,
            which you can rely on to find the exact product you need.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8 lg:gap-12">

            <div className="flex items-center gap-2 text-sm text-gray-500">
              Showing
              <select className="bg-[#f5f6fa] px-2 py-1.5 rounded-md text-gray-900">
                <option>10</option>
              </select>
              entries
            </div>

            <div className="relative w-full sm:w-auto">
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700" />
              <input
                placeholder="Search here..."
                className="bg-[#f5f6fa] pl-10 pr-10 py-3 rounded-xl w-full sm:w-[300px] md:w-[360px] text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">

            <select className="bg-[#f5f6fa] px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm text-gray-600">
              <option>All Categories</option>
            </select>

            <select className="bg-[#f5f6fa] px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm text-gray-600">
              <option>All Status</option>
            </select>

            <select className="bg-[#f5f6fa] px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm text-gray-600">
              <option>Sort by (Default)</option>
            </select>

            <button className="bg-orange-500 text-white px-5 md:px-8 py-2 md:py-3 rounded-xl text-[13px] md:text-[14px] font-semibold shadow-sm hover:bg-orange-600 transition">
              + Add new
            </button>

          </div>
        </div>

        {/* TABLE WRAPPER */}
        <div className="overflow-x-auto">

          {/* HEADER */}
          <div className="min-w-[900px] grid grid-cols-[2.8fr_1.5fr_1fr_1fr_0.8fr_1.2fr_1.5fr_1fr] px-4 py-3 text-[12px] text-gray-900 font-semibold uppercase bg-[#f8f9fb] rounded-xl">
            <div>Product</div>
            <div>Product ID</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Sale</div>
            <div>Stock</div>
            <div>Start date</div>
            <div>Action</div>
          </div>

          {/* ROWS */}
          <div className="min-w-[900px]">
            {products
              .slice((page - 1) * pageSize, page * pageSize)
              .map((p, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[2.8fr_1.5fr_1fr_1fr_0.8fr_1.2fr_1.5fr_1fr] px-4 py-4 items-center rounded-xl text-sm text-gray-700 ${i % 2 === 0 ? "bg-white" : "bg-[#f8f9fb]"
                    } hover:bg-orange-50`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src="https://i.pravatar.cc/40"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-md"
                    />
                    <div className="font-medium text-xs md:text-sm">
                      {p.name}
                    </div>
                  </div>

                  <div className="text-gray-900 text-xs md:text-sm">{p.id}</div>
                  <div className="text-xs md:text-sm">{p.price}</div>
                  <div className="text-xs md:text-sm">{p.qty}</div>
                  <div className="text-xs md:text-sm">{p.sale}</div>

                  <div>
                    {p.stock === "in" ? (
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-[10px] md:text-xs font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-500 px-2 py-1 rounded-md text-[10px] md:text-xs font-medium">
                        Out of stock
                      </span>
                    )}
                  </div>

                  <div className="text-gray-900 text-xs md:text-sm">
                    08/24/2024
                  </div>

                  <div className="flex items-center gap-3 md:gap-7 text-m md:text-xl">
                    <IoEyeOutline className="text-orange-500 cursor-pointer" />
                    <FiEdit3 className="text-green-500 cursor-pointer" />
                    <PiTrash className="text-red-500 cursor-pointer" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-900">

          <p>
            Showing {(page - 1) * pageSize + 1}–
            {Math.min(page * pageSize, products.length)} of {products.length}
          </p>

          <div className="flex items-center gap-2">

            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
            >
              ‹
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const pageNumber = i + 1;

              return (
                <button
                  key={i}
                  onClick={() => setPage(pageNumber)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm
                    ${page === pageNumber
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-900"
                    }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
            >
              ›
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
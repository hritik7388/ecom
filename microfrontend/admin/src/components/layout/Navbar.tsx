// src/components/layout/Navbar.tsx
"use client"

import { FaBell, FaMoon } from "react-icons/fa"
import { FiSearch, FiSettings, FiMail, FiMaximize2 } from "react-icons/fi"
import { HiOutlineViewGrid } from "react-icons/hi"

export default function Navbar() {

  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center sticky top-0 z-40">

      <div className="relative w-[320px]">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg w-full outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-6">

        <img
          src="https://flagcdn.com/w40/gb.png"
          className="w-6 h-6 rounded-full hidden lg:block"
        />

            <div className="relative w-10 h-10 items-center justify-center bg-white rounded-full shadow-md hidden lg:flex">
          <FaMoon className="text-gray-600 text-lg" />
          <span className="absolute top-1 right-1   w-2 h-2 rounded-full"></span>
        </div>

        <div className="relative w-10 h-10 items-center justify-center bg-white rounded-full shadow-md hidden lg:flex">
          <FaBell className="text-gray-600 text-lg" />
          <span className="animate-slow-blink absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </div>

        <div className="relative w-10 h-10 items-center justify-center bg-white rounded-full shadow-md hidden lg:flex">
          <FiMail className="text-gray-600 text-lg" />
          <span className="animate-slow-blink  absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </div>

        <div className="w-10 h-10 items-center justify-center bg-white rounded-full shadow-md hidden lg:flex">
          <FiMaximize2 className="text-gray-600 text-lg" />
        </div>

        <div className="w-10 h-10 items-center justify-center bg-white rounded-full shadow-md hidden lg:flex">
          <HiOutlineViewGrid className="text-gray-600 text-lg" />
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full w-10 h-10"
          />

          <div className="text-sm">
            <p className="font-semibold text-gray-800">Kristin Watson</p>
            <p className="text-gray-600 text-xs">Sale Administrator</p>
          </div>
        </div>

        <div className="h-6 w-[1px] bg-gray-300"></div>

        <div className="w-10 h-10 flex items-center justify-center bg-white  ">
          <FiSettings className="text-gray-600 text-2xl animate-[spin_2s_linear_infinite]" />
        </div>

      </div>
    </div>
  )
}
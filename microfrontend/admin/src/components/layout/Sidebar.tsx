// src/components/layout/Sidebar.tsx
"use client";

import { useState, useEffect } from "react";
import {
  FaHome,
  FaBox,
  FaLayerGroup,
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaChartPie,
  FaGlobe,
  FaSignOutAlt,
  FaAngleRight,
  FaAngleLeft,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {

  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const [hidden, setHidden] = useState(false);

  // ✅ NEW (submenu control)
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {

    const handleResize = () => {

      const width = window.innerWidth;

      if (width <= 512) {
        setHidden(true);
        setOpen(false);
      } else if (width <= 1024) {
        setHidden(false);
        setOpen(false);
      } else {
        setHidden(false);
        setOpen(true);
      }

    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  useEffect(() => {

    window.dispatchEvent(
      new CustomEvent("sidebarWidth", {
        detail: open ? 270 : 80
      })
    );

  }, [open]);

  const menu = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    {
      name: "Product",
      icon: <FaBox />,
      submenu: [
        { name: "All Products", path: "/dashboard/products" },
        { name: "Add Product", path: "/dashboard/products/add" },
        { name: "Edit Product", path: "/dashboard/products/edit" },
         { name: "Product Detail", path: "/dashboard/products/productDetails" } 
      ]
    },
    { name: "Category", icon: <FaLayerGroup /> },
    { name: "Attributes", icon: <FaLayerGroup /> },
    { name: "Order", icon: <FaShoppingCart /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Store Setting", icon: <FaGlobe /> },
    { name: "Report", icon: <FaChartPie /> },
    { name: "Setting", icon: <FaCog /> },
    { name: "Log Out", icon: <FaSignOutAlt /> }
  ];

  if (hidden) return null;

  return (

    <div
      className={`fixed left-0 top-0 h-screen bg-white border-r transition-all duration-300 flex flex-col
      ${open ? "w-[270px]" : "w-[80px]"}`}
    >

      {/* SCROLL AREA */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">

        {/* LOGO */}
        <div className="flex items-center justify-between px-6 py-6 sticky top-0 bg-white">

          {open && (
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-orange-500 text-xl">❯❯</span> Dataflow
            </h1>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 text-lg"
          >
            {open ? <FaAngleLeft /> : <FaAngleRight />}
          </button>

        </div>

        {/* MENU */}
        <ul className="mt-4 flex flex-col gap-2">

          {menu.map((item, i) => {

            const isParentActive =
              item.path && pathname.startsWith(item.path);

            const isSubActive =
              item.submenu &&
              item.submenu.some(sub => pathname === sub.path);

            return (
              <li key={i} className="flex flex-col">

                {/* MAIN ITEM */}
                <div
                  onClick={() => {
                    if (item.submenu) {
                      setOpenMenu(openMenu === item.name ? null : item.name);
                    } else if (item.path) {
                      router.push(item.path);
                    }
                  }}
                  className={`flex items-center justify-between px-6 py-4 cursor-pointer transition
                  ${(isParentActive || isSubActive)
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"}`}
                >

                  <div className="flex items-center gap-4 text-lg">
                    <span className="text-xl">{item.icon}</span>

                    {open && (
                      <span className="font-semibold text-[16px] tracking-wide">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* ARROW */}
                  {item.submenu && open && (
                    <FaAngleRight
                      className={`text-gray-400 transition-transform duration-200
                      ${openMenu === item.name ? "rotate-90 text-orange-500" : ""}`}
                    />
                  )}
                </div>

                {/* SUBMENU */}
                {item.submenu && open && openMenu === item.name && (
                  <div className="ml-14 flex flex-col gap-3 pb-3">

                    {item.submenu.map((sub, idx) => {

                      const active = pathname === sub.path;

                      return (
                        <div
                          key={idx}
                          onClick={() => router.push(sub.path)}
                          className={`cursor-pointer text-[14px] transition
                          ${active
                              ? "text-orange-500 font-semibold"
                              : "text-gray-500 hover:text-orange-500"}`}
                        >
                          • {sub.name}
                        </div>
                      );
                    })}

                  </div>
                )}

              </li>
            );
          })}

        </ul>

        {/* SUPPORT */}
        {open && (
          <div className="px-6 pb-8 border-t mt-6 pt-6">

            <p className="text-gray-400 text-xs uppercase mb-4 tracking-wider">
              Support
            </p>

            <div className="flex flex-col gap-4 text-[15px] text-gray-700">
              <p className="hover:text-orange-500 cursor-pointer">
                Terms & Conditions
              </p>
              <p className="hover:text-orange-500 cursor-pointer">
                FAQs
              </p>
              <p className="hover:text-orange-500 cursor-pointer">
                Privacy Policy
              </p>
            </div>

            {/* CONNECT */}
            <p className="text-gray-400 text-xs uppercase mt-8 mb-4 tracking-wider">
              Connect Us
            </p>

            <div className="flex gap-5 text-gray-600 text-lg">
              <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
              <FaYoutube className="hover:text-orange-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
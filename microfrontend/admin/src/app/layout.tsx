// src/app/layout.tsx
"use client";

import "./globals.css";
import { useEffect, useState } from "react";

import Sidebar from "@/src/components/layout/Sidebar";
import Navbar from "@/src/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [sidebarWidth, setSidebarWidth] = useState(270);

  useEffect(() => {

    const handleWidth = (e: any) => {
      setSidebarWidth(e.detail);
    };

    window.addEventListener("sidebarWidth", handleWidth);

    return () =>
      window.removeEventListener("sidebarWidth", handleWidth);

  }, []);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">

        <Sidebar />

        <div
          className="flex flex-col h-full-screen bg-gray-100 transition-all duration-300"
          style={{ marginLeft: sidebarWidth }}
        >

          <Navbar />

          <main className="p-6 flex-1">
            {children}
          </main>



        </div>

      {/* FOOTER */}
      <footer className="bg-white justify-center flex  py-6 text-sm text-gray-900">
        © 2026 Dataflow Dashboard. All rights reserved.
      </footer>


      </body>
      

    </html>
  );
}
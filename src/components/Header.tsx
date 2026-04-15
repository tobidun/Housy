"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm border-b"
          : "bg-white shadow-sm border-b"
      }`}
    >
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-gray-900">Ho</span>
              <span className="text-[#C0581B]">usy</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/"
                  ? "text-[#C0581B]"
                  : "text-gray-600 hover:text-[#C0581B]"
              }`}
            >
              Home
            </a>
            <a
              href="/short-let"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/short-let"
                  ? "text-[#C0581B]"
                  : "text-gray-600 hover:text-[#C0581B]"
              }`}
            >
              Short-Let
            </a>
            <a
              href="/co-living"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/co-living"
                  ? "text-[#C0581B]"
                  : "text-gray-600 hover:text-[#C0581B]"
              }`}
            >
              Co-Living
            </a>
            <a
              href="/student"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/student"
                  ? "text-[#C0581B]"
                  : "text-gray-600 hover:text-[#C0581B]"
              }`}
            >
              Student
            </a>
            <a
              href="/annual-rentals"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/annual-rentals"
                  ? "text-[#C0581B]"
                  : "text-gray-600 hover:text-[#C0581B]"
              }`}
            >
              Annual Rentals
            </a>
            <a
              href="#"
              className="text-gray-600 text-[14px] hover:text-[#C0581B] transition-colors"
            >
              Create Account
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

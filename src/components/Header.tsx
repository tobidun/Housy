"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playfair } from "@/lib/fonts";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-sm shadow-sm border-b"
            : "bg-white shadow-sm border-b"
        }`}
      >
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <span className={`text-xl font-bold ${playfair.className}`}>
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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 ml-auto mr-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 top-16 bg-white shadow-lg p-8"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <nav className="space-y-3 text-center">
                <motion.a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[14px] font-medium transition-colors ${
                    pathname === "/"
                      ? "text-[#C0581B]"
                      : "text-gray-600 hover:text-[#C0581B]"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="/short-let"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[14px] font-medium transition-colors ${
                    pathname === "/short-let"
                      ? "text-[#C0581B]"
                      : "text-gray-600 hover:text-[#C0581B]"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  Short-Let
                </motion.a>
                <motion.a
                  href="/co-living"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[14px] font-medium transition-colors ${
                    pathname === "/co-living"
                      ? "text-[#C0581B]"
                      : "text-gray-600 hover:text-[#C0581B]"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Co-Living
                </motion.a>
                <motion.a
                  href="/student"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[14px] font-medium transition-colors ${
                    pathname === "/student"
                      ? "text-[#C0581B]"
                      : "text-gray-600 hover:text-[#C0581B]"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  Student
                </motion.a>
                <motion.a
                  href="/annual-rentals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[14px] font-medium transition-colors ${
                    pathname === "/annual-rentals"
                      ? "text-[#C0581B]"
                      : "text-gray-600 hover:text-[#C0581B]"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Annual Rentals
                </motion.a>
                <motion.a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 text-[14px] hover:text-[#C0581B] transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  Create Account
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

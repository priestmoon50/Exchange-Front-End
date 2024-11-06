// src/app/components/Header.tsx

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "صفحه اصلی", href: "/" },
  { label: "قیمت رمز ارزها", href: "/crypto-prices" },
  { label: "مقالات", href: "/articles" },
  { label: "تماس با ما", href: "/contact" },
  { label: "سایر", href: "/others" },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("صفحه اصلی");

  const handleNavClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <header className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="Logo" width={80} height={72} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link href={item.href} key={item.label} passHref>
              <span
                onClick={() => handleNavClick(item.label)}
                className={`relative cursor-pointer text-lg font-medium transition-colors duration-300 ${
                  item.label === activeItem ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    item.label === activeItem ? "w-full" : "w-0"
                  }`}
                ></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* User Info and Avatar */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-start bg-white bg-opacity-90 p-2 rounded-md shadow-md">
            <span className="font-bold text-lg">علی اسماعیل</span>
            <span className="text-gray-500 text-sm">0912-000-0000</span>
          </div>
          <Image
            src="/images/user-avatar.webp"
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="bg-white w-64 h-full shadow-lg p-4">
              <button
                onClick={() => setDrawerOpen(false)}
                className="mb-6 text-gray-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link href={item.href} key={item.label} passHref>
                    <span
                      onClick={() => {
                        handleNavClick(item.label);
                        setDrawerOpen(false);
                      }}
                      className={`text-lg font-medium ${
                        item.label === activeItem ? "text-blue-600 font-bold" : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
